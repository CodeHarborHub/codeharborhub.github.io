---
id: this-keyword-in-javascript
title: this Keyword in JavaScript
sidebar_label: this Keyword
sidebar_position: 34
tags: [JavaScript, this, this keyword, this binding, this value, this context, this in functions, this in methods, this in constructors, this in arrow functions, this in event handlers, this in callbacks, this in nested functions, this in global scope, this in strict mode, this in modules, this in classes, this in prototypes, this in async functions, this in promises, this in generators, this in iterators, this in destructuring, this in spread operator, this in rest parameters, this in default parameters, this in computed properties, this in dynamic properties, this in getters, this in setters, this in static methods, this in private methods, this in public methods, this in protected methods, this in instance methods, this in static properties, this in private properties, this in public properties, this in protected properties, this in instance properties, this in static accessors, this in private accessors]
description: "In this tutorial, we will learn about the `this` keyword in JavaScript. The `this` keyword refers to the object on which a function is being invoked. The value of `this` depends on how a function is called. We will see how `this` works in different contexts such as functions, methods, constructors, arrow functions, event handlers, callbacks, nested functions, global scope, strict mode, modules, classes, prototypes, async functions, promises, generators, iterators, destructuring, spread operator, rest parameters, default parameters, computed properties, dynamic properties, getters, setters, static methods, private methods, public methods, protected methods, instance methods, static properties, private properties, public properties, protected properties, instance properties, static accessors, private accessors, etc."
---

In JavaScript, the `this` keyword refers to the object on which a function is being invoked. The value of `this` depends on how a function is called. The `this` keyword allows you to access the object's properties and methods from within the function.

The `this` keyword is a special keyword in JavaScript that is used to refer to the object on which a function is being invoked. The value of `this` is determined by how a function is called, not where it is defined. The `this` keyword allows you to access the object's properties and methods from within the function.

The `this` keyword can be used in different contexts such as functions, methods, constructors, arrow functions, event handlers, callbacks, nested functions, global scope, strict mode, modules, classes, prototypes, async functions, promises, generators, iterators, destructuring, spread operator, rest parameters, default parameters, computed properties, dynamic properties, getters, setters, static methods, private methods, public methods, protected methods, instance methods, static properties, private properties, public properties, protected properties, instance properties, static accessors, private accessors, etc.

In this tutorial, we will learn how the `this` keyword works in different contexts in JavaScript.

## `this` in Functions

In JavaScript, the `this` keyword in a function refers to the global object (`window` in browsers, `global` in Node.js) when the function is called in the global scope.

For example:

```javascript title="app.js"
function greet() {
    console.log(this); // Output: Window {...} (in browsers)
}

greet();
```

In the above example, the `this` keyword inside the `greet` function refers to the global object (`Window` in browsers) because the `greet` function is called in the global scope.

## `this` in Methods

In JavaScript, the `this` keyword in a method refers to the object on which the method is being invoked.

For example:

```javascript title="app.js"
const person = {
    name: "Alice",
    greet() {
        console.log(this.name); // Output: Alice
    }
};

person.greet();
```

In the above example, the `this` keyword inside the `greet` method of the `person` object refers to the `person` object because the `greet` method is called on the `person` object.

## `this` in Constructors

In JavaScript, the `this` keyword in a constructor refers to the object being created by the constructor.

For example:

```javascript title="app.js"
function Person(name) {
    this.name = name;
    this.greet = function() {
        console.log("Hello, " + this.name);
    };
}

const person = new Person("Alice");
person.greet(); // Output: Hello, Alice
```

In the above example, the `this` keyword inside the `Person` constructor refers to the object being created by the constructor. The `this.name` property of the object is set to the `name` argument passed to the constructor.

## `this` in Arrow Functions

In JavaScript, the `this` keyword in an arrow function refers to the `this` value of the enclosing lexical context. Arrow functions do not have their own `this` value. Instead, they inherit the `this` value from the surrounding code.

For example:

```javascript title="app.js"
const person = {
    name: "Alice",
    greet: function() {
        const greetArrow = () => {
            console.log(this.name); // Output: Alice
        };

        greetArrow();
    }
};

person.greet();
```

In the above example, the `this` keyword inside the arrow function `greetArrow` refers to the `this` value of the `greet` method of the `person` object because the arrow function does not have its own `this` value.

## `this` in Event Handlers

In JavaScript, the `this` keyword in an event handler refers to the element that triggered the event.

For example:

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Event Handler</title>
</head>
<body>
    <button id="btn">Click Me</button>

    <script>
        const btn = document.getElementById("btn");

        btn.addEventListener("click", function() {
            alert(this.textContent); // Output: Click Me
        });
    </script>
