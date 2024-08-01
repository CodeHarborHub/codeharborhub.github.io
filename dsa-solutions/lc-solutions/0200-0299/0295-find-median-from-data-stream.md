---
id: median-finder
title: Median Finder
sidebar_label: Median Finder
tags:
- Heap
- Data Structure
- C++
- Java
- Python 
description: "This document provides a solution to the Median Finder problem, where you need to efficiently find the median of a stream of numbers."
---

## Problem
The MedianFinder class is designed to efficiently find the median of a stream of numbers. You can add numbers to the stream using the `addNum` method and retrieve the median using the `findMedian` method.

## Solution
The approach uses two heaps:
- A max heap to store the smaller half of the numbers
- A min heap to store the larger half of the numbers

The median can be found in constant time by looking at the tops of the heaps.

### Step-by-Step Explanation

1. **Initialize two heaps**:
   - `maxHeap` for the lower half of the data (inverted to act like a max heap using negative values).
   - `minHeap` for the upper half of the data.

2. **Add number**:
   - If the number is less than or equal to the maximum of `maxHeap`, push it to `maxHeap`.
   - Otherwise, push it to `minHeap`.
   - Balance the heaps if necessary to ensure `maxHeap` always has equal or one more element than `minHeap`.

3. **Find median**:
   - If the heaps have equal sizes, the median is the average of the roots of both heaps.
   - Otherwise, the median is the root of `maxHeap`.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@User"/>

## C++
```cpp
#include <queue>
#include <vector>

class MedianFinder {
 public:
  void addNum(int num) {
    if (maxHeap.empty() || num <= maxHeap.top())
      maxHeap.push(num);
    else
      minHeap.push(num);

    // Balance the two heaps so that
    // |maxHeap| >= |minHeap| and |maxHeap| - |minHeap| <= 1.
    if (maxHeap.size() < minHeap.size())
      maxHeap.push(minHeap.top()), minHeap.pop();
    else if (maxHeap.size() - minHeap.size() > 1)
      minHeap.push(maxHeap.top()), maxHeap.pop();
  }

  double findMedian() {
    if (maxHeap.size() == minHeap.size())
      return (maxHeap.top() + minHeap.top()) / 2.0;
    return maxHeap.top();
  }

 private:
  std::priority_queue<int> maxHeap;
  std::priority_queue<int, std::vector<int>, std::greater<int>> minHeap;
};

int main() {
  MedianFinder mf;
  mf.addNum(1);
  mf.addNum(2);
  std::cout << mf.findMedian() << std::endl; // Output: 1.5
  mf.addNum(3);
  std::cout << mf.findMedian() << std::endl; // Output: 2
}
```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@User"/>

## Java
```java
import java.util.Collections;
import java.util.PriorityQueue;
import java.util.Queue;

public class MedianFinder {
  private Queue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
  private Queue<Integer> minHeap = new PriorityQueue<>();

  public void addNum(int num) {
    if (maxHeap.isEmpty() || num <= maxHeap.peek())
      maxHeap.offer(num);
    else
      minHeap.offer(num);

    // Balance the two heaps so that
    // |maxHeap| >= |minHeap| and |maxHeap| - |minHeap| <= 1.
    if (maxHeap.size() < minHeap.size())
      maxHeap.offer(minHeap.poll());
    else if (maxHeap.size() - minHeap.size() > 1)
      minHeap.offer(maxHeap.poll());
  }

  public double findMedian() {
    if (maxHeap.size() == minHeap.size())
      return (double) (maxHeap.peek() + minHeap.peek()) / 2.0;
    return (double) maxHeap.peek();
  }

  public static void main(String[] args) {
    MedianFinder mf = new MedianFinder();
    mf.addNum(1);
    mf.addNum(2);
    System.out.println(mf.findMedian()); // Output: 1.5
    mf.addNum(3);
    System.out.println(mf.findMedian()); // Output: 2
  }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@User"/>

## Python
```python
import heapq

class MedianFinder:
  def __init__(self):
    self.maxHeap = []
    self.minHeap = []

  def addNum(self, num: int) -> None:
    if not self.maxHeap or num <= -self.maxHeap[0]:
      heapq.heappush(self.maxHeap, -num)
    else:
      heapq.heappush(self.minHeap, num)

    # Balance the two heaps so that
    # |maxHeap| >= |minHeap| and |maxHeap| - |minHeap| <= 1.
    if len(self.maxHeap) < len(self.minHeap):
      heapq.heappush(self.maxHeap, -heapq.heappop(self.minHeap))
    elif len(self.maxHeap) - len(self.minHeap) > 1:
      heapq.heappush(self.minHeap, -heapq.heappop(self.maxHeap))

  def findMedian(self) -> float:
    if len(self.maxHeap) == len(self.minHeap):
      return (-self.maxHeap[0] + self.minHeap[0]) / 2.0
    return -self.maxHeap[0]

# Example usage
mf = MedianFinder()
mf.addNum(1)
mf.addNum(2)
print(mf.findMedian())  # Output: 1.5
mf.addNum(3)
print(mf.findMedian())  # Output: 2
```
</TabItem>
</Tabs>

# Complexity Analysis
## Time Complexity: $O(log N)$ for addNum, $O(1)$ for findMedian
### Reason:
Adding a number involves heap insertion which takes $O(log N)$ time. Finding the median involves looking at the top elements of the heaps, which takes $O(1)$ time.

## Space Complexity: $O(N)$
### Reason:
We are storing all the numbers in the two heaps.
