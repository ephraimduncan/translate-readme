# Readme एक्शन का अनुवाद करें

## README अनुवाद

-   [अंग्रेज़ी](README.md)
-   [सरलीकृत चीनी](README.zh-CN.md)
-   [परंपरागत चीनी](README.zh-TW.md)
-   [हिंदी](README.hi.md)
-   [फ्रेंच](README.fr.md)
-   [अरबी](README.ar.md)

**GitHub किसी भी भाषा में Readme का अनुवाद करने की क्रिया**

यह एक GitHub Action है जो स्वचालित रूप से आपके रेपो में निर्दिष्ट भाषा में रीडमी का अनुवाद करता है।

_के लिए एक सबमिशन[DEV: ओपन सोर्स के लिए GitHub क्रियाएँ!](https://dev.to/devteam/announcing-the-github-actions-hackathon-on-dev-3ljn)आयोजित हैकथॉन_

## सेट अप

1.  **वर्कफ़्लो फ़ाइल जोड़ें**अपनी परियोजना के लिए (उदा।`.github/workflows/readme.yml`):


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

## विन्यास

### विकल्प

आप निम्न विकल्पों के साथ आगे की कार्रवाई को कॉन्फ़िगर कर सकते हैं:

-   `LANG`: जिस भाषा में आप अपने रीडमी का अनुवाद करना चाहते हैं। डिफ़ॉल्ट सरलीकृत चीनी है। (मैं एक घाना हूँ) समर्थित भाषाओं को नीचे पाया जा सकता है।
    (चूक:`zh-CH`) (आवश्यक:`false`)

## समर्थित भाषाएँ

समर्थित भाषाएं यहां पाई जा सकती हैं[हत्तपः://क्लाउड.गूगल.कॉम/ट्रांसलेट/डॉक्स/लैंग्वेजेज](https://cloud.google.com/translate/docs/languages)

### मुद्दे

जाँच[यहां](https://github.com/dephraiim/translate-readme/issues/1)इस कार्रवाई से संबंधित मुद्दों के लिए।

### विकास

Suggestions and contributions are always welcome!

### लाइसेंस

[साथ से](./LICENSE)
