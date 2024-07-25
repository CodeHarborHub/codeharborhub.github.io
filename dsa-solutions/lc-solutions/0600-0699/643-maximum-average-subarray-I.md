---
id: maximum-average-subarray-1
title: Maximum Average Subarray I (Leetcode)
sidebar_label: 0643-MaximumAverageSubarrayI
description: You are given an integer array nums consisting of n elements, and an integer k.Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/description/) | [Maximum Average Subarray I Solution on LeetCode](https://leetcode.com/problems/maximum-average-subarray-i/solutions) |  [Aaradhya Singh ](https://leetcode.com/u/keira_09/) |


## Problem Description

You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

### Examples

#### Example 1

- **Input:** $nums = [1,12,-5,-6,50,3], k = 4$
- **Output:** $12.75000$
- **Explanation:** Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75


#### Example 2

- **Input:** $nums = [5], k = 1$
- **Output:** $5.00000$

### Constraints

- $n == nums.length$
- $1 <= k <= n <= 105$
- $-104 <= nums[i] <= 104$


### Intuition

The goal of this code is to find the maximum average value of any contiguous subarray of length k within the given array nums. The solution uses a sliding window approach to efficiently compute the sum of elements for each subarray of length k. Initially, it calculates the sum of the first k elements. Then, for each subsequent subarray, it adjusts the sum by adding the next element in the sequence and subtracting the first element of the previous subarray, thereby maintaining a running sum. This approach ensures that the sum is recalculated in constant time, making the algorithm efficient. The maximum sum encountered is then divided by k to obtain the maximum average.


### Approach

1. **Initialization:**

- Create a variable result to store the maximum average.
- Create a variable number and initialize it to the lowest possible double value using `std::numeric_limits<double>::lowest()`.
- Create a variable temp to keep track of the current sum of the subarray of length k.
- Create a variable n and set it equal to k.

2. **Calculate Initial Sum:**

- Iterate through the first k elements of the array nums and calculate their sum. Store this sum in temp.

3. **Sliding Window Calculation:**

- Use a for loop to iterate through the array starting from the element at index k.
- For each iteration, update temp by adding the current element (nums[i + k - 1]) and subtracting the element that is no longer in the subarray (nums[i - 1]).
- Update number to be the maximum of temp and number.

4. **Calculate Maximum Average:**

- Divide number by k to get the maximum average of any subarray of length k.

5. **Return Result:**

- Return result, which now holds the maximum average.

### Solution Code

#### Python

```py
import math

class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        result = 0.0
        number = -math.inf
        temp = 0.0
        n = k
        
        # Calculate the initial sum of the first k elements
        for i in range(k):
            temp += nums[i]
        
        number = max(temp, number)
        
        # Sliding window calculation
        for i in range(1, len(nums) - k + 1):
            temp = temp + nums[i + k - 1] - nums[i - 1]
            number = max(temp, number)
        
        result = number / k
        return result
```

#### Java

```java
public class Solution {
    public double findMaxAverage(int[] nums, int k) {
        double result = 0.0;
        double number = Double.NEGATIVE_INFINITY;
        double temp = 0.0;
        int n = k;

        // Calculate the initial sum of the first k elements
        for (int i = 0; i < k; i++) {
            temp += nums[i];
        }

        number = Math.max(temp, number);

        // Sliding window calculation
        for (int i = 1; i <= nums.length - k; i++) {
            temp = temp + nums[i + k - 1] - nums[i - 1];
            number = Math.max(temp, number);
        }

        result = number / (double) k;
        return result;
    }
}
```

#### C++

```cpp
#include <limits>
class Solution {
public:
    double findMaxAverage(vector<int>& nums, int k) {
      double result;
      double number = std::numeric_limits<double>::lowest();
      double temp = 0;
      int n = k;

      for (int i = 0; i <= nums.size() - k ; ++i){
        if (i == 0) {
        while (n != 0) {
        temp += nums[i + n - 1] ;
        n--;
        }
        }

        else {temp = temp + nums[i + k - 1] - nums[i - 1];}
        number = max(temp , number);
      }
      
      result = number / static_cast<double>(k);
      return result;  
    }
};
```

### Conclusion

The provided code implements a solution to find the maximum average of any contiguous subarray of length k within the given array nums. It employs a sliding window approach to efficiently compute the sum of elements for each subarray. The algorithm iterates through the array once, updating the sum and maximum average as it progresses. The time complexity of the solution is $O(n)$, where nn is the number of elements in the array nums, as it makes a single pass through the array. The space complexity is $O(1)$ since the algorithm uses only a constant amount of extra space regardless of the input size.