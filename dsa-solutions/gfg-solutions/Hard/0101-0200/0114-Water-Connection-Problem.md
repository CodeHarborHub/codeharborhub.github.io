---
id: water-connection-problem
title: Water-Connection-Problem (Geeks for Geeks)
sidebar_label: Water Connection Problem
tags:
  - Intermediate
  - Geeks for Geeks
  - CPP
  - Python
  - DSA
description: "This is a solution to the Water Connection Problem problem on Geeks for Geeks."
---

## Problem Description

Every house in the colony has at most one pipe going into it and at most one pipe going out of it. Tanks and taps are to be installed in a manner such that every house with one outgoing pipe but no incoming pipe gets a tank installed on its roof and every house with only an incoming pipe and no outgoing pipe gets a tap.

Given two integers n and p denoting the number of houses and the number of pipes. The connections of pipe among the houses contain three input values: a_i, b_i, d_i denoting the pipe of diameter d_i from house a_i to house b_i, find out the efficient solution for the network. 

The output will contain the number of pairs of tanks and taps t installed in first line and the next t lines contain three integers: house number of tank, house number of tap and the minimum diameter of pipe between them.


## Examples

**Example:**
**Input:** 
```
         4 2
        1 2 60
        3 4 50
```
**Output:** 
```
            2
        1 2 60
        3 4 50
```
**Explanation:**
Connected components are: `1->2` and `3->4`
Therefore, our answer is 2 followed by `1 2 60` and `3 4 50`.
## Your Task
You don't need to read input or print anything. Your task is to complete the function solve() which takes an integer n(the number of houses), p(the number of pipes),the array a[] , b[] and d[] (where d[i] denoting the diameter of the ith pipe from the house a[i] to house b[i]) as input parameter and returns the array of pairs of tanks and taps installed i.e ith element of the array contains three integers: house number of tank, house number of tap and the minimum diameter of pipe between them. Note that, returned array must be sorted based on the house number containing a tank (i.e. smaller house number should come before a large house number).

Expected Time Complexity:  $O(n+p)$.
Expected Auxiliary Space: $O(n+p)$.

## Constraints

- `1<=n<=20`
- `1<=p<=50`
- `1<=a[i]`,`b[i]<=20`
- `1<=d[i]<=100`

## Problem Explanation

There are n houses and p water pipes in Geek Colony. Every house has at most one pipe going into it and at most one pipe going out of it. Geek needs to install pairs of tanks and taps in the colony according to the following guidelines.  
**Step 1 :** Every house with one outgoing pipe but no incoming pipe gets a tank on its roof.
**Step 2 :** Every house with only one incoming and no outgoing pipe gets a tap.
The Geek council has proposed a network of pipes where connections are denoted by three input values: ai, bi, di denoting the pipe of diameter di from house ai to house bi.
**Step 3 :** Find a more efficient way for the construction of this network of pipes. Minimize the diameter of pipes wherever possible.
Note: The generated output will have the following format. The first line will contain t, denoting the total number of pairs of tanks and taps installed. The next t lines contain three integers each: house number of tank, house number of tap, and the minimum diameter of pipe between them.



### Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```python
class Solution:
    def canMeasureWater(self, jug1Capacity: int, jug2Capacity: int, targetCapacity: int) -> bool:

        seen = set()

        def dfs(tot):
            if tot == targetCapacity:
                return True
            if tot in seen or tot < 0 or tot > jug1Capacity + jug2Capacity:
                return False
            
            seen.add(tot)

            return dfs(tot+jug1Capacity) or dfs(tot-jug1Capacity) or dfs(tot+jug2Capacity) or dfs(tot-jug2Capacity)
        
        return dfs(0)
  ```
  </TabItem>

  <TabItem value="C++" label="C++" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```cpp
class Solution {
public:
    bool canMeasureWater(int jug1Capacity, int jug2Capacity, int targetCapacity) {
     int x = gcd(jug1Capacity,jug2Capacity) ;
     if(jug1Capacity+ jug2Capacity < targetCapacity) return false;
     if(targetCapacity % x == 0 ) return true ;
     return false ;
    }
};
  ```
  </TabItem>
</Tabs>

## Solution Logic
To solve the problem of determining if it is possible to measure exactly targetCapacity liters using two jugs with capacities jug1Capacity and jug2Capacity, we can use mathematical reasoning involving the greatest common divisor (GCD). Here are the steps involved in the solution logic:

**1.Calculate the Greatest Common Divisor (GCD):** Compute the GCD of the two jug capacities, jug1Capacity and jug2Capacity. The GCD is the largest integer that divides both numbers without leaving a remainder.
**2.Check if Total Capacity is Less Than Target:** If the sum of the two jug capacities (jug1Capacity + jug2Capacity) is less than the targetCapacity, return false. This is because even if we fill both jugs to their maximum, we still cannot reach the targetCapacity.
**3.Check Divisibility by GCD:** Check if the targetCapacity is divisible by the GCD. If targetCapacity % GCD == 0, return true. This is because if targetCapacity is a multiple of the GCD of the two jug capacities, it is possible to measure exactly targetCapacity liters using the two jugs. This stems from a property of the GCD which states that any linear combination of the two numbers (with integer coefficients) can be written as a multiple of their GCD.
**Default Case:** If none of the above conditions are met, return false.
The algorithm is based on the mathematical fact derived from Bezout's identity which states that the equation `𝑎𝑥 + 𝑏𝑦 = 𝑑` has a solution if and only if `d` (the GCD of `a` and `b`) divides `c`.
This logic ensures that the solution is efficient and correct, leveraging properties of number theory to make the determination.
## Time Complexity

$O(n+p)$

## Space Complexity

$O(n+p)$

## Resources

- **GFG Problem:** [GFG Problem](https://www.geeksforgeeks.org/problems/water-connection-problem5822/)
- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/water-and-jug-problem/)
- **Author's Geeks for Geeks Profile:**  | [DaminiChachane](https://leetcode.com/u/divcxl15/) |

This format ensures that all necessary details about the problem and its solution are clearly presented and easy to follow.
