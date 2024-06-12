---
id: Kadanes-Algorithm
title: Kadanes Algorithm
sidebar_label: KadanesAlgorithm
sidebar_position: 2
description: "Kadane's Algorithm efficiently finds the maximum sum contiguous subarray in a one-dimensional array. It's a dynamic programming technique named after its creator, Jay Kadane."
---
## Kadane's Algorithm:

- **Purpose**: Finds the maximum sum of a contiguous subarray.
- **Time Complexity**: $O(n)$
- **Space Complexity**: O(1)
- **Use Case**: Optimal for solving maximum subarray sum problems in linear time.
### Simple Explanation
Kadane's Algorithm:

1. **Initialize**:
   - Set `maxSum` to a very small number (e.g., negative infinity).
   - Set `currentSum` to 0.

2. **Iterate Through the Array**:
   - For each element in the array:
     - Add the element to `currentSum`.
     - Update `maxSum` if `currentSum` is greater than `maxSum`.
     - If `currentSum` becomes negative, reset it to 0.

3. **Result**:
   - The value of `maxSum` at the end of the iteration is the maximum sum of any contiguous subarray.
### Code

Input: arr = {-2,-3,4,-1,-2,1,5,-3}

Output: 7

Explanation: The subarray {4,-1, -2, 1, 5} has the largest sum 7.

### Python
```py

    def max_sub_array(nums):
          max_sum = float('-inf')
          current_sum = 0
    
         for num in nums:
            # Add the current number to the current_sum
            current_sum += num
            # Update max_sum if current_sum is greater
            max_sum = max(max_sum, current_sum)
            # Reset current_sum to 0 if it drops below 0
            if current_sum < 0:
                current_sum = 0
            
         return max_sum
```

### C++
```cpp
    // Kadane's Algorithm to find the maximum sum of a contiguous subarray

    #include <iostream>
    #include <vector>
    #include <algorithm>
    #include <climits>

    int maxSubArray(const std::vector<int>& nums) {
    // Initialize max_sum to the lowest possible value and current_sum to 0
    int max_sum = INT_MIN;
    int current_sum = 0;

    for (int num : nums) {
        // Add the current number to the current_sum
        current_sum += num;
        // Update max_sum if current_sum is greater
        max_sum = std::max(max_sum, current_sum);
        // Reset current_sum to 0 if it drops below 0
        if (current_sum < 0) {
            current_sum = 0;
        }
    }

    return max_sum;
    }
```

### Explanation
Explanation:

#### Initialization:

  -`max_sum` is initialized to `INT_MIN` to handle arrays with all negative numbers.

  -`current_sum` starts at `0`.

#### Iteration:

  -Traverse through each number in the array:
  
  -Add the number to `current_sum`.

  -Update `max_sum` to be the maximum of `max_sum` and `current_sum`.

  -If `current_sum` becomes negative, reset it to `0` to start a new subarray.


