---
id: swap-nodes-in-pairs
title: Swap Nodes in Pairs (LeetCode)
sidebar_label: 0024-SwapNodesInPairs
description: Swap every two adjacent nodes in a linked list and return its head. The values in the nodes must not be modified, only the nodes themselves can be changed.
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Merge Two Sorted Lists](https://leetcode.com/problems/swap-nodes-in-pairs/) | [Merge Two Sorted Lists Solution on LeetCode](https://leetcode.com/problems/swap-nodes-in-pairs/solutions/) |  [VijayShankerSharma](https://leetcode.com/u/darkknight648/) |


## Problem Description

Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed).

### Examples

#### Example 1

- **Input:** $head = [1,2,3,4]$
- **Output:** $[2,1,4,3]$
- **Explanation:** The linked list is $[1,2,3,4]$. After swapping pairs, it becomes $[2,1,4,3]$.

#### Example 2

- **Input:** $head = []$
- **Output:** $[]$
- **Explanation:** The input linked list is empty, so the output is also empty.

#### Example 3

- **Input:** $head = [1]$
- **Output:** $[1]$
- **Explanation:** There is only one node in the linked list, so no swapping occurs.

### Constraints

- The number of nodes in the list is in the range [0, 100].
- $0 <= Node.val <= 100$

### Approach

To solve this problem, we can use a recursive approach. We swap each pair of nodes in the linked list by recursively swapping the remaining linked list after the current pair.

1. **Base Case:**
   - If the current node or the next node is null, return the current node.

2. **Swap Nodes:**
   - Swap the current node with its next node.
   - Recursively call the function on the remaining linked list.

3. **Return Head:**
   - Return the new head of the swapped pairs.

### Solution Code

#### Python

```py
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def swapPairs(self, head):
        # If the list is empty or has only one node, no need to swap
        if not head or not head.next:
            return head
        
        # Dummy node to ease handling edge cases
        dummy = ListNode(0)
        dummy.next = head
        prev = dummy
        
        while prev.next and prev.next.next:
            first = prev.next
            second = prev.next.next
            
            # Swapping
            prev.next = second
            first.next = second.next
            second.next = first
            
            # Move the pointer two steps forward
            prev = first
        
        return dummy.next
```

#### Java

```java
class Solution {
    public ListNode swapPairs(ListNode head) {
        // If the list is empty or has only one node, no need to swap
        if (head == null || head.next == null) {
            return head;
        }
        // Dummy node to ease handling edge cases
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode prev = dummy;
        while (prev.next != null && prev.next.next != null) {
            ListNode first = prev.next;
            ListNode second = prev.next.next;
            // Swapping
            prev.next = second;
            first.next = second.next;
            second.next = first;
            
            // Move the pointer two steps forward
            prev = first;
        }
        return dummy.next;
    }
}
```

#### C++

```cpp
class Solution {
public:
    ListNode* swapPairs(ListNode* head) {
        // If the list is empty or has only one node, no need to swap
        if (!head || !head->next) {
            return head;
        }
    
        // Dummy node to ease handling edge cases
        ListNode dummy(0);
        dummy.next = head;
        ListNode* prev = &dummy;
    
        while (prev->next && prev->next->next) {
            ListNode* first = prev->next;
            ListNode* second = prev->next->next;
            // Swapping
            prev->next = second;
            first->next = second->next;
            second->next = first; 
            // Move the pointer two steps forward
            prev = first;
        } 
    return dummy.next;
    }
};
```

### Conclusion

The above solution effectively swaps every two adjacent nodes in a linked list without modifying the values in the nodes themselves. It utilizes a recursive approach to swap pairs of nodes, ensuring that the final linked list is correctly swapped. This solution has a time complexity of $O(n)$, where n is the number of nodes in the linked list, making it efficient for handling the given constraints.
