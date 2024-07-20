---
id: split-linked-list-in-parts
title: Split Linked List in Parts
sidebar_label: 0725 - Split Linked List in Parts
tags:
  - Linked List
  - Math
  - Array
description: "This is a solution to the Split Linked List in Parts problem on LeetCode."
---

## Problem Description

Given the `head` of a singly linked list and an integer `k`, split the linked list into `k` consecutive linked list parts.

The length of each part should be as equal as possible: no two parts should have a size differing by more than one. This may lead to some parts being null.

The parts should be in the order of occurrence in the input list, and parts occurring earlier should always have a size greater than or equal to parts occurring later.

Return an array of the `k` parts.

### Examples
**Example 1:**

![image](https://assets.leetcode.com/uploads/2021/06/13/split1-lc.jpg)
```
Input: head = [1,2,3], k = 5
Output: [[1],[2],[3],[],[]]
Explanation:
The first element output[0] has output[0].val = 1, output[0].next = null.
The last element output[4] is null, but its string representation as a ListNode is [].
```

**Example 2:**

![image](https://assets.leetcode.com/uploads/2021/06/13/split2-lc.jpg)
```
Input: head = [1,2,3,4,5,6,7,8,9,10], k = 3
Output: [[1,2,3,4],[5,6,7],[8,9,10]]
Explanation:
The input has been split into consecutive parts with size difference at most 1, and earlier parts are a larger size than the later parts.
```

### Constraints

- The number of nodes in the list is in the range `[0, 1000]`.
- `0 <= Node.val <= 1000`
- `1 <= k <= 50`

## Solution for Split Linked List in Parts

### Approach 1: Create New Lists

#### Intuition and Algorithm

If there are N nodes in the linked list root, then there are N/k items in each part, plus the first N%k parts have an extra item. We can count N with a simple loop.

Now for each part, we have calculated how many nodes that part will have: `width + (i < remainder ? 1 : 0)`. We create a new list and write the part to that list.

Our solution showcases constructs of the form `a = b = c`. Note that this syntax behaves differently for different languages.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
class Solution {
public:
    vector<ListNode*> splitListToParts(ListNode* root, int k) {
        ListNode* cur = root;
        int N = 0;
        while (cur != nullptr) {
            cur = cur->next;
            N++;
        }

        int width = N / k, rem = N % k;

        vector<ListNode*> ans(k, nullptr);
        cur = root;
        for (int i = 0; i < k; ++i) {
            ListNode* head = new ListNode(0), *write = head;
            for (int j = 0; j < width + (i < rem ? 1 : 0); ++j) {
                write = write->next = new ListNode(cur ? cur->val : 0);
                if (cur) {
                    cur = cur->next;
                }
            }
            ans[i] = head->next;
        }
        return ans;
    }
};
```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public ListNode[] splitListToParts(ListNode root, int k) {
        ListNode cur = root;
        int N = 0;
        while (cur != null) {
            cur = cur.next;
            N++;
        }

        int width = N / k, rem = N % k;

        ListNode[] ans = new ListNode[k];
        cur = root;
        for (int i = 0; i < k; ++i) {
            ListNode head = new ListNode(0), write = head;
            for (int j = 0; j < width + (i < rem ? 1 : 0); ++j) {
                write = write.next = new ListNode(cur.val);
                if (cur != null) {
                    cur = cur.next;
                }
            }
            ans[i] = head.next;
        }
        return ans;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution(object):
    def splitListToParts(self, root, k):
        cur = root
        for N in xrange(1001):
            if not cur: break
            cur = cur.next
        width, remainder = divmod(N, k)

        ans = []
        cur = root
        for i in xrange(k):
            head = write = ListNode(None)
            for j in xrange(width + (i < remainder)):
                write.next = write = ListNode(cur.val)
                if cur: cur = cur.next
            ans.append(head.next)
        return ans
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(N+k)$

> **Reason**:  where N is the number of nodes in the given list. If k is large, it could still require creating many new empty lists.

### Space Complexity: $O(max(N,k))$

> **Reason**: the space used in writing the answer.

### Approach 2: Split Input List
#### Intuition and Algorithm

As in Approach 1, we know the size of each part. Instead of creating new lists, we will split the input list directly and return a list of pointers to nodes in the original list as appropriate.

Our solution proceeds similarly. For a part of size `L = width + (i < remainder ? 1 : 0)`, instead of stepping `L` times, we will step `L - 1` times, and our final time will also sever the link between the last node from the previous part and the first node from the next part.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
class Solution {
public:
    vector<ListNode*> splitListToParts(ListNode* root, int k) {
        ListNode* cur = root;
        int N = 0;
        while (cur != nullptr) {
            cur = cur->next;
            N++;
        }

        int width = N / k, rem = N % k;

        vector<ListNode*> ans(k, nullptr);
        cur = root;
        for (int i = 0; i < k; ++i) {
            ListNode* head = cur;
            for (int j = 0; j < width + (i < rem ? 1 : 0) - 1; ++j) {
                if (cur != nullptr) {
                    cur = cur->next;
                }
            }
            if (cur != nullptr) {
                ListNode* prev = cur;
                cur = cur->next;
                prev->next = nullptr;
            }
            ans[i] = head;
        }
        return ans;
    }
};
```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public ListNode[] splitListToParts(ListNode root, int k) {
        ListNode cur = root;
        int N = 0;
        while (cur != null) {
            cur = cur.next;
            N++;
        }

        int width = N / k, rem = N % k;

        ListNode[] ans = new ListNode[k];
        cur = root;
        for (int i = 0; i < k; ++i) {
            ListNode head = cur;
            for (int j = 0; j < width + (i < rem ? 1 : 0) - 1; ++j) {
                if (cur != null) {
                    cur = cur.next;
                }
            }
            if (cur != null) {
                ListNode prev = cur;
                cur = cur.next;
                prev.next = null;
            }
            ans[i] = head;
        }
        return ans;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution(object):
    def splitListToParts(self, root, k):
        cur = root
        for N in xrange(1001):
            if not cur: break
            cur = cur.next
        width, remainder = divmod(N, k)

        ans = []
        cur = root
        for i in xrange(k):
            head = cur
            for j in xrange(width + (i < remainder) - 1):
                if cur: cur = cur.next
            if cur:
                cur.next, cur = None, cur.next
            ans.append(head)
        return ans
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(N+k)$

> **Reason**: where N is the number of nodes in the given list. If k is large, it could still require creating many new empty lists.

### Space Complexity: $O(k)$

> **Reason**: the additional space used in writing the answer.

## References

- **LeetCode Problem**: [Split Linked List](https://leetcode.com/problems/split-linked-list-in-parts/description/)

- **Solution Link**: [Split Linked List](https://leetcode.com/problems/split-linked-list-in-parts/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>