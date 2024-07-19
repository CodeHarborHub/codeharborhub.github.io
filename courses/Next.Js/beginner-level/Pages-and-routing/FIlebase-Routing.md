---
id: lesson-2
title: "Understanding the File-Based Routing System"
sidebar_label: File-Based Routing System
sidebar_position: 2
description: "Understanding the File-Based Routing System"
tags: [courses,beginner-level,FramWorks,Introduction]
---
 

Next.js uses a file-based routing system, where the file structure inside the `src/pages` directory defines the routes of the application.

1. **File and Folder Structure**:
   - Each file in `src/pages` represents a unique route based on its name and path.
   - Folders within `src/pages` can contain additional pages and create nested routes.

2. **Example Structure**:
   ```
   src/pages/
   ├── about.js          // Maps to /about
   ├── index.js          // Maps to /
   ├── blog/
   │   ├── index.js      // Maps to /blog
   │   └── [id].js       // Maps to /blog/:id
   ├── contact.js        // Maps to /contact
   └── products/
       ├── index.js      // Maps to /products
       └── [id].js       // Maps to /products/:id
   ```

3. **Dynamic Routing**:
   - Dynamic routes can be created using square brackets in the file name. For example, `[id].js` creates a dynamic route that matches any value in place of `id`:
     ```javascript
     // src/pages/blog/[id].js
     import { useRouter } from 'next/router';

     export default function BlogPost() {
       const router = useRouter();
       const { id } = router.query;

       return <h1>Blog Post {id}</h1>;
     }
     ```
   - This file will be accessible at URLs like `/blog/1`, `/blog/2`, etc., where `1` and `2` are dynamic parameters.

#### Nested Routes

Nested routes can be achieved by creating folders within the `src/pages` directory and adding files within those folders.

1. **Nested Route Example**:
   - Create a `products` directory inside `src/pages`:
     ```
     src/pages/products/
     ├── index.js      // Maps to /products
     └── [id].js       // Maps to /products/:id
     ```

2. **Nested Index Page**:
   - The `index.js` file inside the `products` directory maps to the `/products` route:
     ```javascript
     // src/pages/products/index.js
     export default function Products() {
       return <h1>Products Page</h1>;
     }
     ```

3. **Nested Dynamic Route**:
   - The `[id].js` file inside the `products` directory maps to dynamic routes like `/products/1`, `/products/2`, etc.:
     ```javascript
     // src/pages/products/[id].js
     import { useRouter } from 'next/router';

     export default function Product() {
       const router = useRouter();
       const { id } = router.query;

       return <h1>Product {id}</h1>;
     }
     ```
 