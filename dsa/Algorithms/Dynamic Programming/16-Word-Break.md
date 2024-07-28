---
id: word-break-problem
title: Word Break Problem
sidebar_label: Word Break Problem
tags: [python, java, c++, programming, algorithms, dynamic programming, tutorial, in-depth]
description: In this tutorial, we will learn about the Word Break Problem and its implementation in Python, Java, and C++ with detailed explanations and examples.
---

# Word Break Problem

The Word Break Problem is a dynamic programming problem that involves determining if a given string can be segmented into a space-separated sequence of one or more dictionary words. It is commonly used in natural language processing and text analysis.

## Problem Statement

Given a string `s` and a dictionary of words `dict`, determine if `s` can be segmented into a space-separated sequence of one or more dictionary words.

## Example

For the string `s = "leetcode"` and dictionary `dict = ["leet", "code"]`, the output would be `True` because the string can be segmented into "leet code".

## Algorithm

1. Initialize a boolean array `dp` of length `n+1` where `n` is the length of the string `s`. The array `dp[i]` will be `True` if the substring `s[0:i]` can be segmented.
2. Set `dp[0]` to `True` because an empty string can always be segmented.
3. Iterate over the string `s` and update the `dp` array based on whether the substring ending at the current position can be segmented.

## Code for Word Break Problem

### Python Implementation

```python
def word_break(s, word_dict):
    n = len(s)
    dp = [False] * (n + 1)
    dp[0] = True
    for i in range(1, n + 1):
        for j in range(i):
            if dp[j] and s[j:i] in word_dict:
                dp[i] = True
                break
    return dp[n]

s = "leetcode"
word_dict = {"leet", "code"}
print("Can the string be segmented:", word_break(s, word_dict))
```

### Java Implementation

```java
import java.util.*;
public class WordBreak {
    public static boolean wordBreak(String s, Set<String> wordDict) {
        int n = s.length();
        boolean[] dp = new boolean[n + 1];
        dp[0] = true;
        for (int i = 1; i <= n; i++) {
            for (int j = 0; j < i; j++) {
                if (dp[j] && wordDict.contains(s.substring(j, i))) {
                    dp[i] = true;
                    break;
                }
            }
        }
        return dp[n];
    }

    public static void main(String[] args) {
        String s = "leetcode";
        Set<String> wordDict = new HashSet<>(Arrays.asList("leet", "code"));
        System.out.println("Can the string be segmented: " + wordBreak(s, wordDict));
    }
}
```

### Cpp Implementation

```cpp
#include <iostream>
#include <vector>
#include <unordered_set>
#include <string>

using namespace std;

bool wordBreak(const string& s, const unordered_set<string>& wordDict) {
    int n = s.length();
    vector<bool> dp(n + 1, false);
    dp[0] = true;
    for (int i = 1; i <= n; i++) {
        for (int j = 0; j < i; j++) {
            if (dp[j] && wordDict.find(s.substr(j, i - j)) != wordDict.end()) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[n];
}

int main() {
    string s = "leetcode";
    unordered_set<string> wordDict = {"leet", "code"};
    cout << "Can the string be segmented: " << (wordBreak(s, wordDict) ? "True" : "False") << endl;
    return 0;
}
```

## Output

`Can the string be segmented: True`


## Time Complexity

The time complexity of the Word Break Problem is $O(n^2 * k)$ where n is the length of the string and k is the average length of the words in the dictionary. This is due to the nested loops and substring checks.

## Space Complexity

The space complexity is $O(n)$ for storing the boolean array dp.

## Conclusion

The Word Break Problem is a classic dynamic programming problem that demonstrates the power of dynamic programming in solving string segmentation and text analysis problems. This algorithm efficiently determines if a string can be segmented into dictionary words.