</body>
</html>
```

<BrowserWindow>
    <button onClick={(event)=>{alert(event.target.textContent)}}>Click Me</button>
</BrowserWindow>

In the above example, the `this` keyword inside the event handler function refers to the `button` element that triggered the `click` event.

## `this` in Callbacks

In JavaScript, the `this` keyword in a callback function refers to the global object (`window` in browsers, `global` in Node.js) when the function is called in the global scope.

For example:

```javascript title="app.js"
function greet(callback) {
    callback();
}

function sayHello() {
    console.log(this); // Output: Window {...} (in browsers)
}

greet(sayHello);
```

In the above example, the `this` keyword inside the `sayHello` callback function refers to the global object (`Window` in browsers) because the `sayHello` function is called in the global scope.

## `this` in Nested Functions

In JavaScript, the `this` keyword in a nested function refers to the global object (`window` in browsers, `global` in Node.js) when the function is called in the global scope.

For example:

```javascript title="app.js"
function outer() {
    function inner() {
        console.log(this); // Output: Window {...} (in browsers)
    }

    inner();
}

outer();
```

In the above example, the `this` keyword inside the `inner` nested function refers to the global object (`Window` in browsers) because the `inner` function is called in the global scope.

## `this` in Global Scope

In JavaScript, the `this` keyword in the global scope refers to the global object (`window` in browsers, `global` in Node.js).

For example:

```javascript title="app.js"
console.log(this); // Output: Window {...} (in browsers)
```

In the above example, the `this` keyword in the global scope refers to the global object (`Window` in browsers).

## `this` in Strict Mode

In JavaScript, the `this` keyword in the global scope refers to `undefined` in strict mode.

For example:

```javascript title="app.js"
"use strict";

console.log(this); // Output: undefined
```

In the above example, the `this` keyword in the global scope refers to `undefined` because the code is running in strict mode.

## `this` in Modules

In JavaScript, the `this` keyword in a module refers to `undefined` in strict mode.

For example:

```javascript title="app.js"
console.log(this); // Output: undefined
```

```html title="index.html"

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Module</title>
</head>
<body>
    <script type="module" src="app.js"></script>
</body>
</html>
```

In the above example, the `this` keyword in the module `app.js` refers to `undefined` because the code is running in strict mode.

## `this` in Classes

In JavaScript, the `this` keyword in a class method refers to the object on which the method is being invoked.

For example:

```javascript title="app.js"
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello, " + this.name);
    }
}

const person = new Person("Alice");

person.greet(); // Output: Hello, Alice
```

In the above example, the `this` keyword inside the `greet` method of the `Person` class refers to the `person` object because the `greet` method is called on the `person` object.

## `this` in Prototypes

In JavaScript, the `this` keyword in a prototype method refers to the object on which the method is being invoked.

For example:

```javascript title="app.js"
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log("Hello, " + this.name);
};

const person = new Person("Alice");

person.greet(); // Output: Hello, Alice
```

In the above example, the `this` keyword inside the `greet` prototype method of the `Person` constructor refers to the `person` object because the `greet` method is called on the `person` object.

## `this` in Async Functions

In JavaScript, the `this` keyword in an async function refers to the `this` value of the enclosing lexical context. Async functions do not have their own `this` value. Instead, they inherit the `this` value from the surrounding code.

For example:

```javascript title="app.js"
const person = {
    name: "Alice",
    greet: async function() {
        console.log(this.name); // Output: Alice
    }
};

person.greet();
```

In the above example, the `this` keyword inside the async function `greet` refers to the `this` value of the `person` object because async functions do not have their own `this` value.

## `this` in Promises

In JavaScript, the `this` keyword in a promise callback refers to the global object (`window` in browsers, `global` in Node.js) when the function is called in the global scope.

For example:

```javascript title="app.js"
const person = {
    name: "Alice",
    greet: function() {
        return new Promise((resolve, reject) => {
            resolve(this.name);
        });
    }
};

person.greet().then(name => {
    console.log(name); // Output: Alice
});
```

In the above example, the `this` keyword inside the promise callback refers to the global object (`Window` in browsers) because the promise callback is called in the global scope.

## `this` in Generators

In JavaScript, the `this` keyword in a generator function refers to the `this` value of the enclosing lexical context. Generator functions do not have their own `this` value. Instead, they inherit the `this` value from the surrounding code.

For example:

```javascript title="app.js"
const person = {
    name: "Alice",
    *greet() {
        console.log(this.name); // Output: Alice
    }
};

const generator = person.greet();

generator.next();
```

In the above example, the `this` keyword inside the generator function `greet` refers to the `this` value of the `person` object because generator functions do not have their own `this` value.

## `this` in Iterators

In JavaScript, the `this` keyword in an iterator function refers to the `this` value of the enclosing lexical context. Iterator functions do not have their own `this` value. Instead, they inherit the `this` value from the surrounding code.

For example:

```javascript title="app.js"
const person = {
    name: "Alice",
    [Symbol.iterator]: function*() {
        yield this.name;
    }
};

