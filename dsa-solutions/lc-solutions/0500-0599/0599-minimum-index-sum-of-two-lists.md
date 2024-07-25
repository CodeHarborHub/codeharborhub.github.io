---
id: minimum-index-sum-of-two-lists
title: Minimum Index Sum of Two Lists
sidebar_label: 0599 - Minimum Index Sum of Two Lists
tags:
  - Hash Table
  - Array
  - Heap (Priority Queue)
description: "This is a solution to the Minimum Index Sum of Two Lists problem on LeetCode."
---

## Problem Description

Given two arrays of strings `list1` and `list2`, find the **common strings with the least index sum**.

A **common string** is a string that appeared in both `list1` and `list2`.

A **common string with the least index sum** is a common string such that if it appeared at `list1[i]` and `list2[j]` then `i + j` should be the minimum value among all the other **common strings**.

Return all the **common strings with the least index sum**. Return the answer in **any order**.

### Examples
**Example 1:**

```
Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
Output: ["Shogun"]
Explanation: The only common string is "Shogun".
```

**Example 2:**

```
Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
Output: ["Shogun"]
Explanation: The common string with the least index sum is "Shogun" with index sum = (0 + 1) = 1.
```

### Constraints

- `1 <= list1.length, list2.length <= 1000`
- `1 <= list1[i].length, list2[i].length <= 30`
- `list1[i]` and `list2[i]` consist of spaces `' '` and English letters.
- All the strings of `list1` are **unique**.
- All the strings of `list2` are **unique**.
- There is at least a common string between `list1` and `list2`.

## Solution for Minimum Index Sum of Two Lists
### Approach #1 Using HashMap

In this approach, we compare every string in list1 and list2 by traversing over the whole list list2 for every string chosen from list1. We make use of a hashmap map, which contains elements of the form $$(sum:list_{sum})$$. Here, sum refers to the sum of indices of matching elements and $$list_{sum}$$ refers to the list of matching strings whose indices' sum equals sumsumsum.

Thus, while doing the comparisons, whenever a match between a string at $i^{th}$ index of list1 and $j^{th}$ index of list2 is found, we make an entry in the map corresponding to the sum $i+j$, if this entry isn't already present. If an entry with this sum already exists, we need to keep a track of all the strings which lead to the same index sum. Thus, we append the current string to the list of strings corresponding to sum $i+j$.

At the end, we traverse over the keys of the map and find out the list of strings corresponding to the key reprsenting the minimum sum.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
#include <iostream>
#include <vector>
#include <unordered_map>
#include <string>
#include <algorithm>

class Solution {
public:
    std::vector<std::string> findRestaurant(std::vector<std::string>& list1, std::vector<std::string>& list2) {
        std::unordered_map<int, std::vector<std::string>> map;
        for (int i = 0; i < list1.size(); ++i) {
            for (int j = 0; j < list2.size(); ++j) {
                if (list1[i] == list2[j]) {
                    int sum = i + j;
                    map[sum].push_back(list1[i]);
                }
            }
        }
        int min_index_sum = INT_MAX;
        for (const auto& pair : map) {
            min_index_sum = std::min(min_index_sum, pair.first);
        }
        return map[min_index_sum];
    }
};

```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
public class Solution {
    public String[] findRestaurant(String[] list1, String[] list2) {
        HashMap < Integer, List < String >> map = new HashMap < > ();
        for (int i = 0; i < list1.length; i++) {
            for (int j = 0; j < list2.length; j++) {
                if (list1[i].equals(list2[j])) {
                    if (!map.containsKey(i + j))
                        map.put(i + j, new ArrayList < String > ());
                    map.get(i + j).add(list1[i]);
                }
            }
        }
        int min_index_sum = Integer.MAX_VALUE;
        for (int key: map.keySet())
            min_index_sum = Math.min(min_index_sum, key);
        String[] res = new String[map.get(min_index_sum).size()];
        return map.get(min_index_sum).toArray(res);
    }
}

```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
from typing import List
from collections import defaultdict

