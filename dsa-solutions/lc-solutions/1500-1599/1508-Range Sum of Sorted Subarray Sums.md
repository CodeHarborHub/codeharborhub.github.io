---

id: range-sum-of-sorted-subarray-sums
title: Range Sum of Sorted Subarray Sums
sidebar_label: 1508-Range-Sum-Of-Sorted-Subarray-Sums
tags:
  - Array
  - Prefix Sum
  - Sorting
  - LeetCode
  - Python
  - JavaScript
  - TypeScript
  - Java
  - C++
description: "This is a solution to the Range Sum of Sorted Subarray Sums problem on LeetCode."

---

In this page, we will solve the Range Sum of Sorted Subarray Sums problem using different approaches: calculating all subarray sums and sorting them, and using a min-heap for efficiency. We will provide the implementation of the solution in JavaScript, TypeScript, Python, Java, C++, and more.

## Problem Description

You are given the array `nums` consisting of `n` positive integers. You computed the sum of all non-empty continuous subarrays from the array and then sorted them in non-decreasing order, creating a new array of $n * (n + 1) / 2$ numbers.

Return the sum of the numbers from index `left` to index `right` (indexed from 1), inclusive, in the new array. Since the answer can be a huge number return it modulo $(10^9 + 7)$.

### Examples

**Example 1:**

```plaintext
Input: nums = [1,2,3,4], n = 4, left = 1, right = 5
Output: 13
Explanation: All subarray sums are 1, 3, 6, 10, 2, 5, 9, 3, 7, 4. After sorting them in non-decreasing order we have the new array [1, 2, 3, 3, 4, 5, 6, 7, 9, 10]. The sum of the numbers from index left = 1 to right = 5 is 1 + 2 + 3 + 3 + 4 = 13.
```

**Example 2:**

```plaintext
Input: nums = [1,2,3,4], n = 4, left = 3, right = 4
Output: 6
Explanation: The given array is the same as example 1. We have the new array [1, 2, 3, 3, 4, 5, 6, 7, 9, 10]. The sum of the numbers from index left = 3 to right = 4 is 3 + 3 = 6.
```

**Example 3:**

```plaintext
Input: nums = [1,2,3,4], n = 4, left = 1, right = 10
Output: 50
```

### Constraints

- $n == nums.length$
- $1 <= nums.length <= 1000$
- $1 <= nums[i] <= 100$
- $1 <= left <= right <= n * (n + 1) / 2$

---
## Explanation
There are three main approaches discussed:

1. **Naive Approach**:
   - Calculate all possible subarray sums and store them in a list.
   - Sort the list of subarray sums.
   - Calculate the sum of the range of sorted subarray sums from `left` to `right`.

2. **Min-Heap Approach**:
   - Use a min-heap to store the subarray sums dynamically.
   - Extract the minimum elements from the heap for the required range and sum them up.

3. **Fenwick Tree Approach**:
   - Use a Fenwick Tree to manage prefix sums.
   - Calculate subarray sums based on prefix sums.
   - Sort the subarray sums and sum the elements in the required range.


## Solution for Range Sum of Sorted Subarray Sums

### Intuition and Approach

To solve the problem, we can use two approaches:

1. **Brute Force Approach**: Calculate all subarray sums, sort them, and then find the sum of the specified range.
2. **Optimized Approach Using Min-Heap**: Use a min-heap to keep track of the smallest sums and avoid sorting the entire list of subarray sums.

<Tabs>
 <tabItem value="Brute Force" label="Brute Force">

### Approach 1: Brute Force

#### Implementation

```jsx live
function rangeSumNaive() {
  function rangeSum(nums, n, left, right) {
    const MOD = 1e9 + 7;
    const allSums = [];
    
    for (let i = 0; i < n; i++) {
      let sum = 0;
      for (let j = i; j < n; j++) {
        sum += nums[j];
        allSums.push(sum);
      }
    }
    
    allSums.sort((a, b) => a - b);
    
    let result = 0;
    for (let i = left - 1; i < right; i++) {
      result = (result + allSums[i]) % MOD;
    }
    
    return result;
  }

  const nums = [1, 2, 3, 4];
  const n = 4, left = 1, right = 5;
  const result = rangeSum(nums, n, left, right);

  return (
    <div>
      <p>
        <b>Input:</b> {JSON.stringify(nums)}
      </p>
      <p>
        <b>Output:</b> {result}
      </p>
    </div>
  );
}

```

