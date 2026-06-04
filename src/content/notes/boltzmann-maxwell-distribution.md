---
title: "玻尔兹曼分布与麦克斯韦分布"
description: "从统计力学的基本思想出发，详细推导麦克斯韦速率分布和玻尔兹曼分布，理解热平衡下粒子的速率与能量分布规律。"
pubDate: 2026-06-05
tags: ["物理", "热学", "统计力学", "热力学"]
category: "physics"
series: "thermodynamics"
seriesTitle: "热学"
order: 1
---

## 引言：从微观到宏观

热学研究的核心问题是：**大量微观粒子的集体行为如何决定宏观物质的性质？**

一个宏观系统包含约 $10^{23}$ 量级的粒子，我们不可能追踪每一个粒子的运动。统计力学的方法是：不去关心某个特定粒子在某一时刻的具体状态，而是研究大量粒子在各种状态上的**统计分布**。

本文将详细推导两个最基本的分布：

1. **麦克斯韦速率分布**：描述热平衡下气体分子的速率分布
2. **玻尔兹曼分布**：描述热平衡下粒子在各能量状态上的分布

---

## 第一部分：预备知识

### 1.1 理想气体模型

理想气体是理解分布律的出发点。基本假设：

- 气体由大量全同粒子（分子）组成
- 分子本身的体积可以忽略（质点近似）
- 分子之间除碰撞外无相互作用
- 碰撞是完全弹性的
- 分子的运动服从经典力学

### 1.2 概率论基础

设 $f(v)$ 是速率分布函数，其物理意义是：在速率 $v$ 附近单位速率区间内找到分子的概率。归一化条件为：

$$\int_0^{\infty} f(v) \, dv = 1$$

任意物理量 $g(v)$ 的平均值为：

$$\langle g(v) \rangle = \int_0^{\infty} g(v) f(v) \, dv$$

### 1.3 玻尔兹曼关系与熵

玻尔兹曼给出的熵的统计定义是：

$$S = k_B \ln \Omega$$

其中 $k_B = 1.381 \times 10^{-23} \, \text{J/K}$ 是玻尔兹曼常数，$\Omega$ 是系统的微观状态数。这个公式是连接宏观热力学与微观统计力学的桥梁。

---

## 第二部分：麦克斯韦速率分布

### 2.1 历史背景

1859 年，麦克斯韦在没有详细推导的情况下，仅从对称性论证出发，给出了理想气体分子的速率分布律。这是物理学史上第一个统计分布律，开创了统计力学的先河。

### 2.2 麦克斯韦速率分布函数

在热平衡温度 $T$ 下，理想气体分子的速率分布函数为：

$$f(v) = 4\pi \left( \frac{m}{2\pi k_B T} \right)^{3/2} v^2 \exp\left( -\frac{mv^2}{2k_B T} \right)$$

其中：
- $m$ 是单个分子的质量
- $k_B$ 是玻尔兹曼常数
- $T$ 是热力学温度
- $v$ 是分子速率

令 $\alpha = \sqrt{\frac{m}{2k_B T}}$，分布函数可以简写为：

$$f(v) = \frac{4}{\sqrt{\pi}} \alpha^3 v^2 e^{-\alpha^2 v^2}$$

### 2.3 分布函数的推导

#### 基本假设

麦克斯韦从以下三个假设出发：

**假设 1**：在平衡态下，速度的三个分量 $v_x, v_y, v_z$ 的分布相互独立，即：

$$f(\mathbf{v}) = f(v_x) \cdot f(v_y) \cdot f(v_z)$$

**假设 2**：分布函数只依赖于速率的大小，与方向无关（各向同性）：

$$f(\mathbf{v}) = g(v_x^2 + v_y^2 + v_z^2)$$

**假设 3**：$f(v_i)$ 具有指数形式。

#### 推导过程

由假设 1 和假设 2：

$$f(v_x) \cdot f(v_y) \cdot f(v_z) = g(v_x^2 + v_y^2 + v_z^2)$$

对两边取对数：

$$\ln f(v_x) + \ln f(v_y) + \ln f(v_z) = \ln g(v_x^2 + v_y^2 + v_z^2)$$

这个函数方程的解必然是：

$$\ln f(v_i) = A - B v_i^2$$

即：

$$f(v_i) = C e^{-B v_i^2}$$

其中 $A, B, C$ 是常数，$B > 0$（保证分布可归一化）。

#### 由归一化确定常数

对单个分量归一化：

$$\int_{-\infty}^{\infty} f(v_x) \, dv_x = 1$$

