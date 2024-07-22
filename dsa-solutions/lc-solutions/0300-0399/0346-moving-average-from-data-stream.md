---
id: moving-average-from-data-stream
title: Moving Average from Data Stream Solution
sidebar_label: 0346 - Moving Average from Data Stream
tags:
  - Moving Average from Data Stream
  - Data Stream
  - Queue
  - Sliding Window
  - LeetCode
  - JavaScript
  - TypeScript
description: "This is a solution to the Moving Average from Data Stream problem on LeetCode."
sidebar_position: 346
---

In this tutorial, we will solve the Moving Average from Data Stream problem using an efficient queue-based approach. We will provide the implementation of the solution in JavaScript, TypeScript, Python, Java, and C++.

## Problem Description

Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

### Examples

**Example 1:**

```plaintext
MovingAverage m = new MovingAverage(3);
m.next(1); // return 1.0
m.next(10); // return 5.5
m.next(3); // return 4.66667
m.next(5); // return 6.0
```

### Constraints

- `1 <= size <= 1000`
- `-10^5 <= val <= 10^5`
- At most `10^4` calls will be made to `next`.

---

## Solution for Moving Average from Data Stream

### Intuition and Approach

To solve this problem, we can use a queue to store the elements of the sliding window and maintain the sum of the elements in the current window. When a new element is added, we add it to the queue and update the sum. If the queue size exceeds the window size, we remove the oldest element from the queue and update the sum accordingly.

<Tabs>
 <tabItem value="Queue" label="Queue">
  
### Approach: Queue

We will use a queue to maintain the elements of the sliding window and a variable to keep track of the sum of the elements.

#### Implementation

```jsx live
class MovingAverage {
  constructor(size) {
    this.size = size;
    this.queue = [];
    this.sum = 0;
  }

  next(val) {
    this.queue.push(val);
    this.sum += val;
    if (this.queue.length > this.size) {
      this.sum -= this.queue.shift();
    }
    return this.sum / this.queue.length;
  }
}

const movingAverage = new MovingAverage(3);
const results = [
  movingAverage.next(1), // 1.0
  movingAverage.next(10), // 5.5
  movingAverage.next(3), // 4.66667
  movingAverage.next(5) // 6.0
];

return (
  <div>
    <p><b>Moving Average after adding 1:</b> {results[0]}</p>
    <p><b>Moving Average after adding 10:</b> {results[1]}</p>
    <p><b>Moving Average after adding 3:</b> {results[2]}</p>
    <p><b>Moving Average after adding 5:</b> {results[3]}</p>
  </div>
);
```

#### Codes in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@aryansh-patel"/>
   ```javascript
    class MovingAverage {
      constructor(size) {
        this.size = size;
        this.queue = [];
        this.sum = 0;
      }

      next(val) {
        this.queue.push(val);
        this.sum += val;
        if (this.queue.length > this.size) {
          this.sum -= this.queue.shift();
        }
        return this.sum / this.queue.length;
      }
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@aryansh-patel"/>
   ```typescript
    class MovingAverage {
      private size: number;
      private queue: number[];
      private sum: number;

      constructor(size: number) {
        this.size = size;
        this.queue = [];
        this.sum = 0;
      }

      next(val: number): number {
        this.queue.push(val);
        this.sum += val;
        if (this.queue.length > this.size) {
          this.sum -= this.queue.shift()!;
        }
        return this.sum / this.queue.length;
      }
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@aryansh-patel"/>
   ```python
    from collections import deque

    class MovingAverage:

      def __init__(self, size: int):
        self.size = size
        self.queue = deque()
        self.sum = 0

      def next(self, val: int) -> float:
        self.queue.append(val)
        self.sum += val
        if len(self.queue) > self.size:
          self.sum -= self.queue.popleft()
        return self.sum / len(self.queue)
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@aryansh-patel"/>
   ```java
    import java.util.LinkedList;
    import java.util.Queue;

    class MovingAverage {
      private int size;
      private Queue<Integer> queue;
      private int sum;

      public MovingAverage(int size) {
        this.size = size;
        this.queue = new LinkedList<>();
        this.sum = 0;
      }

      public double next(int val) {
        queue.offer(val);
        sum += val;
        if (queue.size() > size) {
          sum -= queue.poll();
        }
        return (double) sum / queue.size();
      }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@aryansh-patel"/>
   ```cpp
    #include <queue>

    class MovingAverage {
    public:
      MovingAverage(int size) {
        this->size = size;
        this->sum = 0;
      }

      double next(int val) {
        q.push(val);
        sum += val;
        if (q.size() > size) {
          sum -= q.front();
          q.pop();
        }
        return (double) sum / q.size();
      }

    private:
      int size;
      int sum;
      std::queue<int> q;
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- **Time Complexity:** $O(1)$ for each call to `next`, as we are simply adding and removing elements from the queue and updating the sum.
- **Space Complexity:** $O(N)$, where `N` is the size of the window, to store the elements in the queue.

- The time complexity is constant for each `next` operation because we perform a fixed number of operations regardless of the number of elements in the queue.
- The space complexity is linear in terms of the size of the window because we store up to `N` elements in the queue.

</tabItem>
</Tabs>

:::tip Note
This solution efficiently calculates the moving average of the elements in the stream using a sliding window.
:::

---

## Video Explanation of Moving Average from Data Stream

<Tabs>

  <TabItem value="en" label="English">

  ---
  
    <Tabs>
      <TabItem value="javascript" label="JavaScript">
        <LiteYouTubeEmbed
          id="w-7rm1jx6YI"
          params="autoplay=1&autohide=1&showinfo=0&rel=0"
          title="Moving Average from Data Stream Problem Explanation | Moving Average from Data Stream Solution"
          poster="maxresdefault"
          webp 
        />
      </TabItem>

      <TabItem value="python" label="Python">
        <LiteYouTubeEmbed
          id="3r9wYNfr3vY"
          params="autoplay=1&autohide=1&showinfo=0&rel=0"
          title="Moving Average from Data Stream Problem Explanation | Moving Average from Data Stream Solution"
          poster="maxresdefault"
          webp 
        />
      </TabItem>
      <TabItem value="java" label="Java">
        <LiteYouTubeEmbed
          id="c54lfslpZqU"
          params="autoplay=1&autohide=1&showinfo=0&rel=0"
          title="Moving Average from Data Stream Problem Explanation | Moving Average from Data Stream Solution"
          poster="maxresdefault"
          webp 
        />
      </TabItem>
    </Tabs>

  </TabItem>

  <TabItem value="hi" label="Hindi">
        <LiteYouTubeEmbed
          id="ClyTf7c7Snk"
          params="autoplay=1&autohide=1&showinfo=0&rel=0"
          title="Moving Average from Data Stream Problem Explanation | Moving Average from Data Stream Solution"
          poster="maxresdefault"
          webp 
        />
  </TabItem>

</Tabs>