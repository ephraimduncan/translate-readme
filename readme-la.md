# Factum interpretari Readme

**Factum est autem lingua interpretari GitHub Readme**

This is a GitHub Action that automatically translate the readme in your repo to a specified language.

_A ad submission[NSW: GitHub actiones pro patefacio radix!](https://dev.to/devteam/announcing-the-github-actions-hackathon-on-dev-3ljn)hackathon_

## setup

1.  **Addere file workflow**ad project tua (exampla`.github/workflows/readme.yml`)

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
              # ISO Langusge Code.
              # Supported Languages below
    ```

## configurationis

### options

Porro ad configurare potes agere cum optiones sequuntur:

-   `LANG`: Quod lingua interpretari velis tibi in readme. Simplified Chinese in default est. (Im 'a Ghanaian) De linguae sustineri posse inveniri inferius.
    (Default:`zh-CH`) (Requiritur:`false`)

## fulcitur Linguae

Linguae subnixus, hic inveniri possunt,<https://cloud.google.com/translate/docs/languages>

### quaestiones

represserat[hic](https://github.com/dephraiim/translate-readme/issues/1)et exitibus ad hoc opus.

### Development

Consilia contributions et semper grata!

### LICENTIA

[cUM](./LICENSE)
