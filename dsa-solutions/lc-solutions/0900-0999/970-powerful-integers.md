---
id: powerful-integers
title: Powerful Integers
sidebar_label: 970-Powerful Integers
tags:
  - Math
  - LeetCode
  - Java
  - Python
  - C++
description: "This is a solution to the Powerful Integers problem on LeetCode."
sidebar_position: 12
---

## Problem Description

Given three integers `x`, `y`, and `bound`, return a list of all the powerful integers that have a value less than or equal to `bound`.

An integer is powerful if it can be represented as `x^i + y^j` for some integers `i >= 0` and `j >= 0`.

You may return the answer in any order. In your answer, each value should occur at most once.

### Examples

**Example 1:**

```
Input: x = 2, y = 3, bound = 10
Output: [2,3,4,5,7,9,10]
Explanation:
2 = 2^0 + 3^0
3 = 2^1 + 3^0
4 = 2^0 + 3^1
5 = 2^1 + 3^1
7 = 2^2 + 3^1
9 = 2^3 + 3^0
10 = 2^0 + 3^2
```

**Example 2:**

```
Input: x = 3, y = 5, bound = 15
Output: [2,4,6,8,10,14]
```

### Constraints

- `1 <= x, y <= 100`
- `0 <= bound <= 10^6`

---

## Solution for Powerful Integers Problem

To solve this problem, we need to find all unique integers that can be represented as `x^i + y^j` and are less than or equal to `bound`. We iterate over possible values of `i` and `j` while ensuring the results stay within the bounds.

### Approach

1. **Iterate Over Powers:**
   - For `x`, calculate powers `x^i` starting from `i = 0` and stopping when `x^i > bound`.
   - For each `x^i`, calculate powers `y^j` starting from `j = 0` and stopping when `y^j > bound`.
   - If `x^i + y^j <= bound`, add it to the result set to ensure uniqueness.

2. **Handling Edge Cases:**
   - If `x == 1`, then `x^i` will always be `1` for all `i`, so the loop should run only once for `i = 0`.
   - Similarly, if `y == 1`, then `y^j` will always be `1`.

### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    vector<int> powerfulIntegers(int x, int y, int bound) {
        set<int> resultSet;
        for (int i = 1; i < bound; i = (x == 1) ? bound : i * x) {
            for (int j = 1; i + j <= bound; j = (y == 1) ? bound : j * y) {
                resultSet.insert(i + j);
            }
        }
        return vector<int>(resultSet.begin(), resultSet.end());
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public List<Integer> powerfulIntegers(int x, int y, int bound) {
        Set<Integer> resultSet = new HashSet<>();
        for (int i = 1; i < bound; i = (x == 1) ? bound + 1 : i * x) {
            for (int j = 1; i + j <= bound; j = (y == 1) ? bound + 1 : j * y) {
                resultSet.add(i + j);
            }
        }
        return new ArrayList<>(resultSet);
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def powerfulIntegers(self, x: int, y: int, bound: int) -> List[int]:
        result_set = set()
        i = 1
        while i < bound:
            j = 1
            while i + j <= bound:
                result_set.add(i + j)
                if y == 1:
                    break
                j *= y
            if x == 1:
                break
            i *= x
        return list(result_set)
```

</TabItem>
</Tabs>

#### Complexity Analysis

- **Time Complexity**: $O(log_x(text{bound})*log_y(text{bound}))$, since we iterate logarithmically based on the bound.
- **Space Complexity**: $O(k)$, where `k` is the number of unique powerful integers found.

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['ImmidiSivani'].map(username => (
 <Author key={username} username={username} />
))}
</div>
