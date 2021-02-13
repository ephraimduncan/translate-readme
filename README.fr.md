# Traduire l'action Readme

## README Translation

-   [Anglais](README.md)
-   [Chinois simplifié](README.zh-CN.md)
-   [chinois traditionnel](README.zh-TW.md)
-   [hindi](README.hi.md)
-   [Française](README.fr.md)
-   [arabe](README.ar.md)

**Action GitHub pour traduire Readme dans n'importe quelle langue**

Il s'agit d'une action GitHub qui traduit automatiquement le fichier readme de votre dépôt dans une langue spécifiée.

_Une soumission pour le[DEV: Actions GitHub pour Open Source!](https://dev.to/devteam/announcing-the-github-actions-hackathon-on-dev-3ljn)hackathon_

## Installer

1.  **Ajouter un fichier de workflow**à votre projet (par ex.`.github/workflows/readme.yml`):


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

## Configuration

### Options

Vous pouvez configurer davantage l'action avec les options suivantes:

-   `LANG`: La langue dans laquelle vous souhaitez traduire votre fichier Lisez-moi. La valeur par défaut est le chinois simplifié. (Je suis ghanéen) Les langues prises en charge se trouvent ci-dessous.
    (défaut:`zh-CH`) (obligatoire:`false`)

## Langues prises en charge

Les langues prises en charge peuvent être trouvées ici<https://cloud.google.com/translate/docs/languages>

### Questions

Vérifier[ici](https://github.com/dephraiim/translate-readme/issues/1)pour les problèmes liés à cette action.

### Développement

Les suggestions et contributions sont toujours les bienvenues!

### LICENCE

[AVEC](./LICENSE)
