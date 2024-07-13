---
id: a-number-after-a-double-reversal
title:  A Number After a Double Reversal
sidebar_label: 2119-A-Number-After-A-Double_reversal
tags:
  - Math
---

## Problem Description
Reversing an integer means to reverse all its digits.

For example, reversing `2021` gives `1202`. Reversing `12300` gives `321` as the leading zeros are not retained.
Given an integer `num`, reverse `num` to get `reversed1`, then reverse `reversed1` to get `reversed2`. Return `true` if `reversed2` equals `num`. Otherwise return `false`.


### Example

**Example 1:**


```
Input: num = 526
Output: true
Explanation: Reverse num to get 625, then reverse 625 to get 526, which equals num.
```
**Example 2:**
```
Input: num = 1800
Output: false
Explanation: Reverse num to get 81, then reverse 81 to get 18, which does not equal num.

```
### Constraints

- `0 <= num <= 106`

## Solution Approach

### Intuition:

To efficiently determine the number

## Solution Implementation

### Code (C++):
```cpp
class Solution {
public:
    bool isSameAfterReversals(int num) {
        int rev1 = 0;
        int rem1 = 0;
        int temp1 = num;

        while(num>0){

        rem1 = num%10;
        rev1 = rev1*10+rem1;
        num/=10;
        }
        int rev2 = 0;
        int rem2 = 0;
        while(rev1>0){
            rem2 = rev1%10;
            rev2 = rev2*10+rem2;
            rev1/=10;
        }
        if(temp1==rev2) return true;
        return false;

        
    }
};
```