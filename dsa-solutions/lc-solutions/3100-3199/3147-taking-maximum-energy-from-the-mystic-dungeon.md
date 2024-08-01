---
id: Taking-Maximum-Energy-From-the-Mystic-Dungeon
title: Taking Maximum Energy From the Mystic Dungeon (LeetCode)
sidebar_label: 3147-Taking Maximum Energy From the Mystic Dungeon
tags:
  - Dynamic Programming
  - Geometry
  - Sorting
  - Sliding Window
description: this discription is for the solution of Taking Maximum Energy From the Mystic Dungeon
sidebar_position: 3147
---

## Problem statement:

In a mystic dungeon, `n` magicians are standing in a line. Each magician has an attribute that gives you energy. Some magicians can give you negative energy, which means taking energy from you.

You have been cursed in such a way that after absorbing energy from magician `i`, you will be instantly transported to magician `(i + k)`. This process will be repeated until you reach the magician where `(i + k)` does not exist.

In other words, you will choose a starting point and then teleport with `k` jumps until you reach the end of the magicians' sequence, absorbing all the energy during the journey.

You are given an array energy and an integer `k`. Return the maximum possible energy you can gain.

**Example 1:**

Input: energy = [5,2,-10,-5,1], k = 3
Output: 3

Explanation: We can gain a total energy of 3 by starting from magician 1 absorbing 2 + 1 = 3.

**Example 2:**

Input: energy = [-2,-3,-1], k = 2
Output: -1

Explanation: We can gain a total energy of -1 by starting from magician 2.

**Constraints:**

        - `1 <= energy.length <= 105`
        - `-1000 <= energy[i] <= 1000`
        - `1 <= k <= energy.length - 1`

## Solutions:

### Approch 1:

There will be `k` non-overlapping sets of integers that the `energy` array can be partitioned into. With adjacent elements in any given partition being `k`-index positions apart in the original input.

Additionally, since we're always moving from left to right, that means any energies that occur more to the right will need to be absorbed if we start to their left; while energies occuring towards the left may be skipped if we simply choose to start at an index position to the right of those. Thus keeping track of suffix-sums of partitioned energies, while iterating from right to left, will be our strategy to solving this.

## code:

