---
id: palindrome-linked-list
title: Palindrome Linked List(LeetCode)
sidebar_label: 0234-Palindrome Linked List
tags:
  - Linked List
  - Two Pointer
  - Stack
  - Recursion
description: Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
---

## Problem Statement

Given the `head` of a singly linked list, return `true` if it is a palindrome or `false` otherwise.

### Examples

**Example 1:**

![image](https://github.com/PradnyaGaitonde/codeharborhub.github.io/assets/116059908/3912ff1d-6425-4b30-aa4c-94955c9ee9bd)

```plaintext
Input: head = [1,2,2,1]
Output: true
```

**Example 2:**

![image](https://github.com/PradnyaGaitonde/codeharborhub.github.io/assets/116059908/429d0cde-46de-4c2d-af7a-dd69bda5c426)

```plaintext
Input: head = [1,2]
Output: false
```

### Constraints

- The number of nodes in the list is in the range `[1, 105]`.
- `0 <= Node.val <= 9`

## Solution

### Approach

To check if a linked list is a palindrome using O(1) extra space, we can reverse the second half of the linked list and then compare it to the first half. The key steps involve:

1. Finding the middle of the linked list.
   
   ![image](https://github.com/PradnyaGaitonde/codeharborhub.github.io/assets/116059908/5bfdbfd5-0f6f-4040-a946-9820621e2910)

2. Reversing the second half of the list.

   ![image](https://github.com/PradnyaGaitonde/codeharborhub.github.io/assets/116059908/5a2e1fdb-d8ca-4842-8638-23a1f0d3e2d5)
   
3. Comparing the two halves for equality.

   ![image](https://github.com/PradnyaGaitonde/codeharborhub.github.io/assets/116059908/ce99042e-62e4-4bf5-92ec-2fb01db9fc2d)

(Note: This process works regardless of whether the length of the linked list is odd or even, as the comparison will stop when slow reaches the "dead-end" node.)

  ![image](https://github.com/PradnyaGaitonde/codeharborhub.github.io/assets/116059908/7f423edf-044a-40f4-bccf-d762d65a66a9)

#### Algorithm

1. Find the middle of the linked list:
* Use two pointers, `slow` and `fast`. Move `slow` by one step and `fast` by two steps in each iteration. When `fast` reaches the end, slow will be at the middle.
2. Reverse the second half:
* Starting from the middle node, reverse the direction of the `next` pointers for each node until the end of the list.
3. Compare the first and second halves:
* Initialize two pointers, one at the head and the other at the start of the reversed second half.
* Compare the values of the nodes pointed to by these pointers. If any values differ, the list is not a palindrome. If all values match, the list is a palindrome.

#### Implementation

Javascript Code:

```Javascript
var isPalindrome = function(head) {
    let slow = head, fast = head, prev = null, temp;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    prev = slow;
    slow = slow.next;
    prev.next = null;
    while (slow) {
        temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }
    fast = head;
    slow = prev;
    while (slow) {
        if (fast.val !== slow.val) return false;
        fast = fast.next;
        slow = slow.next;
    }
    return true;
};
```

Python Code:

```Python
class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        slow, fast, prev = head, head, None
        while fast and fast.next:
            slow, fast = slow.next, fast.next.next
        prev, slow, prev.next = slow, slow.next, None
        while slow:
            slow.next, prev, slow = prev, slow, slow.next
        fast, slow = head, prev
        while slow:
            if fast.val != slow.val:
                return False
            fast, slow = fast.next, slow.next
        return True
```

Java Code:

```Java
class Solution {
    public boolean isPalindrome(ListNode head) {
        ListNode slow = head, fast = head, prev = null, temp;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        prev = slow;
        slow = slow.next;
        prev.next = null;
        while (slow != null) {
            temp = slow.next;
            slow.next = prev;
            prev = slow;
            slow = temp;
        }
        fast = head;
        slow = prev;
        while (slow != null) {
            if (fast.val != slow.val) return false;
            fast = fast.next;
            slow = slow.next;
        }
        return true;
    }
}
```

C++ Code:

```C++
class Solution {
public:
    bool isPalindrome(ListNode* head) {
        ListNode *slow = head, *fast = head, *prev = nullptr, *temp;
        while (fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
        }
        prev = slow;
        slow = slow->next;
        prev->next = NULL;
        while (slow) {
            temp = slow->next;
            slow->next = prev;
            prev = slow;
            slow = temp;
        }
        fast = head;
        slow = prev;
        while (slow) {
            if (fast->val != slow->val) return false;
            fast = fast->next;
            slow = slow->next;
        }
        return true;
    }
};
```

### Complexity Analysis

- **Time complexity**: O(N)
- **Space complexity**: O(1)

### Conclusion

By using two pointers to find the middle, reversing the second half of the linked list, and then comparing the two halves, we can determine if a linked list is a palindrome with a time complexity of O(N) and a space complexity of O(1). This approach ensures we do not use extra space beyond the input list itself, meeting the problem's constraints.
