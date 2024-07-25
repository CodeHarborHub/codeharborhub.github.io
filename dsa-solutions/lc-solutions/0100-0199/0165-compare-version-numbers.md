---

id: compare-version-numbers
title: Compare Version Numbers
sidebar_label: 165-compare-version-numbers
tags:
- Two Pointers
- String
- Java
- Cpp
- Python

description: "Given two version strings, compare them. Return -1, 1, or 0 based on the comparison."
---

## Problem Description

Given two version strings, `version1` and `version2`, compare them. A version string consists of revisions separated by dots `'.'`. The value of the revision is its integer conversion ignoring leading zeros.

To compare version strings, compare their revision values in left-to-right order. If one of the version strings has fewer revisions, treat the missing revision values as 0.

Return the following:
- If `version1 < version2`, return `-1`.
- If `version1 > version2`, return `1`.
- Otherwise, return `0`.

#### Examples

**Example 1:**
```
Input: version1 = "1.2", version2 = "1.10"  
Output: -1  
Explanation:
version1's second revision is "2" and version2's second revision is "10": 2 < 10, so version1 < version2.
```
**Example 2:**
```
Input: version1 = "1.01", version2 = "1.001"  
Output: 0  
Explanation:  
Ignoring leading zeroes, both "01" and "001" represent the same integer "1".
```
**Example 3:**
```
Input: version1 = "1.0", version2 = "1.0.0.0"  
Output: 0  
Explanation:  
version1 has fewer revisions, which means every missing revision is treated as "0".
```
### Constraints

- `1 <= version1.length, version2.length <= 500`
- `version1` and `version2` only contain digits and '.'.
- `version1` and `version2` are valid version numbers.
- All the given revisions in `version1` and `version2` can be stored in a 32-bit integer.


## Approach

To compare the version numbers, we need to split both version strings into their respective revisions and convert these revisions to integers. We then compare the corresponding revisions from left to right. If one version string has fewer revisions, we treat the missing revisions as `0`.

### Steps:

1. **Split the Version Strings:** Use `split('.')` to break down the version strings into lists of revisions.
2. **Convert Revisions to Integers:** Convert each revision string to an integer to ignore leading zeros.
3. **Equalize the Lengths:** Append zeros to the shorter list of revisions to make both lists equal in length.
4. **Compare Revisions:** Iterate through the lists and compare the revisions. Return `1` if the first version is greater, `-1` if the second version is greater, and `0` if they are equal.

### Solution

#### Java Solution

```java
class Solution {
    public int compareVersion(String version1, String version2) {
        String[] l1 = version1.split("\\.");
        String[] l2 = version2.split("\\.");
        int n = Math.max(l1.length, l2.length);

        for (int i = 0; i < n; i++) {
            int v1 = i < l1.length ? Integer.parseInt(l1[i]) : 0;
            int v2 = i < l2.length ? Integer.parseInt(l2[i]) : 0;
            if (v1 > v2) return 1;
            if (v1 < v2) return -1;
        }
        return 0;
    }
}
```

#### C++ Solution

```cpp
class Solution {
public:
    int compareVersion(string version1, string version2) {
        vector<int> l1, l2;
        stringstream ss1(version1), ss2(version2);
        string token;

        while (getline(ss1, token, '.')) {
            l1.push_back(stoi(token));
        }

        while (getline(ss2, token, '.')) {
            l2.push_back(stoi(token));
        }

        int n = max(l1.size(), l2.size());

        for (int i = 0; i < n; i++) {
            int v1 = i < l1.size() ? l1[i] : 0;
            int v2 = i < l2.size() ? l2[i] : 0;
            if (v1 > v2) return 1;
            if (v1 < v2) return -1;
        }
        return 0;
    }
};
```

#### Python Solution

```python
class Solution:
    def compareVersion(self, version1: str, version2: str) -> int:
        l = version1.split(".")
        l1 = []
        l2 = []
        for i in l:
            l1.append(int(i))
        l = version2.split(".")
        for i in l:
            l2.append(int(i))
        if len(l1) > len(l2):
            x = len(l1)-len(l2)
            for i in range(1,x+1):
                l2.append(0)
        if len(l2) > len(l1):
            x = len(l2)-len(l1)
            for i in range(1,x+1):
                l1.append(0)
        ans = 0
        for i in range(0,len(l1)):
            if l1[i]>l2[i]:
                ans = 1
                break
            elif l1[i]<l2[i]:
                ans = -1
                break
        return ans

```

### Complexity Analysis

**Time Complexity:** O(n)
> Splitting the strings and comparing the versions both take linear time relative to the length of the version strings.

**Space Complexity:** O(n)
> Storing the split version numbers takes linear space.

### References
**LeetCode Problem:** Compare Version Numbers
