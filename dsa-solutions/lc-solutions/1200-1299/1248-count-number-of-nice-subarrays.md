---
id: count-number-of-nice-subarrays
title: 1248. Count Number of Nice Subarrays
sidebar_label:  1248. Count Number of Nice Subarrays
tags:
- Array
- Hash Table
- Counting

description: "This is a solution to the  Count Number of Nice Subarrays problem on LeetCode."
---

## Problem Description
Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.

Return the number of nice sub-arrays.

### Examples

**Example 1:**
```
Input: nums = [1,1,2,1,1], k = 3
Output: 2
Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].
```

**Example 2:**

```
Input: nums = [2,4,6], k = 1
Output: 0
Explanation: There are no odd numbers in the array.
```


### Constraints
- `1 <= nums.length <= 50000`
- `1 <= nums[i] <= 10^5`
- `1 <= k <= nums.length`

## Solution for 1781. Sum of Beauty of All Substrings Problem
### Approach 

<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {
     function  numberOfSubarrays(nums, k) {
        let i = 0, j = 0, t = 0, odd = 0, total = 0;
        const n = nums.length;
        
        while (j < n) {
            if (nums[j] % 2 === 1) {
                odd++;
            }
            
            while (i <= j && odd > k) {
                if (nums[i] % 2 === 1) {
                    odd--;
                }
                i++;
            }
            
            if (odd === k) {
                t = i;
                while (t <= j && nums[t] % 2 === 0) {
                    t++;
                }
                total += (t - i + 1);
            }
            j++;
        }
        return total;
    }
      const input =  [1,1,2,1,1]
      const k = 3
      const output = numberOfSubarrays(input ,k)
      return (
        <div>
          <p>
            <b>Input: </b>
            {JSON.stringify(input)}
          </p>
          <p>
            <b>Output:</b> {output.toString()}
          </p>
        </div>
      );
    }
    ```

    #### Complexity Analysis

    - Time Complexity: $ O(N) $ 
    - Space Complexity: $ O(1)$

   ## Code in Different Languages
   <Tabs>
  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```javascript
       numberOfSubarrays(nums, k) {
        let i = 0, j = 0, t = 0, odd = 0, total = 0;
        const n = nums.length;
        
        while (j < n) {
            if (nums[j] % 2 === 1) {
                odd++;
            }
            
            while (i <= j && odd > k) {
                if (nums[i] % 2 === 1) {
                    odd--;
                }
                i++;
            }
            
            if (odd === k) {
                t = i;
                while (t <= j && nums[t] % 2 === 0) {
                    t++;
                }
                total += (t - i + 1);
            }
            j++;
        }
        return total;
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@hiteshgahanolia"/> 
   ```typescript
 class Solution {
    numberOfSubarrays(nums: number[], k: number): number {
        let i = 0, j = 0, t = 0, odd = 0, total = 0;
        const n = nums.length;
        
        while (j < n) {
            if (nums[j] % 2 === 1) {
                odd++;
            }
            
            while (i <= j && odd > k) {
                if (nums[i] % 2 === 1) {
                    odd--;
                }
                i++;
            }
            
            if (odd === k) {
                t = i;
                while (t <= j && nums[t] % 2 === 0) {
                    t++;
                }
                total += (t - i + 1);
            }
            j++;
        }
        return total;
    }
}

    ```
  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
   class Solution:
    def numberOfSubarrays(self, nums: List[int], k: int) -> int:
        i = 0
        j = 0
        t = 0
        odd = 0
        total = 0
        n = len(nums)
        
        while j < n:
            if nums[j] % 2 == 1:
                odd += 1
            
            while i <= j and odd > k:
                if nums[i] % 2 == 1:
                    odd -= 1
                i += 1
            
            if odd == k:
                t = i
                while t <= j and nums[t] % 2 == 0:
                    t += 1
                total += (t - i + 1)
            j += 1
        
        return total

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
  public class Solution {
    public int numberOfSubarrays(int[] nums, int k) {
        int i = 0, j = 0, t = 0, odd = 0, total = 0;
        int n = nums.length;
        
        while (j < n) {
            if (nums[j] % 2 == 1) {
                odd++;
            }
            
            while (i <= j && odd > k) {
                if (nums[i] % 2 == 1) {
                    odd--;
                }
                i++;
            }
            
            if (odd == k) {
                t = i;
                while (t <= j && nums[t] % 2 == 0) {
                    t++;
                }
                total += (t - i + 1);
            }
            j++;
        }
        return total;
    }
}

    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
class Solution {
public:
    int numberOfSubarrays(vector<int>& nums, int k) {
        int i = 0, j = 0, t = 0, odd = 0, total = 0;
        int n = nums.size();
        
        while (j < n) {
            if (nums[j] % 2 == 1) {
                odd++;
            }
            
            while (i <= j && odd > k) {
                if (nums[i] % 2 == 1) {
                    odd--;
                }
                i++;
            }
            
            if (odd == k) {
                t = i;
                while (t <= j && nums[t] % 2 == 0) {
                    t++;
                }
                total += (t - i + 1);
            }
            j++;
        }
        return total;
    }
};

    ```
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

## References

- **LeetCode Problem**: [ Count Number of Nice Subarrays](https://leetcode.com/problems/count-number-of-nice-subarrays/description/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/count-number-of-nice-subarrays/description/)

