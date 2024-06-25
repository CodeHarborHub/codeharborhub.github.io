---
id: add-two-numbers
title: Add Two Numbers Solution
sidebar_label: 0002 - Add Two Numbers
tags:
  - Linked List
  - Math
  - Recursion
  - Add Two Numbers
  - LeetCode
description: "This is a solution to the Add Two Numbers problem on LeetCode."
sidebar_position: 2
---

In this page, we will solve the Add Two Numbers problem. We will provide an overview of the problem, the intuition and approach to solve it, the implementation, and the code in various languages, along with a detailed explanation of the solution and its complexity analysis. Let's start by understanding the problem.

## Problem Statement

You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

```mermaid
graph LR
M[(Input)] --> A([l1])
M[(Input)] --> E([l2])
A --> B((2))
B --> C((4))
C --> D((3))
E --> F((5))
F((5)) --> G((6))
G --> H((4))
I[(Output)] --> J((7))
J --> K((0))
K --> L((8))
```

**Example 1:**

```plaintext
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
```

**Example 2:**

```plaintext
Input: l1 = [0], l2 = [0]
Output: [0]
```

**Example 3:**

```plaintext
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
```

### Constraints

- The number of nodes in each linked list is in the range `[1, 100]`.
- `0 <= Node.val <= 9`
- It is guaranteed that the list represents a number that does not have leading zeros.

---

## Solution for Add Two Numbers Problem

### Intuition and Approach

We iterate through both linked lists, adding corresponding node's values along with a carry from the previous addition. If the sum of the current node's values and carry is 10 or more, we keep the carry for the next addition. We continue this process until we traverse both linked lists.

### Flowchart

```mermaid
flowchart TD
    A[Start] --> B{l1 or l2 
    or carry}
    B --> |Yes| C[Add values of l1, l2, 
    and carry]
    C --> D[Calculate new carry and 
    current node value]
    D --> E[Add node with value 
    to result list]
    E --> F{Move to next 
    node in l1 and 
    l2 if exist}
    F --> |Next nodes exist| G{l1 or l2 
    or carry}
    G --> |Yes| C
    G --> |No| H[Return result list]
    F --> |Next nodes do not exist| H
    B --> |No| H
```

### Pseudocode

```plaintext
1. Initialize a dummy node and a current node to keep track of the current node.
2. Initialize a carry variable to 0.
3. Iterate through both linked lists until both are empty.
    1. Calculate the sum of the current node values and carry.
    2. Update the carry and current node value.
    3. Add the new node to the result list.
    4. Move to the next nodes in l1 and l2 if they exist.
4. Return the next node of the dummy node.
```

### Implementation and Code

Here is a live code editor for you to play around with the solution:

```jsx live
function addTwoNumbersProblem() {
  class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }

  const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
  const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

  const addTwoNumbers = function (l1, l2) {
    let dummyHead = new ListNode(0);
    let p = l1,
      q = l2,
      curr = dummyHead;
    let carry = 0;

    while (p !== null || q !== null) {
      let x = p !== null ? p.val : 0;
      let y = q !== null ? q.val : 0;
      let sum = carry + x + y;
      carry = Math.floor(sum / 10);
      curr.next = new ListNode(sum % 10);
      curr = curr.next;
      if (p !== null) p = p.next;
      if (q !== null) q = q.next;
    }

    if (carry > 0) {
      curr.next = new ListNode(carry);
    }

    return dummyHead.next;
  };

  const result = addTwoNumbers(l1, l2);
  const listToArray = (node) => {
    const arr = [];
    while (node) {
      arr.push(node.val);
      node = node.next;
    }
    return arr;
  };

  const resultArray = listToArray(result);
  return (
    <div>
      <p>
        <b>Input:</b> l1 = {"[" + listToArray(l1).join(", ") + "]"}, l2 ={" "}
        {"[" + listToArray(l2).join(", ") + "]"}
      </p>
      <p>
        <b>Output:</b> {"[" + resultArray.join(", ") + "]"}
      </p>
    </div>
  );
}
```

