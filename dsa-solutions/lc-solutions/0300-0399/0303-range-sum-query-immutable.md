---
id: range-sum-query-immutable
title: Range Sum Query - Immutable (LeetCode)
sidebar_label: 0303-RangeSumQueryImmutable
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Merge Two Sorted Lists](https://leetcode.com/problems/range-sum-query-immutable/) | [Merge Two Sorted Lists Solution on LeetCode](https://leetcode.com/problems/range-sum-query-immutable/solutions/) |  [VijayShankerSharma](https://leetcode.com/u/darkknight648/) |

## Problem Description

Given an integer array nums, handle multiple queries of the following type:

Calculate the sum of the elements of nums between indices left and right inclusive where $left <= right$.

Implement the NumArray class:

- `NumArray(int[] nums)`: Initializes the object with the integer array nums.
- `int sumRange(int left, int right)`: Returns the sum of the elements of nums between indices left and right inclusive (i.e., nums[left] + nums[left + 1] + ... + nums[right]).

### Example

#### Example 1:

**Input:**
["NumArray", "sumRange", "sumRange", "sumRange"]
[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]

**Output:**
[null, 1, -1, -3]

**Explanation:**

NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3


### Constraints

- $1 <= \text{nums.length} <= 10^4$
- $-10^5 <= \text{nums[i]} <= 10^5$
- $0 <= \text{left} <= \text{right} < \text{nums.length}$
- At most $10^4$ calls will be made to sumRange.

## Approach

To efficiently handle multiple queries of summing elements within a range, we can precompute the cumulative sum array (prefix sum array). The cumulative sum array cumSum stores the sum of elements up to index i from the beginning of the input array. Then, to calculate the sum between any two indices left and right, we simply return cumSum[right] - cumSum[left-1], handling the edge case when left is 0.

### Implementation Steps:

1. Initialize an array cumSum of the same length as the input nums.
2. Initialize cumSum[0] as nums[0].
3. Iterate from index 1 to the end of nums:
   - Update cumSum[i] = cumSum[i-1] + nums[i].
4. To calculate the sum between `left` and right, return cumSum[right] - cumSum[left-1] (if left > 0) or cumSum[right] (if left = 0).

## Solution Code

#### Python

```py
class NumArray:
    def __init__(self, nums):
        self.prefix_sum = [0] * (len(nums) + 1)
        for i in range(len(nums)):
            self.prefix_sum[i + 1] = self.prefix_sum[i] + nums[i]

    def sumRange(self, left, right):
        return self.prefix_sum[right + 1] - self.prefix_sum[left]
```

#### Java

```java
class NumArray {
    int[] cumSum;

    public NumArray(int[] nums) {
        cumSum = new int[nums.length];
        cumSum[0] = nums[0];
        for (int i = 1; i < nums.length; i++) {
            cumSum[i] = cumSum[i - 1] + nums[i];
        }
    }

    public int sumRange(int left, int right) {
        return cumSum[right] - (left > 0 ? cumSum[left - 1] : 0);
    }
}
```

#### C++

```cpp
class NumArray {
private:
    vector<int> cumSum;
    
public:
    NumArray(vector<int>& nums) {
        cumSum.resize(nums.size());
        cumSum[0] = nums[0];
        for (int i = 1; i < nums.size(); i++) {
            cumSum[i] = cumSum[i - 1] + nums[i];
        }
    }
    
    int sumRange(int left, int right) {
        return cumSum[right] - (left > 0 ? cumSum[left - 1] : 0);
    }
};
```

## Conclusion

The "Range Sum Query - Immutable" problem can be efficiently solved using a cumulative sum array. By precomputing the cumulative sum of elements up to each index, we can handle multiple queries of summing elements within a range with constant time complexity. The provided solution code implements this approach in Python, Java, and C++, providing an optimal solution to the problem.
