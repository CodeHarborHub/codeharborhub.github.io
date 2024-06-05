---
id: Reverse-a-linked-list
title: Reverse a Linked List (Geeks for Geeks)
sidebar_label: Reverse a LinkedList 
tags:
  - Beginner
  - Linked List
  - Array
  - Geeks for Geeks
  - CPP
  - Python
  - DSA
description: "This is a solution to the Reverse a linked list problem on Geeks for Geeks."
---

## Problem Description

Given a linked list of N nodes. The task is to reverse this list.
You are given the head of a singly linked list. Write a function to reverse the linked list and return the new head.

## Examples

**Example 1:**
```
Input:
LinkedList: 1->2->3->4->5->6
Output: 6 5 4 3 2 1
Explanation: After reversing the list, 
elements are 6->5->4->3->2->1.
```

**Example 2:**
```
Input:
LinkedList: 2->7->8->9->10
Output: 10 9 8 7 2
Explanation: After reversing the list,
elements are 10->9->8->7->2.
```

## Your Task

The task is to complete the function reverseList() with head reference as the only argument and should return new head after reversing the list.

Expected Time Complexity: $O(N)$.
Expected Auxiliary Space: $O(1)$.

## Constraints

- $1 <= N <= 10^4$

## Problem Explanation

1. Initialize pointers: Set prev to None, temp to the head of the linked list, and front to None.
2. Traverse the list: Iterate through the linked list until temp is None.
3. Store the next node: Assign temp.next to front to keep track of the next node.
4. Reverse the pointer: Set temp.next to prev to reverse the link.
5. Move prev forward: Update prev to temp.
6. Move temp forward: Update temp to front.
7. Repeat steps 3-6: Continue until the entire list is reversed.
8. Update head: Once the loop ends, prev will be the new head of the reversed list.
9. Return the new head: Return prev as the head of the reversed linked list.

## Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```py
  
  	def reverseList(head):
		prev = None
        curr = head

        while curr:
          next = curr.next
          curr.next = prev
          prev = curr
          curr = next

    return prev
	```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@ngmuraqrdd"/>

  ```cpp
  class Solution
{
    public:
    struct Node* reverseList(struct Node *head)
    {
        if(head == NULL || head->next== NULL) return head;
        Node* prev = NULL;
        Node* temp = head;
        while(temp != NULL){
            Node* front = temp->next;
            temp->next = prev;
            prev = temp;
            temp = front;
        }
        return prev;
    }
    
};
```

  </TabItem>  
</Tabs>

## Solution Logic:

1. Initialize pointers: Create three pointers: prev (previous), curr (current), and next (next node).
Set prev to None and curr to the head of the linked list.

2. Iterate through the list: Start a loop that continues as long as curr is not None.

3. Store the next node: Inside the loop, before modifying the next pointer of the current node, store the node pointed to by curr.next in a temporary variable next. This is crucial to avoid losing track of the next node in the original order.

4. Reverse the link: Update the next pointer of the current node (curr) to point to the previous node (prev). This effectively reverses the direction of the link.

5. Update pointers and iterate: Set prev to the current node (prev = curr).
Set curr to the previously stored next node (curr = next).
By repeating these steps, you traverse the linked list, reverse the links in place, and end up with the list reversed.

## Time Complexity:

1. Reversing a linked list involves iterating through the list to manipulate the pointers between nodes. In the worst case, you need to visit every single node in the list to reverse the connections.

2. Any efficient reversal algorithm will require at least one pass through the entire list. This takes $O(n)$ time.

## Space Complexity:

The space complexity is typically denoted as $O(1)$, which signifies constant space. This means the extra memory usage doesn't depend on the input size.

## References

- **LeetCode Problem:** [Geeks for Geeks Problem](https://www.geeksforgeeks.org/problems/reverse-a-linked-list/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=bottom_sticky_on_article)
- **Solution Link:** [Fascinating Number on Geeks for Geeks](https://www.geeksforgeeks.org/reverse-a-linked-list/)
- **Authors LeetCode Profile:** [MuraliDharan](https://www.geeksforgeeks.org/user/ngmuraqrdd/)
