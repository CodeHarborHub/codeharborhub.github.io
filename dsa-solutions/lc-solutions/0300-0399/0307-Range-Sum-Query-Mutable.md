---
id: range-sum-query-mutable
title: Range Sum Query - Mutable (LeetCode)
sidebar_label: 0307-Range Sum Query - Mutable
tags:
  - Array
  - Design
  - Binary Indexed Tree
  - Segment Tree
description: This is the solution of question Range Sum query - Mutable on leetcode
sidebar_position: 0307
---

## Problem Description

Given an integer array nums, handle multiple queries of the following types:

1. Update the value of an element in nums.
2.Calculate the sum of the elements of nums between indices left and right inclusive where `left <= right`.
3. Implement the NumArray class:

`NumArray(int[] nums)` Initializes the object with the integer array nums.
`void update(int index, int val) Updates the value of nums[index] to be val`.
`int sumRange(int left, int right)` Returns the sum of the elements of nums between indices left and right inclusive `(i.e. nums[left] + nums[left + 1] + ... + nums[right])`.

### Example 1
```
Input
["NumArray", "sumRange", "update", "sumRange"]
[[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]
Output
[null, 9, null, 8]

Explanation
NumArray numArray = new NumArray([1, 3, 5]);
numArray.sumRange(0, 2); // return 1 + 3 + 5 = 9
numArray.update(1, 2);   // nums = [1, 2, 5]
numArray.sumRange(0, 2); // return 1 + 2 + 5 = 8

```

### Constraints

- `1 <= nums.length <= 3 * 10^4`
- `-100 <= nums[i] <= 100`
- `0 <= index < nums.length`
- `-100 <= val <= 100`
- `0 <= left <= right < nums.length`
- `At most 3 * 104 calls will be made to update and sumRange`

## Approach

- This is a classic Dynamic Range Sum Query problem, to query sum in range efficiently where 
  elements can be updated dynamically.
- This problem can be solved in various approaches such as: Segment Tree, BIT, Sqrt Decomposition...
  In this post, I use Binary Indexed Tree (BIT) structure because it's easy to implement and it has high performance.
- In BIT structure, there are 2 basic operations:
  `addValue(idx, value)`: Add an amount of value into element at index idx `(1-based indexing)`, `time: O(logN)`
`getSum(idx): Get sum in range [0..idx] (1-based indexing), time: O(logN)`

### Solution Code

#### C++

```c++
class BIT { // One-based indexing
    vector<int> bit;
public:
    BIT(int size=0) {
        bit.assign(size + 1, 0);
    }
    int getSum(int idx) { // Get sum in range [1..idx]
        int sum = 0;
        for (; idx > 0; idx -= idx & (-idx))
            sum += bit[idx];
        return sum;
    }
    void addValue(int idx, int val) {
        for (; idx < bit.size(); idx += idx & (-idx))
            bit[idx] += val;
    }
};
class NumArray {
    BIT bit;
    vector<int> nums;
public:
    NumArray(vector<int>& nums) {
        this->bit = BIT(nums.size());
        this->nums = nums;
        for (int i = 0; i < nums.size(); ++i)
            bit.addValue(i+1, nums[i]);
    }
    void update(int index, int val) {
        int diff = val - nums[index]; // get diff amount of `val` compared to current value
        bit.addValue(index + 1, diff); // add this `diff` amount at index `index+1` of BIT, plus 1 because in BIT it's 1-based indexing
        nums[index] = val; // update latest value of `nums[index]`
    }
    int sumRange(int left, int right) {
        return bit.getSum(right+1) - bit.getSum(left);
    }
};
```

#### Java
```java
class BIT { // one-based indexing
    int[] bit;
    BIT(int size) {
        bit = new int[size + 1];
    }
    int getSum(int idx) { // Get sum in range [1..idx]
        int sum = 0;
        for (; idx > 0; idx -= idx & (-idx))
            sum += bit[idx];
        return sum;
    }
    int getSumRange(int left, int right) { // left, right inclusive
        return getSum(right) - getSum(left - 1);
    }
    void addValue(int idx, int val) { 
        for (; idx < bit.length; idx += idx & (-idx))
            bit[idx] += val;
    }
}
class NumArray {
    BIT bit;
    int[] nums;
    public NumArray(int[] nums) {
        this.nums = nums;
        bit = new BIT(nums.length);
        for (int i = 0; i < nums.length; ++i)
            bit.addValue(i+1, nums[i]);
    }
    public void update(int index, int val) {
        int diff = val - nums[index]; // get diff amount of `val` compared to current value
        bit.addValue(index + 1, diff); // add this `diff` amount at index `index+1` of BIT, plus 1 because in BIT it's 1-based indexing
        nums[index] = val; // update latest value of `nums[index]`
    }
    public int sumRange(int left, int right) {
        return bit.getSum(right+1) - bit.getSum(left);
    }
}
```

#### Python
```python
class BIT:
    def __init__(self, size):
        self.bit = [0] * (size + 1)

    def getSum(self, idx):  # Get sum in range [1..idx], 1-based indexing
        s = 0
        while idx > 0:
            s += self.bit[idx]
            idx -= idx & (-idx)
        return s

    def getSumRange(self, left, right):  # left, right inclusive, 1-based indexing
        return self.getSum(right) - self.getSum(left - 1)

    def addValue(self, idx, val):  # 1-based indexing
        while idx < len(self.bit):
            self.bit[idx] += val
            idx += idx & (-idx)

class NumArray:

    def __init__(self, nums: List[int]):
        self.nums = nums
        self.bit = BIT(len(nums))
        for i, v in enumerate(nums):
            self.bit.addValue(i+1, v)

    def update(self, index: int, val: int) -> None:
        diff = val - self.nums[index]  # get diff amount of `val` compared to current value
        self.bit.addValue(index+1, diff)  # add this `diff` amount at index `index+1` of BIT, plus 1 because in BIT it's 1-based indexing
        self.nums[index] = val # update latest value of `nums[index]`

    def sumRange(self, left: int, right: int) -> int:
        return self.bit.getSumRange(left+1, right+1)
```

#### Conclusion
- Time Complexity
   - Constructor: $O(NlogN)$, where N is length of nums array
   - update, sumRange: $O(logN)$

- Space Complexity
The space complexity is $O(1)$.