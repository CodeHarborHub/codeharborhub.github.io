---
id: lesson-2
title: "Integrating with CSS-in-JS Libraries"
sidebar_label: CSS with Libraries
sidebar_position: 2
description: "Integrating with CSS-in-JS Libraries"
tags: [courses,beginner-level,FramWorks,Introduction]
--- 


Next.js supports popular CSS-in-JS libraries like styled-components and emotion.

**Using styled-components**:

1. **Install styled-components and babel-plugin-styled-components**:
   ```bash
   npm install styled-components
   npm install --save-dev babel-plugin-styled-components
   ```

2. **Create a `.babelrc` File**:
   ```json
   {
     "presets": ["next/babel"],
     "plugins": [["styled-components", { "ssr": true }]]
   }
   ```

3. **Use styled-components in a Component**:
   ```javascript
   // src/pages/index.js
   import styled from 'styled-components';

   const Title = styled.h1`
     color: #0070f3;
     font-size: 4rem;
   `;

   export default function Home() {
     return (
       <div>
         <Title>Welcome to Next.js!</Title>
       </div>
     );
   }
   ```

**Using emotion**:

1. **Install emotion**:
   ```bash
   npm install @emotion/react @emotion/styled
   ```

2. **Use emotion in a Component**:
   ```javascript
   // src/pages/index.js
   /** @jsxImportSource @emotion/react */
   import { css } from '@emotion/react';
   import styled from '@emotion/styled';

   const titleStyle = css`
     color: #0070f3;
     font-size: 4rem;
   `;

   const Title = styled.h1`
     color: #0070f3;
     font-size: 4rem;
   `;

   export default function Home() {
     return (
       <div>
         <h1 css={titleStyle}>Welcome to Next.js with emotion!</h1>
         <Title>Styled with emotion!</Title>
       </div>
     );
   }
   ``` 