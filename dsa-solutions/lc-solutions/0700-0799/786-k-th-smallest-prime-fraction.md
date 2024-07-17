---
id: k-th-smallest-prime-fraction
title: 786. K-th Smallest Prime Fraction
sidebar_label:  786. K-th Smallest Prime Fraction
tags:
- String

description: "This is a solution to the 786. K-th Smallest Prime Fraction problem on LeetCode."
---

## Problem Description
You are given a sorted integer array arr containing 1 and prime numbers, where all the integers of arr are unique. You are also given an integer k.
For every i and j where `0 <= i < j < arr.length`, we consider the fraction `arr[i] / arr[j].`
Return the kth smallest fraction considered. Return your answer as an array of integers of size 2, where answer[0] == arr[i] and answer[1] == arr[j].

 
 ### Examples
**Example 1:**
```
Input: arr = [1,2,3,5], k = 3
Output: [2,5]
Explanation: The fractions to be considered in sorted order are:
1/5, 1/3, 2/5, 1/2, 3/5, and 2/3.
The third fraction is 2/5.
```

### Constraints
- `2 <= arr.length <= 1000`
- `1 <= arr[i] <= 3 * 10^4`
- `arr[0] == 1`
- `arr[i] is a prime number for i > 0.`
- `All the numbers of arr are unique and sorted in strictly increasing order.`
- `1 <= k <= arr.length * (arr.length - 1) / 2`

## Solution for  786. K-th Smallest Prime Fraction

<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {
        var kthSmallestPrimeFraction = function(arr, k) {
    let left = 0, right = 1;
    let res = [];

    while (left <= right) {
        let mid = left + (right - left) / 2;
        let j = 1, total = 0, num = 0, den = 0;
        let maxFrac = 0;

        for (let i = 0; i < arr.length; ++i) {
            while (j < arr.length && arr[i] >= arr[j] * mid) {
                ++j;
            }
                
            total += arr.length - j;

            if (j < arr.length && maxFrac < arr[i] * 1.0 / arr[j]) {
                maxFrac = arr[i] * 1.0 / arr[j];
                num = i;
                den = j;
            }
        }

        if (total === k) {
            res = [arr[num], arr[den]];
            break;
        }

        if (total > k) {
            right = mid;
        } else {
            left = mid;
        }
    }

    return res;
};
      const input =arr = [1,2,3,5], k = 3
      const output = kthSmallestPrimeFraction(input ,k)
      return (
        <div>
          <p>
            <b>Input: </b>
            {JSON.stringify(input)}
          </p>
          <p>
            <b>Output:</b> {output.toString()}
          </p>
        </div>
      );
    }
    ```

    #### Complexity Analysis

    - Time Complexity: $O(n^2) $ 
    - Space Complexity: $ O(n^2)$

   ## Code in Different Languages
   <Tabs>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
   class Solution:
    def kthSmallestPrimeFraction(self, arr: List[int], k: int) -> List[int]:
        n = len(arr)
        left, right = 0, 1
        res = []

        while left <= right:
            mid = left + (right - left) / 2
            j, total, num, den = 1, 0, 0, 0
            maxFrac = 0
            for i in range(n):
                while j < n and arr[i] >= arr[j] * mid:
                    j += 1
                
                total += n - j

                if j < n and maxFrac < arr[i] * 1.0 / arr[j]:
                    maxFrac = arr[i] * 1.0 / arr[j]
                    num, den = i, j

            if total == k:
                res = [arr[num], arr[den]]
                break

            if total > k:
                right = mid
            else:
                left = mid

        return res
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
class Solution {
    public int[] kthSmallestPrimeFraction(int[] arr, int k) {
        int n = arr.length;
        double left = 0, right = 1, mid;
        int[] res = new int[2];

        while (left <= right) {
            mid = left + (right - left) / 2;
            int j = 1, total = 0, num = 0, den = 0;
            double maxFrac = 0;
            for (int i = 0; i < n; ++i) {
                while (j < n && arr[i] >= arr[j] * mid) {
                    ++j;
                }
                
                total += n - j;

                if (j < n && maxFrac < arr[i] * 1.0 / arr[j]) {
                    maxFrac = arr[i] * 1.0 / arr[j];
                    num = i;
                    den = j;
                }
            }

            if (total == k) {
                res[0] = arr[num];
                res[1] = arr[den];
                break;
            }

            if (total > k) {
                right = mid;
            } else {
                left = mid;
            }
        }

        return res;
    }
}
    ```


  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
 class Solution {
public:
    vector<int> kthSmallestPrimeFraction(vector<int>& arr, int k) {
        priority_queue<pair<double, pair<int, int>>, vector<pair<double, pair<int, int>>>, greater<pair<double, pair<int, int>>>> pq;
        for(int i = 0; i < arr.size(); i++) {
            for(int j = i + 1; j < arr.size(); j++) {
                pq.push(make_pair(double(arr[i])/arr[j], make_pair(arr[i], arr[j])));
            }
        }

        while(k-- > 1) {
            pq.pop();
        }

        return {pq.top().second.first, pq.top().second.second};
    }
};

```
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

## References

- **LeetCode Problem**: [786. K-th Smallest Prime Fraction](https://leetcode.com/problems/k-th-smallest-prime-fraction/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/k-th-smallest-prime-fraction/)

