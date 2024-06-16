---
id: make-the-string-great
title: Make The String Great (Leetcode)
sidebar_label: 1544-MakeTheStringGreat
description: Given a string s of lower and upper case English letters.
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Make The String Great](https://leetcode.com/problems/make-the-string-great/description/) | [Make The String Great Solution on LeetCode](https://leetcode.com/problems/make-the-string-great/solutions) |  [Aaradhya Singh ](https://leetcode.com/u/keira_09/) |


## Problem Description

Given a string $s$ of lower and upper case English letters.

A good string is a string which doesn't have two adjacent characters $s[i]$ and $s[i + 1]$ where:

- $0 <= i <= s.length - 2$
- s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.

To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.

Return the string after making it good. The answer is guaranteed to be unique under the given constraints.

Notice that an empty string is also good.

### Examples

#### Example 1

- **Input:** s = "leEeetcode"
- **Output:** "leetcode"
- **Explanation:** In the first step, either you choose $i = 1$ or $i = 2$, both will result $"leEeetcode"$ to be reduced to $"leetcode"$.


#### Example 2

- **Input:** s = "abBAcC"
- **Output:** ""
- **Explanation:** We have many possible scenarios, and all lead to the same answer. For example: <br />
"abBAcC" --> "aAcC" --> "cC" --> ""
"abBAcC" --> "abBA" --> "aA" --> ""

#### Example 2

- **Input:** s = "s"
- **Output:** "s"


### Constraints


- $1 <= s.length <= 100$
- s contains only lower and upper case English letters.



### Intuition

The code aims to remove adjacent pairs of characters in the input string s where one character is the uppercase version of the other (e.g., 'a' and 'A'). It initializes an empty string result and iterates through s. If result is empty, it adds the current character. Otherwise, it checks if the current character and the last character of result form such a pair. If they do, it removes the last character from result; otherwise, it appends the current character to result. This approach efficiently creates a "good" string with no adjacent pairs of uppercase-lowercase characters, providing the desired output.

### Approach

1. **Initialize an Empty String:**

    - Initialize an empty string result to store the characters after processing.

2. **Iterate Through the Input String:**

    - Iterate through each character in the input string s using a for loop.

3. **Check for Empty String:**

    - If result is empty, add the current character to result.

4. **Check for Adjacent Pairs:**

    - If result is not empty, check if the current character and the last character of result form an adjacent pair where one character is the uppercase version of the other (e.g., 'a' and 'A').
    - If such a pair is found, remove the last character from result using result.erase(result.size() - 1).
    - If no adjacent pair is found, append the current character to result.

5. **Return the Resulting String:**

    - After processing all characters in s, return the final value of result, which represents the "good" string without adjacent pairs of uppercase-lowercase characters.

### Solution Code

#### Python

```py
class Solution:
    def makeGood(self, s: str) -> str:
        result = []
        
        for char in s:
            if not result:
                result.append(char)
            else:
                if result[-1].lower() == char.lower() and (result[-1] != char):
                    result.pop()
                else:
                    result.append(char)
        
        return ''.join(result)
```

#### Java

```java
class Solution {
    public String makeGood(String s) {
        StringBuilder result = new StringBuilder();

        for (char c : s.toCharArray()) {
            if (result.length() == 0) {
                result.append(c);
            } else {
                char lastChar = result.charAt(result.length() - 1);
                if (Character.toLowerCase(c) == Character.toLowerCase(lastChar)
                        && c != lastChar + 32 && c != lastChar - 32) {
                    result.deleteCharAt(result.length() - 1);
                } else {
                    result.append(c);
                }
            }
        }

        return result.toString();
    }
}
```

#### C++

```cpp
class Solution {
public:
   string makeGood(std::string s) {
       string result ;
       for (int i=0 ; i< s.length() ; i++)
       {
           if (result.empty())
           {
               result += s[i];
           }

           else
           {
               if (!result.empty() && (s[i] == result.back() - 32 || s[i] == result.back() + 32))
               {
                   result.erase(result.size() - 1);
               }

               else if (!result.empty())
               {
                   result += s[i] ;
               }
           }
        }
         
        return result;

    }
};
```

### Conclusion

The code efficiently creates a "good" string by removing adjacent pairs of characters where one is the uppercase version of the other. It uses a StringBuilder to store and manipulate the characters, iterating through the input string and checking for adjacent pairs. If such a pair is found, the last character is removed from the StringBuilder; otherwise, the current character is appended. This approach ensures that the resulting string has no adjacent pairs of uppercase-lowercase characters, adhering to the desired output. The time complexity of this approach is $O(n)$, where $n$ is the length of the input string, as each character is processed once. The space complexity is also $O(n)$ due to the storage of the StringBuilder.
