---
id: middle-of-the-linked-list
title: Middle of the Linked List
sidebar_label: 876 - Middle of the Linked List
tags:
  - Leet code
description: "Solution to leetocde 876"
---
    
## Problem Statement
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

### Example 1

**Input**: `head = [1,2,3,4,5]`

**Output**: `[3,4,5]`

**Explanation**:
The middle node of the list is node 3.

### Example 2

**Input**: `head = [1,2,3,4,5,6]`

**Output**: ` [4,5,6]`

**Explanation**:
Since the list has two middle nodes with values 3 and 4, we return the second one.

### Constraints

- `The number of nodes in the list is in the range [1, 100]`
- `1 <= Node.val <= 100`


### Approach

- Define a helper function size to calculate the size of the linked list.
Initialize a temporary pointer (temp) to the head of the linked list.
Calculate the size of the linked list using the size function.
Traverse the linked list again by moving the temp pointer to the middle node (size/2).
Return the middle node.
Complexity

**Time complexity:** O(n)

- n is the number of nodes in the linked list. The solution iterates through the linked list twice – once to calculate the size and once to reach the middle.

**Space complexity:** O(1)
- as the solution uses a constant amount of extra space regardless of the input size.


### Code implementation

### Python Solution

```python
class Solution:
    def middleNode(self, head: ListNode) -> ListNode:
        if self.listSize(head) == 1:
            return head
        temp = head
        for _ in range(self.listSize(head) // 2):
            temp = temp.next
        return temp

    def listSize(self, head: ListNode) -> int:
        size = 0
        temp = head
        while temp is not None:
            size += 1
            temp = temp.next
        return size
        

```

### C++ Solution

```cpp
class Solution {
public:
    ListNode* middleNode(ListNode* head) {
        int i = 0;
        ListNode* dummy = head;
        while(dummy != NULL){
            dummy = dummy -> next;
            i++;
        }
        int ans = i/2;
        ListNode* temp = head;
        int j = 0;
        while(j < ans){
            temp = temp -> next;
            j++;
        }
        return temp;
    }
};
```

### Java Solution

```java
class Solution {
    public static int size(ListNode head){
        int cnt=0;
        while(head!=null){
            head = head.next;
            cnt++;
        }
        return cnt;
    }
    public ListNode middleNode(ListNode head) {

        ListNode temp = head;
    
        int size = size(head);

        for(int i=0; i<size/2; i++){
            temp=temp.next;
        }

        return temp;

        
        
    }
}

```

### JavaScript Solution

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {

    let slow = head
    let fast = head

    while(fast!==null && fast.next!=null){
        slow = slow.next
        fast = fast.next.next
    }

    return slow
    
};
```