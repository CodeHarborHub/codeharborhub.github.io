---
id: insert-greatest-common-divisors-in-linked-list
title: Insert Greatest Common Divisors in Linked List
sidebar_label: 2807 Insert Greatest Common Divisors in Linked List
tags:
  - Linked List
  - LeetCode
  - C++
description: "This is a solution to the Insert Greatest Common Divisors in Linked List problem on LeetCode."
---

## Problem Description

Given the head of a linked list head, in which each node contains an integer value.

Between every pair of adjacent nodes, insert a new node with a value equal to the greatest common divisor of them.

Return the linked list after insertion.

The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

### Examples

**Example 1:**

```

Input: head = [18,6,10,3]
Output:  [18,6,6,2,10,1,3]
```

**Example 2:**

```
Input: root = [7]
Output:  [7]
```

### Constraints

- The number of nodes in the list is in the range $[1, 5000]$.
- $-1 \leq \text{Node.val} \leq 1000$.

### Approach

To solve this problem(insert greatest common divisors in linked list) we will first store the nodes value of the linked list in vector and then find gcd of each adjacent pair and store it in another vector and then simply iterate the linked list and insert the gcd in the linked list as per the question.

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
class Solution {
public:
    ListNode* insertGreatestCommonDivisors(ListNode* head) {
        vector<int>a,b;
        ListNode* k=head;
        while(head!=NULL){
            a.push_back(head->val);  // store each node value of the given linked list
            head=head->next;
        }
        for(int i=0;i<a.size()-1;i++){ //to store gratest common divisors(gcd) of adjacent pairs
            int p=__gcd(a[i],a[i+1]);
            b.push_back(p);
        }
        head=k;
        int i=0;
        while(k!=NULL && k->next!=NULL){ // inserting gcd between the linked list
            ListNode* temp=new ListNode(b[i]);
            ListNode* next=k->next;
            i++;
            k->next=temp;
            temp->next=next;
            k=k->next->next;
        }
        return head;
    }
};
```
