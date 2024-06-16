---
id: max-number-of-k-sum-pairs
title: Max Number of K-Sum Pairs (Leetcode)
sidebar_label: 0082-MaxNumberofK-SumPairs
description: You are given an integer array nums and an integer k.In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.Return the maximum number of operations you can perform on the array.
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Max Number of K-Sum Pairs](https://leetcode.com/problems/max-number-of-k-sum-pairs/description/) | [Max Number of K-Sum Pairs Solution on LeetCode](https://leetcode.com/problems/max-number-of-k-sum-pairs/solutions) |  [Aaradhya Singh ](https://leetcode.com/u/keira_09/) |


## Problem Description

You are given an integer array nums and an integer $k$.

In one operation, you can pick two numbers from the array whose sum equals $k$ and remove them from the array.

Return the maximum number of operations you can perform on the array.

### Examples

#### Example 1

- **Input:** $nums = [1,2,3,4], k = 5$
- **Output:** $2$
- **Explanation:** Starting with nums = $[1,2,3,4]$:
- Remove numbers $1$ and $4$, then nums = $[2,3]$
- Remove numbers $2$ and $3$, then nums = $[]$
There are no more pairs that sum up to $5$, hence a total of $2$ operations.


#### Example 2

- **Input:** $nums = [3,1,3,4,3], k = 6$
- **Output:** $1$
- **Explanation:** Starting with nums = $[3,1,3,4,3]$:
- Remove the first two $3$'s, then nums = $[1,4,3]$
There are no more pairs that sum up to $6$, hence a total of $1$ operation.

### Constraints

- $1 <= nums.length <= 105$
- $1 <= nums[i] <= 109$
- $1 <= k <= 109$


### Intuition

The code finds the maximum number of pairs in nums that sum to $k$ by first sorting the array and then using the two-pointer technique. Pointers start and end check pairs: if their sum equals $k$, the count is incremented and both pointers move inward. If the sum is greater than $k$, end moves left; if less, start moves right. This approach efficiently identifies pairs with a sum of $k$ in $O(nlog⁡n)$ time due to sorting and $O(n)$ time for the two-pointer traversal.

### Approach

1. **Sorting the Array:**

    - The first step is to sort the given array nums using std::sort. This step ensures that elements are in ascending order, which is crucial for the two-pointer technique.

2. **Initializing Pointers and Count:**

    - Initialize three variables: count to keep track of the number of valid pairs, start pointing to the beginning of the sorted array, and end pointing to the end of the array.

3. **Two-Pointer Technique:**

    - Use the two-pointer technique within a while loop until start is less than end.
    - Check if the sum of elements at nums[start] and nums[end] equals the target value k.
        - If it does, increment count and move both pointers inward (start++ and end--).
        - If the sum is greater than k, decrement end to reduce the sum.
        - If the sum is less than k, increment start to increase the sum.

4. **Return Count:**

    - After the while loop, return the final value of count, which represents the maximum number of pairs in nums that sum to k.

### Solution Code

#### Python

```py
class Solution:
    def maxOperations(self, nums: List[int], k: int) -> int:
        nums.sort()  # Sort the array in ascending order
        count = 0
        start, end = 0, len(nums) - 1  # Initialize two pointers

        while start < end:
            if nums[start] + nums[end] == k:
                count += 1
                start += 1
                end -= 1
            elif nums[start] + nums[end] > k:
                end -= 1
            else:
                start += 1

        return count
```

#### Java

```java
import java.util.Arrays;

class Solution {
    public int maxOperations(int[] nums, int k) {
        Arrays.sort(nums);  // Sort the array in ascending order
        int count = 0;
        int start = 0, end = nums.length - 1;  // Initialize two pointers

        while (start < end) {
            if (nums[start] + nums[end] == k) {
                count++;
                start++;
                end--;
            } else if (nums[start] + nums[end] > k) {
                end--;
            } else {
                start++;
            }
        }

        return count;
    }
}
```

#### C++

```cpp
class Solution {
public:
    int maxOperations(vector<int>& nums, int k) {
      std::sort(nums.begin() , nums.end());
      int count = 0;
      int start = 0;
      int end = nums.size() - 1;

      while (start < end){
        if (nums[start] + nums[end] == k){
        count ++;
        end--;
        start++;
        }
        else if (nums[start] + nums[end] > k){
          end--;
        }
        else{start++;}
      }
      return count;
    }
};
```

### Conclusion

The code effectively calculates the maximum number of pairs in an array nums that sum up to the given value $k$ using the two-pointer technique. It first sorts the array in ascending order, which enables efficient pair finding. The two pointers start and end traverse the sorted array, checking pairs. If the sum of elements at these pointers equals $k$, a valid pair is found, and both pointers move inward. If the sum is greater than $k$, end moves left to reduce the sum; if less, start moves right to increase the sum. This approach optimally identifies pairs with a sum of $k$, with a time complexity of $O(n log n)$ due to sorting and $O(n)$ for the two-pointer traversal, making it efficient for large arrays.
