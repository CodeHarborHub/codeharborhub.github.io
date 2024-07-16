---
id: distribute-elements-into-two-arrays-I
title: Distribute Elements Into Two Arrays I
sidebar_label: 3069-Distribute Elements Into Two Arrays I
tags:
  - Array
  - simulation
  
description: "This is a solution to the Distribute Elements Into Two Arrays I in leetcode"
---

## Problem Description

You are given a 1-indexed array of distinct integers nums of length n.

You need to distribute all the elements of nums between two arrays arr1 and arr2 using n operations. In the first operation, append nums[1] to arr1. In the second operation, append nums[2] to arr2. Afterwards, in the ith operation:

If the last element of arr1 is greater than the last element of arr2, append nums[i] to arr1. Otherwise, append nums[i] to arr2.
The array result is formed by concatenating the arrays arr1 and arr2. For example, if arr1 == [1,2,3] and arr2 == [4,5,6], then result = [1,2,3,4,5,6].

Return the array result.

 

 
### Examples

**Example 1:**

```
Input: nums = [2,1,3]
Output: [2,3,1]
Explanation: After the first 2 operations, arr1 = [2] and arr2 = [1].
In the 3rd operation, as the last element of arr1 is greater than the last element of arr2 (2 > 1), append nums[3] to arr1.
After 3 operations, arr1 = [2,3] and arr2 = [1].
Hence, the array result formed by concatenation is [2,3,1].

```
**Example 2:**
```
Input: nums = [5,4,3,8]
Output: [5,3,4,8]
Explanation: After the first 2 operations, arr1 = [5] and arr2 = [4].
In the 3rd operation, as the last element of arr1 is greater than the last element of arr2 (5 > 4), append nums[3] to arr1, hence arr1 becomes [5,3].
In the 4th operation, as the last element of arr2 is greater than the last element of arr1 (4 > 3), append nums[4] to arr2, hence arr2 becomes [4,8].
After 4 operations, arr1 = [5,3] and arr2 = [4,8].
Hence, the array result formed by concatenation is [5,3,4,8].
 
 ```
## Complexity Analysis

*** Time Complexity:** $O(n)$

*** Space Complexity:** $O(n)$

### Constraints

- `3 <= n <= 50`
- `1 <= nums[i] <= 100`
- All elements in `nums` are distinct.



### Solution
## Approach
The approach involves creating two lists, arr1 and arr2, to segregate the elements from the input list nums based on a comparison of the last elements in arr1 and arr2. Initially, the first two elements of nums are added to arr1 and arr2 respectively. For each subsequent element in nums, the algorithm compares the last element of arr1 with the last element of arr2. If the element in arr1 is greater, the current element is appended to arr1; otherwise, it is appended to arr2. After processing all elements, the two lists are concatenated, with arr2 being appended to the end of arr1. This approach ensures that the final list contains elements from arr1 followed by elements from arr2, based on the specified condition.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@ImmidiSivani"/>

```cpp

class Solution {
public:
    vector<int> resultArray(vector<int>& nums) {
        vector<int> arr1;
        vector<int> arr2;
        
        if (nums.empty()) return arr1;  
        
        arr1.push_back(nums[0]);
        if (nums.size() > 1) {
            arr2.push_back(nums[1]);
        }
        
        for (size_t i = 2; i < nums.size(); ++i) {
            if (arr1.back() > arr2.back()) {
                arr1.push_back(nums[i]);
            } else {
                arr2.push_back(nums[i]);
            }
        }
        
        arr1.insert(arr1.end(), arr2.begin(), arr2.end());
        return arr1;
    }
};


```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@ImmidiSivani"/>

```java

class Solution {
    public List<Integer> resultArray(List<Integer> nums) {
        List<Integer> arr1 = new ArrayList<>();
        List<Integer> arr2 = new ArrayList<>();
        
        if (nums.isEmpty()) return arr1;  // Return empty if input is empty
        
        arr1.add(nums.get(0));
        if (nums.size() > 1) {
            arr2.add(nums.get(1));
        }
        
        for (int i = 2; i < nums.size(); i++) {
            if (arr1.get(arr1.size() - 1) > arr2.get(arr2.size() - 1)) {
                arr1.add(nums.get(i));
            } else {
                arr2.add(nums.get(i));
            }
        }
        
        arr1.addAll(arr2);
        return arr1;
    }
}


```
</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def resultArray(self, nums: List[int]) -> List[int]:
        arr1=[]
        arr2=[]
        arr1.append(nums[0])
        arr2.append(nums[1])
        for i in range(2,len(nums)):
            if arr1[-1]>arr2[-1]:
                arr1.append(nums[i])
            else:
                arr2.append(nums[i])
        return arr1+arr2

```
</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Distribute Elements Into Two Arrays I](https://leetcode.com/problems/distribute-elements-into-two-arrays-i/description/)

- **Solution Link**: [Distribute Elements Into Two Arrays I](https://leetcode.com/problems/distribute-elements-into-two-arrays-i/post-solution/?submissionId=1192661489)
