---
id: Count-Alternating-subarrays
title: Count-Alternating-subarrays
level: hard
sidebar_label: 3101-Count-Alternating-subarrays
tags:
  - Dynamic Programming
  - Bit Manipulation
  - C++
  - Java
  - Python
description: "This document provides solutions for Count-Alternating-subarrays solution of leetcode questions"
---

## Problem statement:

You are given a binary array nums.

We call a subarray alternating if no two adjacent elements in the subarray have the same value.

Return the number of alternating subarrays in nums.

**Example 1:**

Input: nums = [0,1,1,1]
Output: 5

Explanation:
The following subarrays are alternating: [0], [1], [1], [1], and [0,1].

**Example 2:**

Input: nums = [1,0,1,0]
Output: 10

Explanation:
Every subarray of the array is alternating. There are 10 possible subarrays that we can choose.

Constraints:

        -  `1 <= nums.length <= 105`
        - `nums[i] is either 0 or 1.`

## Solutions:

### Intuition

     - An alternating subarray has no consecutive elements with the same value. We can iterate through the array and keep track of the current subarray length while checking if adjacent elements differ. If they differ, we can increment the subarray length. Once we encounter two consecutive elements with the same value, we've reached the end of the current subarray.

     - There's an interesting fact about counting the number of subarrays of a certain length: the number of subarrays of length k is equal to the sum of 1 + 2 + ... + k. This formula captures the idea that we can choose any starting index within the subarray of length k.

### Approach

1.  **Sliding Window:**

    - We use a sliding window approach with two pointers (left and right) to track the current subarray.

2.  **Iterate and Check:**

    - As we iterate through the array using right, we check if the current element (nums[right]) is different from the next element (nums[right + 1]).

    - If they differ, it's part of an alternating subarray, so we increment right to extend the subarray.

3.  **Calculate and Update:**

    - Once we encounter two consecutive elements with the same value, we've reached the end of the current subarray.

    - We calculate the number of subarrays within the current subarray length using the formula (length \* (length + 1)) / 2. This leverages the fact mentioned in the intuition.

    - We add this count to the overall count of alternating subarrays.

    - We update the left pointer to right to start a new subarray from the next element.

### Implementation

The provided code effectively implements the sliding window approach with the mentioned formula. Here's a breakdown:

1.  int countAlternatingSubarrays(vector& nums): This function takes the binary array nums as input.

2.  int n = nums.size();: Gets the size of the array n.

3.  long long count = 0;: Initializes a variable count to store the total number of alternating subarrays.

4.  int left = 0;: Initializes left and right pointers, both starting at index 0.

    - int right = 0;

5.  while (right < n): A loop that continues as long as right hasn't reached the end of the array.

    - while (right < n - 1 && nums[right] != nums[right + 1]): This inner loop extends the current subarray as long as adjacent elements differ.

6.  It checks if right is within bounds and if the elements at right and right + 1 are different.

7.  If they differ, we increment right to include the next element in the subarray.
    long long length = right - left + 1;: Calculates the length of the current subarray (right - left + 1).

8.  count += static_cast(length \* (length + 1)) / 2;: Calculates the number of subarrays within the current subarray length and adds it to the count.

9.  The casting to long long ensures we don't overflow for larger length values.

    - right++;: Moves the right pointer forward to start a new subarray from the next element.

    - left = right;: Updates the left pointer to the same position as right, effectively starting a new subarray.

10. return count;: After the loop finishes iterating through the entire array, count holds the total number of alternating subarrays, which is returned

## Code

<Tabs>
    <TabItem value="cpp" label="C++" default>
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```cpp
      class Solution {
      public:
          long long countAlternatingSubarrays(vector<int>& nums) {
              int n = nums.size();
              long long count = 0;

              int left = 0;
              int right = 0;

              while (right < n) {
                  while (right < n - 1 && nums[right] != nums[right + 1]) {
                      right++;
                  }

                  long long length = right - left + 1;

                  count += static_cast<long long>(length * (length + 1)) / 2;

                  right++;
                  left = right;
              }

              return count;
          }
      };
      ```
    </TabItem>
    <TabItem value="java" label="Java">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```java
      public class Solution {
          public long countAlternatingSubarrays(int[] nums) {
              int n = nums.length;
              long count = 0;

              int left = 0;
              int right = 0;

              while (right < n) {
                  while (right < n - 1 && nums[right] != nums[right + 1]) {
                      right++;
                  }

                  long length = right - left + 1;

                  count += (length * (length + 1)) / 2;

                  right++;
                  left = right;
              }

              return count;
          }

          // Driver code
          public static void main(String[] args) {
              Solution sol = new Solution();
              int[] nums = {1, 0, 1, 0, 1};
              System.out.println(sol.countAlternatingSubarrays(nums));  // Output: 9
          }
      }
      ```
    </TabItem>
    <TabItem value="python" label="Python">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```python
      class Solution:
          def countAlternatingSubarrays(self, nums):
              n = len(nums)
              count = 0

              left = 0
              right = 0

              while right < n:
                  while right < n - 1 and nums[right] != nums[right + 1]:
                      right += 1

                  length = right - left + 1

                  count += (length * (length + 1)) // 2

                  right += 1
                  left = right

              return count

      # Driver code
      if __name__ == "__main__":
          sol = Solution()
          nums = [1, 0, 1, 0, 1]
          print(sol.countAlternatingSubarrays(nums))  # Output: 9
      ```
    </TabItem>
    <TabItem value="c" label="C">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```c
      #include <stdio.h>

      long long countAlternatingSubarrays(int* nums, int n) {
          long long count = 0;

          int left = 0;
          int right = 0;

          while (right < n) {
              while (right < n - 1 && nums[right] != nums[right + 1]) {
                  right++;
              }

              long long length = right - left + 1;

              count += (length * (length + 1)) / 2;

              right++;
              left = right;
          }

          return count;
      }

      // Driver code
      int main() {
          int nums[] = {1, 0, 1, 0, 1};
          int n = sizeof(nums) / sizeof(nums[0]);
          printf("%lld\n", countAlternatingSubarrays(nums, n));  // Output: 9
          return 0;
      }
      ```
    </TabItem>

</Tabs>

## Complexity

### Time complexity: $O(n)$

The code iterates through the array at most twice (once in the outer loop and potentially once in the inner loop for each element). This results in a linear time complexity of $O(n)$.

### Space complexity: $O(1)$

The code uses a constant amount of extra space for variables like count, left, and right, which doesn't depend on the input size n.
