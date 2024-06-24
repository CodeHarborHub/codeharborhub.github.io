---
id: longest-substring-with-atleast-k-repeating-characters
title: Longest Substring With Atleast K Repeating Characters
sidebar_label: 0395-Longest Substring With Atleast K Repeating Characters
tags:
  - Leet code
description: "Solution to leetocde 395"
---

### Problem Description

Given a string s and an integer k, return the length of the longest substring of s such that the frequency of each character in this substring is greater than or equal to k.

if no such substring exists, return 0.

### Examples

Example 1:

```
Input: s = "aaabb", k = 3
Output: 3
Explanation: The longest substring is "aaa", as 'a' is repeated 3 times.
```

Example 2:

```
Input: s = "ababbc", k = 2
Output: 5
Explanation: The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.
```

### Constraints:

- $1 <= s.length <= 10^4$
- $s consists of only lowercase English letters.$
- $1 <= k <= 10^5$

### Algorithm

1. **Initialize:**

   - `ans`: stores the current maximum length of a valid substring
   - `freq`: frequency array to store character counts (size 26 for lowercase letters)
   - `n`: length of the string `s`

2. **Count Character Frequencies:**

   - Iterate through `s` and update `freq[i]` for each character `s[i]`.

3. **Iterate Over Unique Character Counts:**

   - Use a loop for `curr_unique` from 1 to the total number of unique characters (`unique`) found in step 2.

4. **Reset for Each Unique Character Count:**

   - Reset `freq` array to 0 using `memset` (C/C++) or loop assignment (other languages).
   - Initialize `start`, `end`, `cnt` (number of unique characters in the window), and `count_k` (number of characters with at least `k` repetitions) to 0.

5. **Sliding Window Technique:**

   - Use a `while` loop until `end` reaches the end of the string `s`:
     - **Expand Window:**
       - If `cnt` is less than `curr_unique`:
         - Increment `freq` for the character at `end`.
         - If the character is a new unique character (frequency becomes 1), increment `cnt`.
         - If the character's frequency becomes `k`, increment `count_k`.
         - Increment `end`.
     - **Shrink Window:**
       - If `cnt` is equal to `curr_unique`:
         - Decrement `freq` for the character at `start`.
         - If the character's frequency becomes `k-1`, decrement `count_k`.
         - If the character's frequency becomes 0, decrement `cnt`.
         - Increment `start`.

6. **Update Maximum Length:**

   - If `cnt` is equal to `curr_unique` and `count_k` is also equal to `curr_unique` (all characters in the window have at least `k` repetitions), update `ans` with the maximum of the current length (`end - start`).

7. **Return Maximum Length:**
   - Return the final value of `ans`, which represents the length of the longest valid substring.

## Code Implementations:

**Python:**

```python
def longestSubstring(s: str, k: int) -> int:
  ans = 0
  freq = [0] * 26

  n = len(s)

  for i in range(n):
    freq[ord(s[i]) - ord('a')] += 1

  unique = sum(1 for count in freq if count > 0)

  for curr_unique in range(1, unique + 1):
    memset(freq, 0, sizeof(freq))  # Replace with loop assignment for Python
    start = end = cnt = count_k = 0

    while end < n:
      if cnt <= curr_unique:
        ind = ord(s[end]) - ord('a')
        if freq[ind] == 0:
          cnt += 1
        freq[ind] += 1
        if freq[ind] == k:
          count_k += 1
        end += 1
      else:
        ind = ord(s[start]) - ord('a')
        if freq[ind] == k:
          count_k -= 1
        freq[ind] -= 1
        if freq[ind] == 0:
          cnt -= 1
        start += 1

      if cnt == curr_unique and count_k == curr_unique:
        ans = max(ans, end - start)

  return ans
```

**C++:**

