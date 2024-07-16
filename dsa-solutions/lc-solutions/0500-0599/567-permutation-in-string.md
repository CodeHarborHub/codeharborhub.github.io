---
id: permutation-in-string
title: 567. Permutation in String
sidebar_label:  567. Permutation in String
tags:
- String
- Two Pointer
- Sliding Window
- Hash Table

description: "This is a solution to the 567. Permutation in String problem on LeetCode."
---

## Problem Description
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

 
 ### Examples
**Example 1:**
```
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
```

### Constraints
- `1 <= s1.length, s2.length <= 10^4`
- `s1 and s2 consist of lowercase English letters.`
## Solution for  567. Permutation in String

<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {

   function areVectorsEqual(a, b) {
        for (let i = 0; i < 26; i++) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }
    
   function checkInclusion(s1, s2) {
        if (s2.length < s1.length) return false;
        let freqS1 = Array(26).fill(0);
        for (let c of s1) freqS1[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        
        let freqS2 = Array(26).fill(0);
        let i = 0, j = 0;
        
        while (j < s2.length) {
            freqS2[s2[j].charCodeAt(0) - 'a'.charCodeAt(0)]++;
            
            if (j - i + 1 === s1.length) {
                if (areVectorsEqual(freqS1, freqS2)) return true;
            }
            
            if (j - i + 1 < s1.length) j++;
            else {
                freqS2[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
                i++;
                j++;
            }
        }
        return false;
    }


      const input = s1 = "ab", s2 = "eidbaooo"
      const output = checkInclusion(s1 , s2)
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

    - Time Complexity: $O(nlogn) $ 
    - Space Complexity: $ O(n)$

   ## Code in Different Languages
   <Tabs>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
 class Solution:
    def areVectorsEqual(self, a, b):
        for i in range(26):
            if a[i] != b[i]:
                return False
        return True
    
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s2) < len(s1):
            return False
        freqS1 = [0] * 26
        for c in s1:
            freqS1[ord(c) - ord('a')] += 1
        
        freqS2 = [0] * 26
        i = 0
        j = 0
        
        while j < len(s2):
            freqS2[ord(s2[j]) - ord('a')] += 1
            
            if j - i + 1 == len(s1):
                if self.areVectorsEqual(freqS1, freqS2):
                    return True
            
            if j - i + 1 < len(s1):
                j += 1
            else:
                freqS2[ord(s2[i]) - ord('a')] -= 1
                i += 1
                j += 1
        
        return False

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
public class Solution {
    private boolean areVectorsEqual(int[] a, int[] b) {
        for (int i = 0; i < 26; i++) {
            if (a[i] != b[i]) return false;
        }
        return true;
    }
    
    public boolean checkInclusion(String s1, String s2) {
        if (s2.length() < s1.length()) return false;
        int[] freqS1 = new int[26];
        for (char c : s1.toCharArray()) freqS1[c - 'a']++;
        
        int[] freqS2 = new int[26];
        int i = 0, j = 0;
        
        while (j < s2.length()) {
            freqS2[s2.charAt(j) - 'a']++;
            
            if (j - i + 1 == s1.length()) {
                if (areVectorsEqual(freqS1, freqS2)) return true;
            }
            
            if (j - i + 1 < s1.length()) j++;
            else {
                freqS2[s2.charAt(i) - 'a']--;
                i++;
                j++;
            }
        }
        return false;
    }
}

    ```


  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
 class Solution {
    bool areVectorsEqual(vector<int> a, vector<int> b){
        for(int i=0; i<26; i++){
            if(a[i]!=b[i]) return false;
        }
        return true;
    }
public:
    bool checkInclusion(string s1, string s2) {
        if(s2.size()<s1.size()) return false;
        vector<int> freqS1(26, 0);
        for(char c: s1) freqS1[c-'a']++;
        
        vector<int> freqS2(26, 0);
        int i=0, j=0;
        
        while(j<s2.size()){
            freqS2[s2[j]-'a']++;
            
            if(j-i+1==s1.size()){
                if(areVectorsEqual(freqS1, freqS2)) return true;
            }
            
            if(j-i+1<s1.size()) j++;
            else{
                freqS2[s2[i]-'a']--;
                i++;
                j++;
            }
        }
        return false;
    }
};
```
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

## References

- **LeetCode Problem**: [567. Permutation in String](https://leetcode.com/problems/permutation-in-string/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/permutation-in-string/)

