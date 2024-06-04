---
id: remove-duplicates-from-sorted-array
title: Remove Duplicates from Sorted Array (LeetCode)
sidebar_label: 0026-RemoveDuplicatesFromSortedArray
tags:
    - Array
    - Two Pointers
description: Given a sorted integer array, remove duplicates in-place and return the new length of the array with unique elements.
---

## Problem Description

| Problem Statement                                                                                           | Solution Link                                                                                                                               | LeetCode Profile                                   |
| :----------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------- |
| [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)                                         | [Remove Duplicates from Sorted Array Solution on LeetCode](https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/) | [VijayShankerSharma](https://leetcode.com/u/darkknight648/) |

### Problem Description

Given an integer array `nums` sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in `nums`.

Consider the number of unique elements of `nums` to be `k`, to get accepted, you need to do the following things:
- Change the array `nums` such that the first `k` elements of `nums` contain the unique elements in the order they were present in `nums` initially. 
- The remaining elements of `nums` are not important as well as the size of `nums`.
- Return `k`.

### Custom Judge

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

#### Example 1

- **Input:** `nums = [1,1,2]`
- **Output:** `2, nums = [1,2,_]`
- **Explanation:** Your function should return `k = 2`, with the first two elements of `nums` being 1 and 2 respectively. It does not matter what you leave beyond the returned `k` (hence they are underscores).

#### Example 2

- **Input:** `nums = [0,0,1,1,1,2,2,3,3,4]`
- **Output:** `5, nums = [0,1,2,3,4,_,_,_,_,_]`
- **Explanation:** Your function should return `k = 5`, with the first five elements of `nums` being 0, 1, 2, 3, and 4 respectively. It does not matter what you leave beyond the returned `k` (hence they are underscores).

### Constraints

- `1 <= nums.length <= 3 * 10^4`
- `-100 <= nums[i] <= 100`
- `nums` is sorted in non-decreasing order.

### Approach

To solve the problem, we can use the two-pointer technique. Here is the step-by-step approach:

1. **Initialize Pointers:**
   - Use `uniqueIndex` to track the position to place the next unique element.

2. **Iterate Through the Array:**
   - Traverse the array starting from the second element.
   - If the current element is different from the element at `uniqueIndex`, move `uniqueIndex` forward and update it with the current element.

3. **Return Result:**
   - The number of unique elements is `uniqueIndex + 1`.

### Solution Code

#### Python

```
class Solution(object):
    def removeDuplicates(self, nums):
        if len(nums) == 0:
            return 0
        
        unique_index = 0  # Pointer for placing unique elements
        
        for i in range(1, len(nums)):
            if nums[i] != nums[unique_index]:
                # Found a unique element, place it in the next position
                unique_index += 1
                nums[unique_index] = nums[i]
        
        # The number of unique elements is one more than the index of the last unique element
        return unique_index + 1
```

#### Java
```
class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length == 0) return 0;
        
        int uniqueIndex = 0; // Pointer for placing unique elements
        
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] != nums[uniqueIndex]) {
                // Found a unique element, place it in the next position
                uniqueIndex++;
                nums[uniqueIndex] = nums[i];
            }
        }
        
        // The number of unique elements is one more than the index of the last unique element
        return uniqueIndex + 1;
    }
}
```

#### C++
```
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        if (nums.size() == 0) return 0;
        
        int uniqueIndex = 0; // Pointer for placing unique elements
        
        for (int i = 1; i < nums.size(); i++) {
            if (nums[i] != nums[uniqueIndex]) {
                // Found a unique element, place it in the next position
                uniqueIndex++;
                nums[uniqueIndex] = nums[i];
            }
        }
        
        // The number of unique elements is one more than the index of the last unique element
        return uniqueIndex + 1;
    }
};
```

### Conclusion

The above solution efficiently removes duplicates from a sorted array in-place. It employs a two-pointer technique to achieve a time complexity of $O(N)$ and a space complexity of $O(1)$. This ensures that the algorithm can handle input sizes up to the upper limit specified in the constraints efficiently, providing a simple yet effective approach to solving the problem of removing duplicates from a sorted array.
