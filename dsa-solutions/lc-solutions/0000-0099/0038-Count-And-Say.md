---
id: count-and-say
title: Count and Say (LeetCode)
difficulty: Medium
sidebar_label: 0038-CountAndSay
topics:
  - String
  - Recursion
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Merge Two Sorted Lists](https://leetcode.com/problems/count-and-say/) | [Merge Two Sorted Lists Solution on LeetCode](https://leetcode.com/problems/count-and-say/solutions/) |  [VijayShankerSharma](https://leetcode.com/u/darkknight648/) |

## Problem Description

The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

- countAndSay(1) = "1"
- countAndSay(n) is the run-length encoding of countAndSay(n - 1).

Run-length encoding (RLE) is a string compression method that works by replacing consecutive identical characters (repeated 2 or more times) with the concatenation of the character and the number marking the count of the characters (length of the run). For example, to compress the string "3322251" we replace "33" with "23", replace "222" with "32", replace "5" with "15" and replace "1" with "11". Thus the compressed string becomes "23321511".

Given a positive integer n, return the nth element of the count-and-say sequence.

### Examples

#### Example 1

- **Input:** n = 4
- **Output:** "1211"
- **Explanation:**
  - countAndSay(1) = "1"
  - countAndSay(2) = RLE of "1" = "11"
  - countAndSay(3) = RLE of "11" = "21"
  - countAndSay(4) = RLE of "21" = "1211"

#### Example 2

- **Input:** n = 1
- **Output:** "1"
- **Explanation:** This is the base case.

### Constraints

- `1 <= n <= 30`

### Approach

To solve this problem, we can use a recursive approach. Here's how the algorithm works:

1. Initialize a base case where if n equals 1, return "1".
2. For any value of n greater than 1, recursively call the function countAndSay(n-1).
3. Convert the result of countAndSay(n-1) into the count-and-say format.

### Solution Code

#### Python

```
class Solution(object):
    def countAndSay(self, n):
        if n == 1:
            return "1"
        prev = self.countAndSay(n - 1)
        result = ""
        count = 1
        for i in range(len(prev)):
            if i + 1 < len(prev) and prev[i] == prev[i + 1]:
                count += 1
            else:
                result += str(count) + prev[i]
                count = 1
        return result
```

#### C++

```
class Solution {
public:
    string countAndSay(int n) {
        if (n == 1)
            return "1";
        string prev = countAndSay(n - 1);
        string result = "";
        int count = 1;
        for (int i = 0; i < prev.length(); ++i) {
            if (i + 1 < prev.length() && prev[i] == prev[i + 1]) {
                count++;
            } else {
                result += to_string(count) + prev[i];
                count = 1;
            }
        }
        return result;
    }
};
```

#### Java

```
class Solution {
    public String countAndSay(int n) {
        if (n == 1)
            return "1";
        String prev = countAndSay(n - 1);
        StringBuilder result = new StringBuilder();
        int count = 1;
        for (int i = 0; i < prev.length(); ++i) {
            if (i + 1 < prev.length() && prev.charAt(i) == prev.charAt(i + 1)) {
                count++;
            } else {
                result.append(count).append(prev.charAt(i));
                count = 1;
            }
        }
        return result.toString();
    }
}
```

### Conclusion

The count-and-say sequence is generated based on the previous sequence using run-length encoding. This problem can be efficiently solved using a recursive approach where each step generates the next sequence based on the previous one. The provided solution code effectively implements this recursive algorithm to generate the nth element of the count-and-say sequence.