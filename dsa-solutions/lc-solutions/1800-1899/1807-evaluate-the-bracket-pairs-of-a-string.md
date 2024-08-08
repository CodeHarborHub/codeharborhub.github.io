---
id: evaluate-the-bracket-pairs-of-a-string
title: Evaluate  the Bracket Pairs of a String
sidebar_label: 1807-Evaluate the Bracket Pairs of a String
tags:
  - String Manipulation
  - Hash Table
  - LeetCode
  - Java
  - Python
  - C++
description: "This is a solution to the Evaluate Bracket Pairs problem on LeetCode."
sidebar_position: 30
---

## Problem Description

You are given a string `s` that contains some bracket pairs, with each pair containing a non-empty key.

For example, in the string `"(name)is(age)yearsold"`, there are two bracket pairs that contain the keys "name" and "age". You know the values of a wide range of keys. This is represented by a 2D string array `knowledge` where each `knowledge[i] = [keyi, valuei]` indicates that key `keyi` has a value of `valuei`.

You are tasked to evaluate all of the bracket pairs. When you evaluate a bracket pair that contains some key `keyi`, you will:
- Replace `keyi` and the bracket pair with the key's corresponding `valuei`.
- If you do not know the value of the key, you will replace `keyi` and the bracket pair with a question mark "?" (without the quotation marks).

Each key will appear at most once in your knowledge. There will not be any nested brackets in `s`.

Return the resulting string after evaluating all of the bracket pairs.

### Examples

**Example 1:**

```
Input: s = "(name)is(age)yearsold", knowledge = [["name","bob"],["age","two"]]
Output: "bobistwoyearsold"
Explanation:
The key "name" has a value of "bob", so replace "(name)" with "bob".
The key "age" has a value of "two", so replace "(age)" with "two".
```

**Example 2:**

```
Input: s = "hi(name)", knowledge = [["a","b"]]
Output: "hi?"
Explanation: As you do not know the value of the key "name", replace "(name)" with "?".
```

**Example 3:**

```
Input: s = "(a)(a)(a)aaa", knowledge = [["a","yes"]]
Output: "yesyesyesaaa"
Explanation: The same key can appear multiple times.
The key "a" has a value of "yes", so replace all occurrences of "(a)" with "yes".
Notice that the "a"s not in a bracket pair are not evaluated.
```

### Constraints

- `1 <= s.length <= 10^5`
- `0 <= knowledge.length <= 10^5`
- `knowledge[i].length == 2`
- `1 <= keyi.length, valuei.length <= 10`
- `s` consists of lowercase English letters and round brackets '(' and ')'.
- Every open bracket '(' in `s` will have a corresponding close bracket ')'.
- The key in each bracket pair of `s` will be non-empty.
- There will not be any nested bracket pairs in `s`.
- `keyi` and `valuei` consist of lowercase English letters.
- Each `keyi` in knowledge is unique.

---

## Solution for Evaluate Bracket Pairs Problem

To solve this problem, we need to use a hash map to store the key-value pairs from the knowledge array. Then, we can iterate through the string `s` and build the resulting string by replacing the keys within brackets with their corresponding values from the hash map.

### Approach

1. Create a hash map from the knowledge array.
2. Initialize a result string.
3. Traverse the string `s`:
   - If we encounter a '(', start collecting the key until we find a ')'.
   - Replace the key with its value from the hash map, or '?' if the key is not found.
4. Continue until the entire string is processed.

### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    string evaluate(string s, vector<vector<string>>& knowledge) {
        unordered_map<string, string> map;
        for (auto& pair : knowledge) {
            map[pair[0]] = pair[1];
        }
        
        string result;
        int i = 0;
        while (i < s.size()) {
            if (s[i] == '(') {
                int j = i + 1;
                while (s[j] != ')') j++;
                string key = s.substr(i + 1, j - i - 1);
                result += map.count(key) ? map[key] : "?";
                i = j + 1;
            } else {
                result += s[i++];
            }
        }
        return result;
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public String evaluate(String s, List<List<String>> knowledge) {
        Map<String, String> map = new HashMap<>();
        for (List<String> pair : knowledge) {
            map.put(pair.get(0), pair.get(1));
        }
        
        StringBuilder result = new StringBuilder();
        int i = 0;
        while (i < s.length()) {
            if (s.charAt(i) == '(') {
                int j = i + 1;
                while (s.charAt(j) != ')') j++;
                String key = s.substring(i + 1, j);
                result.append(map.getOrDefault(key, "?"));
                i = j + 1;
            } else {
                result.append(s.charAt(i++));
            }
        }
        return result.toString();
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def evaluate(self, s: str, knowledge: List[List[str]]) -> str:
        knowledge_dict = {key: value for key, value in knowledge}
        result = []
        i = 0
        while i < len(s):
            if s[i] == '(':
                j = i + 1
                while s[j] != ')':
                    j += 1
                key = s[i + 1:j]
                result.append(knowledge_dict.get(key, "?"))
                i = j + 1
            else:
                result.append(s[i])
                i += 1
        return ''.join(result)
```

</TabItem>
</Tabs>

#### Complexity Analysis

- **Time Complexity**: $O(n + m)$, where `n` is the length of the string `s` and `m` is the number of key-value pairs in `knowledge`.
- **Space Complexity**: $O(m)$, for storing the hash map of knowledge.

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['ImmidiSivani'].map(username => (
 <Author key={username} username={username} />
))}
</div>
```