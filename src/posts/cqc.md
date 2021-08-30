---
title: Test blog
date: 2021-08-30
author: veryyoung
# categories:
#   - 编程世界
tags:
  - crypto
  - blockchain
---

# 运行一个脚本，看看你的项目的代码质量吧

代码质量有很多指标：

1. 源代码行数
2. 代码重复率
3. 圈复杂度
4. 报错量（ Bug 数）占比
5. 测试覆盖率
6. 开发约束（代码块行数等）

我做了一个脚本可以测出上面的 1, 2, 3

大家都来试一试吧！

## Supported Languages

- js, jsx
- css, less, scss, sass, styl

## Getting Started

### Installation

```bash
npm install -g cqc
```

### Usage

```bash
cqc src/**/*.js src/**/*.jsx
```

Output:

```
Number of files:        9
Source lines of code:   463
Duplicate rate:         15.71%
High complexity rate:   11.11%
Max complexity:         19
```
