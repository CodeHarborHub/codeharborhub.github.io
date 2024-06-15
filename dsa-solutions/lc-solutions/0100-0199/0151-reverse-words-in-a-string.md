---
id: reverse-words-in-a-string
title: Reverse Words in a String (LeetCode)
sidebar_label: 0151-Reverse Words in a String
tags:
  - Two Pointers
  - String
description: Given an input string s, reverse the order of the words.
sidebar_position: 0151
---

## Problem Description

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

### Example 1

- **Input:** ` s = "the sky is blue" `
- **Output:** `"blue is sky the"`
- **Explanation:** The reverse of the whole string is returned along with spaces.

### Example 2

- **Input:** ` s = "  hello world  " `
- **Output:** `"world hello"`
- **Explanation:** Your reversed string should not contain leading or trailing spaces.

### Example 3

- **Input:** ` s = "a good   example" `
- **Output:** `"example good a"`
- **Explanation:** =You need to reduce multiple spaces between two words to a single space in the reversed string.



### Constraints

- `1 <= s.length <= 10^4`
- `s contains English letters (upper-case and lower-case), digits, and spaces ' '.`
- `There is at least one word in s.`

## Approach

  - 1. The code starts by trimming the input string s to remove any leading and trailing spaces.

 - 2. It then splits the trimmed string into words based on spaces using a stringstream. The words are stored in the words vector.

  - 3. Next, it initializes an output string out.

  - 4. The code iterates through the words in reverse order (from the last word to the second word) and appends each word followed by a space to the output string.

  - 5. Finally, it appends the first word to the output string without a trailing space.



### Solution Code

#### C++

```c++
class Solution {
public:
    string reverseWords(string s) {
        int i = 0, j = s.size() - 1;
        while (i <= j && s[i] == ' ') i++;   
        while (j >= i && s[j] == ' ') j--;   
        s = s.substr(i, j - i + 1);          
        vector<string> words;                
        stringstream ss(s);                  
        string word;
        while (ss >> word) {                 
            words.push_back(word);           
        }
        string out = "";
        for (int i = words.size() - 1; i > 0; i--) {
            out += words[i] + " ";
        }
        return out + words[0];               
    }
};

```

#### java
```java
public class Solution {
    public String reverseWords(String s) {
        int i = 0, j = s.length() - 1;
        while (i <= j && s.charAt(i) == ' ') i++;  
        while (j >= i && s.charAt(j) == ' ') j--; 
        s = s.substring(i, j + 1);                
        String[] words = s.split("\\s+");         
        StringBuilder out = new StringBuilder();
        for (int k = words.length - 1; k > 0; k--) {
            out.append(words[k]).append(" ");
        }
        return out.append(words[0]).toString();       
    }
}

```

#### Python
```python
class Solution:
    def reverseWords(self, s: str) -> str:
        i, j = 0, len(s) - 1
        while i <= j and s[i] == ' ':
            i += 1  
        while j >= i and s[j] == ' ':
            j -= 1  
        s = s[i : j + 1] 
        words = s.split()  
        out = []
        for k in range(len(words) - 1, 0, -1):
            out.append(words[k])
        out.append(words[0])
        return ' '.join(out) 
```

#### Conclusion
The above solutions use two-pointers approach to reverse the string.
  - 1. Time complexity: O(n)
  - 2. Space complexity: O(m)( where M is the total number of words in the input string. )