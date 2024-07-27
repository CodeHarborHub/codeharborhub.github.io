---
id:  Rearrange-Characters-to-Make-Target-String
title:  Rearrange Characters to Make Target String
sidebar_label: 2287-Rearrange Characters to Make Target String
tags:
  - String
  - C++
  - Java
  - Python
description: "This document provides solutions to this problem implemented in C++, Java, and Python."
---

## Problem

You are given two 0-indexed strings s and target. You can take some letters from s and rearrange them to form new strings.

Return the maximum number of copies of target that can be formed by taking letters from s and rearranging them.

### Examples

**Example 1:**

Input: s = "ilovecodingonleetcode", target = "code"
Output: 2
Explanation:
For the first copy of "code", take the letters at indices 4, 5, 6, and 7.
For the second copy of "code", take the letters at indices 17, 18, 19, and 20.
The strings that are formed are "ecod" and "code" which can both be rearranged into "code".
We can make at most two copies of "code", so we return 2.

**Example 2:**

Input: s = "abcba", target = "abc"
Output: 1
Explanation:
We can make one copy of "abc" by taking the letters at indices 0, 1, and 2.
We can make at most one copy of "abc", so we return 1.
Note that while there is an extra 'a' and 'b' at indices 3 and 4, we cannot reuse the letter 'c' at index 2, so we cannot make a second copy of "abc".
**Example 3"**

Input: s = "abbaccaddaeea", target = "aaaaa"
Output: 1
Explanation:
We can make one copy of "aaaaa" by taking the letters at indices 0, 3, 6, 9, and 12.
We can make at most one copy of "aaaaa", so we return 1.


### Constraints

- `1 <= s.length <= 100`
- `1 <= target.length <= 10`
- `s and target consist of lowercase English letters.`
### Approach

Count Frequencies:

- Count the frequency of each character in both the string s and the target target.
Determine Maximum Copies:

- For each character in the target, calculate how many times it can be formed from the string s by dividing the frequency in s by the frequency in the target.
Find Minimum:

- The maximum number of copies of the target string that can be formed is the minimum value of these quotients.

### Solution

#### Code in Different Languages

### C++ Solution

```cpp
#include <iostream>
#include <string>
#include <unordered_map>
#include <algorithm>
#include <climits>
using namespace std;

int maxCopies(string s, string target) {
    unordered_map<char, int> count_s, count_target;
    for (char c : s) {
        count_s[c]++;
    }
    for (char c : target) {
        count_target[c]++;
    }
    
    int max_copies = INT_MAX;
    for (auto& [char_target, count] : count_target) {
        if (count_s.find(char_target) == count_s.end()) {
            return 0;  // If any character in target is not in s, we can't form the target at all
        }
        max_copies = min(max_copies, count_s[char_target] / count);
    }
    
    return max_copies;
}

int main() {
    string s1 = "ilovecodingonleetcode";
    string target1 = "code";
    cout << maxCopies(s1, target1) << endl;  // Output: 2

    string s2 = "abcba";
    string target2 = "abc";
    cout << maxCopies(s2, target2) << endl;  // Output: 1

    string s3 = "abbaccaddaeea";
    string target3 = "aaaaa";
    cout << maxCopies(s3, target3) << endl;  // Output: 1

    return 0;
}



```

### Java Solution

```java
import java.util.HashMap;
import java.util.Map;

public class MaxCopies {
    public static int maxCopies(String s, String target) {
        Map<Character, Integer> countS = new HashMap<>();
        Map<Character, Integer> countTarget = new HashMap<>();
        
        for (char c : s.toCharArray()) {
            countS.put(c, countS.getOrDefault(c, 0) + 1);
        }
        for (char c : target.toCharArray()) {
            countTarget.put(c, countTarget.getOrDefault(c, 0) + 1);
        }
        
        int maxCopies = Integer.MAX_VALUE;
        for (Map.Entry<Character, Integer> entry : countTarget.entrySet()) {
            char charTarget = entry.getKey();
            int count = entry.getValue();
            
            if (!countS.containsKey(charTarget)) {
                return 0;  // If any character in target is not in s, we can't form the target at all
            }
            maxCopies = Math.min(maxCopies, countS.get(charTarget) / count);
        }
        
        return maxCopies;
    }

    public static void main(String[] args) {
        String s1 = "ilovecodingonleetcode";
        String target1 = "code";
        System.out.println(maxCopies(s1, target1));  // Output: 2

        String s2 = "abcba";
        String target2 = "abc";
        System.out.println(maxCopies(s2, target2));  // Output: 1

        String s3 = "abbaccaddaeea";
        String target3 = "aaaaa";
        System.out.println(maxCopies(s3, target3));  // Output: 1
    }
}


```

### Python Solution

```python
from collections import Counter

def max_copies(s, target):
    count_s = Counter(s)
    count_target = Counter(target)
    
    # Determine the maximum number of copies of target that can be formed
    max_copies = float('inf')
    for char in count_target:
        if char in count_s:
            max_copies = min(max_copies, count_s[char] // count_target[char])
        else:
            return 0  # If any character in target is not in s, we can't form the target at all
    
    return max_copies

# Example usage:
s1 = "ilovecodingonleetcode"
target1 = "code"
print(max_copies(s1, target1))  # Output: 2

s2 = "abcba"
target2 = "abc"
print(max_copies(s2, target2))  # Output: 1

s3 = "abbaccaddaeea"
target3 = "aaaaa"
print(max_copies(s3, target3))  # Output: 1



```

### Complexity Analysis

### Time Complexity: $O(n+m)$

> **Reason**:where  m is the length of string target and n is the length of string s


### Space Complexity: $O(1)$

> **Reason**: The space used for the frequency counters is constant, as we only count the frequency of lowercase English letters

