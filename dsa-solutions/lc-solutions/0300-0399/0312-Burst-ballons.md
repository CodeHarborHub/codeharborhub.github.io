---
id: burst-ballons
title: Burst-Ballons
sidebar_label: 0312 - Burst Ballons
tags:
- Array
- Dynamic Programming

description: "This is a solution to the Burst Ballons problem on LeetCode."
---

## Problem Description

You are given `n` balloons, indexed from `0` to `n - 1`. Each balloon is painted with a number on it represented by an array nums. You are asked to burst all the balloons.

If you burst the ith balloon, you will get `nums[i - 1] * nums[i] * nums[i + 1]` coins. If `i - 1` or `i + 1` goes out of bounds of the array, then treat it as if there is a balloon with a 1 painted on it.

Return the maximum coins you can collect by bursting the balloons wisely.

### Examples

**Example 1:**

```
Input: nums = [3,1,5,8]
Output: 167
Explanation:
nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167

```

**Example 2:**

```
Input: nums = [1,5]
Output: 10

```

### Constraints

- `n == nums.length`
- `1 <= n <= 300`
- `0 <= nums[i] <= 100`

## Solution for Burst Ballons Problem

  
### Brute Force - Recursion

#### Intuition
When I first get this problem, it is far from dynamic programming to me. I started with the most naive idea the backtracking.

We have n balloons to burst, which mean we have n steps in the game. In the i th step we have `n-i` balloons to burst, `i = 0~n-1`. Therefore we are looking at an algorithm of $O(n!)$. Well, it is slow, probably works for `n < 12` only.

Of course this is not the point to implement it. We need to identify the redundant works we did in it and try to optimize.

Well, we can find that for any balloons left the maxCoins does not depends on the balloons already bursted. This indicate that we can use memorization (top down) or dynamic programming (bottom up) for all the cases from small numbers of balloon until n balloons. How many cases are there? For k balloons there are `C(n, k)` cases and for each case it need to scan the k balloons to compare. The sum is quite big still. It is better than $O(n!)$ but worse than $O(2^n)$.


#### Solution Using Recursion
<Tabs>
  <TabItem value="Brute Force" label="Brute Force">

#### Implementation

```jsx live
function coinChangeWrapper(arr) {
  class Solution {
    int solve(vector<int>nums){
        if(nums.size()==0){
            return 0;
        }
        int maxi=-1e9;
        for(int i=0;i<nums.size();i++){
            int product=nums[i];
            int k=nums[i];
            if(i-1>=0){
                product=product*nums[i-1];
            }
            if(i+1<nums.size()){
                product=product*nums[i+1];
            }
            nums.erase(nums.begin()+i);
             maxi=max(maxi,product+solve(nums));
            nums.insert(nums.begin()+i,k);
        }
        return maxi;
    }
public:
    int maxCoins(vector<int>& nums) {
        return solve(nums);
    }
};


  const input = [3,1,5,8]
  const sum = 167
  const output = maxCoins(input)
  return (
    <div>
      <p>
        <b>Input: </b>{ JSON.stringify(input)}
      </p>
      <p>
        <b>Output:</b> {output.toString()}
      </p>
    </div>
  );
}
```

#### Code in Different Languages

<Tabs>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@himanshukumar"/>
   ```python
   class Solution:
    def solve(self, nums):
        if len(nums) == 0:
            return 0
        
        maxi = -1e9
        for i in range(len(nums)):
            product = nums[i]
            k = nums[i]
            if i - 1 >= 0:
                product *= nums[i - 1]
            if i + 1 < len(nums):
                product *= nums[i + 1]
            nums.pop(i)
            maxi = max(maxi, product + self.solve(nums))
            nums.insert(i, k)
        return maxi

    def maxCoins(self, nums):
        return self.solve(nums)

```

  </TabItem>
 <TabItem value="Java" label="Java">
  <SolutionAuthor name="@himanshukumar"/>

```
import java.util.ArrayList;
import java.util.List;

class Solution {
    private int solve(List<Integer> nums) {
        if (nums.size() == 0) {
            return 0;
        }

        int maxi = Integer.MIN_VALUE;
        for (int i = 0; i < nums.size(); i++) {
            int product = nums.get(i);
            int k = nums.get(i);

            if (i - 1 >= 0) {
                product *= nums.get(i - 1);
            }
            if (i + 1 < nums.size()) {
                product *= nums.get(i + 1);
            }

            nums.remove(i);
            maxi = Math.max(maxi, product + solve(new ArrayList<>(nums)));
            nums.add(i, k);
        }
        return maxi;
    }

    public int maxCoins(int[] nums) {
        List<Integer> numList = new ArrayList<>();
        for (int num : nums) {
            numList.add(num);
        }
        return solve(numList);
    }
}


```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@himanshukumar"/>
   ```cpp
     
     class Solution {
    int solve(vector<int>nums){
        if(nums.size()==0){
            return 0;
        }
        int maxi=-1e9;
        for(int i=0;i<nums.size();i++){
            int product=nums[i];
            int k=nums[i];
            if(i-1>=0){
                product=product*nums[i-1];
            }
            if(i+1<nums.size()){
                product=product*nums[i+1];
            }
            nums.erase(nums.begin()+i);
             maxi=max(maxi,product+solve(nums));
            nums.insert(nums.begin()+i,k);
        }
        return maxi;
    }
public:
    int maxCoins(vector<int>& nums) {
        return solve(nums);
    }
};
    ```

  </TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $ O(2^n) $ is the time complexity, where n is the number of coins , because it has Overlapping subproblems
