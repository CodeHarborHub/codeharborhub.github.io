---
id: queue-using-stacks
title: Implement Queue using Stacks
sidebar_label: Implement Queue using Stacks
tags:
- Data Structures
- Stack
- Queue
- Python
- Java
- C++
description: "This document provides an implementation of a queue using stacks, supporting push, pop, peek, and empty operations."
---

### Examples

**Example 1:**

```

Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false
```

### Constraints

- $1 <= x <= 9$
- At most 100 calls will be made to push, pop, peek, and empty.
- All the calls to pop and peek are valid.

## Problem Statement
Implement a first-in-first-out (FIFO) queue using two stacks. The implemented queue should support the following operations:
- `push(x)`: Pushes element `x` to the back of the queue.
- `pop()`: Removes the element from the front of the queue and returns it.
- `peek()`: Returns the element at the front of the queue without removing it.
- `empty()`: Returns whether the queue is empty.

## Approach
To achieve FIFO order using stacks, we can use two stacks:
- `stack1`: Used for enqueue operations (`push`).
- `stack2`: Used for dequeue operations (`pop` and `peek`).

### Operations Details:
1. **Push Operation (`push(x)`)**:
   - Simply push the element onto `stack1`.

2. **Pop Operation (`pop()`)**:
   - If `stack2` is empty, transfer all elements from `stack1` to `stack2`. Then, pop the top element from `stack2`.

3. **Peek Operation (`peek()`)**:
   - If `stack2` is empty, transfer all elements from `stack1` to `stack2`. Then, peek at the top element of `stack2`.

4. **Empty Check (`empty()`)**:
   - The queue is considered empty if both `stack1` and `stack2` are empty.

#### Code in Different Languages

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@mahek0620"/>
   ```python

    class MyQueue:

    def __init__(self):
        self.stack1 = []  # Stack for enqueue operations
        self.stack2 = []  # Stack for dequeue operations

    def push(self, x):
        """
        Push element x to the back of the queue.
        """
        self.stack1.append(x)

    def pop(self):
        """
        Removes the element from the front of the queue and returns it.
        """
        self.move_elements()
        return self.stack2.pop()

    def peek(self):
        """
        Returns the element at the front of the queue without removing it.
        """
        self.move_elements()
        return self.stack2[-1]

    def empty(self):
        """
        Returns whether the queue is empty.
        """
        return len(self.stack1) == 0 and len(self.stack2) == 0

    def move_elements(self):
        """
        Moves elements from stack1 to stack2 if stack2 is empty.
        """
        if not self.stack2:
            while self.stack1:
                self.stack2.append(self.stack1.pop())

    ```
  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@mahek0620"/>
   ```java
    
    import java.util.Stack;

    class MyQueue {
    private Stack<Integer> stack1;
    private Stack<Integer> stack2;

    /** Initialize your data structure here. */
    public MyQueue() {
        stack1 = new Stack<>();
        stack2 = new Stack<>();
    }
    
    /** Push element x to the back of queue. */
    public void push(int x) {
        stack1.push(x);
    }
    
    /** Removes the element from in front of queue and returns that element. */
    public int pop() {
        moveElements();
        return stack2.pop();
    }
    
    /** Get the front element. */
    public int peek() {
        moveElements();
        return stack2.peek();
    }
    
    /** Returns whether the queue is empty. */
    public boolean empty() {
        return stack1.isEmpty() && stack2.isEmpty();
    }
    
    private void moveElements() {
        if (stack2.isEmpty()) {
            while (!stack1.isEmpty()) {
                stack2.push(stack1.pop());
            }
        }
    }
    }

    ```
  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@mahek0620"/>
   ```cpp
   
    #include <stack>

    class MyQueue {
    private:
    std::stack<int> stack1;
    std::stack<int> stack2;
    
    public:
    /** Initialize your data structure here. */
    MyQueue() {
        
    }
    
    /** Push element x to the back of queue. */
    void push(int x) {
        stack1.push(x);
    }
    
    /** Removes the element from in front of queue and returns that element. */
    int pop() {
        moveElements();
        int front = stack2.top();
        stack2.pop();
        return front;
    }
    
    /** Get the front element. */
    int peek() {
        moveElements();
        return stack2.top();
    }
    
    /** Returns whether the queue is empty. */
    bool empty() {
        return stack1.empty() && stack2.empty();
    }
    
    private:
    void moveElements() {
        if (stack2.empty()) {
            while (!stack1.empty()) {
                stack2.push(stack1.top());
                stack1.pop();
            }
        }
    }
    };

    ```

  </TabItem>
</Tabs>


## References

- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/implement-queue-using-stacks/)
- **Solution Link:** [Implement-Queue-Using-Stacks Solution on LeetCode](https://leetcode.com/problems/implement-queue-using-stacks/solutions/)
- **Authors GeeksforGeeks Profile:** [Mahek Patel](https://leetcode.com/u/mahekrpatel611/)
