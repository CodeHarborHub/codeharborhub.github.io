---
id: longest-substring-with-at
title: Longest Substring Given At
sidebar_label: 0159-Longest Substring Given At
tags:
  - Leet code
description: "Solution to leetocde 159"
---

### Problem Description

Given a string s , find the length of the longest substring t that contains at most 2 distinct characters.

### Examples

**Example 1:**

```
Input: "eceba"
Output: 3
Explanation: t is "ece" which its length is 3.
```

**Example 2:**

```
Input: "ccaabbb"
Output: 5
Explanation: t is "aabbb" which its length is 5.
```

Certainly! Below is the complete algorithm with explanations, followed by the implementations in C++, Python, Java, and JavaScript.

### Algorithm

1. **Initialize**:

   - A hash map to count characters in the current window.
   - Two pointers, `i` and `j`, to represent the current window. `i` is the right pointer, and `j` is the left pointer.
   - A variable to keep track of the maximum length of the substring.

2. **Expand the Window**:

   - Move the right pointer `i` to expand the window.
   - Add the current character to the hash map and update its count.

3. **Shrink the Window if Necessary**:

   - If the number of distinct characters in the hash map exceeds 2, move the left pointer `j` to shrink the window until the number of distinct characters is at most 2.
   - Decrease the count of the character at the left pointer `j` in the hash map and remove it if its count becomes 0.

4. **Update the Maximum Length**:

   - Update the maximum length of the substring after adjusting the window.

5. **Return the Result**:
   - Return the maximum length of the substring with at most two distinct characters.

### C++

```cpp
#include <unordered_map>
#include <string>
#include <algorithm>

using namespace std;

class Solution {
public:
    int lengthOfLongestSubstringTwoDistinct(string s) {
        unordered_map<char, int> cnt;
        int n = s.size();
        int ans = 0;
        int j = 0;

        for (int i = 0; i < n; ++i) {
            cnt[s[i]]++;
            while (cnt.size() > 2) {
                cnt[s[j]]--;
                if (cnt[s[j]] == 0) {
                    cnt.erase(s[j]);
                }
                ++j;
            }
            ans = max(ans, i - j + 1);
        }

        return ans;
    }
};
```

### Python

```python
class Solution:
    def lengthOfLongestSubstringTwoDistinct(self, s: str) -> int:
        from collections import defaultdict

        cnt = defaultdict(int)
        n = len(s)
        ans = 0
        j = 0

        for i in range(n):
            cnt[s[i]] += 1
            while len(cnt) > 2:
                cnt[s[j]] -= 1
                if cnt[s[j]] == 0:
                    del cnt[s[j]]
                j += 1
            ans = max(ans, i - j + 1)

        return ans
```

### Java

```java
import java.util.HashMap;

public class Solution {
    public int lengthOfLongestSubstringTwoDistinct(String s) {
        HashMap<Character, Integer> cnt = new HashMap<>();
        int n = s.length();
        int ans = 0;
        int j = 0;

        for (int i = 0; i < n; ++i) {
            cnt.put(s.charAt(i), cnt.getOrDefault(s.charAt(i), 0) + 1);
            while (cnt.size() > 2) {
                cnt.put(s.charAt(j), cnt.get(s.charAt(j)) - 1);
                if (cnt.get(s.charAt(j)) == 0) {
                    cnt.remove(s.charAt(j));
                }
                ++j;
            }
            ans = Math.max(ans, i - j + 1);
        }

        return ans;
    }
}
```

### JavaScript

```javascript
var lengthOfLongestSubstringTwoDistinct = function (s) {
  let cnt = new Map();
  let n = s.length;
  let ans = 0;
  let j = 0;

  for (let i = 0; i < n; ++i) {
    cnt.set(s[i], (cnt.get(s[i]) || 0) + 1);
    while (cnt.size > 2) {
      cnt.set(s[j], cnt.get(s[j]) - 1);
      if (cnt.get(s[j]) === 0) {
        cnt.delete(s[j]);
      }
      ++j;
    }
    ans = Math.max(ans, i - j + 1);
  }

  return ans;
};
```
