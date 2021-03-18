---
title: react fiber结构学习小计
date: 2020-03-03 11:43:03
tags:
---

所谓 react fiber 结构，个人理解是一个双向的链表控制的一些自建的虚拟 dom。
每个虚拟 dom（即 fiber 节点），内部有一个 stateNode 指向真实的 dom 节点，借着这些虚拟 dom，控制的一个树状双向链表结构。

![图片](/flbBlog/assets/images/fiber.png)