$$C \int_{-\infty}^{\infty} e^{-Bv_x^2} \, dv_x = C \sqrt{\frac{\pi}{B}} = 1$$

所以 $C = \sqrt{B/\pi}$。

#### 由能量均分定理确定 $B$

根据能量均分定理，每个自由度的平均动能为：

$$\frac{1}{2} m \langle v_x^2 \rangle = \frac{1}{2} k_B T$$

计算 $\langle v_x^2 \rangle$：

$$\langle v_x^2 \rangle = \int_{-\infty}^{\infty} v_x^2 \cdot \sqrt{\frac{B}{\pi}} e^{-Bv_x^2} \, dv_x = \frac{1}{2B}$$

因此：

$$\frac{1}{2} m \cdot \frac{1}{2B} = \frac{1}{2} k_B T \implies B = \frac{m}{2k_B T}$$

#### 合成三维分布

三维速度分布函数为：

$$f(\mathbf{v}) = \left( \frac{m}{2\pi k_B T} \right)^{3/2} \exp\left( -\frac{m(v_x^2 + v_y^2 + v_z^2)}{2k_B T} \right)$$

转换为球坐标系中的速率分布。在速度空间中，速率在 $v$ 到 $v + dv$ 之间的分子对应于一个球壳，其体积为 $4\pi v^2 \, dv$：

$$f(v) \, dv = 4\pi v^2 \cdot \left( \frac{m}{2\pi k_B T} \right)^{3/2} \exp\left( -\frac{mv^2}{2k_B T} \right) dv$$

这就是麦克斯韦速率分布函数。

### 2.4 三种特征速率

#### 最概然速率 $v_p$

最概然速率是使分布函数 $f(v)$ 取最大值的速率，即分布的峰值位置。

令 $\frac{df}{dv} = 0$：

$$\frac{d}{dv} \left[ v^2 \exp\left(-\frac{mv^2}{2k_BT}\right) \right] = 0$$

$$\left[ 2v - \frac{m}{k_BT} v^3 \right] \exp\left(-\frac{mv^2}{2k_BT}\right) = 0$$

解得：

$$\boxed{v_p = \sqrt{\frac{2k_BT}{m}} = \sqrt{\frac{2RT}{M}}}$$

其中 $R$ 是气体常数，$M$ 是摩尔质量。

#### 平均速率 $\bar{v}$

$$\bar{v} = \int_0^{\infty} v \cdot f(v) \, dv$$

利用积分公式 $\int_0^{\infty} x^3 e^{-ax^2} dx = \frac{1}{2a^2}$，令 $a = \frac{m}{2k_BT}$：

$$\bar{v} = 4\pi \left( \frac{m}{2\pi k_BT} \right)^{3/2} \cdot \frac{1}{2} \left( \frac{2k_BT}{m} \right)^2 = \sqrt{\frac{8k_BT}{\pi m}}$$

$$\boxed{\bar{v} = \sqrt{\frac{8k_BT}{\pi m}} = \sqrt{\frac{8RT}{\pi M}}}$$

#### 方均根速率 $v_{\text{rms}}$

$$v_{\text{rms}} = \sqrt{\langle v^2 \rangle} = \sqrt{\int_0^{\infty} v^2 \cdot f(v) \, dv}$$

利用 $\int_0^{\infty} x^4 e^{-ax^2} dx = \frac{3}{8} \sqrt{\frac{\pi}{a^5}}$：

$$\langle v^2 \rangle = \frac{3k_BT}{m}$$

$$\boxed{v_{\text{rms}} = \sqrt{\frac{3k_BT}{m}} = \sqrt{\frac{3RT}{M}}}$$

#### 三种速率的大小关系

$$v_p < \bar{v} < v_{\text{rms}}$$

$$\sqrt{\frac{2k_BT}{m}} < \sqrt{\frac{8k_BT}{\pi m}} < \sqrt{\frac{3k_BT}{m}}$$

数值上约为：

$$1 : 1.128 : 1.224$$

### 2.5 分布曲线的特征

麦克斯韦速率分布曲线 $f(v)$ 有以下特征：

**（1）当 $v \to 0$ 时**：$f(v) \to 0$，因为 $v^2$ 因子使分布趋于零。

**（2）当 $v \to \infty$ 时**：$f(v) \to 0$，指数衰减因子占主导。

**（3）存在一个极大值**：位于 $v = v_p$ 处。

**（4）温度的影响**：

