---
id: huffman-coding
title: Huffman Coding Solution
sidebar_label: 0003 - Huffman Coding
tags: [Huffman Coding, Data Compression, Algorithm, C++, Problem Solving]
description: This is a solution to the Huffman Coding problem.
---

## Problem Statement 

### Problem Description

Huffman Coding assigns variable-length codes to input characters, with shorter codes assigned to more frequent characters, resulting in efficient compression. Given a set of characters and their frequencies, the goal is to build a Huffman Tree and determine the Huffman codes for each character.

### Examples

**Example 1:**

```plaintext
Input: Characters = {a, b, c, d, e, f}, Frequencies = {5, 9, 12, 13, 16, 45}
Output: 
a: 1100
b: 1101
c: 100
d: 101
e: 111
f: 0
```

### Constraints
The input should be a set of characters and their respective frequencies.

## Solution of Given Problem

### Intuition and Approach

The Huffman Coding algorithm follows these steps:

1. Create a leaf node for each character and build a min heap of all leaf nodes.
2. Extract two nodes with the smallest frequency from the min heap.
3. Create a new internal node with a frequency equal to the sum of the two nodes' frequencies.
4. Add the new node to the min heap.
5. Repeat steps 2-4 until the heap contains only one node, which becomes the root of the Huffman Tree.
6. Assign binary codes to each character based on their position in the Huffman Tree.

### Approaches

#### Codes in Different Languages

<Tabs>
  <TabItem value="cpp" label="C++" default>
  <SolutionAuthor name="sjain1909"/>
   ```cpp
    #include <bits/stdc++.h>
    using namespace std;
    struct MinHeapNode {
        char data;
        int freq;
        MinHeapNode *left, *right;

        MinHeapNode(char data, int freq) {
            left = right = nullptr;
            this->data = data;
            this->freq = freq;
        }
    };

    struct compare {
        bool operator()(MinHeapNode* left, MinHeapNode* right) {
            return (left->freq > right->freq);
        }
    };
    void printCodes(struct MinHeapNode* root, string str) {
        if (!root)
            return;

        if (root->data != '$')
            cout << root->data << ": " << str << "\n";

        printCodes(root->left, str + "0");
        printCodes(root->right, str + "1");
    }

    void HuffmanCodes(char data[], int freq[], int size) {
        struct MinHeapNode *left, *right, *top;
        priority_queue<MinHeapNode*, vector<MinHeapNode*>, compare> minHeap;

        for (int i = 0; i < size; ++i)
            minHeap.push(new MinHeapNode(data[i], freq[i]));

        while (minHeap.size() != 1) {
            left = minHeap.top();
            minHeap.pop();

            right = minHeap.top();
            minHeap.pop();

            top = new MinHeapNode('$', left->freq + right->freq);

            top->left = left;
            top->right = right;

            minHeap.push(top);
        }
        printCodes(minHeap.top(), "");
    }

    int main() {
        char arr[] = {'a', 'b', 'c', 'd', 'e', 'f'};
        int freq[] = {5, 9, 12, 13, 16, 45};
        int size = sizeof(arr) / sizeof(arr[0]);

        HuffmanCodes(arr, freq, size);

        return 0;
    }
   ```

  </TabItem>
</Tabs>

### Complexity Analysis

- Time Complexity: $O(n \log n)$
- Space Complexity: $O(n)$
- Where `n` is the number of characters.
- The time complexity is dominated by the operations on the min heap.
- The space complexity is linear due to the storage of the Huffman Tree.

## Video Explanation of Given Problem

    <LiteYouTubeEmbed
      id="uDS8AkTAcIU"
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
