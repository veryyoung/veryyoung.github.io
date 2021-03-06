---
layout: post
title: Logback日志级别
date: 2015-09-10 20:55:58
author: VERYYOUNG
comments: true
categories: [Java]
---

日志是应用软件中不可缺少的部分。日志记录器(Logger)是日志处理的核心组件。

Logger的行为是分等级的，在不同的情况下日志级别应该是不同的。

<!-- more -->

----------

Logback的Logger级别包括：TRACE、DEBUG、INFO、WARN和ERROR，定义于ch.qos.logback.classic.Level类。

Log4j之类的大同小异。



级别排序为：TRACE < DEBUG < INFO < WARN < ERROR。默认级别为DEBUG。


1. ERROR：发生了严重的错误，必须马上处理。这种级别的错误是任何系统都无法容忍的。比如：空指针异常，数据库不可用，关键路径的用例无法继续执行。
2. WARN：还会继续执行后面的流程，但应该引起重视。其实在这里我希望有两种级别：一个是存在解决方案的明显的问题（比如，"当前数据不可用，使用缓存数据"），另一个是潜在的问题和建议比如“程序运行在开发模式下”或者“管理控制台的密码不够安全”）。应用程序可以容忍这些信息，不过它们应该被检查及修复。
3. INFO:消息在粗粒度级别上突出强调应用程序的运行过程。最好能打印些人类可读的信息，需要谨慎对待，不可随便。
4. DEBUG：开发人员调试程序的时候需要的关注的事情。
5. TRACE：更为详尽的信息，只是开发阶段使用。在产品上线之后的一小段时间内你可能还需要关注下这些信息，不过这些日志记录只是临时性的，最终应该关掉。DEBUG和TRACE的区别很难区分，不过如果你加了一行日志，在开发测试完后又删了它的话，这条日志就应该是TRACE级别的。

通过定义级别，您可以控制到应用程序中相应级别的日志信息的开关。比如定义了INFO级别， 则应用程序中所有DEBUG级别的日志信息将不被打印出来。程序会打印高于或等于所设置级别的日志，设置的日志等级越高，打印出来的日志就越少。如果设置级别为INFO，则优先级高于等于INFO级别（如：INFO、 WARN、ERROR）的日志信息将可以被输出,小于该级别的如DEBUG将不会被输出。


建议在开发环境中开TRACE，在线上环境开INFO。

同时建议使用Logback+SLF4J，使用占位符的形式来打印日志，写日志要慎重，记录有意义的日志，重要的操作必须记录日志。

同时需要调整日志格式，方便去排查问题，至少能很方便的用grep,sed和awk来查找信息。

日志应做切分，可以分级别、分时间切分。

在项目做大规模后可以用haddop或kafka来分析日志。








