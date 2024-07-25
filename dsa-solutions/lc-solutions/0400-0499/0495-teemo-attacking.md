---
id: teemo-attacking
title: Teemo Attacking
sidebar_label: 0495 - Teemo Attacking
tags:
  - Greedy
  - Array
  - Simulation
description: "This is a solution to the Teemo Attacking problem on LeetCode."
---

## Problem Description

Our hero Teemo is attacking an enemy Ashe with poison attacks! When Teemo attacks Ashe, Ashe gets poisoned for a exactly `duration` seconds. More formally, an attack at second `t` will mean Ashe is poisoned during the **inclusive** time interval `[t, t + duration - 1]`. If Teemo attacks again **before** the poison effect ends, the timer for it is **reset**, and the poison effect will end `duration` seconds after the new attack.

You are given a **non-decreasing** integer array `timeSeries`, where `timeSeries[i]` denotes that Teemo attacks Ashe at second `timeSeries[i]`, and an integer `duration`.

Return the **total** number of seconds that Ashe is poisoned.

### Examples

**Example 1:**
```
Input: timeSeries = [1,4], duration = 2
Output: 4
Explanation: Teemo's attacks on Ashe go as follows:
- At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
- At second 4, Teemo attacks, and Ashe is poisoned for seconds 4 and 5.
Ashe is poisoned for seconds 1, 2, 4, and 5, which is 4 seconds in total.
```

**Example 2:**

```
Input: timeSeries = [1,2], duration = 2
Output: 3
Explanation: Teemo's attacks on Ashe go as follows:
- At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
- At second 2 however, Teemo attacks again and resets the poison timer. Ashe is poisoned for seconds 2 and 3.
Ashe is poisoned for seconds 1, 2, and 3, which is 3 seconds in total.
```

### Constraints

- $1 <= timeSeries.length <= 10^4$
- $0 <= timeSeries[i], duration <= 10^7$
- `timeSeries` is sorted in **non-decreasing** order.

## Solution for Teemo Attacking

### Approach 1: One pass
#### Intuition

The problem is an example of merge interval questions which are now quite popular in Google.

Typically such problems could be solved in a linear time in the case of sorted input, and in O(Nlog⁡N) time otherwise. 

Here one deals with a sorted input, and the problem could be solved in one pass with a constant space. The idea is straightforward: consider only the interval between two attacks. Ashe spends in a poisoned condition the whole time interval if this interval is shorter than the poisoning time duration `duration`, and `duration` otherwise.

#### Algorithm

- Initiate total time in poisoned condition `total = 0`.

- Iterate over `timeSeries` list. At each step add to the total time the minimum between interval length and the poisoning time duration `duration`.

- Return `total + duration` to take the last attack into account.

![image](https://assets.leetcode.com/static_assets/media/original_images/495/ashe.png)
## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
class Solution {
public:
    int findPoisonedDuration(std::vector<int>& timeSeries, int duration) {
        int n = timeSeries.size();
        if (n == 0) return 0;

        int total = 0;
        for(int i = 0; i < n - 1; ++i)
            total += std::min(timeSeries[i + 1] - timeSeries[i], duration);
        return total + duration;
    }
};
```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
  public int findPoisonedDuration(int[] timeSeries, int duration) {
    int n = timeSeries.length;
    if (n == 0) return 0;

    int total = 0;
    for(int i = 0; i < n - 1; ++i)
      total += Math.min(timeSeries[i + 1] - timeSeries[i], duration);
    return total + duration;
  }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution:
    def findPoisonedDuration(self, timeSeries: List[int], duration: int) -> int:
        n = len(timeSeries)
        if n == 0:
            return 0
        
        total = 0
        for i in range(n - 1):
            total += min(timeSeries[i + 1] - timeSeries[i], duration)
        return total + duration     
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(N)$

> **Reason**: where N is the length of the input list since we iterate the entire list.

### Space Complexity: $O(1)$

> **Reason**: it's a constant space solution.

## References

- **LeetCode Problem**: [Teemo Attacking](https://leetcode.com/problems/teemo-attacking/description/)

- **Solution Link**: [Teemo Attacking](https://leetcode.com/problems/teemo-attacking/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>