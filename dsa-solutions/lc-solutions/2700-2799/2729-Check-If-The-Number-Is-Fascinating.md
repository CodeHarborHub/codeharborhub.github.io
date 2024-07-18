---
id: check-if-the-number-is-fascinating
title:  Check if The Number is Fascinating
sidebar_label: 2729-Check-If-The-Number-Is-Fascinating
tags:
  - Hash Table
  - Math

description: "This is a solution to the  2729."
---

## Problem Description
You are given an integer `n` that consists of exactly `3` digits.

We call the number `n` fascinating if, after the following modification, the resulting number contains all the digits from `1` to `9` exactly once and does not contain any `0`'s:

Concatenate `n` with the numbers `2 * n` and `3 * n`.
Return `true` if `n` is fascinating, or `false` otherwise.

Concatenating two numbers means joining them together. For example, the concatenation of `121` and `371` is `121371`.

### Example

**Example 1:**


```
Input: n = 192
Output: true
Explanation: We concatenate the numbers n = 192 and 2 * n = 384 and 3 * n = 576. The resulting number is 192384576. This number contains all the digits from 1 to 9 exactly once.
```
**Example 2:**
```
Input: n = 100
Output: false
Explanation: We concatenate the numbers n = 100 and 2 * n = 200 and 3 * n = 300. The resulting number is 100200300. This number does not satisfy any of the conditions.
```
### Constraints

- `100 <= n <= 999`

## Solution Approach

### Intuition:

To efficiently Check if The Number is Fascinating


## Solution Implementation

### Code In Different Languages:

<Tabs>


  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```javascript
class Solution {
    isFascinating(n) {
        let concat = `${n}${2 * n}${3 * n}`;
        let sorted = [...concat].sort().join('');
        return sorted === '123456789';
    }
}

    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@Ishitamukherjee2004"/> 
   ```typescript
class Solution {
    isFascinating(n: number): boolean {
        let concat = `${n}${2 * n}${3 * n}`;
        let sorted = [...concat].sort().join('');
        return sorted === '123456789';
    }
}

    ```

  </TabItem>


  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```python
    
class Solution:
    def isFascinating(self, n: int) -> bool:
        concat = str(n) + str(2 * n) + str(3 * n)
        sorted_concat = ''.join(sorted(concat))
        return sorted_concat == '123456789'

    ```

  </TabItem>

  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```java
public class Solution {
    public boolean isFascinating(int n) {
        String concat = n + "" + (2 * n) + (3 * n);
        char[] chars = concat.toCharArray();
        Arrays.sort(chars);
        return new String(chars).equals("123456789");
    }
}


    ```
</TabItem>


  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```cpp

class Solution {
    public:
       bool isFascinating(int n) {
            string concat = to_string(n) + to_string(2 * n) + to_string(3 * n);
  sort(concat.begin(), concat.end());
  return concat == "123456789";
 }
};

   ```
  </TabItem> 
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n*log(n))$$
- The concatenation of the strings takes O(n) time, where n is the number of digits in the result.
- The sorting of the string takes O(n log n) time, as it uses a comparison-based sorting algorithm (e.g., quicksort or mergesort).
- The comparison of the sorted string with the desired result takes O(n) time.



- Space Complexity: $$O(n)$$
- The concatenation of the strings requires additional space to store the resulting string, which has a length of 9 digits (for the input range of 1 to 100 million).
- The sorting algorithm may require additional space for temporary storage, depending on the implementation.
