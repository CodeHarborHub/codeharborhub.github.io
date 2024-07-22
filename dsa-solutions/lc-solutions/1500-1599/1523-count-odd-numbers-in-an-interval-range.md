---
id: count-odd-numbers-in-range
title: Count Odd Numbers in an Interval Range
sidebar_label: 1523-Count Odd Numbers in an Interval Range
tags:
  - Brute Force
  - Mathematics
  - LeetCode
  - Java
  - Python
  - C++
description: "This is a solution to the Count Odd Numbers in an Interval Range problem on LeetCode."
sidebar_position: 3
---

## Problem Description

Given two non-negative integers `low` and `high`. Return the count of odd numbers between `low` and `high` (inclusive).

### Examples

**Example 1:**

```
Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].
```

**Example 2:**

```
Input: low = 8, high = 10
Output: 1
Explanation: The odd numbers between 8 and 10 are [9].
```

### Constraints

- `0 <= low <= high <= 10^9`

---

## Solution for Counting Odd Numbers in an Interval Range

### Brute Force Approach

The brute force approach involves iterating through each number between `low` and `high` and counting how many of these numbers are odd.

#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    int countOdds(int low, int high) {
        int count = 0;
        for (int i = low; i <= high; ++i) {
            if (i % 2 != 0) {
                count++;
            }
        }
        return count;
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public int countOdds(int low, int high) {
        int count = 0;
        for (int i = low; i <= high; ++i) {
            if (i % 2 != 0) {
                count++;
            }
        }
        return count;
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def countOdds(self, low: int, high: int) -> int:
        count = 0
        for i in range(low, high + 1):
            if i % 2 != 0:
                count += 1
        return count
```

</TabItem>
</Tabs>

#### Complexity Analysis

- **Time Complexity**: $O(n)$, where $n$ is the number of integers between `low` and `high`. This is because we iterate through each number in the range.
- **Space Complexity**: $O(1)$. We use a constant amount of extra space for the counter variable.


### Optimized Approach

A more efficient approach involves using simple arithmetic to calculate the count of odd numbers. If `low` and `high` are both even, we can count how many odd numbers are in the range by the formula:

- If both `low` and `high` are even, the number of odd numbers is $(\frac{high - low}{2})$
- If both `low` and `high` are odd, the number of odd numbers is $(\frac{high - low}{2} + 1)$
- Otherwise, the number of odd numbers is $(\frac{high - low + 1}{2})$

#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    int countOdds(int low, int high) {
        if (low % 2 == 0) low++;
        if (high % 2 == 0) high--;
        if (low > high) return 0;
        return (high - low) / 2 + 1;
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public int countOdds(int low, int high) {
        if (low % 2 == 0) low++;
        if (high % 2 == 0) high--;
        if (low > high) return 0;
        return (high - low) / 2 + 1;
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def countOdds(self, low: int, high: int) -> int:
        if low % 2 == 0:
            low += 1
        if high % 2 == 0:
            high -= 1
        if low > high:
            return 0
        return (high - low) // 2 + 1
```

</TabItem>
</Tabs>

#### Complexity Analysis

- **Time Complexity**: $O(1)$, as it involves simple arithmetic operations.
- **Space Complexity**: $O(1)$, as we use a constant amount of extra space.

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['ImmidiSivani'].map(username => (
 <Author key={username} username={username} />
))}
</div>