#### Code in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@manishh12"/>
   ```javascript
    function rangeSumOfSortedSubarraySums(nums, n, left, right) {
      const MOD = 1e9 + 7;
      const subarraySums = [];
      
      for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
          sum += nums[j];
          subarraySums.push(sum);
        }
      }
      
      subarraySums.sort((a, b) => a - b);
      
      let result = 0;
      for (let i = left - 1; i < right; i++) {
        result = (result + subarraySums[i]) % MOD;
      }
      
      return result;
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    function rangeSumOfSortedSubarraySums(nums: number[], n: number, left: number, right: number): number {
      const MOD = 1e9 + 7;
      const subarraySums: number[] = [];
      
      for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
          sum += nums[j];
          subarraySums.push(sum);
        }
      }
      
      subarraySums.sort((a, b) => a - b);
      
      let result = 0;
      for (let i = left - 1; i < right; i++) {
        result = (result + subarraySums[i]) % MOD;
      }
      
      return result;
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    from typing import List

    class Solution:
        def rangeSum(self, nums: List[int], n: int, left: int, right: int) -> int:
            MOD = 10**9 + 7
            subarray_sums = []
            
            for i in range(n):
                sum = 0
                for j in range(i, n):
                    sum += nums[j]
                    subarray_sums.append(sum)
                    
            subarray_sums.sort()
            
            result = 0
            for i in range(left - 1, right):
                result = (result + subarray_sums[i]) % MOD
            
            return result

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    import java.util.*;

    class Solution {
        public int rangeSum(int[] nums, int n, int left, int right) {
            final int MOD = 1000000007;
            List<Integer> subarraySums = new ArrayList<>();
            
            for (int i = 0; i < n; i++) {
                int sum = 0;
                for (int j = i; j < n; j++) {
                    sum += nums[j];
                    subarraySums.add(sum);
                }
            }
            
            Collections.sort(subarraySums);
            
            int result = 0;
            for (int i = left - 1; i < right; i++) {
                result = (result + subarraySums.get(i)) % MOD;
            }
            
            return result;
        }

    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    #include <vector>
    #include <algorithm>

    using namespace std;

    class Solution {
    public:
        int rangeSum(vector<int>& nums, int n, int left, int right) {
            const int MOD = 1e9 + 7;
            vector<int> subarraySums;
            
            for (int i = 0; i < n; ++i) {
                int sum = 0;
                for (int j = i; j < n; ++j) {
                    sum += nums[j];
                    subarraySums.push_back(sum);
                }
            }
            
            sort(subarraySums.begin(), subarray

Sums.end());
            
            int result = 0;
            for (int i = left - 1; i < right; ++i) {
                result = (result + subarraySums[i]) % MOD;
            }
            
            return result;
        }
    };

  
    ```

  </TabItem>
</Tabs>

 </tabItem>

  <tabItem value="Min-Heap" label="Min-Heap">

### Approach 2: Min-Heap

#### Explanation

The min-heap approach can optimize the time complexity. Instead of calculating all subarray sums and sorting them, we use a min-heap to keep track of the smallest sums.

#### Implementation

