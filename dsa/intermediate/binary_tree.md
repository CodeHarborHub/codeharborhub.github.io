---
id: 01-binary-tree
title: Introduction to Binary Tree
sidebar_label: Binary Tree
tags:
  - dsa
  - data-structures
  - binary-tree
  - intermediate
  - javascript
  - python
  - c++
  - java
  - programming
  - tutorial
sidebar_position: 2
---
In this tutorial we will explore one of the fundamental data structure in computer science: Binary Tree 
# What is a Binary Tree?
A binary tree is a hierarchical data structure composed of nodes, where each node has at most two children: a left child and a right child. The topmost node of the tree is called the root node. Each child node can have its own left and right children, forming sub-trees.



## Representation of a Node Binary Tree
Binary Tree is made up of nodes, where each node except leaf nodes have children. Each node in the tree consist of three parts i.e., data, left pointer, right pointer. To create a node we can follow the below structure of code:

<Tabs>
  <TabItem value="C++" label="C++">
    ```Cpp  showLineNumbers
    //Creating a node in C++ using structure
    
    typedef struct treetype
    {
    struct treetype *left;
    int data;
    struct treetype *right;
    }node;

    //Creating a node in C++ using class
    class Node{
        public:
        Node *left;
        int data;
        Node *right;
    };
    ```
  </TabItem>

  <TabItem value="Python" label="Python">
    ```Python  showLineNumbers
    #Creating a node in Python

    class Node:
    def __init__(self, val):
        self.left = None
        self.data = val
        self.right = None
    ```
  </TabItem>

  <TabItem value="Java" label="Java">
    ```jsx  showLineNumbers
    //Creating a node in Java

    class Node{
        int data;
        Node left,right;
        public Node(int val)
        {   
            left=null;
            data=val;
            right=null;
        }
    }
    ```
  </TabItem>

  <TabItem value="JavaScript" label="JavaScript">
    ```JavaScript  showLineNumbers
    //Creating a node in JavaScript

    class Node
    {
        constructor(val)
        {
            this.left=null;
            this.data=val;
            this.right=null;
        }
    }
    ```
  </TabItem>
</Tabs>

## Operation in Binary Tree
### 1. Insert Operation:
We can add a node in the Binary Tree as a left child or right child of any node.
<br />
**Algorithm or steps to insert in a binary tree**<br />
* First check if the root is null or not if root is null means this is the first node of the tree, make it as a root and return it else move to next step
* Now as we have already studient queue data strucuture, we will use that to add nodes to the binary tree
* Insert a node as the left or right child of the parent node if the parent node points to null 
* Return root to main function.

### 2. Traversal of Binary Tree:
Traversal means visiting all nodes of the binary tree. Three famous binary tree traversal methods are: <br />
* **Preorder Traversal (NLR) :** In this traversal method we have to visit the current node before visiting its left or right subtree. The traversal is Node-left-right means first node (root node) is traveresed then left child and then right child
* **Inorder Traversal (LNR) :** In this traversal method we have to visit all the nodes inside the left subtree first then visit the current node and then the nodes in the right subtree. The traversal is Left-Node-right.
* **Postorder Traversal (LRN) :** In this traversal method we visit the current node after visiting all the nodes in left and right subtree. The traversal is in the order left-right-node.

### 3. Search in Binary Tree:
We can search any element in the Binary Tree using the same algorithm as insertion just with some difference <br />
**Algorithm or steps to insert in a binary tree**<br />
*First check if the root is null or not if root is null return false to main else move to next step.<br />
*Store the root in a queue, start a loop which ends when queue is empty.<br />
*Take the front node (as temp) from queue check the temp value with the search value given if same return true to main else move to next step. <br />
*Check if the temp left or temp right child are NULL or not , if null continue the loop, else push the left then right child in the queue. <br />
*If the queue comes empty and element is not found return false to main.<br /> 

