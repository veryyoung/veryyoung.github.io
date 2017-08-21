---
layout: post
title: 代码质量保证之我见
category: [CD]
date: 2017-06-06
author: VERYYOUNG
comments: true
---

代码质量的重要性毋庸置疑，好代码能让人身心愉悦，有更强的可读性和可扩展性，能让项目比较健康的迭代下去。
个人认为，某种程度上，拥有写出高质量代码能力比学会某些特定的领域技术，对一个工程师的挑战会更大，未来的收益也会是更持久的。
掌握特定的编程技能，更像是拥有了某种能力，而能写出优良代码，则可以看做是拥有良好的素质，素质比能力重要，哈哈。

过去的一段时间，在代码质量保证方面还是有一定的见解，觉得有必要分享一下。


<!-- more -->


## 整体流程

![20170607149676510855038.jpg](http://78rd4j.com1.z0.glb.clouddn.com/20170607149676510855038.jpg?imageView2/0/format/jpg)

整体流程全部可以浓缩在这张图片里面。

先大概介绍下流程，具体的细节后面会详细说。

首先我们从版本控制工具把代码 Clone 下来，Checkout 到对应的分支，开始进行代码的编写。代码写完后，走一遍 Checkstyle，进行最基本的代码格式校验。

当 Checkstyle 通过后，需要在本地走一遍测试，确保所有的 Test case 都能正确执行。

当所有的 Test case 都能如期执行，可以提交代码到 Code Review 平台了。我们采用的是 Facebook 开源的 [phabricator](http://phabricator.org/)。 phabricator 提供了命令行工具 Arc。 使用 arc diff 把代码提交到 phabricator，开始进行人工的 Code Review。

如果 Code Review 不通过，会打回修改，重新从 Checkstyle 开始，走一遍流程。

如果 Code Review 能通过，则开始在 CI（持续集成）上执行一系列的任务。

先进行 Compile（对应的 Maven 命令是 mvn compile）进行代码编译，如果 Compile 失败，则后面的流程都不会进行下去。

如果 Compile 通过，自动执行 Checkstyle，来确保提交上来的代码风格是符合标准的，同理，Checkstyle 不通过，后面也不会执行。

如果 Checkstyle 通过，则自动跑 Test Case（对应的 Maven 命令是 mvn clean test），这里非常依赖测试的覆盖率和质量。

如果所有的 Test Case 能跑过，默认代码 Ready 了，自动会发布到 Stage 环境。可以进入人工的验收。

如果人工验收能通过，就可以执行 Deploy 任务，发布代码到正式环境啦。

在测试 Case 通过后，同时会触发静态代码扫描，Sonar、Findbugs 和 EMMA。

Findbugs 能通过静态代码分析，发现一些常见的不好的写法，并提供改进意见。

Sonar 和 Findbugs 功能类似，但检测更严格，功能更强大。

而 EMMA 可以进行单元测试覆盖率的检查。


经过上面这些手段，代码质量能得到显著的提升。而做到上面这些，必须依赖于持续集成和持续交付，关于持续集成和持续交付相关，你可以阅读我之前的博客。

