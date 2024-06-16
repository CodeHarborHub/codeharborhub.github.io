---
id: classes-in-js
title: Classes in JavaScript
sidebar_label: Classes
sidebar_position: 36
tags: [JavaScript, Classes, ES6, ES2015, ES6 Features, ES2015 Features, ES6 Tutorials, ES2015 Tutorials, ES6 Tutorial, ES2015 Tutorial, ES6 Classes, ES2015 Classes, Classes in JavaScript, Classes in ES6, Classes in ES2015, JavaScript Classes, ES6 Classes Tutorial, ES2015 Classes Tutorial, Classes Tutorial, Classes in JavaScript Tutorial, Classes in ES6 Tutorial, Classes in ES2015 Tutorial, JavaScript Classes Tutorial, ES6 Classes Example, ES2015 Classes Example, Classes Example, Classes in JavaScript Example, Classes in ES6 Example, Classes in ES2015 Example, JavaScript Classes Example, ES6 Classes Syntax, ES2015 Classes Syntax, Classes Syntax, Classes in JavaScript Syntax, Classes in ES6 Syntax, Classes in ES2015 Syntax, JavaScript Classes Syntax, ES6 Classes Syntax Example, ES2015 Classes Syntax Example, Classes Syntax Example, Classes in JavaScript Syntax Example, Classes in ES6 Syntax Example, Classes in ES2015 Syntax Example, JavaScript Classes Syntax Example, ES6 Classes Syntax Tutorial, ES2015 Classes Syntax Tutorial, Classes Syntax Tutorial, Classes in JavaScript Syntax Tutorial, Classes in ES6 Syntax Tutorial, Classes in ES2015 Syntax Tutorial, JavaScript Classes Syntax Tutorial, ES6 Classes Syntax Example Tutorial, ES2015 Classes Syntax Example Tutorial, Classes Syntax Example Tutorial, Classes in JavaScript Syntax Example Tutorial, Classes in ES6 Syntax Example Tutorial, Classes in ES2015 Syntax Example Tutorial, JavaScript Classes Syntax Example Tutorial]
description: "In this tutorial, you will learn about classes in JavaScript, a new feature introduced in ES6 (ES2015) that allows you to create objects using the class keyword."
---

In JavaScript, classes are a new feature introduced in <mark>ES6 (ES2015)</mark> that allows you to create objects using the `class` keyword. Classes are a template for creating objects, providing initial values for state and implementations of behavior.

In this tutorial, you will learn about classes in JavaScript with the help of examples.

## Classes in JavaScript

The syntax for defining a class in JavaScript is as follows:

```javascript title="Class Syntax"
class ClassName {
    constructor(param1, param2, ..., paramN) {
        // constructor body
    }

    method1(param1, param2, ..., paramN) {
        // method1 body
    }

    method2(param1, param2, ..., paramN) {
        // method2 body
    }

    // more methods...
}
```

- `ClassName`: It is the name of the class.
- `constructor`: It is a special method for creating and initializing objects created with a class. It is called when a new instance of the class is created.
- `method1, method2, ..., methodN`: These are the methods of the class.
- `param1, param2, ..., paramN`: These are the parameters of the constructor and methods.
- `this`: It is a reference to the current instance of the class.
- `new`: It is used to create a new instance of the class.
- `extends`: It is used to create a subclass that inherits from another class.
- `super`: It is used to call the constructor of the parent class.
- `static`: It is used to define static methods on a class.
- `get`: It is used to define a getter method for a property.
- `set`: It is used to define a setter method for a property.
- `prototype`: It is used to add properties and methods to the class prototype.

## Classes Examples

Let's see some examples to understand how classes work in JavaScript.

### Example 1: Creating a Class

The following example demonstrates how to create a class in JavaScript:

```javascript title="Creating a Class"
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const john = new Person('John', 30);

console.log(john.greet()); // Output: Hello, my name is John and I am 30 years old.
```

In this example, we have defined a class `Person` with a constructor that initializes the `name` and `age` properties of the class. The `greet` method returns a greeting message with the name and age of the person.

We have created an instance of the `Person` class named `john` and called the `greet` method on it.

### Example 2: Inheritance in Classes

The following example demonstrates how to create a subclass that inherits from another class in JavaScript:

```javascript title="Inheritance in Classes"
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} makes a sound.`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        return `${this.name} barks loudly.`;
    }
}

const dog = new Dog('Buddy', 'Labrador');

console.log(dog.speak()); // Output: Buddy barks loudly.
```

In this example, we have defined a class `Animal` with a constructor that initializes the `name` property and a `speak` method. We have also defined a subclass `Dog` that inherits from the `Animal` class using the `extends` keyword.

The `Dog` class has its own constructor that initializes the `name` and `breed` properties and overrides the `speak` method to return a different message.

We have created an instance of the `Dog` class named `dog` and called the `speak` method on it.

### Example 3: Static Methods in Classes

The following example demonstrates how to define static methods on a class in JavaScript:

```javascript title="Static Methods in Classes"
class MathUtils {
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }
}

console.log(MathUtils.add(5, 3)); // Output: 8
console.log(MathUtils.subtract(5, 3)); // Output: 2
```

In this example, we have defined a class `MathUtils` with two static methods `add` and `subtract` that perform addition and subtraction operations, respectively.

We have called the static methods directly on the class without creating an instance of the class.

:::info 📝 Note
**Importent Points:**

- The `constructor` method is a special method that is called when a new instance of the class is created.
- The `this` keyword is used to refer to the current instance of the class.
- The `extends` keyword is used to create a subclass that inherits from another class.
- Static methods are called on the class itself, not on instances of the class.
- The `super` keyword is used to call the constructor of the parent class.
- Getters and setters are used to define getter and setter methods for properties.
- The `prototype` property is used to add properties and methods to the class prototype.
- Arrow functions are not suitable for defining class methods as they do not have their own `this` value.
- Classes in JavaScript are syntactic sugar over the existing prototype-based inheritance model.
- Classes in JavaScript are first-class citizens and can be passed as arguments, returned from functions, and assigned to variables.
- Classes in JavaScript are not hoisted, so they must be defined before they are used.
- Classes in JavaScript can be defined in strict mode or non-strict mode.
- Classes in JavaScript can be defined in the global scope or inside a function.
- Classes in JavaScript can be defined using the `class` keyword or the `function` keyword.
:::

## Conclusion

In this tutorial, you learned about classes in JavaScript, a new feature introduced in ES6 (ES2015) that allows you to create objects using the `class` keyword. You also learned about constructors, methods, inheritance, static methods, and other features of classes in JavaScript.