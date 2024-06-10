---
id: Letter Combinations of a Phone Number
title: Letter Combinations of a Phone Number (LeetCode)
sidebar_label: 0017 Letter Combinations of a Phone Number
tags:
    - Back Tracking
    - Mapping
    - String
description: The problem requires generating all letter combinations corresponding to given digits (2-9). The solution utilizes backtracking to explore all combinations efficiently, employing a recursive approach in Java.
---

## Problem Description

| Problem Statement                                                                                           | Solution Link                                                                                                                               | LeetCode Profile                                   |
| :----------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------- |
| [Letter Combinations of a Phone Number](https://leetcode.com/problems/Letter Combinations of a Phone Number/)                                         | [Letter Combinations of a Phone Number Solution on LeetCode](https://leetcode.com/problems/Letter Combinations of a Phone Number/solutions/5055810/video-two-pointer-solution/) | [gabaniyash846](https://leetcode.com/u/gabaniyash846/) |

### Problem Description

## Problem Statement:
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

### Examples

#### Example 1

- **Input:** `digits = "23"`
- **Output:** `["ad","ae","af","bd","be","bf","cd","ce","cf"]`

#### Example 2

- **Input:** `digits = ""`
- **Output:** `[]`


#### Example 3

- **Input:** `2`
- **Output:** `["a","b","c"]`

### Constraints:
- `0 ≤ digits.length ≤ 4`
- `0 ≤ digits.length ≤ 4digits[𝑖]`
- `digits[i] is a digit in the range ['2', '9'].`
- `A mapping of digits to letters (similar to telephone buttons) is given below. Note that 1 does not map to any letters.`

### Approach

1. **Mapping Digits to Letters:**
   - Define a mapping of digits to their corresponding letters, similar to telephone buttons.

2. **Backtracking Function:**
   - Define a recursive backtracking function to generate all possible combinations.
   - The function takes four parameters:
     - `index`: The current index in the digits string.
     - `path`: The current combination of letters.
   - If the index is equal to the length of the digits string, it means we have reached the end of a combination, so we add it to the result list.
   - Otherwise, for each letter corresponding to the current digit, we append it to the current combination and recursively call the function with the next index.
   - After the recursive call, we remove the last character from the combination (backtracking).

3. **Base Case:**
   - If the length of the current combination is equal to the length of the input digits string, we add the combination to the result list.

4. **Main Function:**
   - Initialize an empty list to store the combinations.
   - Call the backtracking function with the initial index set to 0 and an empty string as the initial combination.
   - Return the list of combinations.

This approach ensures that all possible combinations are generated using backtracking, and the result is returned in the desired format.

### Solution Code
#### Python

```python
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []

        digit_to_letters = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz'
        }

        def backtrack(index, path):
            if index == len(digits):
                combinations.append(path)
                return
            for letter in digit_to_letters[digits[index]]:
                backtrack(index + 1, path + letter)

        combinations = []
        backtrack(0, '')
        return combinations
```

#### Java

```java
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Solution {
    private Map<Character, String> digitToLetters = new HashMap<>();

    public Solution() {
        digitToLetters.put('2', "abc");
        digitToLetters.put('3', "def");
        digitToLetters.put('4', "ghi");
        digitToLetters.put('5', "jkl");
        digitToLetters.put('6', "mno");
        digitToLetters.put('7', "pqrs");
        digitToLetters.put('8', "tuv");
        digitToLetters.put('9', "wxyz");
    }

    public List<String> letterCombinations(String digits) {
        List<String> combinations = new ArrayList<>();
        if (digits == null || digits.isEmpty()) {
            return combinations;
        }
        backtrack(combinations, digits, 0, new StringBuilder());
        return combinations;
    }

    private void backtrack(List<String> combinations, String digits, int index, StringBuilder path) {
        if (index == digits.length()) {
            combinations.add(path.toString());
            return;
        }
        String letters = digitToLetters.get(digits.charAt(index));
        for (char letter : letters.toCharArray()) {
            path.append(letter);
            backtrack(combinations, digits, index + 1, path);
            path.deleteCharAt(path.length() - 1);
        }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        List<String> result = solution.letterCombinations("23");
        System.out.println(result); // Output: [ad, ae, af, bd, be, bf, cd, ce, cf]
    }
}
```

#### CPP:
```cpp
#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

class Solution {
private:
    unordered_map<char, string> digitToLetters;
    vector<string> combinations;

public:
    Solution() {
        digitToLetters = {
            {'2', "abc"},
            {'3', "def"},
            {'4', "ghi"},
            {'5', "jkl"},
            {'6', "mno"},
            {'7', "pqrs"},
            {'8', "tuv"},
            {'9', "wxyz"}
        };
    }

    vector<string> letterCombinations(string digits) {
        if (digits.empty()) return {};
        backtrack(digits, 0, "");
        return combinations;
    }

    void backtrack(const string& digits, int index, string path) {
        if (index == digits.length()) {
            combinations.push_back(path);
            return;
        }
        for (char letter : digitToLetters[digits[index]]) {
            backtrack(digits, index + 1, path + letter);
        }
    }
};

int main() {
    Solution solution;
    vector<string> result = solution.letterCombinations("23");
    for (const string& comb : result) {
        cout << comb << " ";
    }
    // Output: ad ae af bd be bf cd ce cf
    return 0;
}
```

#### JavaScript
```js
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];
    
    const digitToLetters = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    
    const combinations = [];
    
    const backtrack = (index, path) => {
        if (index === digits.length) {
            combinations.push(path);
            return;
        }
        const letters = digitToLetters[digits.charAt(index)];
        for (let letter of letters) {
            backtrack(index + 1, path + letter);
        }
    };
    
    backtrack(0, '');
    return combinations;
};

// Example usage:
console.log(letterCombinations("23")); // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
```

#### TypeScript
```ts
class Solution {
    private digitToLetters: { [key: string]: string } = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    letterCombinations(digits: string): string[] {
        const combinations: string[] = [];

        const backtrack = (index: number, path: string): void => {
            if (index === digits.length) {
                combinations.push(path);
                return;
            }
            const letters = this.digitToLetters[digits.charAt(index)];
            for (let letter of letters) {
                backtrack(index + 1, path + letter);
            }
        };

        if (digits.length !== 0) {
            backtrack(0, '');
        }
        
        return combinations;
    }
}

// Example usage:
const solution = new Solution();
console.log(solution.letterCombinations("23")); // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
```

### Step-by-Step Algorithm

Here's a step-by-step algorithm for generating all possible letter combinations of a given string of digits using backtracking:

1. **Define a mapping of digits to letters:**
   - Create a map where each digit from 2 to 9 is mapped to its corresponding letters on a telephone keypad.

2. **Define a backtracking function:**
   - The function will take the following parameters:
     - `index`: The current index in the digits string.
     - `path`: The current combination of letters.
   - If the index is equal to the length of the digits string, it means we have formed a complete combination, so add it to the result list.
   - Otherwise, for each letter corresponding to the current digit at the given index, append it to the current combination and recursively call the function with the next index.
   - After the recursive call, remove the last character from the combination (backtracking).

3. **Base Case:**
   - If the length of the current combination is equal to the length of the input digits string, add the combination to the result list.

4. **Main Function:**
   - Initialize an empty list to store the combinations.
   - Call the backtracking function with the initial index set to 0 and an empty string as the initial combination.
   - Return the list of combinations.

This algorithm ensures that all possible combinations are generated by exploring all valid paths through backtracking.