---
id: maximize-sum-of-array-after-k-negations
title: Maximize Sum of Array After K Negations
sidebar_label: 1005-Maximize Sum of Array After K Negations
tags:
  - Array
  - Greedy
  - LeetCode
  - Java
  - Python
  - C++
description: "This is a solution to the Maximize Sum After K Negations problem on LeetCode."
sidebar_position: 20
---

## Problem Description

Given an integer array `nums` and an integer `k`, modify the array in the following way:

choose an index `i` and replace `nums[i]` with `-nums[i]`. You should apply this process exactly `k` times. You may choose the same index `i` multiple times.

Return the largest possible sum of the array after modifying it in this way.

### Examples

**Example 1:**

```
Input: nums = [4,2,3], k = 1
Output: 5
Explanation: Choose index 1 and nums becomes [4,-2,3].
```

**Example 2:**

```
Input: nums = [3,-1,0,2], k = 3
Output: 6
Explanation: Choose indices (1, 2, 2) and nums becomes [3,1,0,2].
```

**Example 3:**

```
Input: nums = [2,-3,-1,5,-4], k = 2
Output: 13
Explanation: Choose indices (1, 4) and nums becomes [2,3,-1,5,4].
```

### Constraints

- `1 <= nums.length <= 10^4`
- `-100 <= nums[i] <= 100`
- `1 <= k <= 10^4`

---

## Solution for Largest Sum After K Negations Problem

To solve this problem, we should follow a greedy approach by repeatedly negating the smallest element in the array, as this will maximize the sum after `k` operations.

### Approach

1. **Sort the Array:**
   - Sort the array to bring all the negative numbers to the front.

2. **Negate the Minimum Element:**
   - Iterate through the array and negate the smallest elements (negative numbers) first.
   - If there are still operations left after negating all negative numbers, use the remaining operations on the smallest absolute value element.

3. **Handle Remaining Operations:**
   - If `k` is still greater than 0 after negating all negative numbers, continue to negate the smallest absolute value element until `k` becomes 0.

### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    int largestSumAfterKNegations(vector<int>& nums, int k) {
        sort(nums.begin(), nums.end());
        for (int i = 0; i < nums.size() && k > 0; ++i) {
            if (nums[i] < 0) {
                nums[i] = -nums[i];
                --k;
            }
        }
        if (k % 2 == 1) {
            *min_element(nums.begin(), nums.end()) *= -1;
        }
        return accumulate(nums.begin(), nums.end(), 0);
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public int largestSumAfterKNegations(int[] nums, int k) {
        Arrays.sort(nums);
        for (int i = 0; i < nums.length && k > 0; ++i) {
            if (nums[i] < 0) {
                nums[i] = -nums[i];
                --k;
            }
        }
        int min = Arrays.stream(nums).min().getAsInt();
        if (k % 2 == 1) {
            for (int i = 0; i < nums.length; ++i) {
                if (nums[i] == min) {
                    nums[i] = -nums[i];
                    break;
                }
            }
        }
        return Arrays.stream(nums).sum();
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def largestSumAfterKNegations(self, nums: List[int], k: int) -> int:
        nums.sort()
        for i in range(len(nums)):
            if nums[i] < 0 and k > 0:
                nums[i] = -nums[i]
                k -= 1
        if k % 2 == 1:
            nums[nums.index(min(nums))] *= -1
        return sum(nums)
```

</TabItem>
</Tabs>

#### Complexity Analysis

- **Time Complexity**: $O(n \log n)$, where `n` is the length of the array. This is due to the sorting step.
- **Space Complexity**: $O(1)$, as we are modifying the array in place.

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['ImmidiSivani'].map(username => (
 <Author key={username} username={username} />
))}
</div>
```
