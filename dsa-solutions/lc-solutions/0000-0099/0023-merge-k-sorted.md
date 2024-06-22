---

id: merge-k-sorted-list
title: Merge k Sorted Lists
sidebar_label: 0023-Merge-k-sorted-list
tags:
  - Linked List
  - Divide and Conquer
  - Heap (Priority Queue)
  - Merge Sort
description: "The given code provides a solution to merge k sorted linked lists into one sorted linked list. The approach used is a divide-and-conquer strategy."
---




## Problem Description

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

### Examples

**Example 1:**

```plaintext
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
```
Explanation:
  - The linked-lists are:
```
[ 1->4->5,1->3->4,2->6]
```
merging them into one sorted list:
`1->1->2->3->4->4->5->6`

**Example 2:**

```plaintext
Input:  lists = [[]]
Output:[]
```

### Constraints

- `k == lists.length`
- `0 <= k <= 104`
- `0 <= lists[i].length <= 500`
- `-104 <= lists[i][j] <= 104`
- `lists[i] is sorted in ascending order`
- `he sum of lists[i].length will not exceed 104.`



---

# Solution to Merge K Sorted Linked Lists

The given code provides a solution to merge \( k \) sorted linked lists into one sorted linked list. The approach used is a divide-and-conquer strategy.

## Approach 

### Divide and Conquer

1. The `mergeKLists` function initiates the process by calling the `mergeKListsHelper` function with the entire list of linked lists.
2. The `mergeKListsHelper` function recursively divides the array of lists into halves until it reaches the base case where there is only one list or two lists.
3. If there are two lists, they are merged using the `merge` function.
4. If there is only one list, it is returned as is.
5. The merging process continues by combining the merged halves recursively until the entire list is merged into a single sorted list.

### Merge Function

1. The `merge` function takes two sorted linked lists and merges them into one sorted linked list.
2. A dummy node is used to simplify the merging process.
3. It iterates through both lists, attaching the smaller node to the current node, and moves the pointer of the list from which the node was taken.
4. After one of the lists is exhausted, the remaining nodes of the other list are attached to the merged list.
5. The merged list (starting from the node after the dummy node) is returned.



## Code in Different Languages
<Tabs>
  
  <TabItem value="Python" label="Python">
  <SolutionAuthor name=""/>
   ```python
    class Solution:
        def mergeKLists(self, lists: List[ListNode]) -> ListNode:
            if not lists:
                return None
            if len(lists) == 1:
                return lists[0]

            mid = len(lists) // 2
            left = self.mergeKLists(lists[:mid])
            right = self.mergeKLists(lists[mid:])

            return self.merge(left, right)

        def merge(self, l1, l2):
            dummy = ListNode(0)
            curr = dummy

            while l1 and l2:
                if l1.val < l2.val:
                    curr.next = l1
                    l1 = l1.next
                else:
                    curr.next = l2
                    l2 = l2.next
                curr = curr.next

            curr.next = l1 or l2

            return dummy.next
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name=""/>
    ``` java
    class Solution {
        public ListNode mergeKLists(ListNode[] lists) {
            if (lists == null || lists.length == 0) {
                return null;
            }
            return mergeKListsHelper(lists, 0, lists.length - 1);
        }

        private ListNode mergeKListsHelper(ListNode[] lists, int start, int end) {
            if (start == end) {
                return lists[start];
            }
            if (start + 1 == end) {
                return merge(lists[start], lists[end]);
            }
            int mid = start + (end - start) / 2;
            ListNode left = mergeKListsHelper(lists, start, mid);
            ListNode right = mergeKListsHelper(lists, mid + 1, end);
            return merge(left, right);
        }

        private ListNode merge(ListNode l1, ListNode l2) {
            ListNode dummy = new ListNode(0);
            ListNode curr = dummy;

            while (l1 != null && l2 != null) {
                if (l1.val < l2.val) {
                    curr.next = l1;
                    l1 = l1.next;
                } else {
                    curr.next = l2;
                    l2 = l2.next;
                }
                curr = curr.next;
            }

            curr.next = (l1 != null) ? l1 : l2;

            return dummy.next;
        }
    }
    ```

    </TabItem>
    <TabItem value="C++" label="C++">
    <SolutionAuthor name=""/>
    ```cpp
    class Solution {
    public:
        ListNode* mergeKLists(vector<ListNode*>& lists) {
            if (lists.empty()) {
                return nullptr;
            }
            return mergeKListsHelper(lists, 0, lists.size() - 1);
        }
        
        ListNode* mergeKListsHelper(vector<ListNode*>& lists, int start, int end) {
            if (start == end) {
                return lists[start];
            }
            if (start + 1 == end) {
                return merge(lists[start], lists[end]);
            }
            int mid = start + (end - start) / 2;
            ListNode* left = mergeKListsHelper(lists, start, mid);
            ListNode* right = mergeKListsHelper(lists, mid + 1, end);
            return merge(left, right);
        }
        
        ListNode* merge(ListNode* l1, ListNode* l2) {
            ListNode* dummy = new ListNode(0);
            ListNode* curr = dummy;
            
            while (l1 && l2) {
                if (l1->val < l2->val) {
                    curr->next = l1;
                    l1 = l1->next;
                } else {
                    curr->next = l2;
                    l2 = l2->next;
                }
                curr = curr->next;
            }
            
            curr->next = l1 ? l1 : l2;
            
            return dummy->next;
        }
    };
    ```

  </TabItem>
</Tabs>

### Complexity analysis

- **Time Complexity**: \( O(n \log k) \), where \( n \) is the total number of nodes and \( k \) is the number of linked lists.
- **Space Complexity**: \( O(\log k) \) due to the recursion stack.



## References

- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/merge-k-sorted-lists/description/)
- **Solution Link:** [Merge K sorted Lists Solution on LeetCode](https://leetcode.com/problems/merge-k-sorted-lists/solutions/3285930/100-faster-c-java-python/)


