---
id: 06-deque
title: Deque in Data Structures and Algorithms
sidebar_label: Deque
tags:
  - dsa
  - data-structures
  - deque
  - intermediate
  - javascript
  - python
  - c++
  - java
  - programming
  - tutorial
  - typescript
sidebar_position: 5
---

In this tutorial, we will delve into deque (double-ended queue) in Data Structures and Algorithms. We'll explore what deque is, how it's used, and its implementation in various programming languages.


A deque, short for double-ended queue, is a versatile data structure that allows insertion and deletion of elements from both ends. This makes it suitable for scenarios requiring efficient manipulation at both the front and back, such as implementing a queue where elements need to be added and removed from both ends.

A deque supports the following operations:

1. **Insertion at Front**: Adds an element to the front of the deque.
2. **Insertion at Back**: Adds an element to the back of the deque.
3. **Deletion at Front**: Removes and returns the element at the front of the deque.
4. **Deletion at Back**: Removes and returns the element at the back of the deque.
5. **Peek at Front**: Returns the element at the front of the deque without removing it.
6. **Peek at Back**: Returns the element at the back of the deque without removing it.
7. **isEmpty**: Checks if the deque is empty.
8. **Size**: Returns the number of elements in the deque.
9. **Clear**: Removes all elements from the deque.

Additionally, deques may support other operations such as searching, copying, iterating, merging, reversing, sorting, and mapping.

![dequeue image](https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fm7ak5h7mlz8ox6ut5dja.png)

Here's an example of a deque in some programming languages:

<Tabs>
  <TabItem value="javascript" label="JavaScript">   
    ```javascript
    class Deque {
      constructor() {
        this.items = [];
      }

      // Insertion at Front
      addFront(element) {
        this.items.unshift(element);
      }

      // Insertion at Back
      addBack(element) {
        this.items.push(element);
      }

      // Deletion at Front
      removeFront() {
        if (this.isEmpty()) {
          return "Underflow";
        }
        return this.items.shift();
      }

      // Deletion at Back
      removeBack() {
        if (this.isEmpty()) {
          return "Underflow";
        }
        return this.items.pop();
      }

      // Peek at Front
      peekFront() {
        return this.items[0];
      }

      // Peek at Back
      peekBack() {
        return this.items[this.items.length - 1];
      }

      // isEmpty operation
      isEmpty() {
        return this.items.length === 0;
      }

      // Size operation
      size() {
        return this.items.length;
      }

      // Clear operation
      clear() {
        this.items = [];
      }

      // Print operation
      print() {
        console.log(this.items);
      }
    }

    // Using the deque
    let deque = new Deque();
    deque.addFront(1);
    deque.addBack(2);
    deque.addFront(3);
    deque.print(); // Output: [3, 1, 2]
    deque.removeFront();
    deque.print(); // Output: [1, 2]
    console.log(deque.peekBack()); // Output: 2
    console.log(deque.isEmpty()); // Output: false
    console.log(deque.size()); // Output: 2
    deque.clear();
    deque.print(); // Output: []
    ```

  </TabItem>
  <TabItem value="python" label="Python">    
    ```python
    from collections import deque

    # Using the deque
    deque = deque()
    deque.appendleft(1)
    deque.append(2)
    deque.appendleft(3)
    print(deque) # Output: deque([3, 1, 2])
    deque.popleft()
    print(deque) # Output: deque([1, 2])
    print(deque[-1]) # Output: 2
    print(len(deque) == 0) # Output: False
    print(len(deque)) # Output: 2
    deque.clear()
    print(deque) # Output: deque([])
    ```

   </TabItem>
   <TabItem value="typescript" label="TypeScript">    
    ```typescript
    class Deque<T> {
      private items: T[] = [];

      // Insertion at Front
      addFront(element: T): void {
        this.items.unshift(element);
      }

      // Insertion at Back
      addBack(element: T): void {
        this.items.push(element);
      }

      // Deletion at Front
      removeFront(): T | string {
        if (this.isEmpty()) {
          return "Underflow";
        }
        return this.items.shift();
      }

      // Deletion at Back
      removeBack(): T | string {
        if (this.isEmpty()) {
          return "Underflow";
        }
        return this.items.pop();
      }

      // Peek at Front
      peekFront(): T | undefined {
        return this.items[0];
      }

      // Peek at Back
      peekBack(): T | undefined {
        return this.items[this.items.length - 1];
      }

      // isEmpty operation
      isEmpty(): boolean {
        return this.items.length === 0;
      }

      // Size operation
      size(): number {
        return this.items.length;
      }

      // Clear operation
      clear(): void {
        this.items = [];
      }

      // Print operation
      print(): void {
        console.log(this.items);
      }
    }

    // Using the deque
    let deque = new Deque<number>();
    deque.addFront(1);
    deque.addBack(2);
    deque.addFront(3);
    deque.print(); // Output: [3, 1, 2]
    deque.removeFront();
    deque.print(); // Output: [1, 2]
    console.log(deque.peekBack()); // Output: 2
    console.log(deque.isEmpty()); // Output: false
    console.log(deque.size()); // Output: 2
    deque.clear();
    deque.print(); // Output: []
    ```

   </TabItem>
   <TabItem value="c++" label="C++">    
    ```cpp
    #include <iostream>
    #include <deque>
    using namespace std;

    // Using the deque
    deque<int> deque;
    deque.push_front(1);
    deque.push_back(2);
    deque.push_front(3);
    for (int element : deque) {
      cout << element << " ";
    }
    cout << endl; // Output: 3 1 2
    deque.pop_front();
    for (int element : deque) {
      cout << element << " ";
    }
    cout << endl; // Output: 1 2
    cout <<```cpp
 deque.back() << endl; // Output: 2
    cout << (deque.empty() ? "true" : "false") << endl; // Output: false
    cout << deque.size() << endl; // Output: 2
    deque.clear();
    for (int element : deque) {
      cout << element << " ";
    }
    cout << endl; // Output:
    ```

   </TabItem>
   <TabItem value="java" label="Java">    
    ```java
    import java.util.ArrayDeque;
    import java.util.Deque;

    public class Main {
        public static void main(String[] args) {
            // Creating a deque in Java
            Deque<Integer> deque = new ArrayDeque<>();

            // Using the deque
            deque.addFirst(1);
            deque.addLast(2);
            deque.addFirst(3);
            System.out.println(deque); // Output: [3, 1, 2]
            deque.removeFirst();
            System.out.println(deque); // Output: [1, 2]
            System.out.println(deque.peekLast()); // Output: 2
            System.out.println(deque.isEmpty()); // Output: false
            System.out.println(deque.size()); // Output: 2
            deque.clear();
            System.out.println(deque); // Output: []
        }
    }
    ```

   </TabItem>
</Tabs>

## Conclusion

In this tutorial, we explored deque (double-ended queue) in Data Structures and Algorithms. We discussed its features, operations, and provided implementations in JavaScript, Python, TypeScript, C++, and Java. Deque is a powerful data structure that offers efficient insertion and deletion at both ends, making it suitable for various applications where elements need to be manipulated dynamically.

Now, armed with the knowledge of deque, you can enhance your understanding of data structures and algorithms and apply them to solve complex problems effectively.

This tutorial provides a detailed overview of deque, including its operations and implementations in different programming languages. It should serve as a valuable resource for anyone looking to understand and utilize deque in their projects.