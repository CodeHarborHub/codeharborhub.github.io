---
id: max-chunks-to-make-sorted
title: Max Chunks To Make Sorted
sidebar_label: 0769- Max Chunks To Make Sorted
tags:
  - Leet code
description: "Solution to leetocde 769"
---

## Problem Statement

You are given an integer array `arr` of length `n` that represents a permutation of the integers in the range `[0, n - 1]`.

We split `arr` into some number of chunks (i.e., partitions), and individually sort each chunk. After concatenating them, the result should equal the sorted array.

Return the largest number of chunks we can make to sort the array.

### Example 1

**Input**: `arr = [4,3,2,1,0]`

**Output**: `1`

**Explanation**:
Splitting into two or more chunks will not return the required result.
For example, splitting into `[4, 3], [2, 1, 0]` will result in `[3, 4, 0, 1, 2]`, which isn't sorted.

### Example 2

**Input**: `arr = [1,0,2,3,4]`

**Output**: `4`

**Explanation**:
We can split into two chunks, such as `[1, 0], [2, 3, 4]`.
However, splitting into `[1, 0], [2], [3], [4]` is the highest number of chunks possible.

### Constraints

- `n == arr.length`
- `1 <= n <= 10`
- `0 <= arr[i] < n`
- All the elements of `arr` are unique.

### Algorithm

- **Idea**: The idea is to iterate through the array and keep track of the maximum value encountered so far. At any index `i`, if the maximum value encountered so far is equal to `i`, it means we can form a chunk ending at index `i`.
- **Logic**: If the maximum value up to the current index is equal to the index itself, it means all elements before and including this index can be sorted independently to form part of the final sorted array.
- **Implementation**: Use a loop to iterate through the array and maintain `max_so_far`, which keeps the maximum value seen so far. Whenever `max_so_far` equals the current index `i`, increment the chunk count.

### Code implementation

### Python Solution

```python
class Solution:
    def maxChunksToSorted(self, arr: List[int]) -> int:
        max_so_far = 0
        chunks = 0

        for i in range(len(arr)):
            max_so_far = max(max_so_far, arr[i])
            if max_so_far == i:
                chunks += 1

        return chunks

```

### C++ Solution

```cpp
#include <vector>
#include <algorithm>

class Solution {
public:
    int maxChunksToSorted(std::vector<int>& arr) {
        int max_so_far = 0;
        int chunks = 0;

        for (int i = 0; i < arr.size(); ++i) {
            max_so_far = std::max(max_so_far, arr[i]);
            if (max_so_far == i) {
                ++chunks;
            }
        }

        return chunks;
    }
};

// Example usage:
#include <iostream>

int main() {
    Solution solution;
    std::vector<int> arr1 = {4, 3, 2, 1, 0};
    std::vector<int> arr2 = {1, 0, 2, 3, 4};
    std::cout << solution.maxChunksToSorted(arr1) << std::endl;  // Output: 1
    std::cout << solution.maxChunksToSorted(arr2) << std::endl;  // Output: 4
    return 0;
}
```

### Java Solution

```java
class Solution {
    public int maxChunksToSorted(int[] arr) {
        int maxSoFar = 0;
        int chunks = 0;

        for (int i = 0; i < arr.length; ++i) {
            maxSoFar = Math.max(maxSoFar, arr[i]);
            if (maxSoFar == i) {
                ++chunks;
            }
        }

        return chunks;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] arr1 = {4, 3, 2, 1, 0};
        int[] arr2 = {1, 0, 2, 3, 4};
        System.out.println(solution.maxChunksToSorted(arr1));  // Output: 1
        System.out.println(solution.maxChunksToSorted(arr2));  // Output: 4
    }
}
```

### JavaScript Solution

```javascript
var maxChunksToSorted = function (arr) {
  let maxSoFar = 0;
  let chunks = 0;

  for (let i = 0; i < arr.length; ++i) {
    maxSoFar = Math.max(maxSoFar, arr[i]);
    if (maxSoFar === i) {
      ++chunks;
    }
  }

  return chunks;
};

// Example usage:
console.log(maxChunksToSorted([4, 3, 2, 1, 0])); // Output: 1
console.log(maxChunksToSorted([1, 0, 2, 3, 4])); // Output: 4
```