- 温度升高时，$v_p$ 增大，峰值右移
- 峰值高度降低（因为归一化要求曲线下的面积恒为 1）
- 分布曲线变得更"平坦"，高速分子的比例增大

**（5）分子质量的影响**：

- 质量越大的分子，$v_p$ 越小，分布越集中在低速区
- 质量越小的分子，分布越向高速区扩展

### 2.6 麦克斯韦速度分布

完整的麦克斯韦**速度**分布（注意是速度矢量，不是速率）为：

$$f(\mathbf{v}) = \left( \frac{m}{2\pi k_B T} \right)^{3/2} \exp\left( -\frac{m |\mathbf{v}|^2}{2k_B T} \right)$$

这是一个三维高斯分布，各分量独立且满足：

$$\langle v_x \rangle = \langle v_y \rangle = \langle v_z \rangle = 0$$

$$\langle v_x^2 \rangle = \langle v_y^2 \rangle = \langle v_z^2 \rangle = \frac{k_B T}{m}$$

---

## 第三部分：玻尔兹曼分布

### 3.1 从微观状态数到分布

考虑一个孤立系统，总能量 $E$ 守恒。假设系统由大量粒子组成，每个粒子可以处于不同的能量状态 $\varepsilon_i$。

设 $n_i$ 为处于能量状态 $\varepsilon_i$ 上的粒子数。在满足总粒子数 $N = \sum_i n_i$ 和总能量 $E = \sum_i n_i \varepsilon_i$ 的约束下，**最概然分布**（即出现概率最大的分布）就是玻尔兹曼分布。

### 3.2 拉格朗日乘子法推导

微观状态数为：

$$\Omega = \frac{N!}{\prod_i n_i!}$$

取对数并利用斯特林近似 $\ln N! \approx N \ln N - N$：

$$\ln \Omega \approx N \ln N - N - \sum_i (n_i \ln n_i - n_i) = N \ln N - \sum_i n_i \ln n_i$$

在约束条件 $\sum_i n_i = N$ 和 $\sum_i n_i \varepsilon_i = E$ 下，使用拉格朗日乘子法求极值：

$$\frac{\partial}{\partial n_i} \left[ \ln \Omega - \alpha \left(\sum_j n_j - N\right) - \beta \left(\sum_j n_j \varepsilon_j - E\right) \right] = 0$$

其中 $\alpha$ 和 $\beta$ 是拉格朗日乘子。

计算偏导：

$$\frac{\partial \ln \Omega}{\partial n_i} = -\ln n_i - 1$$

因此：

$$-\ln n_i - 1 - \alpha - \beta \varepsilon_i = 0$$

解得：

$$n_i = e^{-(1+\alpha)} \cdot e^{-\beta \varepsilon_i}$$

令 $A = e^{-(1+\alpha)}$，则：

$$\boxed{n_i = A e^{-\beta \varepsilon_i}}$$

### 3.3 确定参数 $\beta$

通过热力学关系可以证明：

$$\beta = \frac{1}{k_B T}$$

证明如下：考虑系统吸收微小热量 $\delta Q$ 时，熵的变化为：

$$dS = \frac{\delta Q}{T} = k_B \, d(\ln \Omega)$$

利用 $d(\ln \Omega) = -\sum_i \ln n_i \, dn_i$ 和 $dE = \sum_i \varepsilon_i \, dn_i$，可以导出 $\beta = \frac{1}{k_BT}$。

### 3.4 玻尔兹曼分布的最终形式

$$\boxed{n_i = \frac{N}{Z} e^{-\varepsilon_i / k_B T}}$$

其中 $Z$ 是**配分函数**（partition function）：

$$Z = \sum_i e^{-\varepsilon_i / k_B T}$$

配分函数确保归一化条件 $\sum_i n_i = N$ 成立。

### 3.5 连续形式的玻尔兹曼分布

对于连续的能量谱，粒子处于能量 $\varepsilon$ 附近 $d\varepsilon$ 区间内的概率为：

$$P(\varepsilon) \, d\varepsilon \propto g(\varepsilon) \, e^{-\varepsilon / k_B T} \, d\varepsilon$$

其中 $g(\varepsilon)$ 是**态密度**（density of states），即单位能量区间内的量子态数目。

归一化后：

$$P(\varepsilon) = \frac{g(\varepsilon) \, e^{-\varepsilon / k_B T}}{Z}$$

其中配分函数变为积分形式：

$$Z = \int_0^{\infty} g(\varepsilon) \, e^{-\varepsilon / k_B T} \, d\varepsilon$$

