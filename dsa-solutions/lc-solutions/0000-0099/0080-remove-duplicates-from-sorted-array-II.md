---
id: remove-duplicates-from-sorted-array-II
title: Remove Duplicates from Sorted Array II(LeetCode)
sidebar_label: 0080-Remove Duplicates from Sorted Array II
tags:
  - Array
  - Two Pointers
description: Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice.
---

## Problem Statement

Given an integer array `nums` sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array `nums`. More formally, if there are `k` elements after removing the duplicates, then the first `k` elements of `nums` should hold the final result. It does not matter what you leave beyond the first `k` elements.

Return `k` after placing the final result in the first `k` slots of `nums`.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with `O(1)` extra memory.

Custom Judge:

The judge will test your solution with the following code:

```
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
```

If all assertions pass, then your solution will be accepted.

### Examples

**Example 1:**

```plaintext
Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

**Example 2:**

```plaintext
Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]
Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

### Constraints

- `1 <= nums.length <= 3 * 104`
- `-104 <= nums[i] <= 104`
- `nums` is sorted in non-decreasing order.

## Solution

### Approach 

The approach employs a two-pointer strategy to remove duplicates from a sorted array such that each element appears at most twice. The variable j is used to keep track of the current position in the modified array where elements are being stored without violating the constraint. The loop iterates through the array, and for each element, it checks whether it is the same as the element two positions behind the current j. If it is, it means there are already two occurrences of this element in the modified array, and we should skip adding another one to adhere to the constraint. Otherwise, the element is added to the modified array at position j, and j is incremented.

#### Algorithm

1. Initialization:
* Initialize `j` to 1 since the first element (at index 0) is always considered part of the modified array.
2. Iteration:
* Loop through the array starting from index 1 (i.e., i = 1).
* For each element `nums[i]`:
  * Compare `nums[i]` with `nums[j - 2]`.
  * If they are different (i.e., `nums[i] != nums[j - 2]`), add `nums[i]` to the modified array at position `j` and increment `j`.
  * If they are the same, skip adding `nums[i]` to the modified array.
3. Final Result:
* The final length of the modified array is equal to `j`.
* The modified array contains elements adhering to the constraint of at most two occurrences of each element.

#### Implementation

 Java:
 
```Java
class Solution {
    public int removeDuplicates(int[] nums) {
        int j = 1;
        for (int i = 1; i < nums.length; i++) {
            if (j == 1 || nums[i] != nums[j - 2]) {
                nums[j++] = nums[i];
            }
        }
        return j;
    }
}
```

C++ 

```C++
class Solution {
public:
    int removeDuplicates(std::vector<int>& nums) {
        int j = 1;
        for (int i = 1; i < nums.size(); i++) {
            if (j == 1 || nums[i] != nums[j - 2]) {
                nums[j++] = nums[i];
            }
        }
        return j;
    }
};
```

Python:

```Python
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        j = 1
        for i in range(1, len(nums)):
            if j == 1 or nums[i] != nums[j - 2]:
                nums[j] = nums[i]
                j += 1
        return j
```

Rust:

```Rust
impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        let mut j = 1;
        for i in 1..nums.len() {
            if j == 1 || nums[i] != nums[j - 2] {
                nums[j] = nums[i];
                j += 1;
            }
        }
        j as i32
    }
}
```
### Complexity Analysis

- **Time complexity**: $O(N)$
- **Space complexity**: $O(1)$

### Conclusion

The two-pointer approach effectively removes duplicates from a sorted array in-place such that each element appears at most twice. By maintaining two pointers, i for iteration and j for tracking the position in the modified array, the algorithm efficiently achieves the desired result with a single pass through the array. The time complexity is O(n), and the space complexity is O(1), making this solution both time and space efficient.
