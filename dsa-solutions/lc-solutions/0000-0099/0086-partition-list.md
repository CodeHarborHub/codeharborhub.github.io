---
id: partition-list
title: Partition List
sidebar_label: 0086-Partition List
description: partition it such that all nodes less than x come before nodes greater than or equal to x.
---

## Problem Description
Given the `head` of a linked list and a value `x`, partition it such that all nodes less than x come before nodes greater than or equal to `x`.

You should preserve the original relative order of the nodes in each of the two partitions.

 
### Examples

#### Example 1

```
- Input: head = [1,4,3,2,5,2], x = 3
- Output: [1,2,2,4,3,5]

```
#### Example 2

```
- Input: head = [2,1], x = 2
- Output: [1,2]
```

### Constraints

- The number of nodes in the list is in the range `[0, 200].`
- `100 <= Node.val <= 100`
- `200 <= x <= 200`

### Approach
Using two pointer, to iterate through the nodes and dettach the nodes that needs to be moved


### Solution Code

#### C++

```cpp


class Solution {
public:
    ListNode* partition(ListNode* head, int x) {
     ListNode*temp=head;
    ListNode*dummy=new ListNode (-1);
    ListNode*ans=dummy;
     while(temp!=NULL){
         if(temp->val<x){
             dummy->next=new ListNode(temp->val);
             dummy=dummy->next;
         }
         temp=temp->next;
     }   
        temp=head;
         while(temp!=NULL){
         if(temp->val>=x){
             dummy->next=new ListNode(temp->val);
             dummy=dummy->next;
         }
         temp=temp->next;

         }
     return ans->next;
    }
};

```
#### Java

```java

class Solution {
    public ListNode partition(ListNode head, int x) {
        ListNode beforeHead = new ListNode(0), afterHead = new ListNode(0);
        ListNode before = beforeHead, after = afterHead;
        for (; head != null; head = head.next)
            if (head.val < x) {
                before.next = head;
                before = head;
            } else {
                after.next = head;
                after = head;
            }

        after.next = null;
        before.next = afterHead.next;
        return beforeHead.next;
    }
}

```

### Conclusion
- Time complexity:
`O(n)`

- Space complexity:
`O(1)`