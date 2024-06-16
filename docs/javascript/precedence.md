---
id: precedence-and-associativity-of-operators-in-javascript
title: Precedence and Associativity of Operators in JavaScript
sidebar_label: Precedence and Associativity of Operators
sidebar_position: 30
tags: [JavaScript, Operators, Precedence, Associativity]
description: "In this tutorial, we will learn about the precedence and associativity of operators in JavaScript. The precedence of operators determines the order in which operators are evaluated in an expression. The associativity of operators determines the order in which operators of the same precedence are evaluated in an expression. We will see some examples to understand the precedence and associativity of operators in JavaScript."
---

In JavaScript, the precedence of operators determines the order in which operators are evaluated in an expression. The precedence of operators is used to determine the grouping of terms in an expression. This affects the order of evaluation of an expression.

JavaScript follows the same precedence rules as in mathematics. The following table lists the precedence and associativity of JavaScript operators.

| No. | Operator | Description | Associativity | 
| :---: | :------- | :---------- | :------------- |
| 1 | `.` | Member Access | Left-to-right |
| 2 | `[]` | Member Access | Left-to-right |
| 3 | `()` | Function Call | Left-to-right |
| 4 | `++` `--` | Postfix Increment, Postfix Decrement | Left-to-right |
| 5 | `++` `--` | Prefix Increment, Prefix Decrement | Right-to-left |
| 6 | `!` `~` `+` `-` `typeof` `void` `delete` | Unary Operators | Right-to-left |
| 7 | `**` | Exponentiation | Right-to-left |
| 8 | `*` `/` `%` | Multiplication, Division, Remainder | Left-to-right |
| 9 | `+` `-` | Addition, Subtraction | Left-to-right |
| 10 | `<<` `>>` `>>>` | Bitwise Shifts | Left-to-right |
| 11 | `<` `<=` `>` `>=` `in` `instanceof` | Relational Operators | Left-to-right |
| 12 | `==` `!=` `===` `!==` | Equality Operators | Left-to-right |
| 13 | `&` | Bitwise AND | Left-to-right |
| 14 | `^` | Bitwise XOR | Left-to-right |
| 15 | `|` | Bitwise OR | Left-to-right |
| 16 | `&&` | Logical AND | Left-to-right |
| 17 | `||` | Logical OR | Left-to-right |
| 18 | `? :` | Conditional | Right-to-left |
| 19 | `=` `+=` `-=` `*=` `/=` `%=` `<<=` `>>=` `>>>=` `&=` `^=` `|=` | Assignment | Right-to-left |
| 20 | `,` | Comma | Left-to-right |

The precedence of operators determines the order in which operators are evaluated in an expression. Operators with higher precedence are evaluated first. For example, the multiplication operator `*` has a higher precedence than the addition operator `+`. So, the expression `2 + 3 * 4` is evaluated as `2 + (3 * 4)`.

The associativity of operators determines the order in which operators of the same precedence are evaluated in an expression. For example, the addition operator `+` is left-to-right associative. So, the expression `2 + 3 + 4` is evaluated as `(2 + 3) + 4`.

Let's see some examples to understand the precedence and associativity of operators in JavaScript.

## Example: Precedence and Associativity of Operators

```js title="app.js"
// Precedence and Associativity of Operators

// Multiplication has higher precedence than addition

let result1 = 2 + 3 * 4; // 2 + (3 * 4) = 2 + 12 = 14 

console.log(result1); // Output: 14

// Addition is left-to-right associative

let result2 = 2 + 3 + 4; // (2 + 3) + 4 = 5 + 4 = 9

console.log(result2); // Output: 9
```

In this example, we have used the precedence and associativity of operators to evaluate the expressions `2 + 3 * 4` and `2 + 3 + 4`.

When you run the above code, you will get the following output.

```bash title="Output"
14
9
```

In the first expression `2 + 3 * 4`, the multiplication operator `*` has a higher precedence than the addition operator `+`. So, the expression is evaluated as `2 + (3 * 4)`, which results in `14`.

In the second expression `2 + 3 + 4`, the addition operator `+` is left-to-right associative. So, the expression is evaluated as `(2 + 3) + 4`, which results in `9`.

That's all for the precedence and associativity of operators in JavaScript. You can use the precedence and associativity of operators to evaluate complex expressions in JavaScript.

I hope this tutorial helps you to understand the precedence and associativity of operators in JavaScript.