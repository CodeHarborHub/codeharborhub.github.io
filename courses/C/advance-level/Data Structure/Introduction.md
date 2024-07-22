---
id: lesson-1
title: "Data Structures in C"
sidebar_label: Data Structures
sidebar_position: 1
description: "Learn Data Structures in C"
tags: [courses,Advance-level,Introduction]
--- 
  

Data structures are essential for organizing and managing data efficiently. They provide ways to store and retrieve data, and different data structures are suitable for different tasks. Here’s an overview of some fundamental data structures in C:

#### 1. Introduction to Data Structures

- **Definition**: A data structure is a specialized format for organizing and storing data. It enables efficient data manipulation and access.
- **Types**: Linear (arrays, linked lists), Non-linear (trees, graphs), and Hash-based structures.

#### 2. Linked Lists

A linked list is a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence.

- **Singly Linked List**
  - **Definition**: Each node has a single pointer to the next node.
  - **Operations**: Insertion, deletion, traversal.
  - **Example**:
    ```c
    #include <stdio.h>
    #include <stdlib.h>

    typedef struct Node {
        int data;
        struct Node* next;
    } Node;

    void printList(Node* head) {
        Node* temp = head;
        while (temp != NULL) {
            printf("%d -> ", temp->data);
            temp = temp->next;
        }
        printf("NULL\n");
    }

    int main() {
        Node* head = (Node*)malloc(sizeof(Node));
        head->data = 1;
        head->next = (Node*)malloc(sizeof(Node));
        head->next->data = 2;
        head->next->next = NULL;

        printList(head);

        // Free allocated memory
        free(head->next);
        free(head);

        return 0;
    }
    ```

  **Output**:
  ```
  1 -> 2 -> NULL
  ```

- **Doubly Linked List**
  - **Definition**: Each node has two pointers, one to the next node and one to the previous node.
  - **Operations**: Insertion, deletion, traversal (both directions).
  - **Example**:
    ```c
    #include <stdio.h>
    #include <stdlib.h>

    typedef struct Node {
        int data;
        struct Node* next;
        struct Node* prev;
    } Node;

    void printList(Node* head) {
        Node* temp = head;
        while (temp != NULL) {
            printf("%d <-> ", temp->data);
            temp = temp->next;
        }
        printf("NULL\n");
    }

    int main() {
        Node* head = (Node*)malloc(sizeof(Node));
        head->data = 1;
        head->next = (Node*)malloc(sizeof(Node));
        head->next->data = 2;
        head->next->prev = head;
        head->next->next = NULL;

        printList(head);

        // Free allocated memory
        free(head->next);
        free(head);

        return 0;
    }
    ```

  **Output**:
  ```
  1 <-> 2 <-> NULL
  ```

- **Circular Linked List**
  - **Definition**: The last node points back to the first node, forming a circle.
  - **Operations**: Insertion, deletion, traversal (until you reach the starting node again).
  - **Example**:
    ```c
    #include <stdio.h>
    #include <stdlib.h>

    typedef struct Node {
        int data;
        struct Node* next;
    } Node;

    void printList(Node* head) {
        Node* temp = head;
        if (head != NULL) {
            do {
                printf("%d -> ", temp->data);
                temp = temp->next;
            } while (temp != head);
        }
        printf("NULL\n");
    }

    int main() {
        Node* head = (Node*)malloc(sizeof(Node));
        head->data = 1;
        head->next = (Node*)malloc(sizeof(Node));
        head->next->data = 2;
        head->next->next = head;

        printList(head);

        // Free allocated memory
        free(head->next);
        free(head);

        return 0;
    }
    ```

  **Output**:
  ```
  1 -> 2 -> NULL
  ```

#### 3. Stacks and Queues

- **Stack**
  - **Definition**: A stack is a linear data structure that follows Last In First Out (LIFO) principle.
  - **Operations**: Push (add), Pop (remove), Peek (top item).
  - **Example**:
    ```c
    #include <stdio.h>
    #include <stdlib.h>

    #define MAX 100

    typedef struct {
        int arr[MAX];
        int top;
    } Stack;

    void push(Stack* s, int value) {
        if (s->top == MAX - 1) {
            printf("Stack Overflow\n");
            return;
        }
        s->arr[++(s->top)] = value;
    }

    int pop(Stack* s) {
        if (s->top == -1) {
            printf("Stack Underflow\n");
            return -1;
        }
        return s->arr[(s->top)--];
    }

    int peek(Stack* s) {
        if (s->top == -1) {
            printf("Stack is Empty\n");
            return -1;
        }
        return s->arr[s->top];
    }

    int main() {
        Stack s;
        s.top = -1;

        push(&s, 10);
        push(&s, 20);
        printf("Top element is %d\n", peek(&s));
        printf("Popped element is %d\n", pop(&s));

        return 0;
    }
    ```

  **Output**:
  ```
  Top element is 20
  Popped element is 20
  ```

