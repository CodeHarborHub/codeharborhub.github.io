---
id: convert-sorted-list-to-binary-search-tree
title: Convert Sorted List to Binary Search Tree
sidebar_label: 0109 Convert Sorted List to Binary Search Tree
tags:
  - tree
  - tree traversal
  - LeetCode
  - C++
description: "This is a solution to the Convert Sorted List to Binary Search Tree problem on LeetCode."
---

## Problem Description

Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height-balanced
binary search tree.

### Examples

**Example 1:**

```

Input:  head = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
```

**Example 2:**

```
Input: head = []
Output: []
```



### Constraints

- The number of nodes in head is in the range $[0, 2 * 10^4]$.
- $-10^5 \leq \text{Node.val} \leq 10^5$.

### Approach 

To solve this problem(recover BST) as we know that the inorder traversal of binary search tree give us sorted array so when we traverse the array from left to right we will get to know that at some node the previous value will be greater than current value and that will be our first point were order is disturbed store current and its previous node so that we can counter if its an adjacent swap and if the order is disturbed for the second time, just store that node.After all this just swap the first and last value as you can in the below given code.

#### Code in C++

```cpp
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    TreeNode* tree(vector<int>&a){
        if(a.size()==0){
            return NULL;
        }
        vector<int>q,w;
        for(int i=0;i<a.size()/2;i++){
            q.push_back(a[i]);
        }
        for(int i=(a.size()/2)+1 ;i<a.size();i++){
            w.push_back(a[i]);
        }
        TreeNode* p =new TreeNode(a[a.size()/2]);
        p->left=tree(q);
        p->right=tree(w);
        return p;
    }
    TreeNode* sortedListToBST(ListNode* head) {
        vector<int>a;
        while(head!=NULL){
            a.push_back(head->val);
            head=head->next;
        }
        return tree(a);
        
    }
};
```


