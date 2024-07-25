---
id: string-matching-in-an-array
title: String Matching in an Array
sidebar_label: 1408 - String Matching in an Array
tags:
  - Array
  - String
  - String Matching
description: "This is a solution to the String Matching in an Array problem on LeetCode."
---

## Problem Description

Given an array of string `words`, return all strings in words that is a substring of another word. You can return the answer in any order.

A substring is a contiguous sequence of characters within a string

### Examples

**Example 1:**

```
Input: words = ["mass","as","hero","superhero"]
Output: ["as","hero"]
Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
["hero","as"] is also a valid answer.
```
**Example 2:**
```
Input: words = ["leetcode","et","code"]
Output: ["et","code"]
Explanation: "et", "code" are substring of "leetcode".

```
### Constraints

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 30`


## Solution for String Matching in an Array

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@agarwalhimanshugaya"/>

```cpp
class Solution {
public:
    vector<string> stringMatching(vector<string>& words) {
        vector<string> ans;
        for(auto i:words)
        {
            for(auto j: words)
            {
                if(i==j) continue;
                if(j.find(i)!=-1)
                {
                    ans.push_back(i);
                    break;                    
                }
            }
        }
        return ans;
    }
};
```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@agarwalhimanshugaya"/>
```java
class Solution {
    public List<String> stringMatching(String[] words) {
        String str = String.join(" ", words);
        List<String> res = new ArrayList<>();
        for(int i = 0; i < words.length; i++){
            if(str.indexOf(words[i]) != str.lastIndexOf(words[i])){
                res.add(words[i]);
            }
        }
        return res;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@agarwalhimanshugaya"/>

```python
class Solution:
    def stringMatching(self, words: List[str]) -> List[str]:
        def add(word: str):
            node = trie
            for c in word:
                node = node.setdefault(c, {})

        def get(word: str) -> bool:
            node = trie
            for c in word:
                if (node := node.get(c)) is None: return False
            return True

        words.sort(key=len, reverse=True)
        trie, result = {}, []
        for word in words:
            if get(word): result.append(word)
            for i in range(len(word)):
                add(word[i:])
        return result
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(NlogN + N * S^2)$

### Space Complexity: $O(N * S^2)$

## References

- **LeetCode Problem**: [String Matching in an Array](https://leetcode.com/problems/string-matching-in-an-array/description/)

- **Solution Link**: [String Matching in an Array](https://leetcode.com/problems/string-matching-in-an-array/solutions/)