## Programming implementation of operation in Binary Tree
<Tabs>
  <TabItem value="C++" label="C++">
    ```Cpp  showLineNumbers
    #include<iostream>
    #include<queue>
    using namespace std;
    class Node
    {
    public:
        Node *left,*right;
        int data;
        Node(int val)
        {
            left=NULL;
            data=val;
            right=NULL;
        }
    };
    //insert function for binary search
    Node* insert(Node* root, int data)
    {
        if (root==NULL){
            root=new Node(data);
            return root;
        }
        //using queue data structure to find the position to insert the node
        queue<Node*>store;
        store.push(root);
        while(!store.empty())
        {
            Node *temp=store.front();
            store.pop();
            //check for left and right child
            if (temp->left==NULL)
            {
                temp->left=new Node(data);
                break;
            }
            else
                store.push(temp->left);
            if (temp->right==NULL)
            {
                temp->right=new Node(data);
                break;
            }
            else
                store.push(temp->right);
        }
        return root;
    }
    //now traversals methods of binary tree
    //PRE-ORDER traversal
    void pre_traversal(Node* root)
    {
        if (root==NULL)
            return;
        cout<<root->data<<" ";
        pre_traversal(root->left);
        pre_traversal(root->right);
    }
    //IN-ORDER traversal
    void in_traversal(Node *root)
    {
        if(root==NULL)
            return ;
        in_traversal(root->left);
        cout<<root->data<<" ";
        in_traversal(root->right);
    }
    //POST-ORDER traversal
    void post_traversal(Node *root)
    {
        if (root==NULL)
            return ;
        post_traversal(root->left);
        post_traversal(root->right);
        cout<<root->data<<" ";
    }
    //search function for binary tree
    bool search(Node *root, int value)
    {
        if (root==NULL)
            return false;
        queue<Node*>store;
        store.push(root);
        while(!store.empty())
        {
            Node *temp=store.front();
            store.pop();
            if (temp->data==value)
                return true;
            if (temp->left!=NULL)
            {
                store.push(temp->left);
            }
            if (temp->right!=NULL)
            {
                store.push(temp->right);
            }
        }
        return false;
    }
    int main()
    {
        Node *root=NULL;
        //insertion operation in binary tree
        root=insert(root,1);
        root=insert(root,2);
        root=insert(root,3);
        root=insert(root,4);
        root=insert(root,5);
        //traversal
        //preorder traversal
        cout<<"Preorder Traversal: ";
        pre_traversal(root);
        //inorder traversal
        cout<<endl<<"Inorder Traversal: ";
        in_traversal(root);
        //postorder traversal
        cout<<endl<<"Post-order Traversal:";
        post_traversal(root);
        //seraching a node in the binary tree
        if (search(root,4))
            cout<<endl<<"Node found in the binary tree";
        else
            cout<<endl<<"Node not found in the binary tree";
        return 0;
    }
    ```
</TabItem>

   <TabItem value="Python" label="Python">
    ```Python  showLineNumbers
    from collections import deque

    class Node:
        def __init__(self, val):
            self.left = None
            self.data = val
            self.right = None

    # Insert function for binary search
    def insert(root, data):
        if root is None:
            root = Node(data)
            return root
        # Using queue data structure to find the position to insert the node
        store = deque([root])
        while store:
            temp = store.popleft()
            # Check for left and right child
            if temp.left is None:
                temp.left = Node(data)
                break
            else:
                store.append(temp.left)
            if temp.right is None:
                temp.right = Node(data)
                break
            else:
                store.append(temp.right)
        return root

    # Now traversal methods of binary tree
    # PRE-ORDER traversal
    def pre_traversal(root):
        if root is None:
            return
        print(root.data, end=" ")
        pre_traversal(root.left)
        pre_traversal(root.right)

    # IN-ORDER traversal
    def in_traversal(root):
        if root is None:
            return
        in_traversal(root.left)
        print(root.data, end=" ")
        in_traversal(root.right)

    # POST-ORDER traversal
    def post_traversal(root):
        if root is None:
            return
        post_traversal(root.left)
        post_traversal(root.right)
        print(root.data, end=" ")

    # Search function for binary tree
    def search(root, value):
        if root is None:
            return False
        store = deque([root])
        while store:
            temp = store.popleft()
            if temp.data == value:
                return True
            if temp.left is not None:
                store.append(temp.left)
            if temp.right is not None:
                store.append(temp.right)
        return False

    # Main function
    def main():
        root = None
        # Insertion operation in binary tree
        root = insert(root, 1)
        root = insert(root, 2)
        root = insert(root, 3)
        root = insert(root, 4)
        root = insert(root, 5)

        # Traversal
        # Preorder traversal
        print("Preorder Traversal:", end=" ")
        pre_traversal(root)
        # Inorder traversal
        print("\nInorder Traversal:", end=" ")
        in_traversal(root)
        # Postorder traversal
        print("\nPost-order Traversal:", end=" ")
        post_traversal(root)

        # Searching a node in the binary tree
        if search(root, 4):
            print("\nNode found in the binary tree")
        else:
            print("\nNode not found in the binary tree")

    if __name__ == "__main__":
        main()

    ```
