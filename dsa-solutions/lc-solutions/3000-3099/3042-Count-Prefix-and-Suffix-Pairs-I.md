---
id: count-prefix-and-suffix-pairs
title: Count Prefix and Suffix Pairs (LeetCode)
sidebar_label: 3042-CountPrefixAndSuffixPairs
tags:
  - String
  - Prefix
  - Suffix
  - Pair Counting
description: Count pairs of indices where one string is both a prefix and suffix of another string.
sidebar_position: 3042
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Count Prefix and Suffix Pairs](https://leetcode.com/problems/count-prefix-and-suffix-pairs/) | [Count Prefix and Suffix Pairs Solution on LeetCode](https://leetcode.com/problems/count-prefix-and-suffix-pairs/solutions/) | [vaishu_1904](https://leetcode.com/u/vaishu_1904/) |

## Problem Description

You are given a 0-indexed string array `words`.

Let's define a boolean function `isPrefixAndSuffix` that takes two strings, `str1` and `str2`:

- `isPrefixAndSuffix(str1, str2)` returns `true` if `str1` is both a prefix and a suffix of `str2`, and `false` otherwise.

For example, `isPrefixAndSuffix("aba", "ababa")` is `true` because "aba" is a prefix of "ababa" and also a suffix, but `isPrefixAndSuffix("abc", "abcd")` is `false`.

Return an integer denoting the number of index pairs `(i, j)` such that `i < j`, and `isPrefixAndSuffix(words[i], words[j])` is `true`.

### Example 1

- **Input:** `words = ["a","aba","ababa","aa"]`
- **Output:** `4`
- **Explanation:** In this example, the counted index pairs are:
  - `i = 0` and `j = 1` because `isPrefixAndSuffix("a", "aba")` is `true`.
  - `i = 0` and `j = 2` because `isPrefixAndSuffix("a", "ababa")` is `true`.
  - `i = 0` and `j = 3` because `isPrefixAndSuffix("a", "aa")` is `true`.
  - `i = 1` and `j = 2` because `isPrefixAndSuffix("aba", "ababa")` is `true`.

### Example 2

- **Input:** `words = ["pa","papa","ma","mama"]`
- **Output:** `2`
- **Explanation:** In this example, the counted index pairs are:
  - `i = 0` and `j = 1` because `isPrefixAndSuffix("pa", "papa")` is `true`.
  - `i = 2` and `j = 3` because `isPrefixAndSuffix("ma", "mama")` is `true`.

### Example 3

- **Input:** `words = ["abab","ab"]`
- **Output:** `0`
- **Explanation:** In this example, the only valid index pair is `i = 0` and `j = 1`, and `isPrefixAndSuffix("abab", "ab")` is `false`.

### Constraints

- `1 <= words.length <= 50`
- `1 <= words[i].length <= 10`
- `words[i]` consists only of lowercase English letters.

## Approach

To solve this problem, we need to check for each pair `(i, j)` if `words[i]` is both a prefix and a suffix of `words[j]`. We can do this by iterating over all pairs and checking the conditions for each pair.

### Solution Code

#### Python

```python
class Solution:
    def isPrefixAndSuffix(self, str1, str2):
        return str2.startswith(str1) and str2.endswith(str1)
    
    def countPrefixAndSuffixPairs(self, words):
        count = 0
        for i in range(len(words)):
            for j in range(i + 1, len(words)):
                if self.isPrefixAndSuffix(words[i], words[j]):
                    count += 1
        return count
```

#### C++
```c++
#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    bool isPrefixAndSuffix(const string& str1, const string& str2) {
        return str2.compare(0, str1.size(), str1) == 0 && str2.compare(str2.size() - str1.size(), str1.size(), str1) == 0;
    }
    
    int countPrefixAndSuffixPairs(vector<string>& words) {
        int count = 0;
        for (int i = 0; i < words.size(); i++) {
            for (int j = i + 1; j < words.size(); j++) {
                if (isPrefixAndSuffix(words[i], words[j])) {
                    count++;
                }
            }
        }
        return count;
    }
};

```

#### Java
```java
class Solution {
    private boolean isPrefixAndSuffix(String str1, String str2) {
        return str2.startsWith(str1) && str2.endsWith(str1);
    }
    
    public int countPrefixAndSuffixPairs(String[] words) {
        int count = 0;
        for (int i = 0; i < words.length; i++) {
            for (int j = i + 1; j < words.length; j++) {
                if (isPrefixAndSuffix(words[i], words[j])) {
                    count++;
                }
            }
        }
        return count;
    }
}

```

### Conclusion
The above solutions iterate over all pairs of strings in the input list and check if the first 
string in the pair is both a prefix and a suffix of the second string. The count of such valid pairs 
is returned as the result.