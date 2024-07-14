---
id: text-justification
title: Text Justification (LeetCode)
difficulty: Hard
sidebar_label: 0068-TextJustification
topics:
  - String
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Text Justification](https://leetcode.com/problems/text-justification/) | [Text Justification Solution on LeetCode](https://leetcode.com/problems/text-justification/solutions/) | [YourLeetCodeProfile](https://leetcode.com/your-profile/) |

## Problem Description

Given an array of words and a width `maxWidth`, format the text such that each line has exactly `maxWidth` characters and is fully (left and right) justified.

### Examples

#### Example 1:

- **Input:**
  ```plaintext
  words = ["This", "is", "an", "example", "of", "text", "justification."]
  maxWidth = 16
  ```
- **Output:**
  ```plaintext
  [
     "This    is    an",
     "example  of text",
     "justification.  "
  ]
  ```

#### Example 2:

- **Input:**
  ```plaintext
  words = ["What","must","be","acknowledgment","shall","be"]
  maxWidth = 16
  ```
- **Output:**
  ```plaintext
  [
    "What   must   be",
    "acknowledgment  ",
    "shall be        "
  ]
  ```

### Constraints

- `1 <= words.length <= 300`
- `1 <= words[i].length <= 20`
- `0 <= maxWidth <= 100`
- `words[i]` consists of only lowercase English letters.

### Approach

To justify the text:
1. **Grouping Words:** Start with the first word and add subsequent words until adding another word would exceed `maxWidth`.
2. **Formatting Lines:** Determine the number of spaces needed between words to reach `maxWidth`. Adjust spacing to be evenly distributed.
3. **Edge Cases:** Handle cases where only one word fits per line or when a line already contains the last words of the array.

### Solution Code

#### Python

```python
class Solution:
    def fullJustify(self, words: List[str], maxWidth: int) -> List[str]:
        result = []
        line = []
        current_length = 0
        for word in words:
            if current_length + len(line) + len(word) > maxWidth:
                for i in range(maxWidth - current_length):
                    line[i % (len(line) - 1 or 1)] += ' '
                result.append(''.join(line))
                line, current_length = [], 0
            line += [word]
            current_length += len(word)
        return result + [' '.join(line).ljust(maxWidth)]

```

#### Java

```java
class Solution {
    public List<String> fullJustify(String[] words, int maxWidth) {
        List<String> result = new ArrayList<>();
        List<String> line = new ArrayList<>();
        int currentLength = 0;
        for (String word : words) {
            if (currentLength + line.size() + word.length() > maxWidth) {
                for (int i = 0; i < maxWidth - currentLength; i++) {
                    line.set(i % (line.size() - 1), line.get(i % (line.size() - 1)) + " ");
                }
                result.add(String.join("", line));
                line.clear();
                currentLength = 0;
            }
            line.add(word);
            currentLength += word.length();
        }
        result.add(String.join(" ", line).concat(" ".repeat(maxWidth - currentLength - line.size() + 1)));
        return result;
    }
}
```

#### C++

```cpp
class Solution {
public:
    vector<string> fullJustify(vector<string>& words, int maxWidth) {
        vector<string> result;
        vector<string> line;
        int currentLength = 0;
        for (const string& word : words) {
            if (currentLength + line.size() + word.length() > maxWidth) {
                for (int i = 0; i < maxWidth - currentLength; i++) {
                    line[i % (line.size() - 1)] += " ";
                }
                result.push_back("");
                line.clear();
                currentLength = 0;
            }
            line.push_back(word);
            currentLength += word.length();
        }
        result.push_back("");
        return result;
    }
};
```

### Conclusion

The "Text Justification" problem is solved by iterating through the words to determine how many fit on each line, calculating necessary spaces to evenly distribute between words, and handling edge cases for the last line. The provided solutions in Python, Java, and C++ offer different approaches to achieve text justification based on the given constraints.
