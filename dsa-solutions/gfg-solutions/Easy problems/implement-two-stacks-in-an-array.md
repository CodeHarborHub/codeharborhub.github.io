---
id: implement-two-stacks-in-an-array
title: Implement Two Stacks in an Array
sidebar_label: 10 Implement Two Stacks in an Array
tags:
- Data Structures
- Stacks
- Python
- Java
- C++
- JavaScript
- TypeScript
description: "This document provides solutions to the problem of implementing two stacks in a single array using various programming languages."
---

## Problem

Your task is to implement two stacks in one array efficiently. You need to implement four methods.

- `twoStacks(n)`: Initialize the data structures and variables to be used to implement two stacks in one array.
- `push1(x)`: Pushes element into the first stack.
- `push2(x)`: Pushes element into the second stack.
- `pop1()`: Pops element from the first stack and returns the popped element. If the first stack is empty, it should return -1.
- `pop2()`: Pops element from the second stack and returns the popped element. If the second stack is empty, it should return -1.

### Examples

**Example 1:**

```
Input:
push1(2)
push1(3)
push2(4)
pop1()
pop2()
pop2()

Output:
3 4 -1

Explanation:
push1(2) -> stack1 = {2}
push1(3) -> stack1 = {2, 3}
push2(4) -> stack2 = {4}
pop1() -> returns 3, stack1 = {2}
pop2() -> returns 4, stack2 = {}
pop2() -> stack2 is empty, returns -1
```

**Example 2:**

```
Input:
push1(1)
push2(2)
pop1()
push1(3)
pop1()
pop1()

Output:
1 3 -1

Explanation:
push1(1) -> stack1 = {1}
push2(2) -> stack2 = {2}
pop1() -> returns 1, stack1 = {}
push1(3) -> stack1 = {3}
pop1() -> returns 3, stack1 = {}
pop1() -> stack1 is empty, returns -1
```

### Your Task

You don't need to read input or print anything. You are required to complete the four methods `push1`, `push2`, `pop1`, and `pop2`.

**Expected Time Complexity:** $O(1)$ for all the four methods.  
**Expected Auxiliary Space:** $O(1)$ for all the four methods.

**Constraints**
- 1 ≤ Number of queries ≤ 10^4
- 1 ≤ Number of elements in the stack ≤ 100
- The sum of the count of elements in both stacks < size of the given array

## Solution

### Intuition & Approach

To efficiently implement two stacks in one array, we can start one stack from the beginning of the array and the other stack from the end of the array. This way, both stacks grow towards each other and we can manage them independently.

### Implementation

<Tabs>
  <TabItem value="python" label="Python">

```python
class TwoStacks:
    def __init__(self, n=100):
        self.size = n
        self.arr = [0] * n
        self.top1 = -1
        self.top2 = n

    # Function to push an integer into stack 1
    def push1(self, x):
        if self.top1 < self.top2 - 1:
            self.top1 += 1
            self.arr[self.top1] = x

    # Function to push an integer into stack 2
    def push2(self, x):
        if self.top1 < self.top2 - 1:
            self.top2 -= 1
            self.arr[self.top2] = x

    # Function to remove an element from top of stack 1
    def pop1(self):
        if self.top1 >= 0:
            x = self.arr[self.top1]
            self.top1 -= 1
            return x
        else:
            return -1

    # Function to remove an element from top of stack 2
    def pop2(self):
        if self.top2 < self.size:
            x = self.arr[self.top2]
            self.top2 += 1
            return x
        else:
            return -1
```

  </TabItem>
  <TabItem value="java" label="Java">

```java
class TwoStacks {
    int size;
    int top1, top2;
    int arr[];

    TwoStacks(int n) {
        size = n;
        arr = new int[n];
        top1 = -1;
        top2 = n;
    }

    void push1(int x) {
        if (top1 < top2 - 1) {
            top1++;
            arr[top1] = x;
        }
    }

    void push2(int x) {
        if (top1 < top2 - 1) {
            top2--;
            arr[top2] = x;
        }
    }

    int pop1() {
        if (top1 >= 0) {
            int x = arr[top1];
            top1--;
            return x;
        } else {
            return -1;
        }
    }

    int pop2() {
        if (top2 < size) {
            int x = arr[top2];
            top2++;
            return x;
        } else {
            return -1;
        }
    }
}
```

  </TabItem>
  <TabItem value="cpp" label="C++">

```cpp
class TwoStacks {
    int* arr;
    int size;
    int top1, top2;
public:
    TwoStacks(int n) {
        size = n;
        arr = new int[n];
        top1 = -1;
        top2 = n;
    }

    void push1(int x) {
        if (top1 < top2 - 1) {
            arr[++top1] = x;
        }
    }

    void push2(int x) {
        if (top1 < top2 - 1) {
            arr[--top2] = x;
        }
    }

    int pop1() {
        if (top1 >= 0) {
            return arr[top1--];
        } else {
            return -1;
        }
    }

    int pop2() {
        if (top2 < size) {
            return arr[top2++];
        } else {
            return -1;
        }
    }
};
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

```javascript
class TwoStacks {
    constructor(n = 100) {
        this.size = n;
        this.arr = new Array(n).fill(0);
        this.top1 = -1;
        this.top2 = n;
    }

    push1(x) {
        if (this.top1 < this.top2 - 1) {
            this.top1++;
            this.arr[this.top1] = x;
        }
    }

    push2(x) {
        if (this.top1 < this.top2 - 1) {
            this.top2--;
            this.arr[this.top2] = x;
        }
    }

    pop1() {
        if (this.top1 >= 0) {
            const x = this.arr[this.top1];
            this.top1--;
            return x;
        } else {
            return -1;
        }
    }

    pop2() {
        if (this.top2 < this.size) {
            const x = this.arr[this.top2];
            this.top2++;
            return x;
        } else {
            return -1;
        }
    }
}
```

  </TabItem>
  <TabItem value="typescript" label="TypeScript">

```typescript
class TwoStacks {
    size: number;
    top1: number;
    top2: number;
    arr: number[];

    constructor(n: number = 100) {
        this.size = n;
        this.arr = new Array(n).fill(0);
        this.top1 = -1;
        this.top2 = n;
    }

    push1(x: number): void {
        if (this.top1 < this.top2 - 1) {
            this.top1++;
            this.arr[this.top1] = x;
        }
    }

    push2(x: number): void {
        if (this.top1 < this.top2 - 1) {
            this.top2--;
            this.arr[this.top2] = x;
        }
    }

    pop1(): number {
        if (this.top1 >= 0) {
            const x = this.arr[this.top1];
            this.top1--;
            return x;
        } else {
            return -1;
        }
    }

    pop2(): number {
        if (this.top2 < this.size) {
            const x = this.arr[this.top2];
            this.top2++;
            return x;
        } else {
            return -1;
        }
    }
}
```

  </TabItem>
</Tabs>

## Complexity Analysis

The provided solutions efficiently implement two stacks in a single array using pointers. This approach ensures a time complexity of $O(1)$ for all stack operations and an auxiliary space complexity of $O(1)$. The algorithms are designed to handle up to $10^4$ queries efficiently without relying on dynamic data structures.

**Time Complexity:** $O(1)$ for all the four methods.  
**Auxiliary Space:** $O(1)$ for all the four methods.

---

- **GeeksforGeeks Problem:** [Implement two stack in an array](https://www.geeksforgeeks.org/problems/implement-two-stacks-in-an-array/0)
- **Author GeeksforGeeks Profile:** [GeeksforGeeks](https://www.geeksforgeeks.org/user/GeeksforGeeks/)

