---
id: return-length-of-arguments-passed
title: Return Length of Arguments Passed
sidebar_label: 2703 - Return Length of Arguments Passed
tags: 
    - Functions
    - Arguments
description: Write a function that returns the count of arguments passed to it.
sidebar_position: 2703
---

## Problem Statement
Write a function `argumentsLength` that returns the count of arguments passed to it.

### Examples

**Example 1:**

```
Input: args = [5]
Output: 1
Explination: 
argumentsLength(5); // 1

One value was passed to the function so it should return 1.
```

**Example 2:**

```
Input: args = [{}, null, "3"]
Output: 3
Explination:
argumentsLength({}, null, "3"); // 3

Three values were passed to the function so it should return 3.
```



### Constraints

- `args` is a valid JSON array
- `0 <= args.length <= 100`

## Solution

### Approach: 

The approach to solve this problem is straightforward. We need to write a function that simply returns the length of the arguments passed to it.

#### Algorithm

To solve the problem of returning the count of arguments passed to a function, we can use the following simple algorithm:

#### Define the Function:
Create a function named argumentsLength that uses the rest parameter syntax (...args) to collect all the arguments passed to the function into an array named args.

#### Return the Length:
Inside the function, return the length of the args array using the length property. This will give the count of the arguments passed to the function.

#### Test the Function:
Write test cases to ensure the function works correctly for different inputs, including cases with one argument, multiple arguments, and no arguments.

#### JavaScript Implementation

```javascript
function argumentsLength(...args) {
    return args.length;
}
```

#### TypeScript Implementation

```typescript
    function argumentsLength(...args: any[]): number {
    return args.length;
}
```

### Complexity Analysis

- **Time Complexity**: $O(1)$ - The time complexity is constant because the length of the arguments is determined in constant time.
- **Space Complexity**: $O(1)$ - The space complexity is constant as we are not using any additional data structures.

### Conclusion

The problem of determining the number of arguments passed to a function has been effectively solved using both JavaScript and TypeScript. The solutions leverage the rest parameter syntax (`...args`) to handle a variable number of arguments, making it versatile and easy to understand.
