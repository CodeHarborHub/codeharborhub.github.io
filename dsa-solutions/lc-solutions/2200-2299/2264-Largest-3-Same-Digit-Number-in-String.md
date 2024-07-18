---
id:  Largest-3-Same-Digit-Number-in-String
title:  Largest 3-Same-Digit Number in String
sidebar_label: 2264-Largest 3-Same-Digit Number in String
tags:
  - Strings
  - C++
  - Java
  - Python
description: "This document provides solutions to this problem implemented in C++, Java, and Python."
---

## Problem

You are given a string num representing a large integer. An integer is good if it meets the following conditions:

It is a substring of num with length 3.
It consists of only one unique digit.
Return the maximum good integer as a string or an empty string "" if no such integer exists.


 

### Examples

**Example 1:**

Input: num = "6777133339"
Output: "777"
Explanation: There are two distinct good integers: "777" and "333".
"777" is the largest, so we return "777".

**Example 2:**

Input: num = "2300019"
Output: "000"
Explanation: "000" is the only good integer.

**Example 3"**

Input: num = "42352338"
Output: ""
Explanation: No substring of length 3 consists of only one unique digit. Therefore, there are no good integers.
 


### Constraints

- `3 <= num.length <= 1000`
- `num only consists of digits.`

### Approach

Here is a simple and brief approach to solve the problem:

- Initialize a variable to store the largest good integer: Start with an empty string or an appropriate initial value.
- Iterate through the string: Loop through the string from the beginning to len(num) - 3 to check all possible substrings of length 3.
- Check each substring: For each position in the string, extract the substring of length 3 and check if all three characters are the same.
- Update the largest good integer: If the current good integer (substring of length 3 with all same characters) is greater than the previously found largest good integer, update the stored value.
- Return the result: After iterating through the entire string, return the stored value as the result.

### Solution

#### Code in Different Languages

### C++ Solution

```cpp
#include <iostream>
#include <string>
using namespace std;

string largestGoodInteger(string num) {
    string result = "";
    for (int i = 0; i < num.length() - 2; ++i) {
        if (num[i] == num[i + 1] && num[i] == num[i + 2]) {
            string goodInteger = num.substr(i, 3);
            if (goodInteger > result) {
                result = goodInteger;
            }
        }
    }
    return result;
}

int main() {
    string num = "6777133339";
    cout << largestGoodInteger(num) << endl;  // Output: "777"
    return 0;
}



```

### Java Solution

```java
public class LargestGoodInteger {
    public static String largestGoodInteger(String num) {
        String result = "";
        for (int i = 0; i < num.length() - 2; ++i) {
            if (num.charAt(i) == num.charAt(i + 1) && num.charAt(i) == num.charAt(i + 2)) {
                String goodInteger = num.substring(i, 3);
                if (goodInteger.compareTo(result) > 0) {
                    result = goodInteger;
                }
            }
        }
        return result;
    }

    public static void main(String[] args) {
        String num = "6777133339";
        System.out.println(largestGoodInteger(num));  // Output: "777"
    }
}

```

### Python Solution

```python
def largestGoodInteger(num: str) -> str:
    result = ""
    for i in range(len(num) - 2):
        if num[i] == num[i + 1] and num[i] == num[i + 2]:
            good_integer = num[i:i + 3]
            if good_integer > result:
                result = good_integer
    return result

# Test cases
print(largestGoodInteger("6777133339"))  # Output: "777"
print(largestGoodInteger("2300019"))     # Output: "000"
print(largestGoodInteger("42352338"))    # Output: ""



```

### Complexity Analysis

### Time Complexity: $O(n)$

> **Reason**:loop through the string , for each iteration, we perform a constant amount of work—checking if three characters are the same and comparing the current substring with the largest good integer found so far.


### Space Complexity: $O(1)$

> **Reason**: no additional data structure.


