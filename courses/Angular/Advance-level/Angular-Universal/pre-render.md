---
id: lesson-3
title: "Pre-rendering Angular Applications"
sidebar_label: Pre-rendering
sidebar_position: 3
description: "Pre-rendering Angular Applications"
tags: [courses,Advanced-level,Pre-rendering,Introduction]
---

 

Pre-rendering generates static HTML pages for specific routes at build time, which can be beneficial for performance and SEO.

1. **Using Angular Universal to Pre-render**:
   You can use the Angular Universal command to pre-render specific routes.

   ```bash
   npm run prerender
   ```

   This will generate static HTML files for your defined routes.

2. **Configuring Pre-rendering**:
   Update the `angular.json` file to define routes for pre-rendering:

   ```json
   "prerender": {
     "routes": [
       "/",
       "/about",
       "/contact"
     ]
   }
   ```