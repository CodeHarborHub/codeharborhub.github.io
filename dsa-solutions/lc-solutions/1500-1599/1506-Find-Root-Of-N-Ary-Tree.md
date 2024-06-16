---

id: find-root-of-n-ary-tree
title: Find Root of N-Ary Tree
sidebar_label: 1506-Find-Root-Of-N-Ary-Tree
tags:
  - Tree
  - LeetCode
  - Python
  - JavaScript
  - TypeScript
  - Java
  - C++
description: "This is a solution to the Find Root of N-Ary Tree problem on LeetCode."

---

In this page, we will solve the Find Root of N-Ary Tree problem using different approaches: counting the degree of each node and a hash set approach. We will provide the implementation of the solution in JavaScript, TypeScript, Python, Java, C++, and more.

## Problem Description

You are given all the nodes of an `N`-ary tree as an array of `Node` objects, where each node has a unique value.

Return the root of the `N`-ary tree.

Each `Node` object has the following properties:

- `int val`: the value of the node.
- `List<Node> children`: the list of children of the node.

### Examples

**Example 1:**

```plaintext
Input: 
Input: [1, null, 3, 2, 4, null, 5, 6]
Output: 1
Explanation: The root of the tree is 1.
```

**Example 2:**

```plaintext
Input: 
Input: [1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9, 10, null, null, 11, null, 12, null, 13, null, null, 14]
Output: 1
Explanation: The root of the tree is 1.
```

### Constraints

- The total number of nodes is between `[1, 5 * 10^4]`.

---

## Solution for Find Root of N-Ary Tree

### Intuition and Approach

To find the root of an N-ary tree, we can use the following approaches:

1. **Counting the Degree**: In this approach, we count the in-degrees (number of times a node appears as a child) of all nodes. The node with an in-degree of zero is the root.
2. **Hash Set**: We use a hash set to keep track of all nodes and another hash set for all children nodes. The difference between these sets will give us the root node.

<Tabs>
 <tabItem value="Counting Degree" label="Counting Degree">

### Approach 1: Counting the Degree

#### Implementation

```jsx live
function findRootOfNAryTree() {
  class Node {
    constructor(val) {
      this.val = val;
      this.children = [];
    }
  }

  const nodes = [
    new Node(1),
    new Node(2),
    new Node(3),
    new Node(4),
    new Node(5),
    new Node(6)
  ];

  nodes[0].children = [nodes[1], nodes[2], nodes[3]];
  nodes[1].children = [nodes[4], nodes[5]];

  const findRoot = function(treeNodes) {
    const inDegree = new Map();
    for (const node of treeNodes) {
      if (!inDegree.has(node)) {
        inDegree.set(node, 0);
      }
      for (const child of node.children) {
        inDegree.set(child, (inDegree.get(child) || 0) + 1);
      }
    }
    for (const [node, degree] of inDegree) {
      if (degree === 0) return node;
    }
    return null;
  };

  const root = findRoot(nodes);
  return (
    <div>
      <p>
        <b>Input:</b> {JSON.stringify(nodes.map(node => node.val))}
      </p>
      <p>
        <b>Output:</b> {root ? root.val : null}
      </p>
    </div>
  );
}
```

