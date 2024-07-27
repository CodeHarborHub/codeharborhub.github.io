---
id: verify-preorder-sequence-in-binary-search-tree
title:  Verify Preorder Sequence in Binary Search Tree
sidebar_label: 0255-Verify Preorder Sequence in Binary Search Tree
tags: [Hash Map, Two Pointers,Binary Search Tree]
description: Solution to finding and Verify Preorder Sequence in Binary Search Tree.
---

### Description

Given an array of numbers, verify whether it is the correct preorder traversal sequence of a binary search tree.

You may assume each number in the sequence is unique.

Consider the following binary search tree: 

```bash
     5
    / \
   2   6
  / \
 1   3
```

### Example:

**Example 1:**
```bash
Input: [5,2,6,1,3]
Output: false
```


**Example 2:**
```bash
Input: [5,2,1,3,6]
Output: true
```
### Solution

#### **Approach**

- Use a stack to simulate the traversal.
- Maintain a variable `low` which represents the lowest value that the next node can take. Initially, set `low` to negative infinity.
- Iterate through the array:
  - If we encounter a value less than `low`, it means the sequence is invalid.
  - If the current value is greater than the top of the stack, keep popping from the stack and update `low` to the value of the last popped element. This ensures that we are correctly moving to the right subtree.
  - Push the current value onto the stack.

<Tabs>

<TabItem value="javascript" label="JavaScript">


```javascript
function verifyPreorder(preorder) {
    let stack = [];
    let low = -Infinity;

    for (let value of preorder) {
        if (value < low) {
            return false;
        }
        while (stack.length > 0 && value > stack[stack.length - 1]) {
            low = stack.pop();
        }
        stack.push(value);
    }
    return true;
}

// Example usage:
const preorder1 = [5, 2, 6, 1, 3];
console.log(verifyPreorder(preorder1)); // Output: false

const preorder2 = [5, 2, 1, 3, 6];
console.log(verifyPreorder(preorder2)); // Output: true
```

</TabItem>

<TabItem value="typescript" label="TypeScript">


```typescript
function verifyPreorder(preorder: number[]): boolean {
    let stack: number[] = [];
    let low: number = -Infinity;

    for (let value of preorder) {
        if (value < low) {
            return false;
        }
        while (stack.length > 0 && value > stack[stack.length - 1]) {
            low = stack.pop()!;
        }
        stack.push(value);
    }
    return true;
}

// Example usage:
const preorder1: number[] = [5, 2, 6, 1, 3];
console.log(verifyPreorder(preorder1)); // Output: false

const preorder2: number[] = [5, 2, 1, 3, 6];
console.log(verifyPreorder(preorder2)); // Output: true
```

</TabItem>

<TabItem value="python" label="Python">


```python
def verifyPreorder(preorder):
    stack = []
    low = float('-inf')

    for value in preorder:
        if value < low:
            return False
        while stack and value > stack[-1]:
            low = stack.pop()
        stack.append(value)
    
    return True

# Example usage:
preorder1 = [5, 2, 6, 1, 3]
print(verifyPreorder(preorder1))  # Output: False

preorder2 = [5, 2, 1, 3, 6]
print(verifyPreorder(preorder2))  # Output: True
```

</TabItem>

<TabItem value="java" label="Java">

```java
import java.util.Stack;

public class Solution {
    public boolean verifyPreorder(int[] preorder) {
        Stack<Integer> stack = new Stack<>();
        int low = Integer.MIN_VALUE;

        for (int value : preorder) {
            if (value < low) {
                return false;
            }
            while (!stack.isEmpty() && value > stack.peek()) {
                low = stack.pop();
            }
            stack.push(value);
        }
        return true;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();

        int[] preorder1 = {5, 2, 6, 1, 3};
        System.out.println(solution.verifyPreorder(preorder1)); // Output: false

        int[] preorder2 = {5, 2, 1, 3, 6};
        System.out.println(solution.verifyPreorder(preorder2)); // Output: true
    }
}
```
</TabItem>
<TabItem value="cpp" label="C++">


```cpp
#include <iostream>
#include <vector>
#include <stack>
#include <limits.h>

using namespace std;

class Solution {
public:
    bool verifyPreorder(vector<int>& preorder) {
        stack<int> stk;
        int low = INT_MIN;

        for (int value : preorder) {
            if (value < low) {
                return false;
            }
            while (!stk.empty() && value > stk.top()) {
                low = stk.top();
                stk.pop();
            }
            stk.push(value);
        }

        return true;
    }
};

int main() {
    Solution solution;

    vector<int> preorder1 = {5, 2, 6, 1, 3};
    cout << (solution.verifyPreorder(preorder1) ? "true" : "false") << endl; // Output: false

    vector<int> preorder2 = {5, 2, 1, 3, 6};
    cout << (solution.verifyPreorder(preorder2) ? "true" : "false") << endl; // Output: true

    return 0;
}
``` 


</TabItem>
</Tabs>

### Explanation:


<Tabs>

<TabItem value="javascript" label="JavaScript">

1. **Initialization**:
   - A stack is used to keep track of the nodes.
   - `low` is initialized to `-Infinity` to represent the smallest possible value initially.