### 3.6 玻尔兹曼因子的物理意义

$e^{-\varepsilon / k_B T}$ 称为**玻尔兹曼因子**，它给出了粒子处于能量 $\varepsilon$ 的相对概率。

关键特征：
- 能量越高的状态，被占据的概率越小
- 温度越高，高能态被占据的概率越大
- 当 $T \to 0$ 时，所有粒子都处于基态
- 当 $T \to \infty$ 时，各态被占据的概率趋于均等

---

## 第四部分：从玻尔兹曼分布到麦克斯韦分布

### 4.1 推导思路

麦克斯韦速率分布实际上是玻尔兹曼分布的一个特例：将玻尔兹曼分布应用于理想气体分子的动能。

### 4.2 态密度的计算

对于自由运动的分子，动能为：

$$\varepsilon = \frac{1}{2} m v^2 = \frac{p^2}{2m}$$

在动量空间中，动量在 $\mathbf{p}$ 到 $\mathbf{p} + d\mathbf{p}$ 之间的量子态数为：

$$d\Omega = \frac{V}{h^3} d^3 p = \frac{V}{h^3} 4\pi p^2 \, dp$$

转换为能量变量（利用 $p = \sqrt{2m\varepsilon}$，$dp = \frac{m}{\sqrt{2m\varepsilon}} d\varepsilon$）：

$$g(\varepsilon) \, d\varepsilon = \frac{V}{h^3} \cdot 4\pi (2m\varepsilon) \cdot \frac{m}{\sqrt{2m\varepsilon}} \, d\varepsilon = \frac{2\pi V (2m)^{3/2}}{h^3} \varepsilon^{1/2} \, d\varepsilon$$

所以态密度为：

$$g(\varepsilon) = C' \varepsilon^{1/2}$$

其中 $C' = \frac{2\pi V (2m)^{3/2}}{h^3}$。

### 4.3 能量分布

代入玻尔兹曼分布：

$$P(\varepsilon) \, d\varepsilon \propto \varepsilon^{1/2} e^{-\varepsilon / k_B T} \, d\varepsilon$$

归一化后：

$$P(\varepsilon) = \frac{2\pi}{(\pi k_B T)^{3/2}} \varepsilon^{1/2} e^{-\varepsilon / k_B T}$$

这就是理想气体的**能量分布函数**。

### 4.4 转换为速率分布

利用 $\varepsilon = \frac{1}{2}mv^2$，$d\varepsilon = mv \, dv$：

$$f(v) \, dv = P(\varepsilon) \, d\varepsilon = \frac{2\pi}{(\pi k_B T)^{3/2}} \left(\frac{1}{2}mv^2\right)^{1/2} e^{-mv^2 / 2k_B T} \cdot mv \, dv$$

$$= 4\pi \left(\frac{m}{2\pi k_B T}\right)^{3/2} v^2 e^{-mv^2 / 2k_B T} \, dv$$

这正是麦克斯韦速率分布。

### 4.5 玻尔兹曼分布与麦克斯韦分布的关系总结

| 性质 | 麦克斯韦分布 | 玻尔兹曼分布 |
|------|------------|------------|
| 描述对象 | 理想气体分子的速率 | 任意粒子的能量状态 |
| 适用范围 | 理想气体 | 任何处于热平衡的系统 |
| 内容 | 仅含动能 | 可含动能 + 势能 |
| 态密度 | $g(\varepsilon) \propto \varepsilon^{1/2}$ | 取决于具体系统 |

---

## 第五部分：重力场中的玻尔兹曼分布

### 5.1 等温大气压公式

在重力场中，分子不仅有动能，还有重力势能：

$$\varepsilon = \frac{1}{2}mv^2 + mg z$$

其中 $z$ 是高度。对速度积分后，粒子数密度随高度的分布为：

$$n(z) = n_0 \exp\left( -\frac{mgz}{k_B T} \right)$$

这就是**玻尔兹曼高度分布**，也称为**等温大气模型**。

由理想气体状态方程 $p = nk_BT$，气压随高度的分布为：

$$\boxed{p(z) = p_0 \exp\left( -\frac{mgz}{k_B T} \right) = p_0 \exp\left( -\frac{Mgz}{RT} \right)}$$

这就是**气压公式**，其中 $M$ 是空气的摩尔质量。

### 5.2 标高

定义**标高**（scale height）：

$$H = \frac{k_B T}{mg} = \frac{RT}{Mg}$$

气压公式变为：

$$p(z) = p_0 e^{-z/H}$$

