---
id: secret-cipher
title: Secret-Cipher (Geeks for Geeks)
sidebar_label: Secret-Cipher
tags:
  - Intermediate
  - Geeks for Geeks
  - CPP
  - Python
  - DSA
description: "This is a solution to the Secret-Cipher problem on Geeks for Geeks."
---

## Problem Description

Geek wants to send an encrypted message in the form of string S to his friend Keeg along with instructions on how to decipher the message. To decipher the message, his friend needs to iterate over the message string from left to right, if he finds a '*', he must remove it and add all the letters read so far to the string. He must keep on doing this till he gets rid of all the '*'.
## Examples

**Example 1:**
Input: S = "ababcababcd"
Output: ab*c*d
Explanation: We can encrypt the string 
in following way : "ababcababcd" -> 
"ababc*d" -> "ab*c*d"
**Example 2:**
Input: S = "zzzzzzz"
Output: z*z*z
Explanation: The string can be encrypted 
in 2 ways: "z*z*z" and "z**zzz". Out of 
the two "z*z*z" is smaller in length.

## Your Task

You don't need to read input or print anything. Complete the function secretCipher() which takes the message string S as input parameter and returns the shortest possible encrypted string.

Expected Time Complexity: $O(N)$
Expected Auxiliary Space: $O(N)$

## Constraints

- `1 ≤ |S| ≤ 105`

## Problem Explanation

Here's the step-by-step breakdown of the Scrambled String process:

**Step 1 :** A scrambled string is defined based on recursive partitioning and swapping of substrings. Here’s a more detailed explanation:

**Step 2 :** Binary Tree Representation:Given a string str, you can represent it as a binary tree by recursively partitioning it into two non-empty substrings.
**Step 3 :** For example, for the string "coder": You can split it into "co" and "der".
Each of these can be further split recursively, forming a binary tree structure.
**Step 4 :**Scrambling: A string S2 is a scrambled form of string S1 if S2 can be obtained by swapping the left and right children of some non-leaf nodes in the binary tree representation of S1.
For instance, "coder" can be scrambled to "ocder" by swapping "co" and "der", then further scrambling "co" to "oc".

### Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```python
class Solution:
    def unique_everseen(self, iterable):
        seen = set(" ")
        for element in filterfalse(seen.__contains__, iterable):
            seen.add(element)
            yield element

    def decodeMessage(self, key: str, message: str) -> str:
        key_uniq = list(self.unique_everseen(key))
        d = dict(zip(key_uniq, ascii_lowercase)) | {" ": " "}
        return "".join(map(d.__getitem__, message))

  ```
  </TabItem>

  <TabItem value="C++" label="C++" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```cpp
#pragma GCC optimize("O3,unroll-loops")
#pragma GCC target("avx2,bmi,bmi2,lzcnt,popcnt")
#define ll long long
class Solution {
public:
    string decodeMessage(string key, string message) {
        ios_base::sync_with_stdio(false);
        cin.tie(NULL);
        cout.tie(NULL);

        string result = "";
        int i, j;

        unordered_map<char, char> keyword;
        // Keeping Track
        for (i = 0, j = 97; i < key.size() && j < 123; i++) {
            if (key[i] != ' ' && (keyword.find(key[i]) == keyword.end())) {
                keyword[key[i]] = char(j);
                j++;
            }
        }

        // Decoding:
        for (i = 0; i < message.length(); i++) {
            if (message[i] == ' ') {
                result.push_back(' ');
            } else {
                result.push_back(keyword[message[i]]);
            }
        }
        return result;
    }
};
  ```
  </TabItem>
</Tabs>

## Solution Logic

**Define the unique_everseen Method:** This method generates a sequence of unique elements from an iterable, preserving the order of their first occurrence.
It uses a set to track seen elements and a generator to yield elements that have not been seen before.
**Implement the decodeMessage Method:** This method decodes a message using the key to define a substitution cipher.
- It utilizes the unique_everseen method to extract unique characters from the key.
- It creates a mapping from these unique characters to the lowercase alphabet.
- It decodes the message using this mapping and returns the decoded message as a string.

## Time Complexity

$O(N)$

## Space Complexity

$O(N)$

## Resources

- **GFG Problem:** [GFG Problem](https://www.geeksforgeeks.org/problems/secret-cipher--141631/0)
- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/decode-the-message/description/)
- **Author's Geeks for Geeks Profile:**  | [DaminiChachane](https://leetcode.com/u/divcxl15/) |

This format ensures that all necessary details about the problem and its solution are clearly presented and easy to follow.
