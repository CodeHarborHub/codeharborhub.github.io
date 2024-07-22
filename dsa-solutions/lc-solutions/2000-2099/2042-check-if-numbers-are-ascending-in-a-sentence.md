---
id: check-if-numbers-are-ascending-in-a-sentence
title: Check If Numbers are Ascending in a Sentence
sidebar_label: 2042-Check If Numbers are Ascending in a Sentence
tags:
  - Valid Numbers
  - Brute Force
  - Optimized
  - LeetCode
  - Java
  - Python
  - C++
description: "This is a solution to the Check If Numbers are Ascending in a Sentence on LeetCode."
sidebar_position: 2
---



## Problem Description

A sentence is a list of tokens separated by a single space with no leading or trailing spaces. Every token is either a positive number consisting of digits 0-9 with no leading zeros, or a word consisting of lowercase English letters.

For example, "a puppy has 2 eyes 4 legs" is a sentence with seven tokens: "2" and "4" are numbers and the other tokens such as "puppy" are words.
Given a string s representing a sentence, you need to check if all the numbers in s are strictly increasing from left to right (i.e., other than the last number, each number is strictly smaller than the number on its right in s).

Return true if so, or false otherwise.

 

### Examples

**Example 1:**

```
Input: s = "1 box has 3 blue 4 red 6 green and 12 yellow marbles"
Output: true
Explanation: The numbers in s are: 1, 3, 4, 6, 12.
They are strictly increasing from left to right: 1 < 3 < 4 < 6 < 12.
```

**Example 2:**

```
Input: s = "hello world 5 x 5"
Output: false
Explanation: The numbers in s are: 5, 5. They are not strictly increasing.
```

**Example 3:**

```
Input: s = "sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s"
Output: false
Explanation: The numbers in s are: 7, 51, 50, 60. They are not strictly increasing.
```

### Constraints

- `3 <= s.length <= 200`
- `s` consists of lowercase English letters, spaces, and digits from 0 to 9, inclusive.
- The number of tokens in `s` is between 2 and 100, inclusive.
- The tokens in `s` are separated by a single space.
- There are at least two numbers in `s`.
- Each number in `s` is a positive number less than 100, with no leading zeros.
- `s` contains no leading or trailing spaces.

---

## Solution for Strictly Increasing Numbers in Sentence Problem

### Intuition and Approach

The problem can be solved using a brute force approach or an optimized approach. The brute force approach directly iterates through the tokens of the sentence, extracts the numbers, and checks if they are strictly increasing. The optimized approach ensures efficient token processing and number validation.

<Tabs>
<tabItem value="Brute Force" label="Brute Force">

### Approach 1: Brute Force

The brute force approach iterates through each token of the sentence, extracts the numbers, and checks if they are strictly increasing.

#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
#include <string>
#include <sstream>

class Solution {
public:
    bool areNumbersAscending(std::string s) {
        std::istringstream iss(s);
        std::string token;
        int prevNumber = -1;
        
        while (iss >> token) {
            if (isdigit(token[0])) {
                int number = std::stoi(token);
                if (number <= prevNumber) {
                    return false;
                }
                prevNumber = number;
            }
        }
        
        return true;
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public boolean areNumbersAscending(String s) {
        String[] tokens = s.split(" ");
        int prevNumber = -1;
        
        for (String token : tokens) {
            if (Character.isDigit(token.charAt(0))) {
                int number = Integer.parseInt(token);
                if (number <= prevNumber) {
                    return false;
                }
                prevNumber = number;
            }
        }
        
        return true;
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def are_numbers_ascending(self, s: str) -> bool:
        tokens = s.split()
        prev_number = -1
        
        for token in tokens:
            if token.isdigit():
                number = int(token)
                if number <= prev_number:
                    return False
                prev_number = number
                
        return True
```

</TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(n)$
- Space Complexity: $O(n)$
- Where `n` is the length of the sentence.
- The time complexity is $O(n)$ because we iterate through the tokens once.
- The space complexity is $O(n)$ because we store the tokens in a list.

</tabItem>
<tabItem value="Optimized" label="Optimized">

### Approach 2: Optimized Approach

The optimized approach uses similar logic but includes improvements such as pre-checking token conditions or using efficient string methods.

#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
#include <string>
#include <sstream>

class Solution {
public:
    bool areNumbersAscending(std::string s) {
        std::istringstream iss(s);
        std::string token;
        int prevNumber = -1;
        
        while (iss >> token) {
            if (std::all_of(token.begin(), token.end(), ::isdigit)) {
                int number = std::stoi(token);
                if (number <= prevNumber) {
                    return false;
                }
                prevNumber = number;
            }
        }
        
        return true;
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
import java.util.*;

class Solution {
    public boolean areNumbersAscending(String s) {
        String[] tokens = s.split(" ");
        int prevNumber = -1;
        
        for (String token : tokens) {
            if (token.chars().allMatch(Character::isDigit)) {
                int number = Integer.parseInt(token);
                if (number <= prevNumber) {
                    return false;
                }
                prevNumber = number;
            }
        }
        
        return true;
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def are_numbers_ascending(self, s: str) -> bool:
        tokens = s.split()
        prev_number = -1
        
        for token in tokens:
            if token.isdigit():
                number = int(token)
                if number <= prev_number:
                    return False
                prev_number = number
                
        return True
```

</TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(n)$
- Space Complexity: $O(n)$
- Where `n` is the length of the sentence.
- The time complexity is $O(n)$ because we iterate through the tokens once.
- The space complexity is $O(n)$ because we store the tokens in a list.

</tabItem>
</Tabs>

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['ImmidiSivani'].map(username => (
 <Author key={username} username={username} />
))}
</div>