---
id: Sender-With-Largest-Word-Count
title: Sender With Largest Word Count
sidebar_label: 2284-Sender With Largest Word Count
tags: 
  - Strings
  - Brute Force
  - Optimized approach
  - LeetCode
  - Python
  - Java
  - C++

description: "This is a solution to Sender With Largest Word Count problem on LeetCode."
sidebar_position: 85
---

## Problem Statement 
In this tutorial, we will solve the Sender With Largest Word Count problem. We will provide the implementation of the solution in Python, Java, and C++.

### Problem Description

You have a chat log of n messages. You are given two string arrays messages and senders where messages[i] is a message sent by senders[i].

A message is list of words that are separated by a single space with no leading or trailing spaces. The word count of a sender is the total number of words sent by the sender. Note that a sender may send more than one message.

Return the sender with the largest word count. If there is more than one sender with the largest word count, return the one with the lexicographically largest name.

### Examples

**Example 1:**
Input: messages = ["Hello userTwooo", "Hi userThree", "Wonderful day Alice", "Nice day userThree"], senders = ["Alice", "userTwo", "userThree", "Alice"]
Output: "Alice"
Explanation: Alice sends a total of 2 + 3 = 5 words.
userTwo sends a total of 2 words.
userThree sends a total of 3 words.
Since Alice has the largest word count, we return "Alice".
**Example 2:**
Input: messages = ["How is leetcode for everyone","Leetcode is useful for practice"], senders = ["Bob","Charlie"]
Output: "Charlie"
Explanation: Bob sends a total of 5 words.
Charlie sends a total of 5 words.
Since there is a tie for the largest word count, we return the sender with the lexicographically larger name, Charlie.
 
### Constraints
- `n == messages.length == senders.length`
- `1 <= n <= 104`
- `1 <= messages[i].length <= 100`
- `1 <= senders[i].length <= 10`
- `messages[i] consists of uppercase and lowercase English letters and ' '.`
- `All the words in messages[i] are separated by a single space.`
- `messages[i] does not have leading or trailing spaces.`
- `senders[i] consists of uppercase and lowercase English letters only.`
## Solution of Given Problem

### Intuition and Approach

The problem can be solved using a brute force approach or an optimized Technique.

## Approach 1:Brute Force (Naive)

Count Words for Each Sender:

Iterate through the messages array.
For each message, count the number of words and add this count to the corresponding sender's total in a dictionary.
Determine the Sender with the Largest Word Count:

Traverse the dictionary to find the sender with the maximum word count. In case of a tie, choose the sender with the lexicographically larger name.
#### Codes in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <iostream>
#include <vector>
#include <unordered_map>
#include <sstream>
#include <algorithm>

std::string largestWordCount(std::vector<std::string>& messages, std::vector<std::string>& senders) {
    std::unordered_map<std::string, int> wordCount;

    for (int i = 0; i < messages.size(); i++) {
        std::istringstream iss(messages[i]);
        int count = 0;
        std::string word;
        while (iss >> word) count++;
        wordCount[senders[i]] += count;
    }

    std::string result;
    int maxCount = 0;

    for (const auto& entry : wordCount) {
        if (entry.second > maxCount || (entry.second == maxCount && entry.first > result)) {
            maxCount = entry.second;
            result = entry.first;
        }
    }

    return result;
}

```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
import java.util.*;

public class Solution {
    public String largestWordCount(String[] messages, String[] senders) {
        Map<String, Integer> wordCount = new HashMap<>();

        for (int i = 0; i < messages.length; i++) {
            int count = messages[i].split(" ").length;
            wordCount.put(senders[i], wordCount.getOrDefault(senders[i], 0) + count);
        }

        String result = "";
        int maxCount = 0;

        for (Map.Entry<String, Integer> entry : wordCount.entrySet()) {
            if (entry.getValue() > maxCount || (entry.getValue() == maxCount && entry.getKey().compareTo(result) > 0)) {
                maxCount = entry.getValue();
                result = entry.getKey();
            }
        }

        return result;
    }
}



```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
from collections import defaultdict

