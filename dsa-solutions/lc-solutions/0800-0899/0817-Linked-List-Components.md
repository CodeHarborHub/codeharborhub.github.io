---
id: linked-list-components
title: Linked List Components
sidebar_label: 0817-Linked-List-Components
tags:
  - Linked Lists
  - Hashing
  - C++
  - Java
  - Python
description: "This document provides a solution to the Linked List Components problem, where we need to count the number of connected components in a linked list."
---

## Problem

You are given the head of a linked list containing unique integer values and an integer array `nums` that is a subset of the linked list values.

Return the number of connected components in `nums`, where two values are connected if they appear consecutively in the linked list.

### Examples

**Example 1:**

Input: head = [0,1,2,3], nums = [0,1,3]
Output: 2
Explanation: 0 and 1 are connected, so [0, 1] forms one component. 3 is a single component.

**Example 2:**

Input: head = [0,1,2,3,4], nums = [0,3,1,4]
Output: 2
Explanation: 0 and 1 are connected, so [0, 1] forms one component. 3 and 4 are connected, so [3, 4] forms another component.

### Constraints

- The number of nodes in the linked list is in the range `[1, 10^4]`.
- `0 <= Node.val < 10^4`
- All values in the linked list are unique.
- All values in `nums` are unique.
- `nums` is a subset of the linked list values.

### Approach

To solve this problem, we can use a set to store the values in `nums` for quick lookup. We then iterate through the linked list, checking if each node's value is in the set. We count components by checking if the current node starts a new component, which happens if it's in `nums` but the previous node isn't, or if it's the first node.

The detailed steps are:

1. Store all elements of `nums` in a set.
2. Initialize a counter for the components.
3. Traverse the linked list, incrementing the counter when encountering a new component.
4. Return the counter.

### Solution

#### Code in Different Languages

### C++ Solution

```cpp
#include <unordered_set>
#include <vector>

using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(NULL) {}
};

int numComponents(ListNode* head, vector<int>& nums) {
    unordered_set<int> num_set(nums.begin(), nums.end());
    int count = 0;
    bool in_component = false;

    while (head != NULL) {
        if (num_set.find(head->val) != num_set.end()) {
            if (!in_component) {
                in_component = true;
                count++;
            }
        } else {
            in_component = false;
        }
        head = head->next;
    }

    return count;
}
```

### Java Solution

```java
import java.util.HashSet;
import java.util.Set;

public class LinkedListComponents {
    public static class ListNode {
        int val;
        ListNode next;
        ListNode(int x) { val = x; }
    }

    public int numComponents(ListNode head, int[] nums) {
        Set<Integer> numSet = new HashSet<>();
        for (int num : nums) {
            numSet.add(num);
        }

        int count = 0;
        boolean inComponent = false;

        while (head != null) {
            if (numSet.contains(head.val)) {
                if (!inComponent) {
                    inComponent = true;
                    count++;
                }
            } else {
                inComponent = false;
            }
            head = head.next;
        }

        return count;
    }

    public static void main(String[] args) {
        ListNode head = new ListNode(0);
        head.next = new ListNode(1);
        head.next.next = new ListNode(2);
        head.next.next.next = new ListNode(3);

        int[] nums = {0, 1, 3};
        LinkedListComponents solution = new LinkedListComponents();
        System.out.println(solution.numComponents(head, nums));  // Output: 2
    }
}
```

### Python Solution

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def numComponents(head, nums):
    num_set = set(nums)
    count = 0
    in_component = False

    while head:
        if head.val in num_set:
            if not in_component:
                in_component = True
                count += 1
        else:
            in_component = False
        head = head.next

    return count

# Test
head = ListNode(0)
head.next = ListNode(1)
head.next.next = ListNode(2)
head.next.next.next = ListNode(3)

nums = [0, 1, 3]
print(numComponents(head, nums))  # Output: 2
```

### Complexity Analysis

**Time Complexity:** O(n)

> Reason: We traverse the linked list once and perform constant-time operations for each node.

**Space Complexity:** O(n)

> Reason: We use a set to store the elements of nums, which takes O(n) space.

This solution efficiently counts the number of connected components in a linked list by leveraging a set for quick lookups and a linear traversal of the linked list. The time complexity is linear, and the space complexity is linear as well, making it suitable for large input sizes.

### References

**LeetCode Problem:** Linked List Components
