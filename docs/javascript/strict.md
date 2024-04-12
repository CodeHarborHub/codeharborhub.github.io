---
id: strict-mode-in-javascript
title: Strict Mode in JavaScript
sidebar_label: Strict Mode
sidebar_position: 33
tags: [JavaScript, Strict Mode, JavaScript Strict Mode, Strict Mode in JavaScript, Use Strict, Strict Mode Tutorial, Strict Mode Guide, Strict Mode Overview, Strict Mode Basics, Strict Mode Getting Started, Strict Mode Tutorial JavaScript, Strict Mode Guide JavaScript, Strict Mode Overview JavaScript, Strict Mode Basics JavaScript, Strict Mode Getting Started JavaScript]
description: "In this tutorial, we will learn about strict mode in JavaScript. Strict mode is a feature that allows you to place a program or a function in a strict operating context. It helps catch common coding errors and makes the code more secure and optimized."
---

In JavaScript, strict mode is a feature that allows you to place a program or a function in a strict operating context. When strict mode is enabled, the JavaScript engine performs additional checks and enforces stricter rules on the code. This helps catch common coding errors and makes the code more secure and optimized.

## Why Use Strict Mode?

There are several reasons to use strict mode in JavaScript:

1. **Catch Common Errors**: Strict mode helps catch common coding errors and unsafe actions that would otherwise go unnoticed. It throws errors for silent errors that would have been ignored in non-strict mode.
2. **Prevent Global Variables**: In strict mode, assigning a value to an undeclared variable throws an error. This helps prevent accidental creation of global variables.
3. **Optimize Code**: Strict mode enforces stricter rules on the code, which can help optimize the performance of the code and make it run faster.
4. **Improve Security**: Strict mode helps prevent certain actions that are considered unsafe or insecure in JavaScript. It makes the code more secure and less prone to vulnerabilities.
5. **Future Compatibility**: Strict mode is a standard feature of ECMAScript 5 (ES5) and later versions. Using strict mode ensures that the code is compatible with modern JavaScript environments and future versions of the language.
6. **Encourage Best Practices**: Strict mode encourages best practices and helps developers write cleaner, more maintainable code. It enforces stricter rules on variable declarations, function calls, and other aspects of the code.
7. **Enable New Features**: Some new features of JavaScript are only available in strict mode. Using strict mode allows you to take advantage of these features and write more modern and efficient code.
8. **Improve Debugging**: Strict mode helps identify and fix errors in the code more easily. It provides more informative error messages and warnings that can help developers debug the code effectively.
9. **Enhance Readability**: Strict mode makes the code more readable and self-explanatory by enforcing stricter rules on variable declarations, function calls, and other aspects of the code.
10. **Prevent Silent Failures**: Strict mode helps prevent silent failures in the code by throwing errors for common coding errors and unsafe actions. This makes the code more robust and reliable.
11. **Improve Performance**: Strict mode enforces stricter rules on the code, which can help optimize the performance of the code and make it run faster. It eliminates certain JavaScript features that are known to be slow or inefficient.
12. **Reduce Bugs**: Strict mode helps reduce the likelihood of bugs and errors in the code by enforcing stricter rules and catching common coding errors. This can save time and effort in debugging and fixing issues in the code.
13. **Enhance Code Quality**: Strict mode helps improve the quality of the code by enforcing stricter rules on variable declarations, function calls, and other aspects of the code. It encourages best practices and helps developers write cleaner, more maintainable code.

## Enabling Strict Mode

Strict mode can be enabled at different levels in JavaScript:

1. **Global Strict Mode**: To enable strict mode for the entire script, you can add the `"use strict";` directive at the beginning of the script. This applies strict mode to the entire script and all functions defined within the script.

    ```javascript title="app.js"
    "use strict";

    function greet() {
        message = "Hello, World!"; // Error: Uncaught ReferenceError: message is not defined
        console.log(message);
    }

    greet();
    ```

2. **Function Strict Mode**: To enable strict mode for a specific function, you can add the `"use strict";` directive at the beginning of the function. This applies strict mode only to the function in which it is defined.

    ```javascript title="app.js"
    function greet() {
        "use strict";

        message = "Hello, World!"; // Error: Uncaught ReferenceError: message is not defined
        console.log(message);
    }

    greet();
    ```

3. **Module Strict Mode**: In ECMAScript 6 (ES6) and later versions, you can use strict mode in modules by default. Modules are automatically in strict mode, so you don't need to add the `"use strict";` directive explicitly.

    ```javascript title="app.js"
    // app.js (module)
    function greet() {
        message = "Hello, World!"; // Error: Uncaught ReferenceError: message is not defined
        console.log(message);
    }

    greet();
    ```

When strict mode is enabled, the JavaScript engine performs additional checks and enforces stricter rules on the code. It throws errors for common coding errors and unsafe actions that would otherwise go unnoticed in non-strict mode.

