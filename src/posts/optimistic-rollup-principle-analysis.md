---
title: Optimistic Rollup 原理分析
date: 2023-06-22
author: veryyoung
tags:
  - crypto
  - blockchain
  - layer2
---

# Optimistic Rollup 原理

## 前言

21 年的时候有幸帮一家基于 Optimistic Rollup 的 layer2 团队做过一段时间的事情，时间久了都快忘记了。最近工作不太忙，抽空梳理下。

## 简介

Layer2 Rollup 是用来做以太坊吞吐量扩容的典型方案，使用 Rollup 可以让交易发生在二层，同时使用以太坊一层来验证二层执行的安全性。

Optimistic Rollup 顾名思义，就是乐观的认为交易是有效的，除非有人提出欺诈证明。

二层上的用户将交易提交给排序者 Sequencer，Sequencer 在二层区块链上执行交易，并定时将交易的 Merkle tree 和状态根提交给一层。

Sequencer 的节点需要质押代币来执行，交易提交后会有一个时间窗口(一般是七天)，在时间窗口内任何人都可以提交欺诈证明。欺诈证明一旦成立会扣除对应 Sequencer 的奖励，同时给与提交欺诈证明的人奖励。

## 代码结构

代码分为如下五层:

- l2geth
- contracts
- data-transport-layer
- batch-submitter
- message-relayer


### l2geth:

l2geth 是 go-ethereum 的 fork，同时里面增加了 rollup 包，实现了 layer2 上的两种角色：Sequencer 和 Verifier。

Sequencer: 监听 layer1 的跨域消息，并且将交易改为 OVMMessage 到 OVM 中运行。

Verifier: 验证 layer2 上的 Sequencer 提交的交易的正确性。

### contracts：

包含 layer1 和 layer2 上的合约。

### data-transport-layer：

通过 RPC 访问 layer1 的 RPC 接口，获取 layer1 上的合约事件，并存储在本地，提供接口供 l2geth 来获取时间。

### batch-submitter：

定时将交易的 Merkle tree 和状态根提交给一层。

### message-relayer：

监听 layer2 上的 SentMessages 事件，在 layer1 上调用 OVM_L1CrossDomainMessenger 合约的 relayMessage 方法，在一层上执行对应的操作，来完成跨域转账。

## 主要流程

layer2 上执行交易，通过 batch-submitter 提交到 layer1 合约上，通过事件的方式记录下来。data-transport-layer 从 layer1 上监听事件，存储在本地，提供 RPC 接口给 layer2，layer2 和已经确定的交易进行比较，如果不一样需要提交给 layer1 上的验证者进行验证。

## zk-rollup 简单介绍

顾名思义，通过零知识证明验证来进行 Rollups 环节。 ZK 生成一个简洁的证明来确保批次中的交易有效性，无需逐一检查每笔交易。

因为生成零知识证明的难度过高，目前仅支持简单的转账交易。


## OP 优缺点

优点：

- 吞吐量高
- EVM 兼容，迁移成本低

缺点：

- 排序器是中心化的，会影响交易顺序的公平性
- 因为有锁定期，提币时间长
- 有验证者作恶的风险成本

## 参考资料

- [OPTIMISTIC ROLLUPS](https://ethereum.org/en/developers/docs/scaling/optimistic-rollups/)
- [Optimism](https://github.com/ethereum-optimism)
