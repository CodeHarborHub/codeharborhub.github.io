---
id: word-frequency
title: Word Frequency
sidebar_label: 0192 Word Frequency
tags:
  - Leetcode
  - Bash
  
description: "This is a solution to the Word Frequency problem."
---

## Problem Description

Write a bash script to calculate the frequency of each word in a text file words.txt.

For simplicity sake, you may assume:

words.txt contains only lowercase characters and space ' ' characters.
Each word must consist of lowercase characters only.
Words are separated by one or more whitespace characters.

### Examples

**Example 1:**

```
Assume that words.txt has the following content:

the day is sunny the the
the sunny is is

Your script should output the following, sorted by descending frequency:

the 4
is 3
sunny 2
day 1

```


### Constraints

- The input text file `words.txt` contains only lowercase characters and spaces.
- Words are separated by one or more whitespace characters.

## Solution for Word Frequency Problem

### Intuition And Approach

To solve this problem using Unix tools, we can leverage a series of commands piped together to process the text file. The approach includes:

1. Replacing spaces with newlines to handle word separation.
2. Sorting the words to prepare for counting duplicates.
3. Using `uniq` to count the occurrences of each word.
4. Sorting the counts in descending order.
5. Formatting the output to display word frequency.

#### Code

<Tabs>
  <TabItem value="bash" label="bash">
  <SolutionAuthor name="@mahek0620"/>
   ```bash
tr -s ' ' '\n' < words.txt | sort | uniq -c | sort -nr | awk '{print $2, $1}'
    ```
  </TabItem>
</Tabs>



## References

- **LeetCode Problem:** [Word frequency Problem](https://leetcode.com/problems/word-frequency/)
- **Solution Link:** [Word-Frequency Solution on LeetCode](https://leetcode.com/problems/word-frequency/solutions/5273312/word-frequency-solution)
- **Authors GeeksforGeeks Profile:** [Mahek Patel](https://leetcode.com/u/mahekrpatel611/)
