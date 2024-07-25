---
id: design-front-middle-back-queue
title:   Design Front Middle Back Queue
sidebar_label: 1670.Design Front Middle Back Queue

tags:
- Array
- Linked List
- Design
- Queue
- Data Stream

description: "This is a solution to theDesign Front Middle Back Queue problem on LeetCode."
---

## Problem Description
Design a queue that supports push and pop operations in the front, middle, and back.

Implement the FrontMiddleBack class:

- FrontMiddleBack() Initializes the queue.
- void pushFront(int val) Adds val to the front of the queue.
- void pushMiddle(int val) Adds val to the middle of the queue.
- void pushBack(int val) Adds val to the back of the queue.
- int popFront() Removes the front element of the queue and returns it. If the queue is empty, return -1.
- int popMiddle() Removes the middle element of the queue and returns it. If the queue is empty, return -1.
- int popBack() Removes the back element of the queue and returns it. If the queue is empty, return -1.
- Notice that when there are two middle position choices, the operation is performed on the frontmost middle position choice. For example:

- Pushing 6 into the middle of [1, 2, 3, 4, 5] results in [1, 2, 6, 3, 4, 5].
- Popping the middle from [1, 2, 3, 4, 5, 6] returns 3 and results in [1, 2, 4, 5, 6].

### Examples
**Example 1:**
```
Input:
["FrontMiddleBackQueue", "pushFront", "pushBack", "pushMiddle", "pushMiddle", "popFront", "popMiddle", "popMiddle", "popBack", "popFront"]
[[], [1], [2], [3], [4], [], [], [], [], []]
Output:
[null, null, null, null, null, 1, 3, 4, 2, -1]

Explanation:
FrontMiddleBackQueue q = new FrontMiddleBackQueue();
q.pushFront(1);   // [1]
q.pushBack(2);    // [1, 2]
q.pushMiddle(3);  // [1, 3, 2]
q.pushMiddle(4);  // [1, 4, 3, 2]
q.popFront();     // return 1 -> [4, 3, 2]
q.popMiddle();    // return 3 -> [4, 2]
q.popMiddle();    // return 4 -> [2]
q.popBack();      // return 2 -> []
q.popFront();     // return -1 -> [] (The queue is empty)

```

### Constraints
-  `1 <= val <= 10^9`
- At most 1000 calls will be made to pushFront, pushMiddle, pushBack, popFront, popMiddle, and popBack.
## Solution for Design Front Middle Back Queue
### Approach 
#### Data Structure

- **Deque (Double-ended Queue):** A deque is used to store the elements. It allows for efficient addition and removal of elements from both the front and the back. This is crucial for implementing the required operations efficiently.

#### Operations

1. **Initialization:**
   - The constructor initializes an empty deque.

2. **Push Operations:**
   - **pushFront(int val):**
     - Adds `val` to the front of the deque.
     - This is done using the `push_front` method in C++ or the equivalent method in other languages (e.g., `unshift` in JavaScript, `appendleft` in Python, `addFirst` in Java).
   - **pushMiddle(int val):**
     - Adds `val` to the middle of the deque.
     - The middle index is calculated as `size / 2`. If the size is even, it places the element just before the second half; if odd, it places it in the middle.
     - Inserting at this position can be done using the `insert` method in most languages.
   - **pushBack(int val):**
     - Adds `val` to the back of the deque.
     - This is done using the `push_back` method in C++ or the equivalent method in other languages (e.g., `push` in JavaScript, `append` in Python, `addLast` in Java).

3. **Pop Operations:**
   - **popFront():**
     - Removes and returns the element from the front of the deque.
     - If the deque is empty, it returns `-1`.
     - This is done using the `pop_front` method in C++ or the equivalent method in other languages (e.g., `shift` in JavaScript, `popleft` in Python, `removeFirst` in Java).
   - **popMiddle():**
     - Removes and returns the middle element of the deque.
     - The middle index is calculated as `(size - 1) / 2`. This ensures the correct middle element is chosen whether the size is odd or even.
     - If the deque is empty, it returns `-1`.
     - The element at this index is removed using the `erase` method in C++ or the equivalent method in other languages (e.g., `splice` in JavaScript, direct indexing in Python, manual traversal in Java).
   - **popBack():**
     - Removes and returns the element from the back of the deque.
     - If the deque is empty, it returns `-1`.
     - This is done using the `pop_back` method in C++ or the equivalent method in other languages (e.g., `pop` in JavaScript, `pop` in Python, `removeLast` in Java).

