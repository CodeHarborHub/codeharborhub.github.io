---
id: maximize-the-confusion-of-an-exam
title: Maximize the Confusion of an Exam
sidebar_label: 2024 Maximize the Confusion of an Exam
tags:
  - String
  - Sliding Window
  - LeetCode
  - C++
description: "This is a solution to the Maximize the Confusion of an Exam problem on LeetCode."
sidebar_position: 2024
---

## Problem Description

A teacher is writing a test with `n` true/false questions, with `'T'` denoting true and `'F'` denoting false. He wants to confuse the students by maximizing the number of consecutive questions with the same answer (multiple trues or multiple falses in a row).

You are given a string `answerKey`, where `answerKey[i]` is the original answer to the ith question. In addition, you are given an integer `k`, the maximum number of times you may perform the following operation:

Change the answer key for any question to `'T'` or `'F'`.

Return the maximum number of consecutive `'T'`s or `'F'`s in the answer key after performing the operation at most `k` times.

### Examples

**Example 1:**

```
Input: answerKey = "TTFF", k = 2
Output: 4
Explanation: We can replace both the 'F's with 'T's to make answerKey = "TTTT".
There are four consecutive 'T's.

```

**Example 2:**

```
Input: answerKey = "TFFT", k = 1
Output: 3
Explanation: We can replace the first 'T' with an 'F' to make answerKey = "FFFT".
Alternatively, we can replace the second 'T' with an 'F' to make answerKey = "TFFF".
In both cases, there are three consecutive 'F's.

```

**Example 3:**

```
Input: answerKey = "TTFTTFTT", k = 1
Output: 5
Explanation: We can replace the first 'F' to make answerKey = "TTTTTFTT"
Alternatively, we can replace the second 'F' to make answerKey = "TTFTTTTT".
In both cases, there are five consecutive 'T's.
```


### Constraints

- `n == answerKey.length`
- `1 <= n <= 5 * 10^4`
- `answerKey[i]` is either `'T'` or `'F'`
- `1 <= k <= n`

### Approach

To solve this problem, we can use a sliding window approach. We'll maintain two sliding windows, one for counting the maximum consecutive `'T'`s after converting up to `k` `'F'`s to `'T'`, and another for counting the maximum consecutive `'F'`s after converting up to `k` `'T'`s to `'F'`. The maximum of these two results will be our answer.

### Complexity

- **Time complexity**: $O(n)$, where `n` is the length of `answerKey`. This is because we traverse the string a constant number of times.
- **Space complexity**: $O(1)$, as we use only a few extra variables.

#### C++

```cpp
class Solution {
public:
    int maxW(string list, int n, char c, int k) {
        int ans = 0;
        int flip = 0, l = 0;
        for (int r = 0; r < n; r++) {
            flip += (list[r] != c);
            if (flip > k) {
                while (list[l] == c)
                    l++;
                l++;
                flip--;
            }
            ans = max(ans, r - l + 1);
        }
        return ans;
    }

    int maxConsecutiveAnswers(string answerKey, int k) {
        int n = answerKey.size();
        return max(maxW(answerKey, n, 'T', k), maxW(answerKey, n, 'F', k));
    }
};
```

#### Python

```python
class Solution:
    def maxConsecutiveAnswers(self, answerKey: str, k: int) -> int:
        n=len(answerKey)
        
        # Define a helper function maxW that calculates the maximum number of consecutive
        # answers for a given character c ('T' or 'F')
        def maxW(c):
            ans=0
            flip=0
            l=0
            for r in range(n):
                if answerKey[r]!=c:  # If the current answer is not equal to c, increment flip
                    flip+=1
                if flip>k:  # If flip exceeds k, adjust the window by moving l
                    while answerKey[l]==c:  # Skip all consecutive occurrences of c
                        l+=1
                    l+=1  # Move l to the next position after skipping
                    flip-=1  # Decrement flip since we have adjusted the window
                ans=max(ans, r-l+1)  # Update ans with the maximum consecutive count
            return ans
        
        # Return the maximum of maxW('T') and maxW('F') as the result
        return max(maxW('T'), maxW('F'))
```