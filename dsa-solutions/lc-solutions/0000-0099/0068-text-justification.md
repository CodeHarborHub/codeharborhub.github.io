---
id: text-justification
title: Text Justification (LeetCode)
sidebar_label: 0068-TextJustification
topics:
 - String
 - Greedy
description: Solution to Leetcode 68 Text Justification
---

## Problem Description

Given an array of strings `words` and a width `maxWidth`, format the text such that each line has exactly `maxWidth` characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces `' '` when necessary so that each line has exactly `maxWidth` characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left-justified, and no extra space is inserted between words.

:::note
- A word is defined as a character sequence consisting of non-space characters only.
- Each word's length is guaranteed to be greater than 0 and not exceed `maxWidth`.
- The input array `words` contains at least one word.
:::

### Examples

**Example 1:**

```
Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
```

**Example 2:**

```
Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
Note that the second line is also left-justified because it contains only one word.
```

**Example 3:**

```
Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
Output:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]
```

### Constraints

- 1 &lt; = words.length &lt; = 300
- 1 &lt; = words[i].length &lt; = 20
- words[i] consists of only English letters and symbols.
- 1 &lt;= maxWidth &lt; = 100
- words[i].length &lt; = maxWidth

### Approach

1. Traverse through the words and group them into lines such that the total length of words in each line does not exceed `maxWidth`.
2. Distribute the extra spaces evenly among the words in each line.
3. For the last line, left-justify the text without adding extra spaces between the words.


## Solution

#### Code in Different Languages

#### Python

```python
class Solution:
    def fullJustify(self, words: list[str], maxWidth: int) -> list[str]:
        result, current, num_of_letters = [], [], 0

        for word in words:
            if num_of_letters + len(word) + len(current) > maxWidth:
                for i in range(maxWidth - num_of_letters):
                    current[i % (len(current) - 1 or 1)] += ' '
                result.append(''.join(current))
                current, num_of_letters = [], 0
            current += [word]
            num_of_letters += len(word)

        result.append(' '.join(current).ljust(maxWidth))
        return result

# Example usage:
words = ["This", "is", "an", "example", "of", "text", "justification."]
maxWidth = 16
solution = Solution()
print(solution.fullJustify(words, maxWidth))
```

#### C++

```cpp
#include <vector>
#include <string>

using namespace std;

class Solution {
public:
    vector<string> fullJustify(vector<string>& words, int maxWidth) {
        vector<string> result, current;
        int num_of_letters = 0;

        for (const string& word : words) {
            if (num_of_letters + word.size() + current.size() > maxWidth) {
                for (int i = 0; i < maxWidth - num_of_letters; ++i) {
                    current[i % (current.size() - 1 ? current.size() - 1 : 1)] += ' ';
                }
                string line;
                for (const string& w : current) {
                    line += w;
                }
                result.push_back(line);
                current.clear();
                num_of_letters = 0;
            }
            current.push_back(word);
            num_of_letters += word.size();
        }
        string last_line;
        for (const string& word : current) {
            if (!last_line.empty()) last_line += ' ';
            last_line += word;
        }
        last_line += string(maxWidth - last_line.size(), ' ');
        result.push_back(last_line);

        return result;
    }
};

// Example usage:
int main() {
    Solution solution;
    vector<string> words = {"This", "is", "an", "example", "of", "text", "justification."};
    int maxWidth = 16;
    vector<string> justified_text = solution.fullJustify(words, maxWidth);
    for (const string& line : justified_text) {
        printf("\"%s\"\n", line.c_str());
    }
    return 0;
}
```

#### Java

```java
import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<String> fullJustify(String[] words, int maxWidth) {
        List<String> result = new ArrayList<>();
        List<String> current = new ArrayList<>();
        int num_of_letters = 0;

        for (String word : words) {
            if (num_of_letters + word.length() + current.size() > maxWidth) {
                for (int i = 0; i < maxWidth - num_of_letters; ++i) {
                    current.set(i % (current.size() - 1 == 0 ? 1 : current.size() - 1), current.get(i % (current.size() - 1 == 0 ? 1 : current.size() - 1)) + " ");
                }
                result.add(String.join("", current));
                current.clear();
                num_of_letters = 0;
            }
            current.add(word);
            num_of_letters += word.length();
        }
        result.add(String.join(" ", current) + " ".repeat(maxWidth - num_of_letters - (current.size() - 1)));
        return result;
    }

    // Example usage
    public static void main(String[] args) {
        Solution solution = new Solution();
        String[] words = {"This", "is", "an", "example", "of", "text", "justification."};
        int maxWidth = 16;
        List<String> justified_text = solution.fullJustify(words, maxWidth);
        for (String line : justified_text) {
            System.out.println("\"" + line + "\"");
        }
    }
}
```

### Complexity Analysis

- Time Complexity: $O(n)$, where n is the number of words.
- Space Complexity: $O(n)$, where n is the number of words.

### References

- **LeetCode Problem**: Text Justification