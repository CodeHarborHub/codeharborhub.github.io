---
id: reorder-list
title: Reorder List
sidebar_label: 0143 - Reorder List
tags:
- Linked List
- Two Pointers
- Stack
- Recursion
description: "This is a solution to the Reorder List problem on LeetCode."
---

## Problem Description
You are given the head of a singly linked-list. The list can be represented as:
`L0 → L1 → … → Ln - 1 → Ln`
Reorder the list to be on the following form:
`L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …`
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

### Examples

**Example 1:**
![image](https://assets.leetcode.com/uploads/2021/03/04/reorder1linked-list.jpg)
```
Input: head = [1,2,3,4]
Output: [1,4,2,3]
```
**Example 2:**
![image](https://assets.leetcode.com/uploads/2021/03/09/reorder2-linked-list.jpg)
```
Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
```
### Constraints
- The number of nodes in the list is in the range $([1, 5 * 10^4])$.
- `1 <= Node.val <= 1000`


## Solution for Reorder List
  
### Intuition
#### Find the Middle:
- Use two pointers to traverse the list at different speeds (one moving one step at a time, the other two steps). When the faster pointer reaches the end, the slower pointer will be at the middle. This splits the list into two halves.

#### Reverse the Second Half:
- Reverse the second half of the list. This means changing the direction of the links between nodes in this part of the list so that the last node becomes the first node of this half.

#### Merge the Two Halves:
- Start from the beginning of the list and the beginning of the reversed second half.
- Alternate nodes from each half to weave them together into a single reordered list.
- Continue this process until all nodes are merged.

<Tabs>
  <TabItem value="Solution" label="Solution">

#### Implementation
```jsx live
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}
// Function to reverse the linked list
function reverse(head) {
    let curr = head;
    let prev = null;
    let ptr = null;

    while (curr !== null) {
        ptr = curr.next;
        curr.next = prev;
        prev = curr;
        curr = ptr;
    }
    return prev;
}

// Function to reorder the linked list
function reorderList(head) {
    if (!head || !head.next) return;

    // Find the middle of the linked list
    let slow = head;
    let fast = head;
    let last = head;

    while (fast !== null && fast.next !== null) {
        last = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    // Split the list into two halves
    last.next = null;

    // Reverse the second half of the list
    let second = reverse(slow);
    let first = head;

    // Merge the two halves
    while (second) {
        let temp1 = first.next;
        let temp2 = second.next;

        first.next = second;
        second.next = temp1;

        first = temp1;
        second = temp2;
    }
}

const input = [1, 2, 3, 4, 5];

// Construct the linked list from the input array
let head = new Node(input[0]);
let current = head;
let stack = [head];
for (let i = 1; i < input.length; i++) {
    if (input[i] === null) continue;
    let newNode = new Node(input[i]);
    current.next = newNode;
    newNode.prev = current;
    current = newNode;
    if (input[i] !== null) {
        stack.push(current);
    }
}

// Flatten the linked list
let output = reorderList(head);

return (
    <div>
        <p>
            <b>Input: </b>{JSON.stringify(input)}
        </p>
        <p>
            <b>Output:</b> {output ? output.toString() : 'null'}
        </p>
    </div>
);
```
### Code in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```javascript
   function createNode(val, next = null) {
    return { val, next };
}

function reverse(head) {
    let curr = head;
    let prev = null;
    let ptr = null;

    while (curr !== null) {
        ptr = curr.next;
        curr.next = prev;
        prev = curr;
        curr = ptr;
    }

    return prev;
}

function findMiddle(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

function reorderList(head) {
    let middle = findMiddle(head);
    let second = reverse(middle);
    let first = head;

    while (second !== null && first !== null) {
        let temp1 = first.next;
        let temp2 = second.next;

        if (first.next !== null) {
            first.next = second;
        }
        if (second.next !== null) {
            second.next = temp1;
        }

        second = temp2;
        first = temp1;
    }
}

// Example usage:
// Create a linked list
let head = createNode(1);
head.next = createNode(2);
head.next.next = createNode(3);
head.next.next.next = createNode(4);
head.next.next.next.next = createNode(5);

reorderList(head);

// Print the reordered list
let current = head;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}

    ```
  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@hiteshgahanolia"/> 
   ```typescript
   interface ListNode {
    val: number;
    next: ListNode | null;
}

function createNode(val: number, next: ListNode | null = null): ListNode {
    return { val, next };
}

function reverse(head: ListNode | null): ListNode | null {
    let curr: ListNode | null = head;
    let prev: ListNode | null = null;
    let ptr: ListNode | null = null;

    while (curr !== null) {
        ptr = curr.next;
        curr.next = prev;
        prev = curr;
        curr = ptr;
    }

    return prev;
}

function findMiddle(head: ListNode | null): ListNode | null {
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast !== null && fast.next !== null) {
        slow = slow!.next;
        fast = fast!.next.next;
    }

    return slow;
}

function reorderList(head: ListNode | null): void {
    let middle: ListNode | null = findMiddle(head);
    let second: ListNode | null = reverse(middle);
    let first: ListNode | null = head;

    while (second !== null && first !== null) {
        let temp1: ListNode | null = first.next;
        let temp2: ListNode | null = second.next;

        if (first.next !== null) {
            first.next = second;
        }
        if (second.next !== null) {
            second.next = temp1;
        }

        second = temp2;
        first = temp1;
    }
}

// Example usage:
// Create a linked list
let head: ListNode = createNode(1);
head.next = createNode(2);
head.next.next = createNode(3);
head.next.next.next = createNode(4);
head.next.next.next.next = createNode(5);

reorderList(head);

// Print the reordered list
let current: ListNode | null = head;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}

   
 ```
  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
   class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse(head):
    curr = head
    prev = None
    ptr = None

    while curr:
        ptr = curr.next
        curr.next = prev
        prev = curr
        curr = ptr

    return prev

def reorderList(head):
    slow = head
    fast = head
    last = head

    while fast:
        last = slow
        slow = slow.next
        fast = fast.next
        if fast:
            fast = fast.next

    last.next = None
    second = reverse(slow)
    first = head

    while second:
        temp1 = first.next
        temp2 = second.next

        first.next = second
        second.next = temp1

        second = temp2
        first = temp1

# Example usage:
# Create a linked list
head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(3)
head.next.next.next = ListNode(4)
head.next.next.next.next = ListNode(5)

reorderList(head)

# Print the reordered list
current = head
while current:
    print(current.val, end=" ")
    current = current.next

    ```

  </TabItem>
 <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
