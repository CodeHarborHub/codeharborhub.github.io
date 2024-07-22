---
id: aho-corasick-algorithm
title: Aho-Corasick Algorithm for Efficient String Matching
sidebar_label: 0011 - Aho-Corasick Algorithm
tags: [Aho-Corasick, String Matching, Algorithm, C++, Problem Solving]
description: This is a solution for implementing the Aho-Corasick Algorithm to search multiple patterns simultaneously in a given text.
---

## Problem Statement 

### Problem Description

The Aho-Corasick Algorithm is designed for searching multiple patterns simultaneously within a given text. It constructs a finite state machine that resembles a digital tree with additional links between nodes, allowing efficient transitions between patterns.

### Examples

**Example 1:**

```plaintext
Input: 
Patterns: {"he", "she", "his", "hers"}
Text: "ahishers"
Output: 
Pattern found: he at index 1
Pattern found: his at index 1
Pattern found: she at index 3
Pattern found: hers at index 4

Explanation: All the patterns are efficiently found within the text.
```

### Constraints

- The input consists of multiple patterns and a single text.
- The algorithm should handle large patterns and text sizes efficiently.

## Solution of Given Problem

### Intuition and Approach

The Aho-Corasick Algorithm follows these steps:

1. Build a Trie: Insert all patterns into a trie.
2. Construct Failure Links: Create failure links to enable efficient transitions when a mismatch occurs.
3. Search the Text: Use the trie and failure links to search the text for all patterns simultaneously.

### Approaches

#### Codes in Different Languages

<Tabs>
  <TabItem value="cpp" label="C++">
  <SolutionAuthor name="sjain1909"/>
   ```cpp
    #include <bits/stdc++.h>
    using namespace std;

    struct TrieNode {
    unordered_map<char, TrieNode*> children;
    TrieNode* failure;
    vector<int> output;
    TrieNode() : failure(nullptr) {}
};

class AhoCorasick {
    TrieNode* root;
    vector<string> patterns;

public:
    AhoCorasick() {
        root = new TrieNode();
    }

    void addPattern(const string& pattern, int index) {
        TrieNode* node = root;
        for (char c : pattern) {
            if (node->children.find(c) == node->children.end()) {
                node->children[c] = new TrieNode();
            }
            node = node->children[c];
        }
        node->output.push_back(index);
    }

    void buildFailureLinks() {
        queue<TrieNode*> q;
        root->failure = root;
        for (auto& child : root->children) {
            child.second->failure = root;
            q.push(child.second);
        }

        while (!q.empty()) {
            TrieNode* current = q.front();
            q.pop();

            for (auto& child : current->children) {
                char c = child.first;
                TrieNode* fail = current->failure;

                while (fail != root && fail->children.find(c) == fail->children.end()) {
                    fail = fail->failure;
                }

                if (fail->children.find(c) != fail->children.end()) {
                    child.second->failure = fail->children[c];
                } else {
                    child.second->failure = root;
                }

                child.second->output.insert(child.second->output.end(),
                    child.second->failure->output.begin(), child.second->failure->output.end());

                q.push(child.second);
            }
        }
    }

    void search(const string& text) {
        TrieNode* node = root;
        for (int i = 0; i < text.size(); ++i) {
            char c = text[i];
            while (node != root && node->children.find(c) == node->children.end()) {
                node = node->failure;
            }

            if (node->children.find(c) != node->children.end()) {
                node = node->children[c];
            } else {
                node = root;
            }

            if (!node->output.empty()) {
                for (int index : node->output) {
                    cout << "Pattern found: " << patterns[index] << " at index " << i - patterns[index].size() + 1 << "\n";
                }
            }
        }
    }

    void initialize(const vector<string>& patterns) {
        this->patterns = patterns;
        for (int i = 0; i < patterns.size(); ++i) {
            addPattern(patterns[i], i);
        }
        buildFailureLinks();
    }
};

int main() {
    int n;
    cout << "Enter number of patterns: ";
    cin >> n;
    vector<string> patterns(n);
    cout << "Enter patterns:\n";
    for (int i = 0; i < n; ++i) {
        cin >> patterns[i];
    }

    string text;
    cout << "Enter text: ";
    cin >> text;

    AhoCorasick ac;
    ac.initialize(patterns);
    ac.search(text);

    return 0;
}
    ```
  </TabItem>  
</Tabs>

### Complexity Analysis

- **Time Complexity:** $O(N + M + Z)$ where `N` is the length of the text, `M` is the total length of all patterns, and `Z` is the number of pattern occurrences.
- **Space Complexity:** $O(M)$

The time complexity accounts for building the trie, constructing failure links, and searching the text. The space complexity is linear with respect to the total length of the patterns.

## Video Explanation of Given Problem

    <LiteYouTubeEmbed
      id="VSvE-zpZtso"
      params="autoplay=1&autohide=1&showinfo=0&rel=0"
      title="Problem Explanation | Solution | Approach"
      poster="maxresdefault"
      webp 
    />
---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['sjain1909'].map(username => (
 <Author key={username} username={username} />
))}
</div>
