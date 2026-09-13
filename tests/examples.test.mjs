import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import vm from 'node:vm';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const EXAMPLES = path.join(ROOT, 'examples');
const PREVIEWS = path.join(ROOT, 'assets', 'previews');

const stems = (dir, extension) => fs.readdirSync(dir)
  .filter((name) => name.endsWith(extension))
  .map((name) => path.basename(name, extension))
  .sort();

function assertBalanced(code) {
  const pairs = { ')': '(', ']': '[', '}': '{' };
  const stack = [];
  let i = 0;
  while (i < code.length) {
    const ch = code[i];
    if (ch === "'" || ch === '"' || ch === '`') {
      const quote = ch;
      i += 1;
      while (i < code.length && code[i] !== quote) {
        if (code[i] === '\\') i += 1;
        i += 1;
      }
    } else if (ch === '/' && code[i + 1] === '/') {
      while (i < code.length && code[i] !== '\n') i += 1;
    } else if (ch === '/' && code[i + 1] === '*') {
      i += 2;
      while (i < code.length && !(code[i] === '*' && code[i + 1] === '/')) i += 1;
      i += 1;
    } else if (ch === '(' || ch === '[' || ch === '{') {
      stack.push(ch);
    } else if (pairs[ch]) {
      if (stack.pop() !== pairs[ch]) throw new SyntaxError(`unexpected ${ch}`);
    }
    i += 1;
  }
  if (stack.length) throw new SyntaxError('unclosed bracket');
}

test('every example has exactly one preview', () => {
  assert.deepEqual(stems(EXAMPLES, '.html'), stems(PREVIEWS, '.webp'));
});

test('all examples preserve the production motion and performance contract', () => {
  for (const name of fs.readdirSync(EXAMPLES).filter((item) => item.endsWith('.html'))) {
    const source = fs.readFileSync(path.join(EXAMPLES, name), 'utf8');
    assert.match(source, /<meta\s+charset=/i, `${name} is missing a charset`);
    assert.match(source, /<title>[^<]+<\/title>/i, `${name} is missing a title`);
    assert.match(source, /prefers-reduced-motion/i, `${name} cannot disable motion`);
    assert.doesNotMatch(source, /backdrop-filter\s*:/i, `${name} uses forbidden backdrop-filter`);

    for (const match of source.matchAll(/<script(\s[^>]*)?>([\s\S]*?)<\/script>/gi)) {
      const attrs = match[1] || '';
      const code = match[2];
      if (/type\s*=\s*["']module["']/i.test(attrs)) {
        // classic parsers reject module syntax; fall back to a bracket-balance check
        assert.doesNotThrow(() => assertBalanced(code), `${name} contains unbalanced module script`);
      } else {
        // vm.Script compiles as a classic script, so illegal top-level return is rejected
        assert.doesNotThrow(() => new vm.Script(code), `${name} contains invalid inline JavaScript`);
      }
    }
  }
});

test('aesthetic directions reference keeps all eight numbered headings', () => {
  const doc = fs.readFileSync(path.join(ROOT, 'references', 'aesthetic-directions.md'), 'utf8');
  const headings = doc.match(/^## \d+\. /gm) || [];
  assert.equal(headings.length, 8, 'aesthetic-directions.md must document exactly 8 directions');
  assert.deepEqual(headings.map((h) => h.match(/\d+/)[0]), ['1', '2', '3', '4', '5', '6', '7', '8']);
});

test('SKILL.md version stays in sync with package.json', () => {
  const skill = fs.readFileSync(path.join(ROOT, 'SKILL.md'), 'utf8');
  const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'));
  const match = skill.match(/^version:\s*(\S+)/m);
  assert.ok(match, 'SKILL.md must declare a version');
  assert.equal(match[1], pkg.version, 'SKILL.md version must equal package.json version');
});

test('README project structure lists every example file', () => {
  const readme = fs.readFileSync(path.join(ROOT, 'README.md'), 'utf8');
  for (const name of fs.readdirSync(EXAMPLES).filter((item) => item.endsWith('.html'))) {
    assert.ok(readme.includes(name), `README must list ${name}`);
  }
});

test('the usage guide documents the same eight directions as the reference', () => {
  const doc = fs.readFileSync(path.join(ROOT, 'references', 'aesthetic-directions.md'), 'utf8');
  const readme = fs.readFileSync(path.join(ROOT, 'README.md'), 'utf8');
  const count = (doc.match(/^## \d+\. /gm) || []).length;
  assert.equal(count, 8, 'reference must document 8 directions');
  assert.match(readme, /八种/, 'README must mention the eight directions');
});
