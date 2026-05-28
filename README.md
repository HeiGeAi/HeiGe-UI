# heige-ui

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-ff4d12.svg)
![Claude](https://img.shields.io/badge/Claude-Skill-orange.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

**界面锻造系统 | Forge, don't generate**

界面不是生成的，是锻造的。

[这是什么](#这是什么-what-is-this) • [方法论](#核心方法论-五道锻造工序) • [样例画廊](#样例画廊-gallery) • [快速开始](#快速开始-quick-start) • [使用指南](#使用指南-usage-guide)

</div>

---

## 这是什么 What is this

一个让 AI 做出**有气场、有记忆点、一眼不像 AI 做的**产品级前端界面的 skill。

大多数 AI 做出来的界面，是把组件从货架上扯下来平铺在画布上：居中卡片、紫蓝渐变、圆角阴影、四平八稳。能用，但没人记得住。

heige-ui 换一种做法：**把界面当成一段有节奏的叙事来导演。** 它有开场、有张弛、有主角、有一个让人记住的瞬间。

**不是**又一个组件模板库，而是一套从真实商业项目里打磨出来的设计方法论：

- ✅ 五道锻造工序，每件作品都要过一遍
- ✅ 七种极端气质方向，每种给到可直接落地的打法
- ✅ 反 AI 体检清单，把 AI slop 扼杀在交付前
- ✅ 动手前先定调，出货前过体检
- ✅ 十个跨气质样例，同一套方法论产出完全不同的作品
- ✅ 零依赖单文件，跨平台通用

**适用场景**：产品官网、落地页、Dashboard、组件库、营销页、App 界面、Web 应用、作品集、活动页。

**支持平台**：Claude Code、Cursor、Windsurf、Cline、Aider、OpenClaw、Hermes、ChatGPT、Claude.ai 等。

> 别人做的是网页，你做的是带签名的作品。一眼能认出，这是锻造的，不是生成的。

---

## 为什么需要它 Why this matters

| 普通 AI 生成的界面 | heige-ui 锻造的界面 |
|---|---|
| 居中卡片 + 紫蓝渐变 + 圆角阴影，能用但没人记得住 | 有气场、有记忆点，一眼认出是人锻造的 |
| 组件平铺，一个调子从头到尾 | 有节奏的叙事：开场、张弛、高潮、收束 |
| 什么都想突出，结果什么都不突出 | 一屏一主角，靠对比放大主角 |
| 千篇一律，可被任何模板替换 | 每个作品都有别人不会做的签名时刻 |
| AI slop 味重，紫蓝渐变满天飞 | 出货前强制过反 AI 体检，命中即重做 |

---

## 核心方法论 五道锻造工序

写代码之前先想清楚：用户从打开页面到离开，你想让他经历一段什么样的体验？平铺思维问的是「这页放哪些模块」，导演思维问的是「节奏是什么、高潮在哪、走的时候记住了什么」。

### ⚒️ 01 开场定调 Cold Open
首屏 3 秒决定一切。它不是用来摆标题和按钮的，是用来立人设、定气质的。

### 🌊 02 节奏曲线 Pacing Curve
页面像电影一样有张弛：冲击 → 呼吸 → 推进 → 高潮 → 收束。不要均匀平铺、一个调子到底。

### 🎯 03 一屏一主角 One Protagonist
每一屏只能有一个视觉主角，其余全是配角。什么都想突出 = 什么都不突出。

### ✦ 04 签名时刻 Signature Moment
每个作品至少要有一个别人不会做、也不太敢做的记忆点。这是作者签名，一个就够，但必须有。

### 🔍 05 反 AI 体检 Anti-Slop Check
出货前强制过一遍体检：紫蓝渐变？居中卡片三件套？默认字体裸奔？命中任何一条都要回去重做。这一步不是可选的，是交付门槛。

完整方法论与使用流程见 [`SKILL.md`](SKILL.md)。

---

## 七种气质方向

定调时从中选一个**极端**方向，或在此基础上自创。原则：宁可走极端走出记忆点，也不要选「现代简约」这种安全的废话。

凶悍/工业 · 优雅/高定 · 克制/极简 · 张扬/极繁 · 复古/未来 · 有机/自然 · 玩味/玩具

每种气质的色彩、字体、排版、动效、签名时刻打法见 [`references/aesthetic-directions.md`](references/aesthetic-directions.md)。

---

## 样例画廊 Gallery

一套方法论，跨气质能产出完全不同的作品。每个样例都是用本方法论现场锻造的零依赖单文件，打开即看效果。

**基础气质**

| 样例 | 气质 | 主题 |
|---|---|---|
| [`forge-landing.html`](examples/forge-landing.html) | 凶悍/工业 | heige-ui 自己的落地页 |
| [`editorial-journal.html`](examples/editorial-journal.html) | 高定/杂志 | 独立文化季刊《潮间带》 |
| [`neon-nightshift.html`](examples/neon-nightshift.html) | 赛博霓虹 | AI 编程夜班工具 |
| [`playful-boing.html`](examples/playful-boing.html) | 玩具 | 习惯养成 App |
| [`swiss-ledger.html`](examples/swiss-ledger.html) | 瑞士极简 | 现金流分析产品 |

**年轻/潮流向**

| 样例 | 气质 | 主题 |
|---|---|---|
| [`y2k-gaga.html`](examples/y2k-gaga.html) | Y2K 千禧辣妹 | Gen-Z 拍照社交 App |
| [`brat-noisepark.html`](examples/brat-noisepark.html) | brat 酸性极简 | 独立音乐节 |
| [`streetwear-drop.html`](examples/streetwear-drop.html) | 街头潮牌 | 潮牌限量发售 |
| [`acg-stellar.html`](examples/acg-stellar.html) | 二次元 ACG | 音游手游 |
| [`wrapped-soundwave.html`](examples/wrapped-soundwave.html) | Wrapped 撞色 | 音乐年度报告 |

本地预览：
```bash
git clone https://github.com/HeiGeAi/heige-ui.git
cd heige-ui && python3 -m http.server 8753
# 浏览器打开 http://localhost:8753/examples/
```

---

## 快速开始 Quick Start

### 方法 1：支持 Skill 系统的平台（推荐）

适用于 Claude Code、Cursor、Windsurf、Cline：

```bash
git clone https://github.com/HeiGeAi/heige-ui.git
cp -r heige-ui ~/.claude/skills/
```

然后直接说：

```
用 heige-ui 做个落地页
设计一个有气场的产品官网
帮我把这个界面做得一眼不像 AI 做的
```

### 方法 2：作为 System Prompt 使用

适用于 ChatGPT、Claude.ai、Aider、OpenClaw、Hermes：

1. 下载本仓库的 `SKILL.md`
2. 将内容粘贴到 AI 助手的 system prompt 或自定义指令中
3. 直接对话使用，无需特殊命令

---

## 使用指南 Usage Guide

heige-ui 会带你走完整个锻造流程：

1. **定调**：先和你确认这个界面给谁、解决什么问题、什么气质方向（七种里挑一个极端的）。
2. **编排节奏**：排一遍页面的节奏曲线，首屏怎么开场、高潮放哪、怎么收束。
3. **锁定主角与签名时刻**：逐屏确认视觉主角，全局确认这一页的记忆点是什么。
4. **写生产级代码**：真实可运行的代码，字体做性格，间距对比有大胆决策。
5. **反 AI 体检**：出货前过一遍体检清单，命中 AI slop 特征的全部干掉。

### 场景示例

**做一个产品落地页**
```
用 heige-ui 给我做一个 AI 笔记工具的落地页，气质要凶悍一点
```

**美化现有界面**
```
这个 Dashboard 太像 AI 做的了，用 heige-ui 帮我重新锻造一版
```

**指定气质方向**
```
用 heige-ui 做个活动页，走 Y2K 千禧风
```

---

## 平台兼容性 Platform Compatibility

| 平台 | 文件读写 | 用户交互 | 安装方式 |
|------|---------|---------|---------|
| **Claude Code** | ✅ | ✅ | skill 目录 |
| **Cursor** | ✅ | ✅ | skill 目录 |
| **Windsurf** | ✅ | ✅ | skill 目录 |
| **Cline** | ✅ | ✅ | skill 目录 |
| **Aider / OpenClaw / Hermes** | ✅ | ⚠️ | System prompt |
| **ChatGPT / Claude.ai** | ❌ | ✅ | 自定义指令 |

输出为标准 HTML / React 代码，不依赖特定运行时，理论上任何能写代码的 AI 助手都能用。

---

## 项目结构 Project Structure

```
heige-ui/
├── SKILL.md                      # Skill 主文件：方法论 + 使用流程
├── references/                   # 设计资产
│   ├── aesthetic-directions.md   # 七种气质方向库（每种给到具体打法）
│   ├── anti-slop-checklist.md    # 反 AI 体检清单（交付门槛）
│   └── pacing-templates.md       # 节奏曲线模板（各类页面的张弛排布）
├── examples/                     # 同一套方法论 × 十种气质的样例画廊
│   ├── forge-landing.html
│   ├── editorial-journal.html
│   ├── neon-nightshift.html
│   ├── playful-boing.html
│   ├── swiss-ledger.html
│   ├── y2k-gaga.html
│   ├── brat-noisepark.html
│   ├── streetwear-drop.html
│   ├── acg-stellar.html
│   └── wrapped-soundwave.html
├── LICENSE
├── CHANGELOG.md
└── README.md
```

---

## 版本历史 Version History

### v1.0.0 (2026-05-28)
- 🎉 首次发布
- ⚒️ 原创方法论「导演一段叙事」，五道锻造工序：开场定调 / 节奏曲线 / 一屏一主角 / 签名时刻 / 反 AI 体检
- 📐 五步使用流程：定调 → 编排节奏 → 锁定主角与签名时刻 → 写生产级代码 → 反 AI 体检
- 🎨 七种气质方向库 + 反 AI 体检清单 + 节奏曲线模板
- 🖼️ 十个跨气质样例，覆盖基础气质与年轻潮流向，全部零依赖单文件

---

## 许可证 License

MIT License，详见 [LICENSE](LICENSE) 文件。

---

## 联系方式 Contact

- **Author**: Blake 黑哥
- **WeChat**: 488137
- **GitHub**: [@HeiGeAi](https://github.com/HeiGeAi)

---

<div align="center">

**如果这个项目对你有帮助，请给个 ⭐️ Star 支持一下！**

Made by Blake 黑哥
锻造，而不是生成。

</div>
