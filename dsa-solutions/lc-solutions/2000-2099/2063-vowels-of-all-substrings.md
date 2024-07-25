---
id: vowels-of-all-substrings
title:  Vowels of All Substrings
sidebar_label: 2063. Vowels of All Substrings

tags:
- Math
- String
- Dynamic Programming
- Combinatorics

description: "This is a solution to the  Vowels of All Substrings problem on LeetCode."
---

## Problem Description
Given a string word, return the sum of the number of vowels ('a', 'e', 'i', 'o', and 'u') in every substring of word.

A substring is a contiguous (non-empty) sequence of characters within a string.

Note: Due to the large constraints, the answer may not fit in a signed 32-bit integer. Please be careful during the calculations.

 
### Examples
**Example 1:**

```Input:word = "aba"
Output: 6
Explanation: 
All possible substrings are: "a", "ab", "aba", "b", "ba", and "a".
- "b" has 0 vowels in it
- "a", "ab", "ba", and "a" have 1 vowel each
- "aba" has 2 vowels in it
Hence, the total sum of vowels = 0 + 1 + 1 + 1 + 1 + 2 = 6. 
```

**Example 2:**
```
Input: word = "abc"
Output: 3
Explanation: 
All possible substrings are: "a", "ab", "abc", "b", "bc", and "c".
- "a", "ab", and "abc" have 1 vowel each
- "b", "bc", and "c" have 0 vowels each
Hence, the total sum of vowels = 1 + 1 + 1 + 0 + 0 + 0 = 3.
```

### Constraints

- `1 <= word.length <= 10^5`

## Solution for 2063. Vowels of All Substrings
### Approach


1. **Identify Vowels**: 
   - Create a helper function to check if a character is a vowel by verifying if it is one of 'a', 'e', 'i', 'o', 'u' (case insensitive).

2. **Prefix Sum Array**: 
   - Initialize a prefix sum array where `prefix[i]` represents the number of vowels in all substrings ending at index `i`.

3. **Initialization**: 
   - Initialize the prefix sum array and a variable to store the final count of vowels.

4. **Fill Prefix Sum Array**:
   - If the first character is a vowel, set `prefix[0]` to 1 and increment the count of vowels.
   - For each subsequent character:
     - If it is a vowel, update the prefix sum at that index to include all substrings ending at that index plus the previous prefix sum.
     - If it is not a vowel, carry forward the previous prefix sum.

5. **Compute Result**: 
   - Sum up all the values in the prefix sum array to get the total number of vowels in all substrings.

<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {
     function  isVowel(ch) {
        return 'aeiouAEIOU'.indexOf(ch) !== -1;
    }
    
    function countVowels(word) {
        let n = word.length;
        let prefix = new Array(n).fill(0);
        let ans = 0;
        
        if (isVowel(word[0])) {
            prefix[0] = 1;
            ans = 1;
        }
        
        for (let i = 1; i < n; i++) {
            if (isVowel(word[i])) {
                prefix[i] = i + 1 + prefix[i - 1];
            } else {
                prefix[i] = prefix[i - 1];
            }
        }
        
        for (let i = 1; i < n; i++) {
            ans += prefix[i];
        }
        
        return ans;
    }
      const input = "aba"

      const output =countVowels(input)
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

    - Time Complexity: $O(n) $ 
    - Space Complexity: $ O(n)$

   ## Code in Different Languages
   <Tabs>
  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```javascript
class Solution {
    isVowel(ch) {
        return 'aeiouAEIOU'.indexOf(ch) !== -1;
    }
    
    countVowels(word) {
        let n = word.length;
        let prefix = new Array(n).fill(0);
        let ans = 0;
        
        if (this.isVowel(word[0])) {
            prefix[0] = 1;
            ans = 1;
        }
        
        for (let i = 1; i < n; i++) {
            if (this.isVowel(word[i])) {
                prefix[i] = i + 1 + prefix[i - 1];
            } else {
                prefix[i] = prefix[i - 1];
            }
        }
        
        for (let i = 1; i < n; i++) {
            ans += prefix[i];
        }
        
        return ans;
    }
}

    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@hiteshgahanolia"/> 
   ```typescript
   class Solution {
    isVowel(ch: string): boolean {
        return 'aeiouAEIOU'.indexOf(ch) !== -1;
    }
    
    countVowels(word: string): number {
        let n = word.length;
        let prefix: number[] = new Array(n).fill(0);
        let ans = 0;
        
        if (this.isVowel(word[0])) {
            prefix[0] = 1;
            ans = 1;
        }
        
        for (let i = 1; i < n; i++) {
            if (this.isVowel(word[i])) {
                prefix[i] = i + 1 + prefix[i - 1];
            } else {
                prefix[i] = prefix[i - 1];
            }
        }
        
        for (let i = 1; i < n; i++) {
            ans += prefix[i];
        }
        
        return ans;
    }
}

    ```
  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
  class Solution:
    def isVowel(self, ch: str) -> bool:
        return ch in 'aeiouAEIOU'
    
    def countVowels(self, word: str) -> int:
        n = len(word)
        prefix = [0] * n
        ans = 0
        
        if self.isVowel(word[0]):
            prefix[0] = 1
            ans = 1
        
        for i in range(1, n):
            if self.isVowel(word[i]):
                prefix[i] = i + 1 + prefix[i - 1]
            else:
                prefix[i] = prefix[i - 1]
        
        for i in range(1, n):
            ans += prefix[i]
        
        return ans

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
   public class Solution {
    public boolean isVowel(char ch) {
        return "aeiouAEIOU".indexOf(ch) != -1;
    }
    
    public long countVowels(String word) {
        int n = word.length();
        long[] prefix = new long[n];
        long ans = 0;
        
        if (isVowel(word.charAt(0))) {
            prefix[0] = 1;
            ans = 1;
        }
        
        for (int i = 1; i < n; i++) {
            if (isVowel(word.charAt(i))) {
                prefix[i] = i + 1 + prefix[i - 1];
            } else {
                prefix[i] = prefix[i - 1];
            }
        }
        
        for (int i = 1; i < n; i++) {
            ans += prefix[i];
        }
        
        return ans;
    }
}

    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
 class Solution {
public:
    bool isVowel(char ch) {
        return ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U';
    }
    
    long long countVowels(string word) {
        int n = word.size();
        vector<long long> prefix(n, 0);
        long long ans = 0;
        if(isVowel(word[0])) {
            prefix[0] = 1;
            ans=1;
        }
        for(int i = 1; i < n; i++) {
            if(isVowel(word[i])) {
                prefix[i] = i+1 + prefix[i-1];
            } else {
                prefix[i] = prefix[i-1];
            }
        }
        for(int i = 1; i < n; i++) {
            ans+=prefix[i];
        }
        return ans;
    }
};

```
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

## References

- **LeetCode Problem**: [2063. Vowels of All Substrings](https://leetcode.com/problems/vowels-of-all-substrings/description/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/vowels-of-all-substrings/description/)

