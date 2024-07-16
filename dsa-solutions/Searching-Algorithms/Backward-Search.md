---
id: Backward-Search-Algorithm
title: Backward Search Algorithm
sidebar_label: Backward Search Algorithm
tags:
  - Advanced
  - Search Algorithms
  - Text Processing
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Backward Search Algorithm problem."
---

## What is the Backward Search Algorithm?

The Backward Search Algorithm is a search method typically used in text processing and pattern matching. It works by searching for a pattern in a text from right to left, which can be more efficient in certain contexts compared to traditional left-to-right search algorithms.

## Algorithm Steps

1. **Preprocessing**:
   - Construct a rightmost occurrence function that maps each character in the pattern to its rightmost position.

2. **Searching**:
   - Align the pattern with the beginning of the text.
   - Compare characters from right to left.
   - If a mismatch is found, use the rightmost occurrence function to determine the next alignment.
   - If the entire pattern matches, record the position of the match.

## Complexity Analysis

- **Time Complexity**: The average-case time complexity is \(O(n/m)\) where \(n\) is the length of the text and \(m\) is the length of the pattern.
- **Space Complexity**: The space complexity is \(O(k)\) where \(k\) is the size of the character set.

## Example

Given a pattern and a text:

```
pattern = "ABC"
text = "AABCABCDABC"
```


Using the Backward Search Algorithm:

- The algorithm will search the pattern "ABC" in the text "AABCABCDABC" from right to left.

## Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>

```python
def rightmost_occurrence_function(pattern):
    rightmost = {}
    for i in range(len(pattern)):
        rightmost[pattern[i]] = i
    return rightmost

def backward_search(text, pattern):
    rightmost = rightmost_occurrence_function(pattern)
    m, n = len(pattern), len(text)
    i = m - 1
    j = m - 1
    
    while i < n:
        if text[i] == pattern[j]:
            if j == 0:
                return i
            else:
                i -= 1
                j -= 1
        else:
            lo = rightmost.get(text[i], -1)
            i += m - min(j, 1 + lo)
            j = m - 1
    
    return -1

# Example usage:
pattern = "ABC"
text = "AABCABCDABC"
result = backward_search(text, pattern)
print(f"Pattern found at index: {result}")
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp

#include <iostream>
#include <unordered_map>
#include <string>

std::unordered_map<char, int> rightmost_occurrence_function(const std::string &pattern) {
    std::unordered_map<char, int> rightmost;
    for (int i = 0; i < pattern.size(); ++i) {
        rightmost[pattern[i]] = i;
    }
    return rightmost;
}

int backward_search(const std::string &text, const std::string &pattern) {
    auto rightmost = rightmost_occurrence_function(pattern);
    int m = pattern.size();
    int n = text.size();
    int i = m - 1;
    int j = m - 1;
    
    while (i < n) {
        if (text[i] == pattern[j]) {
            if (j == 0) {
                return i;
            } else {
                --i;
                --j;
            }
        } else {
            int lo = rightmost.find(text[i]) != rightmost.end() ? rightmost[text[i]] : -1;
            i += m - std::min(j, 1 + lo);
            j = m - 1;
        }
    }
    
    return -1;
}

int main() {
    std::string pattern = "ABC";
    std::string text = "AABCABCDABC";
    int result = backward_search(text, pattern);
    std::cout << "Pattern found at index: " << result << std::endl;
    return 0;
}

```

  </TabItem>
</Tabs>

# Conclusion
The Backward Search Algorithm is a powerful method for pattern matching in text processing. By searching from right to left and leveraging the rightmost occurrence function, it provides efficient searching capabilities, especially useful in specific contexts where this directionality offers advantages over traditional approaches.
