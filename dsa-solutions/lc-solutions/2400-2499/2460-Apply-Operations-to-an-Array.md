---
id:  Apply-Operations-to-an-Array
title:  Apply Operations to an Array
sidebar_label: 2460-Apply Operations to an Array
tags: [dsa, leetcode]
description: Problem solution of  Apply Operations to an Array
---

## Problem Statement 

### Problem Description

You are given a 0-indexed array nums of size n consisting of non-negative integers.

You need to apply n - 1 operations to this array where, in the ith operation (0-indexed), you will apply the following on the ith element of nums:

If nums[i] == nums[i + 1], then multiply nums[i] by 2 and set nums[i + 1] to 0. Otherwise, you skip this operation.
After performing all the operations, shift all the 0's to the end of the array.

For example, the array [1,0,2,0,0,1] after shifting all its 0's to the end, is [1,2,1,0,0,0].
Return the resulting array.

Note that the operations are applied sequentially, not all at once.
 
### Examples

#### Example 1
```
Input: nums = [1,2,2,1,1,0]
Output: [1,4,2,0,0,0]
Explanation: We do the following operations:
- i = 0: nums[0] and nums[1] are not equal, so we skip this operation.
- i = 1: nums[1] and nums[2] are equal, we multiply nums[1] by 2 and change nums[2] to 0. The array becomes [1,4,0,1,1,0].
- i = 2: nums[2] and nums[3] are not equal, so we skip this operation.
- i = 3: nums[3] and nums[4] are equal, we multiply nums[3] by 2 and change nums[4] to 0. The array becomes [1,4,0,2,0,0].
- i = 4: nums[4] and nums[5] are equal, we multiply nums[4] by 2 and change nums[5] to 0. The array becomes [1,4,0,2,0,0].
After that, we shift the 0's to the end, which gives the array [1,4,2,0,0,0].

```

### Example 2
```
Input: nums = [0,1]
Output: [1,0]
Explanation: No operation can be applied, we just shift the 0 to the end.

```
### Constraints

- `2 <= nums.length <= 2000`
- `0 <= nums[i] <= 1000`

## Solution of Given Problem

### Intuition and Approach

The problem can be solved using a brute force approach or an optimized Technique.

<Tabs>
<tabItem value="Brute Force" label="Brute Force">

### Approach 1:Brute Force (Naive)


Brute Force Approach: 
Iterate through the array and for each i, check if nums[i] is equal to nums[i + 1].
If they are equal, multiply nums[i] by 2 and set nums[i + 1] to 0.
After all operations are performed, create a new array by collecting all non-zero elements followed by all zero elements.
#### Codes in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <iostream>
#include <vector>

std::vector<int> applyOperations(std::vector<int>& nums) {
    int n = nums.size();
    
    for (int i = 0; i < n - 1; ++i) {
        if (nums[i] == nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }

    std::vector<int> result;
    for (int num : nums) {
        if (num != 0) {
            result.push_back(num);
        }
    }
    while (result.size() < n) {
        result.push_back(0);
    }

    return result;
}

int main() {
    std::vector<int> nums = {1, 2, 2, 1, 1, 0};
    std::vector<int> result = applyOperations(nums);
    for (int num : result) {
        std::cout << num << " ";
    }
    std::cout << std::endl;  // Output: 1 4 2 0 0 0
    return 0;
}

```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
import java.util.*;

public class ApplyOperations {
    public static int[] applyOperations(int[] nums) {
        int n = nums.length;
        
        for (int i = 0; i < n - 1; i++) {
            if (nums[i] == nums[i + 1]) {
                nums[i] *= 2;
                nums[i + 1] = 0;
            }
        }
        
        int[] result = new int[n];
        int idx = 0;
        for (int num : nums) {
            if (num != 0) {
                result[idx++] = num;
            }
        }
        
        return result;
    }

    public static void main(String[] args) {
        int[] nums = {1, 2, 2, 1, 1, 0};
        int[] result = applyOperations(nums);
        System.out.println(Arrays.toString(result));  // Output: [1, 4, 2, 0, 0, 0]
    }
}

```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
def apply_operations(nums):
    n = len(nums)
    
    for i in range(n - 1):
        if nums[i] == nums[i + 1]:
            nums[i] *= 2
            nums[i + 1] = 0
    
    result = [num for num in nums if num != 0]
    result.extend([0] * (n - len(result)))
    
    return result

nums = [1, 2, 2, 1, 1, 0]
print(apply_operations(nums))  # Output: [1, 4, 2, 0, 0, 0]

```

</TabItem>
</Tabs>


### Complexity Analysis

- Time Complexity: $O(n)$
-  for the operations and for shifting zeros.
- Space Complexity: $O(n)$
-   for the additional array.
</tabItem>
<tabItem value="Optimized approach" label="Optimized approach">

### Approach 2: Optimized approach

Optimized Approach: 
Iterate through the array and perform the operations in place.
After performing all operations, use two pointers to move all non-zero elements to the front and fill the remaining elements with zeros.
#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <iostream>
#include <vector>

std::vector<int> applyOperations(std::vector<int>& nums) {
    int n = nums.size();
    
    for (int i = 0; i < n - 1; ++i) {
        if (nums[i] == nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }

    int index = 0;
    for (int i = 0; i < n; ++i) {
        if (nums[i] != 0) {
            nums[index++] = nums[i];
        }
    }

    while (index < n) {
        nums[index++] = 0;
    }

    return nums;
}

int main() {
    std::vector<int> nums = {1, 2, 2, 1, 1, 0};
    std::vector<int> result = applyOperations(nums);
    for (int num : result) {
        std::cout << num << " ";
    }
    std::cout << std::endl;  // Output: 1 4 2 0 0 0
    return 0;
}

```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
import java.util.*;

public class ApplyOperations {
    public static int[] applyOperations(int[] nums) {
        int n = nums.length;
        
        for (int i = 0; i < n - 1; i++) {
            if (nums[i] == nums[i + 1]) {
                nums[i] *= 2;
                nums[i + 1] = 0;
            }
        }
        
        int index = 0;
        for (int i = 0; i < n; i++) {
            if (nums[i] != 0) {
                nums[index++] = nums[i];
            }
        }
        
        while (index < n) {
            nums[index++] = 0;
        }
        
        return nums;
    }

    public static void main(String[] args) {
        int[] nums = {1, 2, 2, 1, 1, 0};
        int[] result = applyOperations(nums);
        System.out.println(Arrays.toString(result));  // Output: [1, 4, 2, 0, 0, 0]
    }
}

```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
def apply_operations(nums):
    n = len(nums)
    
    for i in range(n - 1):
        if nums[i] == nums[i + 1]:
            nums[i] *= 2
            nums[i + 1] = 0
    
    index = 0
    for i in range(n):
        if nums[i] != 0:
            nums[index] = nums[i]
            index += 1
    
    while index < n:
        nums[index] = 0
        index += 1
    
    return nums

nums = [1, 2, 2, 1, 1, 0]
print(apply_operations(nums))  # Output: [1, 4, 2, 0, 0, 0]


```

</TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(n)$
-  for both operations and shifting.
- Space Complexity: $O(1)$
-  as no extra space is required.
</tabItem>
</Tabs>


## Video Explanation of Given Problem

    <LiteYouTubeEmbed
      id="GLHChPK8VQ8"
      params="autoplay=1&autohide=1&showinfo=0&rel=0"
      title="Problem Explanation | Solution | Approach"
      poster="maxresdefault"
      webp 
    />

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['AmruthaPariprolu'].map(username => (
 <Author key={username} username={username} />
))}
</div>