## Strict Mode Rules

Strict mode enforces several rules on the code to catch common coding errors and make the code more secure and optimized. Some of the key rules enforced by strict mode include:

1. **No Implicit Globals**: In strict mode, assigning a value to an undeclared variable throws an error. This helps prevent accidental creation of global variables.

    ```javascript title="app.js"
    "use strict";

    message = "Hello, World!"; // Error: Uncaught ReferenceError: message is not defined
    console.log(message);
    ```

2. **No Octal Literals**: In strict mode, octal literals (numbers with a leading zero) are not allowed. Octal literals are considered confusing and error-prone.

    ```javascript title="app.js"
    "use strict";

    let num = 010; // Error: Uncaught SyntaxError: Octal literals are not allowed in strict mode.
    console.log(num);
    ```
    
3. **No Duplicate Parameters**: In strict mode, defining a function with duplicate parameters throws an error. This helps prevent common coding errors and makes the code more secure.

    ```javascript title="app.js"
    "use strict";

    function greet(name, name) { // Error: Uncaught SyntaxError: Duplicate parameter name not allowed in this context
        console.log("Hello, " + name);
    }

    greet("Alice", "Bob");
    ```

4. **No `this` in Global Context**: In strict mode, the `this` keyword in the global context is `undefined`. This helps prevent common coding errors and makes the code more secure.

    ```javascript title="app.js"
    "use strict";

    console.log(this); // Output: undefined
    ```

5. **No `eval` and `arguments`**: In strict mode, the use of `eval` and `arguments` as variable names is not allowed. This helps prevent common coding errors and makes the code more secure.

    ```javascript title="app.js"
    "use strict";

    let eval = 10; // Error: Uncaught SyntaxError: Unexpected eval or arguments in strict mode
    let arguments = 20; // Error: Uncaught SyntaxError: Unexpected eval or arguments in strict mode
    ```

6. **No `with` Statement**: In strict mode, the `with` statement is not allowed. The `with` statement is considered harmful and error-prone.

    ```javascript title="app.js"
    "use strict";

    let person = { name: "Alice" };
    with (person) { // Error: Uncaught SyntaxError: Strict mode code may not include a with statement
        console.log(name);
    }
    ```

7. **No `delete` on Non-configurable Properties**: In strict mode, attempting to delete a non-configurable property throws an error. This helps prevent common coding errors and makes the code more secure.

    ```javascript title="app.js"
    "use strict";

    let obj = {};
    Object.defineProperty(obj, "name", {
        value: "Alice",
        configurable: false
    });

    delete obj.name; // Error: Uncaught TypeError: Cannot delete property 'name' of #<Object>
    ```

8. **No `arguments.callee`**: In strict mode, the `arguments.callee` property is not allowed. This property is considered harmful and error-prone.

    ```javascript title="app.js"
    "use strict";

    function factorial(n) {
        if (n <= 1) {
            return 1;
        } else {
            return n * arguments.callee(n - 1); // Error: Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
        }
    }

    console.log(factorial(5));
    ```

9. **No `this` in Functions**: In strict mode, the `this` keyword in functions is `undefined` if the function is called without an explicit context. This helps prevent common coding errors and makes the code more secure.

    ```javascript title="app.js"
    "use strict";

    function greet() {
        console.log(this); // Output: undefined
    }

    greet();
    ```

10. **No `new` on Non-constructor Functions**: In strict mode, calling a non-constructor function with the `new` keyword throws an error. This helps prevent common coding errors and makes the code more secure.

    ```javascript title="app.js"
    "use strict";

    function greet() {
        console.log("Hello, World!");
    }

    let obj = new greet(); // Error: Uncaught TypeError: greet is not a constructor
    ```

These are some of the key rules enforced by strict mode in JavaScript. By enabling strict mode, you can catch common coding errors and make the code more secure and optimized.

:::info 📚 Learn More:

- [Strict Mode (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
- [Strict Mode in JavaScript (W3Schools)](https://www.w3schools.com/js/js_strict.asp)
- [Understanding ECMAScript 6: The Definitive Guide for JavaScript Developers](https://www.amazon.com/Understanding-ECMAScript-Definitive-JavaScript-Developers/dp/1593277571)
- [JavaScript: The Good Parts](https://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742)

:::

## Conclusion

Strict mode is a feature in JavaScript that allows you to place a program or a function in a strict operating context. It helps catch common coding errors and makes the code more secure and optimized. By enabling strict mode, you can enforce stricter rules on the code, prevent common coding errors, and improve the quality and performance of the code. Strict mode is a standard feature of ECMAScript 5 (ES5) and later versions, and it is recommended to use strict mode in all JavaScript code to ensure compatibility with modern JavaScript environments and future versions of the language.