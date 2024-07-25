---
id: implement-stack-using-queues
title: Implement Stack using Queues
sidebar_label: 0225 Implement Stack using Queues
tags:
  - Stack
  - Design
  - Queue
description: "This is a solution to the Implement Stack using Queues problem on LeetCode."
---

## Problem

Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (`push`, `top`, `pop`, and `empty`).

Implement the `MyStack` class:

- `void push(int x)` Pushes element x to the top of the stack.
- `int pop()` Removes the element on the top of the stack and returns it.
- `int top()` Returns the element on the top of the stack.
- `boolean empty()` Returns true if the stack is empty, false otherwise.

:::note
- You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size, and is empty operations are valid.
- Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.
:::

### Examples

**Example 1:**

Input
```
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
```
Output
```
[null, null, null, 2, 2, false]
```
Explanation
```
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // return 2
myStack.pop(); // return 2
myStack.empty(); // return False
```

### Constraints

- $1 \leq x \leq 9$
- At most 100 calls will be made to `push`, `pop`, `top`, and `empty`.
- All the calls to `pop` and `top` are valid.

---

## Solution

## Intuition

For both approaches, the goal is to simulate a stack using queues. 

### Approach 1 (Using 2 queues)

We maintain two queues, `que1` and `que2`.

- **Push:** When pushing a new element, we push it onto `que2` and then move all elements from `que1` to `que2`, effectively making the newly pushed element at the front of `que2`. Then, we swap the names of `que1` and `que2`.
- **Pop, Top, and Empty:** Operations are straightforward, as they directly operate on `que1`.

### Approach 2 (Using 1 queue)

We maintain a single queue, `que`.

- **Push:** When pushing a new element, we first push it onto the queue. Then, we rotate the queue by pushing and popping elements until the newly pushed element becomes the front.
- **Pop, Top, and Empty:** Operations are straightforward, as they directly operate on the single queue.

### Complexity

- **Time complexity:**
  - **Approach 1 (Using 2 queues):**
    - Push: $O(n)$ - Moving all elements from one queue to another.
    - Pop, Top, Empty: $O(1)$
  - **Approach 2 (Using 1 queue):**
    - Push: $O(n)$ - Rotating the queue to bring the newly pushed element to the front.
    - Pop, Top, Empty: $O(1)$

- **Space complexity:** Both approaches have a space complexity of $O(n)$ to store the elements in the queue(s).

### Code

#### Using 2 queues

```cpp
class MyStack {
public:
    queue<int> que1;
    queue<int> que2;

    MyStack() {}
    
    void push(int x) {
        que2.push(x);

        while(!que1.empty()){
            que2.push(que1.front());
            que1.pop();
        }

        swap(que1, que2);
    }
    
    int pop() {
        int result = que1.front();
        que1.pop();

        return result;
    }
    
    int top() {
        return que1.front();
    }
    
    bool empty() {
        return que1.empty();
    }
};
```

#### Using 1 queue

```cpp
class MyStack {
public:
    queue<int> que;

    MyStack() {}
    
    void push(int x) {
        que.push(x);
        int n = que.size(); 

        for(int i=0; i<n-1; i++){
            que.push(que.front());
            que.pop();
        }
    }
    
    int pop() {
        int result = que.front();
        que.pop();

        return result;
    }
    
    int top() {
        return que.front();
    }
    
    bool empty() {
        return que.empty();
    }
};
```

#### Using 2 queues

```java
class MyStack {
    Queue<Integer> que1;
    Queue<Integer> que2;

    public MyStack() {
        que1 = new LinkedList<>();
        que2 = new LinkedList<>();
    }
    
    public void push(int x) {
        que2.add(x);

        while (!que1.isEmpty()) {
            que2.add(que1.remove());
        }

        Queue<Integer> temp = que1;
        que1 = que2;
        que2 = temp;
    }
    
    public int pop() {
        return que1.remove();
    }
    
    public int top() {
        return que1.peek();
    }
    
    public boolean empty() {
        return que1.isEmpty();
    }
}
```

#### Using 1 queue

```java
class MyStack {
    Queue<Integer> que;

    public MyStack() {
        que = new LinkedList<>();
    }
    
    public void push(int x) {
        que.add(x);
        int size = que.size();

        for (int i = 0; i < size - 1; i++) {
            que.add(que.remove());
        }
    }
    
    public int pop() {
        return que.remove();
    }
    
    public int top() {
        return que.peek();
    }
    
    public boolean empty() {
        return que.isEmpty();
    }
}
```

#### Using 2 queues (Python)

```python
from queue import Queue

class MyStack:
    def __init__(self):
        self.que1 = Queue()
        self.que2 = Queue()
    
    def push(self, x: int) -> None:
        self.que2.put(x)
        
        while not self.que1.empty():
            self.que2.put(self.que1.get())
        
        self.que1, self.que2 = self.que2, self.que1
    
    def pop(self) -> int:
        return self.que1.get()
    
    def top(self) -> int:
        return self.que1.queue[0]
    
    def empty(self) -> bool:
        return self.que1.empty()
```

#### Using 1 queue (Python)

```python
from queue import Queue

class MyStack:
    def __init__(self):
        self.que = Queue()
    
    def push(self, x: int) -> None:
        self.que.put(x)
        n = self.que.qsize()

        for _ in range(n - 1):
            self.que.put(self.que.get())
    
    def pop(self) -> int:
        return self.que.get()
    
    def top(self) -> int:
        return self.que.queue[0]
    
    def empty(self) -> bool:
        return self.que.empty()
```
