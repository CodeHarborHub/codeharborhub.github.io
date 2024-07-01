---
id: median-of-the-subarrays
title: Median of the Subarrays
difficulty: Hard
sidebar_label: 0110-Median of the Subarrays
tags:
  - Array
  - Backtracking
  - DSA
  - Python
  - C++
---

## Problem Description

Steps to solve a problem Median of the Subarrays .

You are given an array nums of size n consisting of distinct integers from 1 to n and a positive integer k.

Return the number of non-empty subarrays in nums that have a median equal to k.

Note:

The median of an array is the middle element after sorting the array in ascending order. If the array is of even length, the median is the left middle element.
For example, the median of [2,3,1,4] is 2, and the median of [8,4,3,5,1] is 4.
A subarray is a contiguous part of an array.

 

### Examples

#### Example 1:

**Input:** `N = 5, M = 2 ,A[] = {2, 1, 3, 5, 4}`
**Output: ** 3
**Explanation: ** The subarrays which has median equal to M
are [2], [2,1,3] and [2,1,3,5]
#### Example 2:
Input:
N = 1, M = 1
A[] = {1}
Output: 
1
Explanation: 
The subarrays which has median equal to M
is [1].



### Constraints

- `1 ≤ N ≤ 105`
- `1 ≤ A[] ≤ 105`
- `1 ≤ M ≤ N`
### Approach

**Step 1 :Convert Array Values:**

The first step is to find the index of the value k in the array nums.
- Convert each element in nums such that:
        - If `nums[i] < k`, set `nums[i] = -1`.
        - If `nums[i] > k`, set `nums[i] = 1`.
        - If `nums[i] == k`, set `nums[i] = 0` and store this index in idxK.
**Step 2 : Compute Prefix Sum:**
- Create a prefixSum array where each element at index i is the sum of the first i elements of the modified nums array.
- This helps in quickly calculating the sum of any subarray.
**Step 3 : Helper Function:**
- A helper function is used to calculate the number of subarrays in a given range [l, r] where the subarray sum is either 0 or 1.
- This is done using a hashmap to count the frequency of each prefix sum encountered so far.
**Step 4 : Calculate Result:**
- Use the helper function to calculate:
        -left: Subarrays in the range [0, idxK-1].
        -right: Subarrays in the range [idxK+1, nums.length-1].
        -total: Subarrays in the range [0, nums.length-1].
- The result is obtained by subtracting left and right from total to get the count of subarrays that include the element k and have the median equal to k.

### Solution Code

#### Java

```
class Solution {
    public int countSubarrays(int[] nums, int k) {
        // 1. find index of k, and convert array into -1, 0, 1
        int idxK = -1;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] < k) nums[i] = -1;
            else if (nums[i] > k) nums[i] = 1;
            else {
                idxK = i;
                nums[i] = 0;
            }
        }
        // 2. calculate the prefix Sum
        int[] prefixSum = new int[nums.length + 1];
        
        for (int i = 1; i < prefixSum.length; i++) prefixSum[i] = prefixSum[i - 1] + nums[i - 1];
        
        // 3. calculate three range: total [0, n - 1]  - left[0, idxK - 1] - right[idxK + 1];
        int left = helper(0, idxK, prefixSum);
        int right = helper(idxK + 1, nums.length, prefixSum);
        int total = helper( 0, nums.length, prefixSum);
        
        return total - left - right;
    }
    
    // calculate current interval, subarray sum = 0 and 1;
    private int helper(int l, int r, int[] prefixSum) {
        Map<Integer, Integer> counter = new HashMap<>();
        
        int ans = 0;
        for (int i = l; i <= r; i++) {
            int currSum = prefixSum[i];
            
            if (counter.containsKey(currSum)) {
                ans += counter.get(currSum);
            }
            
            if (counter.containsKey(currSum - 1)) {
                ans += counter.get(currSum - 1);
            }
            
            counter.put(currSum, counter.getOrDefault(currSum, 0) + 1);
        }

        return ans;
    }
}

```

#### C++

```
 class Solution {
public:
    int countSubarrays(vector<int>& nums, int k) {
        //valid subarrays will be starting from 0 to i where i being the index of k and ending at i to n
        //suppose i foudn a valid subarray between s and e
        //numbers greater than k between s to i be g1
        //number smaller than k be s1
        //from i to end 
        //number greater than k be g2 and less than be s2
        // from given we know (g1+g2)-(s1+s2)=0 0r 1
        //----> (g1-s1)+(g2-s2)==0 o1 1
        //in first for loop we are calucalting g2-s2 at every index
        
        int n=nums.size();
        int ind=-1;
        for(int i=0;i<n;i++)
        {
            if(nums[i]==k)
            {
                ind=i;
            }
        }
        if(ind==-1)
        {
            return -1;
        }
        unordered_map<int,int>map;
        int diff=0;
        map[0]++;
        for(int i=ind+1;i<n;i++){
            if(nums[i]>k)
            {
                diff++;
            }
            
            else if(nums[i]<k) 
            {
                diff--;
            }
            map[diff]++;
        }
        diff=0;
        int ans=0;
        //finding complement for the (g1-s1)
        //we have already counted g2-s2
        for(int i=ind;i>=0;i--)
        {
            if(nums[i]>k)
            {
                diff++;
            }
            else  if(nums[i]<k) 
            {
                diff--;
            }
            ans+=map[0-diff];
            ans+=map[1-diff];
        }
        return ans;
    }
};
```
## Your Task

You don't need to read input or print anything. Complete the function countSubarray( ) which takes the integer N , the array A[], and the integer M as input parameters and returns the number of subarays. 

Expected Time Complexity: $O(N)$
Expected Auxiliary Space: $O(N)$



| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Median of the Subarrays](https://www.geeksforgeeks.org/problems/median-of-the-subarrays--170647/1) | [Median of the Subarrays](https://leetcode.com/problems/count-subarrays-with-median-k/description/) |  [DaminiChachane](https://leetcode.com/u/divcxl15/) |

