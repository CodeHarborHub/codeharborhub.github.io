---
id: operators-in-javascript
title: Operators in JavaScript
sidebar_label: Operators
sidebar_position: 1
tags: [JavaScript, Operators, Arithmetic Operators, Assignment Operators, Comparison Operators, Logical Operators, Bitwise Operators, String Operators, Conditional Operator, Type Operators, Comma Operator, Unary Operators, Relational Operators, Grouping Operators, Exponentiation Operator, Nullish Coalescing Operator]
description: What is the operators in JavaScript and how to use it.
---

In JavaScript, operators are used to perform operations on variables and values. They are used to perform arithmetic, comparison, logical, and other operations. JavaScript supports a wide range of operators, including arithmetic operators, assignment operators, comparison operators, logical operators, and more.

> ***In this tutorial, you will learn about different types of operators in JavaScript and how to use them.***

## What are Operators?

Operators are special symbols that are used to perform operations on variables and values (operands). They are used to perform various operations, such as addition, subtraction, multiplication, division, comparison, logical operations, and more.

**JavaScript supports the following types of operators:**

1. **Arithmetic Operators:** Used to perform arithmetic operations, such as addition, subtraction, multiplication, and division.
2. **Assignment Operators:** Used to assign values to variables.
3. **Comparison Operators:** Used to compare two values and return a boolean result.
4. **Logical Operators:** Used to perform logical operations, such as AND, OR, and NOT.
5. **Bitwise Operators:** Used to perform bitwise operations on binary representations of numbers.
6. **String Operators:** Used to concatenate strings.
7. **Conditional (Ternary) Operator:** Used to assign a value to a variable based on a condition.
8. **Type Operators:** Used to determine the type of a variable.
9. **Comma Operator:** Used to evaluate multiple expressions and return the result of the last expression.
10. **Unary Operators:** Used to perform operations on a single operand.
11. **Relational Operators:** Used to determine the relationship between two operands.
12. **Grouping Operators:** Used to control the order of operations.
13. **Exponentiation Operator:** Used to raise a number to the power of another number.
14. **Nullish Coalescing Operator:** Used to provide a default value for a variable if it is `null` or `undefined`.


## Arithmetic Operators

Arithmetic operators are used to perform arithmetic operations on numeric values.

**Here's an example of using arithmetic operators in JavaScript:**

```js title="arithmetic-operators.js"
let x = 10;
let y = 5;

let sum = x + y; // Addition
let difference = x - y; // Subtraction
let product = x * y; // Multiplication
let quotient = x / y; // Division
let remainder = x % y; // Modulus

console.log(sum); // Output: 15
console.log(difference); // Output: 5
console.log(product); // Output: 50
console.log(quotient); // Output: 2
console.log(remainder); // Output: 0
```

In this example, we have used arithmetic operators to perform addition, subtraction, multiplication, division, and modulus operations on the variables `x` and `y`.

| Operator | Description | Example |
| :------: | :---------: | :-----: |
| `+` | Addition | `x + y` |
| `-` | Subtraction | `x - y` |
| `*` | Multiplication | `x * y` |
| `/` | Division | `x / y` |
| `%` | Modulus | `x % y` |
| `++` | Increment | `x++` |
| `--` | Decrement | `x--` |

## Assignment Operators

Assignment operators are used to assign values to variables.

**Here's an example of using assignment operators in JavaScript:**

```js title="assignment-operators.js"
let x = 10;

x += 5; // Equivalent to x = x + 5
console.log(x); // Output: 15

x -= 5; // Equivalent to x = x - 5
console.log(x); // Output: 10

x *= 5; // Equivalent to x = x * 5
console.log(x); // Output: 50

x /= 5; // Equivalent to x = x / 5
console.log(x); // Output: 10

x %= 5; // Equivalent to x = x % 5
console.log(x); // Output: 0
```

In this example, we have used assignment operators to assign values to the variable `x` and perform arithmetic operations on it.

| Operator | Description | Example |
| :------: | :---------: | :-----: |
| `=` | Assignment | `x = 10` |
| `+=` | Addition assignment | `x += 5` |
| `-=` | Subtraction assignment | `x -= 5` |
| `*=` | Multiplication assignment | `x *= 5` |
| `/=` | Division assignment | `x /= 5` |
| `%=` | Modulus assignment | `x %= 5` |

## Comparison Operators

Comparison operators are used to compare two values and return a boolean result.

**Here's an example of using comparison operators in JavaScript:**

```js title="comparison-operators.js"
let x = 10;
let y = 5;

console.log(x > y); // Output: true
console.log(x < y); // Output: false
console.log(x >= y); // Output: true
console.log(x <= y); // Output: false
console.log(x == y); // Output: false
console.log(x != y); // Output: true
```

In this example, we have used comparison operators to compare the values of the variables `x` and `y`.

| Operator | Description | Example |
| :------: | :---------: | :-----: |
| `>` | Greater than | `x > y` |
| `<` | Less than | `x < y` |
| `>=` | Greater than or equal to | `x >= y` |
| `<=` | Less than or equal to | `x <= y` |
| `==` | Equal to | `x == y` |
| `!=` | Not equal to | `x != y` |
| `===` | Strict equal to | `x === y` |
| `!==` | Strict not equal to | `x !== y` |

## Logical Operators

Logical operators are used to perform logical operations on boolean values.

**Here's an example of using logical operators in JavaScript:**

```js title="logical-operators.js"
let x = true;
let y = false;

console.log(x && y); // Output: false
console.log(x || y); // Output: true
console.log(!x); // Output: false
```

In this example, we have used logical operators to perform logical AND, logical OR, and logical NOT operations on the boolean values of the variables `x` and `y`.

