---
title: "Markdown 数学公式写作指南"
description: "在博客中使用 KaTeX 编写数学公式的方法和常用语法。"
pubDate: 2026-06-03
tags: ["Markdown", "数学", "教程"]
category: "教程"
---

## 为什么要用数学公式？

物理和数学笔记离不开公式。用文字描述公式既不直观也不精确。LaTeX 数学公式语法是学术写作的标准，KaTeX 提供了快速的渲染支持。

## 行内公式

行内公式用单个 `$` 包裹：

勾股定理：$a^2 + b^2 = c^2$

质能方程：$E = mc^2$

欧拉公式：$e^{i\pi} + 1 = 0$

## 块级公式

块级公式用 `$$` 包裹：

$$\int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}$$

$$\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}$$

## 常用语法

### 上下标

```latex
x^2          # 上标
x_i          # 下标
x^{2+3}      # 多字符上标
x_{i,j}      # 多字符下标
```

效果：$x^2$, $x_i$, $x^{2+3}$, $x_{i,j}$

### 分数

```latex
\frac{a}{b}
```

效果：$\frac{a}{b}$

### 希腊字母

```latex
\alpha, \beta, \gamma, \delta, \epsilon
\theta, \lambda, \mu, \pi, \sigma
\omega, \Omega, \Delta, \Sigma
```

效果：$\alpha, \beta, \gamma, \delta, \epsilon, \theta, \lambda, \mu, \pi, \sigma$

### 求和与积分

```latex
\sum_{i=1}^{n} x_i
\int_{a}^{b} f(x) \, dx
\prod_{k=1}^{n} k
```

效果：

$$\sum_{i=1}^{n} x_i, \quad \int_{a}^{b} f(x) \, dx, \quad \prod_{k=1}^{n} k$$

### 矩阵

```latex
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
```

效果：

$$\begin{pmatrix} a & b \\ c & d \end{pmatrix}$$

### 方程组

```latex
\begin{cases}
x + y = 5 \\
2x - y = 1
\end{cases}
```

效果：

$$\begin{cases} x + y = 5 \\ 2x - y = 1 \end{cases}$$

## 物理常用公式

### 牛顿第二定律

$$\vec{F} = m\vec{a}$$

### 万有引力

$$F = G \frac{m_1 m_2}{r^2}$$

### 麦克斯韦方程组

$$\nabla \cdot \vec{E} = \frac{\rho}{\varepsilon_0}$$

$$\nabla \cdot \vec{B} = 0$$

$$\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}$$

$$\nabla \times \vec{B} = \mu_0 \vec{J} + \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$$

### 薛定谔方程

$$i\hbar \frac{\partial}{\partial t} \Psi(\vec{r}, t) = \hat{H} \Psi(\vec{r}, t)$$

## 数学常用公式

### 泰勒展开

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!} (x-a)^n$$

### 傅里叶变换

$$\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x) e^{-2\pi i x \xi} \, dx$$

### 行列式

$$\det(A) = \sum_{\sigma \in S_n} \text{sgn}(\sigma) \prod_{i=1}^{n} a_{i,\sigma(i)}$$

## 小结

掌握这些基础语法后，绝大多数物理和数学公式都能写出。更多语法可以参考 [KaTeX 官方文档](https://katex.org/docs/supported.html)。
