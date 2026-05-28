# Changelog

本项目所有重要变更记录于此。

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
