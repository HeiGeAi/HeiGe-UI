# Changelog

本项目所有重要变更记录于此。

## [1.0.1] - 2026-05-28

生产可用性加固，修复全部样例的两类问题。

### 字体
- 为每个样例的中文字体栈补上系统兜底（PingFang SC / Microsoft YaHei / Hiragino Sans GB），Google Fonts 加载失败或被墙时中文也能正常显示，不再崩坏。
- acg-stellar：把渲染中文会出错（缺字 / 异体）的日文字体（Mochiy Pop One、Zen Maru Gothic）换成简体中文显示字体 ZCOOL KuaiLe + 系统兜底。
- 拉丁展示字体（Anton、Bagel Fat One、Archivo 等）补系统兜底。

### 性能
- 移除全部 backdrop-filter；不再对模糊元素做位移 / 缩放动画。
- 把动画化的 text-shadow / box-shadow 发光改为静态发光，去掉逐帧重绘。
- 每个样例的无限动画收敛到签名动画，且只动 transform / opacity（合成器友好）。
- 移除 forge 常驻的 requestAnimationFrame 光标特效；wrapped 计数动画到目标值即停。

### 排版
- 修复大标题折行把单字 / 标点甩到独立一行的问题（孤字）。forge「界面不是生成的，是锻造的。」、swiss「四件事，把对账这件苦差事做完。」不再孤字。
- 标题按最长一行收敛字号并锁定整行不折断；居中正文用 text-wrap:balance 让换行均衡，移动端也不孤字。
- 修正 swiss 用 ch 单位限宽对中文失效导致的溢出折行（ch 是拉丁数字宽，远窄于中文字宽）。

## [1.0.0] - 2026-05-28

首个版本。

### 核心
- 原创方法论「导演一段叙事」，五道锻造工序：开场定调 / 节奏曲线 / 一屏一主角 / 签名时刻 / 反 AI 体检。
- 五步使用流程：定调 → 编排节奏 → 锁定主角与签名时刻 → 写生产级代码 → 反 AI 体检 + 气场复检。

### 设计资产
- `references/aesthetic-directions.md`：7 种极端气质方向库，每种给出色彩/字体/排版/动效/签名时刻的具体打法。
- `references/anti-slop-checklist.md`：六大类反 AI 体检清单，作为交付门槛。
- `references/pacing-templates.md`：落地页 / Dashboard / 作品集 / 活动页的节奏曲线模板。

### 样例画廊（同一套方法论 × 十种气质）

基础气质：
- `examples/forge-landing.html`：凶悍/工业（熔铁橙×钢黑）。
- `examples/editorial-journal.html`：高定/杂志（纸墨×牛血红 衬线）。
- `examples/neon-nightshift.html`：赛博霓虹（霓虹品红/青 网格地平线）。
- `examples/playful-boing.html`：玩具（糖果撞色 弹跳吉祥物）。
- `examples/swiss-ledger.html`：瑞士极简（黑白灰+信号红 严格栅格）。

年轻/潮流向：
- `examples/y2k-gaga.html`：Y2K 千禧辣妹（金属铬×全息撞色）。
- `examples/brat-noisepark.html`：brat 酸性极简（史莱姆绿×全小写模糊）。
- `examples/streetwear-drop.html`：街头潮牌（安全橙×警示胶带×倒计时）。
- `examples/acg-stellar.html`：二次元 ACG（樱粉×速度线×漫画分格）。
- `examples/wrapped-soundwave.html`：Wrapped 撞色（全屏色块×巨字数据卡）。

全部为零依赖单文件，scroll-reveal 带降级兜底，尊重 prefers-reduced-motion，响应式重排。
