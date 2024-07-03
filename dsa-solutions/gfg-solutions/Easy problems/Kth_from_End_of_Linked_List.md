---
id: kth-from-end-of-linked-list
title: Kth from End of Linked List
sidebar_label: 0016 - Kth from End of Linked List
tags:
  - Easy
  - Linked List
  - GeeksforGeeks
  - CPP
  - Python
  - DSA
description: "This tutorial covers the solution to the Kth from End of Linked List problem from the GeeksforGeeks website, featuring implementations in Python and C++."
---
## Problem Description

Given the head of a linked list and a number `k`, your task is to find the kth node from the end. If `k` is more than the number of nodes, then the output should be -1.

## Examples

**Example 1:**

```
Input:
n = 5, k = 2
value[] = [1, 2, 3, 4, 5]
Output: 4
Explanation: The 2nd node from the end is 4.
```

**Example 2:**

```
Input:
n = 3, k = 4
value[] = [10, 20, 30]
Output: -1
Explanation: There are only 3 nodes in the linked list, so the 4th node from the end does not exist.
```

## Your Task

You don't need to read input or print anything. Your task is to complete the function `getKthFromLast()` which takes the head of the linked list and `k` as input parameters and returns the data of the kth node from the end of the linked list.

Expected Time Complexity: $O(N)$

Expected Auxiliary Space: $O(1)$

## Constraints

* `1 ≤ n ≤ 10^5`
* `1 ≤ value[i] ≤ 10^7`
* `1 ≤ k ≤ 10^5`

## Problem Explanation

The task is to find the kth node from the end of a linked list. If `k` is greater than the number of nodes in the list, return -1.

## Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@arunimad6yuq"/>

  ```py
  class ListNode:
      def __init__(self, x):
          self.val = x
          self.next = None

  class Solution:
      def getKthFromLast(self, head: ListNode, k: int) -> int:
          fast = slow = head
          for _ in range(k):
              if not fast:
                  return -1
              fast = fast.next
          
          while fast:
              slow = slow.next
              fast = fast.next
          
          return slow.val if slow else -1

  # Example usage
  if __name__ == "__main__":
      head = ListNode(1)
      head.next = ListNode(2)
      head.next.next = ListNode(3)
      head.next.next.next = ListNode(4)
      head.next.next.next.next = ListNode(5)
      solution = Solution()
      print(solution.getKthFromLast(head, 2))  # Expected output: 4
  ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@arunimad6yuq"/>

  ```cpp
  //{ Driver Code Starts
  #include <bits/stdc++.h>
  using namespace std;

  struct Node {
      int data;
      struct Node *next;

      Node(int x) {
          data = x;
          next = NULL;
      }
  };

  // } Driver Code Ends
  class Solution {
  public:
      int getKthFromLast(Node *head, int k) {
          Node *fast = head, *slow = head;
          for (int i = 0; i < k; ++i) {
              if (!fast) return -1;
              fast = fast->next;
          }
          while (fast) {
              slow = slow->next;
              fast = fast->next;
          }
          return slow ? slow->data : -1;
      }
  };

  //{ Driver Code Starts.

  int main() {
      int T, i, n, l, k;

      cin >> T;

      while (T--) {
          struct Node *head = NULL, *tail = NULL;

          cin >> n >> k;
          int firstdata;
          cin >> firstdata;
          head = new Node(firstdata);
          tail = head;
          for (i = 1; i < n; i++) {
              cin >> l;
              tail->next = new Node(l);
              tail = tail->next;
          }
          Solution obj;
          cout << obj.getKthFromLast(head, k) << endl;
      }
      return 0;
  }
  // } Driver Code Ends
  ```

  </TabItem>
</Tabs>

## Example Walkthrough

**Example 1:**

For the linked list:
```
1 -> 2 -> 3 -> 4 -> 5
```
1. The 2nd node from the end is 4.

**Example 2:**

For the linked list:
```
10 -> 20 -> 30
```
1. There are only 3 nodes in the linked list, so the 4th node from the end does not exist, thus the output is -1.

## Solution Logic:

1. Use two pointers `fast` and `slow`.
2. Move `fast` pointer `k` steps ahead.
3. Move both pointers until `fast` reaches the end.
4. The `slow` pointer will be at the kth node from the end.
5. Return the value of the `slow` pointer or -1 if `k` is greater than the number of nodes.

## Time Complexity

* The function traverses the linked list once, so the time complexity is $O(N)$.

## Space Complexity

* The function uses constant space, so the auxiliary space complexity is $O(1)$.

## References

- **GeeksforGeeks Problem:** [Kth from End of Linked List](https://www.geeksforgeeks.org/problems/nth-node-from-end-of-linked-list/1)
- **Solution Author:** [arunimad6yuq](https://www.geeksforgeeks.org/user/arunimad6yuq/)