| Operator | Description | Example |
| :------: | :---------: | :-----: |
| `&&` | Logical AND | `x && y` |
| `||` | Logical OR | `x || y` |
| `!` | Logical NOT | `!x` |

## Bitwise Operators

Bitwise operators are used to perform bitwise operations on binary representations of numbers.

**Here's an example of using bitwise operators in JavaScript:**

```js title="bitwise-operators.js"
let x = 5; // Binary representation: 0101
let y = 3; // Binary representation: 0011

console.log(x & y); // Output: 1 (Binary representation: 0001)
console.log(x | y); // Output: 7 (Binary representation: 0111)
console.log(x ^ y); // Output: 6 (Binary representation: 0110)
console.log(~x); // Output: -6
console.log(x << 1); // Output: 10 (Binary representation: 1010)
console.log(x >> 1); // Output: 2 (Binary representation: 0010)
console.log(x >>> 1); // Output: 2 (Binary representation: 0010)
```

In this example, we have used bitwise operators to perform bitwise AND, bitwise OR, bitwise XOR, bitwise NOT, left shift, right shift, and zero-fill right shift operations on the binary representations of the numbers `x` and `y`.

| Operator | Description | Example |
| :------: | :---------: | :-----: |
| `&` | Bitwise AND | `x & y` |
| `|` | Bitwise OR | `x | y` |
| `^` | Bitwise XOR | `x ^ y` |
| `~` | Bitwise NOT | `~x` |
| `<<` | Left shift | `x << 1` |
| `>>` | Right shift | `x >> 1` |
| `>>>` | Zero-fill right shift | `x >>> 1` |

## String Operators

String operators are used to concatenate strings.

**Here's an example of using string operators in JavaScript:**

```js title="string-operators.js"
let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;
console.log(fullName); // Output: John Doe
```

In this example, we have used the string concatenation operator (`+`) to concatenate the strings `firstName` and `lastName` and store the result in the variable `fullName`.


## Conditional (Ternary) Operator

The conditional (ternary) operator is used to assign a value to a variable based on a condition.

**Here's an example of using the conditional operator in JavaScript:**

```js title="conditional-operator.js"
let age = 20;

let result = (age >= 18) ? "You are an adult" : "You are a minor";

console.log(result); // Output: You are an adult
```

In this example, we have used the conditional operator to assign the value "You are an adult" to the variable `result` if the condition `age >= 18` is true, and the value "You are a minor" if the condition is false.

## Type Operators

Type operators are used to determine the type of a variable.

**Here's an example of using the `typeof` operator in JavaScript:**

```js title="type-operators.js"
let x = 10;
let y = "Hello";

console.log(typeof x); // Output: number
console.log(typeof y); // Output: string
```

In this example, we have used the `typeof` operator to determine the type of the variables `x` and `y`.

## Comma Operator

The comma operator is used to evaluate multiple expressions and return the result of the last expression.

**Here's an example of using the comma operator in JavaScript:**

```js title="comma-operator.js"
let x = (5 + 3, 7 - 2, 10 * 2);

console.log(x); // Output: 20
```

In this example, we have used the comma operator to evaluate the expressions `5 + 3`, `7 - 2`, and `10 * 2`, and return the result of the last expression `10 * 2`.

## Unary Operators

Unary operators are used to perform operations on a single operand.

**Here's an example of using unary operators in JavaScript:**

```js title="unary-operators.js"
let x = 10;

console.log(-x); // Output: -10
console.log(++x); // Output: 11
console.log(--x); // Output: 10
console.log(+x); // Output: 10  
```

In this example, we have used unary operators to perform negation, increment, decrement, and identity operations on the variable `x`.

## Relational Operators

Relational operators are used to determine the relationship between two operands.

**Here's an example of using relational operators in JavaScript:**

```js title="relational-operators.js"
let x = 10;
let y = 5;

console.log(x > y); // Output: true
console.log(x < y); // Output: false
```

In this example, we have used relational operators to determine the relationship between the values of the variables `x` and `y`.

## Grouping Operators

Grouping operators are used to control the order of operations.

**Here's an example of using grouping operators in JavaScript:**

```js title="grouping-operators.js"
let x = 10;
let y = 5;
let z = 2;

let result = x * (y + z);

console.log(result); // Output: 70
```

In this example, we have used grouping operators to control the order of operations and calculate the result of the expression `x * (y + z)`.

## Exponentiation Operator

The exponentiation operator is used to raise a number to the power of another number.

**Here's an example of using the exponentiation operator in JavaScript:**

```js title="exponentiation-operator.js"
let x = 2;
let y = 3;

console.log(x ** y); // Output: 8
```

In this example, we have used the exponentiation operator to raise the number `x` to the power of the number `y`.

## Nullish Coalescing Operator

The nullish coalescing operator is used to provide a default value for a variable if it is `null` or `undefined`.

**Here's an example of using the nullish coalescing operator in JavaScript:**

```js title="nullish-coalescing-operator.js"
let x = null;
let y = 5;

let result = x ?? y;

console.log(result); // Output: 5
```

In this example, we have used the nullish coalescing operator to provide the value of the variable `y` as the result if the variable `x` is `null` or `undefined`.

## Conclusion

In this tutorial, you have learned about different types of operators in JavaScript and how to use them. You have also seen examples of using arithmetic, assignment, comparison, logical, bitwise, string, conditional, type, comma, unary, relational, grouping, exponentiation, and nullish coalescing operators in JavaScript. Operators are an essential part of JavaScript and are used to perform various operations on variables and values. You can use them to perform arithmetic, comparison, logical, and other operations in your JavaScript programs.

I hope this tutorial has helped you understand the different types of operators in JavaScript and how to use them. Now you can use operators to perform various operations in your JavaScript programs. Happy coding!