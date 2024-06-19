---
id: odd-even-linked-list
title: Odd Even Linked List
sidebar_label: 0328 Odd Even Linked List
tags:
- Linked List
- C++
- Java
- Python
description: "This document provides a solution to group all the nodes with odd indices together followed by the nodes with even indices given the head of a singly linked list."
---

## Problem
Given the `head` of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in `O(1)` extra space complexity and `O(n)` time complexity.

### Example 1:
Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]

### Example 2:
Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]

### Constraints:
- The number of nodes in the linked list is in the range `[0, 10^4]`.
- `-10^6 <= Node.val <= 10^6`

## Solution
To reorder the given linked list based on odd and even indices, we can follow a simple approach. We'll divide the linked list into two separate groups: one for nodes with odd indices and one for nodes with even indices. Then, we'll merge these two groups to obtain the final reordered list while maintaining the relative order of nodes within each group. We'll start by initializing two pointers: one for odd nodes and one for even nodes. Initially, the odd pointer will point to the head of the linked list, and the even pointer will point to the next node. We'll also keep track of the head of the even list to connect it later. Next, we'll iterate through the linked list, advancing the odd pointer by two steps and the even pointer by two steps in each iteration. This will separate the nodes into odd and even group while keeping their original order.

Finally, we'll merge the even list after the odd list by linking the last node of the odd group to the head of the even group. This will connect the two groups and give us the desired reordered list.

#### Code in Different Languages

#### Python

```py
class Solution:
  def oddEvenList(self, head: ListNode) -> ListNode:
    oddHead = ListNode(0)
    evenHead = ListNode(0)
    odd = oddHead
    even = evenHead
    isOdd = True

    while head:
      if isOdd:
        odd.next = head
        odd = head
      else:
        even.next = head
        even = head
      head = head.next
      isOdd = not isOdd

    even.next = None
    odd.next = evenHead.next
    return oddHead.next
```

#### Java

```java
class Solution {
  public ListNode oddEvenList(ListNode head) {
    ListNode oddHead = new ListNode(0);
    ListNode evenHead = new ListNode(0);
    ListNode odd = oddHead;
    ListNode even = evenHead;

    for (boolean isOdd = true; head != null; head = head.next, isOdd = !isOdd)
      if (isOdd) {
        odd.next = head;
        odd = odd.next;
      } else {
        even.next = head;
        even = even.next;
      }

    odd.next = evenHead.next;
    even.next = null;
    return oddHead.next;
  }
}
```

#### C++

```cpp
class Solution {
 public:
  ListNode* oddEvenList(ListNode* head) {
    ListNode oddHead(0);
    ListNode evenHead(0);
    ListNode* odd = &oddHead;
    ListNode* even = &evenHead;

    for (int isOdd = 0; head; head = head->next)
      if (isOdd ^= 1) {
        odd->next = head;
        odd = odd->next;
      } else {
        even->next = head;
        even = even->next;
      }

    odd->next = evenHead.next;
    even->next = nullptr;
    return oddHead.next;
  }
};
```

## References

- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/odd-even-linked-list/)
- **Solution Link:** [Shortest Palindrome Solution on LeetCode](https://leetcode.com/problems/odd-even-linked-list/solutions/)
