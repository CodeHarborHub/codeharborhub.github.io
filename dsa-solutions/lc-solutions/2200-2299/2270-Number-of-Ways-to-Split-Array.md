---
id: Number-of-Ways-to-Split-Array
title: Number of Ways to Split Array
sidebar_label: 2270-Number of Ways to Split Array
tags: 
  - Arrays
  - Brute Force
  - Optimized approach
  - LeetCode
  - Python
  - Java
  - C++

description: "This is a solution to Number of Ways to Split Array problem on LeetCode."
sidebar_position: 71
---

## Problem Statement 
In this tutorial, we will solve the Number of Ways to Split Array problem . We will provide the implementation of the solution in Python, Java, and C++.

### Problem Description

You are given a 0-indexed integer array nums of length n.

nums contains a valid split at index i if the following are true:

The sum of the first i + 1 elements is greater than or equal to the sum of the last n - i - 1 elements.
There is at least one element to the right of i. That is, 0 &lt;= i &lt; n - 1.
Return the number of valid splits in nums.
 
### Examples

**Example 1:**
Input: nums = [10,4,-8,7]
Output: 2
Explanation: 
There are three ways of splitting nums into two non-empty parts:
- Split nums at index 0. Then, the first part is [10], and its sum is 10. The second part is [4,-8,7], and its sum is 3. Since 10 >= 3, i = 0 is a valid split.
- Split nums at index 1. Then, the first part is [10,4], and its sum is 14. The second part is [-8,7], and its sum is -1. Since 14 >= -1, i = 1 is a valid split.
- Split nums at index 2. Then, the first part is [10,4,-8], and its sum is 6. The second part is [7], and its sum is 7. Since 6 < 7, i = 2 is not a valid split.
Thus, the number of valid splits in nums is 2.
**Example 2:**
Input: nums = [2,3,1,0]
Output: 2
Explanation: 
There are two valid splits in nums:
- Split nums at index 1. Then, the first part is [2,3], and its sum is 5. The second part is [1,0], and its sum is 1. Since 5 >= 1, i = 1 is a valid split. 
- Split nums at index 2. Then, the first part is [2,3,1], and its sum is 6. The second part is [0], and its sum is 0. Since 6 >= 0, i = 2 is a valid split.
 
### Constraints
- `2 <= nums.length <= 105`
- `-105 <= nums[i] <= 105`
## Solution of Given Problem

### Intuition and Approach

The problem can be solved using a brute force approach or an optimized Technique.

<Tabs>
<tabItem value="Brute Force" label="Brute Force">

### Approach 1:Brute Force (Naive)


Brute Force Approach: In the brute force approach, we will iterate through all possible split points and check if the condition of a valid split is satisfied.
#### Codes in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <vector>
#include <numeric>
#include <iostream>

int validSplitsBruteForce(const std::vector<int>& nums) {
    int n = nums.size();
    int count = 0;
    for (int i = 0; i < n - 1; ++i) {
        int leftSum = std::accumulate(nums.begin(), nums.begin() + i + 1, 0);
        int rightSum = std::accumulate(nums.begin() + i + 1, nums.end(), 0);
        if (leftSum >= rightSum) {
            count++;
        }
    }
    return count;
}

int main() {
    std::vector<int> nums = {10, 4, -8, 7};
    std::cout << "Number of valid splits: " << validSplitsBruteForce(nums) << std::endl;
    return 0;
}


```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
import java.util.*;

public class Main {
    public static int validSplitsBruteForce(int[] nums) {
        int n = nums.length;
        int count = 0;
        for (int i = 0; i < n - 1; ++i) {
            int leftSum = 0, rightSum = 0;
            for (int j = 0; j <= i; ++j) {
                leftSum += nums[j];
            }
            for (int j = i + 1; j < n; ++j) {
                rightSum += nums[j];
            }
            if (leftSum >= rightSum) {
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        int[] nums = {10, 4, -8, 7};
        System.out.println("Number of valid splits: " + validSplitsBruteForce(nums));
    }
}


```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
def valid_splits_brute_force(nums):
    n = len(nums)
    count = 0
    for i in range(n - 1):
        left_sum = sum(nums[:i + 1])
        right_sum = sum(nums[i + 1:])
        if left_sum >= right_sum:
            count += 1
    return count

nums = [10, 4, -8, 7]
print("Number of valid splits:", valid_splits_brute_force(nums))


```

</TabItem>
</Tabs>


### Complexity Analysis

- Time Complexity: $O(n^2)$
-  because for each split point, we calculate the sum of the left and right parts independently, leading to nested iterations.
- Space Complexity: $O(1)$
-  as no extra space is used other than a few variables for counting and summing.

</tabItem>
<tabItem value="Optimized approach" label="Optimized approach">

### Approach 2: Optimized approach

Optimized Approach: In the optimized approach, we will use prefix sums to avoid recalculating the sum of elements multiple times. 

#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <vector>
#include <iostream>

int validSplitsOptimized(const std::vector<int>& nums) {
    int n = nums.size();
    int totalSum = 0;
    for (int num : nums) {
        totalSum += num;
    }

    int leftSum = 0, count = 0;
    for (int i = 0; i < n - 1; ++i) {
        leftSum += nums[i];
        if (leftSum >= totalSum - leftSum) {
            count++;
        }
    }
    return count;
}

int main() {
    std::vector<int> nums = {10, 4, -8, 7};
    std::cout << "Number of valid splits: " << validSplitsOptimized(nums) << std::endl;
    return 0;
}



```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
public class Main {
    public static int validSplitsOptimized(int[] nums) {
        int n = nums.length;
        int totalSum = 0;
        for (int num : nums) {
            totalSum += num;
        }

        int leftSum = 0, count = 0;
        for (int i = 0; i < n - 1; ++i) {
            leftSum += nums[i];
            if (leftSum >= totalSum - leftSum) {
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        int[] nums = {10, 4, -8, 7};
        System.out.println("Number of valid splits: " + validSplitsOptimized(nums));
    }
}


```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
def valid_splits_optimized(nums):
    n = len(nums)
    total_sum = sum(nums)
    left_sum = 0
    count = 0
    for i in range(n - 1):
        left_sum += nums[i]
        if left_sum >= total_sum - left_sum:
            count += 1
    return count

nums = [10, 4, -8, 7]
print("Number of valid splits:", valid_splits_optimized(nums))


```

</TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(n)$
- because we compute the total sum once and then iterate through the array once to update the left sum and check the condition.
- Space Complexity: $O(1)$
- as only a few variables are used for summing and counting.
- This approach is efficient and straightforward.

</tabItem>
</Tabs>

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['AmruthaPariprolu'].map(username => (
 <Author key={username} username={username} />
))}
</div>
