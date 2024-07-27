---
id: binary-tree-to-dll
title:   Binary Tree to DLL
sidebar_label: Binary Tree to DLL

tags:
- Binary tree
- DLL

description: "This is a solution to the Binary Tree to DLL problem on GeeksForGeeks."
---

## Problem Description
Given a Binary Tree (BT), convert it to a Doubly Linked List(DLL) In-Place. The left and right pointers in nodes are to be used as previous and next pointers respectively in converted DLL. The order of nodes in DLL must be same as Inorder of the given Binary Tree. The first node of Inorder traversal (leftmost node in BT) must be the head node of the DLL.
Note: H is the height of the tree and this space is used implicitly for the recursion stack.

### Examples

**Example 1:**
```
Input: 
     1
    /  \
   3    2

Output:
3 1 2 
2 1 3 

Explanation: Explanation: DLL would be 3<=>1<=>2
```

**Example 2:**
```
Input: 
       10
      /   \
     20   30
   /   \
  40   60

Output: 
40 20 60 10 30 
30 10 60 20 40

Explanation:
DLL would be 
40<=>20<=>60<=>10<=>30.
```


### Constraints
- `1 ≤ Number of nodes ≤ 10^5`
- `0 ≤ Data of a node ≤ 10^5`


## Solution for Binary Tree to DLL
### Approach 
#### Brute Force 
- **Inorder Traversal**: Perform an inorder traversal of the binary tree to collect nodes in the order they would appear in the DLL.
- **Construct DLL**: As you traverse the tree in inorder
    - Keep track of the previously visited node.
    - Adjust pointers (`left` and `right`) of each node to convert it into a DLL node.
    - Update the head of the DLL once you reach the leftmost node (first node in inorder traversal).

**Implementation:**
```cpp
// Definition for a binary tree node.
struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Solution {
public:
    TreeNode* treeToDoublyList(TreeNode* root) {
        if (root == nullptr)
            return nullptr;

        TreeNode* head = nullptr; // Head of the DLL
        TreeNode* prev = nullptr; // Previous node in inorder traversal

        inorder(root, prev, head);

        // Connect head and tail for circular DLL
        head->left = prev;
        prev->right = head;

        return head;
    }

    void inorder(TreeNode* node, TreeNode*& prev, TreeNode*& head) {
        if (node == nullptr)
            return;

        // Recursively traverse left subtree
        inorder(node->left, prev, head);

        // Process current node
        if (prev == nullptr) {
            // This is the leftmost node (head of DLL)
            head = node;
        } else {
            // Connect previous node with current node
            prev->right = node;
            node->left = prev;
        }
        prev = node; // Update prev to current node

        // Recursively traverse right subtree
        inorder(node->right, prev, head);
    }
};
```


#### Optimized Approach 
- **Algorithm**: 
  - Use a recursive approach to perform an inorder traversal while adjusting the pointers to form a doubly linked list on the fly.
    - Maintain a reference to the previously processed node to set the `left` and `right` pointers correctly.
- **Steps**: 
  - Initialize `prev` as `None` and `head` as `None` to keep track of the previous node and the head of the DLL, respectively.
  - Define a recursive function `convert_to_dll` that:
    - Recursively converts the left subtree.
    - Adjusts the pointers of the current node based on the `prev` node.
    - Updates `prev` to the current node.
    - Recursively converts the right subtree.
  - Call the recursive function with the root node.
  - Return the `head` of the DLL.

**Complexity:**
- Time Complexity: O(N), where N is the number of nodes in the binary tree. Each node is visited exactly once.
- Space Complexity: O(H), where H is the height of the binary tree. This is the space required for the recursion stack.

**Corner Cases:**
- The binary tree is empty (i.e., the root is `None`).
- The binary tree has only one node.


## Code in Different Languages

<Tabs>

<TabItem value="Python" label="Python">
<SolutionAuthor name="@vansh-codes" />

   ```python
    class Solution:    
    def __init__(self):
        self.prev = None
        self.head = None
        
        
    def bToDLL(self, root):
        if not root:
            return None
        
        def inorder(node):
            if not node:
                return

            inorder(node.left)

            if self.prev:
                self.prev.right = node
                node.left = self.prev
            else:
                self.head = node
            
            self.prev = node

            inorder(node.right)
        
        inorder(root)
        return self.head
    ```

</TabItem>

<TabItem value="Java" label="Java">
<SolutionAuthor name="@vansh-codes" />

   ```
   class Solution
    {
        //Function to convert binary tree to doubly linked list and return it.
        Node prev = null;
        Node head = null;

        // Function to convert binary tree to doubly linked list and return it.
        public Node bToDLL(Node root) {
            if (root == null) {
                return null;
            }

            inorder(root);
            return head;
        }

        private void inorder(Node node) {
            if (node == null) {
                return;
            }

            inorder(node.left);

            if (prev != null) {
                prev.right = node;
                node.left = prev;
            } else {
                head = node;
            }

            prev = node;

            inorder(node.right);
        }
    }
    ```

</TabItem>

<TabItem value="C++" label="C++">
<SolutionAuthor name="@vansh-codes" />

   ```cpp
   class Solution {
    public: 
        Node* prev = nullptr;
        Node* head = nullptr;

        // Function to convert binary tree to doubly linked list and return it.
        Node* bToDLL(Node* root) {
            if (root == nullptr) {
                return nullptr;
            }

            inorder(root);
            return head;
        }

    private:
        void inorder(Node* node) {
            if (node == nullptr) {
                return;
            }

            inorder(node->left);

            if (prev != nullptr) {
                prev->right = node;
                node->left = prev;
            } else {
                head = node;
            }

            prev = node;

            inorder(node->right);
        }
    };
    ```

</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Binary Tree to DLL](https://www.geeksforgeeks.org/problems/binary-tree-to-dll/1)