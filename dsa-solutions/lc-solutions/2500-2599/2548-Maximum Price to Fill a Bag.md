---
id: maximum-price-to-fill-a-bag
title: Maximum Price to Fill a Bag
sidebar_label: 2548 Maximum Price to Fill a Bag
tags:
  - Array
  - Maths
  - sort
  - LeetCode
  - java
description: "This is a solution to the Maximum Price to Fill a Bag problem on LeetCode."
---

## Problem Description

You are given a 2D integer array items where items[i] = [pricei, weighti] denotes the price and weight of the ith item, respectively.

You are also given a positive integer capacity.

Each item can be divided into two items with ratios part1 and part2, where part1 + part2 == 1.

The weight of the first item is weighti _ part1 and the price of the first item is pricei _ part1.
Similarly, the weight of the second item is weighti _ part2 and the price of the second item is pricei _ part2.
Return the maximum total price to fill a bag of capacity capacity with given items. If it is impossible to fill a bag return -1. Answers within 10-5 of the actual answer will be considered accepted.

### Examples

**Example 1:**

```
Input: items = [[50,1],[10,8]], capacity = 5
Output: 55.00000
Explanation:
We divide the 2nd item into two parts with part1 = 0.5 and part2 = 0.5.

```

**Example 2:**

```
Input: items = [[100,30]], capacity = 50
Output: -1.00000
Explanation: It is impossible to fill a bag with the given item.

```

### Constraints

- `1 <= items.length <= 105`
- `items[i].length == 2`
- `1 <= pricei, weighti <= 104`
- `1 <= capacity <= 109`

### Approach

We sort the items in descending order by unit price, and then take out the items one by one until the backpack is full.

If the backpack is not full in the end, return $-1$, otherwise return the total price.

The time complexity is $O(n \times \log n)$, and the space complexity is $O(\log n)$, where $n$ is the number of items.

#### Python3

```python
class Solution:
    def maxPrice(self, items: List[List[int]], capacity: int) -> float:
        ans = 0
        for p, w in sorted(items, key=lambda x: x[1] / x[0]):
            v = min(w, capacity)
            ans += v / w * p
            capacity -= v
        return -1 if capacity else ans

```

#### Java

```java
class Solution {
    public double maxPrice(int[][] items, int capacity) {
        Arrays.sort(items, (a, b) -> a[1] * b[0] - a[0] * b[1]);
        double ans = 0;
        for (var e : items) {
            int p = e[0], w = e[1];
            int v = Math.min(w, capacity);
            ans += v * 1.0 / w * p;
            capacity -= v;
        }
        return capacity > 0 ? -1 : ans;
    }
}
```

#### C++

```cpp
class Solution {
public:
    double maxPrice(vector<vector<int>>& items, int capacity) {
        sort(items.begin(), items.end(), [&](const auto& a, const auto& b) { return a[1] * b[0] < a[0] * b[1]; });
        double ans = 0;
        for (auto& e : items) {
            int p = e[0], w = e[1];
            int v = min(w, capacity);
            ans += v * 1.0 / w * p;
            capacity -= v;
        }
        return capacity > 0 ? -1 : ans;
    }
};
```
