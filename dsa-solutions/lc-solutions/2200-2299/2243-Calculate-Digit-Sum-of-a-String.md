---
id:  Calculate-Digit-Sum-of-a-String
title:  Calculate Digit Sum of a String
sidebar_label: 2243-Calculate Digit Sum of a String
tags:
  - Strings
  - C++
  - Java
  - Python
description: "This document provides solutions to this problem implemented in C++, Java, and Python."
---

## Problem

You are given a string s consisting of digits and an integer k.

A round can be completed if the length of s is greater than k. In one round, do the following:

Divide s into consecutive groups of size k such that the first k characters are in the first group, the next k characters are in the second group, and so on. Note that the size of the last group can be smaller than k.
Replace each group of s with a string representing the sum of all its digits. For example, "346" is replaced with "13" because 3 + 4 + 6 = 13.
Merge consecutive groups together to form a new string. If the length of the string is greater than k, repeat from step 1.
Return s after all rounds have been completed.

 

### Examples

**Example 1:**

Input: s = "11111222223", k = 3
Output: "135"
Explanation: 
- For the first round, we divide s into groups of size 3: "111", "112", "222", and "23".
  ​​​​​Then we calculate the digit sum of each group: 1 + 1 + 1 = 3, 1 + 1 + 2 = 4, 2 + 2 + 2 = 6, and 2 + 3 = 5. 
  So, s becomes "3" + "4" + "6" + "5" = "3465" after the first round.
- For the second round, we divide s into "346" and "5".
  Then we calculate the digit sum of each group: 3 + 4 + 6 = 13, 5 = 5. 
  So, s becomes "13" + "5" = "135" after second round. 
Now, s.length &lt;= k, so we return "135" as the answer.

**Example 2:**

Input: s = "00000000", k = 3
Output: "000"
Explanation: 
We divide s into "000", "000", and "00".
Then we calculate the digit sum of each group: 0 + 0 + 0 = 0, 0 + 0 + 0 = 0, and 0 + 0 = 0. 
s becomes "0" + "0" + "0" = "000", whose length is equal to k, so we return "000".
 


### Constraints

- 1 &lt; = s.length &lt; = 100
- 2 &lt; = k &lt; = 100
- s consists of digits only.

### Approach

1.Initial Setup: Start with the given string s.
2.Repeat Until Condition: Continue rounds of processing until the length of s is less than or equal to k.
3.Round Processing:
   Divide s into consecutive groups of size k.
   Calculate the digit sum for each group.
   Construct a new string from these sums.
4.Update s: Replace s with the newly constructed string.
5.Termination: When the length of s is less than or equal to k, return s.


### Solution

#### Code in Different Languages

### C++ Solution

```cpp
#include <iostream>
#include <string>
using namespace std;

class Solution {
public:
    string digitSum(string s, int k) {
        while (s.length() > k) {
            string new_s;
            for (int i = 0; i < s.length(); i += k) {
                int sum = 0;
                for (int j = i; j < min(i + k, (int)s.length()); j++) {
                    sum += s[j] - '0';
                }
                new_s += to_string(sum);
            }
            s = new_s;
        }
        return s;
    }
};

int main() {
    Solution solution;
    
    string s1 = "11111222223";
    int k1 = 3;
    cout << solution.digitSum(s1, k1) << endl;  // Output: "135"
    
    string s2 = "00000000";
    int k2 = 3;
    cout << solution.digitSum(s2, k2) << endl;  // Output: "000"
    
    return 0;
}


```

### Java Solution

```java
public class Solution {
    public String digitSum(String s, int k) {
        while (s.length() > k) {
            StringBuilder sb = new StringBuilder();
            int i = 0;
            while (i < s.length()) {
                int sum = 0;
                for (int j = i; j < Math.min(i + k, s.length()); j++) {
                    sum += s.charAt(j) - '0';
                }
                sb.append(sum);
                i += k;
            }
            s = sb.toString();
        }
        return s;
    }
    
    public static void main(String[] args) {
        Solution solution = new Solution();
        
        String s1 = "11111222223";
        int k1 = 3;
        System.out.println(solution.digitSum(s1, k1));  // Output: "135"
        
        String s2 = "00000000";
        int k2 = 3;
        System.out.println(solution.digitSum(s2, k2));  // Output: "000"
    }
}

```

### Python Solution

```python
class Solution:
    def digitSum(self, s: str, k: int) -> str:
        while len(s) > k:
            new_s = []
            i = 0
            while i < len(s):
                group_sum = sum(int(s[j]) for j in range(i, min(i + k, len(s))))
                new_s.append(str(group_sum))
                i += k
            s = ''.join(new_s)
        return s

# Example usage
solution = Solution()
s1 = "11111222223"
k1 = 3
print(solution.digitSum(s1, k1))  # Output: "135"

s2 = "00000000"
k2 = 3
print(solution.digitSum(s2, k2))  # Output: "000"



```

### Complexity Analysis

### Time Complexity: $O(n)$

> **Reason**:Iterating through the string `s`.


### Space Complexity: $O(n)$

> **Reason**: depends on the storage of the input string `s`.


