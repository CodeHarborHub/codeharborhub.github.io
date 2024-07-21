---
id: prefix-and-suffix-search
title: Prefix and Suffix Search
sidebar_label: 0745 - Prefix and Suffix Search
tags:
  - String
  - Hash Table
  - Depth-First Search
description: "This is a solution to the Prefix and Suffix Search problem on LeetCode."
---

## Problem Description

Design a special dictionary that searches the words in it by a prefix and a suffix.

Implement the `WordFilter` class:

- `WordFilter(string[] words)` Initializes the object with the `words` in the dictionary.
- `f(string pref, string suff)` Returns the index of the word in the dictionary, which has the prefix `pref` and the suffix `suff`. If there is more than one valid index, return **the largest** of them. If there is no such word in the dictionary, return `-1`.

### Examples

**Example 1:**

```
Input
["WordFilter", "f"]
[[["apple"]], ["a", "e"]]
Output
[null, 0]
Explanation
WordFilter wordFilter = new WordFilter(["apple"]);
wordFilter.f("a", "e"); // return 0, because the word at index 0 has prefix = "a" and suffix = "e".
```

### Constraints

- $1 \leq words.length \leq 10^4$
- $1 \leq words[i].length \leq 7$
- $1 \leq pref.length, suff.length \leq 7$
- `words[i]`, pref and suff consist of lowercase English letters only.
- At most $10^4$ calls will be made to the function `f`.

## Solution for Prefix and Suffix Search

## Approach 1: Trie + Set Intersection
### Intuition and Algorithm

We use two tries to separately find all words that match the prefix, plus all words that match the suffix. Then, we try to find the highest-weight element in the intersection of these sets.

Of course, these sets could still be large, so we might TLE if we aren't careful.

### Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
#include <vector>
#include <unordered_set>

class TrieNode {
public:
    TrieNode* children[26];
    std::unordered_set<int> weight;
    TrieNode() {
        for (int i = 0; i < 26; i++) {
            children[i] = nullptr;
        }
    }
};

class WordFilter {
private:
    TrieNode trie1, trie2;
public:
    WordFilter(std::vector<std::string>& words) {
        int wt = 0;
        for (const std::string& word : words) {
            TrieNode* cur = &trie1;
            cur->weight.insert(wt);
            for (char c : word) {
                if (cur->children[c - 'a'] == nullptr) {
                    cur->children[c - 'a'] = new TrieNode();
                }
                cur = cur->children[c - 'a'];
                cur->weight.insert(wt);
            }

            cur = &trie2;
            cur->weight.insert(wt);
            for (int j = word.length() - 1; j >= 0; j--) {
                char c = word[j];
                if (cur->children[c - 'a'] == nullptr) {
                    cur->children[c - 'a'] = new TrieNode();
                }
                cur = cur->children[c - 'a'];
                cur->weight.insert(wt);
            }
            wt++;
        }
    }

