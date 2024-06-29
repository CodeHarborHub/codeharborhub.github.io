---
id: h-Index II
title: H-Index II (LeetCode)
sidebar_label: 0275-H-Index II
tags:
  - Array
  - Binary Search
description: This is the solution of question H-Index II on leetcode
sidebar_position: 0275
---

## Problem Description

Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper and citations is sorted in ascending order, return the researcher's h-index.
According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

You must write an algorithm that runs in logarithmic time.

### Example 1

```
Input: citations = [0,1,3,5,6]
Output: 3
Explanation: [0,1,3,5,6] means the researcher has 5 papers in total and each of them had received 0, 1, 3, 5, 6 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
```

### Example 2

```
Input: citations = [1,2,100]
Output: 2
```

### Constraints

- `n == citations.length`
- `1 <= n <= 10^5`
- `0 <= citations[i] <= 1000`

## Approach
Just binary search, each time check `citations[mid]`
1. `citations[mid] == len-mid`, then it means there are citations[mid] papers that have at least 
   citations[mid] citations.
2. `citations[mid] > len-mid`, then it means there are `citations[mid]` papers that have moret than 
   citations[mid] citations, so we should continue searching in the left half
3. `citations[mid] < len-mid`, we should continue searching in the right side
   After iteration, it is guaranteed that right+1 is the one we need to find `(i.e. len-(right+1) papars have at least len-(righ+1) citations)`

### Solution Code

#### C++

```c++
class Solution {
public:
    int hIndex(vector<int>& citations) {
        int left=0, len = citations.size(), right= len-1,  mid;
        while(left<=right)
        {
            mid=left+ (right-left)/2;
            if(citations[mid] >= (len-mid)) right = mid - 1;
            else left = mid + 1;
        }
        return len - left;
    }
};
```

#### Java
```java
public int hIndex(int[] citations) {
	int len = citations.length;
	int lo = 0, hi = len - 1;
	while (lo <= hi) {
		int med = (hi + lo) / 2;
		if (citations[med] == len - med) {
			return len - med;
		} else if (citations[med] < len - med) {
			lo = med + 1;
		} else { 
			//(citations[med] > len-med), med qualified as a hIndex,
		    // but we have to continue to search for a higher one.
			hi = med - 1;
		}
	}
	return len - lo;
}
```

#### Python
```python
class Solution:
    def hIndex(self, citations):
        if not citations: return 0
        n = len(citations)
        beg, end = 0, n - 1
        while beg <= end:
            mid = (beg + end)//2
            if mid + citations[mid] >= n:
                end = mid - 1
            else:
                beg = mid + 1                
        return n - beg
    
            
```

#### Conclusion
- Time Complexity
  - The total time complexity as $O(log n)$.

- Space Complexity
  - The only memory we allocate is the integer h, so the space complexity is O(1).