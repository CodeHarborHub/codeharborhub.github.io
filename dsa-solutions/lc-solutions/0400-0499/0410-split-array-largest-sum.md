---
id: split-array-largest-sum
title:  Split Array Largest Sum
sidebar_label: 0410. Split Array Largest Sum

tags:
- Array
- Binary Search
- C++
- Java
- Javascript
- Python
- TypeScript
- Hard
- Leetcode
- Split Array Largest Sum

description: "This is a solution to the Split Array Largest Sum problem on LeetCode."
---

## Problem Description
Given an integer array `nums` and an integer `k`, split `nums` into `k` non-empty subarrays such that the largest sum of any subarray is **minimized**.
Return *the minimized largest sum of the split.*
A **subarray** is a contiguous part of the array.

### Examples

**Example 1:**
```
Input: nums = [7,2,5,10,8], k = 2
Output: 18
Explanation: There are four ways to split nums into two subarrays.
The best way is to split it into [7,2,5] and [10,8], where the largest sum among the two subarrays is only 18.
```

**Example 2:**
```
Input: nums = [1,2,3,4,5], k = 2
Output: 9
Explanation: There are four ways to split nums into two subarrays.
The best way is to split it into [1,2,3] and [4,5], where the largest sum among the two subarrays is only 9.
```


### Constraints
- `1 <= nums.length <= 1000`
- `0 <= nums[i] <= 106`
- `1 <= k <= min(50, nums.length)`


## Solution for Split Array Largest Sum
### Approach 
#### Brute Force 
- Generate all possible ways to split the array `nums` into `k` subarrays.
- For each split, calculate the largest sum of the subarrays.
- Keep track of the minimum of these largest sums.


**Complexity:**
- Time Complexity: `O(C(n-1, k-1) * n)`, where C(n-1, k-1) is the number of ways to choose k-1 split points from n-1 positions, which is exponential.
- Space Complexity: O(k), for storing split indices.
- Impractical for large inputs due to combinatorial explosion.

**Corner Cases:**
- `nums` with a single element.
- `k` equal to the length of `nums`, resulting in each element being its own subarray.
- `k` equal to 1, meaning the entire array is one subarray.

#### Optimized Approach (Binary Search + Greedy)
- Use binary search to find the minimum possible largest sum `(low)` and the maximum possible largest sum `(high)`.
- `low` is the maximum element in `nums` (because each subarray must have at least one element).
- `high` is the sum of all elements in `nums` (the entire array as one subarray).
- Use binary search to narrow down the smallest valid `mid` value, where `mid` represents the largest sum allowed for a subarray.
- Use a greedy algorithm to check if it's possible to split `nums` into `k` subarrays with the largest subarray sum being `mid`.

**Implementation:**

```javascript
var splitArray = function(nums, k) {
    const canSplit = (nums, k, mid) => {
        let count = 1;
        let currentSum = 0;

        for (let num of nums) {
            if (currentSum + num > mid) {
                count++;
                currentSum = num;
                if (count > k) return false;
            } else {
                currentSum += num;
            }
        }
        return true;
    };

    let left = Math.max(...nums);
    let right = nums.reduce((a, b) => a + b, 0);

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (canSplit(nums, k, mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};
```

**Complexity:**
- Time Complexity: `O(n log(sum(nums) - max(nums)))`, where `n` is the length of `nums`. This is due to the binary search over the sum range and the linear scan to validate each mid value.
- Space Complexity: `O(1)`, as we are not using extra space proportional to the input size.

**Corner Cases:**
- `nums` with a single element: the result is that single element.
- `k` equal to the length of `nums`: the result is the maximum element in `nums`.
- `k` equal to 1: the result is the sum of all elements in `nums`.
- All elements in `nums` are the same: the result should be one of those elements.


<Tabs>
  <TabItem value="Solution" label="Solution">

