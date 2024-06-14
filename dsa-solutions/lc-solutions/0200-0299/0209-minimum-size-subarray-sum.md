---
id: minimum-size-subarray-sum
title: Minimum Size Subarray Sum
sidebar_label: 0209 Minimum Size Subarray Sum
tags:
  - Dynamic Programming
  - C
  - C++
  - Java
  - Python
description: "This document provides a solution to the Minimum Size Subarray Sum problem"
---

## Problem Statement

Given an array of positive integers nums and a positive integer target, return the minimal length of a
subarray
whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

Example 1:

    Input: target = 7, nums = [2,3,1,2,4,3]
    Output: 2
    Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:

    Input: target = 4, nums = [1,4,4]
    Output: 1

Example 3:

    Input: target = 11, nums = [1,1,1,1,1,1,1,1]
    Output: 0

## Solutions

### Intuition

    To solve this problem efficiently, we need to avoid checking all possible subarrays one by one since doing so would result in a very slow solution when dealing with a large array. The intuitive insight here is that we can do much better by using a "sliding window" approach. This approach involves maintaining a window that expands and contracts as we iterate through the array to find the smallest window that satisfies the condition.

    Here's the thought process behind the sliding window solution:

    1. We start with two pointers, both at the beginning of the array. These pointers represent the margins of our current window.

    2. We move the end pointer to the right, adding numbers to our current window's sum.

    3. As soon as the window's sum becomes equal to or greater than the target, we attempt to shrink the window from the left to find smaller valid windows that still meet the sum criterion.

    4. Each successful window gives us a potential answer (its size), we keep track of the minimum size found.

    5. We continue this process until the end pointer reaches the end of the array, and there are no more subarrays to check.

    6. If the minimum length of the window is never updated from the initial setting that is larger than the array length, it means no valid subarray has been found, and we should return 0.

    7. By using this approach, we can ensure that we only traverse the array once, giving us an efficient solution with a time complexity of O(n), where n is the length of the input array.

    Learn more about Binary Search, Prefix Sum and Sliding Window patterns.

### Solution Approach

    The provided solution uses the Sliding Window pattern to solve the problem efficiently. This approach is useful when you need to find a subarray that meets certain criteria, and the problem can be solved in linear time without the need to check every possible subarray individually.

    Here's how the sliding window algorithm is implemented in the solution:

    1. Initialize two pointers, j at 0 to represent the start of the window and i which will move through the array.

    2. Maintain a running sum, s, of the values within the current window which starts at 0.

    3. Iterate over the array using i and continuously add the value of nums[i] to s.

    4. Inside the loop, use a while loop to check if the current sum s is greater than or equal to the target. If it is, attempt to shrink the window from the left by:

    5. Updating the minimum length of the valid window if necessary using ans = min(ans, i - j + 1).

    6. Subtracting nums[j] from the sum s since the left end of the window is moving to the right.

    7. Incrementing j to actually move the window's start to the right.

    8. Once the end of the array is reached and there are no more elements to add to the sum, check if ans was updated or not. If ans is still greater than the length of the array n, it means no valid subarray was found, so we return 0.

    9. If ans was updated during the process (meaning a valid subarray was found), return the value of ans which holds the length of the smallest subarray with a sum of at least target.

    10. The use of two pointers to create a window that slides over the array allows this algorithm to run in O(n) time, making it very efficient for this type of problem.

    Please note that the Reference Solution Approach mentions another method which is using PreSum & Binary Search but the provided code doesn't implement this method. The PreSum & Binary Search method involves creating an array of prefix sums and then using binary search to find the smallest valid subarray for each element. This is a bit more complex and generally not as efficient as the Sliding Window method used here which requires only O(n) time and O(1) extra space.

<Tabs>
    <TabItem value="cpp" label="C++" default>
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```cpp
      #include <vector>
      #include <algorithm>
      #include <climits>
      using namespace std;

      class Solution {
      public:
          int minSubArrayLen(int target, vector<int>& nums) {
              int n = nums.size();
              int left = 0;
              int sum = 0;
              int minLength = INT_MAX;

              for (int i = 0; i < n; i++) {
                  sum += nums[i];

                  while (sum >= target) {
                      minLength = min(minLength, i - left + 1);
                      sum -= nums[left++];
                  }
              }

              return minLength == INT_MAX ? 0 : minLength;
          }
      };
      ```
    </TabItem>
    <TabItem value="java" label="Java">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```java
      import java.util.*;

      public class Solution {
          public int minSubArrayLen(int target, int[] nums) {
              int n = nums.length;
              int left = 0;
              int sum = 0;
              int minLength = Integer.MAX_VALUE;

              for (int i = 0; i < n; i++) {
                  sum += nums[i];

                  while (sum >= target) {
                      minLength = Math.min(minLength, i - left + 1);
                      sum -= nums[left++];
                  }
              }

              return minLength == Integer.MAX_VALUE ? 0 : minLength;
          }

          public static void main(String[] args) {
              Solution solution = new Solution();
              int[] nums = {2, 3, 1, 2, 4, 3};
              int target = 7;
              System.out.println(solution.minSubArrayLen(target, nums));  // Output: 2
          }
      }
      ```
    </TabItem>
    <TabItem value="python" label="Python">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```python
      from typing import List

      class Solution:
          def minSubArrayLen(self, target: int, nums: List[int]) -> int:
              n = len(nums)
              left = 0
              sum = 0
              minLength = float('inf')

              for i in range(n):
                  sum += nums[i]

                  while sum >= target:
                      minLength = min(minLength, i - left + 1)
                      sum -= nums[left]
                      left += 1

              return 0 if minLength == float('inf') else minLength

      # Driver code
      if __name__ == "__main__":
          solution = Solution()
          nums = [2, 3, 1, 2, 4, 3]
          target = 7
          print(solution.minSubArrayLen(target, nums))  # Output: 2
      ```
    </TabItem>
    <TabItem value="c" label="C">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```c
      #include <stdio.h>
      #include <limits.h>

      int minSubArrayLen(int target, int* nums, int numsSize) {
          int left = 0;
          int sum = 0;
          int minLength = INT_MAX;

          for (int i = 0; i < numsSize; i++) {
              sum += nums[i];

              while (sum >= target) {
                  if (i - left + 1 < minLength) {
                      minLength = i - left + 1;
                  }
                  sum -= nums[left++];
              }
          }

          return minLength == INT_MAX ? 0 : minLength;
      }

      // Driver code
      int main() {
          int nums[] = {2, 3, 1, 2, 4, 3};
          int target = 7;
          int result = minSubArrayLen(target, nums, sizeof(nums) / sizeof(nums[0]));
          printf("%d\n", result);  // Output: 2
          return 0;
      }
      ```
    </TabItem>

</Tabs>

## Time and Space Complexity

    The time complexity of the code is $O(n)$, where n is the length of the input list nums. This is because there are two pointers i and j, both of which travel across the list at most once. The inner while loop only increases j and decreases the sum s until the sum is less than the target, but j can never be increased more than n times throughout the execution of the algorithm. Therefore, each element is processed at most twice, once when it is added to s and once when it is subtracted, leading to a linear time complexity.

    The space complexity of the code is $O(1)$, which means it requires a constant amount of additional space. This is because the algorithm only uses a fixed number of single-value variables (n, ans, s, j, i, x) and does not utilize any data structures that grow with the size of the input.

## video lecture

<LiteYouTubeEmbed
    id="D2MbogiFXWU"
    params="autoplay=1&autohide=1&showinfo=0&rel=0"
    title="CodeHarborHub minimum size subarray sum Video"
    poster="maxresdefault"
    webp />
