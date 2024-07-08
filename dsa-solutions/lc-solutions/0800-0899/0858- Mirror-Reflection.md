---
id: mirror-reflection
title: Mirror Reflection
sidebar_label: 858-  Mirror Reflection
tags:
  - Math
  - Geometry
  - Number Theory
description: Given a square room with mirrored walls and receptors at corners, a laser ray emitted from the southwest corner reflects off mirrors and reaches a receptor based on specified conditions.
sidebar_position: 0858
---

## Problem Description

There is a special square room with mirrors on each of the four walls. Except for the southwest corner, there are receptors on each of the remaining corners, numbered `0, 1, and 2`.

The square room has walls of length p and a laser ray from the southwest corner first meets the east wall at a distance q from the `0th` receptor.

Given the two integers p and q, return the number of the receptor that the ray meets first.

The test cases are guaranteed so that the ray will meet a receptor eventually.

### Example 1

- **Input:** `p = 2, q = 1`
- **Output:** `2`
- **Explanation:** `The ray meets receptor 2 the first time it gets reflected back to the left wall.`

### Constraints

- `1 <= q <= p <= 1000`

## Approach

This Java function mirrorReflection determines where a laser ray, starting from the southwest corner of a square room with mirrored walls, will reflect and reach a receptor. It continuously reduces the room dimensions p and q by dividing them by 2 while both are even, simulating the path of the laser until it reaches a receptor. Depending on whether p or q becomes odd first, it returns 0, 1, or 2 indicating the receptor the laser reaches first (based on their positions in the room).

#### Java

```Java
class Solution {

    // taken help
    public int mirrorReflection(int p, int q) {
        while(p%2==0 && q%2==0){
            p=p/2;
            q=q/2;
        }

        if(p%2==0) return 2;
        if(q%2==0) return 0;
        return 1;
    }
}
```

- Time Complexity
  The time complexity is $o(n)$.

- Space Complexity
  The space complexity is $O(1)$.
