# 翻譯自述文件操作

## 自述文件翻譯

-   [英語](README.md)
-   [簡體中文](README.zh-CN.md)
-   [繁體中文](README.zh-TW.md)
-   [印地語](README.hi.md)
-   [法語](README.fr.md)
-   [阿拉伯](README.ar.md)

**GitHub Action 將自述文件翻譯成任何語言**

這是一個 GitHub Action，可以自動將你的 repo 中的自述文件翻譯成指定的語言。

_提交的[DEV：GitHub 開源行動！](https://dev.to/devteam/announcing-the-github-actions-hackathon-on-dev-3ljn)黑客馬拉松_

## 設置

1.  **添加工作流文件**到您的項目（例如`.github/workflows/readme.yml`):

```yaml
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
```

## 配置

### 選項

您可以使用以下選項進一步配置操作：

-   `LANG`：您要將自述文件翻譯成的語言。默認為簡體中文。 （我是加納人）可在下方找到支持的語言。
    （默認：`zh-CH`） （必需的：`false`)

## Supported Languages

可在此處找到支持的語言<https://cloud.google.com/translate/docs/languages>

### 問題

查看[這裡](https://github.com/dephraiim/translate-readme/issues/1)與此操作相關的問題。

### 發展

隨時歡迎提出建議和貢獻！

### 執照

[和](./LICENSE)
