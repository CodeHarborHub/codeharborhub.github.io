---
id:   Strong-Password-Checker-II
title:   Strong Password Checker II
sidebar_label: 2299-Strong Password Checker II
tags:
  - Arrays
  - C++
  - Java
  - Python
description: "This document provides solutions to this problem implemented in C++, Java, and Python."
---

## Problem

A password is said to be strong if it satisfies all the following criteria:

It has at least 8 characters.
It contains at least one lowercase letter.
It contains at least one uppercase letter.
It contains at least one digit.
It contains at least one special character. The special characters are the characters in the following string: "!@#$%^&*()-+".
It does not contain 2 of the same character in adjacent positions (i.e., "aab" violates this condition, but "aba" does not).
Given a string password, return true if it is a strong password. Otherwise, return false.

 

### Examples

**Example 1:**

Input: password = "IloveLe3tcode!"
Output: true
Explanation: The password meets all the requirements. Therefore, we return true.

**Example 2:**

Input: password = "Me+You--IsMyDream"
Output: false
Explanation: The password does not contain a digit and also contains 2 of the same character in adjacent positions. Therefore, we return false.

**Example 3"**

Input: password = "1aB!"
Output: false
Explanation: The password does not meet the length requirement. Therefore, we return false.

### Constraints

- `1 <= password.length <= 100`
- `password consists of letters, digits, and special characters: "!@#$%^&*()-+".`

### Approach

Length Check: Ensure the password has at least 8 characters.
Character Type Checks: Verify that the password contains:
- At least one lowercase letter.
- At least one uppercase letter.
- At least one digit.
- At least one special character from "!@#$%^&*()-+".
Adjacent Duplicate Check: Ensure no two identical characters are adjacent.
### Solution

#### Code in Different Languages

### C++ Solution

```cpp
#include <string>
using namespace std;

bool isStrongPassword(const string& password) {
    if (password.size() < 8) return false;

    bool hasLower = false, hasUpper = false, hasDigit = false, hasSpecial = false;
    string specialChars = "!@#$%^&*()-+";

    for (size_t i = 0; i < password.size(); ++i) {
        if (islower(password[i])) hasLower = true;
        if (isupper(password[i])) hasUpper = true;
        if (isdigit(password[i])) hasDigit = true;
        if (specialChars.find(password[i]) != string::npos) hasSpecial = true;
        if (i > 0 && password[i] == password[i - 1]) return false;
    }

    return hasLower && hasUpper && hasDigit && hasSpecial;
}

// Example usage:
#include <iostream>
int main() {
    string password1 = "IloveLe3tcode!";
    cout << isStrongPassword(password1) << endl;  // Output: 1 (true)

    string password2 = "Me+You--IsMyDream";
    cout << isStrongPassword(password2) << endl;  // Output: 0 (false)

    string password3 = "1aB!";
    cout << isStrongPassword(password3) << endl;  // Output: 0 (false)

    return 0;
}



```

### Java Solution

```java
public class StrongPasswordChecker {
    public static boolean isStrongPassword(String password) {
        if (password.length() < 8) return false;

        boolean hasLower = false, hasUpper = false, hasDigit = false, hasSpecial = false;
        String specialChars = "!@#$%^&*()-+";

        for (int i = 0; i < password.length(); i++) {
            char ch = password.charAt(i);
            if (Character.isLowerCase(ch)) hasLower = true;
            if (Character.isUpperCase(ch)) hasUpper = true;
            if (Character.isDigit(ch)) hasDigit = true;
            if (specialChars.indexOf(ch) != -1) hasSpecial = true;
            if (i > 0 && ch == password.charAt(i - 1)) return false;
        }

        return hasLower && hasUpper && hasDigit && hasSpecial;
    }

    public static void main(String[] args) {
        String password1 = "IloveLe3tcode!";
        System.out.println(isStrongPassword(password1));  // Output: true

        String password2 = "Me+You--IsMyDream";
        System.out.println(isStrongPassword(password2));  // Output: false

        String password3 = "1aB!";
        System.out.println(isStrongPassword(password3));  // Output: false
    }
}

```

### Python Solution

```python
def is_strong_password(password):
    if len(password) < 8:
        return False
    
    has_lower = has_upper = has_digit = has_special = False
    special_chars = "!@#$%^&*()-+"
    
    for i in range(len(password)):
        if password[i].islower():
            has_lower = True
        if password[i].isupper():
            has_upper = True
        if password[i].isdigit():
            has_digit = True
        if password[i] in special_chars:
            has_special = True
        if i > 0 and password[i] == password[i - 1]:
            return False
    
    return has_lower and has_upper and has_digit and has_special

# Example usage:
password1 = "IloveLe3tcode!"
print(is_strong_password(password1))  # Output: True

password2 = "Me+You--IsMyDream"
print(is_strong_password(password2))  # Output: False

password3 = "1aB!"
print(is_strong_password(password3))  # Output: False



```

### Complexity Analysis

### Time Complexity: $O(n)$

> **Reason**:Where n is the length of the password. Each character is checked once.

### Space Complexity: $O(1)$

> **Reason**: Only a constant amount of extra space is used.


