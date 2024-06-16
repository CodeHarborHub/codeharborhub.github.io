---
id: longest-increasing-subsequence
title: Longest Increasing Subsequence (LeetCode)
sidebar_label: 0300-LongestIncreasingSubsequence
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Merge Two Sorted Lists](https://leetcode.com/problems/longest-increasing-subsequence/) | [Merge Two Sorted Lists Solution on LeetCode](https://leetcode.com/problems/longest-increasing-subsequence/solutions/) |  [VijayShankerSharma](https://leetcode.com/u/darkknight648/) |

## Problem Description

Given an integer array nums, return the length of the longest strictly increasing subsequence.

### Examples

#### Example 1:

- **Input:** nums = [10,9,2,5,3,7,101,18]
- **Output:** 4
- **Explanation:** The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

#### Example 2:

- **Input:** nums = [0,1,0,3,2,3]
- **Output:** 4

#### Example 3:

- **Input:** nums = [7,7,7,7,7,7,7]
- **Output:** 1

### Constraints:

- $1 <= nums.length <= 2500$
- $-10^4 <= nums[i] <= 10^4$

## Approach

We can solve this problem using dynamic programming or binary search. Here, we will discuss the binary search approach which achieves $O(n log(n))$ time complexity.

1. Initialize an empty list tails to keep track of the smallest ending element for all increasing subsequences.
2. Iterate through each element num in the input nums.
3. If num is greater than the last element in tails, append num to tails.
4. Otherwise, perform a binary search on tails to find the smallest element greater than or equal to num and update that element with num.
5. After iterating through all elements in nums, return the length of tails.

## Solution Code

#### Python

```py
class Solution:
    def lengthOfLIS(self, nums):
        tails = []
        for num in nums:
            left, right = 0, len(tails) - 1
            while left <= right:
                mid = (left + right) // 2
                if tails[mid] < num:
                    left = mid + 1
                else:
                    right = mid - 1
            if left < len(tails):
                tails[left] = num
            else:
                tails.append(num)
        return len(tails)
```

#### C++

```cpp
class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        vector<int> tails;
        for (int num : nums) {
            auto it = lower_bound(tails.begin(), tails.end(), num);
            if (it == tails.end())
                tails.push_back(num);
            else
                *it = num;
        }
        return tails.size();
    }
};
```

#### Java

```java
class Solution {
    public int lengthOfLIS(int[] nums) {
        List<Integer> tails = new ArrayList<>();
        for (int num : nums) {
            int left = 0, right = tails.size() - 1;
            while (left <= right) {
                int mid = left + (right - left) / 2;
                if (tails.get(mid) < num)
                    left = mid + 1;
                else
                    right = mid - 1;
            }
            if (left < tails.size())
                tails.set(left, num);
            else
                tails.add(num);
        }
        return tails.size();
    }
}
```

## Conclusion

The "Longest Increasing Subsequence" problem can be efficiently solved using the binary search approach, achieving $O(n log(n))$ time complexity. The provided solution code implements this approach in Python, C++, and Java, providing an optimal solution to the problem.