for (const name of person) {
    console.log(name); // Output: Alice
}
```

In the above example, the `this` keyword inside the iterator function refers to the `this` value of the `person` object because iterator functions do not have their own `this` value.

## `this` in Destructuring

In JavaScript, the `this` keyword in a destructuring assignment refers to the global object (`window` in browsers, `global` in Node.js) when the assignment is done in the global scope.

For example:

```javascript title="app.js"
const person = {
    name: "Alice"
};

const { name } = person;

console.log(this); // Output: Window {...} (in browsers)
```

In the above example, the `this` keyword inside the destructuring assignment refers to the global object (`Window` in browsers) because the assignment is done in the global scope.

## `this` in Spread Operator

In JavaScript, the `this` keyword in a spread operator refers to the global object (`window` in browsers, `global` in Node.js) when the operator is used in the global scope.

For example:

```javascript title="app.js"
const person = {
    name: "Alice"
};

const personCopy = { ...person };

console.log(this); // Output: Window {...} (in browsers)
```

In the above example, the `this` keyword inside the spread operator refers to the global object (`Window` in browsers) because the operator is used in the global scope.

## `this` in Rest Parameters

In JavaScript, the `this` keyword in a rest parameter refers to the global object (`window` in browsers, `global` in Node.js) when the parameter is used in the global scope.

For example:

```javascript title="app.js"
function greet(...args) {
    console.log(this); // Output: Window {...} (in browsers)
}

greet("Alice", "Bob");
```

In the above example, the `this` keyword inside the rest parameter refers to the global object (`Window` in browsers) because the parameter is used in the global scope.

## `this` in Default Parameters

In JavaScript, the `this` keyword in a default parameter refers to the global object (`window` in browsers, `global` in Node.js) when the parameter is used in the global scope.

For example:

```javascript title="app.js"
function greet(name = "Alice") {
    console.log(this); // Output: Window {...} (in browsers)
}

greet();
```

In the above example, the `this` keyword inside the default parameter refers to the global object (`Window` in browsers) because the parameter is used in the global scope.

## `this` in Computed Properties

In JavaScript, the `this` keyword in a computed property refers to the object on which the property is being accessed.

For example:

```javascript title="app.js"
const person = {
    name: "Alice",
    ["greet"]() {
        console.log("Hello, " + this.name);
    }
};

person.greet(); // Output: Hello, Alice
```

In the above example, the `this` keyword inside the computed property `greet` refers to the `person` object because the property is accessed on the `person` object.

## `this` in Dynamic Properties

In JavaScript, the `this` keyword in a dynamic property refers to the object on which the property is being accessed.

For example:

```javascript title="app.js"
const person = {
    name: "Alice",
    greet() {
        console.log("Hello, " + this.name);
    }
};

person["greet"](); // Output: Hello, Alice
```

In the above example, the `this` keyword inside the dynamic property `greet` refers to the `person` object because the property is accessed on the `person` object.

## `this` in Getters

In JavaScript, the `this` keyword in a getter refers to the object on which the property is being accessed.

For example:

```javascript title="app.js"
const person = {
    name: "Alice",
    get greeting() {
        return "Hello, " + this.name;
    }
};

console.log(person.greeting); // Output: Hello, Alice
```

In the above example, the `this` keyword inside the getter `greeting` refers to the `person` object because the property is accessed on the `person` object.

## `this` in Setters

In JavaScript, the `this` keyword in a setter refers to the object on which the property is being set.

For example:

```javascript title="app.js"
const person = {
    _name: "",
    set name(value) {
        this._name = value;
    },
    get name() {
        return this._name;
    }
};

person.name = "Alice";

console.log(person.name); // Output: Alice
```

In the above example, the `this` keyword inside the setter `name` refers to the `person` object because the property is set on the `person` object.

## `this` in Static Methods

In JavaScript, the `this` keyword in a static method refers to the class itself, not an instance of the class.

For example:

```javascript title="app.js"
class Person {
    static greet() {
        console.log("Hello, world");
    }
}

Person.greet(); // Output: Hello, world
```

In the above example, the `this` keyword inside the static method `greet` refers to the `Person` class itself, not an instance of the class.

## `this` in Private Methods

In JavaScript, the `this` keyword in a private method refers to the object on which the method is being invoked.

For example:

```javascript title="app.js"
class Person {
    #name;

    constructor(name) {
        this.#name = name;
    }

    #greet() {
        console.log("Hello, " + this.#name);
    }

    greet() {
        this.#greet();
    }
}

const person = new Person("Alice");

