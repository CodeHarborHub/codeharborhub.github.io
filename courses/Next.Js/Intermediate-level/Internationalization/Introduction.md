---
id: lesson-1
title: "Internationalization (i18n) in Next.js"
sidebar_label: Internationalization (i18n)
sidebar_position: 1
description: "Internationalization (i18n) in Next.js"
tags: [courses,intermediate-level,FramWorks,Introduction]
---


Internationalization (i18n) is crucial for creating applications that support multiple languages and locales. Next.js offers built-in support for internationalized routing and provides tools to load and manage translations effectively. 

#### Setting Up Internationalization in Next.js

1. **Install Required Packages**:
   - If you need a library to help with translations, such as `next-i18next`, install it:
     ```bash
     npm install next-i18next
     ```

2. **Configure `next.config.js` for i18n**:
   - Add i18n configuration to your `next.config.js` file:
     ```javascript
     // next.config.js
     module.exports = {
       i18n: {
         locales: ['en', 'fr', 'de'], // List of supported locales
         defaultLocale: 'en', // Default locale
       },
     };
     ```

#### Using the Next.js i18n Routing Feature

1. **Creating Locale-specific Files**:
   - Create directories and files for each locale under the `pages` directory:
     ```
     pages/
     ├── index.js
     ├── about.js
     ├── fr/
     │   ├── index.js
     │   └── about.js
     ├── de/
     │   ├── index.js
     │   └── about.js
     ```

2. **Linking Between Locales**:
   - Use the `next/link` component to link between different locales:
     ```javascript
     // pages/index.js
     import Link from 'next/link';
     import { useRouter } from 'next/router';

     export default function Home() {
       const { locale, locales, asPath } = useRouter();

       return (
         <div>
           <h1>Hello World</h1>
           <nav>
             {locales.map((loc) => (
               <Link key={loc} href={asPath} locale={loc}>
                 <a>{loc}</a>
               </Link>
             ))}
           </nav>
         </div>
       );
     }
     ```
