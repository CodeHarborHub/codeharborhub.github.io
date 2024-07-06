---
id: longest-common-prefix
title: Longest Common Prefix of Strings
sidebar_label: 0028 - Longest Common Prefix of Strings
tags:
  - Easy
  - Strings
  - GeeksforGeeks
  - CPP
  - DSA
description: "This tutorial covers the solution to the Longest Common Prefix problem from the GeeksforGeeks website, featuring implementations in C++."
---
## Problem Description

Given an array of strings, return the longest common prefix among all strings present in the array. If there's no prefix common in all the strings, return "-1".

## Examples

**Example 1:**

```
Input:
n = 4
arr[] = {"geeksforgeeks", "geeks", "geek", "geezer"}

Output:
gee

Explanation:
"gee" is the longest common prefix among the input strings.
```

**Example 2:**

```
Input:
n = 2
arr[] = {"hello", "world"}

Output:
-1

Explanation:
There is no common prefix among the input strings.
```

## Your Task

You don't need to read input or print anything. Your task is to complete the function `longestCommonPrefix()` which takes the array and its size as parameters and returns the longest common prefix among all strings present in the array.

Expected Time Complexity: O(N * minLength), where N is the number of strings and minLength is the length of the shortest string.

Expected Auxiliary Space: O(1)

## Constraints

* `1 ≤ n ≤ 1000`
* `1 ≤ |arr[i]| ≤ 1000`

## Problem Explanation

To find the longest common prefix, we can compare characters of each string one by one until a mismatch is found. This approach ensures that we only consider characters common in all strings.

## Code Implementation

### C++ Solution

```cpp
// Initial template for C++
#include <bits/stdc++.h>
using namespace std;

// User function template for C++
class Solution {
  public:
    string longestCommonPrefix(int n, string arr[]) {
        if (n == 0) return "-1";
        
        string prefix = arr[0];
        
        for (int i = 1; i < n; i++) {
            while (arr[i].find(prefix) != 0) {
                prefix = prefix.substr(0, prefix.size() - 1);
                if (prefix.empty()) return "-1";
            }
        }
        
        return prefix;
    }
};

// Driver code
int main() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        string arr[n];
        for (int i = 0; i < n; ++i)
            cin >> arr[i];

        Solution ob;
        cout << ob.longestCommonPrefix(n, arr) << endl;
    }
    return 0;
}
```

## Example Walkthrough

**Example 1:**

For the input:
```
n = 4
arr[] = {"geeksforgeeks", "geeks", "geek", "geezer"}
```

1. Initialize `prefix` as the first string "geeksforgeeks".
2. Compare `prefix` with each string in the array:
    - "geeksforgeeks" and "geeks": common prefix is "geeks".
    - "geeks" and "geek": common prefix is "geek".
    - "geek" and "geezer": common prefix is "gee".
3. The result is "gee", which is the longest common prefix.

**Example 2:**

For the input:
```
n = 2
arr[] = {"hello", "world"}
```

1. Initialize `prefix` as the first string "hello".
2. Compare `prefix` with the second string "world":
    - No common prefix is found, so return "-1".

## Solution Logic:

1. Initialize `prefix` as the first string.
2. Iterate through the remaining strings and update `prefix` by checking for common prefixes.
3. If `prefix` becomes empty, return "-1".
4. Return the final `prefix` as the result.

## Time Complexity

* The time complexity is \(O(N * minLength)\) where \(N\) is the number of strings and \(minLength\) is the length of the shortest string.

## Space Complexity

* The auxiliary space complexity is \(O(1)\) as we use a constant amount of extra space.

## References

- **GeeksforGeeks Problem:** [Longest Common Prefix in an array](https://www.geeksforgeeks.org/problems/longest-common-prefix-in-an-array5129/1?page=2&difficulty=Easy&sortBy=submissions)
- **Solution Author:** [arunimad6yuq](https://www.geeksforgeeks.org/user/arunimad6yuq/)
