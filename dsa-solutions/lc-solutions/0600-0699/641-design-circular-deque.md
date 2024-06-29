---
id: design-circular-deque
title: Design Circular Deque (Leetcode)
sidebar_label: 0641-DesignCircularDeque
description: Design your implementation of the circular double-ended queue (deque).
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Design Circular Deque](https://leetcode.com/problems/design-circular-deque/description/) | [Design Circular Deque Solution on LeetCode](https://leetcode.com/problems/design-circular-deque/solutions) |  [Aaradhya Singh ](https://leetcode.com/u/keira_09/) |


## Problem Description

Design your implementation of the circular double-ended queue (deque).

Implement the MyCircularDeque class:

- **MyCircularDeque(int k)** Initializes the deque with a maximum size of $k$.
- **boolean insertFront()** Adds an item at the front of Deque. Returns true if the operation is successful, or false otherwise.
- **boolean insertLast()** Adds an item at the rear of Deque. Returns true if the operation is successful, or false otherwise.
- **boolean deleteFront()** Deletes an item from the front of Deque. Returns true if the operation is successful, or false otherwise.
- **boolean deleteLast()** Deletes an item from the rear of Deque. Returns true if the operation is successful, or false otherwise.
- **int getFront()** Returns the front item from the Deque. Returns -1 if the deque is empty.
- **int getRear()** Returns the last item from Deque. Returns -1 if the deque is empty.
- **boolean isEmpty()** Returns true if the deque is empty, or false otherwise.
- **boolean isFull()** Returns true if the deque is full, or false otherwise.


### Examples

#### Example 1

- **Input:** $["MyCircularDeque", "insertLast", "insertLast", "insertFront", "insertFront", "getRear", "isFull", "deleteLast", "insertFront", "getFront"]$
$[[3], [1], [2], [3], [4], [], [], [], [4], []]$
- **Output:** $[null, true, true, true, false, 2, true, true, true, 4]$
- **Explanation:**

```py
MyCircularDeque myCircularDeque = new MyCircularDeque(3);
myCircularDeque.insertLast(1);  // return True
myCircularDeque.insertLast(2);  // return True
myCircularDeque.insertFront(3); // return True
myCircularDeque.insertFront(4); // return False, the queue is full.
myCircularDeque.getRear();      // return 2
myCircularDeque.isFull();       // return True
myCircularDeque.deleteLast();   // return True
myCircularDeque.insertFront(4); // return True
myCircularDeque.getFront();     // return 4
```

### Constraints

- $1 \leq k \leq 1000$
- $0 \leq value \leq 1000$
- At most 2000 calls will be made to insertFront, insertLast, deleteFront, deleteLast, getFront, getRear, isEmpty, isFull.


### Intuition

The intuition behind the implementation of the $MyCircularDeque$ class is to efficiently manage a double-ended queue (deque) using a circular array. This design allows for constant-time insertion and deletion operations at both the front and rear ends. By leveraging the circular nature of the array, the deque can wrap around to the beginning of the array when it reaches the end, thereby making optimal use of the available space. The class maintains front and rear pointers to track the positions for insertion and deletion, and checks for conditions such as the deque being full or empty to handle these operations appropriately. This circular array implementation ensures that operations are performed in $O(1)$ time, making it highly efficient for managing double-ended queues.


### Approach

1. **Initialization:**

- The **MyCircularDeque** class is initialized with a fixed size $k$.
- An array arr of size $k$ is created to store the deque elements.
- Two pointers front and rear are initialized to -1 to indicate an empty deque.

2. **Insert Front:**

- Check if the deque is full. If it is, return false.
- If the deque is empty, set both front and rear to 0.
- If front is at the beginning of the array and the array is not full, wrap around front to the end of the array.
- Otherwise, decrement front.
- Insert the value at the front position.

3. **Insert Last:**

- Check if the deque is full. If it is, return false.
- If the deque is empty, set both front and rear to 0.
- If rear is at the end of the array and the array is not full, wrap around rear to the beginning of the array.
- Otherwise, increment rear.
- Insert the value at the rear position.

4. **Delete Front:**

- Check if the deque is empty. If it is, return false.
- Retrieve the value at the front position and set that position to -1.
- If front equals rear, it means there is only one element, so reset both front and rear to -1.
- If front is at the end of the array, wrap around front to the beginning.
- Otherwise, increment front.

5. **Delete Last:**

- Check if the deque is empty. If it is, return false.
- Retrieve the value at the rear position and set that position to -1.
- If front equals rear, it means there is only one element, so reset both front and rear to -1.
- If rear is at the beginning of the array, wrap around rear to the end.
- Otherwise, decrement rear.

6. **Get Front:**

- Check if the deque is empty. If it is, return -1.
- Return the value at the front position.

7. **Get Rear:**

- Check if the deque is empty. If it is, return -1.
- Return the value at the rear position.

8. **Is Empty:**

- Return true if both front and rear are -1, indicating the deque is empty.
- Otherwise, return false.

9. **Is Full:**

- Return true if the deque is full. This is determined if front is 0 and rear is size - 1 or if rear + 1 modulo size equals front.
- Otherwise, return false.

### Solution Code

#### Python

```py
class MyCircularDeque:

    def __init__(self, k: int):
        self.size = k
        self.arr = [-1] * self.size
        self.front = -1
        self.rear = -1

    def insertFront(self, value: int) -> bool:
        if self.isFull():
            return False

        if self.isEmpty():
            self.front = self.rear = 0
        elif self.front == 0:
            self.front = self.size - 1
        else:
            self.front -= 1

        self.arr[self.front] = value
        return True

    def insertLast(self, value: int) -> bool:
        if self.isFull():
            return False

        if self.isEmpty():
            self.front = self.rear = 0
        elif self.rear == self.size - 1:
            self.rear = 0
        else:
            self.rear += 1

        self.arr[self.rear] = value
        return True

    def deleteFront(self) -> bool:
        if self.isEmpty():
            return False

        self.arr[self.front] = -1

        if self.front == self.rear:
            self.front = self.rear = -1
        elif self.front == self.size - 1:
            self.front = 0
        else:
            self.front += 1

        return True

    def deleteLast(self) -> bool:
        if self.isEmpty():
            return False

        self.arr[self.rear] = -1

        if self.front == self.rear:
            self.front = self.rear = -1
        elif self.rear == 0:
            self.rear = self.size - 1
        else:
            self.rear -= 1

        return True

    def getFront(self) -> int:
        if self.isEmpty():
            return -1
        return self.arr[self.front]

    def getRear(self) -> int:
        if self.isEmpty():
            return -1
        return self.arr[self.rear]

    def isEmpty(self) -> bool:
        return self.front == -1 and self.rear == -1

    def isFull(self) -> bool:
        return (self.front == 0 and self.rear == self.size - 1) or (self.front != 0 and (self.rear + 1) % self.size == self.front)
```

#### Java

```java
class MyCircularDeque {

    private int[] arr;
    private int size;
    private int front;
    private int rear;

    public MyCircularDeque(int k) {
        size = k;
        arr = new int[size];
        front = -1;
        rear = -1;
    }

    public boolean insertFront(int value) {
        if (isFull()) {
            return false;
        }

        if (isEmpty()) {
            front = rear = 0;
        } else if (front == 0) {
            front = size - 1;
        } else {
            front--;
        }

        arr[front] = value;
        return true;
    }

    public boolean insertLast(int value) {
        if (isFull()) {
            return false;
        }

        if (isEmpty()) {
            front = rear = 0;
        } else if (rear == size - 1) {
            rear = 0;
        } else {
            rear++;
        }

        arr[rear] = value;
        return true;
    }

    public boolean deleteFront() {
        if (isEmpty()) {
            return false;
        }

        arr[front] = -1;

        if (front == rear) {
            front = rear = -1;
        } else if (front == size - 1) {
            front = 0;
        } else {
            front++;
        }

        return true;
    }

    public boolean deleteLast() {
        if (isEmpty()) {
            return false;
        }

        arr[rear] = -1;

        if (front == rear) {
            front = rear = -1;
        } else if (rear == 0) {
            rear = size - 1;
        } else {
            rear--;
        }

        return true;
    }

    public int getFront() {
        if (isEmpty()) {
            return -1;
        }
        return arr[front];
    }

    public int getRear() {
        if (isEmpty()) {
            return -1;
        }
        return arr[rear];
    }

    public boolean isEmpty() {
        return front == -1 && rear == -1;
    }

    public boolean isFull() {
        return (front == 0 && rear == size - 1) || (front != 0 && (rear + 1) % size == front);
    }
}
```

#### C++

```cpp
class MyCircularDeque {
public:
     int* arr;
    int size;
    int front;
    int rear;
    
    MyCircularDeque(int k) {
        size = k;
        arr = new int[size];
        front = -1;
        rear = -1;
    }
    
    bool insertFront(int value) {
         if (isFull()) // if array is full.
        {
          return false;
        }

        else if (isEmpty()) // if array is empty
        {
           front = rear = 0;
        }
 
        else if (front == 0 && rear != size - 1) // maintaining circulation
        {
           front = size - 1;
        }

        else // normal flow
        {
            front--;
        }
        arr[front] = value;
        return true;
    }
    
    bool insertLast(int value) {
         if (isFull()) // if array is full.
        {
          return false;
        }

        else if (isEmpty()) // if array is empty
        {
           front = rear = 0;
        }
 
        else if (rear == size - 1 && front != 0) // maintaining circulation
        {
           rear = 0;
        }

        else // normal flow
        {
            rear++;
        }
        arr[rear] = value;
        return true;
    }
    
    bool deleteFront() {
         if (isEmpty()) // if array is empty
        {
           return false;
        }

        int ans = arr[front];
        arr[front] = -1;
        if (front == rear) // if one element
        {
           front = rear = -1; 
        }

        else if (front == size - 1)  // maintaining circulation
        {
            front = 0;
        }

        else 
        {
            front++;
        }
        return true;
    }
    
    bool deleteLast() {
        if (isEmpty()) // if array is empty
        {
           return false;
        }

        int ans = arr[rear];
        arr[rear] = -1;
        if (front == rear) // if one element
        {
           front = rear = -1; 
        }

        else if (rear == 0)  // maintaining circulation
        {
            rear = size - 1;
        }

        else 
        {
            rear--;
        }
        return true;
    }
    
    int getFront() {
         if (isEmpty()) // if array is empty
        {
           return -1;
        }
 
        int ans = arr[front];
        return ans;
    }
    
    int getRear() {
         if (isEmpty()) // if array is empty
        {
           return -1;
        }
 
        int ans = arr[rear];
        return ans;
    }
    
    bool isEmpty() {
        if (front == -1 && rear == -1)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    
    bool isFull() {
         if ((front == 0 && rear == size - 1) || (front != 0 && (rear + 1) % size == front))
        {
            return true;
        }
        else
        {
            return false;
        }
    }
};
```

### Conclusion

The **MyCircularDeque** class effectively implements a circular deque using an array, allowing for efficient insertion and deletion operations at both the front and rear. The class maintains pointers for the front and rear of the deque and uses modular arithmetic to handle wrapping around the array. The isFull and isEmpty methods ensure correct operation and prevent overflow or underflow. The time complexity for each operation (insertFront, insertLast, deleteFront, deleteLast) is $O(1)$, making the operations highly efficient. The space complexity is $O(k)$, where $k$ is the size of the deque, due to the fixed-size array used for storage.
