---
id: reverse-linked-list
title: Reverse a Linked List
sidebar_label: 0027 - Reverse a Linked List
tags:
  - Easy
  - Linked List
  - GeeksforGeeks
  - CPP
  - DSA
description: "This tutorial covers the solution to the Reverse a Linked List problem from the GeeksforGeeks website, featuring implementations in C++."
---
## Problem Description

Given head of a linked list, the task is to reverse this list.

## Examples

**Example 1:**

```
Input:
n = 5
value[] = {1, 2, 3, 4, 5}

Output:
5 4 3 2 1
```

**Example 2:**

```
Input:
n = 4
value[] = {10, 20, 30, 40}

Output:
40 30 20 10
```

## Your Task

You don't need to read input or print anything. Your task is to complete the function `reverseList()` which takes the head of the linked list as a parameter and returns the head of the reversed linked list.

Expected Time Complexity: O(n)

Expected Auxiliary Space: O(1)

## Constraints

* `1 ≤ n ≤ 10^4`
* `1 ≤ value[i] ≤ 10^3`

## Problem Explanation

To reverse a linked list, we need to change the links between nodes such that the next of each node points to the previous node. This can be efficiently done in a single pass through the list using three pointers.

## Code Implementation

### C++ Solution

```cpp
// Initial Template for C++
// C program to find n'th Node in linked list
#include <iostream>
#include <stdio.h>
#include <stdlib.h>
using namespace std;

/* Link list Node */
struct Node {
    int data;
    struct Node *next;

    Node(int x) {
        data = x;
        next = NULL;
    }
};

// } Driver Code Ends
/* Linked List Node structure:

struct Node
{
    int data;
    struct Node *next;
    Node(int x) {
        data = x;
        next = NULL;
    }
};
*/

class Solution {
  public:
    // Function to reverse a linked list.
    struct Node* reverseList(struct Node* head) {
        // Initialize three pointers prev, current, next
        Node* prev = NULL;
        Node* current = head;
        Node* next = NULL;
        
        // Traverse the list
        while (current != NULL) {
            // Store next node
            next = current->next;
            // Reverse current node's pointer
            current->next = prev;
            // Move pointers one position ahead
            prev = current;
            current = next;
        }
        
        // prev will be the new head
        return prev;
    }
};

// { Driver Code Starts.

void printList(struct Node *head) {
    struct Node *temp = head;
    while (temp != NULL) {
        printf("%d ", temp->data);
        temp = temp->next;
    }
}

/* Driver program to test above function */
int main() {
    int T, n, l, firstdata;
    cin >> T;

    while (T--) {
        struct Node *head = NULL, *tail = NULL;

        cin >> n;

        if (n != 0) {
            cin >> firstdata;
            head = new Node(firstdata);
            tail = head;
        }

        for (int i = 1; i < n; i++) {
            cin >> l;
            tail->next = new Node(l);
            tail = tail->next;
        }

        Solution ob;
        head = ob.reverseList(head);

        printList(head);
        cout << endl;
    }
    return 0;
}
// } Driver Code Ends
```

## Example Walkthrough

**Example 1:**

For the input:
```
n = 5
value[] = {1, 2, 3, 4, 5}
```

1. Initialize three pointers: `prev` to NULL, `current` to head, and `next` to NULL.
2. Traverse the list and reverse the links:
    - For node with value 1, reverse the link to point to `prev` (NULL).
    - Move `prev` to current node (1), and `current` to next node (2).
3. Repeat the process until the end of the list.
4. The new head is the node where `prev` points after the loop ends.

The result is a reversed list: `5 4 3 2 1`.

## Solution Logic:

1. Use three pointers: `prev`, `current`, and `next` to reverse the links between nodes.
2. Traverse the list and at each step:
    - Store the next node.
    - Reverse the link of the current node.
    - Move the pointers one step forward.
3. Return `prev` as the new head of the reversed list.

## Time Complexity

* The time complexity is \(O(n)\) where \(n\) is the number of nodes in the linked list, as we only iterate through the list once.

## Space Complexity

* The auxiliary space complexity is \(O(1)\) as we use a constant amount of space for the three pointers.

## References

- **GeeksforGeeks Problem:** [BFS of Graph](https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1?page=1&difficulty=Easy&sortBy=submissions)
- **Solution Author:** [arunimad6yuq](https://www.geeksforgeeks.org/user/arunimad6yuq/)
