---
id: longest-substring-of-all-vowels-in-order
title: Longest Substring Of All Vowels in Order
sidebar_label: 1839 - Longest Substring Of All Vowels in Order
tags:
- String
- Sliding Window


description: "This is a solution to the  Longest Substring Of All Vowels in Order problem on LeetCode."
---

## Problem Description
A string is considered beautiful if it satisfies the following conditions:

Each of the 5 English vowels ('a', 'e', 'i', 'o', 'u') must appear at least once in it.
The letters must be sorted in alphabetical order (i.e. all 'a's before 'e's, all 'e's before 'i's, etc.).
For example, strings "aeiou" and "aaaaaaeiiiioou" are considered beautiful, but "uaeio", "aeoiu", and "aaaeeeooo" are not beautiful.

Given a string word consisting of English vowels, return the length of the longest beautiful substring of word. If no such substring exists, return 0.

A substring is a contiguous sequence of characters in a string.

### Examples

**Example 1:**

```
Input: word = "aeiaaioaaaaeiiiiouuuooaauuaeiu"
Output: 13
Explanation: The longest beautiful substring in word is "aaaaeiiiiouuu" of length 13.

```

**Example 2:**
```
Input: word = "aeeeiiiioooauuuaeiou"
Output: 5
Explanation: The longest beautiful substring in word is "aeiou" of length 5.
```

### Constraints

- `1 <= s.length <= 10^5`

## Solution for Longest Substring Of All Vowels in Order Problem
### Approach 

1. **Initialization**:
    - Use a map `mp` to assign numeric values to each vowel based on their alphabetical order: `'a'` = 1, `'e'` = 2, `'i'` = 3, `'o'` = 4, `'u'` = 5.
    - Initialize variables `i` to iterate through the string and `len` to store the maximum length of the valid substring found.

2. **Iterate Through the String**:
    - Start iterating from the beginning of the string `word`.
    - Whenever encountering the first character `'a'`, begin checking for the sequence of vowels `'a'`, `'e'`, `'i'`, `'o'`, `'u'`.
    - Use a set `st` to track which vowels have been seen in the current sequence.

3. **Check for Valid Substring**:
    - If the current character is `'a'`, add it to the set `st`.
    - Continue iterating through the string while the next character maintains the order defined by `mp` (i.e., `mp[word[i]] <= mp[word[i + 1]]`) and add each vowel encountered to `st`.
    - If `st` contains all five vowels after processing a valid substring, update `len` with the maximum length found.

4. **Return the Result**:
    - After iterating through the entire string, `len` will hold the length of the longest valid substring found. If no such substring exists where all five vowels are present in order, return 0.


<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {
     function   longestBeautifulSubstring(word) {
        const mp = { 'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5 };
        let i = 0;
        let len = 0;

        while (i < word.length) {
            const start = i;
            const st = new Set();
            if (word[i] === 'a') {
                st.add(word[i]);
                while (i < word.length - 1 && mp[word[i]] <= mp[word[i + 1]]) {
                    i++;
                    st.add(word[i]);
                }
                if (st.size === 5) {
                    len = Math.max(len, i - start + 1);
                }
            }
            i++;
        }
        return len;
    }
      const input = "aeiaaioaaaaeiiiiouuuooaauuaeiu"
      const output = longestBeautifulSubstring(input) ;
      return (
        <div>
          <p>
            <b>Input: </b>
            {JSON.stringify(input)}
          </p>
          <p>
            <b>Output:</b> {output.toString()}
          </p>
        </div>
      );
    }
    ```

    #### Complexity Analysis

    - Time Complexity: $ O(nlogn) $ because of sorting, where n is the size of array
    - Space Complexity: $ O(n) $ 

   ## Code in Different Languages
   <Tabs>
  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```javascript
 class Solution {
    longestBeautifulSubstring(word) {
        const mp = { 'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5 };
        let i = 0;
        let len = 0;

        while (i < word.length) {
            const start = i;
            const st = new Set();
            if (word[i] === 'a') {
                st.add(word[i]);
                while (i < word.length - 1 && mp[word[i]] <= mp[word[i + 1]]) {
                    i++;
                    st.add(word[i]);
                }
                if (st.size === 5) {
                    len = Math.max(len, i - start + 1);
                }
            }
            i++;
        }
        return len;
    }
}

    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@hiteshgahanolia"/> 
   ```typescript
 class Solution {
    longestBeautifulSubstring(word: string): number {
        const mp: { [key: string]: number } = { 'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5 };
        let i = 0;
        let len = 0;

        while (i < word.length) {
            const start = i;
            const st = new Set<string>();
            if (word[i] === 'a') {
                st.add(word[i]);
                while (i < word.length - 1 && mp[word[i]] <= mp[word[i + 1]]) {
                    i++;
                    st.add(word[i]);
                }
                if (st.size === 5) {
                    len = Math.max(len, i - start + 1);
                }
            }
            i++;
        }
        return len;
    }
}

    ```
  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
  class Solution:
    def longestBeautifulSubstring(self, word: str) -> int:
        mp = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5}
        i = 0
        len_ = 0

        while i < len(word):
            start = i
            st = set()
            if word[i] == 'a':
                st.add(word[i])
                while i < len(word) - 1 and mp[word[i]] <= mp[word[i + 1]]:
                    i += 1
                    st.add(word[i])
                if len(st) == 5:
                    len_ = max(len_, i - start + 1)
            i += 1
        return len_

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
  import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

class Solution {
    public int longestBeautifulSubstring(String word) {
        Map<Character, Integer> mp = new HashMap<>();
        mp.put('a', 1);
        mp.put('e', 2);
        mp.put('i', 3);
        mp.put('o', 4);
        mp.put('u', 5);

        int i = 0;
        int len = 0;

        while (i < word.length()) {
            int start = i;
            Set<Character> st = new HashSet<>();
            if (word.charAt(i) == 'a') {
                st.add(word.charAt(i));
                while (i < word.length() - 1 && mp.get(word.charAt(i)) <= mp.get(word.charAt(i + 1))) {
                    i++;
                    st.add(word.charAt(i));
                }
                if (st.size() == 5) {
                    len = Math.max(len, i - start + 1);
                }
            }
            i++;
        }
        return len;
    }
}

    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
  class Solution {
public:
    int longestBeautifulSubstring(string word) {
        map<char, int> mp;
        mp['a'] = 1;
        mp['e'] = 2;
        mp['i'] = 3;
        mp['o'] = 4;
        mp['u'] = 5;

        int i = 0;
        int len = 0;
        while (i < word.size()) {
            int start = i;
            set<int> st;
            if (word[i] == 'a') { 
                st.insert(word[i]);
                while (i < word.size() - 1 && (mp[word[i]] <= mp[word[i + 1]])) {
                    i++;
                    st.insert(word[i]);
                }
                if (st.size() == 5) {
                    len = max(len, i - start + 1);
                }
            }
            i++;
        }
        return len;
    }
};

    ```
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Longest Substring Of All Vowels in Order](https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/description/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/solution)

