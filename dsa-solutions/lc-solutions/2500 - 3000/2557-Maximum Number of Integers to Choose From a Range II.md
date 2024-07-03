---
id: maximum-number-of-integers-to-choose-from-a-range-ii
title: Maximum Number of Integers to Choose From a Range II
sidebar_label: 2557 Maximum Number of Integers to Choose From a Range II

tags:
    - Binary Search
    - Array
    - Sorting
    - Greedy
description: "This is a solution to the Maximum Number of Integers to Choose From a Range II
 problem on LeetCode."
---

## Problem Description

You are given an integer array banned and two integers n and maxSum. You are choosing some number of integers following the below rules:

The chosen integers have to be in the range [1, n].
Each integer can be chosen at most once.
The chosen integers should not be in the array banned.
The sum of the chosen integers should not exceed maxSum.
Return the maximum number of integers you can choose following the mentioned rules.

 

### Examples

**Example 1:**

```

Input: banned = [1,4,6], n = 6, maxSum = 4
Output: 1
Explanation: You can choose the integer 3.
3 is in the range [1, 6], and do not appear in banned. The sum of the chosen integers is 3, which does not exceed maxSum.

```

**Example 2:**

```
Input: banned = [4,3,5,6], n = 7, maxSum = 18
Output: 3
Explanation: You can choose the integers 1, 2, and 7.
All these integers are in the range [1, 7], all do not appear in banned, and their sum is 18, which does not exceed maxSum.

```


### Constraints

- `1 <= banned.length <= 105`
- `1 <= banned[i] <= n <= 109`
- `1 <= maxSum <= 1015`
 

### Approach 

We can add $0$ and $n + 1$ to the array `banned`, then deduplicate and sort the array `banned`.

Next, we enumerate every two adjacent elements $i$ and $j$ in the array `banned`. The range of selectable integers is $[i + 1, j - 1]$. We use binary search to enumerate the number of elements we can select in this range, find the maximum number of selectable elements, and then add it to $ans$. At the same time, we subtract the sum of these elements from `maxSum`. If `maxSum` is less than $0$, we break the loop. Return the answer.

The time complexity is $O(n \times \log n)$, and the space complexity is $O(n)$. Where $n$ is the length of the array `banned`.


#### Python3

```python
class Solution:
    def maxCount(self, banned: List[int], n: int, maxSum: int) -> int:
        banned.extend([0, n + 1])
        ban = sorted(set(banned))
        ans = 0
        for i, j in pairwise(ban):
            left, right = 0, j - i - 1
            while left < right:
                mid = (left + right + 1) >> 1
                if (i + 1 + i + mid) * mid // 2 <= maxSum:
                    left = mid
                else:
                    right = mid - 1
            ans += left
            maxSum -= (i + 1 + i + left) * left // 2
            if maxSum <= 0:
                break
        return ans
```

#### Java

```java
class Solution {
    public int maxCount(int[] banned, int n, long maxSum) {
        Set<Integer> black = new HashSet<>();
        black.add(0);
        black.add(n + 1);
        for (int x : banned) {
            black.add(x);
        }
        List<Integer> ban = new ArrayList<>(black);
        Collections.sort(ban);
        int ans = 0;
        for (int k = 1; k < ban.size(); ++k) {
            int i = ban.get(k - 1), j = ban.get(k);
            int left = 0, right = j - i - 1;
            while (left < right) {
                int mid = (left + right + 1) >>> 1;
                if ((i + 1 + i + mid) * 1L * mid / 2 <= maxSum) {
                    left = mid;
                } else {
                    right = mid - 1;
                }
            }
            ans += left;
            maxSum -= (i + 1 + i + left) * 1L * left / 2;
            if (maxSum <= 0) {
                break;
            }
        }
        return ans;
    }
}
```

#### C++

```cpp
class Solution {
public:
    int maxCount(vector<int>& banned, int n, long long maxSum) {
        banned.push_back(0);
        banned.push_back(n + 1);
        sort(banned.begin(), banned.end());
        banned.erase(unique(banned.begin(), banned.end()), banned.end());
        int ans = 0;
        for (int k = 1; k < banned.size(); ++k) {
            int i = banned[k - 1], j = banned[k];
            int left = 0, right = j - i - 1;
            while (left < right) {
                int mid = left + ((right - left + 1) / 2);
                if ((i + 1 + i + mid) * 1LL * mid / 2 <= maxSum) {
                    left = mid;
                } else {
                    right = mid - 1;
                }
            }
            ans += left;
            maxSum -= (i + 1 + i + left) * 1LL * left / 2;
            if (maxSum <= 0) {
                break;
            }
        }
        return ans;
    }
};
```
