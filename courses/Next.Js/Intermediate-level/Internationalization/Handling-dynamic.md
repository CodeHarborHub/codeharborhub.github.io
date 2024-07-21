---
id: lesson-3
title: "Handling Dynamic Content in Different Languages"
sidebar_label: Handling Languages
sidebar_position: 3
description: "Handling Dynamic Content in Different Languages"
tags: [courses,intermediate-level,FramWorks,Introduction]
---
    

1. **Dynamic Routes with i18n**:
   - Create dynamic route files and fetch localized content based on the locale:
     ```javascript
     // pages/[locale]/[slug].js
     import { useRouter } from 'next/router';
     import { useTranslation } from 'next-i18next';

     export default function Post({ post }) {
       const { t } = useTranslation('common');

       return (
         <div>
           <h1>{t(post.title)}</h1>
           <p>{t(post.content)}</p>
         </div>
       );
     }

     export async function getStaticPaths() {
       // Fetch or define paths for all locales
       const paths = [
         { params: { locale: 'en', slug: 'hello-world' } },
         { params: { locale: 'fr', slug: 'bonjour-le-monde' } },
         { params: { locale: 'de', slug: 'hallo-welt' } },
       ];
       return { paths, fallback: false };
     }

     export async function getStaticProps({ params }) {
       const { locale, slug } = params;
       const post = await fetchPostData(locale, slug);

       return {
         props: {
           post,
           ...(await serverSideTranslations(locale, ['common'])),
         },
       };
     }
     ```

2. **Fetching Localized Data**:
   - Implement a function to fetch localized data:
     ```javascript
     async function fetchPostData(locale, slug) {
       const res = await fetch(`https://api.example.com/posts?locale=${locale}&slug=${slug}`);
       const data = await res.json();
       return data;
     }
     ``` 