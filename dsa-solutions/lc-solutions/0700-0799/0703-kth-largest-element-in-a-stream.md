---
id: kth-largest-element-in-a-Stream
title: Kth Largest Element in a Stream
sidebar_label: 0703 - Kth Largest Element in a Stream
tags:
  - Heap
  - Design
  - Data Stream
description: "This is a solution to the Kth Largest Element in a Stream problem on LeetCode."
---

## Problem Description

Design a class to find the $k^{th}$ largest element in a stream. Note that it is the kth largest element in the sorted order, not the $k^{th}$ distinct element.

Implement `KthLargest` class:

- `KthLargest(int k, int[] nums)` Initializes the object with the integer `k` and the stream of integers `nums`.
- `int add(int val)` Appends the integer `val` to the stream and returns the element representing the $k^{th}$ largest element in the stream.

### Examples

**Example 1:**

```
Input
["KthLargest", "add", "add", "add", "add", "add"]
[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
Output
[null, 4, 5, 5, 8, 8]

Explanation
KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3);   // return 4
kthLargest.add(5);   // return 5
kthLargest.add(10);  // return 5
kthLargest.add(9);   // return 8
kthLargest.add(4);   // return 8
```

### Constraints

- $1 \leq k \leq 10^4$
- $0 \leq nums.length \leq 10^4$
- $-10^4 \leq nums[i] \leq 10^4$
- $-10^4 \leq val \leq 10^4$
- At most $10^4$ calls will be made to `add`.
- It is guaranteed that there will be at least `k` elements in the array when you search for the $k^{th}$ element.

## Solution for Kth Largest Element in a Stream

### Approach 1: Heap

A heap is a data structure that is capable of giving you the smallest (or largest) element (by some criteria) in constant time, while also being able to add elements and remove the smallest (or largest) element in only logarithmic time. Imagine if you wanted to replicate this functionality naively with an array. To make sure we can find the smallest element in constant time, let's just keep our array sorted, so that the last element is always the largest (or smallest, depending on if we're sorting in ascending or descending order). Removing the largest/smallest element will take $O(1)$ time as we are popping from the end of the array. However, to add a new element, we first need to find where the element should be inserted and then insert it by shifting the array, which requires $O(n)$ time. Now, there are potential improvements to this approach, like using a deque for removals and insertions and binary searching to find insertion points, but the point is that a heap makes it so we don't need to worry about any of that.

In summary, a heap:

- Stores elements, and can find the smallest (min-heap) or largest (max-heap) element stored in $O(1)$.
- Can add elements and remove the smallest (min-heap) or largest (max-heap) element in $O(log⁡(n))$.
- Can perform insertions and removals while always maintaining the first property.

The capability to remove and insert elements in $log⁡(n)$ time makes heaps extremely useful. For example, many problems that can be naively solved in $O(n^2)$ time, can be solved in $O(n⋅log⁡(n))$ time by using a heap. To put this in perspective, for an input size of $n = 10^5$ elements, $n⋅log⁡(n)$ is over **6000** times smaller than $n^2$.

So now that we know what a heap does, how does it help solve this problem? Let's say we have some stream of numbers, `nums = [6, 2, 3, 1, 7]`, and `k = 3`. Because the input is small, we can clearly see the kth smallest element is `3`. Although, earlier we said that a heap can only find an element in $O(1)$ time if it's a minimum or maximum (depending on choice of implementation). Well, a heap is also capable of removing the smallest element quickly, so what if we just keep removing the smallest element from `nums` until `nums.length == k`? In this case, we would have `nums = [3, 6, 7]`, and a heap can now give us our answer in $O(1)$ time.

That's the key to solving this problem - use a min-heap (min means that the heap will remove/find the smallest element, a max heap is the same thing but for the largest element) and keep the heap at size `k`. That way, the smallest element in the heap (the one we can access in $O(1)$) will always be the kth largest element. This way, when adding a number to the heap with `add()`, we can do it very quickly in $log⁡(n)$ time. If our heap exceeds size `k`, then we can also remove it very quickly. In the end, the smallest element in the heap will be the answer.

#### Algorithm

1. In the constructor, create a min heap using the elements from `nums`. Then, pop from the heap until `heap.length == k`.
2. For every call to `add()`:
    - First, push `val` into `heap`.
    - Next, check if `heap.length > k`. If so, pop from the heap.
    - Finally, return the smallest value from the heap, which we can get in $O(1)$ time.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
#include <queue>

class KthLargest {
private:
    int k;
    std::priority_queue<int, std::vector<int>, std::greater<int>> heap;

public:
    KthLargest(int k, std::vector<int> nums) {
        this->k = k;
        for (int num : nums) {
            heap.push(num);
            if (heap.size() > k) {
                heap.pop();
            }
        }
    }

    int add(int val) {
        heap.push(val);
        if (heap.size() > k) {
            heap.pop();
        }
        return heap.top();
    }
};

```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class KthLargest {
    private static int k;
    private PriorityQueue<Integer> heap;
    
    public KthLargest(int k, int[] nums) {
        this.k = k;
        heap = new PriorityQueue<>();
        
        for (int num: nums) {
            heap.offer(num);
        }
        
        while (heap.size() > k) {
            heap.poll();
        }
    }
    
    public int add(int val) {
        heap.offer(val);
        if (heap.size() > k) {
            heap.poll();
        }

        return heap.peek();
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class KthLargest:
    def __init__(self, k: int, nums: List[int]):
        self.k = k
        self.heap = nums
        heapq.heapify(self.heap)
        
        while len(self.heap) > k:
            heapq.heappop(self.heap)

    def add(self, val: int) -> int:
        heapq.heappush(self.heap, val)
        if len(self.heap) > self.k:
            heapq.heappop(self.heap)
        return self.heap[0]
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(N⋅log(N)+M⋅log(k))$

> **Reason**: The time complexity is split into two parts. First, the constructor needs to turn `nums` into a heap of size `k`. In Python, `heapq.heapify()` can turn nums into a heap in $O(N)$ time. Then, we need to remove from the heap until there are only k elements in it, which means removing `N - k` elements. Since k can be, say 1, in terms of big O this is N operations, with each operation costing $log⁡(N)$. Therefore, the constructor costs $O(N + N⋅log⁡(N))=O(N⋅log⁡(N))$.
>
> Next, every call to `add()` involves adding an element to `heap` and potentially removing an element from `heap`. Since our heap is of size `k`, every call to `add()` at worst costs $O(2 \times log⁡(k))=O(log⁡(k))$. That means `M` calls to add() costs $O(M⋅log⁡(k))$.

### Space Complexity: $O(N)$

> **Reason**: The only extra space we use is the `heap`. While during `add()` calls we limit the size of the heap to `k`, in the constructor we start by converting `nums` into a heap, which means the heap will initially be of size `N`.

## References

- **LeetCode Problem**: [Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/description/)

- **Solution Link**: [Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>