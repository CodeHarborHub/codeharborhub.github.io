---
id: arrow-function-in-js
title: Arrow Function in JavaScript
sidebar_label: Arrow Function
sidebar_position: 35
tags: [JavaScript, Arrow Function, ES6, ES2015, ES6 Features, ES2015 Features, ES6 Tutorials, ES2015 Tutorials, ES6 Tutorial, ES2015 Tutorial, ES6 Arrow Function, ES2015 Arrow Function, Arrow Function in JavaScript, Arrow Function in ES6, Arrow Function in ES2015, JavaScript Arrow Function, ES6 Arrow Function Tutorial, ES2015 Arrow Function Tutorial, Arrow Function Tutorial, Arrow Function in JavaScript Tutorial, Arrow Function in ES6 Tutorial, Arrow Function in ES2015 Tutorial, JavaScript Arrow Function Tutorial, ES6 Arrow Function Example, ES2015 Arrow Function Example, Arrow Function Example, Arrow Function in JavaScript Example, Arrow Function in ES6 Example, Arrow Function in ES2015 Example, JavaScript Arrow Function Example, ES6 Arrow Function Syntax, ES2015 Arrow Function Syntax, Arrow Function Syntax, Arrow Function in JavaScript Syntax, Arrow Function in ES6 Syntax, Arrow Function in ES2015 Syntax, JavaScript Arrow Function Syntax, ES6 Arrow Function Syntax Example, ES2015 Arrow Function Syntax Example, Arrow Function Syntax Example, Arrow Function in JavaScript Syntax Example, Arrow Function in ES6 Syntax Example, Arrow Function in ES2015 Syntax Example, JavaScript Arrow Function Syntax Example, ES6 Arrow Function Syntax Tutorial, ES2015 Arrow Function Syntax Tutorial, Arrow Function Syntax Tutorial, Arrow Function in JavaScript Syntax Tutorial, Arrow Function in ES6 Syntax Tutorial, Arrow Function in ES2015 Syntax Tutorial, JavaScript Arrow Function Syntax Tutorial, ES6 Arrow Function Syntax Example Tutorial, ES2015 Arrow Function Syntax Example Tutorial, Arrow Function Syntax Example Tutorial, Arrow Function in JavaScript Syntax Example Tutorial, Arrow Function in ES6 Syntax Example Tutorial, Arrow Function in ES2015 Syntax Example Tutorial, JavaScript Arrow Function Syntax Example Tutorial]
description: "In this tutorial, we will learn about the Arrow Function in JavaScript with the help of examples."
---

Arrow Function is a new feature introduced in <mark>ES6 (ES2015)</mark> that allows you to write shorter function syntax. It provides a more concise way to write functions in JavaScript.

In this tutorial, you will learn about Arrow Function in JavaScript with the help of examples.

## Arrow Function Syntax

The syntax of the Arrow Function is as follows:

```javascript title="Arrow Function Syntax"
const functionName = (param1, param2, ..., paramN) => {
    // function body
};
```

- `functionName`: It is the name of the function.   
- `param1, param2, ..., paramN`: These are the parameters of the function.
- `=>`: It is the arrow notation that separates the parameters from the function body.
- `{}`: It contains the function body.
- `return`: If the function body contains a single statement, you can omit the `{}` and `return` keyword.
- `this`: Arrow functions do not have their own `this` value. They inherit the `this` value from the enclosing scope.
- `arguments`: Arrow functions do not have their own `arguments` object. You can use the `arguments` object of the enclosing scope.
- `new`: Arrow functions cannot be used as constructors and will throw an error if you try to use them with the `new` keyword.
- `super`: Arrow functions do not have their own `super` value. They inherit the `super` value from the enclosing scope.
- `prototype`: Arrow functions do not have the `prototype` property.
- `arguments.length`: Arrow functions do not have the `arguments.length` property.
- `new.target`: Arrow functions do not have the `new.target` property.
- `yield`: Arrow functions cannot be used as generators and will throw an error if you try to use them with the `yield` keyword.
- `this` binding: Arrow functions do not bind their own `this` value. They inherit the `this` value from the enclosing scope.