```jsx live
function rangeSumMinHeap() {
  function rangeSum(nums, n, left, right) {
    const MOD = 1e9 + 7;
    const minHeap = [];

    for (let i = 0; i < n; ++i) {
      let sum = 0;
      for (let j = i; j < n; ++j) {
        sum += nums[j];
        minHeap.push(sum);
      }
    }

    minHeap.sort((a, b) => a - b);

    let result = 0;
    for (let i = 0; i < right; ++i) {
      const minSum = minHeap[i];
      if (i >= left - 1) {
        result = (result + minSum) % MOD;
      }
    }

    return result;
  }

  const nums = [1, 2, 3, 4];
  const n = 4, left = 1, right = 5;
  const result = rangeSum(nums, n, left, right);

  return (
    <div>
      <p>
        <b>Input:</b> {JSON.stringify(nums)}
      </p>
      <p>
        <b>Output:</b> {result}
      </p>
    </div>
  );
}
```
<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@manishh12"/>
   ```javascript
    class MinHeap {
      constructor() {
        this.heap = [];
      }

      insert(val) {
        this.heap.push(val);
        this.bubbleUp();
      }

      bubbleUp() {
        let index = this.heap.length - 1;
        const current = this.heap[index];

        while (index > 0) {
          const parentIndex = Math.floor((index - 1) / 2);
          const parent = this.heap[parentIndex];
          if (current >= parent) break;
          this.heap[index] = parent;
          index = parentIndex;
        }

        this.heap[index] = current;
      }

      extractMin() {
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
          this.heap[0] = end;
          this.sinkDown(0);
        }
        return min;
      }

      sinkDown(index) {
        const length = this.heap.length;
        const element = this.heap[index];
        while (true) {
          let leftChildIndex = 2 * index + 1;
          let rightChildIndex = 2 * index + 2;
          let leftChild, rightChild;
          let swap = null;

          if (leftChildIndex < length) {
            leftChild = this.heap[leftChildIndex];
            if (leftChild < element) swap = leftChildIndex;
          }

          if (rightChildIndex < length) {
            rightChild = this.heap[rightChildIndex];
            if (
              (swap === null && rightChild < element) ||
              (swap !== null && rightChild < leftChild)
            ) {
              swap = rightChildIndex;
            }
          }

          if (swap === null) break;
          this.heap[index] = this.heap[swap];
          index = swap;
        }

        this.heap[index] = element;
      }
    }

    function rangeSumOfSortedSubarraySums(nums, n, left, right) {
      const MOD = 1e9 + 7;
      const heap = new MinHeap();

      for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
          sum += nums[j];
          heap.insert(sum);
        }
      }

      let result = 0;
      for (let i = 0; i < right; i++) {
        let minSum = heap.extractMin();
        if (i >= left - 1) {
          result = (result + minSum) % MOD;
        }
      }

      return result;
    }

  
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    class MinHeap {
      heap: number[];

      constructor() {
        this.heap = [];
      }

      insert(val: number): void {
        this.heap.push(val);
        this.bubbleUp();
      }

      bubbleUp(): void {
        let index = this.heap.length - 1;
        const current = this.heap[index];

        while (index > 0) {
          const parentIndex = Math.floor((index - 1) / 2);
          const parent = this.heap[parentIndex];
          if (current >= parent) break;
          this.heap[index] = parent;
          index = parentIndex;
        }

        this.heap[index] = current;
      }

      extractMin(): number {
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
          this.heap[0] = end!;
          this.sinkDown(0);
        }
        return min;
      }

      sinkDown(index: number): void {
        const length = this.heap.length;
        const element = this.heap[index];
        while (true) {
          let leftChildIndex = 2 * index + 1;
          let rightChildIndex = 2 * index + 2;
          let leftChild, rightChild;
          let swap = null;

          if (leftChildIndex < length) {
            leftChild = this.heap[leftChildIndex];
            if (leftChild < element) swap = leftChildIndex;
          }

          if (rightChildIndex < length) {
            rightChild = this.heap[rightChildIndex];
            if (
              (swap === null && rightChild < element) ||
              (swap !== null && rightChild < leftChild)
            ) {
              swap = rightChildIndex;
            }
          }

          if (swap === null) break;
          this.heap[index] = this.heap[swap];
          index = swap;
        }

        this.heap[index] = element;
      }
    }

    function rangeSumOfSortedSubarraySums(nums: number[], n: number, left: number, right: number): number {
      const MOD = 1e9 + 7;
      const heap = new MinHeap();

      for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
          sum += nums[j];
          heap.insert(sum);
        }
      }

      let result = 0;
      for (let i = 0; i < right; i++) {
        let minSum = heap.extractMin();
        if (i >= left - 1) {
          result = (result + minSum) % MOD;
        }
      }

      return result;
    }

   
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    import heapq
    from typing import List

    class Solution:
        def rangeSum(self, nums: List[int], n: int, left: int, right: int) -> int:
            MOD = 10**9 + 7
            min_heap = []
            
            for i in range(n):
                sum = 0
                for j in range(i, n):
                    sum += nums[j]
                    heapq.heappush(min_heap, sum)
            
            result = 0
            for i in range(right):
                min_sum = heapq.heappop(min_heap)
                if i >= left - 1:
                    result = (result + min_sum) % MOD
            
            return result

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    import java.util.PriorityQueue;

    class Solution {
        public int rangeSum(int[] nums, int n, int left, int right) {
            final int MOD = 1000000007;
            PriorityQueue<Integer> minHeap = new PriorityQueue<>();
            
            for (int i = 0; i < n; i++) {
                int sum = 0;
                for (int j = i; j < n; j++) {
                    sum += nums[j];
                    minHeap.offer(sum);
                }
            }
            
            int result = 0;
            for (int i = 0; i < right; i++) {
                int minSum = minHeap.poll();
                if (i >= left - 1) {
                    result = (result + minSum) % MOD;
                }
            }
            
            return result;
        }

      
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    #include <vector>
    #include <queue>

    using namespace std;

    class Solution {
    public:
        int rangeSum(vector<int>& nums

, int n, int left, int right) {
            const int MOD = 1e9 + 7;
            priority_queue<int, vector<int>, greater<int>> minHeap;
            
            for (int i = 0; i < n; ++i) {
                int sum = 0;
                for (int j = i; j < n; ++j) {
                    sum += nums[j];
                    minHeap.push(sum);
                }
            }
            
            int result = 0;
            for (int i = 0; i < right; ++i) {
                int minSum = minHeap.top();
                minHeap.pop();
                if (i >= left - 1) {
                    result = (result + minSum) % MOD;
                }
            }
            
            return result;
        }
    };


    ```

  </TabItem>
