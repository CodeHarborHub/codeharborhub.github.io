---
id: student-attendance-record-i
title: Student Attendance Record I
sidebar_label: 0551-student-attendance-record-i
tags:
  - String
description: "This is a solution to student-attendance-record-i problem on LeetCode."
---

## Problem Description

You are given a string s representing an attendance record for a student where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:

  1- `'A'`: Absent.
  2- `'L'`: Late.
  3- `'P'`: Present.

The student is eligible for an attendance award if they meet both of the following criteria:

   1- The student was absent `('A')` for strictly fewer than `2` days
      total.
   2- The student was never late `('L')` for `3` or more consecutive
      days.

Return true if the student is eligible for an attendance award, or false otherwise.

### Examples

**Example 1:**

```
Input: s = "PPALLP"
Output: true
Explanation: The student has fewer than 2 absences and was never late 3 or more consecutive days.
```

**Example 2:**

```
Input: s = "PPALLL"
Output: false
Explanation: The student was late 3 consecutive days in the last 3 days, so is not eligible for the award.

```


### Constraints

- `1 <= s.length <= 1000`
- `s[i] is either 'A', 'L', or 'P'.`


## Solution for Assign Cookies

### Approach:

1- We have to find that string s doesn't contain more than 1 A's and
   more than 2 consective L's.
2- Therefore we are using forloop for calculating number of A's.
   And we are using indexOf() --> JAVA or find() --> C++ for finding if "LLL" is present in the string or not.
3- Intialize count = 0 for calculating number of A's.
   If count is more than or equal to 2 then return false. Since the students are only elligible for attendance when count of A is 1.
4- Now we have to check condition for consecutive L's.
   If string s contains any substring that has LLL then it would return false. This could be done by applying indexOf() or find().
   If the indexOf() or find() returns an index then we will return false.
5- Return true for all the other cases since we have encountered wrong
   ones first.


## Code in Different Languages

### C++

```cpp
class Solution {
public:
    bool checkRecord(string s) {
        int count = 0;
        for (auto& ch : s) {
            if (ch == 'A') {
                count++;
                if (count >= 2) {
                    return false;
                }
            }
        }

        if (s.find("LLL") != -1) {
            return false;
        }

        return true;
    }
};
```
### Java

```java
class Solution {
    public boolean checkRecord(String s) {
        int count = 0;
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == 'A') {
                count++;
                if (count >= 2) {
                    return false;
                }
            }
        }

        if (s.indexOf("LLL") != -1) {
            return false;
        }

        return true;
    }
}

```

### Python

```python
class Solution:
      def checkRecord(self, s: str) -> bool:
        return False if s.find("LLL") >= 0 or s.count('A') > 1 else True
```

## Complexity Analysis

### Time Complexity: O(n)

### Space Complexity: O(1)

## References

- **LeetCode Problem**: [Student Attendance Record I](https://leetcode.com/problems/student-attendance-record-i/)

