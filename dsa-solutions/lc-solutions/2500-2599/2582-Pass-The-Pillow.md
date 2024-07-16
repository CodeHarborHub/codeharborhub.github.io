---
id: pass-the-pillow
title: Pass the Pillow
sidebar_label: 2582. Pass the Pillow
tags:
- Math
- Simulation
description: "Solution to Leetcode 2582. Pass the Pillow "
---

## Problem Description

There are n people standing in a line labeled from 1 to n. The first person in the line is holding a pillow initially. Every second, the person holding the pillow passes it to the next person standing in the line. Once the pillow reaches the end of the line, the direction changes, and people continue passing the pillow in the opposite direction.

For example, once the pillow reaches the nth person they pass it to the $(n-1)$ th person, then to the $(n-2)$ th person and so on.
Given the two positive integers n and time, return the index of the person holding the pillow after time seconds.
 

### Examples

**Example 1:**

```
Input: n = 4, time = 5
Output: 2
Explanation: People pass the pillow in the following way: 1 -> 2 -> 3 -> 4 -> 3 -> 2.
After five seconds, the 2nd person is holding the pillow.
```

**Example 2:**

```
Input: n = 3, time = 2
Output: 3
Explanation: People pass the pillow in the following way: 1 -> 2 -> 3.
After two seconds, the 3rd person is holding the pillow.

```



### Constraints
- `2 <= n <= 1000`
- `1 <= time <= 1000`

### Approach 
1. To understand how the pillow moves among the people in line, let understand the pattern of its movement. The pillow completes a full round when it travels from the first person to the last or vice versa. Each complete round takes $(n-1)$ seconds, where n is the total number of people.

To determine how many complete rounds the pillow makes within a given time time, we divide time by $(n-1)$. This gives us fullRounds, representing the number of times the pillow moves from one end of the line to the other. The remainder of this division, extraTime = time % (n - 1), indicates the extra time left after completing these full rounds.

Now, let's consider the direction of the pillow's movement:

- If fullRounds is even, the pillow moves forward along the line.
- If fullRounds is odd, the pillow moves backward. This directional change occurs after each complete round.
- In the case of forward movement (fullRounds is even), the person holding the pillow after the extra time will be positioned at extraTime + 1 (since we start counting positions from one). Conversely, during backward movement (fullRounds is odd), the person holding the pillow will be at position n - extraTime

### Complexity

Time complexity: $O(1)$.Regardless of the size of the input, we always perform a fixed number of operations thus the time complexity is $O(1)$.

Space complexity: $O(1)$.Regardless of the size of the input, we only use a fixed number of auxiliary variables, thus the space complexity is $O(1)$.


### Solution

#### Code in Different Languages

#### C++

 ```cpp
class Solution {
public:
    int passThePillow(int n, int time) {
        // Calculate the number of complete rounds of pillow passing
        int fullRounds = time / (n - 1);

        // Calculate the remaining time after complete rounds
        int extraTime = time % (n - 1);

        // Determine the position of the person holding the pillow
        // If fullRounds is even, the pillow is moving forward.
        // If fullRounds is odd, the pillow is moving backward.
        if (fullRounds % 2 == 0) {
            return extraTime + 1;  // Position when moving forward
        } else {
            return n - extraTime;  // Position when moving backward
        }
    }
};
 ```

#### JAVA

```java
class Solution {

    public int passThePillow(int n, int time) {
        // Calculate the number of complete rounds of pillow passing
        int fullRounds = time / (n - 1);

        // Calculate the remaining time after complete rounds
        int extraTime = time % (n - 1);

        // Determine the position of the person holding the pillow
        // If fullRounds is even, the pillow is moving forward.
        // If fullRounds is odd, the pillow is moving backward.
        if (fullRounds % 2 == 0) {
            return extraTime + 1; // Position when moving forward
        } else {
            return n - extraTime; // Position when moving backward
        }
    }
}
```

#### PYTHON

```python
class Solution:
    def passThePillow(self, n, time):
        # Calculate the number of complete rounds of pillow passing
        full_rounds = time // (n - 1)

        # Calculate the remaining time after complete rounds
        extra_time = time % (n - 1)

        # Determine the position of the person holding the pillow
        # If full_rounds is even, the pillow is moving forward.
        # If full_rounds is odd, the pillow is moving backward.
        if full_rounds % 2 == 0:
            return extra_time + 1  # Position when moving forward
        else:
            return n - extra_time  # Position when moving backward
        
```



### Complexity Analysis

- Time Complexity: $O(1)$ 

- Space Complexity: $O(1)$ 

### References

- **LeetCode Problem**: Pass the Pillow