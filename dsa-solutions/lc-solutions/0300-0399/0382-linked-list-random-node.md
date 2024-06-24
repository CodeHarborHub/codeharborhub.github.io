---
id: linked-list-random-node
title: Linked List Random Node
sidebar_label: 0382-Linked List Random Node
tags:
  - Linked List
  - Leet code
description: "Solution to leetocde 382"
---

### Problem Description

Given a singly linked list, return a random node's value from the linked list. Each node must have the same probability of being chosen.

Implement the Solution class:

Solution(ListNode head) Initializes the object with the head of the singly-linked list head.
int getRandom() Chooses a node randomly from the list and returns its value. All the nodes of the list should be equally likely to be chosen.

### Example 1:

```
Input
["Solution", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom"]
[[[1, 2, 3]], [], [], [], [], []]
Output
[null, 1, 3, 2, 2, 3]
```

Explanation:

```
Solution solution = new Solution([1, 2, 3]);
solution.getRandom(); // return 1
solution.getRandom(); // return 3
solution.getRandom(); // return 2
solution.getRandom(); // return 2
solution.getRandom(); // return 3
// getRandom() should return either 1, 2, or 3 randomly. Each element should have equal probability of returning.
```

### Constraints:

- The number of nodes in the linked list will be in the range $[1, 104].$
- $-104 <= Node.val <= 104$
- At most `10^4` calls will be made to getRandom.

### Follow up:

- What if the linked list is extremely large and its length is unknown to you?
- Could you solve this efficiently without using extra space?

### Algorithm

The `Solution` class is designed to choose a random node's value from a linked list. Here is a high-level overview of the algorithm used in the class:

1. **Initialization:**

   - Store the head of the linked list.
   - Compute the size of the linked list.

2. **Compute the Length (`len` method):**

   - Traverse the linked list from the head to the end.
   - Count the number of nodes.

3. **Get Random Node Value (`getRandom` method):**
   - Generate a random number within the range of the linked list size.
   - Traverse the linked list to the node at the position of the generated random number.
   - Return the value of that node.

### C++ Code

```cpp
#include <cstdlib> // for rand()

// Definition for singly-linked list.
struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
private:
    ListNode *head;
    int size;

    int len(ListNode* head) {
        ListNode* mover = head;
        int n = 0;
        while (mover) {
            n++;
            mover = mover->next;
        }
        return n;
    }

public:
    Solution(ListNode* head) {
        this->head = head;
        size = len(head);
    }

    int getRandom() {
        int move = rand() % size;
        ListNode* mover = head;
        while (move) {
            mover = mover->next;
            move--;
        }
        return mover->val;
    }
};
```

### Python Code

```python
import random

# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def __init__(self, head: ListNode):
        self.head = head
        self.size = self.len(head)

    def len(self, head: ListNode) -> int:
        mover = head
        n = 0
        while mover:
            n += 1
            mover = mover.next
        return n

    def getRandom(self) -> int:
        move = random.randint(0, self.size - 1)
        mover = self.head
        while move:
            mover = mover.next
            move -= 1
        return mover.val
```

### Java Code

```java
import java.util.Random;

// Definition for singly-linked list.
class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { val = x; next = null; }
}

class Solution {
    private ListNode head;
    private int size;
    private Random random;

    public Solution(ListNode head) {
        this.head = head;
        this.size = len(head);
        this.random = new Random();
    }

    private int len(ListNode head) {
        ListNode mover = head;
        int n = 0;
        while (mover != null) {
            n++;
            mover = mover.next;
        }
        return n;
    }

    public int getRandom() {
        int move = random.nextInt(size);
        ListNode mover = head;
        while (move > 0) {
            mover = mover.next;
            move--;
        }
        return mover.val;
    }
}
```

### JavaScript Code

```javascript
// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

class Solution {
  constructor(head) {
    this.head = head;
    this.size = this.len(head);
  }

  len(head) {
    let mover = head;
    let n = 0;
    while (mover !== null) {
      n++;
      mover = mover.next;
    }
    return n;
  }

  getRandom() {
    const move = Math.floor(Math.random() * this.size);
    let mover = this.head;
    let steps = move;
    while (steps > 0) {
      mover = mover.next;
      steps--;
    }
    return mover.val;
  }
}
```
