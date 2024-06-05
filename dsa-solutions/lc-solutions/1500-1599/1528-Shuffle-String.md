---

id: shuffle-string
title: Shuffle String Solution
sidebar_label: 1528-Shuffle-String
tags:
  - Array
  - String
  - LeetCode
  - JavaScript
  - TypeScript
  - Python
  - Java
  - C++
description: "This is a solution to the Shuffle String problem on LeetCode."

---

In this page, we will solve the Shuffle String problem using different approaches: simple iteration and an optimized version using map. We will provide the implementation of the solution in JavaScript, TypeScript, Python, Java, C++, and more.

## Problem Description

You are given a string `s` and an integer array `indices` of the same length. The string `s` will be shuffled such that the character at the `i`th position moves to `indices[i]` in the shuffled string.

Return the shuffled string.

### Examples

**Example 1:**

```plaintext
Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Output: "leetcode"
Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
```

**Example 2:**

```plaintext
Input: s = "abc", indices = [0,1,2]
Output: "abc"
Explanation: After shuffling, each character remains in its position.
```

### Constraints

- `s.length == indices.length == n`
- `1 <= n <= 100`
- `s` consists of only lowercase English letters.
- `0 <= indices[i] < n`
- All values of `indices` are unique.

---

## Solution for Shuffle String Problem

### Intuition and Approach

The problem can be solved by creating a new array for the shuffled string, placing each character at the position specified by the `indices` array. We will demonstrate a simple iteration approach and an optimized version using map.

<Tabs>
 <tabItem value="Simple Iteration" label="Simple Iteration">

### Approach 1: Simple Iteration

We iterate through the string and place each character at the position specified by the `indices` array.

#### Implementation

```jsx live
function shuffleString() {
  const s = "codeleet";
  const indices = [4, 5, 6, 7, 0, 2, 1, 3];

  const restoreString = function(s, indices) {
    let shuffled = new Array(s.length);
    for (let i = 0; i < s.length; i++) {
      shuffled[indices[i]] = s[i];
    }
    return shuffled.join('');
  };

  const result = restoreString(s, indices);
  return (
    <div>
      <p>
        <b>Input:</b> s = "{s}", indices = {JSON.stringify(indices)}
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
    function restoreString(s, indices) {
      let shuffled = new Array(s.length);
      for (let i = 0; i < s.length; i++) {
        shuffled[indices[i]] = s[i];
      }
      return shuffled.join('');
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    function restoreString(s: string, indices: number[]): string {
      let shuffled: string[] = new Array(s.length);
      for (let i = 0; i < s.length; i++) {
        shuffled[indices[i]] = s[i];
      }
      return shuffled.join('');
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    class Solution:
        def restoreString(self, s: str, indices: List[int]) -> str:
            shuffled = [''] * len(s)
            for i, index in enumerate(indices):
                shuffled[index] = s[i]
            return ''.join(shuffled)
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    class Solution {
        public String restoreString(String s, int[] indices) {
            char[] shuffled = new char[s.length()];
            for (int i = 0; i < s.length(); i++) {
                shuffled[indices[i]] = s.charAt(i);
            }
            return new String(shuffled);
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    class Solution {
    public:
        string restoreString(string s, vector<int>& indices) {
            string shuffled(s.length(), ' ');
            for (int i = 0; i < s.length(); i++) {
                shuffled[indices[i]] = s[i];
            }
            return shuffled;
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n)$$, where `n` is the length of the string.
- Space Complexity: $$O(n)$$, as we are using an additional array to store the shuffled string.

</tabItem>

<tabItem value="Using Map" label="Using Map">

### Approach 2: Using Map

We can use a map to store the characters with their respective indices and then reconstruct the shuffled string.

#### Implementation

```jsx live
function shuffleString() {
  const s = "codeleet";
  const indices = [4, 5, 6, 7, 0, 2, 1, 3];

  const restoreString = function(s, indices) {
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
      map.set(indices[i], s[i]);
    }
    let shuffled = '';
    for (let i = 0; i < s.length; i++) {
      shuffled += map.get(i);
    }
    return shuffled;
  };

  const result = restoreString(s, indices);
  return (
    <div>
      <p>
        <b>Input:</b> s = "{s}", indices = {JSON.stringify(indices)}
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
    function restoreString(s, indices) {
      let map = new Map();
      for (let i = 0; i < s.length; i++) {
        map.set(indices[i], s[i]);
      }
      let shuffled = '';
      for (let i = 0; i < s.length; i++) {
        shuffled += map.get(i);
      }
      return shuffled;
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    function restoreString(s: string, indices: number[]): string {
      let map: Map<number, string> = new Map();
      for (let i = 0; i < s.length; i++) {
        map.set(indices[i], s[i]);
      }
      let shuffled: string = '';
      for (let i = 0; i < s.length; i++) {
        shuffled += map.get(i);
      }
      return shuffled;
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    class Solution:
        def restoreString(self, s: str, indices: List[int]) -> str:
            map = {indices[i]: s[i] for i in range(len(s))}
            shuffled = ''.join(map[i] for i in range(len(s)))
            return shuffled
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    import java.util.HashMap;
    import java.util.Map;

    class Solution {
        public String restoreString(String s, int[] indices) {
            Map<Integer, Character> map = new HashMap<>();
            for (int i = 0; i < s.length(); i++) {
                map.put(indices[i], s.charAt(i));
            }
            StringBuilder shuffled = new StringBuilder();
            for (int i = 0; i < s.length(); i++) {
                shuffled.append(map.get(i));
            }
            return shuffled.toString();
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    #include <unordered_map>
    #include <string>

    class Solution {
    public:
        string restoreString(string s, vector<int>& indices) {
            unordered_map<int, char> map;
            for (int i = 0; i < s.length(); i++) {
                map[indices[i]] = s[i];
            }
            string shuffled(s.length(), ' ');
            for (int i = 0; i < s.length(); i++) {
                shuffled[i] = map[i];
            }
            return shuffled;
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n)$$, where `n` is the length of the string.
- Space Complexity: $$O(n)$$, as we are using a map to store the characters.

</tabItem>
</Tabs>

:::tip Note

By using both simple iteration and map-based approaches, we can efficiently solve the Shuffle String problem. The choice between the two approaches depends on the specific requirements and constraints of the problem.

:::

## References

- **LeetCode Problem:** [Shuffle String](https://leetcode.com/problems/shuffle-string/)
- **Solution Link:** [Shuffle String Solution on LeetCode](https://leetcode.com/problems/shuffle-string/solution/)
- **Authors LeetCode Profile:** [Manish Kumar Gupta](https://leetcode.com/_manishh12/)


