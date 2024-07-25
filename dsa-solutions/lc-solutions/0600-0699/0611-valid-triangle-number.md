---
id: valid-triangle-number
title: Valid Triangle Number
sidebar_label: 0611 - Valid Triangle Number
tags:
  - Two Pointers
  - Sorting
  - Binary Tree
description: "This is a solution to the Valid Triangle Number problem on LeetCode."
---

## Problem Description

Given an integer array `nums`, return the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.

### Examples

**Example 1:**

```
Input: nums = [2,2,3,4]
Output: 3
Explanation: Valid combinations are: 
2,3,4 (using the first 2)
2,3,4 (using the second 2)
2,2,3
```

**Example 2:**

```
Input: nums = [4,2,3,4]
Output: 4
```

### Constraints

- `1 <= nums.length <= 1000`
- `0 <= nums[i] <= 1000`

## Solution for Valid Triangle Number

### Approach 1 Brute Force [Time Limit Exceeded]

The condition for the triplets (a,b,c) representing the lengths of the sides of a triangle, to form a valid triangle, is that the sum of any two sides should always be greater than the third side alone. i.e. a+b>c, b+c>a, a+c>b.

The simplest method to check this is to consider every possible triplet in the given nums array and checking if the triplet satisfies the three inequalities mentioned above. Thus, we can keep a track of the count of the number of triplets satisfying these inequalities. When all the triplets have been considered, the count gives the required result.

> Caution: The brute force approach is included here because it is an intuitive way to approach this problem. However, when there are $10^3$ numbers, the if statement will be checked approximately $10^9$ times. Thus, this approach will result in TLE. In the following approaches we will discuss ways to optimize our solution.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
#include <vector>

class Solution {
public:
    int triangleNumber(std::vector<int>& nums) {
        int count = 0;
        for (size_t i = 0; i < nums.size() - 2; i++) {
            for (size_t j = i + 1; j < nums.size() - 1; j++) {
                for (size_t k = j + 1; k < nums.size(); k++) {
                    if (nums[i] + nums[j] > nums[k] && 
                        nums[i] + nums[k] > nums[j] && 
                        nums[j] + nums[k] > nums[i]) {
                        count++;
                    }
                }
            }
        }
        return count;
    }
};

```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public int triangleNumber(int[] nums) {
        int count = 0;
        for (int i = 0; i < nums.length - 2; i++) {
            for (int j = i + 1; j < nums.length - 1; j++) {
                for (int k = j + 1; k < nums.length; k++) {
                    if (nums[i] + nums[j] > nums[k] && 
                        nums[i] + nums[k] > nums[j] && 
                        nums[j] + nums[k] > nums[i]) {
                        count++;
                    }
                }
            }
        }
        return count;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution:
    def triangleNumber(self, nums):
        count = 0
        for i in range(len(nums) - 2):
            for j in range(i + 1, len(nums) - 1):
                for k in range(j + 1, len(nums)):
                    if nums[i] + nums[j] > nums[k] and \
                       nums[i] + nums[k] > nums[j] and \
                       nums[j] + nums[k] > nums[i]:
                        count += 1
        return count
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(N^3)$

> **Reason**: Three nested loops are there to check every triplet.

### Space Complexity: $O(1)$

> **Reason**: Constant space is used.

### Approach 2 Using Binary Search
#### Algorithm

If we sort the given `nums` array once, we can solve the problem more efficiently. This is because if we consider a triplet `(a, b, c)` such that $$a \leq b \leq c$$, we need not check all three inequalities for the validity of the triangle formed by them. Only the condition $$a + b > c$$ is necessary. This happens because $$c \geq b$$ and $$c \geq a$$. Thus, adding any number to c will always produce a sum greater than either a or b considered alone. Therefore, the inequalities $$c + a > b$$ and $$c + b > a$$ are satisfied implicitly by the property $$a < b < c$$.

From this, we get the idea that we can sort the given `nums` array. Then, for every pair `(nums[i], nums[j])` considered from the beginning of the array, such that $$j > i$$ (leading to $$nums[j] \geq nums[i]$$, we can find the count of elements `nums[k]` (where $$k > j$$), which satisfy the inequality $$nums[k] > nums[i] + nums[j]$$. We can do this for every pair (i, j) considered to get the required result.

We can also observe that, since we've sorted the `nums` array, as we traverse towards the right for choosing the index `k` (for number `nums[k]`), the value of `nums[k]` could increase or remain the same (doesn't decrease relative to the previous value). Thus, there will exist a right limit on the value of index `k`, such that the elements satisfy $$nums[k] > nums[i] + nums[j]$$. Any elements beyond this value of `k` won't satisfy this inequality as well, which is obvious.

Thus, if we can find this right limit value of `k` (indicating the element just greater than $$nums[i] + nums[j]$$), we can conclude that all the elements in the `nums` array in the range $$(j + 1, k - 1)$$ (both included) satisfy the required inequality. Thus, the count of elements satisfying the inequality will be given by $$k - j - 1$$.

Since the `nums` array has been sorted, we can use Binary Search to find this right limit of `k`.

Another point to be observed is that once we find a right limit index $$k_{(i,j)}$$ for a particular pair (i,j) chosen, when we choose a higher value of j for the same value of i, we need not start searching for the right limit $$k_{(i,j+1)}$$ from the index j+2j. Instead, we can start off from the index $$k_{(i,j)}$$ directly where we left off for the last j chosen.

This holds correct because when we choose a higher value of j(higher or equal nums[j] than the previous one), all the nums[k], such that $$k < k_{(i,j)}$$ will obviously satisfy nums[i]+nums[j]>nums[k] for the new value of j chosen.

By taking advantage of this observation, we can limit the range of Binary Search for k to shorter values for increasing values of j considered while choosing the pairs (i,j).

## Code in Different Languages

<Tabs>

<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
public class Solution {
    int binarySearch(int nums[], int l, int r, int x) {
        while (r >= l && r < nums.length) {
            int mid = (l + r) / 2;
            if (nums[mid] >= x)
                r = mid - 1;
            else
                l = mid + 1;
        }
        return l;
    }
    public int triangleNumber(int[] nums) {
        int count = 0;
        Arrays.sort(nums);
        for (int i = 0; i < nums.length - 2; i++) {
            int k = i + 2;
            for (int j = i + 1; j < nums.length - 1 && nums[i] != 0; j++) {
                k = binarySearch(nums, k, nums.length - 1, nums[i] + nums[j]);
                count += k - j - 1;
            }
        }
        return count;
    }
}

```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution:
    def binary_search(self, nums, l, r, x):
        while r >= l and r < len(nums):
            mid = (l + r) // 2
            if nums[mid] >= x:
                r = mid - 1
            else:
                l = mid + 1
        return l

    def triangleNumber(self, nums):
        count = 0
        nums.sort()
        for i in range(len(nums) - 2):
            k = i + 2
            for j in range(i + 1, len(nums) - 1):
                if nums[i] == 0:
                    continue
                k = self.binary_search(nums, k, len(nums) - 1, nums[i] + nums[j])
                count += k - j - 1
        return count

```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(n^2logn)$

> **Reason**:  In worst case inner loop will take nlog⁡n (binary search applied N times).

### Space Complexity: $O(logn)$

> **Reason**: Sorting takes O(log⁡n) space.

## References

- **LeetCode Problem**: [Valid Triangle Number](https://leetcode.com/problems/valid-triangle-number/description/)

- **Solution Link**: [Valid Triangle Number](https://leetcode.com/problems/valid-triangle-number/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>