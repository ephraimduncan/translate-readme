# रीडमी एक्शन का अनुवाद करें

## README अनुवाद

-   [अंग्रेज़ी](README.md)
-   [सरलीकृत चीनी](README.zh-CN.md)
-   [परंपरागत चीनी](README.zh-TW.md)
-   [हिंदी](README.hi.md)
-   [फ्रेंच](README.fr.md)
-   [अरब](README.ar.md)

**किसी भी भाषा में रीडमी का अनुवाद करने के लिए गिटहब एक्शन**

यह एक गिटहब एक्शन है जो आपके रेपो में रीडमी को एक निर्दिष्ट भाषा में स्वचालित रूप से अनुवादित करता है।

_के लिए एक सबमिशन[देव: ओपन सोर्स के लिए GitHub क्रियाएँ!](https://dev.to/devteam/announcing-the-github-actions-hackathon-on-dev-3ljn)आयोजित हैकथॉन_

## स्थापित करना

1.  **वर्कफ़्लो फ़ाइल जोड़ें**आपकी परियोजना के लिए (उदा।`.github/workflows/readme.yml`):


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

आप निम्नलिखित विकल्पों के साथ आगे की कार्रवाई को कॉन्फ़िगर कर सकते हैं:

-   `LANG`: जिस भाषा में आप अपने रीडमी का अनुवाद करना चाहते हैं। डिफ़ॉल्ट सरलीकृत चीनी है। (मैं घाना का हूं) समर्थित भाषाएं नीचे पाई जा सकती हैं।
    (चूक:`zh-CH`) (आवश्यक:`false`)

## समर्थित भाषाएँ

समर्थित भाषाएं यहां मिल सकती हैं[हत्तपः://क्लाउड.गूगल.कॉम/ट्रांसलेट/डॉक्स/लैंग्वेजेज](https://cloud.google.com/translate/docs/languages)

### मुद्दे

जांच[यहां](https://github.com/dephraiim/translate-readme/issues/1)इस कार्रवाई से संबंधित मुद्दों के लिए।

### विकास

सुझावों और योगदानों का हमेशा स्वागत है!

### LICENSE

[साथ](./LICENSE)
