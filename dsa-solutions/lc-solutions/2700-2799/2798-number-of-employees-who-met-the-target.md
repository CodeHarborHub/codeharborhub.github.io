---
id: number-of-employees-who-met-the-target
title: Number Of Employees Who Met the Target
sidebar_label: 2798-Number Of Employees Who Met the Target
tags:
  - Array
  
description: "This is a solution to the number of employees who met the target in a string in leetcode"
---

## Problem Description

There are n employees in a company, numbered from 0 to n - 1. Each employee i has worked for hours[i] hours in the company.
The company requires each employee to work for at least target hours.
You are given a 0-indexed array of non-negative integers hours of length n and a non-negative integer target.
Return the integer denoting the number of employees who worked at least target hours.
 

### Examples

**Example 1:**

```
Input: hours = [0,1,2,3,4], target = 2
Output: 3
Explanation: The company wants each employee to work for at least 2 hours.
- Employee 0 worked for 0 hours and didn't meet the target.
- Employee 1 worked for 1 hours and didn't meet the target.
- Employee 2 worked for 2 hours and met the target.
- Employee 3 worked for 3 hours and met the target.
- Employee 4 worked for 4 hours and met the target.
There are 3 employees who met the target.
```
**Example 2:**
```
Input: hours = [5,1,4,2,2], target = 6
Output: 0
Explanation: The company wants each employee to work for at least 6 hours.
There are 0 employees who met the target.
 
 ```
## Complexity Analysis

*** Time Complexity:** $O(n)$

*** Space Complexity:** $O(n)$

### Constraints

- `1 <= n == hours.length <= 50`
-  `0 <= hours[i], target <= 105`



### Solution
## Approach

The goal is to determine the number of employees who have worked a number of hours greater than or equal to a specified target. To achieve this, the solution iterates through an array of integers, where each integer represents the number of hours worked by an employee. A counter variable is initialized to zero. As the loop progresses, each element of the array is checked to see if it meets or exceeds the target hours. If it does, the counter is incremented. After the loop has processed all elements, the counter, which now holds the number of employees who met or exceeded the target hours, is returned as the result. This approach ensures that every employee's hours are checked efficiently in a single pass through the array, making it both straightforward and efficient.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    int numberOfEmployeesWhoMetTarget(vector<int>& hours, int target) {
        int c = 0;
        for (int hour : hours) {
            if (hour >= target) {
                c++;
            }
        }
        return c;
    }
};


```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public int numberOfEmployeesWhoMetTarget(int[] hours, int target) {
        int c=0;
        for(int i:hours){
            if(i>=target){
                c++;
            }
        }
        return c;
    }
}

```
</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def numberOfEmployeesWhoMetTarget(self, hours, target):
        c = 0
        for hour in hours:
            if hour >= target:
                c += 1
        return c

```
</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Number Of Employees Who Met the Target](https://leetcode.com/problems/number-of-employees-who-met-the-target/description/)

- **Solution Link**: [Number Of Employees Who Met the Target](https://leetcode.com/problems/number-of-employees-who-met-the-target/post-solution/?submissionId=1267320674)
