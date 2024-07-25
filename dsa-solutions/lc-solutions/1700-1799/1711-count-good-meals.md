---
id: count-good-meals
title: Count Good Meals
sidebar_label: 1711. Count Good Meals
tags: [Array, Simulation, C++, Python, Java]
description: "This is a solution to the Count Good Meals problem on LeetCode."
---

## Problem Description

A good meal is a meal that contains exactly two different food items with a sum of deliciousness equal to a power of two.

You can pick any two different foods to make a good meal.

Given an array of integers `deliciousness` where `deliciousness[i]` is the deliciousness of the `i​​​​​​th​​​​​​​​` item of food, return the number of different good meals you can make from this list modulo `10^9 + 7`.

Note that items with different indices are considered different even if they have the same deliciousness value.

### Examples

**Example 1:**

```
Input: deliciousness = [1,3,5,7,9]
Output: 4
Explanation: The good meals are (1,3), (1,7), (3,5) and, (7,9).
Their respective sums are 4, 8, 8, and 16, all of which are powers of 2.

```

**Example 2:**

```
Input: deliciousness = [1,1,1,3,3,3,7]
Output: 15
Explanation: The good meals are (1,1) with 3 ways, (1,3) with 9 ways, and (1,7) with 3 ways.

```

### Constraints

- `1 <= deliciousness.length <= 10^5`
- `0 <= deliciousness[i] <= 2^20`

## Solution for 1711. Count Good Meals


### Intuition

Each box takes the same amount of space on the truck. To maximize the total units on the truck, we want to prioritize boxes with more units in them. Let's put the boxes with the most units first. This suggests a greedy solution.

### Implementation

1. Sort boxTypes so that boxes with the most units appear first.
2. Iterate through the boxes in sorted order.
3. Instead of counting down one by one how many boxes to take, we can calculate how many boxes of 
   the current type to take by taking min(truckSize, numberOfBoxes). This is because the truck can fit at most truckSize more boxes, but we have numberOfBoxes left.
4. Decrease the remaining truckSize by subtracting the number of boxes we included.

### Code in Different Languages

<Tabs>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@agarwalhimanshugaya"/>
   ```python
           class Solution:
    def countPairs(self, deliciousness: List[int]) -> int:
        result = 0
        hm = Counter()
        for num in deliciousness:
            for i in range(22): result += hm[2**i-num]
            hm[num] += 1
        return result % ((10 ** 9) + 7)
    ```
  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@agarwalhimanshugaya"/>
   ```java
         class Solution {
    int mod = 1000000007;
    public int countPairs(int[] arr) {
        Map<Integer, Integer> map = new HashMap<>();
        int n = arr.length;
        long res = 0;
        for (int num : arr) {
            int power = 1;
            for (int i = 0; i < 22; i++) {
                if (map.containsKey(power - num)) {
                    res += map.get(power - num);
                    res %= mod;
                }
                power *= 2;
            }
            map.put(num, map.getOrDefault(num, 0) + 1);
        }
        return (int) res;
    }
}
    ```
  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@agarwalhimanshugaya"/>
   ```cpp

        class Solution {
     public:
    int countPairs(vector<int>& a) {
        unordered_map<int,int> lks;
        long long ans=0;
        for(int x : a){
            for(int i=1;i<=(1<<22);i*=2){
                if(lks.count(i-x)) ans+=lks[i-x];
            }
            lks[x]+=1;
        }
        return ans % (int)(1e9 + 7);
    }
 };

```
</TabItem>
</Tabs>

### Complexity Analysis

- Time Complexity: $ O(N) $
- Space Complexity: $ O(1)$

## References

- **LeetCode Problem**: [Count Good Meals](https://leetcode.com/problems/count-good-meals/description/)
- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/count-good-meals/solutions/)