```c++
#include <vector>

int longestSubstring(std::string s, int k) {
    int ans = 0;
    std::vector<int> freq(26, 0);
    int n = s.size();

    // Count character frequencies
    for (char c : s) {
        freq[c - 'a']++;
    }

    // Find the number of unique characters
    int unique = 0;
    for (int count : freq) {
        if (count > 0) {
            unique++;
        }
    }

    // Iterate over window sizes (1 to the number of unique characters)
    for (int curr_unique = 1; curr_unique <= unique; curr_unique++) {
        std::fill(freq.begin(), freq.end(), 0); // Reset frequencies for each window size

        int start = 0, end = 0, cnt = 0, count_k = 0;

        // Use a sliding window approach
        while (end < n) {
            if (cnt <= curr_unique) {
                int ind = s[end] - 'a';

                // Expand window
                if (freq[ind] == 0) {
                    cnt++;
                }
                freq[ind]++;
                if (freq[ind] == k) {
                    count_k++;
                }
                end++;
            } else {
                int ind = s[start] - 'a';

                // Shrink window
                if (freq[ind] == k) {
                    count_k--;
                }
                freq[ind]--;
                if (freq[ind] == 0) {
                    cnt--;
                }
                start++;
            }

            // Check for valid window
            if (cnt == curr_unique && count_k == curr_unique) {
                ans = max(ans, end - start);
            }
        }
    }

    return ans;
}
```

**Java:**

```java
public class Solution {
    public int longestSubstring(String s, int k) {
        int ans = 0;
        int[] freq = new int[26];
        int n = s.length();

        // Count character frequencies
        for (char c : s.toCharArray()) {
            freq[c - 'a']++;
        }

        // Find the number of unique characters
        int unique = 0;
        for (int count : freq) {
            if (count > 0) {
                unique++;
            }
        }

        // Iterate over window sizes (1 to the number of unique characters)
        for (int curr_unique = 1; curr_unique <= unique; curr_unique++) {
            Arrays.fill(freq, 0); // Reset frequencies for each window size

            int start = 0, end = 0, cnt = 0, count_k = 0;

            // Use a sliding window approach
            while (end < n) {
                if (cnt <= curr_unique) {
                    int ind = s.charAt(end) - 'a';

                    // Expand window
                    if (freq[ind] == 0) {
                        cnt++;
                    }
                    freq[ind]++;
                    if (freq[ind] == k) {
                        count_k++;
                    }
                    end++;
                } else {
                    int ind = s.charAt(start) - 'a';

                    // Shrink window
                    if (freq[ind] == k) {
                        count_k--;
                    }
                    freq[ind]--;
                    if (freq[ind] == 0) {
                        cnt--;
                    }
                    start++;
                }

                // Check for valid window
                if (cnt == curr_unique && count_k == curr_unique) {
                    ans = Math.max(ans, end - start);
                }
            }
        }

        return ans;
    }
}

```

**JavaScript:**

```javascript
function longestSubstring(s, k) {
  let ans = 0;
  const freq = new Array(26).fill(0);
  const n = s.length;

  // Count character frequencies
  for (const char of s) {
    freq[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  // Find the number of unique characters
  let unique = 0;
  for (const count of freq) {
    if (count > 0) {
      unique++;
    }
  }

  // Iterate over window sizes (1 to the number of unique characters)
  for (let curr_unique = 1; curr_unique <= unique; curr_unique++) {
    freq.fill(0); // Reset frequencies for each window size

    let start = 0,
      end = 0,
      cnt = 0,
      count_k = 0;

    // Use a sliding window approach
    while (end < n) {
      if (cnt <= curr_unique) {
        const ind = s.charCodeAt(end) - "a".charCodeAt(0);

        // Expand window
        if (freq[ind] === 0) {
          cnt++;
        }
        freq[ind]++;
        if (freq[ind] === k) {
          count_k++;
        }
        end++;
      } else {
        const ind = s.charCodeAt(start) - "a".charCodeAt(0);

        // Shrink window
        if (freq[ind] === k) {
          count_k--;
        }
        freq[ind]--;
        if (freq[ind] === 0) {
          cnt--;
        }
        start++;
      }

      // Check for valid window
      if (cnt === curr_unique && count_k === curr_unique) {
        ans = Math.max(ans, end - start);
      }
    }
  }

  return ans;
}
```
