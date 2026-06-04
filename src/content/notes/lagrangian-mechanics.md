---
title: "拉格朗日力学入门"
description: "从最小作用量原理理解拉格朗日方程，建立分析力学的基础。"
pubDate: 2026-06-03
tags: ["物理", "力学", "分析力学"]
category: "physics"
series: "classical-mechanics"
seriesTitle: "经典力学"
order: 1
---

## 从牛顿力学到拉格朗日力学

牛顿力学使用力和加速度来描述物体的运动。然而，对于复杂系统，这种方法可能会变得非常繁琐。拉格朗日力学提供了一种更优雅的方式来描述力学系统。

## 广义坐标

在拉格朗日力学中，我们使用**广义坐标** $q_i$ 来描述系统的状态。广义坐标是能够完全确定系统位置的最少独立变量。

例如，一个在平面上运动的质点可以用笛卡尔坐标 $(x, y)$ 或极坐标 $(r, \theta)$ 来描述。

## 拉格朗日量

拉格朗日量定义为：

$$L = T - V$$

其中：
- $T$ 是系统的动能
- $V$ 是系统的势能

### 例子：单摆

考虑一个质量为 $m$、长度为 $l$ 的单摆。使用角度 $\theta$ 作为广义坐标：

动能：
$$T = \frac{1}{2} m l^2 \dot{\theta}^2$$

势能：
$$V = -mgl\cos\theta$$

拉格朗日量：
$$L = \frac{1}{2} m l^2 \dot{\theta}^2 + mgl\cos\theta$$

## 欧拉-拉格朗日方程

系统的运动方程由欧拉-拉格朗日方程给出：

$$\frac{d}{dt} \frac{\partial L}{\partial \dot{q}_i} - \frac{\partial L}{\partial q_i} = 0$$

对于单摆，应用这个方程：

$$\frac{\partial L}{\partial \theta} = -mgl\sin\theta$$

$$\frac{\partial L}{\partial \dot{\theta}} = ml^2\dot{\theta}$$

$$\frac{d}{dt} \frac{\partial L}{\partial \dot{\theta}} = ml^2\ddot{\theta}$$

因此，运动方程为：

$$ml^2\ddot{\theta} + mgl\sin\theta = 0$$

简化后：

$$\ddot{\theta} + \frac{g}{l}\sin\theta = 0$$

## 最小作用量原理

拉格朗日力学的基础是**最小作用量原理**（也称为哈密顿原理）。作用量定义为：

$$S = \int_{t_1}^{t_2} L \, dt$$

最小作用量原理指出：系统在两个时刻之间的实际运动路径是使作用量取极值的路径。

## 守恒量

如果拉格朗日量不显含某个广义坐标 $q_i$（即 $\frac{\partial L}{\partial q_i} = 0$），则对应的广义动量守恒：

$$p_i = \frac{\partial L}{\partial \dot{q}_i} = \text{常数}$$

这称为**循环坐标**或**可遗坐标**。

## 总结

拉格朗日力学的优点：

1. 使用标量（动能和势能）而非矢量（力）
2. 广义坐标的选择灵活
3. 自动处理约束力
4. 便于推广到其他物理领域

## 参考资料

1. Goldstein, H. *Classical Mechanics*
2. Landau, L.D. & Lifshitz, E.M. *Mechanics*
