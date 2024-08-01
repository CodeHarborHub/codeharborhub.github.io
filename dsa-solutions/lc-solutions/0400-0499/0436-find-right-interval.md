---
id: find-right-interval
title: Find Right Interval
sidebar_label: 0436 - Find Right Interval
tags:
- Binary Search
- Binary Tree
- Sorting
description: "This is a solution to the Find Right Interval problem on LeetCode."
---

## Problem Description

You are given an array of intervals, where intervals[i] = [$\text{start}_i$, $\text{end}_i$] and each $\text{start}_i$ is **unique**.

The **right interval** for an interval i is an interval j such that $\text{start}_j$ >= $\text{end}_j$ and $\text{start}_j$ is **minimized**. Note that i may equal j.

Return an array of **right interval** indices for each interval i. If no **right interval** exists for interval i, then put -1 at index i.

### Examples

**Example 1:**

```
Input: intervals = [[1,2]]
Output: [-1]
Explanation: There is only one interval in the collection, so it outputs -1.
```

**Example 2:**

```
Input: intervals = [[1,4],[2,3],[3,4]]
Output: [-1,2,-1]
Explanation: There is no right interval for [1,4] and [3,4].
The right interval for [2,3] is [3,4] since start2 = 3 is the smallest start that is >= end1 = 3.
```

### Constraints

- `1 <= intervals.length <= 2 * 104`
- `intervals[i].length == 2`
- $-10^6 \leq \text{start}_i \leq \text{end}_i \leq 10^6$
- The start point of each interval is **unique**.

## Solution for Find Right Interval

### Intuition

The problem at hand requires finding the "right interval" for each interval in a list. A right interval for an interval i is defined as the smallest interval j such that the start of j is greater than or equal to the end of i. If no such interval exists, the result should be -1.

### Approach

1. **Data Transformation:** Start by transforming the given intervals into a new array where each element keeps track of the original start and end points as well as the original index. This helps in maintaining the reference to the original indices after sorting.

2. **Sorting:** Sort the transformed array based on the start points. Sorting helps in efficiently searching for the right interval using binary search.

3. **Binary Search:** For each interval in the sorted array, use binary search to find the smallest interval whose start is greater than or equal to the end of the current interval. The binary search operates over the sorted start points.

4. **Mapping Results:** The result of the binary search for each interval gives the index of the right interval in the sorted array. This index is then mapped back to the original index using the stored original index in the transformed array.

5. **Output Formation:** Construct the output array where each position corresponds to the original interval's right interval index.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
#include <vector>
#include <algorithm>

class Solution {
public:
    std::vector<int> findRightInterval(std::vector<std::vector<int>>& intv) {
        int n = intv.size();
        std::vector<std::vector<int>> arr(n, std::vector<int>(3));

        for (int i = 0; i < n; ++i) {
            arr[i][0] = intv[i][0];
            arr[i][1] = intv[i][1];
            arr[i][2] = i;
        }

        std::sort(arr.begin(), arr.end(), [](const std::vector<int>& a, const std::vector<int>& b) {
            return a[0] < b[0];
        });

        std::vector<int> ans(n);
        for (int i = 0; i < n; ++i) {
            ans[arr[i][2]] = binarySearch(arr, i, n - 1, arr[i][1]);
        }

        return ans;
    }

private:
    int binarySearch(const std::vector<std::vector<int>>& arr, int low, int high, int target) {
        int result = -1;

        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (arr[mid][0] >= target) {
                result = arr[mid][2];
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return result;
    }
};

```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public int[] findRightInterval(int[][] intv) {
        int n=intv.length;
        int [][] arr=new int[n][3];

        for(int i=0;i<n;i++){
           
            arr[i][0]=intv[i][0];
             arr[i][1]=intv[i][1];
              arr[i][2]=i;
        }


        Arrays.sort(arr,(a,b)->a[0]-b[0]);

int ans[]=new int[n];
         for(int i=0;i<n;i++){

            ans[arr[i][2]]=binaryseach(arr,i,n-1,arr[i][1]);
         }
        

        return ans;
    }

    public int binaryseach(int [][] arr,int low,int high,int target){

        
         int result = -1; 

        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (arr[mid][0] >= target) {
                result = arr[mid][2];  
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return result;


    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
from typing import List

class Solution:
    def findRightInterval(self, intv: List[List[int]]) -> List[int]:
        n = len(intv)
        arr = [[0, 0, 0] for _ in range(n)]

        for i in range(n):
            arr[i][0] = intv[i][0]
            arr[i][1] = intv[i][1]
            arr[i][2] = i

        arr.sort(key=lambda x: x[0])

        ans = [0] * n
        for i in range(n):
            ans[arr[i][2]] = self.binary_search(arr, i, n - 1, arr[i][1])

        return ans

    def binary_search(self, arr: List[List[int]], low: int, high: int, target: int) -> int:
        result = -1

        while low <= high:
            mid = low + (high - low) // 2

            if arr[mid][0] >= target:
                result = arr[mid][2]
                high = mid - 1
            else:
                low = mid + 1

        return result

```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(Nlog(N))$

> **Reason**: The time complexity of the algorithm is O(Nlog(N)), where N is the number of intervals. Sorting the array takes O(Nlog(N)), and for each interval, a binary search takes O(log(N)), leading to O(Nlog(N)) overall due to the N binary searches.

### Space Complexity: $O(N)$

> **Reason**: This space is used for the transformed array and the output array.

## References

- **LeetCode Problem**: [Find Right Interval](https://leetcode.com/problems/find-right-interval/description/)

- **Solution Link**: [Find Right Interval](https://leetcode.com/problems/find-right-interval/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>
