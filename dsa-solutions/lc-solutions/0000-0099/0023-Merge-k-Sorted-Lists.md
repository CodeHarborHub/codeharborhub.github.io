---
id: merge-k-sorted-lists
title: Merge k Sorted Lists (LeetCode)
sidebar_label: 0023-MergekSortedLists
description: Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) | [Merge k Sorted Lists Solution on LeetCode](https://leetcode.com/problems/merge-k-sorted-lists/solutions/) | [vaishu_1904](https://leetcode.com/u/vaishu_1904/) |

## Problem Description

You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

### Examples

#### Example 1

- **Input:** `lists = [[1,4,5],[1,3,4],[2,6]]`
- **Output:** `[1,1,2,3,4,4,5,6]`
- **Explanation:** The linked-lists are:
  [
    1->4->5,
    1->3->4,
    2->6
  ]
  merging them into one sorted list:
  1->1->2->3->4->4->5->6

#### Example 2

- **Input:** `lists = []`
- **Output:** `[]`

#### Example 3

- **Input:** `lists = [[]]`
- **Output:** `[]`

### Constraints

- `k == lists.length`
- $0 <= k <= 10^4$
- $0 <= lists[i].length <= 500$
- $-10^4 <= lists[i][j] <= 10^4$
- `lists[i]` is sorted in ascending order.
- The sum of `lists[i].length` will not exceed `10^4`.

### Approach

To merge `k` sorted linked lists, we can use a min-heap (priority queue) to efficiently get the smallest node among the current heads of the lists. This ensures that we always add the smallest element to the merged list. 

1. **Initialize the Min-Heap:**
   - Add the first node of each linked list to the heap.
   
2. **Build the Merged List:**
   - Extract the smallest node from the heap and add it to the merged list.
   - If the extracted node has a next node, add it to the heap.
   - Repeat until the heap is empty.

### Solution Code

#### Python

```python
from heapq import heappop, heappush

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

    def __lt__(self, other):
        return self.val < other.val

class Solution:
    def mergeKLists(self, lists):
        min_heap = []
        
        # Initialize the heap
        for l in lists:
            if l:
                heappush(min_heap, l)
        
        dummy = ListNode()
        current = dummy
        
        # Extract the minimum node from the heap
        while min_heap:
            node = heappop(min_heap)
            current.next = node
            current = current.next
            if node.next:
                heappush(min_heap, node.next)
        
        return dummy.next
```
#### Java

```java
import java.util.PriorityQueue;

class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { val = x; }
}

class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        PriorityQueue<ListNode> minHeap = new PriorityQueue<>((a, b) -> a.val - b.val);

        for (ListNode list : lists) {
            if (list != null) {
                minHeap.offer(list);
            }
        }

        ListNode dummy = new ListNode(0);
        ListNode current = dummy;

        while (!minHeap.isEmpty()) {
            ListNode node = minHeap.poll();
            current.next = node;
            current = current.next;
            if (node.next != null) {
                minHeap.offer(node.next);
            }
        }

        return dummy.next;
    }
}

```

#### C++

``` c++
#include <queue>

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(nullptr) {}
};

struct compare {
    bool operator()(ListNode* a, ListNode* b) {
        return a->val > b->val;
    }
};

class Solution {
public:
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        priority_queue<ListNode*, vector<ListNode*>, compare> minHeap;
        
        for (ListNode* list : lists) {
            if (list != nullptr) {
                minHeap.push(list);
            }
        }
        
        ListNode dummy(0);
        ListNode* current = &dummy;
        
        while (!minHeap.empty()) {
            ListNode* node = minHeap.top();
            minHeap.pop();
            current->next = node;
            current = current->next;
            if (node->next != nullptr) {
                minHeap.push(node->next);
            }
        }
        
        return dummy.next;
    }
};

```

#### Conclusion
The above solutions effectively merge k sorted linked lists into a single sorted list using a min-heap. This approach ensures that the smallest element is always added next to the merged list, maintaining sorted order. This solution efficiently handles edge cases and returns the correct merged list for various input configurations.