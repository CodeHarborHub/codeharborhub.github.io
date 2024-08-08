---
id: sign-of-the-product-of-an-array
title: Sign of the Product of an Array
sidebar_label: 1822-Sign of the Product of an Array
tags:
  - Array
  - Mathematics
  - LeetCode
  - Java
  - Python
  - C++
description: "This is a solution to the Sign of the Product of an Array problem on LeetCode."
sidebar_position: 40
---

## Problem Description

There is a function `signFunc(x)` that returns:

- `1` if `x` is positive.
- `-1` if `x` is negative.
- `0` if `x` is equal to `0`.

You are given an integer array `nums`. Let `product` be the product of all values in the array `nums`.

Return `signFunc(product)`.

### Examples

**Example 1:**

```
Input: nums = [-1,-2,-3,-4,3,2,1]
Output: 1
Explanation: The product of all values in the array is 144, and signFunc(144) = 1
```

**Example 2:**

```
Input: nums = [1,5,0,2,-3]
Output: 0
Explanation: The product of all values in the array is 0, and signFunc(0) = 0
```

**Example 3:**

```
Input: nums = [-1,1,-1,1,-1]
Output: -1
Explanation: The product of all values in the array is -1, and signFunc(-1) = -1
```

### Constraints

- `1 <= nums.length <= 1000`
- `-100 <= nums[i] <= 100`

---

## Solution for Array Sign Problem

To solve this problem, we can use the following approach:

1. **Check for Zero**: If any element in the array is zero, the product of the entire array will be zero. In this case, `signFunc(product)` will be `0`.

2. **Count Negative Numbers**: If there are no zeros, count the number of negative numbers in the array. The sign of the product will be determined by whether the count of negative numbers is odd or even:
   - If the count is odd, the product will be negative, so `signFunc(product)` will be `-1`.
   - If the count is even, the product will be positive, so `signFunc(product)` will be `1`.

### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
#include <vector>
using namespace std;

class Solution {
public:
    int arraySign(vector<int>& nums) {
        int negativeCount = 0;
        
        for (int num : nums) {
            if (num == 0) {
                
                return 0;
            } else if (num < 0) {
                
                negativeCount++;
            }
        }
        
        return (negativeCount % 2 == 0) ? 1 : -1;
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
import java.util.List;

class Solution {
    public int arraySign(int[] nums) {
        int negativeCount = 0;
        
        for (int num : nums) {
            if (num == 0) {
        
                return 0;
            } else if (num < 0) {
                
                negativeCount++;
            }
        }
        
        
        return (negativeCount % 2 == 0) ? 1 : -1;
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
from typing import List

class Solution:
    def arraySign(self, nums: List[int]) -> int:
        negative_count = 0
        
        for num in nums:
            if num == 0:

                return 0
            elif num < 0:

                negative_count += 1
        return -1 if negative_count % 2 else 1
```

</TabItem>
</Tabs>

#### Complexity Analysis

- **Time Complexity**: $O(n)$, where `n` is the length of the `nums` array. We traverse the array once to check each element.
- **Space Complexity**: $O(1)$, as we use a constant amount of extra space for counting negative numbers.

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['ImmidiSivani'].map(username => (
 <Author key={username} username={username} />
))}
</div>
```