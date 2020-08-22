# 翻译自述动作

**GitHub Action将自述文件翻译成任何语言**

这是一个GitHub Action，可自动将您回购中的自述文件翻译成指定的语言。

_提交的[DEV：开源的GitHub操作！](https://dev.to/devteam/announcing-the-github-actions-hackathon-on-dev-3ljn)黑客马拉松_

## 建立

1.  **添加工作流程文件**到您的项目中（例如`.github/workflows/readme.yml`):

    ```yml
    name: Translate Readme

    on:
      push:
        branches:
          - main
          - master

    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v2
          - name: Setup Node.js
            uses: actions/setup-node@v1
            with:
              node-version: 12.x
          - name: Adding License
            uses: dephraiim/translate-readme@v1
            with:
              LANG: la
    ```

## 组态

### 选件

您可以使用以下选项进一步配置操作：

-   `LANG`：您要将自述文件翻译成的语言。默认为简体中文。 （我是加纳人）可以在下面找到支持的语言。
    （默认：`zh-CH`）（必填：`false`)

## 支持的语言

支持的语言可以在这里找到<https://cloud.google.com/translate/docs/languages>

### 问题

检查一下[这里](https://github.com/dephraiim/translate-readme/issues/1)有关此操作的问题。

### 发展历程

随时欢迎提出建议和贡献！

### 执照

[与](./LICENSE)
