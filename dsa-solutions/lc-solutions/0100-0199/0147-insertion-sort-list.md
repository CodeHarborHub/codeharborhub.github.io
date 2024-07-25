---
id: insertion-sort-list
title: Insertion sort list
sidebar_label: 0147-Insertion sort list
tags:
  - LeetCode
  - Java
  - Python
  - C++
description: "This is a solution to the Insertion sort list problem on LeetCode."
---

## Problem Description

Given the `head` of a singly linked list, sort the list using insertion sort, and return the sorted list's head.

The steps of the insertion sort algorithm:

1. Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.
2. At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list and inserts it there.
3. It repeats until no input elements remain.
4. The following is a graphical example of the insertion sort algorithm. The partially sorted list (black) initially contains only the first element in the list. One element (red) is removed from the input data and inserted in-place into the sorted list with each iteration.

![alt](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif)

### Examples

**Example 1:**

![alt](https://assets.leetcode.com/uploads/2021/03/04/sort1linked-list.jpg)

```
Input: head = [4,2,1,3]
Output: [1,2,3,4]
```

**Example 2:**

![alt](https://assets.leetcode.com/uploads/2021/03/04/sort2linked-list.jpg)

```
Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]
```




### Constraints

- The number of nodes in the list is in the range `[1, 5000]`.
- `5000 <= Node.val <= 5000`


---

## Solution

## Approach

1. **Extract Values:**
   - Create a vector `v` to store the values of the linked list nodes.
   - Traverse the linked list and push each node's value into the vector `v`.

2. **Sort Values:**
   - Use the `sort` function to sort the vector `v` in ascending order.

3. **Reconstruct Sorted Linked List:**
   - Initialize a new `ListNode` pointer `temp` with a dummy value.
   - Use another pointer `temp1` to keep track of the new sorted linked list.
   - Traverse the sorted vector `v` from the end to the beginning:
     - Create a new node with the current value of `v`.
     - Set the `next` pointer of the new node to `temp1`.
     - Update `temp1` to point to the new node.

4. **Return the Sorted List:**
   - Return `temp1`, which now points to the head of the sorted linked list.




### Code in Different Languages

### java
```java
class Solution {
    public ListNode insertionSortList(ListNode head) {
        ListNode dummy= new ListNode(0);
        ListNode current=head;

        while(current != null){
            ListNode prev=dummy;
            ListNode nextNode=current.next;

        while(prev.next!=null && prev.next.val < current.val){
            prev=prev.next;
        }

        current.next=prev.next;
        prev.next=current;
        current=nextNode;
        }
        return dummy.next;
    }
}

```

### C++
```cpp
class Solution {
public:
    ListNode* insertionSortList(ListNode* head) {
        vector<int>v;
        while(head!=NULL){
         v.push_back(head->val);
         head=head->next;

        }
        sort(v.begin(),v.end());
        ListNode* temp=new ListNode(0);
        ListNode* temp1=NULL;
        for(int i=v.size()-1;i>=0;i--){
            temp=new ListNode(v[i]);
            temp->next=temp1;
            temp1=temp;
        }
        return temp1;
    }
};
```