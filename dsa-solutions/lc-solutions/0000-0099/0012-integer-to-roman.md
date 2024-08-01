---
id: integer-to-roman
title: Integer to Roman (LeetCode)
sidebar_label: 0012 - Integer to Roman
tags:
    - Hash Table
    - Math
    - String
description: Convert a given integer to a Roman numeral using specific rules for the Roman numeral system.
sidebar_position: 12
---

## Problem Statement

Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D`, and `M`.

| Symbol | Value |
| :----- | :---- |
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five, we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

- `I` can be placed before `V` (5) and `X` (10) to make 4 and 9.
- `X` can be placed before `L` (50) and `C` (100) to make 40 and 90.
- `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.

Given an integer, convert it to a Roman numeral.

### Examples

**Example 1:**

- **Input**: `num = 3749`
- **Output**: `"MMMDCCXLIX"`
- **Explanation**:
  - 3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
  - 700 = DCC as 500 (D) + 100 (C) + 100 (C)
  - 40 = XL as 10 (X) less than 50 (L)
  - 9 = IX as 1 (I) less than 10 (X)

**Example 2:**

- **Input**: `num = 58`
- **Output**: `"LVIII"`
- **Explanation**:
  - 50 = L
  - 8 = VIII

**Example 3:**

- **Input**: `num = 1994`
- **Output**: `"MCMXCIV"`
- **Explanation**:
  - 1000 = M
  - 900 = CM
  - 90 = XC
  - 4 = IV

### Constraints

- `1 <= num <= 3999`

## Solution

### Approach

#### Intuition

To convert an integer to a Roman numeral, we need to repeatedly subtract the largest possible Roman numeral value from the integer while appending the corresponding symbol to the result string. We use predefined pairs of integers and their Roman numeral representations to guide this process.

#### Algorithm

1. **Initialize the Roman numeral string**:
    - Create an empty string `Roman` to store the resulting Roman numeral.

2. **Create a list of integer-Roman pairs**:
    - Use a list of pairs to store the values and symbols of Roman numerals in descending order of values.

3. **Iterate through the list of pairs**:
    - For each pair, check if the input integer is greater than or equal to the Roman numeral value.
    - If it is, add the corresponding symbol to the `Roman` string and subtract the corresponding value from the input integer.
    - Repeat this process until the input integer becomes zero.

4. **Return the Roman numeral string**:
    - After processing all the pairs, return the `Roman` string containing the converted Roman numeral.

### Code

#### C++ Implementation

```cpp
class Solution {
public:
    string intToRoman(int num) {
        string Roman = "";
        vector<pair<int, string>> storeIntRoman = {{1000, "M"}, {900, "CM"}, {500, "D"}, {400, "CD"}, {100, "C"}, {90, "XC"}, {50, "L"}, {40, "XL"}, {10, "X"}, {9, "IX"}, {5, "V"}, {4, "IV"}, {1, "I"}};
        for (int i = 0; i < storeIntRoman.size(); i++) {
            while (num >= storeIntRoman[i].first) {
                Roman += storeIntRoman[i].second;
                num -= storeIntRoman[i].first;
            }
        }
        return Roman;
    }
};
```

#### Java Implementation

```java
class Solution {
    public String intToRoman(int num) {
        String Roman = "";
        int[][] storeIntRoman = {{1000, "M"}, {900, "CM"}, {500, "D"}, {400, "CD"}, {100, "C"}, {90, "XC"}, {50, "L"}, {40, "XL"}, {10, "X"}, {9, "IX"}, {5, "V"}, {4, "IV"}, {1, "I"}};
        for (int i = 0; i < storeIntRoman.length; i++) {
            while (num >= storeIntRoman[i][0]) {
                Roman += storeIntRoman[i][1];
                num -= storeIntRoman[i][0];
            }
        }
        return Roman;
    }
}
```

#### Python Implementation

```python
class Solution:
    def intToRoman(self, num: int) -> str:
        Roman = ""
        storeIntRoman = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]]
        for i in range(len(storeIntRoman)):
            while num >= storeIntRoman[i][0]:
                Roman += storeIntRoman[i][1]
                num -= storeIntRoman[i][0]
        return Roman
```

### Complexity Analysis

- **Time Complexity**: $O(1)$ - The algorithm iterates through a constant number of values (13 in this case), so the time complexity is constant.
- **Space Complexity**: $O(1)$ - The amount of extra space used is constant, determined by the fixed size of the `storeIntRoman` vector.

## Conclusion

The provided solutions efficiently convert an integer to a Roman numeral by iterating through predefined Roman numeral values and symbols. This approach ensures that the conversion adheres to the rules of the Roman numeral system while maintaining constant time and space complexity.

