---
id: frequency-of-the-most-frequent-element
title: Frequency of the Most Frequent Element
sidebar_label: 1838 -Frequency of the Most Frequent Element
tags:
- Array
- Binary Search
- Greedy
- Sliding Window
- Sorting
- Prefix Sum

description: "This is a solution to the Frequency of the Most Frequent Element problem on LeetCode."
---

## Problem Description
The frequency of an element is the number of times it occurs in an array.

You are given an integer array nums and an integer k. In one operation, you can choose an index of nums and increment the element at that index by 1.

Return the maximum possible frequency of an element after performing at most k operations.

### Examples

**Example 1:**

```
Input: nums = [1,2,4], k = 5
Output: 3
Explanation: Increment the first element three times and the second element two times to make nums = [4,4,4].
4 has a frequency of 3.

```

**Example 2:**
```
Input: nums = [1,4,8,13], k = 5
Output: 2
Explanation: There are multiple optimal solutions:
- Increment the first element three times to make nums = [4,4,8,13]. 4 has a frequency of 2.
- Increment the second element four times to make nums = [1,8,8,13]. 8 has a frequency of 2.
- Increment the third element five times to make nums = [1,4,13,13]. 13 has a frequency of 2.
```

**Example 3:**
```
Input: nums = [3,9,6], k = 2
Output: 1
```

### Constraints

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^5`
- `1 <= k <= 10^5`
## Solution for Frequency of the Most Frequent Element Problem
### Approach 
To determine the amount needed to convert the current sliding window [1, 2, 4] into [4, 4, 4], we use the formula (num_right×(right−left+1))−total, where num_right is the value we want to fill the window with (in this case, 4), right and left are the indices defining the window, and total is the sum of the current window. If this amount is within the budget k, i.e., (num_right×(right−left+1))−total≤k, then it is possible to achieve the desired frequency with a cost equal to the window length (right - left + 1).

#### Steps
##### Sorting:
- Sorting the array helps to bring similar values closer together. This makes it easier to increase the frequency of a number by making other numbers in the subarray equal to it with minimal increments.
##### Sliding Window:

- The sliding window technique allows us to consider subarrays of the sorted array incrementally.
- We maintain a window [i, j] where j is the current end of the window, and i is the start.
##### Sum Calculation:
- We keep a running sum of the elements within the window.
- For each new element added to the window (i.e., extending j), we calculate the total number of operations needed to make all elements in the window equal to the current element nums[j].
- This is checked using the formula (j−i+1)×nums[j]−sum. If this value is greater than k, it means we need more than k operations to make all elements equal to nums[j].
##### Adjusting the Window:

- If the current window requires more than k operations, we shrink the window from the left by incrementing i until the condition is satisfied.
- If the condition is satisfied, it means the current window can be made equal with at most k increments, and we update the maximum frequency (maxFreq) with the size of the current window.
##### Result:
- The maximum frequency (maxFreq) found during the iterations will be the result.


<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {
     function maxFrequency(nums, k) {
        nums.sort((a, b) => a - b);
        let maxFreq = 1;
        let i = 0;
        let sum = 0;

        for (let j = 0; j < nums.length; j++) {
            sum += nums[j];
            while ((j - i + 1) * nums[j] - sum > k) {
                sum -= nums[i];
                i++;
            }
            maxFreq = Math.max(maxFreq, j - i + 1);
        }

        return maxFreq;
    }
      const input = [1, 2 ,4];
      const  k = 5
      const output = maxFrequency(input , k) ;
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

    - Time Complexity: $ O(nlogn) $ because of sorting, where n is the size of array
    - Space Complexity: $ O(1) $ 

   ## Code in Different Languages
   <Tabs>
  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```javascript
   function maxFrequency(nums, k) {
    nums.sort((a, b) => a - b);
    let maxFreq = 1;
    let i = 0;
    let sum = 0;

    for (let j = 0; j < nums.length; j++) {
        sum += nums[j];
        while ((j - i + 1) * nums[j] - sum > k) {
            sum -= nums[i];
            i++;
        }
        maxFreq = Math.max(maxFreq, j - i + 1);
    }

    return maxFreq;
}
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@hiteshgahanolia"/> 
   ```typescript
   function maxFrequency(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);
    let maxFreq = 1;
    let i = 0;
    let sum = 0;

    for (let j = 0; j < nums.length; j++) {
        sum += nums[j];
        while ((j - i + 1) * nums[j] - sum > k) {
            sum -= nums[i];
            i++;
        }
        maxFreq = Math.max(maxFreq, j - i + 1);
    }

    return maxFreq;
}

    ```
  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
   class Solution:
    def maxFrequency(self, nums, k):
        nums.sort()
        maxFreq = 1
        i = 0
        sum = 0

        for j in range(len(nums)):
            sum += nums[j]
            while (j - i + 1) * nums[j] - sum > k:
                sum -= nums[i]
                i += 1
            maxFreq = max(maxFreq, j - i + 1)
        
        return maxFreq

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
   import java.util.Arrays;

public class Solution {
    public int maxFrequency(int[] nums, int k) {
        Arrays.sort(nums);
        long maxFreq = 1;
        long i = 0;
        long sum = 0;

        for (long j = 0; j < nums.length; j++) {
            sum += nums[(int) j];
            while ((j - i + 1) * nums[(int) j] - sum > k) {
                sum -= nums[(int) i];
                i++;
            }
            maxFreq = Math.max(maxFreq, j - i + 1);
        }

        return (int) maxFreq;
    }
}

    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
   class Solution {
public:
    int maxFrequency(vector<int>& nums, int k) {
        sort(nums.begin(), nums.end());
        long maxFreq = 1;
        long i = 0;
        long j = 0;
        long long sum = 0;

        while (j < nums.size()) {
            sum += nums[j];  
            while ((j - i + 1) * nums[j] - sum > k) sum -= nums[i++];
            maxFreq =max(maxFreq, j-i+1);
            j++;
        }
        return maxFreq;
    }
};
    ```
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Frequency of the Most Frequent Element](https://leetcode.com/problems/frequency-of-the-most-frequent-element/description/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/frequency-of-the-most-frequent-element/solution)

