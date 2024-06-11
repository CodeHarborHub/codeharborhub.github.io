---
id: count-elements-with-maximum-frequency
title: Count Elements With Maximum Frequency
sidebar_label: 3005 -Count Elements With Maximum Frequency
tags:
  - Array
  - Hash Table
  - Counting
description: "This is a solution to the Count Elements With Maximum Frequency problem on LeetCode."
---

## Problem Description

You are given an array nums consisting of positive integers.

Return the total frequencies of elements in nums such that those elements all have the maximum frequency.

The frequency of an element is the number of occurrences of that element in the array.

### Examples

**Example 1:**

```
Input: nums = [1,2,2,3,1,4]
Output: 4
Explanation: The elements 1 and 2 have a frequency of 2 which is the maximum frequency in the array.
So the number of elements in the array with maximum frequency is 4.

```

**Example 2:**

```
Input: nums = [1,2,3,4,5]
Output: 5
Explanation: All elements of the array have a frequency of 1 which is the maximum.
So the number of elements in the array with maximum frequency is 5.

```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

## Solution for Count Elements With Maximum Frequency

### Intuition

To solve this problem, we can use a HashMap to count the frequency of each element in the given array. Then, we iterate through the values of the HashMap to find the maximum frequency. Finally, we iterate through the values again to count the total number of elements with the maximum frequency.

### Approach

Initialize a vector freq of size 101 to store the frequency of each number. This assumes that the numbers in the input vector are in the range [0, 100].

Iterate through the input vector and update the frequency of each number in the freq vector.

Initialize variables ans and temp to keep track of the maximum frequency and the current frequency, respectively.

Iterate through the freq vector from index 1 to 100.

If the frequency at the current index is equal to temp, add it to the answer (ans).

If the frequency at the current index is greater than temp, update ans to be the current frequency and update temp.
Return the final answer.

### Solution Code

#### Python

```py
class Solution:
    def maxFrequencyElements(self, nums: List[int]) -> int:
        di=defaultdict(int)
        m,c=0,0
        for i in nums:
            di[i]+=1
            if di[i]>m:
                m=di[i]
                c=0
            if di[i]==m:
                c+=1
        return m*c


```

#### Java

```java
class Solution {
    public int maxFrequencyElements(int[] nums) {
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        int mf = 0, m = -1;
        for (Integer c : nums) {
            if (map.containsKey(c)) map.put(c, map.get(c) + 1);
            else map.put(c, 1);
        }
        for(Integer t: map.values()){
            if(t>m){
                m = t;
                mf = 1;
            }else if(t==m) mf++;
        }
        return mf*m;
    }
}

```

#### C++

```cpp
class Solution
{
public:
    int maxFrequencyElements(vector<int> &nums)
    {
        vector<int> freq(101, 0);

        for (int i = 0; i < nums.size(); i++)
        {
            freq[nums[i]]++;
        }

        int ans = 0;
        int temp = 0;

        for (int i = 1; i < 101; i++)
        {
            if (freq[i] == temp) {
                ans += freq[i];
            } else if (freq[i] > temp) {
                ans = freq[i];
                temp = freq[i];
            }
        }

        return ans;
    }
};
```

#### Complexity Analysis

- Time complexity: $O(nlog(n))$, where n is the total number of elements in nums
- Space complexity:$O(nlog(n))$, where n is the total number of elements in nums
