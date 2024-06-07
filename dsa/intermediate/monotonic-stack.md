---
id: monotonic-stack
title: Monotonic Stack in Data Structures and Algorithms
sidebar_label: Monotonic Stack
tags:
  - dsa
  - data-structures
  - stack
  - monotonic-stack
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

In this tutorial, we will delve into the concept of a monotonic stack in Data Structures and Algorithms. We'll explore what a monotonic stack is, how it works, and its applications.

## Monotonic Stack in Data Structures and Algorithms

A monotonic stack, also known as a monotone stack or an increasing/decreasing stack, is a variation of the stack data structure that maintains either monotonic increasing or monotonic decreasing order of its elements. 

### Characteristics

- **Monotonicity**: The key characteristic of a monotonic stack is that the elements are either monotonically increasing or monotonically decreasing.
- **Single Direction**: Unlike a regular stack, where elements can be pushed and popped in any order, a monotonic stack enforces a single direction of monotonicity.
- **Optimization**: Monotonic stacks are often used to optimize certain problems by efficiently identifying elements that are greater (or smaller) than the current element.

![monotonic stack](https://storage.googleapis.com/download/storage/v1/b/designgurus-prod.appspot.com/o/docImages%2F64beb1e31a5d38cdee24dfde%2Fimg:c7f05bb-0214-28ff-ec31-a04c2270158e.svg?generation=1690366276715884&alt=media)
### Operations

A monotonic stack typically supports the following operations:

- **Push**: Adds an element to the stack while maintaining monotonicity.
- **Pop**: Removes and returns the top element of the stack.
- **Peek**: Returns the top element of the stack without removing it.
- **isEmpty**: Checks if the stack is empty.
- **Size**: Returns the number of elements in the stack.

### Applications

Monotonic stacks find applications in various algorithms and problems, including but not limited to:

- **Finding Next Greater/Smaller Element**: Monotonic stacks can efficiently find the next greater or smaller element for each element in an array.
- **Largest Rectangle in Histogram**: They are used to solve the problem of finding the largest rectangle in a histogram efficiently.
- **Finding the Nearest Smaller Element**: Monotonic stacks can determine the nearest smaller element for each element in an array.
- **Maximal Rectangles in Binary Matrix**: Used in algorithms to find the maximal rectangles in a binary matrix.

Now, let's see an example implementation of a monotonic stack in various programming languages.

<Tabs>
  <TabItem value="javascript" label="JavaScript">   
    ```javascript
    function monotonicStack(arr) {
      const stack = [];
      const result = [];

      for (let i = 0; i < arr.length; i++) {
        while (stack.length && arr[i] < arr[stack[stack.length - 1]]) {
          result[stack.pop()] = arr[i];
        }
        stack.push(i);
      }

      while (stack.length) {
        result[stack.pop()] = -1;
      }

      return result;
    }

    // Example usage
    const arr = [2, 1, 4, 3, 6, 5, 8, 7];
    const nextSmallerElements = monotonicStack(arr);
    console.log("Next Smaller Elements:", nextSmallerElements);
    ```

  </TabItem>
  <TabItem value="python" label="Python">    
    ```python
    def monotonic_stack(arr):
        stack = []
        result = [-1] * len(arr)

        for i in range(len(arr)):
            while stack and arr[i] < arr[stack[-1]]:
                result[stack.pop()] = arr[i]
            stack.append(i)

        return result

    # Example usage
    arr = [2, 1, 4, 3, 6, 5, 8, 7]
    next_smaller_elements = monotonic_stack(arr)
    print("Next Smaller Elements:", next_smaller_elements)
    ```

   </TabItem>
   <TabItem value="typescript" label="TypeScript">    
    ```typescript
    function monotonicStack(arr: number[]): number[] {
      const stack: number[] = [];
      const result: number[] = new Array(arr.length).fill(-1);

      for (let i = 0; i < arr.length; i++) {
        while (stack.length && arr[i] < arr[stack[stack.length - 1]]) {
          result[stack.pop()!] = arr[i];
        }
        stack.push(i);
      }

      return result;
    }

    // Example usage
    const arr: number[] = [2, 1, 4, 3, 6, 5, 8, 7];
    const nextSmallerElements: number[] = monotonicStack(arr);
    console.log("Next Smaller Elements:", nextSmallerElements);
    ```

   </TabItem>
   <TabItem value="c++" label="C++">    
    ```cpp
    #include <iostream>
    #include <vector>
    #include <stack>
    using namespace std;

    vector<int> monotonicStack(vector<int>& arr) {
        stack<int> st;
        vector<int> result(arr.size(), -1);

        for (int i = 0; i < arr.size(); i++) {
            while (!st.empty() && arr[i] < arr[st.top()]) {
                result[st.top()] = arr[i];
                st.pop();
            }
            st.push(i);
        }

        return result;
    }

    int main() {
        // Example usage
        vector<int> arr = {2, 1, 4, 3, 6, 5, 8, 7};
        vector<int> nextSmallerElements = monotonicStack(arr);
        cout << "Next Smaller Elements: ";
        for (int num : nextSmallerElements) {
            cout << num << " ";
        }
        cout << endl;
        return 0;
    }
    ```

   </TabItem>
   <TabItem value="java" label="Java">    
    ```java
    import java.util.*;

    public class Main {
        // Implementing a monotonic stack in Java
        public static int[] monotonicStack(int[] arr) {
            Stack<Integer> stack = new Stack<>();
            int[] result = new int[arr.length];
            Arrays.fill(result, -1);

            for (int i = 0; i < arr.length; i++) {
                while (!stack.isEmpty() && arr[i] < arr[stack.peek()]) {
                    result[stack.pop()] = arr[i];
                }
                stack.push(i);
            }

            return result;
        }

        public static void main(String[] args) {
            // Example usage
            int[] arr = {2, 1, 4, 3, 6, 5, 8, 7};
            int[] nextSmallerElements = monotonicStack(arr);
            System.out.print("Next Smaller Elements: ");
            for (int num : nextSmallerElements) {
                System.out.print(num + " ");
            }
            System.out.println();
        }
    }
    ```

   </TabItem>
</Tabs>

## Conclusion

In this tutorial, we explored the concept of a monotonic stack in Data Structures and Algorithms. We discussed its characteristics, operations, and applications. Additionally, we provided example implementations of a monotonic stack in JavaScript, Python, TypeScript, C++, and Java. Monotonic stacks offer a powerful tool for solving various algorithmic problems efficiently by maintaining monotonicity of elements.
```