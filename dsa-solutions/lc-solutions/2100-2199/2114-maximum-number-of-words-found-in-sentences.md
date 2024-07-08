---
id: maximum-number-of-words-found-in-sentences
title: Maximum Number of Words Found in Sentences
sidebar_label: 2114-Maximum Number of Words Found in Sentences
  - Array
  - String
description: "This is a solution to the maximum number of words found in sentences in leetcode"
---

## Problem Description

A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
You are given an array of strings sentences, where each sentences[i] represents a single sentence.
Return the maximum number of words that appear in a single sentence.
 

### Examples

**Example 1:**

```
Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
Output: 6
Explanation: 
- The first sentence, "alice and bob love leetcode", has 5 words in total.
- The second sentence, "i think so too", has 4 words in total.
- The third sentence, "this is great thanks very much", has 6 words in total.
Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.

```
**Example 2:**
```
Input: sentences = ["please wait", "continue to fight", "continue to win"]
Output: 3
Explanation: It is possible that multiple sentences contain the same number of words. 
In this example, the second and third sentences (underlined) have the same number of words.
 

 ```
## Complexity Analysis

*** Time Complexity:** $O(n*m)$

*** Space Complexity:** $O(1)$

### Constraints

- `1 <= sentences.length <= 100`
- `1 <= sentences[i].length <= 10`
- 

### Solution
## Approach
The approach for solving the problem of finding the sentence with the most words involves the following steps:
1. Initialize a Maximum Word Count Variable: Start by initializing a variable (maxWords) to keep track of the maximum number of words found in any sentence. Set it initially to 0.

2. Iterate Through Each Sentence: Loop through each sentence in the provided list of sentences.

3. Split Each Sentence into Words: For each sentence, split it into words. This can be done using a space (' ') as the delimiter.

4. Count the Number of Words: Count the number of words in the current sentence by finding the length of the resulting list of words.

5. Update the Maximum Word Count: Compare the word count of the current sentence with the current maximum word count. If the current sentence has more words, update the maxWords variable.

6. Return the Maximum Word Count: After iterating through all the sentences, return the value of maxWords, which now holds the maximum number of words found in any sentence.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@ImmidiSivani"/>

```cpp
#include <iostream>
#include <vector>
#include <sstream>
#include <algorithm>

class Solution {
public:
    int mostWordsFound(std::vector<std::string>& sentences) {
        int maxWords = 0;
        for (const std::string& sentence : sentences) {
            int wordCount = std::count(sentence.begin(), sentence.end(), ' ') + 1;
            maxWords = std::max(maxWords, wordCount);
        }
        return maxWords;
    }
};

```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public int mostWordsFound(String[] sentences) {
        //int n=sentences.length;
        //int[] a=new int[n];
        int max=0;
        for(String ch:sentences){
            String[] a=ch.split(" ");
            max=Math.max(max,a.length);
       
    
    }
    return max;
}
}
```
</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def most_words_found(self, sentences):
        max_words = 0
        for sentence in sentences:
            word_count = len(sentence.split())
            max_words = max(max_words, word_count)
        return max_words


```
</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Maximum Number of Words Found in Sentences](https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/description/)

- **Solution Link**: [Maximum Number of Words Found in Sentences](https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/post-solution/?submissionId=1230077072)
