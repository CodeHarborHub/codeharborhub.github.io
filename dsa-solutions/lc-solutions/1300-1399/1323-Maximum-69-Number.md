---
id: maximum-69-number
title:  Maximum 69 Number
sidebar_label: 1323-Maximum-69-Number
tags:
  - Math
  - Greedy
---

## Problem Description
You are given a positive integer `num` consisting only of digits `6` and `9`.

Return the maximum number you can get by changing at most one digit (`6` becomes `9`, and `9` becomes `6`).


### Example

**Example 1:**


```
Input: num = 9669
Output: 9969
Explanation: 
Changing the first digit results in 6669.
Changing the second digit results in 9969.
Changing the third digit results in 9699.
Changing the fourth digit results in 9666.
The maximum number is 9969.
```
**Example 2:**
```
Input: num = 9996
Output: 9999
Explanation: Changing the last digit 6 to 9 results in the maximum number.
```
### Constraints

- `1 <= num <= 104`

## Solution Approach

### Intuition:

To efficiently determine the maximum number


## Solution Implementation

### Code (C++):
```cpp
class Solution {
public:
    int maximum69Number (int num) {
        string str = to_string(num);
        for(int i = 0; i < str.size(); i++){
            if(str[i] == '6'){
                str[i] = '9';
                break;
            }
        }
        return stoi(str);
    }
};
```