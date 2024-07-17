---
id: Two-out-of-three
title: Two Out of Three
sidebar_label: 2032 - Two Out of Three
tags: [Array, Hash Table, Set, C++]
description: Return a distinct array containing all the values that are present in at least two out of the three arrays.
sidebar_position: 33
---

## Problem Statement 

### Problem Description

Given three integer arrays `nums1`, `nums2`, and `nums3`, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.

### Examples

**Example 1:**

    Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
    Output: [3,2]
    Explanation: The values that are present in at least two arrays are:
    - 3, in all three arrays.
    - 2, in nums1 and nums2.



### Intuition

The given solution uses an `unordered_map` to keep track of the presence of elements across the three arrays. Here's the step-by-step breakdown of the approach:

1. **Initialization**: An `unordered_map<int, char>` is used to store each element as the key and a character as the value to track its presence in the arrays.
2. **First Array Processing**: Iterate through the first array `nums1` and mark each element with 'A' in the map.
3. **Second Array Processing**: Iterate through the second array `nums2`:
    - If the element is already marked 'A' or 'C' (indicating it was in `nums1`), mark it 'C'.
    - Otherwise, mark it 'B'.
4. **Third Array Processing**: Iterate through the third array `nums3`:
    - If the element is marked 'C', 'B', or 'A', keep it 'C'.
    - Otherwise, mark it 'K'.
5. **Re-processing First Array**: Iterate through the first array `nums1` again:
    - If the element is marked 'B', 'K', or 'C', mark it 'C'.
    - Otherwise, keep it 'A'.
6. **Result Construction**: Finally, iterate through the map and collect all keys marked 'C' into the result vector `ans`.

This approach ensures that any element present in at least two out of the three arrays is marked 'C' and included in the result.

### Time Complexity Analysis

The time complexity of the solution can be broken down into the following parts:

1. **Initialization of Map**: Initializing the map with elements from `nums1` takes O(n1) time, where n1 is the length of `nums1`.
2. **Processing Second Array**: Processing the elements in `nums2` takes O(n2) time, where n2 is the length of `nums2`.
3. **Processing Third Array**: Processing the elements in `nums3` takes O(n3) time, where n3 is the length of `nums3`.
4. **Re-processing First Array**: Re-processing the elements in `nums1` takes O(n1) time.
5. **Result Construction**: Constructing the result vector from the map takes O(m) time, where m is the number of distinct elements across the three arrays (bounded by max(n1, n2, n3)).

Therefore, the overall time complexity is:

\[ O(n1 + n2 + n3) \]

The space complexity is dominated by the space required for the `unordered_map`, which stores up to O(n1 + n2 + n3) distinct elements.

### Code

### C++
```
    class Solution {
    public:
        vector<int> twoOutOfThree(vector<int>& nums1, vector<int>& nums2, vector<int>& nums3) {
            unordered_map<int, char> mp;
            for (auto i : nums1) mp[i] = 'A';
            for (auto i : nums2) {
                if (mp[i] == 'A' || mp[i] == 'C') mp[i] = 'C';
                else mp[i] = 'B';
            }
            for (auto i : nums3) {
                if (mp[i] == 'C' || mp[i] == 'B' || mp[i] == 'A') mp[i] = 'C';
                else mp[i] = 'K';
            }
            for (auto i : nums1) {
                if (mp[i] == 'B' || mp[i] == 'K' || mp[i] == 'C') mp[i] = 'C';
                else mp[i] = 'A';
            }
            vector<int> ans;
            for (auto i : mp) if (i.second == 'C') ans.push_back(i.first);
            return ans;
        }
    };
```
### JavaScript
```

    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @param {number[]} nums3
     * @return {number[]}
     */
    var twoOutOfThree = function(nums1, nums2, nums3) {
    
        const res = []
        const arr = new Set ([...nums1,...nums2,...nums3])
    
        arr.forEach((val)=>{
            if(nums1.includes(val) && nums2.includes(val) || nums1.includes(val) 
            && nums3.includes(val) || nums2.includes(val) && nums3.includes(val)){
                res.push(val)
            }
        })
        
        return res    
    };
```
### Java
```

    class Solution {
        public List<Integer> twoOutOfThree(int[] nums1, int[] nums2, int[] nums3) {
            Set<Integer> set = new HashSet<>();
            for(int num : nums1)
                set.add(num);
            
            List<Integer> result = new ArrayList<>();
            Set<Integer> set2 = new HashSet<>();
            for(int num : nums2){
                if(set.contains(num) && !set2.contains(num))
                    result.add(num);
             
                set2.add(num);
            }
            
            for(int num : nums3)
                if(!result.contains(num) && (set.contains(num) || set2.contains(num)))
                    result.add(num);
            
            return result;
        }
    }
```
