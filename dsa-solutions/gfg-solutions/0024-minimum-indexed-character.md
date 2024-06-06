---
id: minimum-indexed-character
title: Minimum Indexed Character
sidebar_label: 0024 Minimum Indexed Character
tags:
- String
- Hashing
- JavaScript
- TypeScript
- Python
- Java
- C++
description: "This document explores different approaches to solving the problem of finding the minimum index of a character in a string that is also present in another string, including solutions in JavaScript, TypeScript, Python, Java, and C++."
---

## Problem

Given a string `str` and another string `patt`, find the minimum index of the character in `str` that is also present in `patt`.

### Examples

**Example 1:**

```
Input:
str = "geeksforgeeks"
patt = "set"

Output:
1

Explanation:
'e' is the character which is present in the given string "geeksforgeeks" and is also present in "set". The minimum index of 'e' is 1.
```

**Example 2:**

```
Input:
str = "adcffaet"
patt = "onkl"

Output:
-1

Explanation:
There are no characters that are common in "patt" and "str".
```

### Your Task
You only need to complete the function `minIndexChar()` that returns the index of the answer in `str` or returns `-1` if no character of `patt` is present in `str`.

**Expected Time Complexity:** $O(N)$ 
**Expected Auxiliary Space:** $O(Number of distinct characters)$

### Constraints

- $1 ≤ |str|,|patt| ≤ 10^5$
- $'a' ≤ str[i], patt[i] ≤ 'z'$

## Solution

### Approach

To solve this problem, we can follow these steps:

1. Iterate through the characters in the `patt` string.
2. For each character in `patt`, find its index in the `str` string using the `find` method.
3. Store the indices in a vector.
4. Iterate through the vector to find the minimum index that is not `-1` (indicating the character is found in `str`).
5. If no valid index is found, return `-1`; otherwise, return the minimum index.

### Implementation

<Tabs>
  <TabItem value="cpp" label="C++">

```cpp
class Solution
{
  public:
    int minIndexChar(string str, string patt)
    {
        int res = INT_MAX;
        vector<int> v1;
        for (int i = 0; i < patt.length(); i++)
        {
            int p = str.find(patt[i]);
            v1.push_back(p);
        }
        int min = INT_MAX;
        for (int i = 0; i < v1.size(); i++)
        {
            if (min > v1[i] && v1[i] != -1)
                min = v1[i];
        }
        if (min == INT_MAX)
            return -1;
        return min;
    }
};
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

```javascript
function minIndexChar(str, patt) {
    let minIndex = Infinity;
    for (let char of patt) {
        let index = str.indexOf(char);
        if (index !== -1 && index < minIndex) {
            minIndex = index;
        }
    }
    return minIndex === Infinity ? -1 : minIndex;
}
```

  </TabItem>
  <TabItem value="typescript" label="TypeScript">

```typescript
function minIndexChar(str: string, patt: string): number {
    let minIndex = Infinity;
    for (let char of patt) {
        let index = str.indexOf(char);
        if (index !== -1 && index < minIndex) {
            minIndex = index;
        }
    }
    return minIndex === Infinity ? -1 : minIndex;
}
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
class Solution:
    def minIndexChar(self, str: str, patt: str) -> int:
        min_index = float('inf')
        for char in patt:
            index = str.find(char)
            if index != -1 and index < min_index:
                min_index = index
        return -1 if min_index == float('inf') else min_index
```

  </TabItem>
  <TabItem value="java" label="Java">

```java
class Solution {
    public int minIndexChar(String str, String patt) {
        int minIndex = Integer.MAX_VALUE;
        for (char ch : patt.toCharArray()) {
            int index = str.indexOf(ch);
            if (index != -1 && index < minIndex) {
                minIndex = index;
            }
        }
        return minIndex == Integer.MAX_VALUE ? -1 : minIndex;
    }
}
```

  </TabItem>
</Tabs>

### Complexity Analysis

- **Time Complexity:** $O(N)$, where N is the length of the string `str`. We iterate through each character in `patt` and use the `find` or `indexOf` method, which runs in $O(N)$ time.
- **Space Complexity:** $O(1)$, as we only use a constant amount of extra space for variables.

---

## References

- **GeeksforGeeks Problem:** [Minimum Indexed Character](https://www.geeksforgeeks.org/minimum-indexed-character/)
- **Authors GeeksforGeeks Profile:** [Vipul lakum](https://www.geeksforgeeks.org/user/lakumvipwjge/)