---
title: "个人博客"
description: "使用 Astro 构建的个人博客，支持数学公式、代码高亮、深色模式等功能。"
pubDate: 2026-06-03
tags: ["Astro", "TypeScript", "Web"]
techStack: ["Astro", "TypeScript", "Tailwind CSS", "KaTeX"]
github: "https://github.com/LSRain/blog"
featured: true
---

## 项目简介

这是我的个人博客项目，用于记录学习笔记、项目实践和生活随想。

## 主要功能

- **Markdown 写作**：支持完整的 Markdown 语法
- **数学公式**：使用 KaTeX 渲染数学公式
- **代码高亮**：使用 Shiki 进行代码高亮
- **深色模式**：支持明暗主题切换
- **响应式设计**：适配各种屏幕尺寸
- **RSS 订阅**：支持 RSS 订阅
- **SEO 优化**：自动生成 sitemap

## 技术栈

- **Astro**：静态站点生成框架
- **TypeScript**：类型安全
- **Tailwind CSS**：样式系统
- **KaTeX**：数学公式渲染
- **Shiki**：代码高亮

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

## 开发历程

1. **需求分析**：确定博客的功能需求和技术选型
2. **框架搭建**：初始化 Astro 项目，配置 Tailwind CSS
3. **功能实现**：实现文章展示、数学公式、代码高亮等功能
4. **样式设计**：设计简洁、阅读友好的界面
5. **部署上线**：部署到 Vercel，绑定域名

## 未来计划

- [ ] 集成搜索功能
- [ ] 添加评论系统
- [ ] 优化图片管理
- [ ] 支持多语言

## 总结

这个博客项目让我学习了很多现代 Web 开发技术，也让我有了一个记录学习和思考的平台。