</Tabs>

 </tabItem>

  <tabItem value="Fenwick Tree" label="Fenwick Tree">

### Approach 3: Fenwick Tree

#### Explanation

Using a Fenwick Tree (or Binary Indexed Tree) can efficiently manage the prefix sums and query the range sum.

#### Implementation

```jsx live
function rangeSumFenwickTree() {
  class FenwickTree {
    constructor(size) {
      this.size = size;
      this.tree = Array(size + 1).fill(0);
    }

    update(index, value) {
      while (index <= this.size) {
        this.tree[index] += value;
        index += index & -index;
      }
    }

    query(index) {
      let sum = 0;
      while (index > 0) {
        sum += this.tree[index];
        index -= index & -index;
      }
      return sum;
    }
  }

  function rangeSumOfSortedSubarraySums(nums, n, left, right) {
    const MOD = 1e9 + 7;
    let prefixSum = Array(n + 1).fill(0);
    let allSums = [];

    for (let i = 0; i < n; i++) {
      prefixSum[i + 1] = prefixSum[i] + nums[i];
    }

    for (let i = 0; i <= n; i++) {
      for (let j = i + 1; j <= n; j++) {
        allSums.push(prefixSum[j] - prefixSum[i]);
      }
    }

    allSums.sort((a, b) => a - b);
    let result = 0;

    for (let i = left - 1; i < right; i++) {
      result = (result + allSums[i]) % MOD;
    }

    return result;
  }

  const nums = [1, 2, 3, 4];
  const n = 4, left = 1, right = 5;
  const result = rangeSumOfSortedSubarraySums(nums, n, left, right);

  return (
    <div>
      <p>
        <b>Input:</b> {JSON.stringify(nums)}
      </p>
      <p>
        <b>Output:</b> {result}
      </p>
    </div>
  );
}

```

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@manishh12"/>
   ```javascript
    class FenwickTree {
      constructor(size) {
        this.size = size;
        this.tree = Array(size + 1).fill(0);
      }

      update(index, value) {
        while (index <= this.size) {
          this.tree[index] += value;
          index += index & -index;
        }
      }

      query(index) {
        let sum = 0;
        while (index > 0) {
          sum += this.tree[index];
          index -= index & -index;
        }
        return sum;
      }
    }

    function rangeSumOfSortedSubarraySums(nums, n, left, right) {
      const MOD = 1e9 + 7;
      let prefixSum = Array(n + 1).fill(0);
      let allSums = [];

      for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
      }

      for (let i = 0; i <= n; i++) {
        for (let j = i + 1; j <= n; j++) {
          allSums.push(prefixSum[j] - prefixSum[i]);
        }
      }

      allSums.sort((a, b) => a - b);
      let result = 0;

      for (let i = left - 1; i < right; i++) {
        result = (result + allSums[i]) % MOD;
      }

      return result;
    }

    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    class FenwickTree {
      size: number;
      tree: number[];

      constructor(size: number) {
        this.size = size;
        this.tree = Array(size + 1).fill(0);
      }

      update(index: number, value: number): void {
        while (index <= this.size) {
          this.tree[index] += value;
          index += index & -index;
        }
      }

      query(index: number): number {
        let sum = 0;
        while (index > 0) {
          sum += this.tree[index];
          index -= index & -index;
        }
        return sum;
      }
    }

    function rangeSumOfSortedSubarraySums(nums: number[], n: number, left: number, right: number): number {
      const MOD = 1e9 + 7;
      let prefixSum = Array(n + 1).fill(0);
      let allSums: number[] = [];

      for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
      }

      for (let i = 0; i <= n; i++) {
        for (let j = i + 1; j <= n; j++) {
          allSums.push(prefixSum[j] - prefixSum[i]);
        }
      }

      allSums.sort((a, b) => a - b);
      let result = 0;

      for (let i = left - 1; i < right; i++) {
        result = (result + allSums[i]) % MOD;
      }

      return result;
    }

    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    class FenwickTree:
        def __init__(self, size: int):
            self.size = size
            self.tree = [0] * (size + 1)
        
        def update(self, index: int, value: int):
            while index <= self.size:
                self.tree[index] += value
                index += index & -index
        
        def query(self, index: int) -> int:
            sum = 0
            while index > 0:
                sum += self.tree[index]
                index -= index & -index
            return sum

    def rangeSumOfSortedSubarraySums(nums, n, left, right):
        MOD = 10**9 + 7
        prefix_sum = [0] * (n + 1)
        all_sums = []

        for i in range(n):
            prefix_sum[i + 1] = prefix_sum[i] + nums[i]

        for i in range(n + 1):
            for j in range(i + 1, n + 1):
                all_sums.append(prefix_sum[j] - prefix_sum[i])

        all_sums.sort()
        result = 0

        for i in range(left - 1, right):
            result = (result + all_sums[i]) % MOD

        return result

  
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    import java.util.Arrays;

    class FenwickTree {
        private int[] tree;
        private int size;

        public FenwickTree(int size) {
            this.size = size;
            this.tree = new int[size + 1];
        }

        public void update(int index, int value) {
            while (index <= size) {
                tree[index] += value;
                index += index & -index;
            }
        }

        public int query(int index) {
            int sum = 0;
            while (index > 0) {
                sum += tree[index];
                index -= index & -index;
            }
            return sum;
        }
    }

    class Solution {
        public int rangeSum(int[] nums, int n, int left, int right) {
            final int MOD = 1000000007;
            int[] prefixSum = new int[n + 1];
            int[] allSums = new int[n * (n + 1) / 2];
            int k = 0;

            for (int i = 0; i < n; i++) {
                prefixSum[i + 1] = prefixSum[i] + nums[i];
            }

            for (int i = 0; i <= n; i++) {
                for (int j = i + 1; j <= n; j++) {
                    allSums[k++] = prefixSum[j] - prefixSum[i];
                }
            }

            Arrays.sort(allSums);
            int result = 0;

            for (int i = left - 1; i < right; i++) {
                result = (result + allSums[i]) % MOD;
            }

            return result;
        }

      
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    #include <vector>
    #include <algorithm>

    using namespace std;

    class FenwickTree {
    public:
        FenwickTree(int size) : tree(size + 1, 0), size(size) {}

        void update(int index, int value) {
            while (index <= size) {
                tree[index] += value;
                index += index & -index;
            }
        }



        int query(int index) const {
            int sum = 0;
            while (index > 0) {
                sum += tree[index];
                index -= index & -index;
            }
            return sum;
        }

    private:
        vector<int> tree;
        int size;
    };

    class Solution {
    public:
        int rangeSum(vector<int>& nums, int n, int left, int right) {
            const int MOD = 1e9 + 7;
            vector<int> prefixSum(n + 1, 0);
            vector<int> allSums(n * (n + 1) / 2);
            int k = 0;

            for (int i = 0; i < n; ++i) {
                prefixSum[i + 1] = prefixSum[i] + nums[i];
            }

            for (int i = 0; i <= n; ++i) {
                for (int j = i + 1; j <= n; ++j) {
                    allSums[k++] = prefixSum[j] - prefixSum[i];
                }
            }

            sort(allSums.begin(), allSums.end());
            int result = 0;

            for (int i = left - 1; i < right; ++i) {
                result = (result + allSums[i]) % MOD;
            }

            return result;
        }
    };

  
    ```

  </TabItem>
</Tabs>

 </tabItem>
</Tabs>


:::tip
Each approach has its own time and space complexity considerations. The naive approach is simple but may be inefficient for large inputs. The min-heap approach optimizes the process of finding the smallest subarray sums. The Fenwick Tree approach efficiently manages prefix sums but requires understanding of Fenwick Tree operations.
:::

## References

- **LeetCode Problem:** [Range Sum of Sorted Subarray Sums](https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/description/)
- **Solution Link:** [Range Sum of Sorted Subarray Sums Solution on LeetCode](https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/solution/)
- **Authors LeetCode Profile:** [Manish Kumar Gupta](https://leetcode.com/_manishh12/)

