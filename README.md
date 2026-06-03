# LSRain的小屋

我的个人博客，使用 [Astro](https://astro.build) 构建。

## 功能特性

- ✅ Markdown 写作
- ✅ 数学公式支持 (KaTeX)
- ✅ 代码高亮 (Shiki)
- ✅ 深色模式
- ✅ 响应式设计
- ✅ RSS 订阅
- ✅ Sitemap 生成
- ✅ 标签分类
- ✅ 系列笔记

## 技术栈

- [Astro](https://astro.build) - 静态站点生成
- [TypeScript](https://www.typescriptlang.org/) - 类型安全
- [Tailwind CSS](https://tailwindcss.com/) - 样式系统
- [KaTeX](https://katex.org/) - 数学公式渲染
- [Shiki](https://shiki.style/) - 代码高亮

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 项目结构

```
my-blog/
├── src/
│   ├── content/          # 内容目录
│   │   ├── posts/        # 博客文章
│   │   ├── notes/        # 学习笔记
│   │   └── projects/     # 项目展示
│   ├── components/       # 组件
│   ├── layouts/          # 布局
│   ├── pages/            # 页面
│   └── utils/            # 工具函数
├── public/               # 静态资源
└── astro.config.mjs      # 配置文件
```

## 内容管理

### 博客文章

在 `src/content/posts/` 目录下创建 `.md` 文件：

```markdown
---
title: "文章标题"
description: "文章描述"
pubDate: 2026-06-03
tags: ["标签1", "标签2"]
category: "分类"
---

正文内容...
```

### 学习笔记

在 `src/content/notes/` 目录下创建 `.md` 文件：

```markdown
---
title: "笔记标题"
description: "笔记描述"
pubDate: 2026-06-03
tags: ["物理", "力学"]
series: "classical-mechanics"
seriesTitle: "经典力学"
order: 1
---

正文内容...
```

### 项目展示

在 `src/content/projects/` 目录下创建 `.md` 文件：

```markdown
---
title: "项目名称"
description: "项目描述"
pubDate: 2026-06-03
techStack: ["技术1", "技术2"]
github: "https://github.com/..."
featured: true
---

项目介绍...
```

## 部署

本项目部署在 [Vercel](https://vercel.com) 上。

## 许可证

MIT License