</TabItem>

  <TabItem value="Java" label="Java">
    ```jsx  showLineNumbers
    import java.util.LinkedList;
    import java.util.Queue;

    class Node {
        Node left, right;
        int data;

        Node(int val) {
            left = null;
            data = val;
            right = null;
            }
        }

    public class BinaryTree {
        // Insert function for binary search
        static Node insert(Node root, int data) {
            if (root == null) {
                root = new Node(data);
                return root;
            }
            // Using queue data structure to find the position to insert the node
            Queue<Node> store = new LinkedList<>();
            store.add(root);
            while (!store.isEmpty()) {
                Node temp = store.poll();
                // Check for left and right child
                if (temp.left == null) {
                    temp.left = new Node(data);
                    break;
                } else
                    store.add(temp.left);
                if (temp.right == null) {
                    temp.right = new Node(data);
                    break;
                } else
                    store.add(temp.right);
            }
            return root;
        }

        // Now traversal methods of binary tree
        // PRE-ORDER traversal
        static void preTraversal(Node root) {
            if (root == null)
                return;
            System.out.print(root.data + " ");
            preTraversal(root.left);
            preTraversal(root.right);
        }

        // IN-ORDER traversal
        static void inTraversal(Node root) {
            if (root == null)
                return;
            inTraversal(root.left);
            System.out.print(root.data + " ");
            inTraversal(root.right);
        }

        // POST-ORDER traversal
        static void postTraversal(Node root) {
            if (root == null)
                return;
            postTraversal(root.left);
            postTraversal(root.right);
            System.out.print(root.data + " ");
        }

        // Search function for binary tree
        static boolean search(Node root, int value) {
            if (root == null)
                return false;
            Queue<Node> store = new LinkedList<>();
            store.add(root);
            while (!store.isEmpty()) {
                Node temp = store.poll();
                if (temp.data == value)
                    return true;
                if (temp.left != null)
                    store.add(temp.left);
                if (temp.right != null)
                    store.add(temp.right);
            }
            return false;
        }

        public static void main(String[] args) {
            Node root = null;
            // Insertion operation in binary tree
            root = insert(root, 1);
            root = insert(root, 2);
            root = insert(root, 3);
            root = insert(root, 4);
            root = insert(root, 5);

            // Traversal
            // Preorder traversal
            System.out.print("Preorder Traversal: ");
            preTraversal(root);
            // Inorder traversal
            System.out.print("\nInorder Traversal: ");
            inTraversal(root);
            // Postorder traversal
            System.out.print("\nPost-order Traversal: ");
            postTraversal(root);

            // Searching a node in the binary tree
            if (search(root, 4))
                System.out.println("\nNode found in the binary tree");
            else
                System.out.println("\nNode not found in the binary tree");
        }
    }

    ```

  </TabItem>
  <TabItem value="JavaScript" label="JavaScript">
    ```javaScript  showLineNumbers
    class Node {
        constructor(val) {
            this.left = null;
            this.data = val;
            this.right = null;
        }
    }

    // Insert function for binary search
    function insert(root, data) {
        if (root === null) {
            root = new Node(data);
            return root;
        }
        // Using queue data structure to find the position to insert the node
        let store = [root];
        while (store.length > 0) {
            let temp = store.shift();
            // Check for left and right child
            if (temp.left === null) {
                temp.left = new Node(data);
                break;
            } else
                store.push(temp.left);
            if (temp.right === null) {
                temp.right = new Node(data);
                break;
            } else
                store.push(temp.right);
        }
        return root;
    }

    // Now traversal methods of binary tree
    // PRE-ORDER traversal
    function preTraversal(root) {
        if (root === null)
            return;
        process.stdout.write(root.data + " ");
        preTraversal(root.left);
        preTraversal(root.right);
    }

    // IN-ORDER traversal
    function inTraversal(root) {
        if (root === null)
            return;
        inTraversal(root.left);
        process.stdout.write(root.data + " ");
        inTraversal(root.right);
    }

    // POST-ORDER traversal
    function postTraversal(root) {
        if (root === null)
            return;
        postTraversal(root.left);
        postTraversal(root.right);
        process.stdout.write(root.data + " ");
    }

    // Search function for binary tree
    function search(root, value) {
        if (root === null)
            return false;
        let store = [root];
        while (store.length > 0) {
            let temp = store.shift();
            if (temp.data === value)
                return true;
            if (temp.left !== null)
                store.push(temp.left);
            if (temp.right !== null)
                store.push(temp.right);
        }
        return false;
    }

    // Main function
    function main() {
        let root = null;
        // Insertion operation in binary tree
        root = insert(root, 1);
        root = insert(root, 2);
        root = insert(root, 3);
        root = insert(root, 4);
        root = insert(root, 5);

        // Traversal
        // Preorder traversal
        process.stdout.write("Preorder Traversal: ");
        preTraversal(root);
        // Inorder traversal
        process.stdout.write("\nInorder Traversal: ");
        inTraversal(root);
        // Postorder traversal
        process.stdout.write("\nPost-order Traversal: ");
        postTraversal(root);

        // Searching a node in the binary tree
        if (search(root, 4))
            console.log("\nNode found in the binary tree");
        else
            console.log("\nNode not found in the binary tree");
        }

        main();
    ```

  </TabItem>
</Tabs>
Output:<br />

```
Preorder Traversal: 1 2 4 5 3 
Inorder Traversal: 4 2 5 1 3
Post-order Traversal: 4 5 2 3 1
Node found in the binary tree
``` 