```
class ListNode {
    int val;
    ListNode next;
    ListNode(int x) {
        val = x;
        next = null;
    }
}

public class Solution {
    public ListNode reverse(ListNode head) {
        ListNode curr = head;
        ListNode prev = null;
        ListNode ptr = null;

        while (curr != null) {
            ptr = curr.next;
            curr.next = prev;
            prev = curr;
            curr = ptr;
        }
        return prev;
    }

    public void reorderList(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;
        ListNode last = head;
        
        while (fast != null) {
            last = slow;
            slow = slow.next;
            fast = fast.next;
            if (fast != null) {
                fast = fast.next;
            }
        }
        
        last.next = null;
        ListNode second = reverse(slow);
        ListNode first = head;
        
        while (second != null) {
            ListNode temp1 = first.next;
            ListNode temp2 = second.next;
            
            first.next = second;
            second.next = temp1;
            
            second = temp2;
            first = temp1;
        }
    }
}

```
</TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
```cpp
 ListNode* Reverse(ListNode* head)
    {
        ListNode* curr = head;
        ListNode* prev = NULL;
        ListNode* ptr = NULL;

            while(curr != NULL)
            {
                ptr = curr -> next;
                curr -> next = prev;
                prev = curr;
                curr = ptr;
            }
            return prev;
    }

    void reorderList(ListNode* head) {
        ListNode* slow = head;
        ListNode* fast = head;
        ListNode* last = head;
        while(fast != NULL)
        {
            last = slow;
            slow = slow -> next;
            fast = fast -> next;
            if(fast != NULL)
            {   
                fast = fast -> next;
            }
        }

        last -> next = NULL;
        ListNode* second = Reverse(slow);
        ListNode* first = head;

        while(second)
        {
            ListNode* temp1 = first -> next;
            ListNode* temp2 = second -> next;

            first -> next = second;
            second -> next = temp1;

            second = temp2;
            first = temp1;
        }
        
    }
```
  </TabItem>
  </Tabs>

#### Complexity Analysis
- Time Complexity: $ O(N)$
 - Space Complexity: $ O(1)$
</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Reorder List](https://leetcode.com/problems/reorder-list/description/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/reorder-list/solutions)
