# 中国近代史时间轴

一个展示中国近代史（1840-1949）的交互式时间轴网站，基于 Docusaurus 构建。

## 访问地址

https://chxu11.github.io/timelineWeb/

## 项目简介

本项目是一个中国近代史学习工具，以时间轴的形式展示了从鸦片战争到新中国成立的重要历史事件。

### 主要特点

- 7个历史时期，每个时期都有独特的颜色标识
- 详细的事件介绍（背景、经过、影响）
- 不平等条约特殊标记（红色边框 + 📜 图标）
- 可展开/折叠的事件详情
- 响应式设计，支持移动端访问

### 历史时期

1. **1840-1860** - 列强入侵与民族觉醒
2. **1860-1895** - 自强求富的探索
3. **1895-1911** - 救亡图存的高涨
4. **1912-1928** - 新旧交替的动荡
5. **1928-1937** - 国共对峙与土地革命
6. **1937-1945** - 全民族抗战
7. **1945-1949** - 解放战争与新中国诞生

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm start

# 访问 http://localhost:3000/timelineWeb/
```

## 部署到 GitHub Pages

### 方法一：自动部署（推荐）

本项目已配置 GitHub Actions 自动部署，每次推送到 `main` 分支时会自动构建并部署。

1. 推送代码到 GitHub 仓库
2. 在 GitHub 仓库中启用 Pages：
   - 进入仓库 Settings → Pages
   - Source 选择 "GitHub Actions"
3. 等待部署完成，访问 https://chxu11.github.io/timelineWeb/

### 方法二：手动部署

```bash
# 构建生产版本
npm run build

# 部署到 GitHub Pages
GIT_USER=chxu11 npm run deploy
```

### 方法三：使用 GitHub Actions 手动触发

1. 进入 GitHub 仓库的 Actions 页面
2. 选择 "Docusaurus部署到 GitHub Pages" 工作流
3. 点击 "Run workflow" 手动触发部署

## 项目结构

```
mydoc/
├── docs/                    # 文档 Markdown 文件
├── src/
│   ├── components/         # 自定义 React 组件
│   ├── css/               # 全局样式
│   └── pages/             # 自定义页面
│       ├── index.js       # 首页（时间轴组件）
│       └── timeline.css   # 时间轴样式
├── static/                 # 静态资源
├── docusaurus.config.js    # 主配置文件
├── sidebars.js            # 侧边栏配置
└── package.json
```

## 技术栈

- **Docusaurus** - 静态网站生成器
- **React** - UI 框架
- **GitHub Pages** - 托管平台
- **GitHub Actions** - CI/CD 部署

## 更新日志

- 2026-07-07: 将首页替换为中国近代史时间轴内容
- 2026-07-07: 部署到 https://chxu11.github.io/timelineWeb/

## 许可证

MIT
