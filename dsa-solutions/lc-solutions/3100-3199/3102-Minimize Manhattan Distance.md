---
id: Minimize-Manhattan-Distances
title: Minimize Manhattan Distances
level: hard
sidebar_label: 3102-Minimize Manhattan Distances
tags:
  - Dynamic Programming
  - Bit Manipulation
  - C++
  - Java
  - Python
description: "This document provides solutions for Minimize Manhattan Distances using dynamic  implemented in C++, Java, and Python."
---

## Problem Statement

You are given a array points representing integer coordinates of some points on a 2D plane, where points`[i] = [xi, yi]`.

The distance between two points is defined as their Manhattan distance.

Return the minimum possible value for maximum distance between any two points by removing exactly one point.

**Example 1:**

Input: points = [[3,10],[5,15],[10,2],[4,4]]
Output: 12

Explanation:
The maximum distance after removing each point is the following:

- After removing the 0th point the maximum distance is between points (5, 15) and (10, 2), which is |5 - 10| + |15 - 2| = 18.

- After removing the 1st point the maximum distance is between points (3, 10) and (10, 2), which is |3 - 10| + |10 - 2| = 15.

- After removing the 2nd point the maximum distance is between points (5, 15) and (4, 4), which is |5 - 4| + |15 - 4| = 12.

- After removing the 3rd point the maximum distance is between points (5, 15) and (10, 2), which is |5 - 10| + |15 - 2| = 18.

- 12 is the minimum possible maximum distance between any two points after removing exactly one point.

**Example 2:**

Input: points = [[1,1],[1,1],[1,1]]
Output: 0

Explanation:
Removing any of the points results in the maximum distance between any two points of 0.

Constraints:
`3 <= points.length <= 105`
`points[i].length == 2`
`1 <= points[i][0], points[i][1] <= 108`

## Solutions:

### Approach

1.  Manhattan Distance between any two points `(x1,y1) & (x2,y2)` is:

    `|x1–x2|+|y1–y2|=max(x1–x2-y1+y2,-x1+x2+y1–y2,-x1+x2–y1+y2,x1–x2+y1–y2)`

2.  The above expression can also be formulated as:
    `|x1–x2|+|y1–y2|=max((x1–y1)–(x2–y2),(-x1+y1)–(-x2+y2),(-x1–y1)–(-x2–y2),(x1+y1)–(x2+y2))`

3.  From the above expression, it's apparent that the Maximum Manhattan Distance can be determined by storing the sums and differences of the coordinates.

4.  Consider 2 set of pairs st1,st2 where st1 will store the sum of X,Y coordinate along with the index of the point & st2 will store the difference of X,Y coordinates along with the index of the point

5.  Now, iterate over the Points again, & Calculate the sum x + y and difference x - y for the current element.

6.  Check if these calculated sums and differences exist in the sets. If they do, erase them.

7.  To compute the maximum manhattan distance (maxi) after removing each point:

    `maxi=max(maxsum-minsum,maxdiff-mindiff);`

    - Now, find the values of minsum, maxsum, mindiff, maxdiff

    - `minsum=st1.begin(), maxsum=--st1.end()`

    - `mindiff=st2.begin(), maxdiff=--st2.end()`

    `Note:- st.end() denotes an iterator pointing to the position
  just after the last element that's why we have taken --st.end()`

    8. After finding the maximum value upon removal of the current sum and difference, store the minimum computed so far in variable mini which holds the minimum of all Manhattan Distance found so far.

    9. Add the removed sum and differences to the sets st1 and st2 to consider the next sum and differnce.

    10. Finally after iterating over all the points return minimum of all computed values.

## code:

