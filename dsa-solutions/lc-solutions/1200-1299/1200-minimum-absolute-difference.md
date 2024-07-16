---
id: minimum-absolute-difference
title: Minimum Absolute Difference
sidebar_label: 1200. Minimum Absolute Difference
tags:
- Array
- Sorting
description: "Solution to Leetcode 1200. Minimum Absolute Difference"
---

## Problem Description

Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

a, b are from arr
a &lt; b
b - a equals to the minimum absolute difference of any two elements in arr
 
### Examples

**Example 1:**

```
Input: arr = [4,2,1,3]
Output: [[1,2],[2,3],[3,4]]
Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.
```

**Example 2:**

```
Input: arr = [1,3,6,10,15]
Output: [[1,3]]

```



### Constraints
- `2 <= arr.length <= 10^5`
- `-10^6 <= arr[i] <= 10^6`

### Approach 
Counting Sort

We can use counting sort to reduce the time complexity of sorting used in above appraoch. The counting sort method can be applied here becase the range of elements are small enough to be fitted into an array.

But we cannot directly apply counting sort becase the range also includes negative elements and thus we must remap the range from [a...b] to [0...(b-a)] = [0...R]. This can be done by simply subtracting minimum element each element of input array.

Then, since each element is distinct, we can simply use boolean array seen to keep track of each element present in the range [0...R]. Now, we can use this as a sorted array and compare between adjacent element, i.e, previous element which was present in seen and current element present in seen. The rest of the logic of updating MAB or resetting ans if smaller difference if found is the same as above. We just need to take care that we reset the shift while pushing elements into final ans.

### Complexity

Time complexity: $O(N + R)$
Space complexity: $O(R)$

### Solution

#### Code in Different Languages

#### C++

 ```cpp
class Solution {
public:
    vector<vector<int>> minimumAbsDifference(vector<int>& A) {
        auto [mn, mx] = minmax_element(begin(A), end(A));       // returns iterator to min and max element in A
        int R = *mx - *mn + 1, shift = -*mn, minDiff = INT_MAX, curDiff, prevElement = -R;
        vector<vector<int>> ans;
        vector<bool> seen(R);                                   // used to denote if i is present or not over the remapped range [0, R]
        for(auto c : A) seen[c + shift] = true;                 // mark each element of A as seen after applying shift
        for(int i = 0; i < R; i++)
            if(seen[i]) {
                int a = prevElement - shift, b = i - shift;     // remove the applied shift while pushing into ans array
                curDiff = b - a;
                if(curDiff == minDiff) ans.push_back({a, b});
                else if(curDiff < minDiff) {
                    minDiff = curDiff;
                    ans = {{a, b}};
                }
                prevElement = i;                                // update previous element so we only compare adjacent elements of sorted A
            }
        
        return ans;
    }
};
 ```

#### PYTHON

```python
class Solution:
    def minimumAbsDifference(self, A):
        mn, mx = min(A), max(A)
        R, shift, min_diff, prev_element = mx-mn+1, -mn, 10**10, -10**10
        ans, seen = [], [False]*R
        for c in A:
            seen[c + shift] = True
        for i in range(R):
            if seen[i]:
                a, b  = prev_element - shift, i - shift
                cur_diff = b-a
                if cur_diff == min_diff: ans.append([a, b])
                elif cur_diff < min_diff:
                    min_diff, ans = cur_diff, [[a, b]]
                prev_element = i
        return ans
```



### Complexity Analysis

- Time Complexity: $O(N+R)$ 

- Space Complexity: $O(R)$ 

### References

- **LeetCode Problem**: Minimum Absolute Difference