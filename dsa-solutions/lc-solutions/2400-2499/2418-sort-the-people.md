---
id: sort-the-people
title: Sort the People
sidebar_label: 2418-Sort the People
tags:
  - Array
  - Sorting
  - String
  
description: "This is a solution to the sort the people in leetcode"
---

## Problem Description

You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

For each index i, names[i] and heights[i] denote the name and height of the ith person.

Return names sorted in descending order by the people's heights.
 
 

### Examples

**Example 1:**

```
Input: names = ["Mary","John","Emma"], heights = [180,165,170]
Output: ["Mary","Emma","John"]
Explanation: Mary is the tallest, followed by Emma and John.
```
**Example 2:**
```
Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
Output: ["Bob","Alice","Bob"]
Explanation: The first Bob is the tallest, followed by Alice and the second Bob.
 
 ```
## Complexity Analysis

*** Time Complexity:** $O(n)$

*** Space Complexity:** $O(n)$

### Constraints

- `n == names.length == heights.length`
- `1 <= n <= 103`
- `1 <= names[i].length <= 20`
- `1 <= heights[i] <= 105`


### Solution
## Approach
To solve the problem of sorting people by height in descending order while maintaining the association between names and heights, we can take the following approach:

1. Pairing Heights with Names: First, create a list of pairs, where each pair consists of a height and the corresponding name's index. This pairing allows us to keep track of the original positions of the names.

2. Sorting the Pairs: Sort the list of pairs in descending order based on heights. Since each pair contains the height and the index, sorting by the first element (height) ensures that the names will be ordered by height.

3. Extracting the Sorted Names: After sorting the pairs, iterate through the sorted list to collect the names in the new order. Use the index from each pair to access the correct name from the original list.

This method ensures that the names are sorted according to the heights in descending order, while keeping the names and heights correctly associated. The approach is efficient and straightforward, leveraging the ability to sort lists of pairs and then map back to the original names.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    std::vector<std::string> sortPeople(std::vector<std::string>& names, std::vector<int>& heights) {
        std::vector<std::pair<int, int>> combined;
        for (int i = 0; i < names.size(); ++i) {
            combined.push_back({heights[i], i});
        }
        std::sort(combined.begin(), combined.end(), std::greater<>());

        std::vector<std::string> sortedNames;
        for (const auto& pair : combined) {
            sortedNames.push_back(names[pair.second]);
        }
        return sortedNames;
    }
};


```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public List<String> sortPeople(String[] names, int[] heights) {
        List<int[]> combined = new ArrayList<>();
        for (int i = 0; i < names.length; i++) {
            combined.add(new int[]{heights[i], i});
        }
        combined.sort((a, b) -> Integer.compare(b[0], a[0]));

        List<String> sortedNames = new ArrayList<>();
        for (int[] pair : combined) {
            sortedNames.add(names[pair[1]]);
        }
        return sortedNames;
    }
}
```
</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def sortPeople(self, names: List[str], heights: List[int]) -> List[str]:
        res=[]
        for i in range(len(names)):
            res.append( [heights[i],names[i]] )
        res.sort(reverse=True)
        res1=[]
        for i in range(len(names)):
            res1.append(res[i][1])
        return res1

```
</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Sort the People](https://leetcode.com/problems/sort-the-people/description/)

- **Solution Link**: [Sort the People](https://leetcode.com/problems/sort-the-people/post-solution/?submissionId=1220299194)