#### Implementation

    ```jsx live
    function Solution(arr) {
      var splitArray  = function(nums, k) {
        const canSplit = (nums, k, mid) => {
            let count = 1;
            let currentSum = 0;

            for (let num of nums) {
                if (currentSum + num > mid) {
                count++;
                currentSum = num;
                if (count > k) return false;
                } else {
                currentSum += num;
                }
            }
            return true;
        };

        let left = Math.max(...nums);
        let right = nums.reduce((a, b) => a + b, 0);

        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (canSplit(nums, k, mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    };

    const nums = [7, 2, 5, 10, 8];
    const k = 2;
    const result = splitArray(nums, k);

    return (
        <div>
        <p>
            <b>Input: </b>
            {JSON.stringify({ nums, k })}
        </p>
        <p>
            <b>Output:</b> {result}
        </p>
        </div>
    );
    }
    ```

#### Complexity Analysis

 - Time Complexity: $O(n log(sum(nums) - max(nums)))$ 
 - Space Complexity: $O(1)$ 

  ## Code in Different Languages

   <Tabs>

  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@vansh-codes" />

   ```javascript
    var splitArray = function(nums, k) {
        const canSplit = (nums, k, mid) => {
            let count = 1;
            let currentSum = 0;

            for (let num of nums) {
                if (currentSum + num > mid) {
                    count++;
                    currentSum = num;
                    if (count > k) return false;
                } else {
                    currentSum += num;
                }
            }
            return true;
        };

        let left = Math.max(...nums);
        let right = nums.reduce((a, b) => a + b, 0);

        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (canSplit(nums, k, mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    };
    ```

  </TabItem>

  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@vansh-codes" /> 

   ```typescript
    function splitArray(nums: number[], k: number): number {
        const canSplit = (nums: number[], k: number, mid: number): boolean => {
            let count = 1;
            let currentSum = 0;

            for (let num of nums) {
                if (currentSum + num > mid) {
                    count++;
                    currentSum = num;
                    if (count > k) return false;
                } else {
                    currentSum += num;
                }
            }
            return true;
        };

        let left = Math.max(...nums);
        let right = nums.reduce((a, b) => a + b, 0);

        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (canSplit(nums, k, mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    };
    ```

  </TabItem>

  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@vansh-codes" />

   ```python
    class Solution:
        def splitArray(self, nums: List[int], k: int) -> int:
            def canSplit(nums: List[int], k: int, mid: int) -> bool:
                count = 1
                current_sum = 0

                for num in nums:
                    if current_sum + num > mid:
                        count += 1
                        current_sum = num
                        if count > k:
                            return False
                    else:
                        current_sum += num
                return True

            left, right = max(nums), sum(nums)

            while left < right:
                mid = (left + right) // 2
                if canSplit(nums, k, mid):
                    right = mid
                else:
                    left = mid + 1

            return left
    ```

  </TabItem>

  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@vansh-codes" />

   ```java
    public class Solution {
        public int splitArray(int[] nums, int k) {
            int left = Arrays.stream(nums).max().getAsInt();
            int right = Arrays.stream(nums).sum();

            while (left < right) {
                int mid = (left + right) / 2;
                if (canSplit(nums, k, mid)) {
                    right = mid;
                } else {
                    left = mid + 1;
                }
            }

            return left;
        }

        private boolean canSplit(int[] nums, int k, int mid) {
            int count = 1;
            int currentSum = 0;

            for (int num : nums) {
                if (currentSum + num > mid) {
                    count++;
                    currentSum = num;
                    if (count > k) {
                        return false;
                    }
                } else {
                    currentSum += num;
                }
            }

            return true;
        }
    }
    ```

  </TabItem>

  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@vansh-codes" />

   ```cpp
    class Solution {
    public:
        int splitArray(vector<int>& nums, int k) {
            int left = *max_element(nums.begin(), nums.end());
            int right = accumulate(nums.begin(), nums.end(), 0);

            while (left < right) {
                int mid = left + (right - left) / 2;
                if (canSplit(nums, k, mid)) {
                    right = mid;
                } else {
                    left = mid + 1;
                }
            }

            return left;
        }

    private:
        bool canSplit(vector<int>& nums, int k, int mid) {
            int count = 1;
            int currentSum = 0;

            for (int num : nums) {
                if (currentSum + num > mid) {
                    count++;
                    currentSum = num;
                    if (count > k) {
                        return false;
                    }
                } else {
                    currentSum += num;
                }
            }

            return true;
        }
    };
    ```

</TabItem>
</Tabs>

</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/split-array-largest-sum/solutions/)  