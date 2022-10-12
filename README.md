# Translation readme action

## README translation
- [English](README.md)
- [简体中文](README.zh-CN.md)
- [繁体中文](README.zh-TW.md)
- [हिंदी](README.hi.md)
- [Française](README.fr.md)
- [عربى](README.ar.md)
- [मराठी](README.mr.md)

** GitHub action to translate readme to any language **

This is a GitHub action that automatically translates the readme in your repo to a specific language.

.

## Setup

1. **Add the workflow file** to your project (eg `.github/workflows/readme.yml`):
```
Name: Translate README

above:
  Push:
    Branch:
      - Main
      - Master
Job:
  Build:
    Run-on: ubuntu-latest
    Steps:
      - Uses: actions/checkout@v2
      - Name: Setup Node.js
        Uses: actions/setup-node@v1
        with:
          node-version: 12.x
      # ISO language codes: https://cloud.google.com/translate/docs/languages
      - Name: Adding README - Chinese Simplified
        Uses: dephraiim/translate-readme@main
        with:
          LANG: zh-CN
      - Name: Adding README - Chinese Traditional
        Uses: dephraiim/translate-readme@main
        with:
          LANG: zh-TW
      - Name: README - Adding Hindi
        Uses: dephraiim/translate-readme@main
        with:
          Lang: Hi
      - Name: README - Adding Arabic
        Uses: dephraiim/translate-readme@main
        with:
          LANG: ar
      - Name: README - Adding French
        Uses: dephraiim/translate-readme@main
        with:
          LANGUAGE: fr
```

## configuration

### options

You can configure the action with the following options:

- `LANG`: The language you want your readme to be translated into. The default is Simplified Chinese. (I am Ghanaian) Supported languages ​​can be found below.
  (default: `zh-CH`) (required: `false`)

## Supported languages

Supported languages ​​can be found at https://cloud.google.com/translate/docs/languages

### problem

Check [here](https://github.com/dephraiim/translate-readme/issues/1) for issues related to this action.

### development

Suggestions and contributions are always welcome!

### License

[MIT](./license)
