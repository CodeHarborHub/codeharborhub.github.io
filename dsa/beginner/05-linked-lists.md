---
id: 05-linked-lists
title: Linked Lists in Data Structures
sidebar_label: Linked Lists
tags:
  - dsa
  - data-structures
  - linked-lists
  - beginner
  - javascript
  - python
  - c++
  - java
  - programming
  - tutorial
  - typescript
sidebar_position: 5
---

In this tutorial, we will learn about linked lists in Data Structures and Algorithms. We will discuss what linked lists are, how they are used, and how they are different from arrays.

## Linked Lists in Programming

A linked list is a data structure that consists of a sequence of elements, where each element points to the next element in the sequence. Each element in a linked list is called a node, and it contains two parts: the data and a reference (or pointer) to the next node in the sequence.

Linked lists are dynamic data structures, which means that the size of a linked list can change during the execution of a program. Unlike arrays, linked lists do not have a fixed size, and elements can be added or removed from a linked list at any time.

Linked lists are used to store a collection of elements that are related to each other in some way. For example, a linked list can be used to store the nodes of a graph, the tasks in a to-do list, or the songs in a playlist.

Here is an example of a linked list in some programming languages:

<Tabs>
  <TabItem value="javascript" label="JavaScript">   
    ```javascript
    // Creating a linked list in JavaScript
    class Node {
      constructor(data) {
        this.data = data;
        this.next = null;
      }
    }

    class LinkedList {
      constructor() {
        this.head = null;
      }

      addNode(data) {
        const newNode = new Node(data);

        if (this.head === null) {
          this.head = newNode;
        } else {
          let current = this.head;
          while (current.next !== null) {
            current = current.next;
          }
          current.next = newNode;
        }
      }

      printList() {
        let current = this.head;
        while (current !== null) {
          console.log(current.data);
          current = current.next;
        }
      }
    }

    // Creating a linked list
    const linkedList = new LinkedList();
    linkedList.addNode(1);
    linkedList.addNode(2);
    linkedList.addNode(3);

    // Printing the linked list
    linkedList.printList();
    ```
  </TabItem>
  <TabItem value="python" label="Python">    
    ```python
    # Creating a linked list in Python
    class Node:
      def __init__(self, data):
        self.data = data
        self.next = None

    class LinkedList:
      def __init__(self):
        self.head = None

      def add_node(self, data):
        new_node = Node(data)

        if self.head is None:
          self.head = new_node
        else:
          current = self.head
          while current.next is not None:
            current = current.next
          current.next = new_node

      def print_list(self):
        current = self.head
        while current is not None:
          print(current.data)
          current = current.next

    # Creating a linked list
    linked_list = LinkedList()
    linked_list.add_node(1)
    linked_list.add_node(2)
    linked_list.add_node(3)

    # Printing the linked list
    linked_list.print_list()
    ```
  </TabItem>
  <TabItem value="typescript" label="TypeScript">    
    ```typescript
    // Creating a linked list in TypeScript
    class Node {
      data: number;
      next: Node | null;

      constructor(data: number) {
        this.data = data;
        this.next = null;
        }
    }
    
    class LinkedList {
      head: Node | null;

      constructor() {
        this.head = null;
      }

      addNode(data: number) {
        const newNode = new Node(data);

        if (this.head === null) {
          this.head = newNode;
        } else {
          let current = this.head;
          while (current.next !== null) {
            current = current.next;
          }
          current.next = newNode;
        }
      }

      printList() {
        let current = this.head;
        while (current !== null) {
          console.log(current.data);
          current = current.next;
        }
      }
    }

    // Creating a linked list
    const linkedList = new LinkedList();
    linkedList.addNode(1);
    linkedList.addNode(2);
    linkedList.addNode(3);

    // Printing the linked list
    linkedList.printList();
    ```
   </TabItem>
   <TabItem value="c++" label="C++">    
    ```cpp
    #include <iostream>
    using namespace std;

    // Creating a linked list in C++
    class Node {
    public:
      int data;
      Node* next;

      Node(int data) {
        this->data = data;
        this->next = nullptr;
      }
    };

    class LinkedList {
    public:
      Node* head;

      LinkedList() {
        this->head = nullptr;
      }

      void addNode(int data) {
        Node* newNode = new Node(data);

        if (this->head == nullptr) {
          this->head = newNode;
        } else {
          Node* current = this->head;
          while (current->next != nullptr) {
            current = current->next;
          }
          current->next = newNode;
        }
      }

      void printList() {
        Node* current = this->head;
        while (current != nullptr) {
          cout << current->data << endl;
          current = current->next;
        }
      }
    };

    int main() {
      // Creating a linked list
      LinkedList linkedList;
      linkedList.addNode(1);
      linkedList.addNode(2);
      linkedList.addNode(3);

      // Printing the linked list
      linkedList.printList();

      return 0;
    }
    ```
    </TabItem>
    <TabItem value="java" label="Java">    
    ```java
    // Creating a linked list in Java
    class Node {
      int data;
      Node next;

      Node(int data) {
        this.data = data;
        this.next = null;
      }
    }

    class LinkedList {
      Node head;

      LinkedList() {
        this.head = null;
      }

      void addNode(int data) {
        Node newNode = new Node(data);

        if (this.head == null) {
          this.head = newNode;
        } else {
          Node current = this.head;
          while (current.next != null) {
            current = current.next;
          }
          current.next = newNode;
        }
      }

      void printList() {
        Node current = this.head;
        while (current != null) {
          System.out.println(current.data);
          current = current.next;
        }
      }
    }

    public class Main {
      public static void main(String[] args) {
        // Creating a linked list
        LinkedList linkedList = new LinkedList();
        linkedList.addNode(1);
        linkedList.addNode(2);
        linkedList.addNode(3);

        // Printing the linked list
        linkedList.printList();
      }
    }
    ```
  </TabItem>