def largest_word_count(messages, senders):
    word_count = defaultdict(int)

    for i in range(len(messages)):
        count = len(messages[i].split())
        word_count[senders[i]] += count

    max_count = 0
    result = ""

    for sender, count in word_count.items():
        if count > max_count or (count == max_count and sender > result):
            max_count = count
            result = sender

    return result

```

</TabItem>
</Tabs>


### Complexity Analysis

- Time Complexity: $O(n+k)$
-   where n is the number of messages and k is the number of unique senders.
- Space Complexity: $O(k)$
-  for storing word counts of senders.

## Approach 2: Optimized approach

Optimized Approach: Word Count Calculation:
For each message, split the message string and count the words. This step is O(1) in complexity since the maximum length of a message is fixed.
Tracking Maximum Word Count and Sender:
Keep track of the maximum word count and the sender with that count directly while iterating through the dictionary. This avoids the need for a separate loop to find the maximum.

#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <iostream>
#include <vector>
#include <unordered_map>
#include <sstream>
#include <algorithm>

std::string largestWordCount(std::vector<std::string>& messages, std::vector<std::string>& senders) {
    std::unordered_map<std::string, int> wordCount;
    std::string result;
    int maxCount = 0;

    for (int i = 0; i < messages.size(); i++) {
        int count = std::count(messages[i].begin(), messages[i].end(), ' ') + 1;
        wordCount[senders[i]] += count;

        if (wordCount[senders[i]] > maxCount || (wordCount[senders[i]] == maxCount && senders[i] > result)) {
            maxCount = wordCount[senders[i]];
            result = senders[i];
        }
    }

    return result;
}




```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
import java.util.*;

public class Solution {
    public String largestWordCount(String[] messages, String[] senders) {
        Map<String, Integer> wordCount = new HashMap<>();
        String result = "";
        int maxCount = 0;

        for (int i = 0; i < messages.length; i++) {
            int count = messages[i].split(" ").length;
            wordCount.put(senders[i], wordCount.getOrDefault(senders[i], 0) + count);

            if (wordCount.get(senders[i]) > maxCount || 
                (wordCount.get(senders[i]) == maxCount && senders[i].compareTo(result) > 0)) {
                maxCount = wordCount.get(senders[i]);
                result = senders[i];
            }
        }

        return result;
    }
}

```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
from collections import defaultdict

def largest_word_count(messages, senders):
    word_count = defaultdict(int)
    max_count = 0
    result = ""

    for message, sender in zip(messages, senders):
        count = len(message.split())
        word_count[sender] += count

        if word_count[sender] > max_count or (word_count[sender] == max_count and sender > result):
            max_count = word_count[sender]
            result = sender

    return result


```

</TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(n+k)$

- Space Complexity: $O(k)$

- This approach is efficient and straightforward.

## Video Explanation of Given Problem

<Tabs>
  <TabItem value="en" label="English">
    <Tabs>
      <TabItem value="c++" label="C++">
        <LiteYouTubeEmbed
          id="aH2bWWV_KVk?si=TKIN3grMJsQy8Ujw"
          params="autoplay=1&autohide=1&showinfo=0&rel=0"
          title="Problem Explanation | Solution | Approach"
          poster="maxresdefault"
          webp 
        />
      </TabItem>
      <TabItem value="java" label="Java">
        <LiteYouTubeEmbed
          id="GYZNCUVQOJo?si=skYtdNag51nGkKjs"
          params="autoplay=1&autohide=1&showinfo=0&rel=0"
          title="Problem Explanation | Solution | Approach"
          poster="maxresdefault"
          webp 
        />
      </TabItem>
      <TabItem value="python" label="Python">
        <LiteYouTubeEmbed
          id="h5-nuBDpHjI?si=RTRLPTqsLUcyB-yL"
          params="autoplay=1&autohide=1&showinfo=0&rel=0"
          title="Problem Explanation | Solution | Approach"
          poster="maxresdefault"
          webp 
        />
      </TabItem>
    </Tabs>
  </TabItem>
</Tabs>


---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['AmruthaPariprolu'].map(username => (
 <Author key={username} username={username} />
))}
</div>
