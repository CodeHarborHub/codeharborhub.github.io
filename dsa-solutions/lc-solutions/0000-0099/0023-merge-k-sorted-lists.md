---
id: merge-k-sorted-lists
title: Merge-K-Sorted-Lists (LeetCode)
sidebar_label: 0023-Merge-K-Sorted-Lists
tags:
    - Linked List
    - Divide and Conquer
description: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it."
---

## Problem Description

| Problem Statement                                                                                           | Solution Link                                                                                                                               | LeetCode Profile                                   |
| :----------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------- |
| [Merge-K-Sorted-Lists](https://leetcode.com/problems/merge-k-sorted-lists/description/)                                         | [Merge-K-Sorted-Lists](https://leetcode.com/problems/merge-k-sorted-lists/description/) | [DaminiChachane](https://leetcode.com/u/divcxl15/) |

### Problem Description

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.


### Examples

#### Example 1

- **Input:** ` lists = [[1,4,5],[1,3,4],[2,6]]`
- **Output:** `[1,1,2,3,4,4,5,6]`
- **Explanation:** The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6

#### Example 2

- **Input:** `lists = []`
- **Output:** `[]`

#### Example 3

- **Input:** `lists = [[]]`
- **Output:** `[]`

 

### Constraints

- k == lists.length
- 0 <= k <= 104
- 0 <= lists[i].length <= 500
- (-10^4) <= lists[i][j] <= 104
- lists[i] is sorted in ascending order.
- The sum of lists[i].length will not exceed 104.

### Approach

A Simple Solution is to initialize the result as the first list. Now traverse all lists starting from the second list. Insert every node of the currently traversed list into the result in a sorted way.  

### Solution Code

#### Python

```
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        n = len(lists)

        newList = ListNode()
        new = newList

        while n:
            # Find list with smallest value:
            smallestNode = ListNode(float('inf'))
            smallestIndex = -1
            for i in range(n):
                listNode = lists[i]
                if listNode and listNode.val < smallestNode.val:
                    smallestNode = listNode
                    smallestIndex = i
            
            if smallestIndex == -1:
                break
            
            new.next = ListNode(smallestNode.val)
            new = new.next

            if smallestNode.next:
                lists[smallestIndex] = smallestNode.next
            else:
                lists.pop(smallestIndex)
                n-=1
                
        return newList.next

```

#### Java
```
class Solution {
    public ListNode merge(ListNode left, ListNode right) {
        ListNode dummy = new ListNode(-1);
        ListNode temp = dummy;
        while (left != null && right != null) {
            if (left.val < right.val) {
                temp.next = left;
                temp = temp.next;
                left = left.next;
            } else {
                temp.next = right;
                temp = temp.next;
                right = right.next;
            }
        }
        while (left != null) {
            temp.next = left;
            temp = temp.next;
            left = left.next;
        }
        while (right != null) {
            temp.next = right;
            temp = temp.next;
            right = right.next;
        }
        return dummy.next;
    }
    
    public ListNode mergeSort(List<ListNode> lists, int start, int end) {
        if (start == end) {
            return lists.get(start);
        }
        int mid = start + (end - start) / 2;
        ListNode left = mergeSort(lists, start, mid);
        ListNode right = mergeSort(lists, mid + 1, end);
        return merge(left, right);
    }
    
    public ListNode mergeKLists(List<ListNode> lists) {
        if (lists.size() == 0) {
            return null;
        }
        return mergeSort(lists, 0, lists.size() - 1);
    }
}
```

#### C++
```
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
    ListNode* merge(ListNode *left, ListNode *right) {
        ListNode *dummy = new ListNode(-1);
        ListNode *temp = dummy;
        while (left != nullptr && right != nullptr) {
            if (left -> val < right -> val) {
                temp -> next = left;
                temp = temp -> next;
                left = left -> next;
            }
            else {
                temp -> next = right;
                temp = temp -> next;
                right = right -> next;
            }
        }
        while (left != nullptr) {
            temp -> next = left;
            temp = temp -> next;
            left = left -> next;
        }
        while (right != nullptr) {
            temp -> next = right;
            temp = temp -> next;
            right = right -> next;
        }
        return dummy -> next;
    }
    ListNode* mergeSort(vector<ListNode*>& lists, int start, int end) {
        if (start == end) 
            return lists[start];
        int mid = start + (end - start) / 2;
        ListNode *left = mergeSort(lists, start, mid);
        ListNode *right = mergeSort(lists, mid + 1, end);
        return merge(left, right);
    }
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        if (lists.size() == 0)
            return nullptr;
        return mergeSort(lists, 0, lists.size() - 1);
    }
};
```

### Conclusion
Merging 
𝑘
k sorted lists efficiently requires leveraging data structures that help maintain order, such as a min-heap. The min-heap approach is particularly efficient with a time complexity of 𝑂(𝑁log𝑘). Understanding these methods not only helps in solving the problem optimally but also enhances the comprehension of advanced data structures and algorithms.