---
id: concatenated-words
title: Concatenated Words
sidebar_label: 0472 - Concatenated Words Hello
tags:
- Array
- String
- Dynamic Programming
- Depth-First Search
- Trie
description: "This is a solution to the Concatenated Words problem on LeetCode."
---

## Problem Description
Given an array of strings words (without duplicates), return all the concatenated words in the given list of words.
A concatenated word is defined as a string that is comprised entirely of at least two shorter words (not necessarily distinct) in the given array.

### Examples

**Example 1:**
```
Input: words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]
Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats"; 
"dogcatsdog" can be concatenated by "dog", "cats" and "dog"; 
"ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".
```

**Example 2:**
```
Input: words = ["cat","dog","catdog"]
Output: ["catdog"]
```

### Constraints
- `1 <= words.length <= 10^4`
- `1 <= words[i].length <= 30`
- words[i] consists of only lowercase English letters.
- All the strings of words are unique.
- `1 <= sum(words[i].length) <= 10^5`

## Solution for Concatenated Words
  
### Intuition
- The main intuition behind this solution is to use dynamic programming to check if a word can be split into smaller words that are all present in the dictionary. By recursively checking each substring and memoizing the results, we can efficiently determine if a word is a concatenated word.

### Approach
- Dictionary Setup: Store all words from the input words vector into a set mp for quick lookup. This set will help in O(1) average time complexity for checking if a substring is a valid word.

#### Recursive Function (solve):

- Parameters: The function solve takes the word (op), the current index (idx), the count of words found so far (cnt), and a memoization vector (memo).
- Base Case: If idx reaches the end of the word (op.size()), it checks if the count of words (cnt) is at least 2. This ensures that the word is formed by concatenating at least two smaller words.
- Memoization Check: If the result for the current index is already computed (memo[idx] != -1), return the stored result to avoid redundant calculations.
- Substring Generation: Iterate from the current index to the end of the word, generating substrings (temp). For each substring, check if it exists in the set mp.
- Recursive Check: If a valid substring is found, recursively call solve on the remaining part of the word (i + 1). If this recursive call returns true, store the result in memo[idx] and return true.

#### Main Function (findAllConcatenatedWordsInADict):

- Initialization: Initialize an empty vector ans to store the result and populate the set mp with all words from the input.
- Processing Each Word: For each word in the input:
- Initialize a memoization vector memo with -1 indicating that no computations have been done for those indices.
- Call the solve function starting from index 0 and count 0.
- If solve returns true, add the word to the result vector ans.


- Return Result: After processing all words, return the result vector ans containing all concatenated words.


<Tabs>
  <TabItem value="Solution" label="Solution">

#### Implementation

```jsx live
function Solution() {
const findAllConcatenatedWordsInADict = (words) => {
    const st = new Set(words);

    const solve = (op, idx, cnt, memo) => {
        if (idx === op.length) {
            return cnt >= 2;
        }

        if (memo[idx] !== -1) {
            return memo[idx] === 1;
        }

        let temp = "";
        for (let i = idx; i < op.length; i++) {
            temp += op[i];
            if (st.has(temp)) {
                if (solve(op, i + 1, cnt + 1, memo)) {
                    memo[idx] = 1;
                    return true;
                }
            }
        }
        memo[idx] = 0;
        return false;
    };

    const ans = [];
    for (const word of words) {
        const memo = new Array(word.length).fill(-1);
        if (solve(word, 0, 0, memo)) {
            ans.push(word);
        }
    }
    return ans;
};

const input = ["cat", "cats", "catsdogcats", "dog", "dogcatsdog", "hippopotamuses", "rat", "ratcatdogcat"];
const output = findAllConcatenatedWordsInADict(input);
  return (
    <div>
      <p>
        <b>Input: </b>{JSON.stringify(input)}
      </p>
      <p>
        <b>Output:</b> {output.toString()}
      </p>
    </div>
  );
}
```

### Code in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```javascript
   const findAllConcatenatedWordsInADict = (words) => {
    const st = new Set(words);

    const solve = (op, idx, cnt, memo) => {
        if (idx === op.length) {
            return cnt >= 2;
        }

        if (memo[idx] !== -1) {
            return memo[idx] === 1;
        }

        let temp = "";
        for (let i = idx; i < op.length; i++) {
            temp += op[i];
            if (st.has(temp)) {
                if (solve(op, i + 1, cnt + 1, memo)) {
                    memo[idx] = 1;
                    return true;
                }
            }
        }
        memo[idx] = 0;
        return false;
    };

    const ans = [];
    for (const word of words) {
        const memo = new Array(word.length).fill(-1);
        if (solve(word, 0, 0, memo)) {
            ans.push(word);
        }
    }
    return ans;
};

```
  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@hiteshgahanolia"/> 
   ```typescript
   class Solution {
    private st: Set<string>;

    constructor() {
        this.st = new Set<string>();
    }

    private solve(op: string, idx: number, cnt: number, memo: number[]): boolean {
        if (idx === op.length) {
            return cnt >= 2;
        }

        if (memo[idx] !== -1) {
            return memo[idx] === 1;
        }

        let temp = "";
        for (let i = idx; i < op.length; i++) {
            temp += op[i];
            if (this.st.has(temp)) {
                if (this.solve(op, i + 1, cnt + 1, memo)) {
                    memo[idx] = 1;
                    return true;
                }
            }
        }
        memo[idx] = 0;
        return false;
    }

    public findAllConcatenatedWordsInADict(words: string[]): string[] {
        const ans: string[] = [];
        this.st = new Set(words);

        for (const word of words) {
            const memo = new Array(word.length).fill(-1);
            if (this.solve(word, 0, 0, memo)) {
                ans.push(word);
            }
        }

        return ans;
    }
}

