---

id: maximize happiness of selected children
title: Maximize Happiness of Selected Children
sidebar_label: 3075-maximize happiness of selected children
tags:
- Array
- Greedy
- Sorting
- Java
- Cpp
- Python
description: "Given an array of happiness values, return the maximum sum of happiness values by selecting k children."
---

## Problem Description

You are given an array happiness of length n, and a positive integer k.

There are n children standing in a queue, where the i-th child has a happiness value happiness[i]. You want to select k children from these n children in k turns.

In each turn, when you select a child, the happiness value of all the children that have not been selected till now decreases by 1. Note that the happiness value cannot become negative and gets decremented only if it is positive.

Return the maximum sum of the happiness values of the selected children you can achieve by selecting k children.

### Examples

**Example 1:**
```
Input: happiness = [1, 2, 3], k = 2  
Output: 4  
Explanation:  
We can pick 2 children in the following way:
- Pick the child with the happiness value == 3. The happiness value of the remaining children becomes [0, 1].
- Pick the child with the happiness value == 1. The happiness value of the remaining child becomes [0]. Note that the happiness value cannot become less than 0.  
The sum of the happiness values of the selected children is 3 + 1 = 4.
```

**Example 2:**
```
Input: happiness = [1, 1, 1, 1], k = 2  
Output: 1  
Explanation:  
We can pick 2 children in the following way:
- Pick any child with the happiness value == 1. The happiness value of the remaining children becomes [0, 0, 0].
- Pick the child with the happiness value == 0. The happiness value of the remaining child becomes [0, 0].  
The sum of the happiness values of the selected children is 1 + 0 = 1.
```
**Example 3:**

```
Input: happiness = [2, 3, 4, 5], k = 1  
Output: 5  
Explanation:  
We can pick 1 child in the following way:
- Pick the child with the happiness value == 5. The happiness value of the remaining children becomes [1, 2, 3].  
The sum of the happiness values of the selected children is 5.
```

### Constraints

- `1 <= n == happiness.length <= 200,000`
- `1 <= happiness[i] <= 100,000,000`
- `1 <= k <= n`


## Approach

To maximize the sum of happiness values of the selected children, we need to adopt a greedy approach by selecting the children with the highest current happiness values first. Each time a child is selected, the happiness values of the remaining children will decrease by 1, but they cannot go below 0. Sorting the array helps us efficiently pick the highest values while considering the decrement effect.

### Steps:

1. **Sort the Array:** Sort the array in ascending order so that the highest values can be accessed from the end.
2. **Iterate and Select Children:** Initialize a variable `ans` to store the sum of selected happiness values. Iterate `k` times, selecting the highest available happiness value and considering the decrement effect on remaining children.
3. **Sum the Values:** For each selection, add the current maximum value (adjusted for the decrements) to `ans`.
4. **Break Condition:** If the adjusted happiness value of the current selection is non-positive, break out of the loop as selecting further would not contribute to the sum.

## Solution

#### Java Solution

```java
import java.util.Arrays;

class Solution {
    public long maximumHappinessSum(int[] happiness, int k) {
        long ans = 0;
        Arrays.sort(happiness);  // Step 1: Sort the array
        for (int i = 0; i < k; i++) {
            int currentHappiness = happiness[happiness.length - 1 - i] - i;  // Step 2: Adjust for decrement
            if (currentHappiness > 0) {
                ans += currentHappiness;  // Step 3: Add to the answer
            } else {
                break;  // Step 4: Break if no positive happiness value
            }
        }
        return ans;
    }
}
```

#### C++ Solution

```cpp
class Solution {
public:
    long long maximumHappinessSum(vector<int>& happiness, int k) {
       long long ans = 0;
        std::sort(happiness.begin(), happiness.end());  // Step 1: Sort the array
        for (int i = 0; i < k; i++) {
            int currentHappiness = happiness[happiness.size() - 1 - i] - i;  // Step 2: Adjust for decrement
            if (currentHappiness > 0) {
                ans += currentHappiness;  // Step 3: Add to the answer
            } else {
                break;  // Step 4: Break if no positive happiness value
            }
        }
        return ans; 
    }
};
```

#### Python Solution

```python
class Solution(object):
    def maximumHappinessSum(self, happiness, k):
        """
        :type happiness: List[int]
        :type k: int
        :rtype: int
        """
        happiness.sort()  # Step 1: Sort the array
        ans = 0
        for i in range(k):
            current_happiness = happiness[-1 - i] - i  # Step 2: Adjust for decrement
            if current_happiness > 0:
                ans += current_happiness  # Step 3: Add to the answer
            else:
                break  # Step 4: Break if no positive happiness value
        return ans
```

### Complexity Analysis

**Time Complexity:** O(n log n)
> Sorting the array takes O(n log n) time, and iterating over the array to calculate the sum of happiness values takes O(k), which is dominated by the sorting step.

**Space Complexity:** O(1)
> The algorithm uses a constant amount of extra space beyond the input array.

### References
**LeetCode Problem:** Maximize Happiness of Selected Children
