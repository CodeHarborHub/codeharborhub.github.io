---
id: Verifying-an-Alien-Dictionary
title: Verifying an Alien Dictionary
sidebar_label: 0953 - Verifying an Alien Dictionary
tags:
  - medium
  - Strings
  - Hash Table
---

## Problem Description

In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.

## Examples

**Example 1:**

```
Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
```

**Example 2:**

```
Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
```

**Example 3:**

```
Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
```

## Constraints

```
1 <= words.length <= 100
1 <= words[i].length <= 20
order.length == 26
All characters in words[i] and order are English lowercase letters.
```

## Solution

### Python

```python
class Solution:
    def isAlienSorted(self, words: List[str], order: str) -> bool:
        order_index = {char: index for index, char in enumerate(order)}

        for i in range(len(words) - 1):
            for j in range(len(words[i])):
                if j >= len(words[i + 1]):
                    return False
                if words[i][j] != words[i + 1][j]:
                    if order_index[words[i][j]] > order_index[words[i + 1][j]]:
                        return False
                    break
        return True

# Example usage:
solution = Solution()
print(solution.isAlienSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz"))  # Output: true
```

### C++

```cpp
#include <vector>
#include <string>
#include <unordered_map>
using namespace std;

class Solution {
public:
    bool isAlienSorted(vector<string>& words, string order) {
        unordered_map<char, int> order_index;
        for (int i = 0; i < order.size(); ++i) {
            order_index[order[i]] = i;
        }

        for (int i = 0; i < words.size() - 1; ++i) {
            if (!compare(words[i], words[i + 1], order_index)) {
                return false;
            }
        }
        return true;
    }

private:
    bool compare(const string& word1, const string& word2, unordered_map<char, int>& order_index) {
        int len = min(word1.size(), word2.size());
        for (int i = 0; i < len; ++i) {
            if (word1[i] != word2[i]) {
                return order_index[word1[i]] < order_index[word2[i]];
            }
        }
        return word1.size() <= word2.size();
    }
};

// Example usage:
int main() {
    Solution solution;
    vector<string> words = {"hello","leetcode"};
    string order = "hlabcdefgijkmnopqrstuvwxyz";
    bool result = solution.isAlienSorted(words, order);  // Output: true
    cout << result << endl;
    return 0;
}
```

### Java

```java
import java.util.HashMap;
import java.util.Map;

class Solution {
    public boolean isAlienSorted(String[] words, String order) {
        Map<Character, Integer> orderIndex = new HashMap<>();
        for (int i = 0; i < order.length(); ++i) {
            orderIndex.put(order.charAt(i), i);
        }

        for (int i = 0; i < words.length - 1; ++i) {
            if (!compare(words[i], words[i + 1], orderIndex)) {
                return false;
            }
        }
        return true;
    }

    private boolean compare(String word1, String word2, Map<Character, Integer> orderIndex) {
        int len = Math.min(word1.length(), word2.length());
        for (int i = 0; i < len; ++i) {
            if (word1.charAt(i) != word2.charAt(i)) {
                return orderIndex.get(word1.charAt(i)) < orderIndex.get(word2.charAt(i));
            }
        }
        return word1.length() <= word2.length;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        String[] words = {"hello","leetcode"};
        String order = "hlabcdefgijkmnopqrstuvwxyz";
        boolean result = solution.isAlienSorted(words, order);  // Output: true
        System.out.println(result);
    }
}
```

### JavaScript

```javascript
var isAlienSorted = function (words, order) {
  const orderIndex = new Map();
  for (let i = 0; i < order.length; ++i) {
    orderIndex.set(order[i], i);
  }

  for (let i = 0; i < words.length - 1; ++i) {
    if (!compare(words[i], words[i + 1], orderIndex)) {
      return false;
    }
  }
  return true;

  function compare(word1, word2, orderIndex) {
    const len = Math.min(word1.length, word2.length);
    for (let i = 0; i < len; ++i) {
      if (word1[i] !== word2[i]) {
        return orderIndex.get(word1[i]) < orderIndex.get(word2[i]);
      }
    }
    return word1.length <= word2.length;
  }
};

// Example usage:
console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz")); // Output: true
```
