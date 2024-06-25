---
id: find-product-of-element-of-big-array
title: Find Product Of Element Of Big Array (LeetCode)
sidebar_label: 3145-find-product-of-element-of-big-array
tags:
  - Dynamic Programming
  - Geometry
  - Sorting
  - Sliding Window
description: this discription is for the solution of find-product-of-element-of-big-array
sidebar_position: 3145
---

## Problem Statement:

A powerful array for an integer `x` is the shortest sorted array of powers of two that sum up to `x`. For example, the powerful array for 11 is `[1, 2, 8]`.

The array big_nums is created by concatenating the powerful arrays for every positive integer i in ascending order: 1, 2, 3, and so forth. Thus, big_nums starts as `[1, 2, 1, 2, 4, 1, 4, 2, 4, 1, 2, 4, 8, ...]`.

You are given a 2D integer matrix `queries`, where for `queries[i] = [fromi, toi, modi]` you should calculate `(big_nums[fromi] * big_nums[fromi + 1] * ... * big_nums[toi])` `%` `modi`.

Return an integer array answer such that `answer[i]` is the answer to the `ith` query.

**Example 1:**

Input: queries = [[1,3,7]]
Output: [4]

Explanation:
There is one query.
big_nums[1..3] = [2,1,2]. The product of them is 4. The remainder of 4 under 7 is 4.

**Example 2:**

Input: queries = [[2,5,3],[7,7,4]]
Output: [2,2]

Explanation:
There are two queries.
First query: big_nums[2..5] = [1,2,4,1]. The product of them is 8. The remainder of 8 under 3 is 2.
Second query: big_nums[7] = 2. The remainder of 2 under 4 is 2.

**Constraints:**

        - `1 <= queries.length <= 500`
        - `queries[i].length == 3`
        - `0 <= queries[i][0] <= queries[i][1] <= 1015`
        - `1 <= queries[i][2] <= 105`

## Solutions:

### Intuition

The problem requires finding products of elements within a certain range modulo a given number. To efficiently solve this problem, we can use dynamic programming to calculate the number of bits required to represent a number, perform binary search to find the maximum number within a given range, and calculate the summation of bits within the range.

## Approach

**Dynamic Programming for Number of Bits:**

        Utilize dynamic programming to calculate the number of bits required to represent a number.
        Store the calculated number of bits for each number in a map to avoid redundant computations.

**Binary Search for Maximum Number:**

        Perform a binary search to find the maximum number within a given range.
        Utilize the previously calculated number of bits to determine if a number falls within the range.

**Summation of Bits:**

        Calculate the summation of bits within a given range.
        Iterate through each bit position, calculating the contribution of ones in complete blocks and any remaining bits.

**Main Function to Compute Result:**

        Combine the above calculations to compute the final result for a given range.
        Calculate the sum of bits within the range and adjust for any remaining bits.

**Power Function and Modular Arithmetic:**

        Compute the result for each query using the previously defined functions.
        Utilize a power function to efficiently compute powers modulo the given number.

## code:

