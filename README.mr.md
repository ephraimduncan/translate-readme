# भाषांतर रीडमी क्रिया

## README भाषांतर
- [इंग्रजी](README.md)
- [简体中文](README.zh-CN.md)
- [繁体中文](README.zh-TW.md)
- [हिंदी](README.hi.md)
- [Française](README.fr.md)
- [عربى](README.ar.md)
- [मराठी](README.mr.md)

** रीडमीचे कोणत्याही भाषेत भाषांतर करण्यासाठी GitHub क्रिया**

ही एक GitHub क्रिया आहे जी तुमच्या रेपोमधील रीडमीचे एका विशिष्ट भाषेत स्वयंचलितपणे भाषांतर करते.

.

## सेटअप

1. तुमच्या प्रोजेक्टमध्ये **वर्कफ्लो फाइल जोडा** (उदा. `.github/workflows/readme.yml`):
```
नाव: README भाषांतर करा

वर:
  पुश:
    शाखा:
      - मुख्य
      - मास्टर
नोकरी:
  बांधणे:
    रन-ऑन: उबंटू-नवीनतम
    पायऱ्या:
      - वापरते: actions/checkout@v2
      - नाव: सेटअप Node.js
        वापरते: actions/setup-node@v1
        सह:
          नोड-आवृत्ती: 12.x
      # ISO भाषा कोड: https://cloud.google.com/translate/docs/languages
      - नाव: README जोडत आहे - चीनी सरलीकृत
        वापरते: dephraiim/translate-readme@main
        सह:
          LANG: zh-CN
      - नाव: README जोडत आहे - चीनी पारंपारिक
        वापरते: dephraiim/translate-readme@main
        सह:
          LANG: zh-TW
      - नाव: README - हिंदी जोडत आहे
        वापरते: dephraiim/translate-readme@main
        सह:
          लँग: हाय
      - नाव: README - अरबी जोडत आहे
        वापरते: dephraiim/translate-readme@main
        सह:
          LANG: ar
      - नाव: README - फ्रेंच जोडत आहे
        वापरते: dephraiim/translate-readme@main
        सह:
          LANG: fr
```

## कॉन्फिगरेशन

### पर्याय

तुम्ही पुढील पर्यायांसह क्रिया कॉन्फिगर करू शकता:

- `LANG`: ज्या भाषेत तुम्हाला तुमचा रीडमी अनुवादित करायचा आहे. डीफॉल्ट सरलीकृत चीनी आहे. (मी घानायन आहे) समर्थित भाषा खाली आढळू शकतात.
  (डिफॉल्ट: `zh-CH`) (आवश्यक: `false`)

## समर्थित भाषा

समर्थित भाषा https://cloud.google.com/translate/docs/languages ​​येथे आढळू शकतात

### समस्या

या क्रियेशी संबंधित समस्यांसाठी [येथे](https://github.com/dephraiim/translate-readme/issues/1) तपासा.

### विकास

सूचना आणि योगदानांचे नेहमीच स्वागत आहे!

### परवाना

[एमआयटी](./परवाना)