class Solution:
    def findRestaurant(self, list1: List[str], list2: List[str]) -> List[str]:
        index_map = defaultdict(list)
        for i, rest1 in enumerate(list1):
            for j, rest2 in enumerate(list2):
                if rest1 == rest2:
                    index_map[i + j].append(rest1)
        
        min_index_sum = min(index_map.keys())
        return index_map[min_index_sum]
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(l_1 * l_2 * x)$

> **Reason**:  Every item of list1 is compared with all the items of list2. $l_1$ and $l_2$ are the lengths of list1 and list2 respectively. And x refers to average string length.

### Space Complexity: $O(l_1 * l_2 * x)$

> **Reason**: In worst case all items of list1 and list2 are same. In that case, hashmap size grows upto $l_1∗l_2∗x$, where x refers to average string length

### Approach #2 Without Using HashMap
#### Algorithm

Another method could be to traverse the various sum(index sum) values and determine if any such string exists in list1 and list2 such that the sum of its indices in the two lists equals sum.

Now, we know that the value of index sum could range from 0 to m + n - 1. Here, m and n refer to the length of lists list1 and list2 respectively. Thus, we choose every value of sum in ascending order. For every sum chosen, we iterate over list1. Suppose, currently the string at the ith index in list1 is being considered. Now, in order for the index sum to be the one corresponding to matching strings in list1 and list2, the string at index j in list2 should match the string at index i in list1, such that sum = i + j.

Or, stating in other terms, the string at index j in list2 should be equal to the string at index i in list1, such that j = sum - i. Thus, for a particular sum and i (from list1), we can directly determine that we need to check the element at index j = sum - i in list2, instead of traversing the whole list2.

Doing such checks/comparisons, iterate over all the indices of list1 for every sum value chosen. Whenever a match occurs between list1 and list2, we put the matching string in a list res.

We do the same process of checking the strings for all the values of sum in ascending order. After completing every iteration over list1 for a particular sum, we check if the res list is empty or not. If it is empty, we need to continue the process with the next sum value considered. If not, the current res gives the required list with minimum index sum. This is because we are already considering the index sum values in ascending order. So, the first list to be found is the required resultant list.


## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
#include <vector>
#include <string>
#include <algorithm>

class Solution {
public:
    std::vector<std::string> findRestaurant(std::vector<std::string>& list1, std::vector<std::string>& list2) {
        std::vector<std::string> res;
        int m = list1.size();
        int n = list2.size();
        for (int sum = 0; sum < m + n - 1; ++sum) {
            for (int i = 0; i <= sum; ++i) {
                if (i < m && sum - i < n && list1[i] == list2[sum - i]) {
                    res.push_back(list1[i]);
                }
            }
            if (!res.empty()) {
                break;
            }
        }
        return res;
    }
};


```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
public class Solution {
    public String[] findRestaurant(String[] list1, String[] list2) {
        List < String > res = new ArrayList < > ();
        for (int sum = 0; sum < list1.length + list2.length - 1; sum++) {
            for (int i = 0; i <= sum; i++) {
                if (i < list1.length && sum - i < list2.length && list1[i].equals(list2[sum - i]))
                    res.add(list1[i]);
            }
            if (res.size() > 0)
                break;
        }
        return res.toArray(new String[res.size()]);
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
from typing import List

class Solution:
    def findRestaurant(self, list1: List[str], list2: List[str]) -> List[str]:
        res = []
        m, n = len(list1), len(list2)
        for sum in range(m + n - 1):
            for i in range(sum + 1):
                if i < m and sum - i < n and list1[i] == list2[sum - i]:
                    res.append(list1[i])
            if res:
                break
        return res

```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O((l_1 * l_2)^2 * x)$

> **Reason**:   There are two nested loops upto l1+l2 and string comparison takes x time. Here, x refers to the average string length.

### Space Complexity: $O(r * x)$

> **Reason**: res list is used to store the result. Assuming r is the length of resresres.

## References

- **LeetCode Problem**: [Minimum Index Sum of Two Lists](https://leetcode.com/problems/minimum-index-sum-of-two-lists/description/)

- **Solution Link**: [Minimum Index Sum of Two Lists](https://leetcode.com/problems/minimum-index-sum-of-two-lists/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>