- Space Complexity: This approach doesn't need any auxilary space, but it maintains a recusion stack internally.
If we consider the recursion tree, there is a repetition of a few sub-trees.

### Optimized Approach - Memoization
#### Intuition
 We then think can we apply the divide and conquer technique? After all there seems to be many self similar sub problems from the previous analysis.

Well, the nature way to divide the problem is burst one balloon and separate the balloons into `2` sub sections one on the left and one one the right. However, in this problem the left and right become adjacent and have effects on the maxCoins in the future.

Then another interesting idea come up. Which is quite often seen in dp problem analysis. That is reverse thinking. Like I said the coins you get for a balloon does not depend on the balloons already burst. Therefore
instead of divide the problem by the first balloon to burst, we divide the problem by the last balloon to burst.

Why is that? Because only the first and last balloons we are sure of their adjacent balloons before hand!

For the first we have `nums[i-1]*nums[i]*nums[i+1]` for the last we have `nums[-1]*nums[i]*nums[n]`.

OK. Think about n balloons if i is the last one to burst, what now?

We can see that the balloons is again separated into 2 sections. But this time since the balloon i is the last balloon of all to burst, the left and right section now has well defined boundary and do not affect each other! Therefore we can do either recursive method with memoization or dp.


<Tabs>
 <TabItem value="C++" label="C++">
  <SolutionAuthor name="@himanshukumar"/>
   ```cpp
    int solve(vector<int>&nums,int low,int high,vector<vector<int>>&dp){
       if(low>high){
           return 0;
       }
        if(dp[low][high]!=-1){
            return dp[low][high];
        }
        int maxi=INT_MIN;
        for(int i=low;i<=high;i++){
            int cost=nums[i]*nums[low-1]*nums[high+1]+solve(nums,low,i-1,dp)+solve(nums,i+1,high,dp);
            maxi=max(maxi,cost);
        }
        return dp[low][high]=maxi;
    }
public:
    int maxCoins(vector<int>& nums) {
        int n=nums.size();
        nums.insert(nums.begin(),1);
        nums.push_back(1);
        vector<vector<int>>dp(n+2,vector<int>(n+2,0));
        // return solve(nums,1,n,dp);
        for(int i=n;i>=1;i--){
            for(int j=1;j<=n;j++){
                if(i>j){
                    continue;
                }
                int maxi=INT_MIN;
                for(int ind=i;ind<=j;ind++){
                    int cost=nums[ind]*nums[i-1]*nums[j+1]+dp[ind+1][j]+dp[i][ind-1];
                    maxi=max(cost,maxi);
                }
                dp[i][j]=maxi;
            }
        }
        return dp[1][n];
    }
};
    ```

  </TabItem>
</Tabs>

#### Complexity Analysis
- Time Complexity: $ O(N^3)$
  - Reason: There are N*A states therefore at max ‘N*A’ new problems will be solved. A is amount.
- Space Complexity: $O(N*N)$
  - Reason: We are using a recursion stack space(O(N)) and a 2D array ( O(N*A)).

### Using Tabulation Method 
#### Intuition
  Here comes the final solutions. Note that we put 2 balloons with 1 as boundaries and also burst all the zero balloons in the first round since they won't give any coins.
The algorithm runs in $O(n^3)$ which can be easily seen from the 3 loops in dp solution.

  <Tabs>
<TabItem value="C++" label="C++">
  <SolutionAuthor name="@himanshukumar"/>
   ```cpp
   int maxCoinsDP(vector<int> &iNums) {
    int nums[iNums.size() + 2];
    int n = 1;
    for (int x : iNums) if (x > 0) nums[n++] = x;
    nums[0] = nums[n++] = 1;


    int dp[n][n] = {};
    for (int k = 2; k < n; ++k) {
        for (int left = 0; left < n - k; ++left)
            int right = left + k;
            for (int i = left + 1; i < right; ++i)
                dp[left][right] = max(dp[left][right],
                     nums[left] * nums[i] * nums[right] + dp[left][i] + dp[i][right]);
        }

    return dp[0][n - 1];
}
    ```
    - Here Time and Space Complexity are same as memoized approach.
  </TabItem>
</Tabs>
</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Coin Change](https://leetcode.com/problems/burst-balloons/description/)

