---
id: h-index
title: H-Index (LeetCode)
sidebar_label: 0274-H-Index
tags:
  - Array
  - Sorting
  - Counting Sort
description: Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.
sidebar_position: 0274
---

## Problem Description

Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

### Example 1

- **Input:** ` citations = [3,0,6,1,5]`
- **Output:** `3`
- **Explanation:**[3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.

### Example 2

- **Input:** `citations = [1,3,1] `
- **Output:** `1`

### Constraints

- `n == citations.length`
- `1 <= n <= 5000`
- `0 <= citations[i] <= 1000`

## Approach
Create a function hasLeastCitations with a parameter h to check if there are at least h papers with >= h citations. When hasLeastCitations(x) is true, hasLeastCitations(x-1) is also true. This means that hasLeastCitations is a monotonic function, so we can binary search for the highest h for which it return true. This h is our h-index.

### Solution Code

#### C++

```c++
class Solution {
public:
    bool hasLeastCitations(int h, vector<int>& citations) {
        int count = 0;
        for (int cite_count : citations) {
            if (cite_count >= h)
                count++;
        }
        return count >= h;
    }
    int hIndex(vector<int>& citations) {
        int low = 0, high = citations.size();
        while (low <= high) {
            int mid = (low + high) / 2;
            if (hasLeastCitations(mid, citations))
                low = mid + 1;
            else
                high = mid - 1;
        }
        return high;
    }
};
```

#### Java
```java
class Solution {
    static boolean hasLeastCitations(int h, int[] citations) {
        int count = 0;
        for (int cite_count : citations) {
            if (cite_count >= h)
                count++;
        }
        return count >= h;
    }
    public int hIndex(int[] citations) {
        int low = 0, high = citations.length;
        while (low <= high) {
            int mid = (low + high) / 2;
            if (hasLeastCitations(mid, citations))
                low = mid + 1;
            else
                high = mid - 1;
        }
        return high;
    }
}
```

#### Python
```python
class Solution:
    def hIndex(self, citations: List[int]) -> int:

        def hasLeastCitations(h, citations):
            return sum(cite_count >= h for cite_count in citations) >= h

        low = 0
        high = len(citations)
        while low <= high:
            mid = (low + high) // 2
            if hasLeastCitations(mid, citations):
                low = mid + 1
            else:
                high = mid - 1
        return high
            
```

#### Conclusion
- Time Complexity

  - 1. Sorting is O(nlogn)

   - 2. Looping is O(n)

    - The total time complexity as O(n log n).

- Space Complexity
The only memory we allocate is the integer h, so the space complexity is O(1).