### Code in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@ajay-dhangar"/>
    ```javascript
    var addTwoNumbers = function(l1, l2) {
        let dummy = new ListNode(0);
        let curr = dummy;
        let carry = 0;
        while (l1 !== null || l2 !== null) {
            let x = (l1 !== null) ? l1.val : 0;
            let y = (l2 !== null) ? l2.val : 0;
            let sum = x + y + carry;
            carry = Math.floor(sum / 10);
            curr.next = new ListNode(sum % 10);
            curr = curr.next;
            if (l1 !== null) l1 = l1.next;
            if (l2 !== null) l2 = l2.next;
        }
        if (carry > 0) {
            curr.next = new ListNode(carry);
        }
        return dummy.next;
    };
    ```
    </TabItem>

    <TabItem value="Python" label="Python">
    <SolutionAuthor name="@amruta-jayanti"/>
    ```python
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        dummy = ListNode(0)
        curr = dummy
        carry = 0
        while l1 or l2:
            x = l1.val if l1 else 0
            y = l2.val if l2 else 0
            sum = x + y + carry
            carry = sum // 10
            curr.next = ListNode(sum % 10)
            curr = curr.next
            if l1:
                l1 = l1.next
            if l2:
                l2 = l2.next
        if carry > 0:
            curr.next = ListNode(carry)
        return dummy.next
    ```
    </TabItem>
    <TabItem value="Java" label="Java">
    <SolutionAuthor name="@amruta-jayanti"/>
    ```java
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;
        int carry = 0;
        while (l1 != null || l2 != null) {
            int x = (l1 != null) ? l1.val : 0;
            int y = (l2 != null) ? l2.val : 0;
            int sum = x + y + carry;
            carry = sum / 10;
            curr.next = new ListNode(sum % 10);
            curr = curr.next;
            if (l1 != null) l1 = l1.next;
            if (l2 != null) l2 = l2.next;
        }
        if (carry > 0) {
            curr.next = new ListNode(carry);
        }
        return dummy.next;
    }
    ```
    </TabItem>
    <TabItem value="C++" label="C++">
    <SolutionAuthor name="@amruta-jayanti"/>
    ```cpp
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* dummy = new ListNode(0);
        ListNode* curr = dummy;
        int carry = 0;
        while (l1 || l2) {
            int x = l1 ? l1->val : 0;
            int y = l2 ? l2->val : 0;
            int sum = x + y + carry;
            carry = sum / 10;
            curr->next = new ListNode(sum % 10);
            curr = curr->next;
            if (l1) l1 = l1->next;
            if (l2) l2 = l2->next;
        }
        if (carry > 0) {
            curr->next = new ListNode(carry);
        }
        return dummy->next;
    }
    ```
    </TabItem>
    <TabItem value="C" label="C">
    <SolutionAuthor name="@ajay-dhangar"/>
    ```c
    struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
        struct ListNode* dummy = (struct ListNode*)malloc(sizeof(struct ListNode));
        dummy->val = 0;
        dummy->next = NULL;
        struct ListNode* curr = dummy;
        int carry = 0;
        while (l1 || l2) {
            int x = l1 ? l1->val : 0;
            int y = l2 ? l2->val : 0;
            int sum = x + y + carry;
            carry = sum / 10;
            curr->next = (struct ListNode*)malloc(sizeof(struct ListNode));
            curr->next->val = sum % 10;
            curr->next->next = NULL;
            curr = curr->next;
            if (l1) l1 = l1->next;
            if (l2) l2 = l2->next;
        }
        if (carry > 0) {
            curr->next = (struct ListNode*)malloc(sizeof(struct ListNode));
            curr->next->val = carry;
            curr->next->next = NULL;
        }
        return dummy->next;
    }
    ```
    </TabItem>
    <TabItem value="ts" label="TypeScript">
    <SolutionAuthor name="@ajay-dhangar"/>
    ```typescript
    function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
        let dummy = new ListNode(0);
        let curr = dummy;
        let carry = 0;
        while (l1 || l2) {
            let x = l1 ? l1.val : 0;
            let y = l2 ? l2.val : 0;
            let sum = x + y + carry;
            carry = Math.floor(sum / 10);
            curr.next = new ListNode(sum % 10);
            curr = curr.next;
            if (l1) l1 = l1.next;
            if (l2) l2 = l2.next;
        }
        if (carry > 0) {
            curr.next = new ListNode(carry);
        }
        return dummy.next;
    }
    ```
    </TabItem>
</Tabs>

### Complexity Analysis

The time complexity for this solution is $O(max(m, n))$, where m and n are the lengths of the two linked lists. We iterate through both linked lists once, and the space complexity is $O(max(m, n))$, where m and n are the lengths of the two linked lists. The space complexity is due to the new linked list created to store the result.

### Test Cases

<Tabs>
 <TabItem value="TestCase1" label="Case 1">
```plaintext
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
```
</TabItem>
<TabItem value="TestCase2" label="Case 2">
```plaintext
Input: l1 = [0], l2 = [0]
Output: [0]
```
</TabItem>

<TabItem value="TestCase3" label="Case 3">
```plaintext
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
```
</TabItem>
</Tabs>

:::info

**Note:** The above code is a solution to the Add Two Numbers problem on LeetCode. It is a simple and efficient solution that uses a dummy node to keep track of the result linked list. The solution iterates through both linked lists, adding the corresponding node values and carry to generate the result. The time complexity of this solution is $O(max(m, n))$, where m and n are the lengths of the two linked lists, and the space complexity is $O(max(m, n))$.

:::

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['ajay-dhangar'].map(username => (
    <Author key={username} username={username} />
))}
</div>