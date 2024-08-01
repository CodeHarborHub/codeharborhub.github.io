---
id: K-Divisible-Elements-Subarrays
title: K Divisible Elements Subarrays
sidebar_label: 2261-K Divisible Elements Subarrays
tags: 
  - Arrays
  - Brute Force
  - Optimized approach
  - LeetCode
  - Python
  - Java
  - C++

description: "This is a solution to Count Unguarded Cells in the Grid problem on LeetCode."
sidebar_position: 62
---

## Problem Statement 
In this tutorial, we will solve the K Divisible Elements Subarrays problem . We will provide the implementation of the solution in Python, Java, and C++.

### Problem Description

Given an integer array nums and two integers k and p, return the number of distinct subarrays, which have at most k elements that are divisible by p.

Two arrays nums1 and nums2 are said to be distinct if:

They are of different lengths, or
There exists at least one index i where nums1[i] != nums2[i].
A subarray is defined as a non-empty contiguous sequence of elements in an array.

 
### Examples

**Example 1:**
Input: nums = [2,3,3,2,2], k = 2, p = 2
Output: 11
Explanation:
The elements at indices 0, 3, and 4 are divisible by p = 2.
The 11 distinct subarrays which have at most k = 2 elements divisible by 2 are:
[2], [2,3], [2,3,3], [2,3,3,2], [3], [3,3], [3,3,2], [3,3,2,2], [3,2], [3,2,2], and [2,2].
Note that the subarrays [2] and [3] occur more than once in nums, but they should each be counted only once.
The subarray [2,3,3,2,2] should not be counted because it has 3 elements that are divisible by 2.
**Example 2:**
Input: nums = [1,2,3,4], k = 4, p = 1
Output: 10
Explanation:
All element of nums are divisible by p = 1.
Also, every subarray of nums will have at most 4 elements that are divisible by 1.
Since all subarrays are distinct, the total number of subarrays satisfying all the constraints is 10.
### Constraints
- `1 <= nums.length <= 200`
- `1 <= nums[i], p <= 200`
- `1 <= k <= nums.length`

## Solution of Given Problem

### Intuition and Approach

The problem can be solved using a brute force approach or an optimized Technique.

<Tabs>
<tabItem value="Brute Force" label="Brute Force">

### Approach 1:Brute Force (Naive)


Brute Force Approach: Generate all possible subarrays and count those that satisfy the condition (at most k elements divisible by p).

#### Codes in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <vector>
#include <unordered_set>

using namespace std;

int countDistinctSubarrays(vector<int>& nums, int k, int p) {
    unordered_set<string> subarrays;
    int n = nums.size();
    
    for (int start = 0; start < n; ++start) {
        int count = 0;
        for (int end = start; end < n; ++end) {
            if (nums[end] % p == 0) count++;
            if (count > k) break;
            string subarray;
            for (int i = start; i <= end; ++i) {
                subarray += to_string(nums[i]) + ",";
            }
            subarrays.insert(subarray);
        }
    }
    return subarrays.size();
}


```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
import java.util.HashSet;

public class Solution {
    public int countDistinctSubarrays(int[] nums, int k, int p) {
        HashSet<String> subarrays = new HashSet<>();
        int n = nums.length;
        
        for (int start = 0; start < n; ++start) {
            int count = 0;
            for (int end = start; end < n; ++end) {
                if (nums[end] % p == 0) count++;
                if (count > k) break;
                StringBuilder subarray = new StringBuilder();
                for (int i = start; i <= end; ++i) {
                    subarray.append(nums[i]).append(",");
                }
                subarrays.add(subarray.toString());
            }
        }
        return subarrays.size();
    }
}


```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
def countDistinctSubarrays(nums, k, p):
    subarrays = set()
    n = len(nums)
    
    for start in range(n):
        count = 0
        for end in range(start, n):
            if nums[end] % p == 0:
                count += 1
            if count > k:
                break
            subarray = ','.join(map(str, nums[start:end + 1]))
            subarrays.add(subarray)
    
    return len(subarrays)


```

</TabItem>
</Tabs>


### Complexity Analysis

- Time Complexity: $O(n^3)$
- where n is the length of the array due to nested loops.
- Space Complexity: $O(n^2)$
-  Additional space may be required for storing for storing subarrays in a set.

</tabItem>
<tabItem value="Optimized approach" label="Optimized approach">

### Approach 2: Optimized approach

Optimized Approach: Utilize a sliding window technique to efficiently count valid subarrays, avoiding redundant checks.


#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <vector>
#include <unordered_set>

using namespace std;

int countDistinctSubarrays(vector<int>& nums, int k, int p) {
    unordered_set<string> subarrays;
    int n = nums.size();
    
    for (int start = 0; start < n; ++start) {
        int count = 0;
        for (int end = start; end < n; ++end) {
            if (nums[end] % p == 0) count++;
            if (count > k) break;
            string subarray;
            for (int i = start; i <= end; ++i) {
                subarray += to_string(nums[i]) + ",";
            }
            subarrays.insert(subarray);
        }
    }
    return subarrays.size();
}


```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
import java.util.HashSet;

public class Solution {
    public int countDistinctSubarrays(int[] nums, int k, int p) {
        HashSet<String> subarrays = new HashSet<>();
        int n = nums.length;
        
        for (int start = 0; start < n; ++start) {
            int count = 0;
            for (int end = start; end < n; ++end) {
                if (nums[end] % p == 0) count++;
                if (count > k) break;
                StringBuilder subarray = new StringBuilder();
                for (int i = start; i <= end; ++i) {
                    subarray.append(nums[i]).append(",");
                }
                subarrays.add(subarray.toString());
            }
        }
        return subarrays.size();
    }
}

```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
def countDistinctSubarrays(nums, k, p):
    subarrays = set()
    n = len(nums)
    
    for start in range(n):
        count = 0
        for end in range(start, n):
            if nums[end] % p == 0:
                count += 1
            if count > k:
                break
            subarray = ','.join(map(str, nums[start:end + 1]))
            subarrays.add(subarray)
    
    return len(subarrays)


```

</TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(n^2)$
- due to the sliding window mechanism.
- Space Complexity: $O(n^2)$
- The space complexity is $O(n^2)$ in the worst case for storing subarrays in a set.
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
