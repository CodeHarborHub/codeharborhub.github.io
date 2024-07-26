---
id: find-duplicates-in-an-array
title: Find Duplicates in an Array (gfg)
sidebar_label: 0006 - Find Duplicates in an Array
tags:
  - Easy
  - Array
  - GeeksforGeeks
  - CPP
  - Python
  - DSA
description: "This tutorial covers the solution to the Find Duplicates in an Array problem from the GeeksforGeeks website, featuring implementations in Python and C++."
---

## Problem Description

Given an array `arr` of size `n` which contains elements in the range from 0 to `n-1`, you need to find all the elements occurring more than once in the given array. Return the answer in ascending order. If no such element is found, return a list containing [-1].

:::note
Try and perform all operations within the provided array. The extra (non-constant) space needs to be used only for the array to be returned.
:::

## Examples

**Example 1:**

```
Input: arr = [2, 3, 1, 2, 3]
Output: [2, 3]
Explanation: 2 and 3 occur more than once in the array.
```

**Example 2:**

```
Input: arr = [0, 1, 2, 3]
Output: [-1]
Explanation: No element occurs more than once.
```

## Your Task

You don't need to read input or print anything. Your task is to complete the function `duplicates()` which takes the array `arr` as input and returns a list of the duplicate elements in ascending order.

Expected Time Complexity: $O(n)$

Expected Auxiliary Space: $O(1)$ (excluding the space for the output list)

## Constraints

- `1 ≤ n ≤ 10^5`
- `0 ≤ arr[i] ≤ n-1`

## Problem Explanation

The problem is to find the duplicate elements in an array of size `n`, where the elements range from 0 to `n-1`. The duplicates should be returned in ascending order. If no duplicates are found, return [-1].

## Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@YourUsername"/>

```py
class Solution:
    def duplicates(self, arr):
        n = len(arr)
        # Use the array elements as index
        for i in range(n):
            arr[arr[i] % n] += n

        # Collect elements that occur more than once
        result = [i for i in range(n) if arr[i] // n > 1]

        return result if result else [-1]

# Example usage
if __name__ == "__main__":
    solution = Solution()
    print(solution.duplicates([2, 3, 1, 2, 3]))  # Expected output: [2, 3]
    print(solution.duplicates([0, 1, 2, 3]))  # Expected output: [-1]
```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@YourUsername"/>

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<int> duplicates(vector<long long>& arr) {
        int n = arr.size();
        vector<int> result;

        // Use the array elements as index
        for (int i = 0; i < n; i++) {
            arr[arr[i] % n] += n;
        }

        // Collect elements that occur more than once
        for (int i = 0; i < n; i++) {
            if (arr[i] / n > 1) {
                result.push_back(i);
            }
        }

        if (result.empty()) {
            return {-1};
        }

        return result;
    }
};

// Example usage
void solve() {
    int n;
    cin >> n;
    vector<long long> arr(n);
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    Solution obj;
    vector<int> ans = obj.duplicates(arr);
    for (int i : ans) {
        cout << i << ' ';
    }
    cout << endl;
}

int main() {
    int t;
    cin >> t;

    while (t--) {
        solve();
    }
    return 0;
}
```

  </TabItem>
</Tabs>

## Example Walkthrough

For the array `arr = [2, 3, 1, 2, 3]`:

1. Iterate through the array and use each element as an index. Increase the value at that index by `n` to mark the occurrence.
2. After the iteration, elements with values greater than `2 * n` indicate duplicates.
3. Collect such elements and return them in ascending order.

For the array `arr = [0, 1, 2, 3]`:

1. Iterate through the array and use each element as an index. Increase the value at that index by `n` to mark the occurrence.
2. After the iteration, no elements have values greater than `2 * n`.
3. Return [-1] since no duplicates are found.

## Solution Logic:

1. Iterate through the array, using each element as an index.
2. Increase the value at the calculated index by `n`.
3. After the iteration, check which elements have values greater than `2 * n` to find duplicates.
4. Collect such elements and return them in ascending order.

## Time Complexity

- The time complexity is $O(n)$, where n is the size of the input array.

## Space Complexity

- The auxiliary space complexity is $O(1)$ because we are not using any extra space proportional to the size of the input array.

## References

- **gfg Problem:** [gfg Problem](https://www.geeksforgeeks.org/problems/find-duplicates-in-an-array/1?page=1&difficulty=Easy&sortBy=submissions)
- **Solution Author:** [arunimad6yuq](https://www.geeksforgeeks.org/user/arunimad6yuq/)
