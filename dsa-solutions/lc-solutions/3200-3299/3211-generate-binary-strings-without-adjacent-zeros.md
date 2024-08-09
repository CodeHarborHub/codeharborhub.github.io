---
id: generate-binary-strings-without-adjacent-zeros
title: 3211. Generate Binary Strings Without Adjacent Zeros
sidebar_label:  3211. Generate Binary Strings Without Adjacent Zeros
tags:
- String
- Bit Manipulation
- Recursion

description: "This is a solution to the 3211. Generate Binary Strings Without Adjacent Zeros."
---

## Problem Description
You are given a positive integer n.
A binary string x is valid if all 
substrings
 of x of length 2 contain at least one "1".

Return all valid strings with length n, in any order.
 ### Examples
**Example 1:**
```
Input: n = 3

Output: ["010","011","101","110","111"]

Explanation:

The valid strings of length 3 are: "010", "011", "101", "110", and "111".
```

**Example 2:**
```
Input: n = 1

Output: ["0","1"]

Explanation:

The valid strings of length 1 are: "0" and "1".
```

### Constraints
- `1 <= n <= 18`
## Solution for 3211. Generate Binary Strings Without Adjacent Zeros

To solve this problem, we can use DFS to check recursively all possible solutions.

## Approach

1. Start with an empty string and begin at position `i = 0`.
2. For each position `i` in the binary string of length `n`, consider two possible values: `0` and `1`.
3. 
3.1. If you choose `0`, ensure the previous character (at position `i-1`) is `1` to maintain validity (i.e., avoid consecutive 00).
3.2. If valid, recursively move to the next position.
4. If you choose `1`, it’s always valid. Recursively move to the next position.
5. When you reach the end of the string (length `n`), add the valid string to the result.
6. Continue until all valid strings of length `n` are generated.
7. Collect and return all the valid strings.

### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@nagalakshmi08"/>

```cpp
class Solution {
public:
    vector<string> validStrings(int n) {
        vector<string> ans;
        string t;
        auto dfs = [&](auto&& dfs, int i) {
            if (i >= n) {
                ans.emplace_back(t);
                return;
            }
            for (int j = 0; j < 2; ++j) {
                if ((j == 0 && (i == 0 || t[i - 1] == '1')) || j == 1) {
                    t.push_back('0' + j);
                    dfs(dfs, i + 1);
                    t.pop_back();
                }
            }
        };
        dfs(dfs, 0);
        return ans;
    }
};
```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@nagalakshmi08"/>
```java
class Solution {
    private List<String> ans = new ArrayList<>();
    private StringBuilder t = new StringBuilder();
    private int n;

    public List<String> validStrings(int n) {
        this.n = n;
        dfs(0);
        return ans;
    }

    private void dfs(int i) {
        if (i >= n) {
            ans.add(t.toString());
            return;
        }
        for (int j = 0; j < 2; ++j) {
            if ((j == 0 && (i == 0 || t.charAt(i - 1) == '1')) || j == 1) {
                t.append(j);
                dfs(i + 1);
                t.deleteCharAt(t.length() - 1);
            }
        }
    }
}
```

</TabItem>

<TabItem value="Python" label="Python">
<SolutionAuthor name="@nagalakshmi08"/>

```python
class Solution:
    def validStrings(self, n: int) -> List[str]:
        def dfs(i: int):
            if i >= n:
                ans.append("".join(t))
                return
            for j in range(2):
                if (j == 0 and (i == 0 or t[i - 1] == "1")) or j == 1:
                    t.append(str(j))
                    dfs(i + 1)
                    t.pop()

        ans = []
        t = []
        dfs(0)
        return ans
```

</TabItem>
</Tabs>

#### Complexity Analysis

- **Time Complexity**: The time complexity is $O(n \times 2^n)$ , where n is the length of the string.
- **Space Complexity**: Ignoring the space consumption of the answer array, the space complexity is $O(n)$ .

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['nagalakshmi08'].map(username => (
 <Author key={username} username={username} />
))}
</div>
```