// Example usage:
const solution = new Solution();
const words = ["cat", "cats", "catsdogcats", "dog", "dogcatsdog", "hippopotamuses", "rat", "ratcatdogcat"];
const result = solution.findAllConcatenatedWordsInADict(words);
console.log(result);

 ```
  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
   class Solution:
    def __init__(self):
        self.st = set()
    
    def solve(self, op, idx, cnt, memo):
        if idx == len(op):
            return cnt >= 2
        
        if memo[idx] != -1:
            return memo[idx]
        
        temp = ""
        for i in range(idx, len(op)):
            temp += op[i]
            if temp in self.st:
                if self.solve(op, i + 1, cnt + 1, memo):
                    memo[idx] = True
                    return True
        
        memo[idx] = False
        return False
    
    def findAllConcatenatedWordsInADict(self, words):
        ans = []
        self.st = set(words)
        
        for word in words:
            memo = [-1] * len(word)
            if self.solve(word, 0, 0, memo):
                ans.append(word)
        
        return ans

# Example usage:
solution = Solution()
words = ["cat", "cats", "catsdogcats", "dog", "dogcatsdog", "hippopotamuses", "rat", "ratcatdogcat"]
result = solution.findAllConcatenatedWordsInADict(words)
print(result)
    ```
  </TabItem>
 <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
```java
import java.util.*;

class Solution {
    private Set<String> st;

    public Solution() {
        this.st = new HashSet<>();
    }

    private boolean solve(String op, int idx, int cnt, int[] memo) {
        if (idx == op.length()) {
            return cnt >= 2;
        }

        if (memo[idx] != -1) {
            return memo[idx] == 1;
        }

        StringBuilder temp = new StringBuilder();
        for (int i = idx; i < op.length(); i++) {
            temp.append(op.charAt(i));
            if (st.contains(temp.toString())) {
                if (solve(op, i + 1, cnt + 1, memo)) {
                    memo[idx] = 1;
                    return true;
                }
            }
        }
        memo[idx] = 0;
        return false;
    }

    public List<String> findAllConcatenatedWordsInADict(String[] words) {
        List<String> ans = new ArrayList<>();
        Collections.addAll(st, words);
        for (String word : words) {
            int[] memo = new int[word.length()];
            Arrays.fill(memo, -1);
            if (solve(word, 0, 0, memo)) {
                ans.add(word);
            }
        }
        return ans;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        String[] words = {"cat", "cats", "catsdogcats", "dog", "dogcatsdog", "hippopotamuses", "rat", "ratcatdogcat"};
        List<String> result = solution.findAllConcatenatedWordsInADict(words);
        System.out.println(result);
    }
}
```
</TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>

```cpp  
class Solution {
public:
    set<string> st;
    bool solve(string& op, int idx, int cnt, vector<int>& memo) {
        if (idx == op.size()) {
            return cnt >= 2;
        }

        if (memo[idx] != -1) {
            return memo[idx];
        }

        string temp = "";
        for (int i = idx; i < op.size(); i++) {
            temp += op[i];
            if (st.find(temp) != st.end()) {
                if (solve(op, i + 1, cnt + 1, memo)) {
                    return memo[idx] = 1;
                }
            }
        }
        return memo[idx] = 0;
    }

    vector<string> findAllConcatenatedWordsInADict(vector<string>& words) {
        vector<string> ans;
        for (const auto& word : words) {
            st.insert(word);
        }
        for (auto& word : words) {
            vector<int> memo(word.size(), -1);
            if (solve(word, 0, 0, memo)) {
                ans.push_back(word);
            }
        }
        return ans;
    }
};
```
  </TabItem>
  </Tabs>

#### Complexity Analysis
 ##### Time Complexity:
 ##### Initialization:
 - Inserting all words into the set st takes  $O(N⋅L)$ time, where N is the number of words and L is the average length of the words. This is because each word of length 
L takes $O(L)$ time to insert into the set.
 ##### Main Loop:
- For each word, we call the solve function which performs a recursive check. There are N words, and for each word of length L, the solve function is called.
##### Recursive Function (solve):
- In the worst case, the solve function examines each possible substring of the word. This can involve $(L^2)$
  substrings in the worst case (considering all possible start and end points of substrings).For each substring, we check if it exists in the set st, which takes 
  $O(1)$ time on average.
- The memoization array ensures that each index is only computed once, so each index computation takes $O(L)$ time.

 ##### Space Complexity:
 ##### Set (st):
- Storing all words in the set takes $O(N⋅L)$ space.
##### Memoization Array:
- For each word of length L, the memoization array takes $O(L)$ space.In the worst case, all N words are of length L, so the total space required for memoization is $O(N⋅L)$.
##### Recursive Call Stack:
- The depth of the recursion is at most L (the length of the longest word), so the space used by the call stack is $O(L)$.
##### Combining these:
- The total space complexity is $O(N⋅L)$ due to the set and memoization array.
</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Concatenated Words](https://leetcode.com/problems/concatenated-words/description/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/concatenated-words/solutions)

