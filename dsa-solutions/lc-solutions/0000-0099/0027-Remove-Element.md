---
id: remove-element
title: Remove Element (LeetCode)
sidebar_label: 0027-RemoveElement
difficulty: Easy
---

## Problem Description


| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Merge Two Sorted Lists](https://leetcode.com/problems/remove-element/) | [Merge Two Sorted Lists Solution on LeetCode](https://leetcode.com/problems/remove-element/solutions/) |  [VijayShankerSharma](https://leetcode.com/u/darkknight648/) |

## Problem Description

Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` in-place. The order of the elements may be changed. Then return the number of elements in `nums` which are not equal to `val`.

Consider the number of elements in `nums` which are not equal to `val` to be `k`. To get accepted, you need to do the following things:

- Change the array `nums` such that the first `k` elements of `nums` contain the elements which are not equal to `val`. The remaining elements of `nums` are not important as well as the size of `nums`.
- Return `k`.

### Custom Judge

The judge will test your solution with the following code:

```
int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
                            // It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
    assert nums[i] == expectedNums[i];
}
```

If all assertions pass, then your solution will be accepted.

### Examples

#### Example 1

- **Input:** `nums = [3,2,2,3], val = 3`
- **Output:** `2, nums = [2,2,_,_]`
- **Explanation:** Your function should return `k = 2`, with the first two elements of `nums` being 2. It does not matter what you leave beyond the returned `k` (hence they are underscores).

#### Example 2

- **Input:** `nums = [0,1,2,2,3,0,4,2], val = 2`
- **Output:** `5, nums = [0,1,4,0,3,_,_,_]`
- **Explanation:** Your function should return `k = 5`, with the first five elements of `nums` containing 0, 0, 1, 3, and 4. Note that the five elements can be returned in any order. It does not matter what you leave beyond the returned `k` (hence they are underscores).

### Constraints

- `0 <= nums.length <= 100`
- `0 <= nums[i] <= 50`
- `0 <= val <= 100`

### Approach

To solve the problem, we can use the following approach:

1. **Initialize Two Pointers:**
   - Use two pointers, `slow` and `fast`, where `slow` points to the beginning of the array and `fast` moves forward to explore the array.

2. **Iterate Through the Array:**
   - While `fast` is within the bounds of the array:
     - If `nums[fast]` is not equal to `val`, copy `nums[fast]` to `nums[slow]` and increment both pointers.
     - If `nums[fast]` is equal to `val`, just increment `fast`.

3. **Return Result:**
   - The new length of the array without the elements equal to `val` is given by `slow`.

### Solution Code

#### Python

```
class Solution:
    def removeElement(self, nums, val):
        # Pointer to place the next non-val element
        k = 0
        
        # Iterate through all elements in the array
        for i in range(len(nums)):
            if nums[i] != val:
                # Place the non-val element at the next position in the array
                nums[k] = nums[i]
                k += 1
        
        return k

def _driver():
    # Example usage
    nums = [3, 2, 2, 3]
    val = 3
    sol = Solution()
    k = sol.removeElement(nums, val)
    print("The number of elements not equal to val:", k)
    print("The modified array:", nums[:k])

if __name__ == "__main__":
    _driver()

```

#### Java

```
class Solution {
    public int removeElement(int[] nums, int val) {
        int slow = 0;
        
        for (int fast = 0; fast < nums.length; fast++) {
            if (nums[fast] != val) {
                nums[slow] = nums[fast];
                slow++;
            }
        }
        
        return slow;
    }
}
```

#### C++

```
class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int slow = 0;
        
        for (int fast = 0; fast < nums.size(); fast++) {
            if (nums[fast] != val) {
                nums[slow] = nums[fast];
                slow++;
            }
        }
        
        return slow;
    }
};
```

### Conclusion

The above solution efficiently removes all occurrences of a specified value from an integer array in-place. It employs a two-pointer technique to achieve a time complexity of $O(N)$ and a space complexity of $O(1)$. This ensures that the algorithm can handle input sizes up to the upper limit specified in the constraints efficiently, providing a simple yet effective approach to solving the problem of removing an element from an array.
