---
title: "Markdown 写作指南"
description: "介绍如何在本博客中使用 Markdown 写作，包括数学公式、代码块等高级功能。"
pubDate: 2026-06-03
tags: ["教程", "Markdown"]
category: "技术"
math: true
---

## 基本语法

### 标题

使用 `#` 号标记标题，一个 `#` 是一级标题，两个 `##` 是二级标题，以此类推。

### 段落

段落之间使用空行分隔。

### 强调

- **粗体**：使用 `**粗体**`
- *斜体*：使用 `*斜体*`
- ~~删除线~~：使用 `~~删除线~~`

### 列表

无序列表：
- 项目 1
- 项目 2
- 项目 3

有序列表：
1. 第一步
2. 第二步
3. 第三步

### 链接和图片

链接：[Astro 官网](https://astro.build)

图片：`![图片描述](/images/example.jpg)`

## 数学公式

### 行内公式

使用单个 `$` 包裹行内公式，例如：质能方程 $E = mc^2$。

### 块级公式

使用双个 `$$` 包裹块级公式：

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

### 复杂公式示例

麦克斯韦方程组：

$$
\begin{aligned}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\epsilon_0} \\
\nabla \cdot \mathbf{B} &= 0 \\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} &= \mu_0 \mathbf{J} + \mu_0 \epsilon_0 \frac{\partial \mathbf{E}}{\partial t}
\end{aligned}
$$

薛定谔方程：

$$
i\hbar \frac{\partial}{\partial t} \Psi(\mathbf{r}, t) = \hat{H} \Psi(\mathbf{r}, t)
$$

## 代码块

### Python

```python
import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, 2 * np.pi, 100)
y = np.sin(x)

plt.plot(x, y)
plt.title('Sine Wave')
plt.xlabel('x')
plt.ylabel('sin(x)')
plt.grid(True)
plt.show()
```

### TypeScript

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

async function getUser(id: number): Promise<User> {
  const response = await fetch(`/api/users/${id}`);
  return response.json();
}
```

### 行内代码

使用 `console.log('Hello')` 来输出调试信息。

## 表格

| 语法 | 描述 | 示例 |
|------|------|------|
| `**粗体**` | 粗体文本 | **粗体** |
| `*斜体*` | 斜体文本 | *斜体* |
| `` `代码` `` | 行内代码 | `代码` |
| `$$公式$$` | 块级公式 | 见上文 |

## 引用

> 学而不思则罔，思而不学则殆。
> —— 孔子

## 分割线

---

## 任务列表

- [x] 搭建博客框架
- [x] 配置数学公式
- [ ] 写更多文章
- [ ] 优化 SEO