person.greet(); // Output: Hello, Alice
```

In the above example, the `this` keyword inside the private method `#greet` of the `Person` class refers to the `person` object because the private method is called on the `person` object.

## `this` in Public Methods

In JavaScript, the `this` keyword in a public method refers to the object on which the method is being invoked.

For example:

```javascript title="app.js"
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello, " + this.name);
    }
}

const person = new Person("Alice");

person.greet(); // Output: Hello, Alice
```

In the above example, the `this` keyword inside the public method `greet` of the `Person` class refers to the `person` object because the public method is called on the `person` object.

## `this` in Protected Methods

In JavaScript, the `this` keyword in a protected method refers to the object on which the method is being invoked.

For example:

```javascript title="app.js"
class Person {
    constructor(name) {
        this.name = name;
    }

    #greet() {
        console.log("Hello, " + this.name);
    }

    greet() {
        this.#greet();
    }
}

const person = new Person("Alice");

person.greet(); // Output: Hello, Alice
```

In the above example, the `this` keyword inside the protected method `#greet` of the `Person` class refers to the `person` object because the protected method is called on the `person` object.

## `this` in Instance Methods

In JavaScript, the `this` keyword in an instance method refers to the object on which the method is being invoked.

For example:

```javascript title="app.js"
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello, " + this.name);
    }
}

const person = new Person("Alice");

person.greet(); // Output: Hello, Alice
```

In the above example, the `this` keyword inside the instance method `greet` of the `Person` class refers to the `person` object because the instance method is called on the `person` object.

## `this` in Static Properties

In JavaScript, the `this` keyword in a static property refers to the class itself, not an instance of the class.

For example:

```javascript title="app.js"
class Person {
    static name = "Alice";

    static greet() {
        console.log("Hello, " + this.name);
    }
}

Person.greet(); // Output: Hello, Alice
```

In the above example, the `this` keyword inside the static property `name` of the `Person` class refers to the `Person` class itself, not an instance of the class.

## `this` in Private Properties

In JavaScript, the `this` keyword in a private property refers to the object on which the property is being accessed.

For example:

```javascript title="app.js"

class Person {
    #name;

    constructor(name) {
        this.#name = name;
    }

    greet() {
        console.log("Hello, " + this.#name);
    }
}

const person = new Person("Alice");

person.greet(); // Output: Hello, Alice
```

In the above example, the `this` keyword inside the private property `#name` of the `Person` class refers to the `person` object because the property is accessed on the `person` object.

## `this` in Public Properties

In JavaScript, the `this` keyword in a public property refers to the object on which the property is being accessed.

For example:

```javascript title="app.js"

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello, " + this.name);
    }
}

const person = new Person("Alice");

person.greet(); // Output: Hello, Alice
```

In the above example, the `this` keyword inside the public property `name` of the `Person` class refers to the `person` object because the property is accessed on the `person` object.

## `this` in Protected Properties

In JavaScript, the `this` keyword in a protected property refers to the object on which the property is being accessed.

For example:

```javascript title="app.js"

class Person {
    #name;

    constructor(name) {
        this.#name = name;
    }

    greet() {
        console.log("Hello, " + this.#name);
    }
}

const person = new Person("Alice");

person.greet(); // Output: Hello, Alice
```

In the above example, the `this` keyword inside the protected property `#name` of the `Person` class refers to the `person` object because the property is accessed on the `person` object.


## `this` in Static Accessors

In JavaScript, the `this` keyword in a static accessor refers to the class itself, not an instance of the class.

For example:

```javascript title="app.js"
class Person {
    static #name = "Alice";

    static get name() {
        return this.#name;
    }

    static set name(value) {
        this.#name = value;
    }
}

console.log(Person.name); // Output: Alice

Person.name = "Bob";

console.log(Person.name); // Output: Bob
```

In the above example, the `this` keyword inside the static accessor `name` of the `Person` class refers to the `Person` class itself, not an instance of the class.

:::info 🤖🏋️‍♂️ 

The `this` keyword in JavaScript is a powerful feature that allows you to access the object's properties and methods from within a function. The value of `this` depends on how a function is called. By understanding how `this` works in different contexts, you can write more flexible and reusable code.

:::

## Conclusion

In this tutorial, we have learned about the `this` keyword in JavaScript. The `this` keyword refers to the object on which a function is being invoked. The value of `this` depends on how a function is called. We have seen how `this` works in different contexts such as functions, methods, constructors, arrow functions, event handlers, callbacks, nested functions, global scope, strict mode, modules, classes, prototypes, async functions, promises, generators, iterators, destructuring, spread operator, rest parameters, default parameters, computed properties, dynamic properties, getters, setters, static methods, private methods, public methods, protected methods, instance methods, static properties, private properties, public properties, protected properties, static accessors, etc.