    int f(std::string prefix, std::string suffix) {
        TrieNode* cur1 = &trie1, *cur2 = &trie2;
        for (char c : prefix) {
            if (cur1->children[c - 'a'] == nullptr) {
                return -1;
            }
            cur1 = cur1->children[c - 'a'];
        }
        for (int j = suffix.length() - 1; j >= 0; j--) {
            char c = suffix[j];
            if (cur2->children[c - 'a'] == nullptr) {
                return -1;
            }
            cur2 = cur2->children[c - 'a'];
        }

        int ans = -1;
        for (int w1 : cur1->weight) {
            if (w1 > ans && cur2->weight.count(w1)) {
                ans = w1;
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
class WordFilter {
    TrieNode trie1, trie2;
    public WordFilter(String[] words) {
        trie1 = new TrieNode();
        trie2 = new TrieNode();
        int wt = 0;
        for (String word: words) {
            char[] ca = word.toCharArray();

            TrieNode cur = trie1;
            cur.weight.add(wt);
            for (char letter: ca) {
                if (cur.children[letter - 'a'] == null) {
                    cur.children[letter - 'a'] = new TrieNode();
                }
                cur = cur.children[letter - 'a'];
                cur.weight.add(wt);
            }

            cur = trie2;
            cur.weight.add(wt);
            for (int j = ca.length - 1; j >= 0; --j) {
                char letter = ca[j];
                if (cur.children[letter - 'a'] == null) {
                    cur.children[letter - 'a'] = new TrieNode();
                }
                cur = cur.children[letter - 'a'];
                cur.weight.add(wt);
            }
            wt++;
        }
    }

    public int f(String prefix, String suffix) {
        TrieNode cur1 = trie1, cur2 = trie2;
        for (char letter: prefix.toCharArray()) {
            if (cur1.children[letter - 'a'] == null) {
                return -1;
            }
            cur1 = cur1.children[letter - 'a'];
        }
        char[] ca = suffix.toCharArray();
        for (int j = ca.length - 1; j >= 0; --j) {
            char letter = ca[j];
            if (cur2.children[letter - 'a'] == null) {
                return -1;
            }
            cur2 = cur2.children[letter - 'a'];
        }

        int ans = -1;
        for (int w1: cur1.weight) {
            if (w1 > ans && cur2.weight.contains(w1)) {
                ans = w1;
            }
        }

        return ans;
    }
}

class TrieNode {
    TrieNode[] children;
    Set<Integer> weight;
    public TrieNode() {
        children = new TrieNode[26];
        weight = new HashSet();
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
Trie = lambda: collections.defaultdict(Trie)
WEIGHT = False

class WordFilter:
    def __init__(self, words: List[str]):
        self.trie1 = Trie() #prefix
        self.trie2 = Trie() #suffix
        for weight, word in enumerate(words):
            cur = self.trie1
            self.addw(cur, weight)
            for letter in word:
                cur = cur[letter]
                self.addw(cur, weight)

            cur = self.trie2
            self.addw(cur, weight)
            for letter in word[::-1]:
                cur = cur[letter]
                self.addw(cur, weight)

    def addw(self, node, w):
        if WEIGHT not in node:
            node[WEIGHT] = {w}
        else:
            node[WEIGHT].add(w)

    def f(self, pref: str, suff: str) -> int:
        cur1 = self.trie1
        for letter in pref:
            if letter not in cur1:
                return -1
            cur1 = cur1[letter]

        cur2 = self.trie2
        for letter in suff[::-1]:
            if letter not in cur2: r
                eturn -1
            cur2 = cur2[letter]

        return max(cur1[WEIGHT] & cur2[WEIGHT], default=-1)
```
</TabItem>
</Tabs>

### Complexity Analysis

#### Time Complexity: $O(NK+Q(N+K))$

> **Reason**: where `N` is the number of words, `K` is the maximum length of a word, and Q is the number of queries. If we use memoization in our solution, we could produce tighter bounds for this complexity, as the complex queries are somewhat disjoint.

#### Space Complexity: $O(NK)$

> **Reason**: the size of the tries.

## Approach 2: Paired Trie
### Intuition and Algorithm

Say we are inserting the word `apple`. We could insert `('a', 'e'), ('p', 'l'), ('p', 'p'), ('l', 'p'), ('e', 'a')` into our trie. Then, if we had equal length queries like `prefix = "ap", suffix = "le"`, we could find the node `trie['a', 'e']['p', 'l']` in our trie. This seems promising.

What about queries that aren't equal? We should just insert them like normal. For example, to capture a case like `prefix = "app", suffix = "e"`, we could create nodes `trie['a', 'e']['p', None]['p', None]`.

After inserting these pairs into our trie, our searches are straightforward.

### Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
#include <unordered_map>

class TrieNode {
public:
    std::unordered_map<int, TrieNode*> children;
    int weight;
    TrieNode() {
        weight = 0;
    }
};

class WordFilter {
private:
    TrieNode trie;

public:
    WordFilter(std::vector<std::string>& words) {
        int wt = 0;
        for (const std::string& word : words) {
            TrieNode* cur = &trie;
            cur->weight = wt;
            int L = word.length();
            for (int i = 0; i < L; ++i) {
                TrieNode* tmp = cur;
                for (int j = i; j < L; ++j) {
                    int code = (word[j] - '`') * 27;
                    if (tmp->children.count(code) == 0) {
                        tmp->children[code] = new TrieNode();
                    }
                    tmp = tmp->children[code];
                    tmp->weight = wt;
                }

                tmp = cur;
                for (int k = L - 1 - i; k >= 0; --k) {
                    int code = (word[k] - '`');
                    if (tmp->children.count(code) == 0) {
                        tmp->children[code] = new TrieNode();
                    }
                    tmp = tmp->children[code];
                    tmp->weight = wt;
                }

                int code = (word[i] - '`') * 27 + (word[L - 1 - i] - '`');
                if (cur->children.count(code) == 0) {
                    cur->children[code] = new TrieNode();
                }
                cur = cur->children[code];
                cur->weight = wt;
            }
            wt++;
        }
    }

    int f(std::string prefix, std::string suffix) {
        TrieNode* cur = &trie;
        int i = 0, j = suffix.length() - 1;
        while (i < prefix.length() || j >= 0) {
            char c1 = i < prefix.length() ? prefix[i] : '`';
            char c2 = j >= 0 ? suffix[j] : '`';
            int code = (c1 - '`') * 27 + (c2 - '`');
            if (cur->children.count(code) == 0) {
                return -1;
            }
            cur = cur->children[code];
            i++;
            j--;
        }
        return cur->weight;
    }
};


```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class WordFilter {
    TrieNode trie;
    public WordFilter(String[] words) {
        trie = new TrieNode();
        int wt = 0;
        for (String word: words) {
            TrieNode cur = trie;
            cur.weight = wt;
            int L = word.length();
            char[] chars = word.toCharArray();
            for (int i = 0; i < L; ++i) {

                TrieNode tmp = cur;
                for (int j = i; j < L; ++j) {
                    int code = (chars[j] - '`') * 27;
                    if (tmp.children.get(code) == null) {
                        tmp.children.put(code, new TrieNode());
                    }
                    tmp = tmp.children.get(code);
                    tmp.weight = wt;
                }

                tmp = cur;
                for (int k = L - 1 - i; k >= 0; --k) {
                    int code = (chars[k] - '`');
                    if (tmp.children.get(code) == null) {
                        tmp.children.put(code, new TrieNode());
                    }
                    tmp = tmp.children.get(code);
                    tmp.weight = wt;
                }

                int code = (chars[i] - '`') * 27 + (chars[L - 1 - i] - '`');
                if (cur.children.get(code) == null) {
                    cur.children.put(code, new TrieNode());
                }
                cur = cur.children.get(code);
                cur.weight = wt;

            }
            wt++;
        }
    }

    public int f(String prefix, String suffix) {
        TrieNode cur = trie;
        int i = 0, j = suffix.length() - 1;
        while (i < prefix.length() || j >= 0) {
            char c1 = i < prefix.length() ? prefix.charAt(i) : '`';
            char c2 = j >= 0 ? suffix.charAt(j) : '`';
            int code = (c1 - '`') * 27 + (c2 - '`');
            cur = cur.children.get(code);
            if (cur == null) {
                return -1;
            }
            i++;
            j--;
        }
        return cur.weight;
    }
}

