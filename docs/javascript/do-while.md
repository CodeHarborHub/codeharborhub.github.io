---
id: do-while loop
title: do...while loop
sidebar_label: do...while loop
sidebar_position: 23
tags : [JavaScript,do...while , Loops, js-loops,js-fundamentals]
description: "this tutorial demonstrates how to use do-while with example and description about loops and javascript"
---

# `do...while` Statement

The `do...while` statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.

A `do…while` loop in JavaScript is a control statement in which the code is allowed to execute continuously based on a given boolean condition. It is like a repeating `if` statement.

The `do…while` loop can be used to execute a specific block of code at least once.

## Types of Loops

There are mainly two types of loops:

1. **Entry Controlled Loops**: In this type of loop, the test condition is tested before entering the loop body. `For` Loop and `While` Loops are entry-controlled loops.
2. **Exit Controlled Loops**: In this type of loop, the test condition is tested or evaluated at the end of the loop body. Therefore, the loop body will execute at least once, irrespective of whether the test condition is true or false. The `do...while` loop is an exit controlled loop.

### Example

```javascript
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// Expected output: "12345"
```

**Output:**
```
"12345"
```

## Syntax

```javascript
do
  statement
while (condition);
```

- **statement**: A statement that is executed at least once and re-executed as long as the condition evaluates to true. You can use a block statement to execute multiple statements.
- **condition**: An expression evaluated after each pass through the loop. If this condition evaluates to true, the statement is re-executed. When the condition evaluates to false, execution continues with the statement after the `do...while` loop.

## Description

Like other looping statements, you can use control flow statements inside the statement:

- `break` stops statement execution and goes to the first statement after the loop.
- `continue` stops statement execution and re-evaluates the condition.

The `do...while` statement syntax requires a semicolon at the end, but the automatic semicolon insertion process may insert one for you if the lack of a semicolon results in invalid syntax.

## Examples

### Using `do...while`

In the following example, the `do...while` loop iterates at least once and reiterates until `i` is no longer less than 5.

```javascript
let result = "";
let i = 0;
do {
  i += 1;
  result += `${i} `;
} while (i > 0 && i < 5);

console.log(result);
// Despite i === 0 this will still loop as it starts off without the test
```

### Using `false` as `do...while` Condition

Because the statement is always executed once, `do...while (false)` is the same as executing the statement itself. This is a common idiom in C-like languages, which allows you to use `break` to break out of branching logic early.

```javascript
do {
  if (!user.loggedIn) {
    console.log("You are not logged in");
    break;
  }
  const friends = user.getFriends();
  if (!friends.length) {
    console.log("No friends found");
    break;
  }
  for (const friend of friends) {
    handleFriend(friend);
  }
} while (false);
// The rest of the code
```

In JavaScript, there are some alternatives, such as using a labeled block statement with `break`:

```javascript
handleFriends: {
  if (!user.loggedIn) {
    console.log("You are not logged in");
    break handleFriends;
  }
  const friends = user.getFriends();
  if (!friends.length) {
    console.log("No friends found");
    break handleFriends;
  }
  for (const friend of friends) {
    handleFriend(friend);
  }
}
```

Or using a function:

```javascript
function handleFriends() {
  if (!user.loggedIn) {
    console.log("You are not logged in");
    return;
  }
  const friends = user.getFriends();
  if (!friends.length) {
    console.log("No friends found");
    return;
  }
  for (const friend of friends) {
    handleFriend(friend);
  }
}
```

### Using an Assignment as a Condition

In some cases, it can make sense to use an assignment as a condition, such as this:

```javascript
do {
  // …
} while ((match = regexp.exec(str)));
```

But when you do, there are readability trade-offs. The `while` documentation has a Using an assignment as a condition section with recommendations.

![JavaScript Loops](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN3DMIcoe0Mv5o_NPcGvgIxgXxDpiNHS3uV1o_Z2XuLkBBBj19o30c1T6wH1AYm4iP29c&usqp=CAU)

:::info Note

> If you use a variable in the condition, you must initialize it before the loop, and increment it within the loop. Otherwise, the loop will never end. This will crash your browser. 
> If the condition is always true, the loop will never end. This will also crash your browser.

:::
## Parameters

- **condition** (Required): The condition for running the code block. If true, the loop will start over again, otherwise it ends.
