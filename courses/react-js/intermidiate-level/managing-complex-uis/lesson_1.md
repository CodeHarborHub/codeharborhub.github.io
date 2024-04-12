---
id: lesson-1
title: "Lifting state up for shared state management across components"
sidebar_label: Lesson - 1
sidebar_position: 1
description: "Learn how to lift state up in React to manage shared state across multiple components. Lifting state up is a common pattern in React applications that allows you to share state between components and keep your application's data in sync."
tags: [courses, react-js, intermediate-level, state-management, lifting-state-up]
---

import App from './App';

In React applications, managing shared state between components can be challenging, especially when components are not directly related in the component tree. Lifting state up is a common pattern in React that allows you to manage shared state in a parent component and pass it down to child components as props. This lesson will introduce you to the concept of lifting state up and show you how to use it to share state between components in your React applications.

## What is lifting state up?

Lifting state up is a pattern in React that involves moving the state from child components to their closest common ancestor in the component tree. By lifting state up, you can manage shared state in a parent component and pass it down to child components as props. This pattern helps you keep your application's data in sync and avoid prop drilling, where props are passed through multiple levels of components.

Here's an example of lifting state up in a React application:

<Tabs>
  <TabItem value="App.js" label="App.js">    
    ```jsx
    import React, { useState } from "react";
    import ParentComponent from "./ParentComponent";

    function App() {
      const [count, setCount] = useState(0);

      const incrementCount = () => {
        setCount(count + 1);
      };

      return (
        <div>
          <h1>Count: {count}</h1>
          <ParentComponent count={count} incrementCount={incrementCount} />
        </div>
      );
    }

    export default App;
    ```
   </TabItem>
   <TabItem value="ParentComponent.js" label="ParentComponent.js">        
        ```jsx
        import React from "react";
        import ChildComponent from "./ChildComponent";

        function ParentComponent({ count, incrementCount }) {
          return (
            <div>
              <h2>Parent Component</h2>
              <p>Count: {count}</p>
              <ChildComponent incrementCount={incrementCount} />
            </div>
          );
        }

        export default ParentComponent;
        ```
   </TabItem>
   <TabItem value="ChildComponent.js" label="ChildComponent.js">        
        ```jsx
        import React from "react";

        function ChildComponent({ incrementCount }) {
          return (
            <div>
              <h3>Child Component</h3>
              <button onClick={incrementCount}>Increment Count</button>
            </div>
          );
        }

        export default ChildComponent;
        ```
   </TabItem>
</Tabs>

In this example, we have an `App` component that manages the `count` state using the `useState` hook. The `App` component passes the `count` state and an `incrementCount` function down to the `ParentComponent` as props. The `ParentComponent` then passes the `incrementCount` function down to the `ChildComponent` as a prop. When the `ChildComponent` button is clicked, it calls the `incrementCount` function to update the `count` state in the `App` component.

<BrowserWindow>
    <App />
</BrowserWindow>

By lifting the `count` state up to the `App` component, we can share the state between the `ParentComponent` and `ChildComponent` without having to pass the state through multiple levels of components. This pattern helps keep the application's data in sync and makes it easier to manage shared state across components.

## Benefits of lifting state up

Lifting state up has several benefits in React applications:

- **Shared state management**: Lifting state up allows you to manage shared state in a parent component and pass it down to child components as props. This pattern helps keep the application's data in sync and avoids prop drilling.
- **Data flow control**: By lifting state up, you have more control over the data flow in your application. You can manage the state in a single location and pass it down to child components as needed.
- **Code organization**: Lifting state up helps organize your code by moving the state management logic to a common ancestor in the component tree. This makes it easier to understand and maintain the codebase.
- **Component reusability**: Components that rely on shared state can be reused in different parts of the application without having to manage the state separately. This improves the reusability and maintainability of your components.
- **Performance optimization**: Lifting state up can help optimize the performance of your application by reducing unnecessary re-renders of components that don't depend on the shared state. You can control when and how the state is updated to improve performance.
- **Scalability**: Lifting state up scales well with large applications by providing a centralized approach to managing shared state. As your application grows, you can easily add new components that rely on the shared state without affecting other parts of the application.
- **Debugging**: Lifting state up makes it easier to debug and troubleshoot state-related issues in your application. You can trace the flow of data from the parent component to child components to identify and fix problems more effectively.
- **Testing**: Components that rely on shared state can be tested more easily by mocking the state and props passed down from the parent component. This makes it easier to write unit tests and ensure the correctness of your components.
- **Separation of concerns**: Lifting state up promotes the separation of concerns by moving the state management logic out of individual components and into a common ancestor. This improves the maintainability and readability of your codebase.
- **State encapsulation**: By lifting state up, you encapsulate the state management logic in a single location, making it easier to reason about and update the state. This reduces the risk of state-related bugs and improves the predictability of your application.
- **Code quality**: Lifting state up improves the overall code quality of your application by enforcing a structured approach to managing shared state. You can follow best practices for state management and data flow control to create more maintainable and scalable React applications.
- **Developer experience**: Lifting state up enhances the developer experience by providing a clear and organized way to manage shared state in React applications. Developers can easily understand and work with components that rely on shared state, improving productivity and collaboration.
- **Best practices**: Lifting state up follows best practices for state management in React applications, ensuring that your codebase is well-organized and maintainable. You can leverage the power of React's component-based architecture to create robust and scalable applications.
- **Flexibility**: Lifting state up provides flexibility in managing shared state by allowing you to customize the data flow and state management logic based on your application's requirements. You can adapt the pattern to suit different use cases and scenarios in your application.

By lifting state up in your React applications, you can create more maintainable, scalable, and performant components that share state effectively and improve the overall development experience of your projects.

:::info Try it out

Now that you've learned about lifting state up in React, try implementing this pattern in your own applications. Identify components that rely on shared state and move the state management logic to a common ancestor in the component tree. By lifting state up, you can improve the organization, reusability, and performance of your React components.

Share your app with your friends or on social media. Let them know that you have learned how to lift state up in React and manage shared state across components. And Join our [Discord Community](https://discord.gg/5VjTyJcf) to share your work and get feedback from other learners.

:::

## Conclusion

Lifting state up is a powerful pattern in React that allows you to manage shared state across components by moving the state to a common ancestor in the component tree. By lifting state up, you can improve the organization, reusability, and performance of your React components, making it easier to manage complex data flows and keep your application's data in sync. Start using the lifting state up pattern in your React applications to create more maintainable, scalable, and performant components that share state effectively and enhance the overall development experience of your projects.