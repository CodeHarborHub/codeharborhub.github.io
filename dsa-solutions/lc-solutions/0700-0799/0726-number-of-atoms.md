---
id: number-of-atoms
title: Number of Atoms
sidebar_label: 0726 - Number of Atoms
tags:
  - Stack
  - Recursion
  - String
description: "This is a solution to the Number of Atoms problem on LeetCode."
---

## Problem Description

Given a string `formula` representing a chemical formula, return the count of each atom.

The atomic element always starts with an uppercase character, then zero or more lowercase letters, representing the name.

One or more digits representing that element's count may follow if the count is greater than `1`. If the count is `1`, no digits will follow.

- For example, `"H2O"` and `"H2O2"` are possible, but `"H1O2"` is impossible.

Two formulas are concatenated together to produce another formula.

- For example, `"H2O2He3Mg4"` is also a formula.

A formula placed in parentheses, and a count (optionally added) is also a formula.

- For example, `"(H2O2)"` and `"(H2O2)3"` are formulas.

Return the count of all elements as a string in the following form: the first name (in sorted order), followed by its count (if that count is more than `1`), followed by the second name (in sorted order), followed by its count (if that count is more than `1`), and so on.

The test cases are generated so that all the values in the output fit in a **32-bit** integer.

### Examples

**Example 1:**

```
Input: formula = "H2O"
Output: "H2O"
Explanation: The count of elements are {'H': 2, 'O': 1}.
```
**Example 2:**

```
Input: formula = "Mg(OH)2"
Output: "H2MgO2"
Explanation: The count of elements are {'H': 2, 'Mg': 1, 'O': 2}.
```

### Constraints

- `1 <= formula.length <= 1000`
- `formula` consists of English letters, digits, `'('`, and `')'`.
- `formula` is always valid.

## Solution for Number of Atoms

### Approach 1: Recursion 
#### Intuition and Algorithm

Write a function `parse` that parses the formula from index `i`, returning a map `count` from names to multiplicities (the number of times that name is recorded).

We will put `i` in the global state: our `parse` function increments `i` throughout any future calls to `parse`.

- When we see a `'('`, we will parse whatever is inside the brackets (up to the closing ending bracket) and add it to our count.

- Otherwise, we should see an uppercase character: we will parse the rest of the letters to get the name, and add that (plus the multiplicity if there is one.)

- At the end, if there is a final multiplicity (representing the multiplicity of a bracketed sequence), we'll multiply our answer by this.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
#include <string>
#include <unordered_map>
#include <map>

class Solution {
private:
    int i;

public:
    std::string countOfAtoms(std::string formula) {
        std::string ans;
        i = 0;
        std::map<std::string, int> count = parse(formula);
        for (const auto& [name, multiplicity] : count) {
            ans += name;
            if (multiplicity > 1) {
                ans += std::to_string(multiplicity);
            }
        }
        return ans;
    }

    std::map<std::string, int> parse(std::string formula) {
        int N = formula.length();
        std::map<std::string, int> count;
        while (i < N && formula[i] != ')') {
            if (formula[i] == '(') {
                i++;
                for (const auto& [name, multiplicity] : parse(formula)) {
                    count[name] += multiplicity;
                }
            } else {
                int iStart = i++;
                while (i < N && islower(formula[i])) {
                    i++;
                }
                std::string name = formula.substr(iStart, i - iStart);
                iStart = i;
                while (i < N && isdigit(formula[i])) {
                    i++;
                }
                int multiplicity = iStart < i ? std::stoi(formula.substr(iStart, i - iStart)) : 1;
                count[name] += multiplicity;
            }
        }
        int iStart = ++i;
        while (i < N && isdigit(formula[i])) {
            i++;
        }
        if (iStart < i) {
            int multiplicity = std::stoi(formula.substr(iStart, i - iStart));
            for (auto& [name, count_] : count) {
                count_ *= multiplicity;
            }
        }
        return count;
    }
};


