---
id: minimum-substring-partition-of-equal-charater-frequency
title: Minimum-substring-partition-of-equal-charater-frequency (LeetCode)
sidebar_label: 3144-minimum-substring-partition-of-equal-charater-frequency
tags:
  - Dynamic Programming
  - Geometry
  - Sorting
  - Sliding Window
description: this discription is for the solution of minimum-substring-partition-of-equal-charater-frequency
sidebar_position: 3144
---

## Problem Satement

Given a string s, you need to partition it into one or more balanced
substrings
Substring
A substring is a contiguous sequence of characters within a string.

. For example, if `s == "ababcc"` then `("abab", "c", "c")`, `("ab", "abc", "c")`, and `("ababcc")` are all valid partitions, but `("a", "bab", "cc")`, `("aba", "bc", "c")`, and `("ab", "abcc")` are not. The unbalanced substrings are bolded.

Return the minimum number of substrings that you can partition s into.

Note: A balanced string is a string where each character in the string occurs the same number of times.

**Example 1:**

Input: s = "fabccddg"
Output: 3

Explanation:
We can partition the string s into 3 substrings in one of the following ways: ("fab, "ccdd", "g"), or ("fabc", "cd", "dg").

**Example 2:**

Input: s = "abababaccddb"
Output: 2

Explanation:
We can partition the string s into 2 substrings like so: ("abab", "abaccddb").

**Constraints:**

    - `1 <= s.length <= 1000`
    - `s consists only of English lowercase letters.`

## Solutions:

### Intuition

The problem requires partitioning a string such that each substring is balanced. A substring is balanced if each character appears with the same frequency within that substring. The challenge is to minimize the number of these substrings. This problem can be addressed by understanding the distribution of character frequencies and leveraging dynamic programming to minimize partitions while ensuring that each segment conforms to the balanced condition.

### Approach

         - **Character Frequency Calculation:**
              - Calculate the maximum frequency for each character in the entire string. This will help determine if a substring can potentially be balanced, as every character in a balanced substring must appear at least as many times as its maximum frequency across the string.

         - **Dynamic Programming Initialization:**
              - Use a DP array dp where dp[i] represents the minimum number of partitions needed for the first i characters of the string. Initialize dp[0] to 0 because no partitions are needed for an empty string.

        - **Sliding Window for Substrings:**
             - For each position i in the string, consider every possible substring ending at i and starting from any j (where j ranges from 1 to i). This forms a sliding window from j to i.

            - For each window, maintain a frequency count of characters and determine the maximum frequency in the current window.

        - **Validation and DP Update:**
             - Validate each window by checking if all characters that appear have the frequency equal to the maximum frequency observed in that window. If the substring formed by the window is balanced, then update dp[i] to be the minimum of its current value or dp[j-1] + 1.

             - This ensures that dp[i] reflects the minimum partitions up to i including possibly ending a new balanced substring at i.

        - **Result Extraction:**
             - After processing all characters, dp[length of string] contains the minimum number of partitions for the entire string.

## code:

<Tabs>
    <TabItem value="cpp" label="C++" default>
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```cpp
            public:
            int minimumSubstringsInPartition(string s) {
                vector<int> maxFrequency(26, 0);
                for (char ch : s) {
                    maxFrequency[ch - 'a']++;
                }

                vector<int> dp(s.length() + 1, INT_MAX);
                dp[0] = 0; // Base case: no characters, no partitions needed

                for (int i = 1; i <= s.length(); i++) {
                    vector<int> freq(26, 0);
                    int maxInWindow = 0;

                    for (int j = i; j > 0; j--) {
                        int index = s[j - 1] - 'a';
                        freq[index]++;
                        maxInWindow = max(maxInWindow, freq[index]);

                        bool valid = true;
                        for (int k = 0; k < 26; k++) {
                            if (freq[k] > 0 && freq[k] < maxInWindow) {
                                valid = false;
                                break;
                            }
                        }

                        if (valid) {
                            dp[i] = min(dp[i], dp[j - 1] + 1);
                        }
                    }
                }
                return dp[s.length()];
            }
    ```
    </TabItem>
    <TabItem value="java" label="Java">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```java
          public int minimumSubstringsInPartition(String s) {
        // Initialize an array to store the maximum frequency of each character
        int[] maxFrequency = new int[26]; // Array to hold maximum frequency of each character 'a' to 'z'
        for (int i = 0; i < s.length(); i++) {
            maxFrequency[s.charAt(i) - 'a']++; // Increment frequency of character at position i
        }

        // dp[i] represents the minimum number of partitions needed for the first i characters
        int[] dp = new int[s.length() + 1]; // Array to hold the minimum partitions needed for each prefix of s
        dp[0] = 0; // Base case: no characters, no partitions needed

        for (int i = 1; i <= s.length(); i++) {
            dp[i] = Integer.MAX_VALUE; // Initialize dp[i] with a large number
            int[] freq = new int[26]; // Array to keep track of character frequencies in the current window
            int maxInWindow = 0; // Variable to store the maximum frequency in the current window

            // Check all substrings that end at position i
            for (int j = i; j > 0; j--) {
                char c = s.charAt(j - 1); // Get character in the string at position j-1
                freq[c - 'a']++; // Increment frequency of that character in the current window
                maxInWindow = Math.max(maxInWindow, freq[c - 'a']); // Update maxInWindow if current frequency is higher

                // Check if the current window can form a balanced substring
                boolean isValid = true; // Flag to check if the window is valid
                for (int k = 0; k < 26; k++) {
                    if (freq[k] > 0 && freq[k] < maxInWindow) {
                        isValid = false; // Set valid to false if any character frequency is less than maxInWindow
                        break; // Exit the loop as the substring is not valid
                    }
                }

                if (isValid) { // If the window is valid
                    dp[i] = Math.min(dp[i], dp[j - 1] + 1); // Update dp[i] with the minimum partitions found
                }
            }
        }
        return dp[s.length()]; // Return the minimum number of partitions for the entire string
    }
    ```
    </TabItem>
    <TabItem value="python" label="Python">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```python
          def minimumSubstringsInPartition(self, s):
        # Initialize an array to store the maximum frequency of each character
        max_frequency = [0] * 26
        for char in s:
            max_frequency[ord(char) - ord('a')] += 1

        # dp[i] represents the minimum number of partitions needed for the first i characters
        dp = [float('inf')] * (len(s) + 1)
        dp[0] = 0  # Base case: no characters, no partitions needed

        for i in range(1, len(s) + 1):
            freq = [0] * 26
            max_in_window = 0

            # Check all substrings that end at position i
            for j in range(i, 0, -1):
                index = ord(s[j - 1]) - ord('a')
                freq[index] += 1
                max_in_window = max(max_in_window, freq[index])

                # Check if the current window can form a balanced substring
                valid = True
                for k in range(26):
                    if freq[k] > 0 and freq[k] < max_in_window:
                        valid = False
                        break

                if valid:
                    dp[i] = min(dp[i], dp[j - 1] + 1)

        return dp[len(s)]
      ```
    </TabItem>
    <TabItem value="c" label="C">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```c
            int minimumSubstringsInPartition(char* s) {
            int len = strlen(s);
            int maxFrequency[26] = {0}, dp[len + 1], freq[26], i, j, k, maxInWindow;
            for (i = 0; s[i]; i++) {
                maxFrequency[s[i] - 'a']++;
            }

            dp[0] = 0;  // Base case
            for (i = 1; i <= len; i++) {
                dp[i] = INT_MAX;
                memset(freq, 0, sizeof(freq));
                maxInWindow = 0;

                for (j = i; j > 0; j--) {
                    char c = s[j - 1];
                    freq[c - 'a']++;
                    if (freq[c - 'a'] > maxInWindow) maxInWindow = freq[c - 'a'];

                    int valid = 1;
                    for (k = 0; k < 26; k++) {
                        if (freq[k] > 0 && freq[k] < maxInWindow) {
                            valid = 0;
                            break;
                        }
                    }

                    if (valid) {
                        if (dp[j - 1] + 1 < dp[i]) dp[i] = dp[j - 1] + 1;
                    }
                }
            }

            return dp[len];

        }
     ```

</TabItem>

</Tabs>

## Complexity

**Time complexity:** $O(n^3)$ - The solution involves three nested loops: The outermost loop runs for each character i in the string. For each i, the middle loop considers every possible starting point j for substrings ending at i, and the innermost loop iterates through all 26 characters to ensure the substring from j to i is balanced.

    -This results in a time complexity proportional to `n^2` multiplied by a constant factor (26), simplifying to $O(n^3)$.

**Space complexity:** $O(n + 26)$

      - $O(n)$ for the dynamic programming array dp which stores the minimum partitions for each substring ending at each position.

      - $O(26)$ (constant space) for the frequency array used in each sliding window to keep track of character counts. This part is constant since the number of characters (English lowercase letters) does not scale with n.

This algorithm efficiently handles smaller strings and provides a clear method to determine minimal partitions, but it might be computationally intensive for very large strings due to its cubic time complexity.
