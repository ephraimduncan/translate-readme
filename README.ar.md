# ترجمة الإجراء التمهيدي

## README الترجمة

-   [الإنجليزية](README.md)
-   [الصينية المبسطة](README.zh-CN.md)
-   [الصينية التقليدية](README.zh-TW.md)
-   [هندي](README.hi.md)
-   [فرنسي](README.fr.md)
-   [عربى](README.ar.md)

**GitHub Action لترجمة الملف التمهيدي إلى أي لغة**

هذا إجراء GitHub يقوم تلقائيًا بترجمة الملف التمهيدي في الريبو الخاص بك إلى لغة محددة.

_تقديم ل[DEV: إجراءات جيثب مفتوحة المصدر!](https://dev.to/devteam/announcing-the-github-actions-hackathon-on-dev-3ljn) hackathon_

## يثبت

1.  **أضف ملف سير عمل** to your project (e.g. `.github/workflows/readme.yml`):


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

## إعدادات

### Options

يمكنك تكوين الإجراء بشكل أكبر باستخدام الخيارات التالية:

-   `LANG`: اللغة التي تريد ترجمة الملف التمهيدي إليها. الافتراضي هو الصينية المبسطة. (أنا غاني) يمكن العثور على اللغات المدعومة أدناه.
    (إفتراضي:`zh-CH`) (مطلوب:`false`)

## اللغات المعتمدة

يمكن العثور على اللغات المدعومة هنا[هتبص://كلود.جوجل.كوم/ترانسلت/دكس/لانججص](https://cloud.google.com/translate/docs/languages)

### مشاكل

الشيك[هنا](https://github.com/dephraiim/translate-readme/issues/1)للقضايا المتعلقة بهذا الإجراء.

### تطوير

Suggestions and contributions are always welcome!

### رخصة

[مع](./LICENSE)
