---

id: split-a-string-into-the-max-number-of-unique-substrings
title: Split a String Into the Max Number of Unique Substrings
sidebar_label: 1593-Split-a-String-Into-the-Max-Number-of-Unique-Substrings
tags:
  - String
  - Backtracking
  - Dynamic Programming
  - LeetCode
  - Python
  - JavaScript
  - TypeScript
  - Java
  - C++
description: "This is a solution to the Split a String Into the Max Number of Unique Substrings problem on LeetCode."

---

In this page, we will solve the Split a String Into the Max Number of Unique Substrings problem using different approaches. We will provide the implementation of the solution in JavaScript, TypeScript, Python, Java, C++, and more.

## Problem Description

Given a string `s`, return the maximum number of unique substrings that the given string can be split into.

### Examples

**Example 1:**

```plaintext
Input: s = "ababccc"
Output: 5
Explanation: One way to split s into the maximum number of unique substrings is ["a", "b", "ab", "c", "cc"].
```

**Example 2:**

```plaintext
Input: s = "aba"
Output: 2
Explanation: One way to split s into the maximum number of unique substrings is ["a", "ba"].
```

### Constraints

- $1 <= s.length <= 16$
- `s` contains only lower case English letters.

---

## Solution for Split a String Into the Max Number of Unique Substrings

### Intuition and Approach

To solve this problem, we need to explore all possible ways to split the string into unique substrings. This can be effectively done using a backtracking approach. We will also consider a dynamic programming approach to enhance our solution.

<Tabs>
 <tabItem value="Backtracking" label="Backtracking">

### Approach 1: Backtracking

We use a backtracking approach to explore all possible splits. We maintain a set to keep track of unique substrings and try to split the string at every possible position recursively.

#### Implementation

```jsx live
function splitStringIntoMaxUniqueSubstrings() {
  const s = "ababccc";

  const maxUniqueSplit = function(s) {
    const set = new Set();
    
    function backtrack(start) {
      if (start === s.length) return set.size;

      let maxCount = 0;
      for (let end = start + 1; end <= s.length; end++) {
        const substring = s.substring(start, end);
        if (!set.has(substring)) {
          set.add(substring);
          maxCount = Math.max(maxCount, backtrack(end));
          set.delete(substring);
        }
      }
      return maxCount;
    }
    
    return backtrack(0);
  };

  const result = maxUniqueSplit(s);
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

#### Code in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@manishh12"/>
   ```javascript
    function maxUniqueSplit(s) {
      const set = new Set();
      
      function backtrack(start) {
        if (start === s.length) return set.size;

        let maxCount = 0;
        for (let end = start + 1; end <= s.length; end++) {
          const substring = s.substring(start, end);
          if (!set.has(substring)) {
            set.add(substring);
            maxCount = Math.max(maxCount, backtrack(end));
            set.delete(substring);
          }
        }
        return maxCount;
      }
      
      return backtrack(0);
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    function maxUniqueSplit(s: string): number {
      const set = new Set<string>();
      
      function backtrack(start: number): number {
        if (start === s.length) return set.size;

        let maxCount = 0;
        for (let end = start + 1; end <= s.length; end++) {
          const substring = s.substring(start, end);
          if (!set.has(substring)) {
            set.add(substring);
            maxCount = Math.max(maxCount, backtrack(end));
            set.delete(substring);
          }
        }
        return maxCount;
      }
      
      return backtrack(0);
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    class Solution:
        def maxUniqueSplit(self, s: str) -> int:
            def backtrack(start, seen):
                if start == len(s):
                    return len(seen)
                
                max_count = 0
                for end in range(start + 1, len(s) + 1):
                    substring = s[start:end]
                    if substring not in seen:
                        seen.add(substring)
                        max_count = max(max_count, backtrack(end, seen))
                        seen.remove(substring)
                return max_count
            
            return backtrack(0, set())
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    import java.util.HashSet;
    import java.util.Set;

    class Solution {
        public int maxUniqueSplit(String s) {
            return backtrack(s, 0, new HashSet<>());
        }

        private int backtrack(String s, int start, Set<String> seen) {
            if (start == s.length()) return seen.size();
            
            int maxCount = 0;
            for (int end = start + 1; end <= s.length(); end++) {
                String substring = s.substring(start, end);
                if (!seen.contains(substring)) {
                    seen.add(substring);
                    maxCount = Math.max(maxCount, backtrack(s, end, seen));
                    seen.remove(substring);
                }
            }
            return maxCount;
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    #include <unordered_set>
    #include <string>

    class Solution {
    public:
        int maxUniqueSplit(std::string s) {
            return backtrack(s, 0, std::unordered_set<std::string>());
        }

    private:
        int backtrack(const std::string& s, int start, std::unordered_set<std::string> seen) {
            if (start == s.size()) return seen.size();
            
            int maxCount = 0;
            for (int end = start + 1; end <= s.size(); ++end) {
                std::string substring = s.substr(start, end - start);
                if (seen.find(substring) == seen.end()) {
                    seen.insert(substring);
                    maxCount = std::max(maxCount, backtrack(s, end, seen));
                    seen.erase(substring);
                }
            }
            return maxCount;
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(2^n)$$ due to the exponential number of ways to split the string.
- Space Complexity: $$O(n)$$ for the recursion stack and the set to store unique substrings.

</tabItem>

</Tabs>

:::tip

By using different approaches like backtracking and dynamic programming, we can solve the Split a String Into the Max Number of Unique Substrings problem efficiently. The choice of implementation language and approach depends on the specific requirements and constraints of the problem.

:::

## References

- **LeetCode Problem:** [Split a String Into the Max Number of Unique Substrings](https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/)
- **Solution Link:** [Split a String Into the Max Number of Unique Substrings Solution on LeetCode](https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/solution/)
- **Authors LeetCode Profile:** [Manish Kumar Gupta](https://leetcode.com/_manishh12/)

