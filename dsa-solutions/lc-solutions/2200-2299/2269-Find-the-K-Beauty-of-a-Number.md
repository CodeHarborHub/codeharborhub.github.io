---
id:  Find-the-K-Beauty-of-a-Number
title:  Find the K-Beauty of a Number
sidebar_label: 2269-Find the K-Beauty of a Number

tags:
  - Strings
  - C++
  - Java
  - Python
description: "This document provides solutions to this problem implemented in C++, Java, and Python."
---

## Problem

The k-beauty of an integer num is defined as the number of substrings of num when it is read as a string that meet the following conditions:

It has a length of k.
It is a divisor of num.
Given integers num and k, return the k-beauty of num.

### Examples

**Example 1:**

Input: num = 240, k = 2
Output: 2
Explanation: The following are the substrings of num of length k:
- "24" from "240": 24 is a divisor of 240.
- "40" from "240": 40 is a divisor of 240.
Therefore, the k-beauty is 2.

**Example 2:**

Input: num = 430043, k = 2
Output: 2
Explanation: The following are the substrings of num of length k:
- "43" from "430043": 43 is a divisor of 430043.
- "30" from "430043": 30 is not a divisor of 430043.
- "00" from "430043": 0 is not a divisor of 430043.
- "04" from "430043": 4 is not a divisor of 430043.
- "43" from "430043": 43 is a divisor of 430043.
Therefore, the k-beauty is 2.



### Constraints

- `1 <= num <= 109`
- `1 <= k <= num.length (taking num as a string)`

### Approach

- Convert the integer num to its string representation.
- Iterate through the string to extract all possible substrings of length k.
- For each substring, check if it is not zero and if it is a divisor of the original number num.
- If both conditions are met, increment the count.
- Return the count as the result.
### Solution

#### Code in Different Languages

### C++ Solution

```cpp
#include <iostream>
#include <string>

int kBeauty(int num, int k) {
    std::string numStr = std::to_string(num);
    int length = numStr.length();
    int count = 0;

    for (int i = 0; i <= length - k; i++) {
        std::string substring = numStr.substr(i, k);
        int subNum = std::stoi(substring);
        if (subNum != 0 && num % subNum == 0) {
            count += 1;
        }
    }
    return count;
}

int main() {
    std::cout << kBeauty(240, 2) << std::endl;  // Output: 2
    std::cout << kBeauty(430043, 2) << std::endl;  // Output: 2
    return 0;
}


```

### Java Solution

```java
public class KBeauty {
    public static int kBeauty(int num, int k) {
        String numStr = String.valueOf(num);
        int length = numStr.length();
        int count = 0;

        for (int i = 0; i <= length - k; i++) {
            String substring = numStr.substring(i, i + k);
            int subNum = Integer.parseInt(substring);
            if (subNum != 0 && num % subNum == 0) {
                count += 1;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        System.out.println(kBeauty(240, 2));  // Output: 2
        System.out.println(kBeauty(430043, 2));  // Output: 2
    }
}


```

### Python Solution

```python
def k_beauty(num, k):
    num_str = str(num)
    length = len(num_str)
    count = 0
    
    for i in range(length - k + 1):
        substring = num_str[i:i+k]
        if int(substring) != 0 and num % int(substring) == 0:
            count += 1
            
    return count

# Example usage
print(k_beauty(240, 2))  # Output: 2
print(k_beauty(430043, 2))  # Output: 2



```

### Complexity Analysis

### Time Complexity: $O(d*k)$

> **Reason**:It involes string conversion , loop iteration , substring operation , divisibility check.

### Space Complexity: $O(d)$

> **Reason**:  Storing the string representation of num.


