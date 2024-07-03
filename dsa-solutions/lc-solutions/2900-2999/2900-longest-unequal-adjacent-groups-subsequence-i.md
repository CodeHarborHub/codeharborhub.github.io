---
id: longest-unequal-adjacent-groups-subsequence-i
title: Longest Unequal Adjacent Groups Subsequence I
sidebar_label: 2900 Longest Unequal Adjacent Groups Subsequence I
tags:
  - Array
  - Greedy
  - LeetCode
  - C++
  - Java
  - Python
description: "This is a solution to the Longest Unequal Adjacent Groups Subsequence I problem on LeetCode."
sidebar_position: 2900
---

## Problem Description

You are given a string array `words` and a binary array `groups`, both of length `n`, where `words[i]` is associated with `groups[i]`.

Your task is to select the longest alternating subsequence from `words`. A subsequence of `words` is alternating if for any two consecutive strings in the sequence, their corresponding elements in the binary array `groups` differ. Essentially, you are to choose strings such that adjacent elements have non-matching corresponding bits in the `groups` array.

Formally, you need to find the longest subsequence of an array of indices `[0, 1, ..., n - 1]` denoted as `[i0, i1, ..., ik-1]`, such that `groups[ij] != groups[ij+1]` for each `0 <= j < k - 1` and then find the words corresponding to these indices.

Return the selected subsequence. If there are multiple answers, return any of them.

Note: The elements in `words` are distinct.

### Examples

**Example 1:**

```
Input: words = ["e","a","b"], groups = [0,0,1]
Output: ["e","b"]
Explanation: A subsequence that can be selected is ["e","b"] because groups[0] != groups[2]. Another subsequence that can be selected is ["a","b"] because groups[1] != groups[2]. It can be demonstrated that the length of the longest subsequence of indices that satisfies the condition is 2.
```

**Example 2:**

```
Input: words = ["a","b","c","d"], groups = [1,0,1,1]
Output: ["a","b","c"]
Explanation: A subsequence that can be selected is ["a","b","c"] because groups[0] != groups[1] and groups[1] != groups[2]. Another subsequence that can be selected is ["a","b","d"] because groups[0] != groups[1] and groups[1] != groups[3]. It can be shown that the length of the longest subsequence of indices that satisfies the condition is 3.
```

### Constraints

- `1 ≤ n == words.length == groups.length ≤ 100`
- `1 ≤ words[i].length ≤ 10`
- `groups[i]` is either 0 or 1.
- `words` consists of distinct strings.
- `words[i]` consists of lowercase English letters.

### Approach

To solve this problem, we can use a greedy approach to construct the longest alternating subsequence. The idea is to start with the first element and then continue adding elements to the subsequence only if the current element has a different group value than the previous element in the subsequence.

This approach ensures that we build the longest possible alternating subsequence in a single pass through the array, making it both simple and efficient.

### Time Complexity

The time complexity is $O(n)$. where `n` is the length of the `words` array. This is because we are iterating through the array once.

### Code Implementation

<Tabs>
  <TabItem value="C++" label="C++" default>
  <SolutionAuthor name="@ananyag309"/>

  ```cpp
  class Solution {
  public:
      vector<string> getLongestSubsequence(vector<string>& words, vector<int>& groups) {
          vector<string> result;
          int n = words.size();
          if (n == 0) return result;

          result.push_back(words[0]);
          for (int i = 1; i < n; ++i) {
              if (groups[i] != groups[i - 1]) {
                  result.push_back(words[i]);
              }
          }
          return result;
      }
  };
  ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@ananyag309"/>

  ```java
  class Solution {
      public List<String> getLongestSubsequence(String[] words, int[] groups) {
          List<String> result = new ArrayList<>();
          int n = words.length;
          if (n == 0) return result;

          result.add(words[0]);
          for (int i = 1; i < n; ++i) {
              if (groups[i] != groups[i - 1]) {
                  result.add(words[i]);
              }
          }
          return result;
      }
  }
  ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@ananyag309"/>

  ```python
  class Solution:
      def getLongestSubsequence(self, words: List[str], groups: List[int]) -> List[str]:
          result = []
          n = len(words)
          if n == 0:
              return result

          result.append(words[0])
          for i in range(1, n):
              if groups[i] != groups[i - 1]:
                  result.append(words[i])

          return result

  # Example usage
  if __name__ == "__main__":
      solution = Solution()
      print(solution.getLongestSubsequence(["a", "b", "c", "d"], [1, 0, 1, 1]))  # Expected output: ["a", "b", "c"]
      print(solution.getLongestSubsequence(["e", "a", "b"], [0, 0, 1]))  # Expected output: ["e", "b"]
  ```

  </TabItem>
</Tabs>

## Solution Logic

1. A number `n` is a power of 2 if it has exactly one bit set in its binary representation.
2. To check this, you can use the property: `n & (n - 1) == 0`.
3. This expression is true only for powers of 2.

## Time Complexity
- The function operates in constant time, $O(1)$.

## Space Complexity
- The function uses constant space, $O(1)$.

## References
- LeetCode Problem: [Longest Unequal Adjacent Groups Subsequence I](#)
- Greedy Algorithm: [GeeksforGeeks Greedy Algorithm](#)
