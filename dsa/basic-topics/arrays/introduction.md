---
id: introduction-to-array
title: Introduction to Arrays
sidebar_label: Introduction to Arrays
sidebar_position: 1
---

## Introduction to Arrays

Arrays are one of the most fundamental data structures in computer science. They provide a way to store and access a collection of elements efficiently. An array is a container object that holds a fixed number of values of a single type, indexed by contiguous integers.

## Key Concepts of Arrays

- **Fixed Size**: Once an array is created, its size is fixed and cannot be changed.
- **Indexing**: Each element in an array can be accessed using an index, starting from 0 to size-1.
- **Homogeneous Elements**: All elements in an array are of the same data type.

## Why Use Arrays?

Arrays are commonly used because they provide a simple and efficient way to:

- Store multiple items of the same type together.
- Access elements in constant time (O(1)) using their index.
- Iterate over elements efficiently.

## Visual Representation

Below is a graphical representation of an array with 5 elements:

```plaintext
+---+---+---+---+---+
| 10| 20| 30| 40| 50|
+---+---+---+---+---+
  0   1   2   3   4
```

In the above example, the array `arr` contains 5 elements with values `10`, `20`, `30`, `40`, and `50`. Each element is accessed using its index, starting from `0` to `4`.


## Operations on Arrays

### 1. Accessing Elements

You can access elements of an array using their index. For example, if you have an array `arr` with 5 elements, you can access the first element using `arr[0]`.

```js
let arr = [10, 20, 30, 40, 50];
console.log(arr[0]); // Output: 10
```

### 2. Inserting Elements

To insert an element in an array, you can assign a value to a specific index.

```js
let arr = [10, 20, 30, 40, 50];
arr[2] = 25; // Inserting 25 at index 2
console.log(arr); // Output: [10, 20, 25, 40, 50]
```

### 3. Deleting Elements

Deleting an element in an array can be done by setting the element to `null` or using methods like `splice` in JavaScript.

```js
let arr = [10, 20, 30, 40, 50];
arr.splice(2, 1); // Removing element at index 2
console.log(arr); // Output: [10, 20, 40, 50]
```

## Example Use Case

Consider an example where you need to store the scores of 5 students in a test:

```js
let scores = [85, 90, 78, 92, 88];
console.log("Scores of students:", scores);
```

## Video Explanation

For a detailed visual explanation, you can watch the following video:

<Tabs>
 <TabItem value="English" label="English">
    <LiteYouTubeEmbed
    id="eXFItikqw8c"
    params="autoplay=1&autohide=1&showinfo=0&rel=0"
    title="Introduction to Arrays"
    poster="maxresdefault"
    webp />
  </TabItem>
  <TabItem value="Hindi" label="Hindi">
    <LiteYouTubeEmbed
    id="PyTK_g1l8V8"
    params="autoplay=1&autohide=1&showinfo=0&rel=0"
    title="Introduction to Arrays"
    poster="maxresdefault"
    webp />
  </TabItem>

</Tabs>

## Summary

Arrays are a powerful and efficient way to handle multiple data elements of the same type. They are widely used in various algorithms and data structures due to their simplicity and efficiency.

## Additional Resources

- [GeeksforGeeks: Arrays](https://www.geeksforgeeks.org/array-data-structure/)
- [Khan Academy: Intro to Arrays](https://www.khanacademy.org/computing/computer-science/algorithms/intro-to-arrays)

### Interactive Visualization

You can use the following interactive tool to visualize arrays:

<iframe height="400px" width="100%" src="https://visualgo.net/en/array" title="Visualgo Array Visualization"></iframe>