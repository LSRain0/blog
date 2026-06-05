---
title: "Python 类型提示完全指南"
description: "从基础到高级，全面介绍 Python 类型提示的使用方法和最佳实践。"
pubDate: 2026-06-04
tags: ["Python", "编程", "教程"]
category: "编程"
---

## 为什么需要类型提示？

Python 是动态类型语言，变量不需要声明类型。这很灵活，但在大型项目中会带来问题：

- **IDE 无法提供准确的代码补全**
- **重构时容易引入隐蔽的 bug**
- **代码的意图不够明确**

类型提示（Type Hints）解决了这些问题，同时保持了 Python 的灵活性。

## 基础类型标注

```python
# 变量标注
name: str = "LSRain"
age: int = 20
height: float = 1.75
is_student: bool = True

# 函数标注
def greet(name: str) -> str:
    return f"Hello, {name}!"

# 返回 None
def log(message: str) -> None:
    print(message)
```

## 容器类型

```python
from typing import list, dict, tuple, set

# 列表
scores: list[float] = [95.5, 87.0, 92.3]

# 字典
student: dict[str, int] = {"math": 95, "physics": 88}

# 元组（固定长度）
point: tuple[float, float] = (3.14, 2.72)

# 集合
tags: set[str] = {"python", "typing", "tutorial"}
```

## Optional 和 Union

```python
from typing import Optional, Union

# Optional 表示可以为 None
def find_user(user_id: int) -> Optional[str]:
    if user_id > 0:
        return "LSRain"
    return None

# Union 表示多种类型之一
def process(value: Union[int, str]) -> str:
    return str(value)

# Python 3.10+ 可以用 | 语法
def process_new(value: int | str) -> str:
    return str(value)
```

## 类型别名

```python
from typing import TypeAlias

# 简单别名
Vector: TypeAlias = list[float]
Matrix: TypeAlias = list[list[float]]

def dot_product(a: Vector, b: Vector) -> float:
    return sum(x * y for x, y in zip(a, b))
```

## 泛型

```python
from typing import TypeVar, Generic

T = TypeVar('T')

class Stack(Generic[T]):
    def __init__(self) -> None:
        self._items: list[T] = []

    def push(self, item: T) -> None:
        self._items.append(item)

    def pop(self) -> T:
        return self._items.pop()

# 使用
int_stack: Stack[int] = Stack()
int_stack.push(42)
```

## Callable 类型

```python
from typing import Callable

# 函数类型
Transformer: TypeAlias = Callable[[str], str]

def apply_transform(text: str, transform: Transformer) -> str:
    return transform(text)

# 使用
result = apply_transform("hello", str.upper)
```

## 实用技巧

### 渐进式类型标注

不需要一次性给所有代码加类型提示。可以从关键函数开始，逐步扩展：

```python
# 先标注公共 API
def calculate_energy(mass: float, velocity: float) -> float:
    """计算动能: E = 1/2 * m * v^2"""
    return 0.5 * mass * velocity ** 2
```

### 使用 mypy 检查

```bash
pip install mypy
mypy your_script.py
```

### 条件导入

```python
from __future__ import annotations  # Python 3.7+

# 或者使用 TYPE_CHECKING
from typing import TYPE_CHECKING
if TYPE_CHECKING:
    import expensive_module
```

## 总结

| 场景 | 推荐方式 |
|------|---------|
| 简单类型 | 直接标注 `x: int` |
| 可选值 | `Optional[T]` 或 `T \| None` |
| 多种类型 | `Union[T1, T2]` 或 `T1 \| T2` |
| 容器 | `list[int]`, `dict[str, Any]` |
| 函数 | `Callable[[ArgTypes], ReturnType]` |
| 泛型 | `Generic[T]` |

类型提示不是强制的，但它让代码更清晰、更安全、更好维护。