</Tabs>

In the example above, we have created a linked list in JavaScript, Python, TypeScript, C++, and Java. We have defined a `Node` class to represent a node in the linked list and a `LinkedList` class to represent the linked list itself. We have implemented methods to add nodes to the linked list and print the elements of the linked list.

## Types of Linked Lists

There are several types of linked lists, each with its own characteristics and use cases. Some common types of linked lists include:

1. **Singly Linked List**: In a singly linked list, each node points to the next node in the sequence. The last node in the list points to `null`, indicating the end of the list.
2. **Doubly Linked List**: In a doubly linked list, each node points to both the next node and the previous node in the sequence. This allows for bidirectional traversal of the list.
3. **Circular Linked List**: In a circular linked list, the last node in the list points back to the first node, forming a circular structure. This allows for efficient traversal of the list without the need to check for `null` pointers.
4. **Sorted Linked List**: In a sorted linked list, the nodes are arranged in ascending or descending order based on the value of the data in each node. This allows for efficient searching and insertion of elements in the list.
5. **Sparse Linked List**: In a sparse linked list, the nodes only store non-default values, reducing the memory usage of the list. This is useful for representing sparse data structures, such as matrices.
6. **Circular Doubly Linked List**: In a circular doubly linked list, each node points to both the next node and the previous node, and the last node points back to the first node, forming a circular structure. This allows for bidirectional traversal of the list without the need to check for `null` pointers.
7. **Self-organizing Linked List**: In a self-organizing linked list, the order of the nodes is adjusted based on the frequency of access to each node. This allows for faster access to frequently accessed nodes.

Each type of linked list has its own advantages and disadvantages, and the choice of which type to use depends on the specific requirements of the application.

:::tip for better understanding 🤓

## Live Example

Let's create a singly linked list in jsx using JavaScript. We will define a `Node` class to represent a node in the linked list and a `LinkedList` class to represent the linked list itself. We will implement methods to add nodes to the linked list and print the elements of the linked list.

```jsx live
function Example() {
  // Node class for the linked list
  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  // LinkedList class
  class LinkedList {
    constructor() {
      this.head = null;
    }

    // Inserting a new node at the end of the linked list
    append(data) {
      let newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        return;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }

    // Inserting a new node at the beginning of the linked list
    prepend(data) {
      let newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
    }

    // Deleting a node by its value
    delete(data) {
      if (!this.head) return;

      if (this.head.data === data) {
        this.head = this.head.next;
        return;
      }

      let current = this.head;
      while (current.next) {
        if (current.next.data === data) {
          current.next = current.next.next;
          return;
        }
        current = current.next;
      }
    }

    // Printing the linked list
    print() {
      let current = this.head;
      let result = [];
      while (current) {
        result.push(current.data);
        current = current.next;
      }
      return result.join(' -> ');
    }
  }

  // Creating a linked list
  let linkedList = new LinkedList();

  // Inserting elements into the linked list
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  linkedList.prepend(0);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          margin: "20px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      >
        <h3>Linked List Example</h3>
        <div style={{
          margin: "20px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}>
          <p>Linked List: <code>{linkedList.print()}</code></p>
          <p>Deleting <code>2...</code></p>
          {linkedList.delete(2)}
          <p>Updated Linked List:  <code>{linkedList.print()}</code></p>
        </div>
      </div>
    </div>
  );
}
```

In the above example, we have created a singly linked list in JavaScript. We have defined a `Node` class to represent a node in the linked list and a `LinkedList` class to represent the linked list itself. We have implemented methods to add nodes to the linked list, print the elements of the linked list, prepend a node at the beginning of the list, and delete a node by its value.

:::

## Conclusion

In this tutorial, we have learned about linked lists in Data Structures and Algorithms. We have discussed what linked lists are, how they are used, and how they are different from arrays. We have also explored the different types of linked lists and their characteristics.