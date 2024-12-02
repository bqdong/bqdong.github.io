---
title: Hello world
---

# Hello, world

第一篇博客。正文如下：

## Why build this ？

When you are writing, you are thinking. As a programmer, writing is a good way
to think. Practice, practice, practice.

## 技术栈

- [VitePress](https://vitepress.dev/)
- [Deno](https://github.com/denoland/deno/)

## Why vitepress

- vitepress 是一个静态网站生成器，基于 vue 3 和 Vite。 主题可定制，生成
  的页面可以托管在在 GitHub Pages。
- 想要学习 vue3 和 ssg

## Why deno

- 相比于 node，deno 提供了开箱即用的工具
- 提供一个学习 deno 的机会

## 挑战

### 自定义 vitepress 主题

为了学习相关的技术，本博客自定义 vitepress 主题，这就不可避免地要接触 vitepress
提供 的 API，甚至需要读源码。

#### vitepress 源码阅读

vitepress 是一个基于 node 的 js cli工具，提供了`dev`、`build`、`serve`等命令。

1. 项目结构

观察 `package.json`，配置有
`bin`。在[`package.json规范`](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#bin)中，bin
字段可以指定一个命令行工具，该字段的值可以是一个文件路径，也可以是一个对象，对象中的键值对，键为命令行工具名，值为文件路径。

再看`package.json`的scripts，有很多构建命令，`build`应该是构建命令，其中包含三个子命令。

- `build:prepare`：删除 dist 目录，并执行拷贝 `src/shared` 目录下到 client 和
  node 目录下
- `build:client`: 编译ts，并将vue组件拷贝的指定位置
- `build:node`: 使用 rollup 打包

2. `vitepress build` 命令
