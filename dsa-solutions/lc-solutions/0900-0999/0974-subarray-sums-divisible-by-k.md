---
id: subarray-sums-divisible-by-k
title:   Subarray Sums Divisible by K
sidebar_label: 974. Subarray Sums Divisible by K

tags:
- Array
- Sliding Window
- Hashmap

description: "This is a solution to theSubarray Sums Divisible by K problem on LeetCode."
---

## Problem Description
Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.

A subarray is a contiguous part of an array.
### Examples

**Example 1:**
```
Input: nums = [4,5,0,-2,-3,1], k = 5
Output: 7
Explanation: There are 7 subarrays with a sum divisible by k = 5:
[4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
```

**Example 2:**
```
Input: nums = [5], k = 9
Output: 0
```


### Constraints
- `1 <= nums.length <= 3 * 10^4`
- `-10^4 <= nums[i] <= 10^4`
- `2 <= k <= 10^4`

## Solution for Subarray Sums Divisible by K Problem
### Approach 
#### Brute Force 
- Generate All the Subarray and Check whether the which subarray sum is divisible by k.

#### Optimized Approach 
- The problem is to find the number of subarrays whose sum is divisible by a given integer k. The key insight is to use the concept of prefix sums and remainders:

##### Prefix Sum and Remainders:
- Compute the prefix sum as you iterate through the array.Compute the remainder of the prefix sum divided by k. This remainder helps in identifying subarrays that are divisible by 
k.

##### Handling Negative Remainders:
- If the remainder is negative, adjust it by adding k to make it positive. This ensures consistent handling of remainders.
##### Using a HashMap:

- Use a hash map (or dictionary) to count the frequency of each remainder.
- If the same remainder has been seen before, it means there are subarrays whose sum is divisible by k.
##### Counting Valid Subarrays:

- For each prefix sum remainder, the count of valid subarrays is incremented by the frequency of the same remainder seen so far.

<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {
      var subarraysDivByK = function(nums, k) {
      let sum = 0;
      const mp = new Map();
      mp.set(0, 1);
      let cnt = 0;
      
      for (let i = 0; i < nums.length; i++) {
          sum += nums[i];
          sum = sum % k;
          if (sum < 0) {
              sum += k;
          }
          if (mp.has(sum)) {
              cnt += mp.get(sum);
          }
          mp.set(sum, (mp.get(sum) || 0) + 1);
      }
      
      return cnt;
  };
      const input =[4,5,0,-2,-3,1]
      const k = 5
      const output = subarraysDivByK(input , k)
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

    - Time Complexity: $ O(n) $ 
    - Space Complexity: $ O(k)$

   ## Code in Different Languages
   <Tabs>
  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```javascript
   var subarraysDivByK = function(nums, k) {
    let sum = 0;
    const mp = new Map();
    mp.set(0, 1);
    let cnt = 0;
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        sum = sum % k;
        if (sum < 0) {
            sum += k;
        }
        if (mp.has(sum)) {
            cnt += mp.get(sum);
        }
        mp.set(sum, (mp.get(sum) || 0) + 1);
    }
    
    return cnt;
};
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@hiteshgahanolia"/> 
   ```typescript
   function subarraysDivByK(nums: number[], k: number): number {
    let sum = 0;
    const mp: Map<number, number> = new Map();
    mp.set(0, 1);
    let cnt = 0;
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        sum = sum % k;
        if (sum < 0) {
            sum += k;
        }
        if (mp.has(sum)) {
            cnt += mp.get(sum)!;
        }
        mp.set(sum, (mp.get(sum) || 0) + 1);
    }
    
    return cnt;
}

    ```
  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
   from collections import defaultdict

class Solution:
    def subarraysDivByK(self, nums, k):
        sum = 0
        mp = defaultdict(int)
        mp[0] = 1
        cnt = 0
        
        for num in nums:
            sum += num
            sum = sum % k
            if sum < 0:
                sum += k
            cnt += mp[sum]
            mp[sum] += 1
        
        return cnt

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
   import java.util.HashMap;
import java.util.Map;

class Solution {
    public int subarraysDivByK(int[] nums, int k) {
        int sum = 0;
        Map<Integer, Integer> mp = new HashMap<>();
        mp.put(0, 1);
        int cnt = 0;
        
        for (int num : nums) {
            sum += num;
            sum = sum % k;
            if (sum < 0) {
                sum += k;
            }
            cnt += mp.getOrDefault(sum, 0);
            mp.put(sum, mp.getOrDefault(sum, 0) + 1);
        }
        
        return cnt;
    }
}

    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
   class Solution {
public:
    int subarraysDivByK(vector<int>& nums, int k) {
        int sum=0;
        map<int,int>mp;
        mp[0]=1;
        int cnt=0;
        for(int i=0;i<nums.size();i++)
        {
            sum+=nums[i];
            sum=sum%k;
            if(sum<0)
            {
                sum+=k;
            }
            cnt+=mp[sum];
            mp[sum]++;
        }
        return cnt;
    }
};

```
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Subarray Sums Divisible by K](https://leetcode.com/problems/subarray-product-less-than-k/description/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/subarray-sums-divisible-by-k/solutions)