<Tabs>
    <TabItem value="python" label="Python" default>
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```python
      class Solution:
          def maximumEnergy(self, energy: List[int], k: int) -> int:
              res, n = -math.inf, len(energy)

              # iterate through every possible starting position
              for p in range(k):
                  acc_energy = 0

                  # iterate from the right to left, in k-steps
                  for i in range(n - p - 1, -1, -k):
                      acc_energy += energy[i]
                      res = max(res, acc_energy)

              return res
      ```
    </TabItem>
    <TabItem value="java" label="Java">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```java
      import java.util.*;

      public class Solution {
          public int maximumEnergy(List<Integer> energy, int k) {
              int res = Integer.MIN_VALUE;
              int n = energy.size();

              // iterate through every possible starting position
              for (int p = 0; p < k; p++) {
                  int accEnergy = 0;

                  // iterate from the right to left, in k-steps
                  for (int i = n - p - 1; i >= 0; i -= k) {
                      accEnergy += energy.get(i);
                      res = Math.max(res, accEnergy);
                  }
              }

              return res;
          }
      }
      ```
    </TabItem>
    <TabItem value="cpp" label="C++">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```cpp
      #include <vector>
      #include <algorithm>
      #include <cmath>

      class Solution {
      public:
          int maximumEnergy(std::vector<int>& energy, int k) {
              int res = -std::numeric_limits<int>::max();
              int n = energy.size();

              // iterate through every possible starting position
              for (int p = 0; p < k; ++p) {
                  int accEnergy = 0;

                  // iterate from the right to left, in k-steps
                  for (int i = n - p - 1; i >= 0; i -= k) {
                      accEnergy += energy[i];
                      res = std::max(res, accEnergy);
                  }
              }

              return res;
          }
      };
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```csharp
      using System;
      using System.Collections.Generic;

      public class Solution {
          public int MaximumEnergy(List<int> energy, int k) {
              int res = int.MinValue;
              int n = energy.Count;

              // iterate through every possible starting position
              for (int p = 0; p < k; p++) {
                  int accEnergy = 0;

                  // iterate from the right to left, in k-steps
                  for (int i = n - p - 1; i >= 0; i -= k) {
                      accEnergy += energy[i];
                      res = Math.Max(res, accEnergy);
                  }
              }

              return res;
          }
      }
      ```
    </TabItem>
    <TabItem value="javascript" label="JavaScript">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```javascript
      function maximumEnergy(energy, k) {
          let res = -Infinity;
          const n = energy.length;

          // iterate through every possible starting position
          for (let p = 0; p < k; p++) {
              let accEnergy = 0;

              // iterate from the right to left, in k-steps
              for (let i = n - p - 1; i >= 0; i -= k) {
                  accEnergy += energy[i];
                  res = Math.max(res, accEnergy);
              }
          }

          return res;
      }
      ```
    </TabItem>
    <TabItem value="go" label="Go">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```go
      package main

      import (
          "math"
      )

      func maximumEnergy(energy []int, k int) int {
          res := math.MinInt64
          n := len(energy)

          // iterate through every possible starting position
          for p := 0; p < k; p++ {
              accEnergy := 0

              // iterate from the right to left, in k-steps
              for i := n - p - 1; i >= 0; i -= k {
                  accEnergy += energy[i]
                  if accEnergy > res {
                      res = accEnergy
                  }
              }
          }

          return res
      }
      ```
    </TabItem>

</Tabs>

## Complexity

**Time complexity:** $O(k∗n/k)$ = $O(n)$

**Space complexity:** $O(1)$

## Approch 2:

**Intuition**

        - Need to focus - you can start from any point and need to take all till end
        - We need to iterate from end and take the max of all intermidiate sum

**Approach**

         - Iterate i over 0 to k, and fix the start point as end - i
         - Again start iterate over array and keep traking the max value

**code**

<Tabs>
    <TabItem value="cpp" label="C++" default>
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```cpp
      #include <vector>
      #include <algorithm>
      #include <climits>

      class Solution {
      public:
          int maximumEnergy(std::vector<int>& energy, int k) {
              int ans = INT_MIN;
              for (int i = 0; i < k; ++i) {
                  for (int j = energy.size() - 1 - i, sum = 0; j >= 0; j -= k) {
                      sum += energy[j];
                      ans = std::max(ans, sum);
                  }
              }
              return ans;
          }
      };
      ```
    </TabItem>
    <TabItem value="python" label="Python">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```python
      class Solution:
          def maximumEnergy(self, energy: List[int], k: int) -> int:
              ans = float('-inf')
              for i in range(k):
                  sum = 0
                  for j in range(len(energy) - 1 - i, -1, -k):
                      sum += energy[j]
                      ans = max(ans, sum)
              return ans
      ```
    </TabItem>
    <TabItem value="java" label="Java">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```java
      import java.util.*;

      public class Solution {
          public int maximumEnergy(List<Integer> energy, int k) {
              int ans = Integer.MIN_VALUE;
              for (int i = 0; i < k; ++i) {
                  int sum = 0;
                  for (int j = energy.size() - 1 - i; j >= 0; j -= k) {
                      sum += energy.get(j);
                      ans = Math.max(ans, sum);
                  }
              }
              return ans;
          }
      }
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```csharp
      using System;
      using System.Collections.Generic;

      public class Solution {
          public int MaximumEnergy(List<int> energy, int k) {
              int ans = int.MinValue;
              for (int i = 0; i < k; ++i) {
                  int sum = 0;
                  for (int j = energy.Count - 1 - i; j >= 0; j -= k) {
                      sum += energy[j];
                      ans = Math.Max(ans, sum);
                  }
              }
              return ans;
          }
      }
      ```
    </TabItem>
    <TabItem value="javascript" label="JavaScript">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```javascript
      function maximumEnergy(energy, k) {
          let ans = -Infinity;
          for (let i = 0; i < k; ++i) {
              let sum = 0;
              for (let j = energy.length - 1 - i; j >= 0; j -= k) {
                  sum += energy[j];
                  ans = Math.max(ans, sum);
              }
          }
          return ans;
      }
      ```
    </TabItem>
    <TabItem value="go" label="Go">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```go
      package main

      import (
          "math"
      )

      func maximumEnergy(energy []int, k int) int {
          ans := math.MinInt64
          for i := 0; i < k; i++ {
              sum := 0
              for j := len(energy) - 1 - i; j >= 0; j -= k {
                  sum += energy[j]
                  if sum > ans {
                      ans = sum
                  }
              }
          }
          return ans
      }
      ```
    </TabItem>

</Tabs>

## Complexity

Time complexity: $O(N)$

Space complexity: $O(1)$

## Video lecture:

<LiteYouTubeEmbed
    id="fn4GEChYzI8"
    params="autoplay=1&autohide=1&showinfo=0&rel=0"
    title="CodeHarborHub Taking-Maximum-Energy-From-the-Mystic-Dungeon"
    poster="maxresdefault"
    webp />
