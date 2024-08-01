---
id: design-circular-queue
title: Design Circular Queue (Leetcode)
sidebar_label: 0622-DesignCircularQueue
description: Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle, and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Design Circular Queue](https://leetcode.com/problems/design-circular-queue/description/) | [Design Circular Queue Solution on LeetCode](https://leetcode.com/problems/design-circular-queue/solutions) |  [Aaradhya Singh ](https://leetcode.com/u/keira_09/) |


## Problem Description

Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle, and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".

One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.

Implement the $MyCircularQueue$ class:

- $MyCircularQueue(k)$ Initializes the object with the size of the queue to be k.
- $int Front()$ Gets the front item from the queue. If the queue is empty, return -1.
- $int Rear()$ Gets the last item from the queue. If the queue is empty, return -1.
- $boolean enQueue(int value)$ Inserts an element into the circular queue. Return true if the operation is successful.
- $boolean deQueue()$ Deletes an element from the circular queue. Return true if the operation is successful.
- $boolean isEmpty()$ Checks whether the circular queue is empty or not.
- $boolean isFull()$ Checks whether the circular queue is full or not.

You must solve the problem without using the built-in queue data structure in your programming language. 

### Examples

#### Example 1

- **Input:** $["MyCircularQueue", "enQueue", "enQueue", "enQueue", "enQueue", "Rear", "isFull", "deQueue", "enQueue", "Rear"]$
$[[3], [1], [2], [3], [4], [], [], [], [4], []]$
- **Output:** $[null, true, true, true, false, 3, true, true, true, 4]$
- **Explanation:** 
MyCircularQueue myCircularQueue = new MyCircularQueue(3); <br />
myCircularQueue.enQueue(1); // return True
myCircularQueue.enQueue(2); // return True
myCircularQueue.enQueue(3); // return True
myCircularQueue.enQueue(4); // return False
myCircularQueue.Rear();     // return 3
myCircularQueue.isFull();   // return True
myCircularQueue.deQueue();  // return True
myCircularQueue.enQueue(4); // return True
myCircularQueue.Rear();     // return 4



### Constraints

- $1 <= k <= 1000$
- $0 <= value <= 1000$
- At most 3000 calls will be made to enQueue, deQueue, Front, Rear, isEmpty, and isFull.


### Intuition

The code implements a circular queue, which is a data structure that efficiently manages a fixed-size queue with wrap-around capabilities. The circular queue is implemented using an array and maintains pointers for the front and rear of the queue, along with a counter to keep track of the number of elements. The enQueue function adds an element to the rear of the queue, adjusting the rear pointer to wrap around if necessary, while the deQueue function removes an element from the front, adjusting the front pointer similarly. The Front and Rear functions return the front and rear elements, respectively. The isEmpty and isFull functions check if the queue is empty or full based on the count. This design allows for efficient enqueue and dequeue operations while maintaining a fixed size and supporting wrap-around indexing.

### Approach

1. **Initialization:**

    - The constructor MyCircularQueue(int k) initializes the circular queue with a fixed size k. It allocates memory for the array arr of size k, and initializes the front and rear pointers to -1 to indicate an empty queue. The count variable is also initialized to 0 to keep track of the number of elements in the queue.

2. **Enqueue Operation:**

    - The enQueue(int value) method adds an element to the rear of the queue.
        - First, it checks if the queue is full by calling the isFull() method.
        - If the queue is full, it returns false.
        - If the queue is empty (checked using isEmpty()), it sets the front pointer to 0.
        - It then calculates the new position of the rear pointer using modulo operation (rear + 1) % size to handle wrap-around.
        - The element is added to the new rear position, and the count is incremented.
        - Finally, it returns true indicating the enqueue operation was successful.

3. **Dequeue Operation:**

    - The deQueue() method removes an element from the front of the queue.
        - First, it checks if the queue is empty by calling the isEmpty() method.
        - If the queue is empty, it returns false.
        - If the front and rear pointers are equal, it means the queue will be empty after this operation, so both pointers are reset to -1.
        - Otherwise, it calculates the new position of the front pointer using modulo operation (front + 1) % size to handle wrap-around.
        - The count is decremented.
        - Finally, it returns true indicating the dequeue operation was successful.

4. **Front and Rear Operations:**

    - The Front() method returns the element at the front of the queue.
        - It checks if the queue is empty using isEmpty().
        - If the queue is empty, it returns -1.
        - Otherwise, it returns the element at the front pointer.
    - The Rear() method returns the element at the rear of the queue.
        - It checks if the queue is empty using isEmpty().
        - If the queue is empty, it returns -1.
        - Otherwise, it returns the element at the rear pointer.

5. **Empty and Full Checks:**

    - The isEmpty() method checks if the queue is empty by comparing the count to 0.
        - If count is 0, it returns true; otherwise, it returns false.
    - The isFull() method checks if the queue is full by comparing the count to the size of the queue.
        - If count is equal to size, it returns true; otherwise, it returns false.

### Solution Code

#### Python

```py
class MyCircularQueue:
    def __init__(self, k: int):
        self.size = k
        self.arr = [0] * k
        self.front = -1
        self.rear = -1
        self.count = 0

    def enQueue(self, value: int) -> bool:
        if self.isFull():
            return False
        
        if self.isEmpty():
            self.front = 0

        self.rear = (self.rear + 1) % self.size
        self.arr[self.rear] = value
        self.count += 1
        return True

    def deQueue(self) -> bool:
        if self.isEmpty():
            return False
        
        if self.front == self.rear:
            self.front = self.rear = -1
        else:
            self.front = (self.front + 1) % self.size
        
        self.count -= 1
        return True

    def Front(self) -> int:
        if self.isEmpty():
            return -1
        
        return self.arr[self.front]

    def Rear(self) -> int:
        if self.isEmpty():
            return -1
        
        return self.arr[self.rear]

    def isEmpty(self) -> bool:
        return self.count == 0

    def isFull(self) -> bool:
        return self.count == self.size
```

#### Java

```java
class MyCircularQueue {
    private int[] arr;
    private int size;
    private int front;
    private int rear;
    private int count;

    public MyCircularQueue(int k) {
        size = k;
        arr = new int[size];
        front = -1;
        rear = -1;
        count = 0;
    }

    public boolean enQueue(int value) {
        if (isFull()) {
            return false;
        }

        if (isEmpty()) {
            front = 0;
        }

        rear = (rear + 1) % size;
        arr[rear] = value;
        count++;
        return true;
    }

    public boolean deQueue() {
        if (isEmpty()) {
            return false;
        }

        if (front == rear) {
            front = rear = -1;
        } else {
            front = (front + 1) % size;
        }

        count--;
        return true;
    }

    public int Front() {
        if (isEmpty()) {
            return -1;
        }

        return arr[front];
    }

    public int Rear() {
        if (isEmpty()) {
            return -1;
        }

        return arr[rear];
    }

    public boolean isEmpty() {
        return count == 0;
    }

    public boolean isFull() {
        return count == size;
    }
}
```

#### C++

```cpp
class MyCircularQueue {
private:
    int* arr;
    int size;
    int front;
    int rear;
    int count;

public:
    MyCircularQueue(int k) {
        size = k;
        arr = new int[size];
        front = -1;
        rear = -1;
        count = 0;
    }

    ~MyCircularQueue() {
        delete[] arr;
    }

    bool enQueue(int value) {
        if (isFull()) {
            return false; // Queue is full
        }

        if (isEmpty()) {
            front = 0;
        }

        rear = (rear + 1) % size;
        arr[rear] = value;
        count++;
        return true;
    }

    bool deQueue() {
        if (isEmpty()) {
            return false; // Queue is empty
        }

        if (front == rear) {
            front = rear = -1;
        } else {
            front = (front + 1) % size;
        }

        count--;
        return true;
    }

    int Front() {
        if (isEmpty()) {
            return -1; // Queue is empty
        }

        return arr[front];
    }

    int Rear() {
        if (isEmpty()) {
            return -1; // Queue is empty
        }

        return arr[rear];
    }

    bool isEmpty() {
        return count == 0;
    }

    bool isFull() {
        return count == size;
    }
};
```

### Conclusion

The provided code implementation of a circular queue offers efficient enqueue, dequeue, and access operations with a fixed-size capacity. Enqueue and dequeue operations have a time complexity of $O(1)$, as they involve updating pointers and array accesses. Accessing the front or rear element also has a time complexity of $O(1)$. The space complexity of the circular queue is $O(n)$, where $n$ is the fixed size of the queue, as it uses an array to store the elements. Overall, this implementation provides a convenient and performant solution for managing a circular queue with constant-time complexity for core operations and linear space complexity.