class TrieNode {
    Map<Integer, TrieNode> children;
    int weight;
    public TrieNode() {
        children = new HashMap();
        weight = 0;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
Trie = lambda: collections.defaultdict(Trie)
WEIGHT = False

class WordFilter:
    def __init__(self, words: List[str]):
        self.trie = Trie()

        for weight, word in enumerate(words):
            cur = self.trie
            cur[WEIGHT] = weight
            for i, x in enumerate(word):
                #Put all prefixes and suffixes
                tmp = cur
                for letter in word[i:]:
                    tmp = tmp[letter, None]
                    tmp[WEIGHT] = weight

                tmp = cur
                for letter in word[:-i or None][::-1]:
                    tmp = tmp[None, letter]
                    tmp[WEIGHT] = weight

                #Advance letters
                cur = cur[x, word[~i]]
                cur[WEIGHT] = weight

    def f(self, pref: str, suff: str) -> int:
        cur = self.trie
        for a, b in zip_longest(pref, suff[::-1]):
            if (a, b) not in cur:
                return -1
            cur = cur[a, b]
        return cur[WEIGHT]
```
</TabItem>
</Tabs>

### Complexity Analysis

#### Time Complexity: $O(NK^2+QK)$

> **Reason**: where `N` is the number of words, `K` is the maximum length of a word, and `Q` is the number of queries.


#### Space Complexity: $O(NK^2)$

> **Reason**: the size of the trie.

## Approach 3: Trie of Suffix Wrapped Words
### Intuition and Algorithm

Intuition and Algorithm

Consider the word `'apple'`. For each suffix of the word, we could insert that suffix, followed by `'#'`, followed by the word, all into the trie.

For example, we will insert `'#apple', 'e#apple', 'le#apple', 'ple#apple', 'pple#apple', 'apple#apple'` into the trie. Then for a query like `prefix = "ap", suffix = "le"`, we can find it by querying our trie for `le#ap`.

### Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
class TrieNode {
public:
    TrieNode* children[27];
    int weight;
    TrieNode() {
        memset(children, 0, sizeof(children));
        weight = 0;
    }
};

class WordFilter {
public:
    TrieNode trie;
    WordFilter(vector<string>& words) {
        for (int weight = 0; weight < words.size(); ++weight) {
            string word = words[weight] + "{";
            for (int i = 0; i < word.length(); ++i) {
                TrieNode* cur = &trie;
                cur->weight = weight;
                for (int j = i; j < 2 * word.length() - 1; ++j) {
                    int k = word[j % word.length()] - 'a';
                    if (!cur->children[k]) {
                        cur->children[k] = new TrieNode();
                    }
                    cur = cur->children[k];
                    cur->weight = weight;
                }
            }
        }
    }

    int f(string prefix, string suffix) {
        TrieNode* cur = &trie;
        for (char letter : (suffix + '{' + prefix)) {
            if (!cur->children[letter - 'a']) {
                return -1;
            }
            cur = cur->children[letter - 'a'];
        }
        return cur->weight;
    }
};




```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class WordFilter {
    TrieNode trie;
    public WordFilter(String[] words) {
        trie = new TrieNode();
        for (int weight = 0; weight < words.length; ++weight) {
            String word = words[weight] + "{";
            for (int i = 0; i < word.length(); ++i) {
                TrieNode cur = trie;
                cur.weight = weight;
                for (int j = i; j < 2 * word.length() - 1; ++j) {
                    int k = word.charAt(j % word.length()) - 'a';
                    if (cur.children[k] == null) {
                        cur.children[k] = new TrieNode();
                    }
                    cur = cur.children[k];
                    cur.weight = weight;
                }
            }
        }
    }
    public int f(String prefix, String suffix) {
        TrieNode cur = trie;
        for (char letter: (suffix + '{' + prefix).toCharArray()) {
            if (cur.children[letter - 'a'] == null) {
                return -1;
            }
            cur = cur.children[letter - 'a'];
        }
        return cur.weight;
    }
}

class TrieNode {
    TrieNode[] children;
    int weight;
    public TrieNode() {
        children = new TrieNode[27];
        weight = 0;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
Trie = lambda: collections.defaultdict(Trie)
WEIGHT = False

class WordFilter:
    def __init__(self, words: List[str]):
        self.trie = Trie()

        for weight, word in enumerate(words):
            word += '#'
            for i in range(len(word)):
                cur = self.trie
                cur[WEIGHT] = weight
                for j in range(i, 2 * len(word) - 1):
                    cur = cur[word[j % len(word)]]
                    cur[WEIGHT] = weight

    def f(self, pref: str, suff: str) -> int:
        cur = self.trie
        for letter in suff + '#' + pref:
            if letter not in cur:
                return -1
            cur = cur[letter]
        return cur[WEIGHT]
```
</TabItem>
</Tabs>

### Complexity Analysis

#### Time Complexity: $O(NK^2+QK)$

> **Reason**: `nums` is divided into half each time. In the worst-case scenario, we need to cut `nums` until the range has no element, it takes logarithmic time to reach this break condition.

#### Space Complexity: $O(NK^2)$

> **Reason**: the size of the trie.

## Video Solution 

<LiteYouTubeEmbed
    id="3JVlE66WxW0"
    params="autoplay=1&autohide=1&showinfo=0&rel=0"
    title="Leetcode 745 | Prefix and Suffix Search | Leetcode Hard | 2 Approaches"
    poster="hqdefault"
    webp />

## References

- **LeetCode Problem**: [Prefix and Suffix Search](https://leetcode.com/problems/prefix-and-suffix-search/description/)

- **Solution Link**: [Prefix and Suffix Search](https://leetcode.com/problems/prefix-and-suffix-search/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>