标高的物理意义：气压每经过一个标高 $H$，就降低为原来的 $1/e$。

在地球大气中（$T \approx 288 \, \text{K}$，$M \approx 0.029 \, \text{kg/mol}$）：

$$H \approx \frac{8.314 \times 288}{0.029 \times 9.8} \approx 8.4 \, \text{km}$$

### 5.3 应用：粒子在势场中的一般分布

对于任意势场 $U(\mathbf{r})$，粒子的空间分布为：

$$n(\mathbf{r}) = n_0 \exp\left( -\frac{U(\mathbf{r})}{k_B T} \right)$$

这个结果在以下情况中有重要应用：

- **重力场中的大气**：$U = mgz$
- **电场中的带电粒子**：$U = qV$（$V$ 是电势）
- **谐振子势**：$U = \frac{1}{2}kx^2$（用于分子振动）
- **离心力场**：$U = -\frac{1}{2}m\omega^2 r^2$（用于离心分离）

---

## 第六部分：能量均分定理

### 6.1 定理内容

在温度 $T$ 的热平衡状态下，粒子能量中每一个独立的二次方项的平均值等于 $\frac{1}{2} k_B T$。

### 6.2 对理想气体的应用

**单原子分子**（如 He, Ne, Ar）：

只有平动动能：$\varepsilon = \frac{1}{2}mv_x^2 + \frac{1}{2}mv_y^2 + \frac{1}{2}mv_z^2$

三个二次方项，每个 $\frac{1}{2}k_BT$：

$$\langle \varepsilon \rangle = \frac{3}{2} k_B T$$

**双原子分子**（如 $O_2$, $N_2$）：

平动 + 转动（两个转动自由度，绕键轴的转动惯量极小可忽略）：

$$\langle \varepsilon \rangle = \frac{5}{2} k_B T$$

**多原子分子**（如 $H_2O$, $CO_2$）：

平动 + 三个转动自由度：

$$\langle \varepsilon \rangle = 3 k_B T$$

### 6.3 理想气体的内能

$N$ 个分子组成的理想气体的总内能：

$$U = N \langle \varepsilon \rangle = \frac{f}{2} N k_B T = \frac{f}{2} n R T$$

其中 $f$ 是自由度数，$n$ 是物质的量。

由此可得定容热容：

$$C_V = \frac{f}{2} nR$$

定压热容：

$$C_P = C_V + nR = \frac{f+2}{2} nR$$

比热比：

$$\gamma = \frac{C_P}{C_V} = \frac{f+2}{f}$$

| 分子类型 | 自由度 $f$ | $C_V/nR$ | $C_P/nR$ | $\gamma$ |
|---------|-----------|---------|---------|---------|
| 单原子 | 3 | 3/2 | 5/2 | 5/3 ≈ 1.67 |
| 双原子 | 5 | 5/2 | 7/2 | 7/5 = 1.40 |
| 多原子 | 6 | 3 | 4 | 4/3 ≈ 1.33 |

---

## 第七部分：配分函数与热力学量

### 7.1 配分函数的核心地位

配分函数 $Z$ 包含了系统的全部热力学信息。所有热力学量都可以从 $Z$ 导出。

#### 单粒子配分函数

$$Z_1 = \sum_i e^{-\varepsilon_i / k_B T}$$

#### $N$ 个全同粒子的配分函数

对于经典极限下可区分的粒子：

$$Z_N = Z_1^N$$

对于全同粒子（需考虑量子效应）：

$$Z_N = \frac{Z_1^N}{N!}$$

### 7.2 从配分函数推导热力学量

**自由能**：

$$F = -k_B T \ln Z_N = -Nk_BT \ln Z_1 + k_BT \ln N!$$

利用斯特林近似：

$$F = -Nk_BT \left( \ln \frac{Z_1}{N} + 1 \right)$$

**内能**：

$$U = -\frac{\partial \ln Z_N}{\partial \beta} = k_B T^2 \frac{\partial \ln Z_N}{\partial T}$$

**熵**：

$$S = k_B \ln Z_N + \frac{U}{T} = -\left(\frac{\partial F}{\partial T}\right)_V$$

**压强**：

$$p = -\left(\frac{\partial F}{\partial V}\right)_T = k_B T \frac{\partial \ln Z_N}{\partial V}$$

### 7.3 理想气体的配分函数

对于理想气体中一个分子的平动配分函数：

$$Z_1 = \frac{V}{h^3} \int e^{-p^2/2mk_BT} \, d^3p = V \left( \frac{2\pi m k_B T}{h^2} \right)^{3/2}$$

