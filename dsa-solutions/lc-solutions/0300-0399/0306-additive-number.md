---
id: additive-number
title: Additive Number (LeetCode)
sidebar_label: 0306-AdditiveNumber
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Merge Two Sorted Lists](https://leetcode.com/problems/additive-number/) | [Merge Two Sorted Lists Solution on LeetCode](https://leetcode.com/problems/additive-number/solutions/) |  [VijayShankerSharma](https://leetcode.com/u/darkknight648/) |

## Problem Description

Given a string containing only digits, determine if it forms an additive sequence. An additive sequence is a sequence of numbers where each term (excluding the first two) is the sum of the preceding two.

### Example

#### Example 1:

- **Input:** "112358"
- **Output:** true
- **Explanation:** The digits can form an additive sequence: 1, 1, 2, 3, 5, 8. 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8.

#### Example 2:

- **Input:** "199100199"
- **Output:** true
- **Explanation:** The additive sequence is: 1, 99, 100, 199. 1 + 99 = 100, 99 + 100 = 199.

### Constraints:

- $1 \leq \text{num.length} \leq 35$
- $\text{num}$ consists only of digits.

## Approach

We can use a backtracking approach to check all possible combinations of additive sequences. Starting with the first two numbers, we can recursively check if the sum of the current two numbers matches the next number in the sequence. If it does, we continue checking the rest of the string. If the entire string is consumed and all sums match, we return true, otherwise false.

To handle overflow for very large input integers, we can use a data type capable of storing large numbers, such as BigInteger in Java.

## Solution Code

#### Python

```py
class Solution:
    def isAdditiveNumber(self, num):
        n = len(num)        
        def backtrack(idx, num1, num2):
            if idx == n:
                return True            
            for i in range(idx, n):
                if num[idx] == '0' and i > idx:
                    break                
                next_num = int(num[idx:i + 1])                
                if next_num == num1 + num2:
                    if backtrack(i + 1, num2, next_num):
                        return True
                
                elif next_num > num1 + num2:
                    break
            return False
        for i in range(1, n):
            for j in range(i):
                num1 = int(num[:j + 1])
                num2 = int(num[j + 1:i + 1])
                if backtrack(i + 1, num1, num2):
                    return True
        
        return False
```

#### Java

```java
public class Solution {
    public boolean isAdditiveNumber(String num) {
        int n = num.length();
        return backtrack(num, 0, n, null, null);
    }
    private boolean backtrack(String num, int idx, int n, Long num1, Long num2) {
        if (idx == n) {
            return true;
        }
        for (int i = idx; i < n; i++) {
            if (num.charAt(idx) == '0' && i > idx) {
                break;
            }
            long nextNum = Long.parseLong(num.substring(idx, i + 1));
            if (num1 == null || num2 == null || nextNum == num1 + num2) {
                if (backtrack(num, i + 1, n, num2, nextNum)) {
                    return true;
                }
            } else if (nextNum > num1 + num2) {
                break;
            }
        }
        return false;
    }
}
```

#### C++

```cpp
class Solution {
public:
    bool isAdditiveNumber(std::string num) {
        int n = num.size();
        return backtrack(num, 0, n, nullptr, nullptr);
    }
private:
    bool backtrack(const std::string& num, int idx, int n, long long* num1, long long* num2) {
        if (idx == n) {
            return true;
        }
        for (int i = idx; i < n; i++) {
            if (num[idx] == '0' && i > idx) {
                break;
            }
            long long nextNum = stoll(num.substr(idx, i - idx + 1));
            if (num1 == nullptr || num2 == nullptr || nextNum == *num1 + *num2) {
                if (backtrack(num, i + 1, n, num2, &nextNum)) {
                    return true;
                }
            } else if (nextNum > *num1 + *num2) {
                break;
            }
        }
        return false;
    }
};
```

## Conclusion

The "Additive Number" problem can be efficiently solved using a backtracking approach, checking all possible combinations of additive sequences. By recursively checking if the sum of the current two numbers matches the next number in the sequence, we can determine if the given string forms an additive sequence. The provided solution code implements this approach in Python, Java, and C++, providing an optimal solution to the problem.
