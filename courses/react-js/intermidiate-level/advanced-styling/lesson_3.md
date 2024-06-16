---
id: lesson-3
title: "BEM naming convention for organized CSS classes"
sidebar_label: Lesson - 3
sidebar_position: 3
description: "Learn how to use the BEM (Block Element Modifier) naming convention to create organized and maintainable CSS classes in your React applications. BEM helps you structure your stylesheets by defining a clear naming convention for CSS classes, making it easier to understand and maintain your styles."
tags:
  [
    courses,
    react-js,
    intermediate-level,
    advanced-styling,
    bem,
    css-naming-convention,
  ]
---

In React applications, managing CSS classes can become challenging as your project grows in size and complexity. The BEM (Block Element Modifier) naming convention provides a structured approach to naming CSS classes, making it easier to organize and maintain your stylesheets. This lesson will introduce you to the BEM naming convention and show you how to use it to create organized CSS classes in your React components.

## What is the BEM naming convention?

BEM is a popular naming convention for CSS classes that stands for Block Element Modifier. It helps you create modular and maintainable stylesheets by defining a clear and consistent naming structure for your CSS classes. BEM divides your styles into three categories:

- **Block**: A standalone component that can be reused across your application.
- **Element**: A part of a block that has no meaning or use outside of the block.
- **Modifier**: A variation or state of a block or element.

By following the BEM naming convention, you can create self-explanatory and reusable CSS classes that are easy to understand and maintain. Here's an example of using BEM in a React component:

```css title="styles.css"
/* Block */
.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
}

/* Element */

.button__icon {
  margin-right: 5px;
}

/* Modifier */

.button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

In this example, we have defined a block `.button`, an element `.button__icon`, and a modifier `.button--disabled` using the BEM naming convention. This structure helps you organize your styles and understand the relationship between different parts of your components.

## How to use BEM in React components

To use the BEM naming convention in your React components, you can apply the BEM structure to your CSS classes and use them in your JSX elements. By following the BEM naming convention, you can create consistent and maintainable styles for your components. Here's an example of using BEM in a React component:

```jsx title="Button.js"
import React from "react";

function Button({ children, disabled }) {
  return (
    <button className={`button ${disabled ? "button--disabled" : ""}`}>
      {children}
      <span className="button__icon">🚀</span>
    </button>
  );
}

export default Button;
```

In this example, we have created a `Button` component that uses the BEM naming convention for its CSS classes. The `button` class represents the block, the `button__icon` class represents the element, and the `button--disabled` class represents the modifier. By following this naming convention, you can create structured and organized CSS classes for your React components.

## Benefits of using the BEM naming convention

Using the BEM naming convention in your React applications offers several benefits:

- **Modularity**: BEM helps you create modular and reusable styles by dividing your components into blocks, elements, and modifiers.
- **Consistency**: BEM provides a consistent naming structure for your CSS classes, making it easier to understand and maintain your stylesheets.
- **Scalability**: BEM scales well with large projects, allowing you to organize and manage your styles effectively as your application grows.
- **Readability**: BEM class names are self-explanatory and descriptive, making it easier for developers to understand the purpose of each CSS class.
- **Maintainability**: BEM makes it easier to update and modify your stylesheets without affecting other parts of your application, improving code maintainability.
- **Collaboration**: BEM promotes collaboration among team members by providing a clear and structured approach to naming CSS classes, ensuring consistency across the project.
- **Accessibility**: BEM class names are accessible and meaningful, making it easier for developers to navigate and work with your stylesheets.
- **Performance**: BEM class names are optimized for performance and efficiency, reducing the risk of conflicts and improving rendering speed.
- **Documentation**: BEM class names serve as documentation for your stylesheets, helping new developers understand the structure and organization of your components.
- **Debugging**: BEM class names make it easier to debug and troubleshoot styling issues in your components, saving time and effort during development.
- **Best practices**: BEM follows best practices for naming CSS classes, ensuring that your stylesheets are well-organized and maintainable.
- **Flexibility**: BEM provides flexibility in naming conventions, allowing you to customize and extend the structure to suit your project's needs.
- **Community support**: BEM is widely adopted in the web development community, making it easier to find resources and tools that support the naming convention.
- **Future-proofing**: BEM is a robust and future-proof naming convention that can adapt to new technologies and trends in web development.
- **Developer experience**: BEM improves the overall developer experience by providing a clear and structured approach to styling components, reducing cognitive load and enhancing productivity.
- **Code quality**: BEM helps maintain code quality by enforcing consistent naming conventions and organization in your stylesheets, leading to cleaner and more maintainable code.
- **Cross-browser compatibility**: BEM class names are compatible with all modern browsers and devices, ensuring a consistent user experience across different platforms.

By using the BEM naming convention in your React applications, you can create organized, maintainable, and scalable stylesheets that improve the overall development experience and code quality of your projects.

:::info Try it out

## Live example of BEM in action

To see the BEM naming convention in action, let's create a simple React component that uses BEM for styling. We'll create a `Card` component that displays a title and description with structured CSS classes following the BEM naming convention. You can view the code for the `Card` component below:

<Tabs>
  <TabItem value="Card.js" label="Card.js">    
    ```jsx
    import React from "react";
    import "./Card.css";

    function Card() {
      return (
        <div className="card">
            <h2 className="card__title">Card Title</h2>
            <p className="card__description">This is a card description.</p>
        </div>
       );
    }

    export default Card;
    ```
  </TabItem>
  <TabItem value="Card.css" label="Card.css">
    ```css
    .card {
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 20px;
        margin: 20px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    }

    .card__title {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    .card__description {
        font-size: 1rem;
        color: #888;
    }
    ```
  </TabItem>
</Tabs>

<BrowserWindow>
    <div style={{border: "1px solid #ccc", borderRadius: "10px", padding:" 20px", margin: "20px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)"}}>
      <h2 style={{fontSize: "1.5rem", marginBottom: "0.5rem"}}>Card Title</h2>
      <p style={{fontSize: "1rem", color: "#888"}}>This is a card description.</p>
    </div>
</BrowserWindow>

In this example, we have created a `Card` component that uses the BEM naming convention for its CSS classes. The `card` class represents the block, the `card__title` class represents the element, and the `card__description` class represents another element. By following the BEM naming convention, we can create structured and organized CSS classes for our components.

:::

## Conclusion

The BEM naming convention is a powerful tool for organizing and maintaining CSS classes in your React applications. By following the BEM structure and naming conventions, you can create modular, reusable, and maintainable stylesheets that scale well with your project. BEM provides a clear and consistent approach to naming CSS classes, making it easier to understand and manage your styles across different components. By adopting the BEM naming convention, you can improve the readability, maintainability, and collaboration of your stylesheets, leading to a more efficient and productive development process.