```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    int i;
    public String countOfAtoms(String formula) {
        StringBuilder ans = new StringBuilder();
        i = 0;
        Map<String, Integer> count = parse(formula);
        for (String name: count.keySet()) {
            ans.append(name);
            int multiplicity = count.get(name);
            if (multiplicity > 1) {
                ans.append("" + multiplicity);
            }
        }
        return new String(ans);
    }

    public Map<String, Integer> parse(String formula) {
        int N = formula.length();
        Map<String, Integer> count = new TreeMap();
        while (i < N && formula.charAt(i) != ')') {
            if (formula.charAt(i) == '(') {
                i++;
                for (Map.Entry<String, Integer> entry: parse(formula).entrySet()) {
                    count.put(entry.getKey(), count.getOrDefault(entry.getKey(), 0) + entry.getValue());
                }
            } else {
                int iStart = i++;
                while (i < N && Character.isLowerCase(formula.charAt(i))) {
                    i++;
                }
                String name = formula.substring(iStart, i);
                iStart = i;
                while (i < N && Character.isDigit(formula.charAt(i))) {
                    i++;
                }
                int multiplicity = iStart < i ? Integer.parseInt(formula.substring(iStart, i)) : 1;
                count.put(name, count.getOrDefault(name, 0) + multiplicity);
            }
        }
        int iStart = ++i;
        while (i < N && Character.isDigit(formula.charAt(i))) {
            i++;
        }            
        if (iStart < i) {
            int multiplicity = Integer.parseInt(formula.substring(iStart, i));
            for (String key: count.keySet()) {
                count.put(key, count.get(key) * multiplicity);
            }
        }
        return count;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution {
    int i;
    public String countOfAtoms(String formula) {
        StringBuilder ans = new StringBuilder();
        i = 0;
        Map<String, Integer> count = parse(formula);
        for (String name: count.keySet()) {
            ans.append(name);
            int multiplicity = count.get(name);
            if (multiplicity > 1) {
                ans.append("" + multiplicity);
            }
        }
        return new String(ans);
    }

    public Map<String, Integer> parse(String formula) {
        int N = formula.length();
        Map<String, Integer> count = new TreeMap();
        while (i < N && formula.charAt(i) != ')') {
            if (formula.charAt(i) == '(') {
                i++;
                for (Map.Entry<String, Integer> entry: parse(formula).entrySet()) {
                    count.put(entry.getKey(), count.getOrDefault(entry.getKey(), 0) + entry.getValue());
                }
            } else {
                int iStart = i++;
                while (i < N && Character.isLowerCase(formula.charAt(i))) {
                    i++;
                }
                String name = formula.substring(iStart, i);
                iStart = i;
                while (i < N && Character.isDigit(formula.charAt(i))) {
                    i++;
                }
                int multiplicity = iStart < i ? Integer.parseInt(formula.substring(iStart, i)) : 1;
                count.put(name, count.getOrDefault(name, 0) + multiplicity);
            }
        }
        int iStart = ++i;
        while (i < N && Character.isDigit(formula.charAt(i))) {
            i++;
        }            
        if (iStart < i) {
            int multiplicity = Integer.parseInt(formula.substring(iStart, i));
            for (String key: count.keySet()) {
                count.put(key, count.get(key) * multiplicity);
            }
        }
        return count;
    }
}
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(N^2)$

> **Reason**: where N is the length of the formula. It is $O(N)$ to parse through the formula, but each of $O(N)$ multiplicities after a bracket may increment the count of each name in the formula (inside those brackets), leading to an $O(N^2)$ complexity.

### Space Complexity: $O(N)$

> **Reason**: We aren't recording more intermediate information than what is contained in the formula.

### Approach 2: Stack
#### Intuition and Algorithm

Instead of recursion, we can simulate the call stack by using a stack of `counts` directly.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
#include <iostream>
#include <stack>
#include <map>
#include <string>
#include <cctype>

class Solution {
public:
    std::string countOfAtoms(std::string formula) {
        int N = formula.length();
        std::stack<std::map<std::string, int>> stack;
        std::map<std::string, int> top_map;
        stack.push(top_map);

        for (int i = 0; i < N;) {
            if (formula[i] == '(') {
                std::map<std::string, int> new_map;
                stack.push(new_map);
                i++;
            } else if (formula[i] == ')') {
                std::map<std::string, int> top = stack.top();
                stack.pop();
                int iStart = ++i, multiplicity = 1;
                while (i < N && std::isdigit(formula[i])) {
                    i++;
                }
                if (i > iStart) {
                    multiplicity = std::stoi(formula.substr(iStart, i - iStart));
                }
                for (auto it = top.begin(); it != top.end(); ++it) {
                    int v = it->second;
                    stack.top()[it->first] = stack.top().count(it->first) ? stack.top()[it->first] + v * multiplicity : v * multiplicity;
                }
            } else {
                int iStart = i++;
                while (i < N && std::islower(formula[i])) {
                    i++;
                }
                std::string name = formula.substr(iStart, i - iStart);
                iStart = i;
                while (i < N && std::isdigit(formula[i])) {
                    i++;
                }
                int multiplicity = i > iStart ? std::stoi(formula.substr(iStart, i - iStart)) : 1;
                stack.top()[name] = stack.top().count(name) ? stack.top()[name] + multiplicity : multiplicity;
            }
        }

        std::string ans;
        for (auto it = stack.top().begin(); it != stack.top().end(); ++it) {
            ans += it->first;
            int multiplicity = it->second;
            if (multiplicity > 1) {
                ans += std::to_string(multiplicity);
            }
        }
        return ans;
    }
};


```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public String countOfAtoms(String formula) {
        int N = formula.length();
        Stack<Map<String, Integer>> stack = new Stack();
        stack.push(new TreeMap());

        for (int i = 0; i < N;) {
            if (formula.charAt(i) == '(') {
                stack.push(new TreeMap());
                i++;
            } else if (formula.charAt(i) == ')') {
                Map<String, Integer> top = stack.pop();
                int iStart = ++i, multiplicity = 1;
                while (i < N && Character.isDigit(formula.charAt(i))) {
                    i++;
                }
                if (i > iStart) {
                    multiplicity = Integer.parseInt(formula.substring(iStart, i));
                }
                for (String c: top.keySet()) {
                    int v = top.get(c);
                    stack.peek().put(c, stack.peek().getOrDefault(c, 0) + v * multiplicity);
                }
            } else {
                int iStart = i++;
                while (i < N && Character.isLowerCase(formula.charAt(i))) {
                    i++;
                }
                String name = formula.substring(iStart, i);
                iStart = i;
                while (i < N && Character.isDigit(formula.charAt(i))) {
                    i++;
                }
                int multiplicity = i > iStart ? Integer.parseInt(formula.substring(iStart, i)) : 1;
                stack.peek().put(name, stack.peek().getOrDefault(name, 0) + multiplicity);
            }
        }

        StringBuilder ans = new StringBuilder();
        for (String name: stack.peek().keySet()) {
            ans.append(name);
            int multiplicity = stack.peek().get(name);
            if (multiplicity > 1) {
                ans.append("" + multiplicity);
            }
        }
        return new String(ans);
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution(object):
    def countOfAtoms(self, formula):
        N = len(formula)
        stack = [collections.Counter()]
        i = 0
        while i < N:
            if formula[i] == '(':
                stack.append(collections.Counter())
                i += 1
            elif formula[i] == ')':
                top = stack.pop()
                i += 1
                i_start = i
                while i < N and formula[i].isdigit(): i += 1
                multiplicity = int(formula[i_start: i] or 1)
                for name, v in top.items():
                    stack[-1][name] += v * multiplicity
            else:
                i_start = i
                i += 1
                while i < N and formula[i].islower(): i += 1
                name = formula[i_start: i]
                i_start = i
                while i < N and formula[i].isdigit(): i += 1
                multiplicity = int(formula[i_start: i] or 1)
                stack[-1][name] += multiplicity

        return "".join(name + (str(stack[-1][name]) if stack[-1][name] > 1 else '')
                       for name in sorted(stack[-1]))
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(N^2)$

> **Reason**: where N is the length of the formula. It is $O(N)$ to parse through the formula, but each of $O(N)$ multiplicities after a bracket may increment the count of each name in the formula (inside those brackets), leading to an $O(N^2)$ complexity.

### Space Complexity: $O(N)$

> **Reason**: We aren't recording more intermediate information than what is contained in the formula.


## References

- **LeetCode Problem**: [Number of Atoms](https://leetcode.com/problems/number-of-atoms/description/)

- **Solution Link**: [Number of Atoms](https://leetcode.com/problems/number-of-atoms/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>