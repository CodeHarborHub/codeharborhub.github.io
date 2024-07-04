---
id: Skip-List-Search
title: Skip List Search
sidebar_label: Skip List Search
tags:
  - Advanced
  - Search Algorithms
  - Data Structures
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Skip List Search problem."

---

## What is Skip List Search?

Skip List Search is an advanced search algorithm that combines elements of linked lists and binary search trees to efficiently search through sorted data. Skip Lists use multiple levels of linked lists with increasingly sparse elements, allowing for fast search, insertion, and deletion operations.

## Algorithm for Skip List Search

1. **Start at the top level**: Begin the search at the highest level of the skip list.
2. **Traverse horizontally**: Move forward until the next element is greater than or equal to the target.
3. **Move down a level**: If the target is not found, move down to the next level and repeat the horizontal traversal.
4. **Repeat**: Continue the process until the lowest level is reached.
5. **Check for the target**: If the target is found at any level, return its position. If the target is not found after reaching the lowest level, return -1.

## How does Skip List Search work?

- Skip Lists are constructed with multiple layers where each layer is a subset of the layer below it.
- The top layer is the sparsest, while the bottom layer contains all the elements.
- Searching starts from the top layer and progresses horizontally and vertically, narrowing down the search range efficiently.

## Problem Description

Given a skip list and a target element, implement the Skip List Search algorithm to find the position of the target element. If the element is not present, return -1.

## Examples

**Example 1:**
Input:
skip_list = [[1, 3, 5, 7, 9], [1, 3, 7], [1]]
target = 5
Output: 2

**Example 2:**
Input:
skip_list = [[2, 4, 6, 8, 10], [2, 6], [2]]
target = 7
Output: -1

## Your Task

Complete the function `skip_list_search()` which takes a 2D array `skip_list` and an integer `target` as input parameters and returns the index of the target element. If the element is not present, return -1.

Expected Time Complexity: $O(\log n)$
Expected Auxiliary Space: $O(n)$

## Constraints

- $1 <= n <= 10^5$
- $1 <= skip_list[i] <= 10^6$
- $1 <= target <= 10^6$

## Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>

```python
class Node:
    def __init__(self, value=None, right=None, down=None):
        self.value = value
        self.right = right
        self.down = down

class SkipList:
    def __init__(self):
        self.head = Node()

    def search(self, target):
        current = self.head
        while current:
            while current.right and current.right.value < target:
                current = current.right
            if current.right and current.right.value == target:
                return True
            current = current.down
        return False

# Example usage:
skip_list = SkipList()
# Add elements to skip_list...
print(skip_list.search(5))  # Output: True or False
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp
#include <iostream>
#include <vector>

struct Node {
    int value;
    Node* right;
    Node* down;
    Node(int val) : value(val), right(nullptr), down(nullptr) {}
};

class SkipList {
public:
    SkipList() {
        head = new Node(-1);
    }

    bool search(int target) {
        Node* current = head;
        while (current) {
            while (current->right && current->right->value < target) {
                current = current->right;
            }
            if (current->right && current->right->value == target) {
                return true;
            }
            current = current->down;
        }
        return false;
    }

private:
    Node* head;
};

// Example usage:
int main() {
    SkipList skip_list;
    // Add elements to skip_list...
    std::cout << skip_list.search(5) << std::endl;  // Output: 1 or 0
    return 0;
}
```

  </TabItem>
  <TabItem value="Java" label="Java">

```java
class Node {
    int value;
    Node right, down;
    Node(int val) {
        value = val;
        right = down = null;
    }
}

class SkipList {
    private Node head;

    public SkipList() {
        head = new Node(-1);
    }

    public boolean search(int target) {
        Node current = head;
        while (current != null) {
            while (current.right != null && current.right.value < target) {
                current = current.right;
            }
            if (current.right != null && current.right.value == target) {
                return true;
            }
            current = current.down;
        }
        return false;
    }

    public static void main(String[] args) {
        SkipList skipList = new SkipList();
        // Add elements to skipList...
        System.out.println(skipList.search(5));  // Output: true or false
    }
}
```

 </TabItem>
  <TabItem value="JavaScript" label="JavaScript">

```javascript
class Node {
    constructor(value = null, right = null, down = null) {
        this.value = value;
        this.right = right;
        this.down = down;
    }
}

class SkipList {
    constructor() {
        this.head = new Node();
    }

    search(target) {
        let current = this.head;
        while (current) {
            while (current.right && current.right.value < target) {
                current = current.right;
            }
            if (current.right && current.right.value === target) {
                return true;
            }
            current = current.down;
        }
        return false;
    }
}

// Example usage:
const skipList = new SkipList();
// Add elements to skipList...
console.log(skipList.search(5));  // Output: true or false
```

 </TabItem>
</Tabs>

# Complexity Analysis
### Time Complexity: $O(\log n)$, where $n$ is the number of elements in the list. Skip List Search provides a logarithmic time complexity by reducing the number of elements to check at each level.
### Space Complexity: $O(n)$, as it requires additional space to store the multiple levels of linked lists.
# Advantages and Disadvantages
## Advantages:

Faster search times compared to linear search.

Easier to implement and maintain compared to balanced trees like AVL or Red-Black trees.

Allows for efficient insertion and deletion operations.
## Disadvantages:

Requires extra space to maintain the skip list levels.

Performance can degrade if the levels are not well-balanced.
References
Wikipedia: Skip List
Geeks for Geeks: Skip List