定义**热德布罗意波长**：

$$\lambda_{\text{th}} = \frac{h}{\sqrt{2\pi m k_B T}}$$

则：

$$Z_1 = \frac{V}{\lambda_{\text{th}}^3}$$

由此可以推导出理想气体的所有热力学性质，包括状态方程 $pV = Nk_BT$。

---

## 第八部分：量子统计简介

### 8.1 经典统计的适用条件

麦克斯韦-玻尔兹曼统计是经典统计，适用条件是**非简并条件**：

$$n \lambda_{\text{th}}^3 \ll 1$$

即粒子间距远大于热德布罗意波长，量子效应可以忽略。

当 $n \lambda_{\text{th}}^3 \gtrsim 1$ 时，必须使用量子统计。

### 8.2 两种量子统计

**费米-狄拉克统计**（自旋为半整数的粒子，如电子）：

$$\bar{n}_i = \frac{1}{e^{(\varepsilon_i - \mu)/k_BT} + 1}$$

**玻色-爱因斯坦统计**（自旋为整数的粒子，如光子、声子）：

$$\bar{n}_i = \frac{1}{e^{(\varepsilon_i - \mu)/k_BT} - 1}$$

其中 $\mu$ 是化学势。

### 8.3 经典极限

当 $(\varepsilon_i - \mu) \gg k_BT$ 时，两种量子统计都退化为玻尔兹曼统计：

$$\bar{n}_i \approx e^{-(\varepsilon_i - \mu)/k_BT} \propto e^{-\varepsilon_i/k_BT}$$

这说明麦克斯韦-玻尔兹曼统计是量子统计在高温/低密度极限下的近似。

---

## 第九部分：应用实例

### 9.1 化学反应速率

阿伦尼乌斯公式可以从玻尔兹曼分布导出。反应速率常数：

$$k = A \exp\left( -\frac{E_a}{k_B T} \right)$$

其中 $E_a$ 是活化能。$e^{-E_a/k_BT}$ 正是分子能量超过活化能的概率（玻尔兹曼因子）。

### 9.2 热电子发射

金属中电子的能量服从费米-狄拉克分布。在高温下，电子从金属表面逸出的理查森-杜什曼公式：

$$J = A T^2 \exp\left( -\frac{W}{k_B T} \right)$$

其中 $W$ 是功函数。

### 9.3 回旋加速器中的粒子分布

在回旋加速器中，粒子的动能分布服从玻尔兹曼分布，这影响了加速效率和束流品质。

### 9.4 星体内部的粒子分布

恒星内部的粒子分布由玻尔兹曼分布（以及在简并条件下的量子统计）决定，这对恒星的结构和演化至关重要。

---

## 第十部分：总结与对比

### 核心公式速查

| 名称 | 公式 | 物理意义 |
|------|------|---------|
| 麦克斯韦速率分布 | $f(v) = 4\pi \left(\frac{m}{2\pi k_BT}\right)^{3/2} v^2 e^{-mv^2/2k_BT}$ | 理想气体分子速率分布 |
| 玻尔兹曼分布 | $n_i = \frac{N}{Z} e^{-\varepsilon_i/k_BT}$ | 粒子在各能量状态的分布 |
| 配分函数 | $Z = \sum_i e^{-\varepsilon_i/k_BT}$ | 统计力学的核心量 |
| 气压公式 | $p(z) = p_0 e^{-Mgz/RT}$ | 大气压随高度的变化 |
| 能量均分定理 | $\langle \varepsilon \rangle = \frac{f}{2} k_BT$ | 每个自由度的平均能量 |

### 物理图像

玻尔兹曼分布告诉我们一个深刻的物理事实：**在热平衡下，粒子更倾向于占据低能态，但热运动会使一部分粒子跃迁到高能态。温度越高，高能态上的粒子越多。** 这是自然界中最基本的竞争关系之一——能量最小化与熵最大化的平衡。

---

## 参考资料

1. 汪志诚.《热力学·统计物理》（第六版）. 高等教育出版社.
2. 林宗涵.《热力学与统计物理学》. 北京大学出版社.
3. Reif, F. *Fundamentals of Statistical and Thermal Physics*. McGraw-Hill.
4. Pathria, R.K. & Beale, P.D. *Statistical Mechanics* (3rd ed.). Academic Press.
5. Kittel, C. & Kroemer, H. *Thermal Physics* (2nd ed.). W.H. Freeman.
