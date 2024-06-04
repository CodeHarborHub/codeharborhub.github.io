---

id: count-subarrays-product-less-than-k
title: Count Subarrays with Product Less Than K
sidebar_label: 0003- Count Subarrays with Product Less Than K
tags:
  - Array
  - Sliding Window
  - Two Pointers
  - Mathematics
  - Python
  - JavaScript
  - TypeScript
  - Java
  - C++
description: "This is a solution to the problem of counting subarrays with product less than a given value K."

---

In this page, we will solve the problem of counting subarrays with a product less than a given number K using different approaches. We will provide the implementation of the solution in JavaScript, TypeScript, Python, Java, and C++.

## Problem Description

Given an array of positive numbers, the task is to find the number of possible contiguous subarrays having a product less than a given number k.

### Examples

**Example 1:**

```plaintext
Input: n = 4, k = 10, a[] = {1, 2, 3, 4}
Output: 7
Explanation: The contiguous subarrays are {1}, {2}, {3}, {4}, {1, 2}, {1, 2, 3}, and {2, 3}, all of which have products less than 10. There are 7 such subarrays in total.
```

**Example 2:**

```plaintext
Input: n = 7, k = 100, a[] = {1, 9, 2, 8, 6, 4, 3}
Output: 16
Explanation: The contiguous subarrays are all subarrays of length 1, 2, and 3 with products less than 100. There are 16 such subarrays in total.
```

### Constraints

- `1 <= n <= 10^6`
- `1 <= k <= 10^15`
- `1 <= a[i] <= 10^5`

---

## Solution for Count Subarrays with Product Less Than K Problem

### Intuition and Approach

The problem can be solved using the sliding window (or two pointers) approach to efficiently find the number of subarrays whose product is less than k.

<Tabs>
<tabItem value="Brute Force" label="Brute Force">

### Approach: Brute Force

This approach involves using binary search to find the right boundary for each left boundary, counting subarrays with a product less than k.

#### Implementation

```jsx live
function countSubarraysWithProductLessThanK() {
  const n = 4;
  const k = 10;
  const a = [1, 2, 3, 4];

  const countSubArrayProductLessThanK = (a, n, k) => {
    if (k <= 1) return 0;
    let count = 0;
    for (let i = 0; i < n; i++) {
      let product = 1;
      for (let j = i; j < n; j++) {
        product *= a[j];
        if (product < k) count++;
        else break;
      }
    }
    return count;
  };

  const result = countSubArrayProductLessThanK(a, n, k);
  return (
    <div>
      <p>
        <b>Input:</b> n = {n}, k = {k}, a = [{a.join(", ")}]


      </p>
      <p>
        <b>Output:</b> {result}
      </p>
    </div>
  );
}
```

#### Codes in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@manishh12"/>
   ```javascript
    function countSubArrayProductLessThanK(a, n, k) {
      if (k <= 1) return 0;
      let count = 0;
      for (let i = 0; i < n; i++) {
        let product = 1;
        for (let j = i; j < n; j++) {
          product *= a[j];
          if (product < k) count++;
          else break;
        }
      }
      return count;
    }

 ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    function countSubArrayProductLessThanK(a: number[], n: number, k: number): number {
      if (k <= 1) return 0;
      let count = 0;
      for (let i = 0; i < n; i++) {
        let product = 1;
        for (let j = i; j < n; j++) {
          product *= a[j];
          if (product < k) count++;
          else break;
        }
      }
      return count;
    }


 ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    def count_subarray_product_less_than_k(a, n, k):
        if k <= 1:
            return 0
        count = 0
        for i in range(n):
            product = 1
            for j in range(i, n):
                product *= a[j]
                if product < k:
                    count += 1
                else:
                    break
        return count

  
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    public class Solution {
        public int countSubArrayProductLessThanK(int[] a, int n, int k) {
            if (k <= 1) return 0;
            int count = 0;

            for (int i = 0; i < n; i++) {
                int product = 1;
                for (int j = i; j < n; j++) {
                    product *= a[j];
                    if (product < k) count++;
                    else break;
                }
            }
            return count;
        }

     
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    #include <iostream>
    #include <vector>

    using namespace std;

    int countSubArrayProductLessThanK(vector<int>& a, int n, int k) {
        if (k <= 1) return 0;
        int count = 0;

        for (int i = 0; i < n; i++) {
            int product = 1;
            for (int j = i; j < n; j++) {
                product *= a[j];
                if (product < k) count++;
                else break;
            }
        }
        return count;
    }

    ```

  </TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n^2)$$
