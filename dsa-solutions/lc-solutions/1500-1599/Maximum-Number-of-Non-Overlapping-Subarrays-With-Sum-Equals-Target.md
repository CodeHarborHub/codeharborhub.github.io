---
id: maximum-number-of-non-overlapping-subarrays-with-sum-equals-target
title: Maximum Number of Non-Overlapping Subarrays With Sum Equals Target
sidebar_label: 1546 - Maximum Number of Non-Overlapping Subarrays With Sum Equals Target
tags: [Subarrays, Array, Target, Sum, C++]
description: Given an array nums and an integer target, return the maximum number of non-empty non-overlapping subarrays such that the sum of values in each subarray is equal to target.
---

## Maximum Number of Non-Overlapping Subarrays With Sum Equals Target

### Problem Statement
Given an array `nums` and an integer `target`, return the maximum number of non-empty non-overlapping subarrays such that the sum of values in each subarray is equal to `target`.

### Example 1:
**Input:** nums = [1, 1, 1, 1, 1], target = 2  
**Output:** 2  
**Explanation:** There are 2 non-overlapping subarrays [1, 1, 1, 1, 1] with sum equal to `target` (2).

### Example 2:
**Input:** nums = [-1, 3, 5, 1, 4, 2, -9], target = 6  
**Output:** 2  
**Explanation:** There are 3 subarrays with sum equal to 6 ([5, 1], [4, 2], [3, 5, 1, 4, 2, -9]) but only the first 2 are non-overlapping.

### Constraints

- `1 &lt;= nums.length &lt;= 10^5`
- `-10^4 &lt;= nums[i] &lt;= 10^4`
- `0 &lt;= target &lt;= 10^6`

### Intuition

The goal of the solution is to find the maximum number of non-overlapping subarrays such that the sum of values in each subarray is equal to a given target. Here's the step-by-step intuition behind the algorithm:

1. **Prefix Sum and Hash Map**: The algorithm uses a prefix sum approach where it maintains a running sum (`sum`) of the elements as it iterates through the array. It also uses a hash map (`mp`) to store the index of each prefix sum encountered.

2. **Check for Target Sum**: At each index `i`, the algorithm checks if there exists a previous prefix sum that when subtracted from the current prefix sum results in the target. This is achieved by checking if `sum - target` exists in the hash map.

3. **Update Answer and Maintain Non-Overlapping Property**: If such a prefix sum is found and the subarray formed by this prefix sum is non-overlapping with previous subarrays (ensured by checking if the stored index is greater than or equal to `pre`), then it increments the answer count (`ans`) and updates the `pre` index to the current index `i`.

4. **Update Hash Map**: Finally, it updates the hash map with the current prefix sum and its index.

### Time Complexity

The time complexity of the algorithm is $O(n)$, where $n$ is the length of the input array `nums`. This is because:

- **Single Pass Through Array**: The algorithm iterates through the array once. Each element is processed exactly one time in a single loop from start to finish.
- **Constant-Time Operations**: During each iteration, the algorithm performs operations such as updating the running sum, checking if a key exists in the hash map, and updating the hash map. These operations (lookup and insertion in the hash map) are average $O(1)$ operations.

Combining these factors, the overall time complexity is $O(n)$.

### Space Complexity

The space complexity of the algorithm is $O(n)$ in the worst case. This is because:

- **Hash Map Storage**: The algorithm uses a hash map to store prefix sums and their corresponding indices. In the worst case, where all elements in the array are unique and result in different prefix sums, the hash map could store up to $n$ entries (one for each element in the array).
- **Additional Variables**: The algorithm uses a few additional variables (`pre`, `ans`, and `sum`), but these use constant space, $O(1)$, and do not depend on the input size.

Thus, the dominating factor for space complexity is the hash map, leading to an overall space complexity of $O(n)$.

### Code

#### C++
```
class Solution {
public:
    int maxNonOverlapping(vector<int>& nums, int target) {
        unordered_map<int, int> mp; // Hash map to store prefix sums and their indices
        int n = nums.size();
        mp[0] = -1; // Initialize with prefix sum 0 at index -1
        int pre = -1; // Variable to track the end index of the last added subarray
        int ans = 0; // Variable to count the number of valid subarrays
        int sum = 0; // Variable to store the running sum (prefix sum)

        for (int i = 0; i < n; i++) {
            sum += nums[i]; // Update the running sum
            // Check if there exists a prefix sum that forms a subarray with the target sum
            if (mp.find(sum - target) != mp.end() && mp[sum - target] >= pre) {
                ans++; // Increment the count of valid subarrays
                pre = i; // Update the end index of the last added subarray
            }
            mp[sum] = i; // Store the current prefix sum with its index in the hash map
        }
        return ans; // Return the count of non-overlapping subarrays with sum equal to target
    }
};
```
