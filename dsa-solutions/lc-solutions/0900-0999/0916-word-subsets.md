---
id: word-subsets
title: Word Subsets
sidebar_label: 0916 - Word Subsets
tags:
  - String
  - Array
  - Hash Table
description: "This is a solution to the Word Subsets problem on LeetCode."
---

## Problem Description

You are given two string arrays `words1` and `words2`.

A string `b` is a **subset** of string `a` if every letter in `b` occurs in `a` including multiplicity.

- For example, `"wrr"` is a subset of `"warrior"` but is not a subset of `"world"`.

A string `a` from `words1` is **universal** if for every string `b` in `words2`, `b` is a subset of `a`.

Return an array of all the **universal** strings in `words1`. You may return the answer in **any order**.

### Examples

**Example 1:**

```
Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["e","o"]
Output: ["facebook","google","leetcode"]
```
**Example 2:**

```
Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["l","e"]
Output: ["apple","google","leetcode"]
```

### Constraints

- $1 \leq words1.length, words2.length \leq 10^4$
- $1 \leq words1[i].length, words2[i].length \leq 10$
- `words1[i]` and `words2[i]` consist only of lowercase English letters.
- All the strings of `words1` are **unique**.

## Solution for Word Subsets

## Approach: Reduce to Single Word in B
### Intuition

If b is a subset of a, then say a is a superset of b. Also, say $(word)N_{\text{"a"}}(\text{word})$ is the count of the number of $\text{"a"}$'s in the word.

When we check whether a word `wordA` in `A` is a superset of `wordB`, we are individually checking the counts of letters: that for each $\text{letter}$, we have $N_{\text{letter}}(\text{wordA}) \geq N_{\text{letter}}(\text{wordB})$.

Now, if we check whether a word `wordA` is a superset of all words $\text{wordB}_i$, we will check for each letter and each i, that $N_{\text{letter}}(\text{wordA}) \geq N_{\text{letter}}(\text{wordB}_i)$. This is the same as checking $N_{\text{letter}}(\text{wordA}) \geq \max\limits_i(N_{\text{letter}}(\text{wordB}_i))$.

For example, when checking whether `"warrior"` is a superset of words B = `["wrr", "wa", "or"]`, we can combine these words in `B` to form a "maximum" word `"arrow"`, that has the maximum count of every letter in each word in `B`.

### Algorithm

Reduce `B` to a single word `bmax` as described above, then compare the counts of letters between words `a` in `A`, and `bmax`.

### Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
#include <vector>
#include <string>
#include <unordered_map>

class Solution {
public:
    std::vector<std::string> wordSubsets(std::vector<std::string>& A, std::vector<std::string>& B) {
        std::vector<int> bmax(26, 0);
        for (const auto& b : B) {
            std::unordered_map<char, int> bCount = count(b);
            for (int i = 0; i < 26; ++i)
                bmax[i] = std::max(bmax[i], bCount[static_cast<char>('a' + i)]);
        }

        std::vector<std::string> ans;
        for (const auto& a : A) {
            std::unordered_map<char, int> aCount = count(a);
            bool universal = true;
            for (int i = 0; i < 26; ++i) {
                if (aCount[static_cast<char>('a' + i)] < bmax[i]) {
                    universal = false;
                    break;
                }
            }
            if (universal)
                ans.push_back(a);
        }

        return ans;
    }

private:
    std::unordered_map<char, int> count(const std::string& S) {
        std::unordered_map<char, int> ans;
        for (char c : S)
            ans[c]++;
        return ans;
    }
};


```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public List<String> wordSubsets(String[] A, String[] B) {
        int[] bmax = count("");
        for (String b: B) {
            int[] bCount = count(b);
            for (int i = 0; i < 26; ++i)
                bmax[i] = Math.max(bmax[i], bCount[i]);
        }

        List<String> ans = new ArrayList();
        search: for (String a: A) {
            int[] aCount = count(a);
            for (int i = 0; i < 26; ++i)
                if (aCount[i] < bmax[i])
                    continue search;
            ans.add(a);
        }

        return ans;
    }

    public int[] count(String S) {
        int[] ans = new int[26];
        for (char c: S.toCharArray())
            ans[c - 'a']++;
        return ans;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution(object):
    def wordSubsets(self, A, B):
        def count(word):
            ans = [0] * 26
            for letter in word:
                ans[ord(letter) - ord('a')] += 1
            return ans

        bmax = [0] * 26
        for b in B:
            for i, c in enumerate(count(b)):
                bmax[i] = max(bmax[i], c)

        ans = []
        for a in A:
            if all(x >= y for x, y in zip(count(a), bmax)):
                ans.append(a)
        return ans
```
</TabItem>
</Tabs>

### Complexity Analysis

#### Time Complexity: $O(\mathcal{A}+\mathcal{B})$

> **Reason**: where $\mathcal{A}$ and $\mathcal{B}$ is the total amount of information in A and B respectively.

#### Space Complexity: $O(A.length+B.length)$

## Video Solution 

<LiteYouTubeEmbed
    id="ByQfvU8_fvM"
    params="autoplay=1&autohide=1&showinfo=0&rel=0"
    title="Word Subsets | Live Coding with Explanation | Leetcode - 916"
    poster="hqdefault"
    webp />

## References

- **LeetCode Problem**: [Word Subsets](https://leetcode.com/problems/word-subsets/description/)

- **Solution Link**: [Word Subsets](https://leetcode.com/problems/word-subsets/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>