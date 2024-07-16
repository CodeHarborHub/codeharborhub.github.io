---
id: lesson-3
title: " Media Queries"
sidebar_label:  Media Queries
sidebar_position: 3
description: "Learn to Media Queries"
tags: [courses,intermediate-level,Media Queries,Introduction]
---   
  

Media queries are a CSS feature that allows the application of different styles based on the device's characteristics, such as screen width, height, orientation, and resolution. This enables the creation of responsive layouts that adapt to different screen sizes and devices.

**Syntax:**
```css
@media (condition) {
  /* CSS rules */
}
```

**Common Media Queries:**
- Targeting screen sizes:
  ```css
  @media (max-width: 600px) {
    /* Styles for screens smaller than 600px */
    body {
      background-color: lightcoral;
    }
  }

  @media (min-width: 601px) and (max-width: 1200px) {
    /* Styles for screens between 601px and 1200px */
    body {
      background-color: lightblue;
    }
  }

  @media (min-width: 1201px) {
    /* Styles for screens larger than 1200px */
    body {
      background-color: lightgreen;
    }
  }
  ```

**Examples:**

1. **Changing Layouts Based on Screen Width:**
   ```css
   @media (max-width: 600px) {
     .container {
       flex-direction: column;
     }
   }

   @media (min-width: 601px) and (max-width: 1200px) {
     .container {
       flex-direction: row;
     }
   }

   @media (min-width: 1201px) {
     .container {
       flex-direction: row;
       justify-content: space-between;
     }
   }
   ```
   In this example, the layout of the `.container` element changes based on the screen width.

2. **Adjusting Font Sizes:**
   ```css
   body {
     font-size: 16px;
   }

   @media (max-width: 600px) {
     body {
       font-size: 14px;
     }
   }

   @media (min-width: 1200px) {
     body {
       font-size: 18px;
     }
   }
   ```
   Here, the font size adjusts based on the screen size to ensure readability.

**Using Media Queries for Responsive Images:**
   ```css
   img {
     width: 100%;
     height: auto;
   }

   @media (min-width: 600px) {
     img {
       width: 50%;
     }
   }
   ```

By using media queries, developers can create responsive designs that adapt seamlessly to different devices, enhancing user experience across a wide range of screen sizes.