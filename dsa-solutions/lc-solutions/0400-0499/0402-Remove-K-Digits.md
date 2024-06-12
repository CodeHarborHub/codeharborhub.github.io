---
id: remove-k-digits
title: Remove K Digits (LeetCode)
sidebar_label: 0402-RemoveKDigits
description: Find the smallest possible number by removing K digits from the given number.
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Remove K Digits](https://leetcode.com/problems/remove-k-digits/) | [Remove K Digits Solution on LeetCode](https://leetcode.com/problems/remove-k-digits/solutions/) | [vaishu_1904](https://leetcode.com/u/vaishu_1904/) |

## Problem Description

Given a string `num` representing a non-negative integer and an integer `k`, return the smallest possible number you can get by removing `k` digits from `num`.

**Example:**

#### Example 1

- **Input:** `num = "1432219"`, `k = 3`
- **Output:** `"1219"`
- **Explanation:** Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.

#### Example 2

- **Input:** `num = "10200"`, `k = 1`
- **Output:** `"200"`
- **Explanation:** Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.

#### Example 3

- **Input:** `num = "10"`, `k = 2`
- **Output:** `"0"`
- **Explanation:** Remove all the digits from the number and it is left with nothing which is 0.

### Constraints

- `1 <= num.length <= 10^5`
- `num` consists of only digits.
- `num` does not have any leading zeros except for the zero itself.
- `1 <= k <= num.length`

### Approach

To solve this problem, we need to systematically remove digits to achieve the smallest possible number. Here's a step-by-step approach:

1. **Initialization**:
   - Use a stack to build the smallest possible number.
   - Iterate through each digit in `num`.

2. **Stack Operations**:
   - For each digit, while the stack is not empty, and the top of the stack is greater than the current digit, and `k` is greater than 0, pop the stack (remove the top element).
   - Push the current digit to the stack.
   - Decrement `k` each time a digit is removed.

3. **Remove Remaining Digits**:
   - If there are still digits to remove (`k > 0`), remove them from the end of the stack.

4. **Build the Result**:
   - Convert the stack to a string.
   - Remove leading zeros.
   - If the result is empty, return "0".

### Solution Code

#### Python

```python
class Solution:
    def removeKdigits(self, num: str, k: int) -> str:
        stack = []
        for digit in num:
            while k > 0 and stack and stack[-1] > digit:
                stack.pop()
                k -= 1
            stack.append(digit)
        
        # Remove the remaining digits from the end if k > 0
        stack = stack[:-k] if k else stack
        
        # Build the result and remove leading zeros
        result = ''.join(stack).lstrip('0')
        
        return result if result else "0"
```

#### Java
```java
import java.util.*;

class Solution {
    public String removeKdigits(String num, int k) {
        Deque<Character> stack = new ArrayDeque<>();
        for (char digit : num.toCharArray()) {
            while (k > 0 && !stack.isEmpty() && stack.peekLast() > digit) {
                stack.removeLast();
                k--;
            }
            stack.addLast(digit);
        }
        
        // Remove the remaining digits from the end if k > 0
        for (int i = 0; i < k; ++i) {
            stack.removeLast();
        }
        
        // Build the result and remove leading zeros
        StringBuilder result = new StringBuilder();
        boolean leadingZero = true;
        for (char digit : stack) {
            if (leadingZero && digit == '0') continue;
            leadingZero = false;
            result.append(digit);
        }
        
        return result.length() == 0 ? "0" : result.toString();
    }
}
```

#### C++
```c++
#include <string>
#include <deque>
using namespace std;

class Solution {
public:
    string removeKdigits(string num, int k) {
        deque<char> stack;
        for (char digit : num) {
            while (k > 0 && !stack.empty() && stack.back() > digit) {
                stack.pop_back();
                k--;
            }
            stack.push_back(digit);
        }
        
        // Remove the remaining digits from the end if k > 0
        for (int i = 0; i < k; ++i) {
            stack.pop_back();
        }
        
        // Build the result and remove leading zeros
        string result;
        bool leadingZero = true;
        for (char digit : stack) {
            if (leadingZero && digit == '0') continue;
            leadingZero = false;
            result += digit;
        }
        
        return result.empty() ? "0" : result;
    }
};
```

### Conclusion
The solution efficiently finds the smallest possible number by removing k digits using a stack-based approach. This approach ensures that we maintain the smallest possible number at each step, and handles edge cases like leading zeros and empty results effectively.