2. **Iteration**:
   - For each value in the `preorder` array:
     - If the value is less than `low`, it means we are visiting a node in the right subtree that violates the BST property, hence return `false`.
     - If the current value is greater than the top of the stack, it means we are transitioning from the left subtree to the right subtree. We keep popping the stack and update `low` to ensure that subsequent nodes in the right subtree are greater than this value.
     - Push the current value onto the stack.

3. **Return**:
   - If we successfully iterate through the entire array without finding any violations, return `true`.

</TabItem>

<TabItem value="typescript" label="TypeScript">


1. **Initialization**:
   - A stack is used to keep track of the nodes.
   - `low` is initialized to `-Infinity` to represent the smallest possible value initially.

2. **Iteration**:
   - For each value in the `preorder` array:
     - If the value is less than `low`, it means we are visiting a node in the right subtree that violates the BST property, hence return `false`.
     - If the current value is greater than the top of the stack, it means we are transitioning from the left subtree to the right subtree. We keep popping the stack and update `low` to ensure that subsequent nodes in the right subtree are greater than this value.
     - Push the current value onto the stack.

3. **Return**:
   - If we successfully iterate through the entire array without finding any violations, return `true`.

</TabItem>

<TabItem value="python" label="Python">

1. **Initialization**:
   - A stack is used to keep track of the nodes.
   - `low` is initialized to negative infinity to represent the smallest possible value initially.

2. **Iteration**:
   - For each value in the `preorder` array:
     - If the value is less than `low`, it means we are visiting a node in the right subtree that violates the BST property, hence return `False`.
     - If the current value is greater than the top of the stack, it means we are transitioning from the left subtree to the right subtree. We keep popping the stack and update `low` to ensure that subsequent nodes in the right subtree are greater than this value.
     - Push the current value onto the stack.

3. **Return**:
   - If we successfully iterate through the entire array without finding any violations, return `True`.

</TabItem>

<TabItem value="java" label="Java">

1. **Initialization**:
   - A stack is used to keep track of the nodes.
   - `low` is initialized to `Integer.MIN_VALUE` to represent the smallest possible value initially.

2. **Iteration**:
   - For each value in the `preorder` array:
     - If the value is less than `low`, it means we are visiting a node in the right subtree that violates the BST property, hence return `false`.
     - If the current value is greater than the top of the stack, it means we are transitioning from the left subtree to the right subtree. We keep popping the stack and update `low` to ensure that subsequent nodes in the right subtree are greater than this value.
     - Push the current value onto the stack.

3. **Return**:
   - If we successfully iterate through the entire array without finding any violations, return `true`.

</TabItem>

<TabItem value="cpp" label="C++">

1. **Initialization**:
   - A stack is used to keep track of the nodes.
   - `low` is initialized to `INT_MIN` to represent the smallest possible value initially.

2. **Iteration**:
   - For each value in the `preorder` array:
     - If the value is less than `low`, it means we are visiting a node in the right subtree that violates the BST property, hence return `false`.
     - If the current value is greater than the top of the stack, it means we are transitioning from the left subtree to the right subtree. We keep popping the stack and update `low` to ensure that subsequent nodes in the right subtree are greater than this value.
     - Push the current value onto the stack.

3. **Return**:
   - If we successfully iterate through the entire array without finding any violations, return `true`.

</TabItem>

</Tabs>

### Complexity:


<Tabs>
<TabItem value="javascript" label="JavaScript">


- **Time Complexity**: `O(n)`, where `n` is the length of the preorder array. Each element is pushed and popped from the stack at most once.
- **Space Complexity**: `O(n)`, where `n` is the length of the preorder array, which is the worst-case space complexity for the stack.
 
</TabItem>
<TabItem value="typescript" label="TypeScript">


- **Time Complexity**: `O(n)`, where `n` is the length of the preorder array. Each element is pushed and popped from the stack at most once.
- **Space Complexity**: `O(n)`, where `n` is the length of the preorder array, which is the worst-case space complexity for the stack.

</TabItem>

<TabItem value="python" label="Python">


- **Time Complexity**: `O(n)`, where `n` is the length of the preorder array. Each element is pushed and popped from the stack at most once.
- **Space Complexity**: `O(n)`, where `n` is the length of the preorder array, which is the worst-case space complexity for the stack.
 
</TabItem>

<TabItem value="java" label="Java">

- **Time Complexity**: `O(n)`, where `n` is the length of the preorder array. Each element is pushed and popped from the stack at most once.
- **Space Complexity**: `O(n)`, where `n` is the length of the preorder array, which is the worst-case space complexity for the stack.
</TabItem>
<TabItem value="cpp" label="c++">

- **Time Complexity**: `O(n)`, where `n` is the length of the preorder array. Each element is pushed and popped from the stack at most once.
- **Space Complexity**: `O(n)`, where `n` is the length of the preorder array, which is the worst-case space complexity for the stack. 

</TabItem>
</Tabs>



## References

- **LeetCode Problem:** [Binary Search Tree](https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/)

<h2>Author:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['sivaprasath2004'].map(username => (
 <Author key={username} username={username} />
))}
</div>
