---
id: xor-queries-of-a-subarray
title: XOR Queries Of A Subarray
sidebar_label: 1310 XOR Queries Of A Subarray
tags: [Array, Bit Manipulation, Prefix Sum]
description: "This is the solution for XOR Queries Of A Subarray in leetcode."
---

### Examples

**Example 1:**

```
Input: arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]
Output: [2,7,14,8] 
```

**Example 2:**

```
Input: arr = [4,8,2,10], queries = [[2,3],[1,3],[0,0],[0,3]]
Output: [8,0,4,4]
```

**Example 3:**

```
Input: arr = [1], queries = [[0,0]]
Output: [1]
```

### Constraints
- `1 <= arr.length, queries.length <= 3 * 10^4`
- `1 <= arr[i] <= 10^9`
- `queries[i].length == 2`
- `0 <= lefti <= righti < arr.length`

## Solution

<Tabs>
  <TabItem value="python" label="Python">
  <SolutionAuthor name="@ImmidiSivani" />

```python
from typing import List

class Solution:
    def xorQueries(self, arr: List[int], queries: List[List[int]]) -> List[int]:
        n = len(queries)
        ans = []
        m = len(arr)
        prefixXor = [0] * (m + 1)
        for i in range(m):
            prefixXor[i + 1] = prefixXor[i] ^ arr[i]
        for query in queries:
            left = query[0]
            right = query[1]
            ans.append(prefixXor[right + 1] ^ prefixXor[left])
        return ans
```

  </TabItem>

  <TabItem value="java" label="Java">
  <SolutionAuthor name="@ImmidiSivani" />

```java
class Solution {
    public int[] xorQueries(int[] arr, int[][] queries) {
        for (int i = 1; i < arr.length; i++) {
            arr[i] = arr[i - 1] ^ arr[i];
        }
        int[] xor = new int[queries.length];
        for (int i = 0; i < queries.length; i++) {
            int l = queries[i][0];
            int r = queries[i][1];
            if (l > 0) {
                xor[i] = arr[r] ^ arr[l - 1];
            } else {
                xor[i] = arr[r];
            }
        }
        return xor;
    }
}
```
  </TabItem>

  <TabItem value="cpp" label="C++">
  <SolutionAuthor name="@ImmidiSivani" />

```cpp
#include <vector>

class Solution {
public:
    std::vector<int> xorQueries(std::vector<int>& arr, std::vector<std::vector<int>>& queries) {
        std::vector<int> preXor(arr.size() + 1);
        int currXor = 0;
        preXor[0] = 0;
        for (int i = 0; i < arr.size(); i++) {
            currXor ^= arr[i];
            preXor[i + 1] = currXor;
        }

        std::vector<int> ans(queries.size());
        for (int i = 0; i < queries.size(); i++) {
            int l = queries[i][0];
            int r = queries[i][1];
            ans[i] = preXor[l] ^ preXor[r + 1];
        }

        return ans;
    }
};
```
  </TabItem>
</Tabs>

---

## References

- **LeetCode Problem:** [XOR Queries Of A Subarray](https://leetcode.com/problems/xor-queries-of-a-subarray/description/)
- **Solution Link:** [Leetcode Solution](https://leetcode.com/problems/xor-queries-of-a-subarray/solutions/3530554/beats-94-easy-to-understand-c-code/)
