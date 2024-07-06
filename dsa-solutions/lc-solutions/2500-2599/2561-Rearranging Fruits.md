---
id: rearranging-fruits
title: Rearranging Fruits
sidebar_label: 2561 Rearranging Fruits
tags:
  - Array
  - String
  - Greedy
  - Hash Table
description: "This is a solution to the Rearranging Fruits problem on LeetCode."
---

## Problem Description
You have two fruit baskets containing n fruits each. You are given two 0-indexed integer arrays basket1 and basket2 representing the cost of fruit in each basket. You want to make both baskets equal. To do so, you can use the following operation as many times as you want:

Chose two indices i and j, and swap the ith fruit of basket1 with the jth fruit of basket2.
The cost of the swap is min(basket1[i],basket2[j]).
Two baskets are considered equal if sorting them according to the fruit cost makes them exactly the same baskets.

Return the minimum cost to make both the baskets equal or -1 if impossible.

### Examples

**Example 1:**

```
Input: basket1 = [4,2,2,2], basket2 = [1,4,1,2]
Output: 1
Explanation: Swap index 1 of basket1 with index 0 of basket2, which has cost 1. Now basket1 = [4,1,2,2] and basket2 = [2,4,1,2]. Rearranging both the arrays makes them equal.
```

**Example 2:**

```
Input: basket1 = [2,3,4,1], basket2 = [3,2,5,1]
Output: -1
Explanation: It can be shown that it is impossible to make both the baskets equal.

```


### Constraints

- `basket1.length == basket2.length`
- `1 <= basket1.length <= 10^5`
- `1 <= basket1[i],basket2[i] <= 10^9`
 

### Approach 
First, we can remove the common elements from both arrays. For the remaining numbers, the occurrence of each number must be even, otherwise, it is impossible to construct identical arrays. Let's denote the arrays after removing common elements as $a$ and $b$.

Next, we consider how to perform the swaps.

If we want to swap the smallest number in $a$, we need to find the largest number in $b$ to swap with it; similarly, if we want to swap the smallest number in $b$, we need to find the largest number in $a$ to swap with it. This can be achieved by sorting.

However, there is another swapping scheme. We can use a smallest number $mi$ as a transition element, first swap the number in $a$ with $mi$, and then swap $mi$ with the number in $b$. In this way, the cost of swapping is $2 \times mi$.

In the code implementation, we can directly merge arrays $a$ and $b$ into an array $nums$, and then sort the array $nums$. Next, we enumerate the first half of the numbers, calculate the minimum cost each time, and add it to the answer.

The time complexity is $O(n \times \log n)$, and the space complexity is $O(n)$. Where $n$ is the length of the array.



#### Python3

```python
class Solution:
    def minCost(self, basket1: List[int], basket2: List[int]) -> int:
        cnt = Counter()
        for a, b in zip(basket1, basket2):
            cnt[a] += 1
            cnt[b] -= 1
        mi = min(cnt)
        nums = []
        for x, v in cnt.items():
            if v % 2:
                return -1
            nums.extend([x] * (abs(v) // 2))
        nums.sort()
        m = len(nums) // 2
        return sum(min(x, mi * 2) for x in nums[:m])
```

#### Java

```java
class Solution {
    public long minCost(int[] basket1, int[] basket2) {
        int n = basket1.length;
        Map<Integer, Integer> cnt = new HashMap<>();
        for (int i = 0; i < n; ++i) {
            cnt.merge(basket1[i], 1, Integer::sum);
            cnt.merge(basket2[i], -1, Integer::sum);
        }
        int mi = 1 << 30;
        List<Integer> nums = new ArrayList<>();
        for (var e : cnt.entrySet()) {
            int x = e.getKey(), v = e.getValue();
            if (v % 2 != 0) {
                return -1;
            }
            for (int i = Math.abs(v) / 2; i > 0; --i) {
                nums.add(x);
            }
            mi = Math.min(mi, x);
        }
        Collections.sort(nums);
        int m = nums.size();
        long ans = 0;
        for (int i = 0; i < m / 2; ++i) {
            ans += Math.min(nums.get(i), mi * 2);
        }
        return ans;
    }
}
```

#### C++

```cpp
class Solution {
public:
    long long minCost(vector<int>& basket1, vector<int>& basket2) {
        int n = basket1.size();
        unordered_map<int, int> cnt;
        for (int i = 0; i < n; ++i) {
            cnt[basket1[i]]++;
            cnt[basket2[i]]--;
        }
        int mi = 1 << 30;
        vector<int> nums;
        for (auto& [x, v] : cnt) {
            if (v % 2) {
                return -1;
            }
            for (int i = abs(v) / 2; i; --i) {
                nums.push_back(x);
            }
            mi = min(mi, x);
        }
        sort(nums.begin(), nums.end());
        int m = nums.size();
        long long ans = 0;
        for (int i = 0; i < m / 2; ++i) {
            ans += min(nums[i], mi * 2);
        }
        return ans;
    }
};
```