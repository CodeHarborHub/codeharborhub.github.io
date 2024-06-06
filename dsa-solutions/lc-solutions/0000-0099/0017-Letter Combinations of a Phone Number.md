---
id: Letter-Combinations-of-a-Phone-Number
title: Letter Combinations of a Phone Number (LeetCode)
sidebar_label: 0017-Letter Combinations of a Phone Number
tags:
    - String
    - Backtracking
description: Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
---

## Problem Description

| Problem Statement                                                                                           | Solution Link                                                                                                                               | LeetCode Profile                                   |
| :----------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------- |
| [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) | [Letter Combinations of a Phone Number Solution on LeetCode](https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/) | [gabaniyash846](https://leetcode.com/u/gabaniyash846/) |

### Problem Description

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


### Examples

#### Example 1
- **Input:** `digits = "23"`
- **Output:** `["ad","ae","af","bd","be","bf","cd","ce","cf"]`

#### Example 2
- **Input:** `digits = ""`
- **Output:** `[]`

#### Example 3
- **Input:** `digits = "2"`
- **Output:** `["a","b","c"]`

### Constraints
- `0 <= digits.length <= 4`
- `digits[i]` is a digit in the range `['2', '9']`.

### Topics
- String
- Backtracking

### Intuition
- Use backtracking to generate all possible combinations.

### Complexity
- **Time Complexity:** $O(3^N \cdot 4^M)$ where $N$ is the number of digits in the input that maps to 3 letters (2, 3, 4, 5, 6, 8) and $M$ is the number of digits in the input that maps to 4 letters (7, 9).
- **Space Complexity:** $O(3^N \cdot 4^M)$ for storing the results.

### Solution Code and Explanation

#### C++

```cpp
#include <vector>
#include <string>
#include <unordered_map>

class Solution {
public:
    std::vector<std::string> letterCombinations(std::string digits) {
        if (digits.empty()) return {};
        std::unordered_map<char, std::string> phoneMap = {
            {'2', "abc"}, {'3', "def"}, {'4', "ghi"},
            {'5', "jkl"}, {'6', "mno"}, {'7', "pqrs"},
            {'8', "tuv"}, {'9', "wxyz"}
        };
        std::vector<std::string> result;
        backtrack(digits, phoneMap, 0, "", result);
        return result;
    }

private:
    void backtrack(const std::string& digits, const std::unordered_map<char, std::string>& phoneMap, int index, std::string current, std::vector<std::string>& result) {
        if (index == digits.size()) {
            result.push_back(current);
            return;
        }
        const std::string& letters = phoneMap.at(digits[index]);
        for (const char& letter : letters) {
            backtrack(digits, phoneMap, index + 1, current + letter, result);
        }
    }
};
```

#### Java

```java
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {
    public List<String> letterCombinations(String digits) {
        List<String> result = new ArrayList<>();
        if (digits.isEmpty()) return result;
        Map<Character, String> phoneMap = new HashMap<>() {{
            put('2', "abc"); put('3', "def"); put('4', "ghi");
            put('5', "jkl"); put('6', "mno"); put('7', "pqrs");
            put('8', "tuv"); put('9', "wxyz");
        }};
        backtrack(digits, phoneMap, 0, new StringBuilder(), result);
        return result;
    }

    private void backtrack(String digits, Map<Character, String> phoneMap, int index, StringBuilder current, List<String> result) {
        if (index == digits.length()) {
            result.add(current.toString());
            return;
        }
        String letters = phoneMap.get(digits.charAt(index));
        for (char letter : letters.toCharArray()) {
            current.append(letter);
            backtrack(digits, phoneMap, index + 1, current, result);
            current.deleteCharAt(current.length() - 1);
        }
    }
}

```

#### Python

```python
from typing import List

class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []
        
        phone_map = {
            "2": "abc", "3": "def", "4": "ghi", "5": "jkl",
            "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz"
        }
        
        def backtrack(index: int, path: str):
            if index == len(digits):
                combinations.append(path)
                return
            possible_letters = phone_map[digits[index]]
            for letter in possible_letters:
                backtrack(index + 1, path + letter)
        
        combinations = []
        backtrack(0, "")
        return combinations

```

### Explanation

1. **Initialize Phone Map:**
   - Create a mapping from digit to corresponding letters.
   ``` python
  phone_map = {
    "2": "abc", "3": "def", "4": "ghi", "5": "jkl",
    "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz"
   }
   ```

2. **Backtracking Function:**
   - Define a recursive function backtrack to generate combinations.
   - Base case: If the current index is equal to the length of digits, add the current path to combinations.
    - Recursive case: For each letter corresponding to the current digit, append the letter to the path and call backtrack with the next index.
 ```python
def backtrack(index: int, path: str):
    if index == len(digits):
        combinations.append(path)
        return
    possible_letters = phone_map[digits[index]]
    for letter in possible_letters:
        backtrack(index + 1, path + letter)
 ```


3. **Initiate Backtracking**
   - Initialize the result list combinations and start the backtracking process.
   
   ```python
   combinations = []
    backtrack(0, "")
   return combinations
   ```



### Conclusion

The above solution efficiently generates all possible letter combinations for a given string of digits. It employs a backtracking approach to explore all potential combinations, leveraging a recursive function to build the combinations step-by-step. The time complexity of $O(3^N \cdot 4^M)$ and space complexity of $O(3^N \cdot 4^M)$ ensure that the algorithm can handle input sizes up to the upper limit specified in the constraints efficiently.