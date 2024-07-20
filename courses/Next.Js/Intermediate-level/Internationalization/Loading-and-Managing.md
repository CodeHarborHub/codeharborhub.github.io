---
id: lesson-2
title: "Loading and Managing Translations"
sidebar_label: Loading and Managing
sidebar_position: 2
description: "Loading and Managing Translations"
tags: [courses,intermediate-level,FramWorks,Introduction]
---
 

1. **Using `next-i18next`**:
   - Initialize `next-i18next` in your project:
     ```javascript
     // i18n.js
     const NextI18Next = require('next-i18next').default;

     const NextI18NextInstance = new NextI18Next({
       defaultLanguage: 'en',
       otherLanguages: ['fr', 'de'],
     });

     module.exports = NextI18NextInstance;
     module.exports.default = NextI18NextInstance;
     ```

2. **Adding Translation Files**:
   - Create translation files for each language under a `public/locales` directory:
     ```
     public/
     └── locales/
         ├── en/
         │   └── common.json
         ├── fr/
         │   └── common.json
         └── de/
             └── common.json
     ```
   - Example content for `common.json`:
     ```json
     // public/locales/en/common.json
     {
       "welcome": "Welcome",
       "about": "About Us"
     }

     // public/locales/fr/common.json
     {
       "welcome": "Bienvenue",
       "about": "À propos de nous"
     }

     // public/locales/de/common.json
     {
       "welcome": "Willkommen",
       "about": "Über uns"
     }
     ```

3. **Using Translations in Components**:
   - Use the `useTranslation` hook provided by `next-i18next` to load and use translations:
     ```javascript
     // pages/index.js
     import { useTranslation } from 'next-i18next';
     import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

     export default function Home() {
       const { t } = useTranslation('common');

       return <h1>{t('welcome')}</h1>;
     }

     export async function getStaticProps({ locale }) {
       return {
         props: {
           ...(await serverSideTranslations(locale, ['common'])),
         },
       };
     }
     ```