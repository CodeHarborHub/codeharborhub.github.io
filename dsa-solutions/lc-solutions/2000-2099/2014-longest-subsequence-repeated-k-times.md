---
id: longest-subsequence-repeated-k-times
title: Longest Subsequence Repeated k Times
sidebar_label:   2014.  Longest Subsequence Repeated k Times

tags:
- String
- Backtracking
- Greedy
- Counting
- Enumeration

description: "This is a solution to the   Longest Subsequence Repeated k Times problem on LeetCode."
---

## Problem Description
You are given a string s of length n, and an integer k. You are tasked to find the longest subsequence repeated k times in string s.

A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.

A subsequence seq is repeated k times in the string s if seq * k is a subsequence of s, where seq * k represents a string constructed by concatenating seq k times.

For example, "bba" is repeated 2 times in the string "bababcba", because the string "bbabba", constructed by concatenating "bba" 2 times, is a subsequence of the string "bababcba".
Return the longest subsequence repeated k times in string s. If multiple such subsequences are found, return the lexicographically largest one. If there is no such subsequence, return an empty string.


### Examples
**Example 1:**
![image](https://assets.leetcode.com/uploads/2021/08/30/longest-subsequence-repeat-k-times.png)

```
Input: s = "letsleetcode", k = 2
Output: "let"
Explanation: There are two longest subsequences repeated 2 times: "let" and "ete".
"let" is the lexicographically largest one.
```

**Example 2:**
```
Input: s = "bb", k = 2
Output: "b"
Explanation: The longest subsequence repeated 2 times is "b".
```

### Constraints
- `n == s.length`
- `2 <= n, k <= 2000`
- `2 <= n < k * 8`
- `s consists of lowercase English letters.`

## Solution forLongest Subsequence Repeated k Times

### Intuition

To solve this problem, the goal is to find the longest subsequence of `s` that can appear at least `k` times in `s`. This requires checking various subsequences and determining their repeatability. The challenge is to efficiently explore the possible subsequences and verify their validity.

### Approach 
The approach involves a Depth-First Search (DFS) combined with a helper function to verify if a subsequence can be repeated `k` times. Here's a step-by-step breakdown:

1. **DFS Traversal**:
   - Use DFS to explore possible subsequences of `s`. Start with an empty subsequence and try to build it by adding characters from 'z' to 'a' (descending order helps in maximizing the subsequence length early).
   - For each character added, check if the new subsequence can be repeated `k` times in `s`.

2. **Check Repeatability**:
   - Implement a helper function `checkK(s, ans, k)` to verify if the current subsequence `ans` can be repeated `k` times within `s`.
   - This function iterates through `s`, matching characters of `ans` and counting how many times the entire subsequence `ans` appears.

3. **Pruning**:
   - If a subsequence `ans` cannot be repeated `k` times, prune that branch and do not explore further with this subsequence.
   - This reduces unnecessary computations and helps in focusing on potential valid subsequences.
<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {
            function checkK(s, ans, k) {
            let j = 0, m = ans.length;
            for (let i = 0; i < s.length; i++) {
                if (s[i] === ans[j]) j++;
                if (j === m) {
                    k--;
                    if (k === 0) return true;
                    j = 0;
                }
            }
            return k <= 0;
        }

        function dfs(s, ans, k) {
            let val = 0;
            let r = "";
            for (let ch = 'z'; ch >= 'a'; ch = String.fromCharCode(ch.charCodeAt(0) - 1)) {
                if (checkK(s, ans + ch, k)) {
                    ans += ch;
                    let tmp = ch + dfs(s, ans, k);
                    if (val < tmp.length) {
                        r = tmp;
                        val = tmp.length;
                    }
                    ans = ans.slice(0, -1);
                }
            }
            return r;
        }

        function longestSubsequenceRepeatedK(s, k) {
            let ans = "";
            return dfs(s, ans, k);
        }

      const input = "letsleetcode"
      const k =2;
      const output =longestSubsequenceRepeatedK(input ,k)
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

    - Time Complexity: $O(n*2^8) $ 
    - Space Complexity: $ O(n)$

   ## Code in Different Languages
   <Tabs>
  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```javascript
       checkK(s, ans, k) {
        let j = 0, m = ans.length;
        for (let i = 0; i < s.length; i++) {
            if (s[i] === ans[j]) j++;
            if (j === m) {
                k--;
                if (k === 0) return true;
                j = 0;
            }
        }
        return k <= 0;
    }

    dfs(s, ans, k) {
        let val = 0;
        let r = "";
        for (let ch = 'z'; ch >= 'a'; ch = String.fromCharCode(ch.charCodeAt(0) - 1)) {
            if (this.checkK(s, ans + ch, k)) {
                ans += ch;
                let tmp = ch + this.dfs(s, ans, k);
                if (val < tmp.length) {
                    r = tmp;
                    val = tmp.length;
                }
                ans = ans.slice(0, -1);
            }
        }
        return r;
    }

    longestSubsequenceRepeatedK(s, k) {
        let ans = "";
        return this.dfs(s, ans, k);
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@hiteshgahanolia"/> 
   ```typescript
   class Solution {
    checkK(s: string, ans: string, k: number): boolean {
        let j = 0, m = ans.length;
        for (let i = 0; i < s.length; i++) {
            if (s[i] === ans[j]) j++;
            if (j === m) {
                k--;
                if (k === 0) return true;
                j = 0;
            }
        }
        return k <= 0;
    }

    dfs(s: string, ans: string, k: number): string {
        let val = 0;
        let r = "";
        for (let ch = 'z'; ch >= 'a'; ch = String.fromCharCode(ch.charCodeAt(0) - 1)) {
            if (this.checkK(s, ans + ch, k)) {
                ans += ch;
                let tmp = ch + this.dfs(s, ans, k);
                if (val < tmp.length) {
                    r = tmp;
                    val = tmp.length;
                }
                ans = ans.slice(0, -1);
            }
        }
        return r;
    }

    longestSubsequenceRepeatedK(s: string, k: number): string {
        let ans = "";
        return this.dfs(s, ans, k);
    }
}

    ```
  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
   class Solution:
    def checkK(self, s: str, ans: str, k: int) -> bool:
        j, m = 0, len(ans)
        for i in range(len(s)):
            if s[i] == ans[j]:
                j += 1
            if j == m:
                k -= 1
                if k == 0:
                    return True
                j = 0
        return k <= 0

    def dfs(self, s: str, ans: str, k: int) -> str:
        val = 0
        r = ""
        for ch in range(ord('z'), ord('a') - 1, -1):
            ch = chr(ch)
            if self.checkK(s, ans + ch, k):
                ans += ch
                tmp = ch + self.dfs(s, ans, k)
                if val < len(tmp):
                    r = tmp
                    val = len(tmp)
                ans = ans[:-1]
        return r

    def longestSubsequenceRepeatedK(self, s: str, k: int) -> str:
        ans = ""
        return self.dfs(s, ans, k)

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
   public class Solution {
    private boolean checkK(String s, String ans, int k) {
        int j = 0, m = ans.length();
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == ans.charAt(j)) j++;
            if (j == m) {
                k--;
                if (k == 0) return true;
                j = 0;
            }
        }
        return k <= 0;
    }

    private String dfs(String s, String ans, int k) {
        int val = 0;
        String r = "";
        for (char ch = 'z'; ch >= 'a'; ch--) {
            if (checkK(s, ans + ch, k)) {
                ans += ch;
                String tmp = ch + dfs(s, ans, k);
                if (val < tmp.length()) {
                    r = tmp;
                    val = tmp.length();
                }
                ans = ans.substring(0, ans.length() - 1);
            }
        }
        return r;
    }

    public String longestSubsequenceRepeatedK(String s, int k) {
        String ans = "";
        return dfs(s, ans, k);
    }
}

    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
   class Solution {
    bool checkK(string& s, string ans, int k) {
        int j = 0, m = ans.size();
        for (int i = 0; i < s.size(); i++) {
            if (s[i] == ans[j])
                j++;
            if (j == m) {
                --k;
                if (k == 0)
                    return true;
                j = 0;
            }
        }
        return k <= 0;
    }
    string dfs(string& s, string& ans, int k) {
        int val = 0;
        string r = "";
        for (char ch = 'z'; ch >= 'a'; ch--) {
            if (checkK(s, ans + ch, k)) {
                ans += ch;
                string tmp = ch + dfs(s, ans, k);
                if (val < tmp.size()) {
                    r = tmp;
                    val = tmp.size();
                }
                ans.pop_back();
            }
        }
        return r;
    }

public:
    string longestSubsequenceRepeatedK(string s, int k) {
        string ans = "";
        return dfs(s, ans, k);
    }
};
```
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Longest Subsequence Repeated k Times](https://leetcode.com/problems/longest-subsequence-repeated-k-times/description/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/longest-subsequence-repeated-k-times/description/)

