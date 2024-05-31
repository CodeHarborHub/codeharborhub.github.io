---
id: add-two-numbers
title: Two Sum Problem (LeetCode)
sidebar_label: 0002 - Add Two Numbers
tags:
  - Linked List
  - Math
  - Recursion
description: "This is a solution to the Add Two Numbers problem on LeetCode."
---
## Problem Description

| Problem Statement                                             | Solution Link                                                                                                                                                             | LeetCode Profile                                    |
| :------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------- |
| [Add Two Numbers on LeetCode](https://leetcode.com/problems/add-two-numbers/) | [Add Two Numbers Solution on LeetCode](https://leetcode.com/problems/add-two-numbers/solutions/5234194/solution/) | [Amruta Jayanti](https://leetcode.com/u/user7669cY/)|


## Problem Description

You are given two `non-empty` linked lists representing two non-negative integers. The digits are stored in `reverse order`, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

**Example 1:**

```plaintext
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
```

**Example 2:**

```plaintext
Input: l1 = [0], l2 = [0]
Output: [0]
```

**Example 3:**

```plaintext
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
``` 

### Constraints:

- The number of nodes in each linked list is in the range `[1, 100]`.
- `0 <= Node.val <= 9`
- It is guaranteed that the list represents a number that does not have leading zeros.


## Solution to the problem

### Intuition and Approach
This is a simple problem. It can be done by maintaining two pointers , each for each linked list. Add the values store them and then move to next node.

#### Implementation
```python
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        carry = 0
        dummy = ListNode()
        current = dummy

        while l1 or l2 or carry:
            # Extract values from the current nodes
            val1 = l1.val if l1 else 0
            val2 = l2.val if l2 else 0

            # Calculate the sum and carry
            total_sum = val1 + val2 + carry
            carry = total_sum // 10
            current.next = ListNode(total_sum % 10)

            # Move to the next nodes
            if l1:
                l1 = l1.next
            if l2:
                l2 = l2.next

            # Move to the next result node
            current = current.next

        return dummy.next
```
Above is the implementation in Python. Here total_sum stores the value and adds to the dummy. Variable carry is used to handle the carry bits.

#### Complexity Analysis:
- Time Complexity : $$O(max(n,m))$$ Here, n,m are the lengths of the input linked lists
- Space Complexity : $$O(max(n,m))$$

#### Codes in different languages:
`CPP`:
```cpp
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* dummyHead = new ListNode(0);
        ListNode* tail = dummyHead;
        int carry = 0;

        while (l1 != nullptr || l2 != nullptr || carry != 0) {
            int digit1 = (l1 != nullptr) ? l1->val : 0;
            int digit2 = (l2 != nullptr) ? l2->val : 0;

            int sum = digit1 + digit2 + carry;
            int digit = sum % 10;
            carry = sum / 10;

            ListNode* newNode = new ListNode(digit);
            tail->next = newNode;
            tail = tail->next;

            l1 = (l1 != nullptr) ? l1->next : nullptr;
            l2 = (l2 != nullptr) ? l2->next : nullptr;
        }

        ListNode* result = dummyHead->next;
        delete dummyHead;
        return result;
    }
};
```

`Java`:
```java
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummyHead = new ListNode(0);
        ListNode tail = dummyHead;
        int carry = 0;

        while (l1 != null || l2 != null || carry != 0) {
            int digit1 = (l1 != null) ? l1.val : 0;
            int digit2 = (l2 != null) ? l2.val : 0;

            int sum = digit1 + digit2 + carry;
            int digit = sum % 10;
            carry = sum / 10;

            ListNode newNode = new ListNode(digit);
            tail.next = newNode;
            tail = tail.next;

            l1 = (l1 != null) ? l1.next : null;
            l2 = (l2 != null) ? l2.next : null;
        }

        ListNode result = dummyHead.next;
        dummyHead.next = null;
        return result;
    }
}
```



