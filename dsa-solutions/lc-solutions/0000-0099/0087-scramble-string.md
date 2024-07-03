---
id: scramble-string
title: Scramble String
sidebar_label: 0087-Scramble String
description: We can scramble a string s to get a string t using the following algorithm
---

## Problem Description
We can scramble a string s to get a string t using the following algorithm:

If the length of the string is 1, stop.
If the length of the string is > 1, do the following:
Split the string into two non-empty substrings at a random index, i.e., if the string is `s`, divide it to `x` and y where `s = x + y`.
Randomly decide to swap the two substrings or to keep them in the same order. i.e., after this step, s may become `s = x + y` or `s = y + x.`
Apply step 1 recursively on each of the two substrings `x` and `y`.
Given two strings `s1` and `s2` of the same length, return `true` if `s2` is a scrambled string of `s1`, otherwise, return `false`.

 
 
### Examples

#### Example 1

```
Input: s1 = "great", s2 = "rgeat"
Output: true
Explanation: One possible scenario applied on s1 is:
"great" --> "gr/eat" // divide at random index.
"gr/eat" --> "gr/eat" // random decision is not to swap the two substrings and keep them in order.
"gr/eat" --> "g/r / e/at" // apply the same algorithm recursively on both substrings. divide at random index each of them.
"g/r / e/at" --> "r/g / e/at" // random decision was to swap the first substring and to keep the second substring in the same order.
"r/g / e/at" --> "r/g / e/ a/t" // again apply the algorithm recursively, divide "at" to "a/t".
"r/g / e/ a/t" --> "r/g / e/ a/t" // random decision is to keep both substrings in the same order.
The algorithm stops now, and the result string is "rgeat" which is s2.
As one possible scenario led s1 to be scrambled to s2, we return true.
```
#### Example 2

```
Input: s1 = "abcde", s2 = "caebd"
Output: false
```

#### Example 3
```
Input: s1 = "a", s2 = "a"
Output: true
```

### Constraints

- `s1.length == s2.length`
- `1 <= s1.length <= 30`
- `s1 and s2` consist of lowercase English letters.



### Approach
We will first check the base cases i.e., if the two strings are equal or not or if they are of different sizes. 
Then, we will create a key for the current problem by concatenating the two strings and storing it in a dictionary to avoid repeated computations. 
We will iterate over all possible splits of the current string and check whether we need to swap the left and right substrings or not. 
We will then make recursive calls on these two substrings and return true if any of the calls return true.


### Solution Code

#### C++

```cpp

class Solution {
private:
    int dp[40][40][40];
    bool solve(string &s1,string &s2,int l1,int l2,int len){
        if(len == 0){
            return dp[l1][l2][len]=true;
        }
        if(dp[l1][l2][len]!=-1){
            return dp[l1][l2][len];
        }
        for(int i=l1,j=l2;i<=len+l1;i++,j++){
            if(i==l1+len){
                return dp[l1][l2][len]=true;
            }
            if(s1[i]!=s2[j]){
                break;
            }
        }
        vector<int>v(26,0);
        for(int i=l1,j=l2;i<len+l1;i++,j++){
            v[s1[i]-'a']++;
            v[s2[j]-'a']--;
        }
        for(auto x:v){
            if(x) return dp[l1][l2][len]=false;
        }
        for(int i=1;i<len;i++){
            if(solve(s1,s2,l1,l2,i) && solve(s1,s2,l1+i,l2+i,len - i)){
                return dp[l1][l2][len]=true;
            }

            if(solve(s1,s2,l1+i,l2,len-i)&&solve(s1,s2,l1,l2+(len-i),i)){
                return dp[l1][l2][len]=true;
            }
        }
        return dp[l1][l2][len]=false;
    }
public:
    bool isScramble(string s1, string s2) {
        memset(dp, -1 ,sizeof dp);
        return solve(s1,s2,0,0,s1.size());
    }
};

```
#### Java

```java
class Solution {
    // to store previously computed substrings
    Map<String, Boolean> map = new HashMap<>();

    public boolean isScramble(String s1, String s2) {
        int n = s1.length();
        // check if the two strings are equal
        if (s1.equals(s2)) {
            return true;
        }
        // initialize frequency arrays for s1, s2, and current substring
        int[] a = new int[26], b = new int[26], c = new int[26];
        // check if the current substring has already been computed
        if (map.containsKey(s1 + s2)) {
            return map.get(s1 + s2);
        }
        // check all possible splits of the two strings
        for (int i = 1; i <= n - 1; i++) {
            int j = n - i;
            // update frequency arrays for s1, s2, and current substring
            a[s1.charAt(i - 1) - 'a']++;
            b[s2.charAt(i - 1) - 'a']++;
            c[s2.charAt(j) - 'a']++;
            // check if the current substring has the same characters
            if (Arrays.equals(a, b) && isScramble(s1.substring(0, i), s2.substring(0, i)) && isScramble(s1.substring(i), s2.substring(i))) {
                // if the substrings are scrambled versions of each other, return true
                map.put(s1 + s2, true);
                return true;
            }
            // check if the current substring and its complement have the same characters
            if (Arrays.equals(a, c) && isScramble(s1.substring(0, i), s2.substring(j)) && isScramble(s1.substring(i), s2.substring(0, j))) {
                // if the substrings are scrambled versions of each other, return true
                map.put(s1 + s2, true);
                return true;
            }
        }
        // if none of the splits result in scrambled versions, return false
        map.put(s1 + s2, false);
        return false;
    }
}

```

#### Python

```py

class Solution:
    # dictionary to store previously computed substrings
    map = {}

    def isScramble(self, s1: str, s2: str) -> bool:
        n = len(s1)
        # check if the two strings are equal
        if s1 == s2:
            return True
        # initialize frequency lists for s1, s2, and current substring
        a, b, c = [0] * 26, [0] * 26, [0] * 26
        # check if the current substring has already been computed
        if (s1 + s2) in self.map:
            return self.map[s1 + s2]
        # check all possible splits of the two strings
        for i in range(1, n):
            j = n - i
            # update frequency lists for s1, s2, and current substring
            a[ord(s1[i - 1]) - ord('a')] += 1
            b[ord(s2[i - 1]) - ord('a')] += 1
            c[ord(s2[j]) - ord('a')] += 1
            # check if the current substring has the same characters
            if a == b and self.isScramble(s1[:i], s2[:i]) and self.isScramble(s1[i:], s2[i:]):
                # if the substrings are scrambled versions of each other, return True
                self.map[s1 + s2] = True
                return True
            # check if the current substring and its complement have the same characters
            if a == c and self.isScramble(s1[:i], s2[j:]) and self.isScramble(s1[i:], s2[:j]):
                # if the substrings are scrambled versions of each other, return True
                self.map[s1 + s2] = True
                return True
        # if none of the splits result in scrambled versions, return False
        self.map[s1 + s2] = False
        return False

```

### Conclusion
- Time complexity:
`O(n^4)`

- Space complexity:
`O(n^2)`