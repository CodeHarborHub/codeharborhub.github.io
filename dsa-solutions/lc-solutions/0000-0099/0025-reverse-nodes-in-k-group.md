---
id: remove-duplicates-from-sorted-list-2
title: Reverse Nodes in k-Group (Leetcode)
sidebar_label: 0025-ReverseNodesInK-Group
description: Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.You may not alter the values in the list's nodes, only nodes themselves may be changed.
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/description/) | [Reverse Nodes in k-Group Solution on LeetCode](https://leetcode.com/problems/reverse-nodes-in-k-group/solutions/) |  [Aaradhya Singh ](https://leetcode.com/u/keira_09/) |


## Problem Description

Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

### Examples

#### Example 1

- **Input:** $head = [1,2,3,4,5], k = 2$
- **Output:** $[2,1,4,3,5]$


#### Example 2

- **Input:** $head = [1,2,3,4,5], k = 3$
- **Output:** $[3,2,1,4,5]$



### Constraints

- The number of nodes in the list is $n$.
- $1 <= k <= n <= 5000$
- $0 <= Node.val <= 1000$



### Intuition

The code aims to reverse nodes in a linked list in groups of $k$. It first checks if the length of the list is less than $k$ ; if so, it returns the head as-is. If the head is null or the list has only one node, or $k$ is less than 2, it returns the head. The core logic involves reversing the first $k$ nodes using a loop and recursively calling the function on the remaining nodes. The reversed portion is then linked with the result of the recursive call, ensuring the entire list is processed in $k$-sized groups.


### Approach

1. **Calculate Length of the Linked List:**

    - Implement a helper function Length to calculate and return the size of the linked list. This function iterates through the list, incrementing a counter until the end of the list is reached.

2. **Initial Checks:**

    - In the reverseKGroup function, first check if $k$ is greater than the length of the list using the Length function. If so, return the head as is since there are not enough nodes to form a group.
    - Check if the head is null, the list has only one node, or if $k$ is less than 2. If any of these conditions are true, return the head as-is since no reversal is needed.

3. **Reverse First k Nodes:**

    - Initialize three pointers: prev as null, curr as head, and next as null.
    - Use a loop to reverse the first $k$ nodes. Within the loop:
        - Store the next node of curr in next.
        Reverse the link by setting curr->next to prev.
        - Move the prev pointer to curr and curr to next.
        - Increment the count to ensure only $k$ nodes are processed.

3. **Recursive Call:**

    - After reversing the first $k$ nodes, if next is not null (indicating there are more nodes left to process), make a recursive call to reverseKGroup with curr (the node following the first $k$ nodes) and $k$.
    - Link the last node of the reversed group (which is now the head) to the result of the recursive call.

4. **Return New Head:**

    - Return prev as the new head of the reversed portion of the list.

### Solution Code


#### C++

```cpp
#include <iostream>

// Definition for singly-linked list.
struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

int Length(ListNode *head) {
    int size = 0;
    ListNode *temp = head;
    while (temp != nullptr) {
        temp = temp->next;
        size++;
    }
    return size;
}

class Solution {
public:
    ListNode* reverseKGroup(ListNode* head, int k) {
        if (k > Length(head)) {
            return head;
        }
        if (head == nullptr || head->next == nullptr || k < 2) {
            return head;
        }

        int count = 0;
        ListNode *prev = nullptr;
        ListNode *curr = head;
        ListNode *next = nullptr;

        while (count < k) {
            next = curr->next;
            curr->next = prev;
            prev = curr;
            curr = next;
            count++;
        }

        if (next != nullptr) {
            head->next = reverseKGroup(curr, k);
        }

        return prev;
    }
};
```

### Conclusion

The provided code effectively reverses nodes in a linked list in groups of $k$. It first calculates the length of the linked list to ensure there are enough nodes to form a group. If the length is less than $k$, it returns the head as is. The code then uses a loop to reverse the first $k$ nodes and recursively processes the remaining nodes, ensuring the entire linked list is processed in groups of $k$ while maintaining the order and structure of the reversed segments. The time complexity of this approach is $O(n)$, where $n$ is the number of nodes in the linked list, as each node is processed exactly once. The space complexity is $O(n/k)$ due to the recursion stack, as in the worst case, the depth of the recursion stack can be $n/k$, where $n$ is the total number of nodes and $k$ is the group size.