- Space Complexity: $$O(1)$$

</tabItem>


<tabItem value="Sliding Window" label="Sliding Window">

### Approach: Sliding Window

The sliding window approach involves maintaining a window of elements with a product less than k and expanding or shrinking the window as necessary.

#### Implementation

```jsx live
function countSubarraysWithProductLessThanK() {
  const n = 4;
  const k = 10;
  const a = [1, 2, 3, 4];

  const countSubArrayProductLessThanK = (a, n, k) => {
    if (k <= 1) return 0;
    let count = 0, product = 1, left = 0;

    for (let right = 0; right < n; right++) {
      product *= a[right];
      while (product >= k) product /= a[left++];
      count += right - left + 1;
    }

    return count;
  };

  const result = countSubArrayProductLessThanK(a, n, k);
  return (
    <div>
      <p>
        <b>Input:</b> n = {n}, k = {k}, a = [{a.join(", ")}]
      </p>
      <p>
        <b>Output:</b> {result}
      </p>
    </div>
  );
}
```

#### Codes in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@manishh12"/>
   ```javascript
    function countSubArrayProductLessThanK(a, n, k) {
      if (k <= 1) return 0;
      let count = 0, product = 1, left = 0;

      for (let right = 0; right < n; right++) {
        product *= a[right];
        while (product >= k) product /= a[left++];
        count += right - left + 1;
      }

      return count;
    }

    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    function countSubArrayProductLessThanK(a: number[], n: number, k: number): number {
      if (k <= 1) return 0;
      let count = 0, product = 1, left = 0;

      for (let right = 0; right < n; right++) {
        product *= a[right];
        while (product >= k) product /= a[left++];
        count += right - left + 1;
      }

      return count;
    }

    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    def count_subarray_product_less_than_k(a, n, k):
        if k <= 1:
            return 0
        count, product, left = 0, 1, 0

        for right in range(n):
            product *= a[right]
            while product >= k:
                product /= a[left]
                left += 1
            count += right - left + 1

        return count


    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    public class Solution {
        public int countSubArrayProductLessThanK(int[] a, int n, int k) {
            if (k <= 1) return 0;
            int count = 0, product = 1, left = 0;

            for (int right = 0; right < n; right++) {
                product *= a[right];
                while (product >= k) product /= a[left++];
                count += right - left + 1;
            }

            return count;
        }

    
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    #include <iostream>
    #include <vector>

    using namespace std;

    int countSubArrayProductLessThanK(vector<int>& a, int n, int k) {
        if (k <= 1) return 0;
        int count = 0, product = 1, left = 0;

        for (int right = 0; right < n; right++) {
            product *= a[right];
            while (product >= k) product /= a[left++];
            count += right - left + 1;
        }

        return count;
    }

  
    ```

  </TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n)$$
- Space Complexity: $$O(1)$$

</tabItem>
</Tabs>


:::tip
The sliding window approach efficiently counts subarrays with product less than k in linear time.
:::

## References

- **GeeksforGeeks Problem:** [GeeksforGeeks Problem](https://www.geeksforgeeks.org/problems/count-the-subarrays-having-product-less-than-k1708/0)
- **GeeksforGeeks Problem:** [GeeksforGeeks Solution](https://www.geeksforgeeks.org/problems/count-the-subarrays-having-product-less-than-k1708/0)
- **Solution Author:** [Manish Kumar Gupta](https://www.geeksforgeeks.org/user/manishd5hla)

---