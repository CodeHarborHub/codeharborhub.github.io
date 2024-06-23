---
id: score-of-a-string
title: Score of a string
sidebar_label: 3110 - Score of a string 


description: "This is a solution to the Two Score of a string on LeetCode."
---

In this page, we will solve the LeetCode Problem 3110, titled `Score of a String`, using three different approaches: brute force, sliding window, and optimized iteration technique. We will provide the implementation of the solution in JavaScript, TypeScript, Python, Java, C++, and more.

## Problem Description

You are given a string `s`. The **score** of a string is defined as the sum of the absolute difference between the **ASCII** values of adjacent characters.

### Examples

**Example 1:**

```plaintext
Input: s = "hello"
Output: 13
```

**Example 2:**

```plaintext
Input: "zaz"
Output: 50
```


### Constraints

- `2 <= s.length <= 100`
- `s` consists only of lowercase English letters.


---

## Solution for Two Sum Problem

### Intuition and Approach


To solve the problem, `Score of a String`, we can use a straightforward approach where you iterate through the string and calculate the absolute difference between the ASCII values of adjacent characters, then sum these differences. This approach is efficient and straightforward. Below is a step-by-step approach:

<Tabs>
 <tabItem value="Brute Force" label="Brute Force">
  
### Approach 1: Brute Force (Naive)

The brute force approach for the `Score of a String` problem is straightforward. We iterate through each character `s[i]` of the string s and compute the absolute difference with the next character `s[i + 1]`. We then sum these differences to get the total score of the string.

#### Implementation

```jsx live
function scoreOfStringProblem() {
  const s = "hello"; // Example input string
  const scoreOfString = function (s) {
    let score = 0;
    for (let i = 0; i < s.length - 1; i++) {
      score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
    }
    return score;
  };

  const result = scoreOfString(s);
  return (
    <div>
      <p>
        <b>Input:</b> s = "{s}"
      </p>
      <p>
        <b>Output:</b> {result}
      </p>
    </div>
  );
}

```

#### Codes in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@ajay-dhangar"/>
   ```javascript
   function scoreOfString(s) {
    let score = 0;
    for (let i = 0; i < s.length - 1; i++) {
        score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
    }
    return score;
}
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@ajay-dhangar"/> 
   ```typescript
    function scoreOfString(s: string): number {
    let score = 0;
    for (let i = 0; i < s.length - 1; i++) {
        score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
    }
    return score;
}
    ```

  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@ajay-dhangar"/>
   ```python
    class Solution:
     def score_of_string(s):
    score = 0
    for i in range(len(s) - 1):
        score += abs(ord(s[i]) - ord(s[i + 1]))
    return score
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@ajay-dhangar"/>
   ```java
    class Solution {
           public int scoreOfString(String s) {
        int score = 0;
        for (int i = 0; i < s.length() - 1; i++) {
            score += Math.abs(s.charAt(i) - s.charAt(i + 1));
        }
        return score;
    }
        
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@ajay-dhangar"/>
   ```cpp
    class Solution {
    public:
       int scoreOfString(const std::string& s) {
    int score = 0;
    for (size_t i = 0; i < s.length() - 1; ++i) {
        score += std::abs(s[i] - s[i + 1]);
    }
    return score;
}
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: O(n)
- Space Complexity : O(n)
- Where `n` is the length of the input string `s`. 
- The time complexity is 𝑂(𝑛) because we are iterating through the string once.
- The space complexity is 𝑂(1) because we are not using any extra space beyond a few variables.
- This approach is efficient and can handle large input strings effectively.


</tabItem>


</Tabs>

:::tip Note


To efficiently calculate the score of a string based on the absolute differences between adjacent characters, you can iterate through the string once and accumulate the differences. This approach ensures that you compute the score in linear time, O(n), where n is the length of the string. Avoiding nested loops or unnecessary computations will lead to a more efficient solution.

:::

## References

- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/score-of-a-string/)
