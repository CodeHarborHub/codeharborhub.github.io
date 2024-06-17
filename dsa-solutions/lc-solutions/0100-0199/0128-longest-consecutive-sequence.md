---
id: longest-consecutive-sequence
title: Longest Consecutive Sequence(LeetCode)
sidebar_label: 0128-Longest Consecutive Sequence
tags:
  - Array
  - Hash Table
  - Union Find
description: Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
---

## Problem Statement

Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in `O(n)` time.

### Examples

**Example 1:**

```plaintext
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
```

**Example 2:**

```plaintext
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
```

### Constraints

- `0 <= nums.length <= 105`
- `-109 <= nums[i] <= 109`

## Solution

We can solve the problem of finding the longest consecutive sequence in an array using four different approaches: Brute Force, Sorting, Hash Table with an unordered map, and Hash Table with an unordered set. Each approach has its own advantages and drawbacks in terms of time and space complexity.

### Approach 1: Brute Force

#### Algorithm

1. Initialize a variable to keep track of the longest consecutive sequence.
2. Iterate through each element in the array.
3. For each element, use a nested loop to check if the next consecutive number exists in the array.
4. Keep track of the length of the current consecutive sequence.
5. Update the longest consecutive sequence if the current sequence is longer.
6. Return the length of the longest consecutive sequence.

#### Implementation

```C++
class Solution {
private: 
    bool longestConsecutive(vector<int>& nums, int target){
        int n = nums.size();
        for(int i=0; i<n; i++){
            if(nums[i] == target){
                return true;
            }
        }
        return false;
    }
public:
    int longestConsecutive(vector<int>& nums) {
        int n = nums.size();
        int longestConsecutiveSequence = 0;
        for(auto num : nums){
            int currentNumber = num;
            int currentConsecutiveSequence = 1;
            while(longestConsecutive(nums, currentNumber+1)){
                currentNumber += 1;
                currentConsecutiveSequence += 1;
            }
            longestConsecutiveSequence = max(longestConsecutiveSequence, currentConsecutiveSequence);
        }
        return longestConsecutiveSequence;
    }
};
```

### Complexity Analysis

- **Time complexity**:  O(N^3)
- **Space complexity**: O(1)

### Approach 2: Sorting

#### Algorithm

1. Sort the array.
2. Initialize variables to keep track of the current consecutive sequence and the longest consecutive sequence.
3. Iterate through the sorted array.
4. If the current element is consecutive to the previous element, increase the current sequence length.
5. If not, update the longest sequence length and reset the current sequence length.
6. Return the length of the longest consecutive sequence.
  
#### Implementation 

```C++
class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        int n = nums.size();
        if(n == 0){
            return 0;
        }
        sort(nums.begin(), nums.end());
        int currentConsecutiveSequence = 1;
        int longestConsecutiveSequence = 0;
        for(int i=1; i<n; i++){
            if(nums[i] != nums[i-1]){
                if(nums[i] == nums[i-1] + 1){
                    currentConsecutiveSequence++;
                }
                else{
                    longestConsecutiveSequence = max(longestConsecutiveSequence, currentConsecutiveSequence);
                    currentConsecutiveSequence = 1;
                }
            }
        }
        return max(longestConsecutiveSequence, currentConsecutiveSequence);
    }
};
```

### Complexity Analysis

- **Time complexity**:  O(N log N)
- **Space complexity**: O(1)

### Approach 3: Hash Table with Unordered Map

#### Algorithm

1. Create an unordered map to store each element in the array.
2. Iterate through the array and mark each element as the start of a sequence if it is not part of a longer sequence.
3. For each element, count the length of the sequence it starts and update the maximum length.
4. Return the length of the longest consecutive sequence.

#### Implementation 

```C++
class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        unordered_map<int, bool> map;
        for(int i = 0; i<nums.size(); i++){
            map[nums[i]] = true;
        }
        for(int i=0; i<nums.size(); i++){
            if(map.count(nums[i]-1) > 0){
                map[nums[i]] = false;
            }
        }
        int maxlen = 0;
        for(int i=0; i<nums.size(); i++){
            if(map[nums[i]] == true){
                int j=0; int count=0;
                while(map.count(nums[i]+j) > 0){
                    j++;
                    count++;
                }
                if(count>maxlen){
                    maxlen = count;
                }
            }
        }
        return maxlen;
    }
};
```

### Complexity Analysis

- **Time complexity**: O(N)
- **Space complexity**: O(N)

### Approach 4: Hash Table with Unordered Set

#### Algorithm

1. Create an unordered set to store each element in the array.
2. Iterate through the array.
3. For each element, check if it is the start of a sequence.
4. If it is, count the length of the sequence it starts and update the maximum length.
5. Return the length of the longest consecutive sequence.

#### Implementation 

```C++
class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        unordered_set<int> set;
        for(int num : nums){
            set.insert(num);
        }
        int longestConsecutiveSequence = 0;
        for(int num : nums){
            if(set.find(num-1) == set.end()){
                int currentNumber = num;
                int currentConsecutiveSequence = 1;
                while(set.find(currentNumber+1) != set.end()){
                    currentNumber++;
                    currentConsecutiveSequence++;
                }
                longestConsecutiveSequence = max(longestConsecutiveSequence, currentConsecutiveSequence);
            }
        }
        return longestConsecutiveSequence;
    }
};
```

### Complexity Analysis

- **Time complexity**: O(N)
- **Space complexity**: O(N)


### Conclusion

Among the four approaches, the optimized approaches using hash tables (unordered map or unordered set) are the most efficient with a time complexity of O(N) and space complexity of O(N). The brute force approach, while straightforward, is inefficient with a time complexity of O(N^3). The sorting approach is better but still not as efficient as the hash table approaches. The hash table with unordered set approach is particularly simple and effective for solving the longest consecutive sequence problem in linear time.
