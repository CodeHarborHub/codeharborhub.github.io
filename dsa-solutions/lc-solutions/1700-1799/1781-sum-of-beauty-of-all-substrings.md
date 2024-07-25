---
id: sum-of-beauty-of-all-substrings
title:  1781. Sum of Beauty of All Substrings
sidebar_label: 1781. Sum of Beauty of All Substrings
tags:
- Array
- Hash Table
- Counting

description: "This is a solution to the Sum of Beauty of All Substrings problem on LeetCode."
---

## Problem Description
The beauty of a string is the difference in frequencies between the most frequent and least frequent characters.

For example, the beauty of "abaacc" is 3 - 1 = 2.
Given a string s, return the sum of beauty of all of its substrings.

### Examples

**Example 1:**
```
Input: s = "aabcb"
Output: 5
Explanation: The substrings with non-zero beauty are ["aab","aabc","aabcb","abcb","bcb"], each with beauty equal to 1.
```

**Example 2:**

```
Input: s = "aabcbaa"
Output: 17
```


### Constraints
- `1 <= s.length <= 500`
- `s consists of only lowercase English letters.`
## Solution for 1781. Sum of Beauty of All Substrings Problem
### Approach 
The goal of the `beautySum` problem is to find the sum of beauty values for all possible substrings of a given string `s`. The beauty value of a substring is defined as the difference between the maximum frequency and the minimum frequency of characters within that substring.

#### Steps to Solve the Problem

1. **Initialization**:
    - Initialize a variable `ans` to store the sum of beauty values.
  
2. **Iterate through the string**:
    - Use a nested loop where the outer loop (`i`) iterates through each character in the string and the inner loop (`j`) iterates from the current character to the end of the string, effectively generating all substrings starting from each character.

3. **Track character frequencies**:
    - Use a dictionary (or hashmap) to keep track of the frequency of each character in the current substring.
    - Update the dictionary as you extend the substring in the inner loop.

4. **Calculate the beauty value**:
    - For each substring, calculate its beauty value by finding the maximum and minimum frequencies of characters in the substring.
    - Update the sum of beauty values (`ans`) with the beauty value of the current substring.

5. **Return the result**:
    - After processing all substrings, return the total sum of beauty values.
<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {
         function beauty(mp) {
        let mini = Infinity;
        let maxi = -Infinity;

        for (let key in mp) {
            maxi = Math.max(maxi, mp[key]);
            mini = Math.min(mini, mp[key]);
        }

        return maxi - mini;
    }

    function beautySum(s) {
        let ans = 0;
        for (let i = 0; i < s.length; i++) {
            let mp = {};

            for (let j = i; j < s.length; j++) {
                mp[s[j]] = (mp[s[j]] || 0) + 1;
                ans += beauty(mp);
            }
        }

        return ans;
    }
      const input = "aabcb"
      const output = beautySum(input)
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

    - Time Complexity: $ O(N^2) $ 
    - Space Complexity: $ O(N)$

   ## Code in Different Languages
   <Tabs>
  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```javascript
     function beauty(mp) {
        let mini = Infinity;
        let maxi = -Infinity;

        for (let key in mp) {
            maxi = Math.max(maxi, mp[key]);
            mini = Math.min(mini, mp[key]);
        }

        return maxi - mini;
    }

    function beautySum(s) {
        let ans = 0;
        for (let i = 0; i < s.length; i++) {
            let mp = {};

            for (let j = i; j < s.length; j++) {
                mp[s[j]] = (mp[s[j]] || 0) + 1;
                ans += this.beauty(mp);
            }
        }

        return ans;
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@hiteshgahanolia"/> 
   ```typescript
   class Solution {
    beauty(mp: { [key: string]: number }): number {
        let mini = Infinity;
        let maxi = -Infinity;

        for (let key in mp) {
            maxi = Math.max(maxi, mp[key]);
            mini = Math.min(mini, mp[key]);
        }

        return maxi - mini;
    }

    beautySum(s: string): number {
        let ans = 0;
        for (let i = 0; i < s.length; i++) {
            let mp: { [key: string]: number } = {};

            for (let j = i; j < s.length; j++) {
                mp[s[j]] = (mp[s[j]] || 0) + 1;
                ans += this.beauty(mp);
            }
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
    def beauty(self, mp):
        mini = float('inf')
        maxi = float('-inf')

        for value in mp.values():
            maxi = max(maxi, value)
            mini = min(mini, value)

        return maxi - mini

    def beautySum(self, s: str) -> int:
        ans = 0
        for i in range(len(s)):
            mp = {}

            for j in range(i, len(s)):
                mp[s[j]] = mp.get(s[j], 0) + 1
                ans += self.beauty(mp)

        return ans

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
   import java.util.HashMap;

class Solution {
    private int beauty(HashMap<Character, Integer> mp) {
        int mini = Integer.MAX_VALUE;
        int maxi = Integer.MIN_VALUE;

        for (int value : mp.values()) {
            maxi = Math.max(maxi, value);
            mini = Math.min(mini, value);
        }

        return maxi - mini;
    }

    public int beautySum(String s) {
        int ans = 0;
        for (int i = 0; i < s.length(); i++) {
            HashMap<Character, Integer> mp = new HashMap<>();

            for (int j = i; j < s.length(); j++) {
                mp.put(s.charAt(j), mp.getOrDefault(s.charAt(j), 0) + 1);
                ans += beauty(mp);
            }
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
 int beauty(unordered_map<char,int>&mp)
 {
     int mini=INT_MAX;
     int maxi=INT_MIN;

     for(auto i:mp)
     {
         maxi=max(maxi,i.second);
         mini=min(mini,i.second);
     }

     return maxi-mini;

 }
public:
    int beautySum(string s) {
        int ans=0;
        for(int i=0;i<s.size();i++)
        {
            unordered_map<char,int>mp;

            for(int j=i;j<s.size();j++)
            {
                mp[s[j]]++;
                ans+=beauty(mp);
            }
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

- **LeetCode Problem**: [ Sum of Beauty of All Substrings](https://leetcode.com/problems/sum-of-beauty-of-all-substrings/description/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/sum-of-beauty-of-all-substrings/description/)