- **Queue**
  - **Definition**: A queue is a linear data structure that follows First In First Out (FIFO) principle.
  - **Operations**: Enqueue (add), Dequeue (remove), Peek (front item).
  - **Example**:
    ```c
    #include <stdio.h>
    #include <stdlib.h>

    #define MAX 100

    typedef struct {
        int arr[MAX];
        int front, rear;
    } Queue;

    void enqueue(Queue* q, int value) {
        if (q->rear == MAX - 1) {
            printf("Queue Overflow\n");
            return;
        }
        q->arr[++(q->rear)] = value;
    }

    int dequeue(Queue* q) {
        if (q->front > q->rear) {
            printf("Queue Underflow\n");
            return -1;
        }
        return q->arr[(q->front)++];
    }

    int peek(Queue* q) {
        if (q->front > q->rear) {
            printf("Queue is Empty\n");
            return -1;
        }
        return q->arr[q->front];
    }

    int main() {
        Queue q;
        q.front = 0;
        q.rear = -1;

        enqueue(&q, 10);
        enqueue(&q, 20);
        printf("Front element is %d\n", peek(&q));
        printf("Dequeued element is %d\n", dequeue(&q));

        return 0;
    }
    ```

  **Output**:
  ```
  Front element is 10
  Dequeued element is 10
  ```

#### 4. Trees

- **Binary Tree**
  - **Definition**: A tree data structure where each node has at most two children (left and right).
  - **Operations**: Insertion, traversal (in-order, pre-order, post-order).
  - **Example**:
    ```c
    #include <stdio.h>
    #include <stdlib.h>

    typedef struct Node {
        int data;
        struct Node* left;
        struct Node* right;
    } Node;

    void inorder(Node* root) {
        if (root != NULL) {
            inorder(root->left);
            printf("%d ", root->data);
            inorder(root->right);
        }
    }

    Node* createNode(int data) {
        Node* newNode = (Node*)malloc(sizeof(Node));
        newNode->data = data;
        newNode->left = newNode->right = NULL;
        return newNode;
    }

    int main() {
        Node* root = createNode(1);
        root->left = createNode(2);
        root->right = createNode(3);
        root->left->left = createNode(4);
        root->left->right = createNode(5);

        printf("Inorder Traversal: ");
        inorder(root);
        printf("\n");

        return 0;
    }
    ```

  **Output**:
  ```
  Inorder Traversal: 4 2 5 1 3
  ```

- **Binary Search Tree (BST)**
  - **Definition**: A binary tree where the left child of a node is less than the node and the right child is greater.
  - **Operations**: Insertion, searching, traversal.

 ```c
    #include <stdio.h>
    #include <stdlib.h>

    typedef struct Node {
        int data;
        struct Node* left;
        struct Node* right;
    } Node;

    Node* insert(Node* root, int data) {
        if (root == NULL) {
            Node* newNode = (Node*)malloc(sizeof(Node));
            newNode->data = data;
           
     newNode->left = newNode->right = NULL;
            return newNode;
        }
        if (data < root->data)
            root->left = insert(root->left, data);
        else
            root->right = insert(root->right, data);
        return root;
    }

    void inorder(Node* root) {
        if (root != NULL) {
            inorder(root->left);
            printf("%d ", root->data);
            inorder(root->right);
        }
    }

    int main() {
        Node* root = NULL;
        root = insert(root, 50);
        insert(root, 30);
        insert(root, 70);
        insert(root, 20);
        insert(root, 40);
        insert(root, 60);
        insert(root, 80);

        printf("Inorder Traversal: ");
        inorder(root);
        printf("\n");

        return 0;
      }
```

  **Output**:
  ```
  Inorder Traversal: 20 30 40 50 60 70 80
  ```
   