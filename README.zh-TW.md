# 翻譯自述動作

## 自述翻譯

-   [英語](README.md)
-   [簡體中文](README.zh-CN.md)
-   [繁體中文](README.zh-TW.md)
-   [印地語](README.hi.md)
-   [Française](README.fr.md)
-   [阿拉伯](README.ar.md)

**GitHub Action將自述文件翻譯成任何語言**

這是一個GitHub Action，可自動將您回購中的自述文件翻譯成指定的語言。

_提交的[DEV：開源的GitHub行動！](https://dev.to/devteam/announcing-the-github-actions-hackathon-on-dev-3ljn)黑客馬拉松_

## 設置

1.  **添加工作流程文件**到您的項目中（例如`.github/workflows/readme.yml`):


    name: Translate README

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
          # ISO Langusge Codes: https://cloud.google.com/translate/docs/languages  
          - name: Adding README - Chinese Simplified
            uses: dephraiim/translate-readme@main
            with:
              LANG: zh-CN
          - name: Adding README - Chinese Traditional
            uses: dephraiim/translate-readme@main
            with:
              LANG: zh-TW
          - name: Adding README - Hindi
            uses: dephraiim/translate-readme@main
            with:
              LANG: hi
          - name: Adding README - Arabic
            uses: dephraiim/translate-readme@main
            with:
              LANG: ar
          - name: Adding README - French
            uses: dephraiim/translate-readme@main
            with:
              LANG: fr

## 配置

### 選項

您可以使用以下選項進一步配置操作：

-   `LANG`: The language you want to translate your readme to. The default is Simplified Chinese. (I'm a Ghanaian) The supported languages can be found below.
    (default: `zh-CH`） （必需的：`false`)

## 支持的語言

支持的語言可以在這裡找到[HTTPS://cloud.Google.com/translate/docs/languages](https://cloud.google.com/translate/docs/languages)

### 問題

查看[這裡](https://github.com/dephraiim/translate-readme/issues/1)有關與此操作有關的問題。

### 發展

隨時歡迎提出建議和貢獻！

### 執照

[和](./LICENSE)