## Intuition

The main intuition behind using a deque is that it provides efficient O(1) time complexity for adding and removing elements from both ends. For the middle operations, although inserting and removing from the middle of a deque is generally O(n) due to shifting elements, the deque allows straightforward and flexible indexing which simplifies implementation.


<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {
        var FrontMiddleBackQueue = function() {
              this.queue = [];
          };

          /** 
          * @param {number} val
          * @return {void}
          */
          FrontMiddleBackQueue.prototype.pushFront = function(val) {
              this.queue.unshift(val);
          };

          /** 
          * @param {number} val
          * @return {void}
          */
          FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
              let middle = Math.floor(this.queue.length / 2);
              this.queue.splice(middle, 0, val)
          };

          /** 
          * @param {number} val
          * @return {void}
          */
          FrontMiddleBackQueue.prototype.pushBack = function(val) {
              this.queue.push(val);
          };

          /**
          * @return {number}
          */
          FrontMiddleBackQueue.prototype.popFront = function() {
              if(!this.queue.length) return -1;
              return this.queue.shift();
          };

          /**
          * @return {number}
          */
          FrontMiddleBackQueue.prototype.popMiddle = function() {
              if(!this.queue.length) return -1;
              let middle = Math.floor(this.queue.length / 2);
              if(this.queue.length % 2 == 0) middle--;
              return this.queue.splice(middle, 1);
          };

          /**
          * @return {number}
          */
          FrontMiddleBackQueue.prototype.popBack = function() {
              if(!this.queue.length) return -1;
              return this.queue.pop();
          };

          /** 
          * Your FrontMiddleBackQueue object will be instantiated and called as such:
          * var obj = new FrontMiddleBackQueue()
          * obj.pushFront(val)
          * obj.pushMiddle(val)
          * obj.pushBack(val)
          * var param_4 = obj.popFront()
          * var param_5 = obj.popMiddle()
          * var param_6 = obj.popBack()
          */ 
      const input =  "["FrontMiddleBackQueue", "pushFront", "pushBack", "pushMiddle", "pushMiddle", "popFront", "popMiddle", "popMiddle", "popBack", "popFront"]
                    [[], [1], [2], [3], [4], [], [], [], [], []]"
      const output =[null, null, null, null, null, 1, 3, 4, 2, -1]
      return (
        <div>
          <p>
            <b>Input: </b>
            {JSON.stringify(input)}
          </p>
          <p>
            <b>Output:</b> {output.toString()}
          </p>
        </div>
      );
    }
    ```

    #### Complexity Analysis

    - Time Complexity: $O(1) $ 
    - Space Complexity: $ O(n)$ , where n is the total number we are inserting

   ## Code in Different Languages
   <Tabs>
  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```javascript
   var FrontMiddleBackQueue = function() {
    this.queue = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function(val) {
    this.queue.unshift(val);
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
    let middle = Math.floor(this.queue.length / 2);
    this.queue.splice(middle, 0, val)
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {
    this.queue.push(val);
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function() {
    if(!this.queue.length) return -1;
    return this.queue.shift();
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {
    if(!this.queue.length) return -1;
    let middle = Math.floor(this.queue.length / 2);
    if(this.queue.length % 2 == 0) middle--;
    return this.queue.splice(middle, 1);
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {
    if(!this.queue.length) return -1;
    return this.queue.pop();
};

/** 
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */ 
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@hiteshgahanolia"/> 
   ```typescript
   class FrontMiddleBackQueue {
    private dq: number[];

    constructor() {
        this.dq = [];
    }

    pushFront(val: number): void {
        this.dq.unshift(val);
    }

    pushMiddle(val: number): void {
        const size = this.dq.length;
        this.dq.splice(Math.floor(size / 2), 0, val);
    }

    pushBack(val: number): void {
        this.dq.push(val);
    }

    popFront(): number {
        if (this.dq.length === 0) return -1;
        return this.dq.shift()!;
    }

    popMiddle(): number {
        if (this.dq.length === 0) return -1;
        const size = this.dq.length;
        const middleIndex = Math.floor((size - 1) / 2);
        return this.dq.splice(middleIndex, 1)[0];
    }

    popBack(): number {
        if (this.dq.length === 0) return -1;
        return this.dq.pop()!;
    }
}

    ```
  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
   from collections import deque

class FrontMiddleBackQueue:
    def __init__(self):
        self.dq = deque()

    def pushFront(self, val: int) -> None:
        self.dq.appendleft(val)

    def pushMiddle(self, val: int) -> None:
        size = len(self.dq)
        self.dq.insert(size // 2, val)

    def pushBack(self, val: int) -> None:
        self.dq.append(val)

    def popFront(self) -> int:
        if not self.dq:
            return -1
        return self.dq.popleft()

    def popMiddle(self) -> int:
        if not self.dq:
            return -1
        size = len(self.dq)
        middleIndex = (size - 1) // 2
        return self.dq.pop(middleIndex)

    def popBack(self) -> int:
        if not self.dq:
            return -1
        return self.dq.pop()

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
   import java.util.Deque;
import java.util.LinkedList;

class FrontMiddleBackQueue {
    private Deque<Integer> dq;

    public FrontMiddleBackQueue() {
        dq = new LinkedList<>();
    }

    public void pushFront(int val) {
        dq.addFirst(val);
    }

    public void pushMiddle(int val) {
        int size = dq.size();
        int middleIndex = size / 2;
        if (middleIndex == size) {
            dq.add(val);
        } else {
            Deque<Integer> temp = new LinkedList<>();
            for (int i = 0; i < middleIndex; i++) {
                temp.add(dq.removeFirst());
            }
            dq.addFirst(val);
            while (!temp.isEmpty()) {
                dq.addFirst(temp.removeLast());
            }
        }
    }

    public void pushBack(int val) {
        dq.addLast(val);
    }

    public int popFront() {
        if (dq.isEmpty()) return -1;
        return dq.removeFirst();
    }

    public int popMiddle() {
        if (dq.isEmpty()) return -1;
        int size = dq.size();
        int middleIndex = (size - 1) / 2;
        Deque<Integer> temp = new LinkedList<>();
        for (int i = 0; i < middleIndex; i++) {
            temp.add(dq.removeFirst());
        }
        int middle = dq.removeFirst();
        while (!temp.isEmpty()) {
            dq.addFirst(temp.removeLast());
        }
        return middle;
    }

    public int popBack() {
        if (dq.isEmpty()) return -1;
        return dq.removeLast();
    }
}

    ```


  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
   class FrontMiddleBackQueue {
public:
    deque<int> dq;
    FrontMiddleBackQueue() {
        
    }
    
    void pushFront(int val) {
        dq.push_front(val);
    }
    
    void pushMiddle(int val) {
        int size = dq.size();
        dq.insert(dq.begin()+size/2,val);
    }
    
    void pushBack(int val) {
        dq.push_back(val);
    }
    
    int popFront() {
        if (dq.empty()) return -1;
        int x = dq.front();
        dq.pop_front();
        return x;
    }
    
    int popMiddle() {
        if (dq.empty()) return -1;
        
        int size = dq.size();
        int middleIndex = (size - 1) / 2;
        int element = dq[middleIndex];
        
        dq.erase(dq.begin() + middleIndex);
        
        return element;
    }

    
    int popBack() {
        if (dq.empty()) return -1;
        int x = dq.back();
        dq.pop_back();
        return x;
    }
};

```
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Design Front Middle Back Queue](https://leetcode.com/problems/design-front-middle-back-queue/description/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/design-front-middle-back-queue/solution)

