---
id: lexicographically-minimum-string-after-removing-stars
title:   Lexicographically Minimum String After Removing Stars
sidebar_label: 3170 . Lexicographically Minimum String After Removing Stars
tags:
- Hash Table
- String
- Stack
- Greedy
- Heap (Priority Queue)
description: "This is a solution to the Lexicographically Minimum String After Removing Stars problem on LeetCode."
---

## Problem Description
You are given a string s. It may contain any number of '*' characters. Your task is to remove all '*' characters.

While there is a '*', do the following operation:

Delete the leftmost '*' and the smallest non-'*' character to its left. If there are several smallest characters, you can delete any of them.
Return the lexicographically smallest resulting string after removing all '*' characters.

### Examples

**Example 1:**

```
Input: s = "aaba*"

Output: "aab"

Explanation:

We should delete one of the 'a' characters with '*'. If we choose s[3], s becomes the lexicographically smallest.
```

**Example 2:**
```
Input: s = "abc"

Output: "abc"

Explanation:

There is no '*' in the string.
```

### Constraints

- `1 <= s.length <= 10^5`
- `s consists only of lowercase English letters and '*'.`
- `The input is generated such that it is possible to delete all '*' characters.`

## Solution for Lexicographically Minimum String After Removing Stars Problem
### Approach 

#### Initialization:

- We initialize two sets:
- st: A set to store pairs of (character value, negative index). This helps us quickly identify and remove the leftmost character when we encounter a star.
- del: A set to keep track of the indices of characters that need to be deleted (either because they are stars or they were removed by stars).
#### Traversing the String:
- We iterate over the string from left to right.
#### For each character:
- If the character is a star (*):
- We identify the leftmost character in the set st by taking the smallest element (due to the ordering by character value and then by index).
- We remove this leftmost character from the set st.
- We record the indices of this leftmost character and the star itself in the del set.
- If the character is not a star:
- We add a pair of (character value, negative index) to the set st.
#### Building the Result:

- We initialize an empty string ans to store the result.
- We iterate over the original string again.
- For each character:
- If the index of the character is not in the del set (i.e., it hasn't been marked for deletion), we append it to ans.

<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {
  var clearStars = function(s) {
    const mp = new Map();
        const n = s.length;
        const v = new Array(n).fill(0);

        for (let i = 0; i < n; i++) {
            if (s[i] !== '*') {
                if (!mp.has(s[i])) {
                    mp.set(s[i], []);
                }
                mp.get(s[i]).push(i);
            } else {
                v[i] = 1;
                const sortedEntries = Array.from(mp.entries()).sort((a, b) => a[0].localeCompare(b[0]));
                for (let [key, indices] of sortedEntries) {
                    const m = indices.length;
                    v[indices[m - 1]] = 1;
                    indices.pop();
                    if (indices.length === 0) {
                        mp.delete(key);
                    }
                    break;
                }
            }
        }

        let ans = "";
        for (let i = 0; i < n; i++) {
            if (v[i] !== 1) {
                ans += s[i];
            }
        }
        return ans;
};
      const input = "aaba*"
      const output =clearStars(input)
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

    - Time Complexity: $ O(nlogn) $ because of Nested Loops
    - Space Complexity: $ O(n) $  because of prefix array

   ## Code in Different Languages
   <Tabs>
  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```javascript
var clearStars = function(s) {
    const mp = new Map();
        const n = s.length;
        const v = new Array(n).fill(0);

        for (let i = 0; i < n; i++) {
            if (s[i] !== '*') {
                if (!mp.has(s[i])) {
                    mp.set(s[i], []);
                }
                mp.get(s[i]).push(i);
            } else {
                v[i] = 1;
                const sortedEntries = Array.from(mp.entries()).sort((a, b) => a[0].localeCompare(b[0]));
                for (let [key, indices] of sortedEntries) {
                    const m = indices.length;
                    v[indices[m - 1]] = 1;
                    indices.pop();
                    if (indices.length === 0) {
                        mp.delete(key);
                    }
                    break;
                }
            }
        }

        let ans = "";
        for (let i = 0; i < n; i++) {
            if (v[i] !== 1) {
                ans += s[i];
            }
        }
        return ans;
};
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@hiteshgahanolia"/> 
   ```typescript
   function clearStars(s: string): string {
    const n = s.length;
    const st: Set<[number, number]> = new Set();
    const del: Set<number> = new Set();
    for (let i = 0; i < n; i++) {
        if (s[i] === '*') {
            const first = Array.from(st)[0];
            st.delete(first);
            del.add(-first[1]);
            del.add(i);
        } else {
            st.add([s.charCodeAt(i) - 'a'.charCodeAt(0), -i]);
        }
    }

    let ans = '';
    for (let i = 0; i < n; i++) {
        if (!del.has(i)) ans += s[i];
    }
    return ans;
}

    ```
  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
   def clearStars(s: str) -> str:
    n = len(s)
    st = set()
    del_set = set()
    
    for i in range(n):
        if s[i] == '*':
            first = min(st)
            st.remove(first)
            del_set.add(-first[1])
            del_set.add(i)
        else:
            st.add((ord(s[i]) - ord('a'), -i))
    
    ans = ''.join(s[i] for i in range(n) if i not in del_set)
    return ans

   ```
  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
   import java.util.*;

public class Solution {
    public String clearStars(String s) {
        int n = s.length();
        TreeSet<Pair> st = new TreeSet<>((a, b) -> a.first == b.first ? a.second - b.second : a.first - b.first);
        Set<Integer> del = new HashSet<>();
        
        for (int i = 0; i < n; i++) {
            if (s.charAt(i) == '*') {
                Pair first = st.first();
                st.remove(first);
                del.add(-first.second);
                del.add(i);
            } else {
                st.add(new Pair(s.charAt(i) - 'a', -i));
            }
        }
        
        StringBuilder ans = new StringBuilder();
        for (int i = 0; i < n; i++) {
            if (!del.contains(i)) ans.append(s.charAt(i));
        }
        return ans.toString();
    }

    class Pair {
        int first, second;

        Pair(int first, int second) {
            this.first = first;
            this.second = second;
        }
    }
}

    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
   class Solution {
public:
    string clearStars(string s) {
        int n = s.size();
        set<pair<int,int>>st;
        set<int> del;  
        for (int i = 0; i < n; i++) {
            if (s[i] == '*') {
                auto first = *st.begin();
                st.erase(st.begin());
                del.insert(-first.second);
                del.insert(i);
            } else {
              st.insert({s[i]-'a' , -i});
            }
        }
        
        string ans = "";
        for (int i = 0; i < n; i++) if (!del.count(i)) ans += s[i];
        return ans;
    }
};
    ```
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

## References

- **LeetCode Problem**: [ Lexicographically Minimum String After Removing Stars](https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/description/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/solutions)

