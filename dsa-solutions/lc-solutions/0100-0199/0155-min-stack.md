---
id: min-stack
title: Min Stack
sidebar_label: 0155-Min stack
tags:
  - Array
  - Binary Search
description: Given the sorted rotated array nums of unique elements, return the minimum element of this array.
---

## Problem Statement
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the `MinStack` class:

`MinStack()` initializes the stack object.
`void push(int val)` pushes the element val onto the stack.
`void pop() `removes the element on the top of the stack.
`int top() `gets the top element of the stack.
`int getMin()` retrieves the minimum element in the stack.
You must implement a solution with` O(1)` time complexity for each function.

 

### Examples

**Example 1:**

```plaintext
Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
```

### Constraints

- `-231 <= val <= 231 - 1`
- Methods `pop`, `top` and `getMin` operations will always be called on non-empty stacks.
- At most `3 * 104` calls will be made to `push`, `pop`, `top`, and `getMin`.

## Solution
# MinStack Implementation in C++

## Overview
The `MinStack` class is a custom stack that supports the following operations:
- `push(val)`: Pushes the element `val` onto the stack.
- `pop()`: Removes the element on the top of the stack.
- `top()`: Gets the top element of the stack.
- `getMin()`: Retrieves the minimum element in the stack.

## Approach

### Data Structure
- Use a `vector` of `vector<int>` to implement the stack.
- Each inner vector contains two elements: the actual value being pushed onto the stack and the minimum value in the stack up to that point.

### Constructor
- Initializes the stack without any specific setup required.

### Push Operation
- When pushing a value, determine the current minimum value using the `getMin` method.
- If the stack is empty or the new value is smaller than the current minimum, update the minimum value.
- Push the value along with the updated minimum as a pair onto the stack.

### Pop Operation
- Remove the top element from the stack.

### Top Operation
- Retrieve the top element of the stack. If the stack is empty, return `-1`.

### Get Minimum Operation
- Retrieve the minimum element in the stack. If the stack is empty, return `-1`.

## Summary
The `MinStack` class uses a `vector` of pairs to store each element along with the minimum value at that point in time. This allows all stack operations (`push`, `pop`, `top`, and `getMin`) to be performed efficiently, ensuring constant time complexity for retrieving the minimum element.


#### Implementation
### C++

```cpp
class MinStack {
private:
    vector<vector<int>> st;

public:
    MinStack() {
        
    }
    
    void push(int val) {
        int min_val = getMin();
        if (st.empty() || min_val > val) {
            min_val = val;
        }
        st.push_back({val, min_val});        
    }
    
    void pop() {
        st.pop_back();
    }
    
    int top() {
        return st.empty() ? -1 : st.back()[0];
    }
    
    int getMin() {
        return st.empty() ? -1 : st.back()[1]; 
    }
};
```
### Python
```python
class MinStack:

    def __init__(self):
        self.st = []

    def push(self, val: int) -> None:
        min_val = self.getMin()
        if min_val == None or min_val > val:
            min_val = val
        
        self.st.append([val, min_val])

    def pop(self) -> None:
        self.st.pop()

    def top(self) -> int:
        return self.st[-1][0] if self.st else None

    def getMin(self) -> int:
        return self.st[-1][1] if self.st else None
```

### Java
```Java
class MinStack {
    private List<int[]> st;

    public MinStack() {
        st = new ArrayList<>();
    }
    
    public void push(int val) {
        int[] top = st.isEmpty() ? new int[]{val, val} : st.get(st.size() - 1);
        int min_val = top[1];
        if (min_val > val) {
            min_val = val;
        }
        st.add(new int[]{val, min_val});        
    }
    
    public void pop() {
        st.remove(st.size() - 1);
    }
    
    public int top() {
        return st.isEmpty() ? -1 : st.get(st.size() - 1)[0];
    }
    
    public int getMin() {
        return st.isEmpty() ? -1 : st.get(st.size() - 1)[1];
    }
}
```

### Complexity Analysis

- **Time complexity**: $O(1)$
- **Space complexity**: $O(n)$

### Conclusion
The `MinStack` class uses a `vector` of pairs to store each element along with the minimum value at that point in time. This allows all stack operations (`push`, `pop`, `top`, and `getMin`) to be performed efficiently, ensuring constant time complexity for retrieving the minimum element.