#### Code in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@manishh12"/>
   ```javascript
    function findRoot(treeNodes) {
      const inDegree = new Map();
      for (const node of treeNodes) {
        if (!inDegree.has(node)) {
          inDegree.set(node, 0);
        }
        for (const child of node.children) {
          inDegree.set(child, (inDegree.get(child) || 0) + 1);
        }
      }
      for (const [node, degree] of inDegree) {
        if (degree === 0) return node;
      }
      return null;
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    function findRoot(treeNodes: Node[]): Node | null {
      const inDegree = new Map<Node, number>();
      for (const node of treeNodes) {
        if (!inDegree.has(node)) {
          inDegree.set(node, 0);
        }
        for (const child of node.children) {
          inDegree.set(child, (inDegree.get(child) || 0) + 1);
        }
      }
      for (const [node, degree] of inDegree) {
        if (degree === 0) return node;
      }
      return null;
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    class Node:
        def __init__(self, val=None, children=None):
            self.val = val
            self.children = children if children is not None else []

    class Solution:
        def findRoot(self, tree: List['Node']) -> 'Node':
            in_degree = {node: 0 for node in tree}
            for node in tree:
                for child in node.children:
                    in_degree[child] += 1
            for node, degree in in_degree.items():
                if degree == 0:
                    return node
            return None
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    import java.util.*;

    class Node {
        public int val;
        public List<Node> children;

        public Node() {}

        public Node(int val) {
            this.val = val;
        }

        public Node(int val, List<Node> children) {
            this.val = val;
            this.children = children;
        }
    }

    class Solution {
        public Node findRoot(List<Node> tree) {
            Map<Node, Integer> inDegree = new HashMap<>();
            for (Node node : tree) {
                inDegree.putIfAbsent(node, 0);
                for (Node child : node.children) {
                    inDegree.put(child, inDegree.getOrDefault(child, 0) + 1);
                }
            }
            for (Map.Entry<Node, Integer> entry : inDegree.entrySet()) {
                if (entry.getValue() == 0) {
                    return entry.getKey();
                }
            }
            return null;
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    #include <vector>
    #include <unordered_map>

    using namespace std;

    class Node {
    public:
        int val;
        vector<Node*> children;

        Node() {}

        Node(int _val) {
            val = _val;
        }

        Node(int _val, vector<Node*> _children) {
            val = _val;
            children = _children;
        }
    };

    class Solution {
    public:
        Node* findRoot(vector<Node*> tree) {
            unordered_map<Node*, int> inDegree;
            for (Node* node : tree) {
                if (inDegree.find(node) == inDegree.end()) {
                    inDegree[node] = 0;
                }
                for (Node* child : node->children) {
                    inDegree[child]++;
                }
            }
            for (auto& entry : inDegree) {
                if (entry.second == 0) {
                    return entry.first;
                }
            }
            return nullptr;
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(N)$$, where `N` is the number of nodes in the tree.
- Space Complexity: $$O(N)$$, for storing the in-degree map.

</tabItem>

<tabItem value="Hash Set" label="Hash Set">

### Approach 2: Hash Set

#### Implementation

```jsx live
function findRootOfNAryTree() {
  class Node {
    constructor(val) {
      this.val = val;
      this.children = [];
    }
  }

  const nodes = [
    new Node(1),
    new Node(2),
    new Node(3),
    new Node(4),
    new Node(5),
    new Node(6)
  ];

  nodes[0].children = [nodes[1], nodes[2], nodes[3]];
  nodes[1].children = [nodes[4], nodes[5]];

  const findRoot = function(treeNodes) {
    const allNodes = new Set(treeNodes);
    const childrenNodes = new Set();
    for (const node of treeNodes) {
      for (const child of node.children) {
        childrenNodes.add(child);
      }
    }
    for (const node of treeNodes) {
      if (!childrenNodes.has(node)) {
        return node;
      }
    }
    return null;
  };

  const root = findRoot(nodes);
  return (
    <div>
      <p>
        <b>Input:</b> {JSON.stringify(nodes.map(node => node.val))}
      </p>
      <p>
        <b>Output:</b> {root ? root.val : null}
      </p>
    </div>
  );
}
```

#### Code in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@manishh12"/>
   ```javascript
    function findRoot(treeNodes) {
      const allNodes = new Set(treeNodes);
      const childrenNodes = new Set();
      for (const node of treeNodes) {
        for (const child of node.children) {
          childrenNodes.add(child);
        }
      }
      for (const node of treeNodes) {
        if (!childrenNodes.has(node)) {
          return node;
        }
      }
      return null;
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    function findRoot(treeNodes: Node[]): Node | null {
      const allNodes = new Set(treeNodes);
      const childrenNodes = new Set<Node>();
      for (const node of treeNodes) {
        for (const child of node.children) {
          childrenNodes.add(child);
        }
      }
      for (const node of treeNodes) {
        if (!childrenNodes.has(node)) {
          return node;
        }
      }
      return null;
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    class Node:
        def __init__(self, val=None, children=None):
            self.val = val
            self.children = children if children is not None else []

    class Solution:
        def findRoot(self, tree: List['Node']) -> 'Node':
            all_nodes = set(tree)
            children_nodes = set()
            for node in tree:
                for child in node.children:
                    children_nodes.add(child)
            for node in tree:
                if node not in children_nodes:
                    return node
            return None
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    import java.util.*;

    class Node {
        public int val;
        public List<Node> children;

        public Node() {}

        public Node(int val) {
            this.val = val;
        }

        public Node(int val, List<Node> children) {
            this.val = val;
            this.children = children;
        }
    }

    class Solution {
        public Node findRoot(List<Node> tree) {
            Set<Node> allNodes = new HashSet<>(tree);
            Set<Node> childrenNodes = new HashSet<>();
            for (Node node : tree) {
                for (Node child : node.children) {
                    childrenNodes.add(child);
                }
            }
            for (Node node : tree) {
                if (!childrenNodes.contains(node)) {
                    return node;
                }
            }
            return null;
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    #include <vector>
    #include <unordered_set>

    using namespace std;

    class Node {
    public:
        int val;
        vector<Node*> children;

        Node() {}

        Node(int _val) {
            val = _val;
        }

        Node(int _val, vector<Node*> _children) {
            val = _val;
            children = _children;
        }
    };

    class Solution {
    public:
        Node* findRoot(vector<Node*> tree) {
            unordered_set<Node*> allNodes(tree.begin(), tree.end());
            unordered_set<Node*> childrenNodes;
            for (Node* node : tree) {
                for (Node* child : node->children) {
                    childrenNodes.insert(child);
                }
            }
            for (Node* node : tree) {
                if (childrenNodes.find(node) == childrenNodes.end()) {
                    return node;
                }
            }
            return nullptr;
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(N)$$, where `N` is the number of nodes in the tree.
- Space Complexity: $$O(N)$$, for storing the sets of all nodes and children nodes.

</tabItem>
</Tabs>

:::tip Note

By using both counting the degree and hash set approaches, we can efficiently find the root of an N-ary tree. The choice between the two approaches depends on the specific requirements and constraints of the problem.

:::

## References

- **LeetCode Problem:** [Find Root of N-Ary Tree](https://leetcode.com/problems/find-root-of-n-ary-tree/)
- **Solution Link:** [Find Root of N-Ary Tree Solution on LeetCode](https://leetcode.com/problems/find-root-of-n-ary-tree/solution/)
- **Authors LeetCode Profile:** [Manish Kumar Gupta](https://leetcode.com/_manishh12/)