<Tabs>
    <TabItem value="cpp" label="C++" default>
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```cpp
      #include <vector>
      #include <unordered_map>
      using namespace std;

      class Solution {
      private:
          unordered_map<long long, long long> dp;

          long long power(long long n, long long expo, long long mod) {
              long long ans = 1;
              while (expo) {
                  if (expo % 2)
                      ans = ans * n % mod;
                  n = n * n % mod;
                  expo /= 2;
              }
              return ans;
          }

          long long getNumBits(long long n) {
              if (n == 0)
                  return 0;

              if (dp.count(n))
                  return dp[n];

              long long ans = 0, num = n + 1;
              for (int i = 60; i >= 0; i--)
                  if ((1LL << i) < num) {
                      ans = getNumBits((1LL << i) - 1);
                      long long rem = num - (1LL << i);
                      ans += getNumBits(rem - 1) + rem;
                      break;
                  }
              return dp[n] = ans;
          }

          long long getMaxNum(long long n) {
              long long left = 1, right = 1e15, ans = 0;
              while (left <= right) {
                  long long mid = (left + right) / 2;
                  long long placesOccupied = getNumBits(mid);
                  if (placesOccupied <= n)
                      ans = mid, left = mid + 1;
                  else
                      right = mid - 1;
              }
              return ans;
          }

          long long getSum(long long n) {
              long long res = 0;
              for (int i = 1; i < 50; i++) {
                  long long blockSize = (1LL << (i + 1));
                  long long onesInBlock = blockSize / 2;
                  long long completeBlocks = n / blockSize;
                  res += completeBlocks * onesInBlock * i;
                  long long rem = n % blockSize;
                  res += max(0LL, rem + 1 - onesInBlock) * i;
              }
              return res;
          }

          long long func(long long n) {
              if (n == 0)
                  return 0;

              long long maxNum = getMaxNum(n);
              long long placesOccupied = getNumBits(maxNum);
              long long ans = getSum(maxNum);
              maxNum++;
              long long rem = n - placesOccupied;
              for (int i = 0; rem > 0; i++)
                  if (maxNum & (1LL << i)) {
                      rem--;
                      ans += i;
                  }
              return ans;
          }

          int solve(vector<long long> &query) {
              long long L = query[0], R = query[1], mod = query[2];
              return power(2, func(R + 1) - func(L), mod) % mod;
          }
      public:
          vector<int> findProductsOfElements(vector<vector<long long>>& queries) {
              vector<int> res;
              for (auto q: queries)
                  res.push_back(solve(q));
              return res;
          }
      };
      ```
    </TabItem>
    <TabItem value="java" label="Java">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```java
      import java.util.*;

      public class Solution {
          private Map<Long, Long> dp = new HashMap<>();

          private long power(long n, long expo, long mod) {
              long ans = 1;
              while (expo > 0) {
                  if (expo % 2 != 0)
                      ans = ans * n % mod;
                  n = n * n % mod;
                  expo /= 2;
              }
              return ans;
          }

          private long getNumBits(long n) {
              if (n == 0)
                  return 0;

              if (dp.containsKey(n))
                  return dp.get(n);

              long ans = 0;
              long num = n + 1;
              for (int i = 60; i >= 0; i--) {
                  if ((1L << i) < num) {
                      ans = getNumBits((1L << i) - 1);
                      long rem = num - (1L << i);
                      ans += getNumBits(rem - 1) + rem;
                      break;
                  }
              }
              dp.put(n, ans);
              return ans;
          }

          private long getMaxNum(long n) {
              long left = 1, right = (long) 1e15, ans = 0;
              while (left <= right) {
                  long mid = (left + right) / 2;
                  long placesOccupied = getNumBits(mid);
                  if (placesOccupied <= n) {
                      ans = mid;
                      left = mid + 1;
                  } else {
                      right = mid - 1;
                  }
              }
              return ans;
          }

          private long getSum(long n) {
              long res = 0;
              for (int i = 1; i < 50; i++) {
                  long blockSize = (1L << (i + 1));
                  long onesInBlock = blockSize / 2;
                  long completeBlocks = n / blockSize;
                  res += completeBlocks * onesInBlock * i;
                  long rem = n % blockSize;
                  res += Math.max(0, rem + 1 - onesInBlock) * i;
              }
              return res;
          }

          private long func(long n) {
              if (n == 0)
                  return 0;

              long maxNum = getMaxNum(n);
              long placesOccupied = getNumBits(maxNum);
              long ans = getSum(maxNum);
              maxNum++;
              long rem = n - placesOccupied;
              for (int i = 0; rem > 0; i++) {
                  if ((maxNum & (1L << i)) != 0) {
                      rem--;
                      ans += i;
                  }
              }
              return ans;
          }

          private int solve(List<Long> query) {
              long L = query.get(0), R = query.get(1), mod = query.get(2);
              return (int) (power(2, func(R + 1) - func(L), mod) % mod);
          }

          public List<Integer> findProductsOfElements(List<List<Long>> queries) {
              List<Integer> res = new ArrayList<>();
              for (List<Long> q : queries) {
                  res.add(solve(q));
              }
              return res;
          }
      }
      ```
    </TabItem>
    <TabItem value="python" label="Python">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```python
      from typing import List
      from collections import defaultdict

      class Solution:
          def __init__(self):
              self.dp = defaultdict(int)

          def power(self, n: int, expo: int, mod: int) -> int:
              ans = 1
              while expo:
                  if expo % 2:
                      ans = ans * n % mod
                  n = n * n % mod
                  expo //= 2
              return ans

          def get_num_bits(self, n: int) -> int:
              if n == 0:
                  return 0

              if n in self.dp:
                  return self.dp[n]

              ans = 0
              num = n + 1
              for i in range(60, -1, -1):
                  if (1 << i) < num:
                      ans = self.get_num_bits((1 << i) - 1)
                      rem = num - (1 << i)
                      ans += self.get_num_bits(rem - 1) + rem
                      break
              self.dp[n] = ans
              return ans

          def get_max_num(self, n: int) -> int:
              left, right, ans = 1, int(1e15), 0
              while left <= right:
                  mid = (left + right) // 2
                  places_occupied = self.get_num_bits(mid)
                  if places_occupied <= n:
                      ans = mid
                      left = mid + 1
                  else:
                      right = mid - 1
              return ans

          def get_sum(self, n: int) -> int:
              res = 0
              for i in range(1, 50):
                  block_size = (1 << (i + 1))
                  ones_in_block = block_size // 2
                  complete_blocks = n // block_size
                  res += complete_blocks * ones_in_block * i
                  rem = n % block_size
                  res += max(0, rem + 1 - ones_in_block) * i
              return res

          def func(self, n: int) -> int:
              if n == 0:
                  return 0

              max_num = self.get_max_num(n)
              places_occupied = self.get_num_bits(max_num)
              ans = self.get_sum(max_num)
              max_num += 1
              rem = n - places_occupied
              for i in range(50):
                  if rem <= 0:
                      break
                  if max_num & (1 << i):
                      rem -= 1
                      ans += i
              return ans

          def solve(self, query: List[int]) -> int:
              L, R, mod = query
              return self.power(2, self.func(R + 1) - self.func(L), mod) % mod

          def findProductsOfElements(self, queries: List[List[int]]) -> List[int]:
              res = []
              for q in queries:
                  res.append(self.solve(q))
              return res
      ```
    </TabItem>
    <TabItem value="c" label="C">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```c
      #include <stdio.h>
      #include <stdlib.h>
      #include <string.h>
      #include <limits.h>

      typedef struct {
          long long key;
          long long value;
      } HashNode;

      typedef struct {
          HashNode *nodes;
          int size;
          int capacity;
      } HashMap;

      HashMap* createHashMap(int capacity) {
          HashMap *map = (HashMap *)malloc(sizeof(HashMap));
          map->nodes = (HashNode *)malloc(capacity * sizeof(HashNode));
          map->size = 0;
          map->capacity = capacity;
          return map;
      }

      void put(HashMap *map, long long key, long long value) {
          for (int i = 0; i < map->size; i++) {
              if (map->nodes[i].key == key) {
                  map->nodes[i].value = value;
                  return;
              }
          }
          if (map->size == map->capacity) {
              map->capacity *= 2;
              map->nodes = (HashNode *)realloc(map->nodes, map->capacity * sizeof(HashNode));
          }
          map->nodes[map->size].key = key;
          map->nodes[map->size].value = value;
          map->size++;
      }

      int get(HashMap *map, long long key, long long *value) {
          for (int i = 0; i < map->size; i++) {
              if (map->nodes[i].key == key) {
                  *value = map->nodes[i].value;
                  return 1;
              }
          }
          return 0;
      }

      long long power(long long n, long long expo, long long mod) {
          long long ans = 1;
          while (expo) {
              if (expo % 2)
                  ans = ans * n % mod;
              n = n * n % mod;
              expo /= 2;
          }
          return ans;
      }

      long long getNumBits(HashMap *dp, long long n) {
          if (n == 0)
              return 0;

          long long value;
          if (get(dp, n, &value))
              return value;

          long long ans = 0, num = n + 1;
          for (int i = 60; i >= 0; i--) {
              if ((1LL << i) < num) {
                  ans = getNumBits(dp, (1LL << i) - 1);
                  long long rem = num - (1LL << i);
                  ans += getNumBits(dp, rem - 1) + rem;
                  break;
              }
          }
          put(dp, n, ans);
          return ans;
      }

      long long getMaxNum(HashMap *dp, long long n) {
          long long left = 1, right = 1e15, ans = 0;
          while (left <= right) {
              long long mid = (left + right) / 2;
              long long placesOccupied = getNumBits(dp, mid);
              if (placesOccupied <= n) {
                  ans = mid;
                  left = mid + 1;
              } else {
                  right = mid - 1;
              }
          }
          return ans;
      }

      long long getSum(long long n) {
          long long res = 0;
          for (int i = 1; i < 50; i++) {
              long long blockSize = (1LL << (i + 1));
              long long onesInBlock = blockSize / 2;
              long long completeBlocks = n / blockSize;
              res += completeBlocks * onesInBlock * i;
              long long rem = n % blockSize;
              res += (rem + 1 > onesInBlock ? rem + 1 - onesInBlock : 0) * i;
          }
          return res;
      }

      long long func(HashMap *dp, long long n) {
          if (n == 0)
              return 0;

          long long maxNum = getMaxNum(dp, n);
          long long placesOccupied = getNumBits(dp, maxNum);
          long long ans = getSum(maxNum);
          maxNum++;
          long long rem = n - placesOccupied;
          for (int i = 0; rem > 0; i++) {
              if (maxNum & (1LL << i)) {
                  rem--;
                  ans += i;
              }
          }
          return ans;
      }

      int solve(HashMap *dp, long long L, long long R, long long mod) {
          return power(2, func(dp, R + 1) - func(dp, L), mod) % mod;
      }

      int* findProductsOfElements(int N, long long** queries, int queriesSize, int* queriesColSize, int* returnSize) {
          int* res = (int*)malloc(queriesSize * sizeof(int));
          *returnSize = queriesSize;
          HashMap *dp = createHashMap(100);

          for (int i = 0; i < queriesSize; i++) {
              res[i] = solve(dp, queries[i][0], queries[i][1], queries[i][2]);
          }

          free(dp->nodes);
          free(dp);
          return res;
      }
      ```
    </TabItem>

</Tabs>

## Complexity:

**Time complexity:**
$O(QlogN)$, where Q is the number of queries and N is the maximum number in the queries.

**Space complexity:**
$O(logN)$, due to dynamic programming and additional space for storing intermediate results.

## Video lecture

<LiteYouTubeEmbed
    id="TtBpS8bxetw"
    params="autoplay=1&autohide=1&showinfo=0&rel=0"
    title="CodeHarborHub find-product-of-element-of-big-array"
    poster="maxresdefault"
    webp />
