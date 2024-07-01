---
id: truncate-sentence
title: Truncate Sentence
sidebar_label: 1816-Truncate-Sentence
tags:
- String
- Easy
description: "Given a sentence and a number k, truncate the sentence to the first k words."
---

## Problem

You are given a sentence `s` and an integer `k`. You need to truncate the sentence such that it contains only the first `k` words. A word is defined as a substring consisting of non-space characters only.

### Examples

**Example 1:**

**Input:** `s = "Hello how are you Contestant", k = 4`  
**Output:** `"Hello how are you"`

**Example 2:**

**Input:** `s = "What is the solution to this problem", k = 4`  
**Output:** `"What is the solution"`

**Example 3:**

**Input:** `s = "chopper is not a tanuki", k = 5`  
**Output:** `"chopper is not a tanuki"`

### Constraints

- `1 <= s.length <= 500`
- `k` is in the range `[1, the number of words in s]`
- `s` consists of only lowercase and uppercase English letters and spaces.
- The words in `s` are separated by a single space.
- There are no leading or trailing spaces.

---

## Approach

To solve this problem, we can follow a straightforward approach:

1. Split the sentence `s` into a list of words.
2. Extract the first `k` words from this list.
3. Join these `k` words back into a string with spaces.

### Solution

#### Python

```python
class Solution:
    def truncateSentence(self, s: str, k: int) -> str:
        # Split the sentence into words
        words = s.split()
        # Get the first k words
        truncated_words = words[:k]
        # Join the first k words into a string
        truncated_sentence = " ".join(truncated_words)
        return truncated_sentence
```

### Explanation

1. **Split the sentence**: We use the `split()` method to split the sentence into a list of words.
2. **Extract first `k` words**: We use list slicing `[:k]` to get the first `k` words.
3. **Join the words**: We use the `join()` method to join the first `k` words into a single string separated by spaces.

### Complexity Analysis

**Time Complexity:** O(n)  
> Reason: Splitting the sentence and joining the words both take linear time, where `n` is the length of the sentence.

**Space Complexity:** O(n)  
> Reason: We store the words of the sentence in a list and then the truncated sentence, both of which take linear space relative to the input size.

### References
**LeetCode Problem:** Truncate Sentence
