---
id: gas-station
title: Gas Station
sidebar_label: 0134-Gas station
tags:
  - string
  - DP
  - BackTracking
description: "This is a solution to the Gas station problem on LeetCode."
---

## Problem Description

There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next $(i + 1)^{th}$ station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique

 
 
### Examples

**Example 1:**
```
Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
Output: 3
Explanation:
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.
```
**Example 2:**
```
Input: gas = [2,3,4], cost = [3,4,3]
Output: -1
Explanation:
You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 0. Your tank = 4 - 3 + 2 = 3
Travel to station 1. Your tank = 3 - 3 + 3 = 3
You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
Therefore, you can't travel around the circuit once no matter where you start.
```

### Constraints:


- $n == \text{gas.length} == \text{cost.length}$
- $1 \leq \text{n} \leq 105$
- $0 \leq \text{gas[i], cost[i]} \leq 104$
---

## Approach to Solve the Gas Station Problem

To determine the starting gas station index from which you can complete a circuit around the gas stations, follow these steps:

### Approach

1. **Check Feasibility:**
   - Compute the total amount of gas available and the total cost required to travel around the circuit.
   - If the total gas is less than the total cost, return `-1` because completing the circuit is impossible.

2. **Find the Starting Point:**
   - Initialize a variable to track the current gas balance and another to track the potential starting station.
   - Traverse through the gas stations:
     - Update the current gas balance by subtracting the travel cost from the gas available.
     - If the gas balance goes negative, it means the current start station cannot lead to a successful trip. Update the start station to the next station and reset the gas balance.

3. **Return the Result:**
   - After traversing all stations, the index stored for the start station will be the valid starting point, if there is one.

#### Code in Different Languages

### C++
```c++
class Solution {
public:
    int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {
        ios_base::sync_with_stdio(false);
        cin.tie(NULL);
        int n = cost.size(), bal = 0, start = 0, deficit = 0;

        for(int i = 0; i< n; i++){
            bal += gas[i] - cost[i];

            if(bal < 0){

                deficit += bal;
                start = i+1;
                bal = 0;
            }
        }
        return bal + deficit >= 0 ? start : -1;
    }
};
```

### Java 
```java
class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        int sGas = 0, sCost = 0, res = 0, total = 0;
        for (int i = 0; i < gas.length; i++) {
            sGas += gas[i];
            sCost += cost[i];
        }
        if (sGas < sCost) return -1;
        for (int i = 0; i < gas.length; i++) {
            total += gas[i] - cost[i];
            if (total < 0) {
                total = 0;
                res = i + 1;
            }
        }
        return res;
    }
}
```
### Python
```python
class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        if sum(gas) < sum(cost): return -1
        tank = idx = 0
        for i in range(len(gas)):
            tank+= gas[i]-cost[i] 
            if tank < 0: tank, idx = 0, i+1
        return idx 

        print(f"cost: {cost}")
        print(f"gas: {gas}")
        tank = 0
        for i in range(len(cost)):
            # find where we can start
            if cost[i] > gas[i]+tank:
                continue
            start = i    
            tank += gas[i]
            print("tank", tank)
            for j in range(start+1, len(cost)):
                if cost[i] > gas[i]:
                    print("inside", j)
        return -1
```


### Complexity

- **Time Complexity:** $O(n)$ - A single pass through the gas stations.
- **Space Complexity:** $O(1)$ - Constant space usage.

### Summary

This approach efficiently determines the valid starting gas station index by checking if the total gas is sufficient and then finding the correct start index through a linear pass.

