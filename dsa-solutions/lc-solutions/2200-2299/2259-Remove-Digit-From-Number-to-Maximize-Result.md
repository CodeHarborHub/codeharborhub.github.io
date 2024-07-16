---
id:  Remove-Digit-From-Number-to-Maximize-Result
title:  Remove Digit From Number to Maximize Result
sidebar_label: 2259-Remove Digit From Number to Maximize Result
tags:
  - Strings
  - C++
  - Java
  - Python
description: "This document provides solutions to this problem implemented in C++, Java, and Python."
---

## Problem

You are given a string number representing a positive integer and a character digit.

Return the resulting string after removing exactly one occurrence of digit from number such that the value of the resulting string in decimal form is maximized. The test cases are generated such that digit occurs at least once in number.

### Examples

**Example 1:**

Input: number = "123", digit = "3"
Output: "12"
Explanation: There is only one '3' in "123". After removing '3', the result is "12".

**Example 2:**

Input: number = "1231", digit = "1"
Output: "231"
Explanation: We can remove the first '1' to get "231" or remove the second '1' to get "123".
Since 231 `>` 123, we return "231".

**Example 2:**

Input: number = "551", digit = "5"
Output: "51"
Explanation: We can remove either the first or second '5' from "551".
Both result in the string "51".
 


### Constraints

- `2 <= number.length <= 100`
- `number consists of digits from '1' to '9'.`
- `digit is a digit from '1' to '9'.`
- `digit occurs at least once in number.`

### Approach

To solve the problem of removing one occurrence of a specific digit from a string representation of a number to maximize its value, we can follow these steps:

1.Iterate through the string and identify all positions where the specified digit occurs.
2.For each position, create a new string by removing the digit at that position.
3.Compare all resulting strings and return the one with the maximum value.
This approach ensures that we find the optimal string by evaluating all possible removals of the specified digit.

### Solution

#### Code in Different Languages

### C++ Solution

```cpp
#include <iostream>
#include <string>
using namespace std;

string removeDigitToMaximize(string number, char digit) {
    string maxNumber = "";
    for (int i = 0; i < number.length(); i++) {
        if (number[i] == digit) {
            string candidate = number.substr(0, i) + number.substr(i + 1);
            if (candidate > maxNumber) {
                maxNumber = candidate;
            }
        }
    }
    return maxNumber;
}

int main() {
    cout << removeDigitToMaximize("123", '3') << endl;  // Output: "12"
    cout << removeDigitToMaximize("1231", '1') << endl;  // Output: "231"
    cout << removeDigitToMaximize("551", '5') << endl;  // Output: "51"
    return 0;
}



```

### Java Solution

```java
public class RemoveDigit {
    public static String removeDigitToMaximize(String number, char digit) {
        String maxNumber = "";
        for (int i = 0; i < number.length(); i++) {
            if (number.charAt(i) == digit) {
                String candidate = number.substring(0, i) + number.substring(i + 1);
                if (candidate.compareTo(maxNumber) > 0) {
                    maxNumber = candidate;
                }
            }
        }
        return maxNumber;
    }

    public static void main(String[] args) {
        System.out.println(removeDigitToMaximize("123", '3'));  // Output: "12"
        System.out.println(removeDigitToMaximize("1231", '1'));  // Output: "231"
        System.out.println(removeDigitToMaximize("551", '5'));  // Output: "51"
    }
}



```

### Python Solution

```python
def remove_digit_to_maximize(number, digit):
    max_number = ""
    for i in range(len(number)):
        if number[i] == digit:
            candidate = number[:i] + number[i+1:]
            if candidate > max_number:
                max_number = candidate
    return max_number

# Example usage
print(remove_digit_to_maximize("123", "3"))  # Output: "12"
print(remove_digit_to_maximize("1231", "1"))  # Output: "231"
print(remove_digit_to_maximize("551", "5"))  # Output: "51"


```

### Complexity Analysis

### Time Complexity: $O(n*n)$

> **Reason**:here n is the length of the string. This is because for each digit occurrence, creating a new string involves copying n characters, and there can be up to n such occurrences.

### Space Complexity: $O(m)$

> **Reason**: for storing the maximum string and the temporary candidate strings.
