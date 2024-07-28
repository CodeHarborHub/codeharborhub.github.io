---
id: set mismatch
title: Set Mismatch
sidebar_label: 645-Set Mismatch
tags:
  - Arrays
  - Hashing
  - LeetCode
  - Java
  - Python
  - C++
description: "This is a solution to the Set Mismatch problem on LeetCode."
sidebar_position: 3
---

## Problem Description

You have a set of integers `s`, which originally contains all the numbers from 1 to `n`. Unfortunately, due to some error, one of the numbers in `s` got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array `nums` representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

### Examples

**Example 1:**

```
Input: nums = [1,2,2,4]
Output: [2,3]
```

**Example 2:**

```
Input: nums = [1,1]
Output: [1,2]
```

### Constraints

- `2 <= nums.length <= 10^4`
- `1 <= nums[i] <= 10^4`

---

## Solution for Find Error Numbers Problem

To solve this problem, you need to identify the duplicated number and the missing number in the array.

### Approach: Counting Frequency

1. **Count Frequencies:** Use a dictionary or a list to count the frequency of each number in the array.
2. **Identify Duplicated and Missing Numbers:**
   - The number with a frequency of 2 is the duplicated number.
   - The number with a frequency of 0 (among the numbers from 1 to n) is the missing number.

### Brute Force Approach

The brute force approach involves iterating over the numbers from 1 to `n` and checking their frequency in the given array. This can be achieved by:

1. Initializing an array to count the frequency of each number.
2. Iterating through the input array to update the frequency count.
3. Checking which number has a frequency of 2 (the duplicated number) and which number has a frequency of 0 (the missing number).

### Optimized Approach

The optimized approach avoids using extra space and iterates through the input array only twice:

1. Iterate through the array and mark the corresponding indices as visited by flipping the sign of the elements.
2. In the second pass, the index with a positive value indicates the missing number, and the duplicate can be identified by the repeated index encountered in the first pass.

### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    vector<int> findErrorNums(vector<int>& nums) {
        int n = nums.size();
        vector<int> freq(n + 1, 0);
        vector<int> result(2, 0);

    
        for (int num : nums) {
            freq[num]++;
        }

    
        for (int i = 1; i <= n; i++) {
            if (freq[i] == 2) result[0] = i;
            else if (freq[i] == 0) result[1] = i; 
        }

        return result;
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public int[] findErrorNums(int[] nums) {
        int[] freq = new int[nums.length + 1];
        int[] result = new int[2];

        
        for (int num : nums) {
            freq[num]++;
        }

        
        for (int i = 1; i < freq.length; i++) {
            if (freq[i] == 2) result[0] = i; 
            else if (freq[i] == 0) result[1] = i; 
        }

        return result;
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        freq = [0] * (len(nums) + 1)
        result = [0, 0]

        
        for num in nums:
            freq[num] += 1

        
        for i in range(1, len(freq)):
            if freq[i] == 2:
                result[0] = i  
            elif freq[i] == 0:
                result[1] = i  

        return result
```

</TabItem>
</Tabs>

#### Complexity Analysis

- **Time Complexity**: $O(n)$, where `n` is the length of the input array.
- **Space Complexity**: $O(n)$, due to the frequency array used to count occurrences of each number.

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['ImmidiSivani'].map(username => (
 <Author key={username} username={username} />
))}
</div>