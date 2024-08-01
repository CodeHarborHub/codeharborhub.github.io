---
id: reverse-words-in-a-given-string
title: Reverse Words in a Given String (gfg)
sidebar_label: 0007 - Reverse Words in a Given String
tags:
  - Easy
  - String
  - GeeksforGeeks
  - CPP
  - Python
  - DSA
description: "This tutorial covers the solution to the Reverse Words in a Given String problem from the GeeksforGeeks website, featuring implementations in Python and C++."
---
## Problem Description

Given a string `S`, you need to reverse the order of words in the string. Words are separated by dots.

## Examples

**Example 1:**

```
Input: S = "i.like.this.program.very.much"
Output: "much.very.program.this.like.i"
Explanation: After reversing the words, the new string is "much.very.program.this.like.i".
```

**Example 2:**

```
Input: S = "pqr.mno"
Output: "mno.pqr"
Explanation: After reversing the words, the new string is "mno.pqr".
```

## Your Task

You don't need to read input or print anything. Your task is to complete the function `reverseWords()` which takes the string `S` as input and returns the string with the words reversed.

Expected Time Complexity: $O(|S|)$

Expected Auxiliary Space: $O(|S|)$

## Constraints

* `1 ≤ |S| ≤ 2000`

## Problem Explanation

The problem is to reverse the order of words in a string where words are separated by dots.

## Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@arunimad6yuq"/>

  ```py
  class Solution:
      def reverseWords(self, S):
          # Split the string by dots
          words = S.split('.')
          # Reverse the list of words
          words.reverse()
          # Join the reversed list back into a string with dots
          return '.'.join(words)

  # Example usage
  if __name__ == "__main__":
      solution = Solution()
      print(solution.reverseWords("i.like.this.program.very.much"))  # Expected output: "much.very.program.this.like.i"
      print(solution.reverseWords("pqr.mno"))  # Expected output: "mno.pqr"
  ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@arunimad6yuq"/>

  ```cpp
  //{ Driver Code Starts
  #include <bits/stdc++.h>
  using namespace std;

  // } Driver Code Ends

  class Solution {
  public:
      // Function to reverse words in a given string.
      string reverseWords(string S) {
          // Split the string by dots
          vector<string> words;
          string word;
          for (char c : S) {
              if (c == '.') {
                  words.push_back(word);
                  word.clear();
              } else {
                  word += c;
              }
          }
          words.push_back(word); // Add the last word

          // Reverse the list of words
          reverse(words.begin(), words.end());

          // Join the reversed list back into a string with dots
          string result;
          for (size_t i = 0; i < words.size(); ++i) {
              if (i != 0) {
                  result += '.';
              }
              result += words[i];
          }

          return result;
      }
  };

  //{ Driver Code Starts.
  int main() {
      int t;
      cin >> t;
      while (t--) {
          string s;
          cin >> s;
          Solution obj;
          cout << obj.reverseWords(s) << endl;
      }
      return 0;
  }
  // } Driver Code Ends
  ```

  </TabItem>
</Tabs>

## Example Walkthrough

For the string `S = "i.like.this.program.very.much"`:

1. Split the string by dots into `["i", "like", "this", "program", "very", "much"]`.
2. Reverse the list to `["much", "very", "program", "this", "like", "i"]`.
3. Join the reversed list with dots to get `"much.very.program.this.like.i"`.

For the string `S = "pqr.mno"`:

1. Split the string by dots into `["pqr", "mno"]`.
2. Reverse the list to `["mno", "pqr"]`.
3. Join the reversed list with dots to get `"mno.pqr"`.

## Solution Logic:

1. Split the string into words using the dot as a delimiter.
2. Reverse the list of words.
3. Join the reversed list back into a string with dots.

## Time Complexity

* The time complexity is $O(|S|)$, where |S| is the length of the input string.

## Space Complexity

* The auxiliary space complexity is $O(|S|)$ due to the storage required for the list of words.

## References

- **gfg Problem:** [gfg Problem](https://www.geeksforgeeks.org/problems/reverse-words-in-a-given-string5459/1?page=1&difficulty=Easy&sortBy=submissions)
- **Solution Author:** [arunimad6yuq/](https://www.geeksforgeeks.org/user/arunimad6yuq/)