<Tabs>
    <TabItem value="cpp" label="C++" default>
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```cpp
      #include <vector>
      #include <set>
      #include <limits.h>
      using namespace std;

      class Solution {
      public:
          int minimumDistance(vector<vector<int>>& A) {
              set<pair<int, int>> st1, st2;
              for (int i = 0; i < A.size(); i++) {
                  st1.insert({A[i][0] + A[i][1], i});
                  st2.insert({A[i][0] - A[i][1], i});
              }

              int mini = INT_MAX;
              for (int i = 0; i < A.size(); i++) {
                  int t1 = A[i][0] + A[i][1];
                  int t2 = A[i][0] - A[i][1];
                  if (st1.find({t1, i}) != st1.end()) st1.erase({t1, i});
                  if (st2.find({t2, i}) != st2.end()) st2.erase({t2, i});

                  int minsum = st1.begin()->first;
                  int maxsum = (--st1.end())->first;
                  int mindiff = st2.begin()->first;
                  int maxdiff = (--st2.end())->first;
                  int maxi = max(maxsum - minsum, maxdiff - mindiff);
                  mini = min(mini, maxi);

                  st1.insert({t1, i});
                  st2.insert({t2, i});
              }

              return mini;
          }
      };
      ```
    </TabItem>
    <TabItem value="java" label="Java">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```java
      import java.util.*;

      public class Solution {
          public int minimumDistance(List<List<Integer>> A) {
              Set<Pair<Integer, Integer>> st1 = new TreeSet<>();
              Set<Pair<Integer, Integer>> st2 = new TreeSet<>();
              for (int i = 0; i < A.size(); i++) {
                  st1.add(new Pair<>(A.get(i).get(0) + A.get(i).get(1), i));
                  st2.add(new Pair<>(A.get(i).get(0) - A.get(i).get(1), i));
              }

              int mini = Integer.MAX_VALUE;
              for (int i = 0; i < A.size(); i++) {
                  int t1 = A.get(i).get(0) + A.get(i).get(1);
                  int t2 = A.get(i).get(0) - A.get(i).get(1);
                  st1.remove(new Pair<>(t1, i));
                  st2.remove(new Pair<>(t2, i));

                  int minsum = st1.iterator().next().getKey();
                  int maxsum = ((TreeSet<Pair<Integer, Integer>>) st1).last().getKey();
                  int mindiff = st2.iterator().next().getKey();
                  int maxdiff = ((TreeSet<Pair<Integer, Integer>>) st2).last().getKey();
                  int maxi = Math.max(maxsum - minsum, maxdiff - mindiff);
                  mini = Math.min(mini, maxi);

                  st1.add(new Pair<>(t1, i));
                  st2.add(new Pair<>(t2, i));
              }

              return mini;
          }
      }

      class Pair<K, V> {
          private K key;
          private V value;

          public Pair(K key, V value) {
              this.key = key;
              this.value = value;
          }

          public K getKey() {
              return key;
          }

          public V getValue() {
              return value;
          }

          @Override
          public boolean equals(Object o) {
              if (this == o) return true;
              if (o == null || getClass() != o.getClass()) return false;
              Pair<?, ?> pair = (Pair<?, ?>) o;
              return Objects.equals(key, pair.key) && Objects.equals(value, pair.value);
          }

          @Override
          public int hashCode() {
              return Objects.hash(key, value);
          }
      }
      ```
    </TabItem>
    <TabItem value="python" label="Python">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```python
      from typing import List
      from sortedcontainers import SortedList

      class Solution:
          def minimumDistance(self, A: List[List[int]]) -> int:
              st1 = SortedList((x + y, i) for i, (x, y) in enumerate(A))
              st2 = SortedList((x - y, i) for i, (x, y) in enumerate(A))

              mini = float('inf')
              for i, (x, y) in enumerate(A):
                  t1 = x + y
                  t2 = x - y
                  st1.remove((t1, i))
                  st2.remove((t2, i))

                  minsum = st1[0][0]
                  maxsum = st1[-1][0]
                  mindiff = st2[0][0]
                  maxdiff = st2[-1][0]
                  maxi = max(maxsum - minsum, maxdiff - mindiff)
                  mini = min(mini, maxi)

                  st1.add((t1, i))
                  st2.add((t2, i))

              return mini
      ```
    </TabItem>
    <TabItem value="c" label="C">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```c
      #include <stdio.h>
      #include <stdlib.h>
      #include <limits.h>

      typedef struct {
          int first;
          int second;
      } Pair;

      int cmpPair(const void *a, const void *b) {
          return ((Pair *)a)->first - ((Pair *)b)->first;
      }

      int minimumDistance(int A[][2], int n) {
          Pair *st1 = (Pair *)malloc(n * sizeof(Pair));
          Pair *st2 = (Pair *)malloc(n * sizeof(Pair));
          for (int i = 0; i < n; i++) {
              st1[i].first = A[i][0] + A[i][1];
              st1[i].second = i;
              st2[i].first = A[i][0] - A[i][1];
              st2[i].second = i;
          }

          qsort(st1, n, sizeof(Pair), cmpPair);
          qsort(st2, n, sizeof(Pair), cmpPair);

          int mini = INT_MAX;
          for (int i = 0; i < n; i++) {
              int t1 = A[i][0] + A[i][1];
              int t2 = A[i][0] - A[i][1];
              int idx1 = -1, idx2 = -1;
              for (int j = 0; j < n; j++) {
                  if (st1[j].second == i) {
                      idx1 = j;
                      break;
                  }
              }
              for (int j = 0; j < n; j++) {
                  if (st2[j].second == i) {
                      idx2 = j;
                      break;
                  }
              }
              for (int j = idx1; j < n - 1; j++) {
                  st1[j] = st1[j + 1];
              }
              for (int j = idx2; j < n - 1; j++) {
                  st2[j] = st2[j + 1];
              }

              int minsum = st1[0].first;
              int maxsum = st1[n - 2].first;
              int mindiff = st2[0].first;
              int maxdiff = st2[n - 2].first;
              int maxi = max(maxsum - minsum, maxdiff - mindiff);
              mini = min(mini, maxi);

              for (int j = n - 1; j > idx1; j--) {
                  st1[j] = st1[j - 1];
              }
              for (int j = n - 1; j > idx2; j--) {
                  st2[j] = st2[j - 1];
              }
              st1[idx1].first = t1;
              st1[idx1].second = i;
              st2[idx2].first = t2;
              st2[idx2].second = i;
          }

          free(st1);
          free(st2);
          return mini;
      }

      int main() {
          int A[][2] = {{1, 2}, {3, 4}, {5, 6}, {7, 8}};
          int n = sizeof(A) / sizeof(A[0]);
          printf("%d\n", minimumDistance(A, n));
          return 0;
      }
      ```
    </TabItem>

</Tabs>

## Complexity

Time complexity: $O(nlogn)$

Space complexity: $O(n)$