## Arrow Function Examples

Let's see some examples to understand how Arrow Functions work in JavaScript.

### Example 1: Arrow Function with No Parameters

The following example demonstrates an Arrow Function with no parameters:

```javascript title="Arrow Function with No Parameters"
const greet = () => {
    return 'Hello, World!';
};

console.log(greet()); // Output: Hello, World!
```

In this example, the Arrow Function `greet` does not take any parameters and returns the string `'Hello, World!'`.

### Example 2: Arrow Function with One Parameter

The following example demonstrates an Arrow Function with one parameter:

```javascript title="Arrow Function with One Parameter"
const greet = (name) => {
    return `Hello, ${name}!`;
};

console.log(greet('John')); // Output: Hello, John!
```

In this example, the Arrow Function `greet` takes one parameter `name` and returns the string `'Hello, John!'`.

### Example 3: Arrow Function with Multiple Parameters

The following example demonstrates an Arrow Function with multiple parameters:

```javascript title="Arrow Function with Multiple Parameters"

const add = (a, b) => {
    return a + b;
};

console.log(add(5, 3)); // Output: 8
```

In this example, the Arrow Function `add` takes two parameters `a` and `b` and returns the sum of the two numbers.

### Example 4: Arrow Function with a Single Statement

If the function body contains a single statement, you can omit the `{}` and `return` keyword. The statement will be automatically returned.

```javascript title="Arrow Function with a Single Statement"
const greet = (name) => `Hello, ${name}!`;

console.log(greet('John')); // Output: Hello, John!
```

In this example, the Arrow Function `greet` takes one parameter `name` and returns the string `'Hello, John!'`.

### Example 5: Arrow Function with Multiple Statements

If the function body contains multiple statements, you need to use `{}` and the `return` keyword.

```javascript title="Arrow Function with Multiple Statements"
const add = (a, b) => {
    const sum = a + b;
    return sum;
};

console.log(add(5, 3)); // Output: 8
```

In this example, the Arrow Function `add` takes two parameters `a` and `b`, calculates the sum of the two numbers, and returns the result.

### Example 6: Arrow Function with Default Parameters

You can also use default parameters with Arrow Functions:

```javascript title="Arrow Function with Default Parameters"
const greet = (name = 'World') => `Hello, ${name}!`;

console.log(greet()); // Output: Hello, World!


console.log(greet('John')); // Output: Hello, John!
```

In this example, the Arrow Function `greet` takes one parameter `name` with a default value `'World'` and returns the string `'Hello, World!'` if no argument is passed.

### Example 7: Arrow Function with Rest Parameters

You can also use rest parameters with Arrow Functions:

```javascript title="Arrow Function with Rest Parameters"
const sum = (...numbers) => {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
};

console.log(sum(1, 2, 3, 4, 5)); // Output: 15
```

In this example, the Arrow Function `sum` takes rest parameters `...numbers` and calculates the sum of all the numbers passed as arguments.

### Example 8: Arrow Function with Object Literal

You can also return an object literal from an Arrow Function:

```javascript title="Arrow Function with Object Literal"
const person = (name, age) => ({ name, age });

console.log(person('John', 30)); // Output: { name: 'John', age: 30 }
```

In this example, the Arrow Function `person` takes two parameters `name` and `age` and returns an object literal with the properties `name` and `age`.

:::info 📝 Note
When returning an object literal from an Arrow Function, you need to wrap the object literal in parentheses `()` to avoid the confusion with the function body.
:::

## Conclusion

In this tutorial, you learned about Arrow Function in JavaScript with the help of examples. Arrow Functions provide a more concise way to write functions in JavaScript. They are a powerful feature introduced in ES6 (ES2015) that allows you to write shorter function syntax.