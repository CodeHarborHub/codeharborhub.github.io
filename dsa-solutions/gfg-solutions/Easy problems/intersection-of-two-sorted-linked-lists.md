---
id: intersection-of-two-sorted-linked-lists
title: Intersection of Two Sorted Linked Lists
sidebar_label: 6 Intersection of Two Sorted Linked Lists
tags:
- Linked List
- Python
- Java
- C++
- JavaScript
- TypeScript
description: "This document provides solutions to the problem of finding the intersection of two sorted linked lists in various programming languages."
---

## Problem

Given two linked lists sorted in increasing order, create a new linked list representing the intersection of the two linked lists. The new linked list should be made without changing the original lists.

**Note:** The elements of the linked list are not necessarily distinct.

### Examples

**Example 1:**

```
Input:
LinkedList1 = 1->2->3->4->6
LinkedList2 = 2->4->6->8
Output: 
2 4 6
Explanation: For the given two linked list, 2, 4 and 6 are the elements in the intersection.
```

**Example 2:**

```
Input:
LinkedList1 = 10->20->40->50
LinkedList2 = 15->40
Output: 
40
```

### Your Task

You don't have to take any input or print anything. Your task is to complete the function `findIntersection()`, which will take the head of both of the linked lists as input and should find the intersection of the two linked lists and add all the elements in the intersection to the third linked list and return the head of the third linked list.

**Expected Time Complexity:** $O(n + m)$  
**Expected Auxiliary Space:** $O(n + m)$

**Note:** n, m are the sizes of the respective linked lists.

### Constraints
- $1 ≤ size of linked lists ≤ 5000$  
- $1 ≤ Data in linked list nodes ≤ 10^4$

## Solution

### Intuition & Approach

To find the intersection of two sorted linked lists, we can iterate through both lists simultaneously. By comparing the elements at each step, we can identify common elements and construct a new linked list to represent the intersection. This process allows us to efficiently determine which elements are present in both lists without altering the original structures.

### Implementation

<Tabs>
  <TabItem value="python" label="Python">

```python
class ListNode:
    def __init__(self, x):
        self.data = x
        self.next = None

class Solution:
    def findIntersection(self, head1, head2):
        intersection = ListNode(0)  # dummy node
        tail = intersection
        
        while head1 and head2:
            if head1.data == head2.data:
                tail.next = ListNode(head1.data)
                tail = tail.next
                head1 = head1.next
                head2 = head2.next
            elif head1.data < head2.data:
                head1 = head1.next
            else:
                head2 = head2.next
                
        return intersection.next
```

  </TabItem>
  <TabItem value="java" label="Java">

```java
class ListNode {
    int data;
    ListNode next;
    ListNode(int x) { data = x; next = null; }
}

class Solution {
    public ListNode findIntersection(ListNode head1, ListNode head2) {
        ListNode intersection = new ListNode(0);  // dummy node
        ListNode tail = intersection;
        
        while (head1 != null && head2 != null) {
            if (head1.data == head2.data) {
                tail.next = new ListNode(head1.data);
                tail = tail.next;
                head1 = head1.next;
                head2 = head2.next;
            } else if (head1.data < head2.data) {
                head1 = head1.next;
            } else {
                head2 = head2.next;
            }
        }
        
        return intersection.next;
    }
}
```

  </TabItem>
  <TabItem value="cpp" label="C++">

```cpp
struct ListNode {
    int data;
    ListNode* next;
    ListNode(int x) : data(x), next(nullptr) {}
};

class Solution {
public:
    ListNode* findIntersection(ListNode* head1, ListNode* head2) {
        ListNode* intersection = new ListNode(0);  // dummy node
        ListNode* tail = intersection;
        
        while (head1 != nullptr && head2 != nullptr) {
            if (head1->data == head2->data) {
                tail->next = new ListNode(head1->data);
                tail = tail->next;
                head1 = head1->next;
                head2 = head2->next;
            } else if (head1->data < head2->data) {
                head1 = head1->next;
            } else {
                head2 = head2->next;
            }
        }
        
        return intersection->next;
    }
};
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

```javascript
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Solution {
    findIntersection(head1, head2) {
        let intersection = new ListNode(0);  // dummy node
        let tail = intersection;
        
        while (head1 !== null && head2 !== null) {
            if (head1.data === head2.data) {
                tail.next = new ListNode(head1.data);
                tail = tail.next;
                head1 = head1.next;
                head2 = head2.next;
            } else if (head1.data < head2.data) {
                head1 = head1.next;
            } else {
                head2 = head2.next;
            }
        }
        
        return intersection.next;
    }
}
```

  </TabItem>
  <TabItem value="typescript" label="TypeScript">

```typescript
class ListNode {
    data: number;
    next: ListNode | null;
    
    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

class Solution {
    findIntersection(head1: ListNode | null, head2: ListNode | null): ListNode | null {
        let intersection = new ListNode(0);  // dummy node
        let tail = intersection;
        
        while (head1 !== null && head2 !== null) {
            if (head1.data === head2.data) {
                tail.next = new ListNode(head1.data);
                tail = tail.next;
                head1 = head1.next;
                head2 = head2.next;
            } else if (head1.data < head2.data) {
                head1 = head1.next;
            } else {
                head2 = head2.next;
            }
        }
        
        return intersection.next;
    }
}
```

  </TabItem>
</Tabs>

**Time Complexity:** $O(n + m)$  
**Auxiliary Space:** $O(n + m)$

## References

- **GeeksforGeeks Problem:** [Intersection of Two Sorted Linked Lists](https://www.geeksforgeeks.org/problems/intersection-of-two-sorted-linked-lists/0)
- **Author GeeksforGeeks Profile:** [GeeksforGeeks](https://www.geeksforgeeks.org/user/GeeksforGeeks/)
