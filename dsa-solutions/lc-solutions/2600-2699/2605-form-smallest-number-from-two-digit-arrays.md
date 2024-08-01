---
id: form-smallest-number-from-two-digit-arrays
title: Form Smallest Number From Two Digit Arrays
sidebar_label: 2605. Form Smallest Number From Two Digit Arrays
tags:
- Array
- Hash Table
- Enumeration
description: "Solution to Leetcode 2605. Form Smallest Number From Two Digit Arrays"
---

## Problem Description

Given two arrays of unique digits nums1 and nums2, return the smallest number that contains at least one digit from each array.
 
### Examples

**Example 1:**

```
Input: nums1 = [4,1,3], nums2 = [5,7]
Output: 15
Explanation: The number 15 contains the digit 1 from nums1 and the digit 5 from nums2. It can be proven that 15 is the smallest number we can have.
```

**Example 2:**

```
Input: nums1 = [3,5,2,6], nums2 = [3,1,7]
Output: 3
Explanation: The number 3 contains the digit 3 which exists in both arrays.

```



### Constraints
- `1 <= nums1.length, nums2.length <= 9`
- `1 <= nums1[i], nums2[i] <= 9`

### Approach 
1. Sort both the Vectors.
2. Store the elements of nums1 into a map.
3. Now Traverse The map for each element in nums2 , if same element is found in both vectors return that element directly.
4. Simply return the nums1[0]*10 + nums2[0] if(nums1[0] &lt; nums2[0])
and nums2[0]*10 + nums1[0] if(nums1[0] &gt; nums2[0])

### Complexity

Time complexity: $O(n)$

Space complexity: $O(n)$

### Solution

#### Code in Different Languages

#### C++

 ```cpp
class Solution {
public:
    int minNumber(vector<int> &nums1, vector<int> &nums2) {
        int n1 = nums1.size();
        int n2 = nums2.size();
        sort(nums1.begin(), nums1.end());
        sort(nums2.begin(), nums2.end());
        map<int,int>map;   //Store the element of nums1 into a map.    
        for(int i=0;i<n1;i++){
            map[nums1[i]]++;
        }
        // Now Traverse The map for each element in nums2 , if same element is found in both array return that element directly. 
        for(int i=0;i<n2;i++){
            if(map.find(nums2[i])!=map.end()){
                return nums2[i];
            }
        }
        if(nums1[0] < nums2[0]){
            return nums1[0]*10 + nums2[0];
        }
        else{
            return nums2[0]*10 + nums1[0];
        }
    }
};
 ```

#### JAVA

```java
class Solution {
    public int minNumber(int[] nums1, int[] nums2) {
        int val = Integer.MAX_VALUE;
        for(int i=0; i<nums1.length; i++){
            for(int j=0; j<nums2.length; j++){
                if(nums1[i] == nums2[j])  val = Math.min(val,nums1[i]);
                val = Math.min(val,Math.min(nums1[i]*10+nums2[j],nums2[j]*10+nums1[i]));
            }
        }
        return val;
    }
}

```

#### PYTHON

```python
    def minNumber(self, nums1: List[int], nums2: List[int]) -> int:
        s1, s2 = set(nums1), set(nums2)
        if s1 & s2:
            return min(s1 & s2)
        a, b = min(nums1), min(nums2)
        return min(a, b) * 10 + max(a, b)
        
```



### Complexity Analysis

- Time Complexity: $O(n)$ 

- Space Complexity: $O(n)$ 

### References

- **LeetCode Problem**: Form Smallest Number From Two Digit Arrays
