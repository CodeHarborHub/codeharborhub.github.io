---
id: lesson-3
title: "Basic styling techniques: Inline styles, internal stylesheets, external stylesheets, and CSS modules"
sidebar_label: Lesson - 3
sidebar_position: 3
description: "Learn how to apply basic styling techniques to your React components using inline styles and external stylesheets. Understand how to style elements, apply CSS properties, and create visually appealing user interfaces."
tags:
  [
    courses,
    react-js,
    beginner-level,
    building-user-interfaces,
    styling,
    inline-styles,
    internal-stylesheets,
    external-stylesheets,
    css-modules,
  ]
---

In this lesson, you will learn how to apply basic styling techniques to your React components. Styling is an essential aspect of web development that allows you to create visually appealing user interfaces. You will explore different methods of styling React components, including inline styles, internal stylesheets, external stylesheets, and CSS modules. By the end of this lesson, you will have a solid understanding of how to style your components effectively.

## Introduction to styling in React

Styling plays a crucial role in creating engaging and user-friendly web applications. In React, you can apply styles to your components using various techniques, each with its advantages and use cases. Whether you want to style a single element or apply styles globally across your application, React provides you with the flexibility to achieve your desired look and feel.

## Inline styles in React

Inline styles allow you to apply styles directly to individual elements within your components. You can define styles as JavaScript objects and pass them as props to the `style` attribute of an element. Inline styles provide a convenient way to apply dynamic styles based on component state or props.

Here's an example of using inline styles in React:

```jsx title="InlineStyleExample.js"
import React from "react";

function InlineStyleExample() {
  const buttonStyle = {
    backgroundColor: "blue",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    border: "none",
  };

  return <button style={buttonStyle}>Click me</button>;
}

export default InlineStyleExample;
```

<BrowserWindow minHeight="300px">
  <button style={{ backgroundColor: "blue", color: "white", padding: "10px 20px", borderRadius: "5px", cursor: "pointer", border: "none" }}>Click me</button>
</BrowserWindow>

In the above example, we define a `buttonStyle` object that contains CSS properties as key-value pairs. We then apply this style object to the `style` attribute of the button element to customize its appearance.

## Internal stylesheets in React

Internal stylesheets allow you to define styles within your components using the `style` tag. You can write CSS rules directly in your component file and apply them to specific elements. Internal stylesheets provide a way to encapsulate styles within a component and avoid global style conflicts.

Here's an example of using internal stylesheets in React:

```jsx title="InternalStylesheetExample.js"
import React from "react";

function InternalStylesheetExample() {
  return (
    <div>
      <style>
        {`
          .container {
            background-color: lightgray;
            padding: 20px;
            border-radius: 5px;
            color: black;
          }
        `}
      </style>
      <div className="container">Styled container</div>
    </div>
  );
}

export default InternalStylesheetExample;
```

<BrowserWindow minHeight="300px">
  <div style={{ backgroundColor: "lightgray", padding: "20px", borderRadius: "5px", color: "black" }}>Styled container</div>
</BrowserWindow>

In this example, we use the `style` tag to define CSS rules for the `.container` class. The styles are applied to the `div` element with the `container` class name, creating a visually styled container.

## External stylesheets in React

External stylesheets allow you to define styles in separate CSS files and import them into your components. This approach helps maintain a clean separation between your component logic and styling, making it easier to manage styles across multiple components.

<Tabs>
  <TabItem value="styles.css" label="styles.css">
     ```css
      .container {
       background-color: lightgray;
       padding: 20px;
       border-radius: 5px;
       color: black;
      }
     ```
  </TabItem>
  <TabItem value="ExternalStylesheetExample.js" label="ExternalStylesheetExample.js">
    ```jsx
    import React from "react";
    import "./styles.css";
   
    function ExternalStylesheetExample() {
      return <div className="container">Styled container</div>;
    }
   
    export default ExternalStylesheetExample;
    ```
  </TabItem>
</Tabs>

<BrowserWindow minHeight="300px">
  <div style={{ backgroundColor: "lightgray", padding: "20px", borderRadius: "5px", color: "black" }}>Styled container</div>
</BrowserWindow>

In this example, we define a CSS file named `styles.css` that contains styles for the `.container` class. We import this CSS file into the `ExternalStylesheetExample` component and apply the styles to the `div` element with the `container` class.

## CSS modules in React

CSS modules provide a way to scope CSS styles locally to a component, preventing style conflicts and improving maintainability. When you use CSS modules, each component gets its unique CSS class names, ensuring that styles are applied only to the intended elements.

Here's an example of using CSS modules in React:

<Tabs>
  <TabItem value="styles.module.css" label="styles.module.css">
    ```css
    .container {
      background-color: lightgray;
      padding: 20px;
      border-radius: 5px;
      color: black;
    }
    ```
  </TabItem>
  <TabItem value="CSSModulesExample.js" label="CSSModulesExample.js">
    ```jsx
    import React from "react";
    import styles from "./styles.module.css";
   
    function CSSModulesExample() {
      return <div className={styles.container}>Styled container</div>;
    }
   
    export default CSSModulesExample;
    ```
  </TabItem>
</Tabs>

<BrowserWindow minHeight="300px">
  <div style={{ backgroundColor: "lightgray", padding: "20px", borderRadius: "5px", color: "black" }}>Styled container</div>
</BrowserWindow>

In this example, we define a CSS module file named `styles.module.css` that contains styles for the `.container` class. We import the CSS module into the `CSSModulesExample` component and apply the styles using the unique class name generated by CSS modules.

:::info
When using CSS modules, the class names are automatically scoped to the component, preventing global style conflicts and ensuring that styles are applied correctly. This approach is particularly useful in large-scale applications with complex styling requirements.
:::

:::tip 
Experiment with different styling techniques in your React projects to find the best approach that suits your needs. Each styling method has its advantages and use cases, so choose the one that works best for your specific requirements.
:::

## Conclusion

Styling your React components is an essential skill that allows you to create visually appealing user interfaces. By using inline styles, internal stylesheets, external stylesheets, and CSS modules, you can customize the appearance of your components and enhance the user experience. Experiment with different styling techniques to find the best approach for your projects and create stunning web applications.