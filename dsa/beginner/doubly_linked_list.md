# Doubly Linked List

A doubly linked list is similar to a singly linked list, with the primary difference being the addition of an extra pointer called prev, which stores the address of the previous node. Therefore, a node in a doubly linked list contains the prev pointer (address of the previous node), data, and next pointer (address of the next node). The last node would have the next attribute set to null, and the head node would have the prev attribute set to null.

## Real-life Applications of Doubly Linked List

- **Tree Implementation:** Doubly linked lists are used to implement tree data structure where the prev and next attributes are used to refer to the children of a node.
- **Web Browsers:** Web browsers use doubly linked lists for forward and backward page navigations.
- **Undo/Redo:** The redo and undo functions of various applications are implemented using a doubly linked list
- **Games:** It is used in various games like the classical deck of cards 

## Implementation
### Python
```python
class Node:
    def __init__(self,data):
        self.data = data
        self.next = None
        self.prev = None
        
class doubly_linked_list:
    def __init__(self):
        self.head = None
        
    def insert_end(self,data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
        else:
            temp = self.head
            while temp.next is not None:
                temp = temp.next
            temp.next = new_node
            new_node.prev = temp
            
    def insert_begin(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
        else:
            new_node.next = self.head
            self.head = new_node
            
    def insert_pos(self,data,pos):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
        else:
            if pos==1:
                self.insert_begin(data)
            else:
                temp = self.head
                for i in range(1, pos-1):
                    temp = temp.next
                new_node.next = temp.next
                new_node.prev = temp
                temp.next.prev = new_node
                temp.next = new_node
            
    def delete_end(self):
        if self.head is None:
            print("Linked list is empty")
            return
        else:
            temp = self.head
            while temp.next.next is not None:
                temp = temp.next
            temp.next = None
        
    def delete_begin(self):
        if self.head is None:
            print("Linked list is empty")
            return
        else:
            self.head = self.head.next
            self.head.prev = None
            
    def delete_pos(self,pos):
        if self.head is None:
            print("Linked list is empty")
            return
        else:
            if pos==1:
                self.delete_begin()
            else:
                temp = self.head
                for i in range(1, pos-1):
                    temp = temp.next
                temp.next = temp.next.next
                temp.next.prev = temp
            
    def count(self):
        count = 0
        temp = self.head
        while temp is not None:
            count+=1
            temp = temp.next
        return count
        
    def search(self,data):
        temp = self.head
        while temp is not None:
            if temp.data==data:
                return True
            temp = temp.next
        return False
            
    def display(self):
        if self.head is None:
            print("Linked list is empty")
            return
        else:
            temp = self.head
            while temp is not None:
                print(temp.data, end="-->")
                temp = temp.next
            print("None")
        
    def display_reverse(self):
        if self.head is None:
            print("Linked list is empty")
            return
        else:
            temp = self.head
            while temp.next is not None:
                temp = temp.next
            while temp is not None:
                print(temp.data, end="-->")
                temp = temp.prev
            print("None")
            
dll = doubly_linked_list()
dll.insert_end(1)
dll.insert_end(2)
dll.insert_end(3)
dll.insert_end(4)
dll.insert_end(5)
print("Original linked list: ", end="")
dll.display() 
dll.insert_begin(11)
print("After insertion at beginning: ", end="")
dll.display() 
dll.insert_pos(8,3)
print("After insertion at given postition: ", end="")
dll.display() 
dll.delete_begin()
print("After deletion from beginning: ", end="")
dll.display() 
dll.delete_end()
print("After deletion from end: ", end="")
dll.display() 
dll.delete_pos(2)
print("After deletion from given position: ", end="")
dll.display() 
c = dll.count()
print("Number of nodes in the linked list:", c)
s = dll.search(10)
print("Is the value present in the linked list?", s)
print("Linked list in reverse order:", end="")
dll.display_reverse()


'''
OUTPUT:
Original linked list: 1-->2-->3-->4-->5-->None
After insertion at beginning: 11-->1-->2-->3-->4-->5-->None
After insertion at given postition: 11-->1-->8-->2-->3-->4-->5-->None
After deletion from beginning: 1-->8-->2-->3-->4-->5-->None
After deletion from end: 1-->8-->2-->3-->4-->None
After deletion from given position: 1-->2-->3-->4-->None
Number of nodes in the linked list: 4
Is the value present in the linked list? False
Linked list in reverse order:4-->3-->2-->1-->None
'''
```

### Java
```java
class Node {
    int data;
    Node next;
    Node prev;

    public Node(int data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    Node head;

    public DoublyLinkedList() {
        this.head = null;
    }

    void insertEnd(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
        }
        else {
            Node temp = head;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = newNode;
            newNode.prev = temp;
        }
    }

    void insertBegin(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
        }
        else {
            newNode.next = head;
            head.prev = newNode;
            head = newNode;
        }
    }

    void insertPos(int data, int pos) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
        }
        else {
            if (pos == 1) {
                insertBegin(data);
            }
            else {
                Node temp = head;
                for (int i = 1; i < pos - 1; i++) {
                    temp = temp.next;
                }
                newNode.next = temp.next;
                if (temp.next != null) {
                    temp.next.prev = newNode;
                }
                temp.next = newNode;
                newNode.prev = temp;
            }
        }
    }

    void deleteEnd() {
        if (head == null) {
            System.out.println("Linked list is empty");
            return;
        }
        else {
            Node temp = head;
            while (temp.next.next != null) {
                temp = temp.next;
            }
            temp.next = null;
        }
    }

    void deleteBegin() {
        if (head == null) {
            System.out.println("Linked list is empty");
            return;
        }
        else {
            head = head.next;
            if (head != null) {
                head.prev = null;
            }
        }
    }

    void deletePos(int pos) {
        if (head == null) {
            System.out.println("Linked list is empty");
            return;
        }
        else {
            if (pos == 1) {
                deleteBegin();
            }
            else {
                Node temp = head;
                for (int i = 1; i < pos - 1; i++) {
                    temp = temp.next;
                }
                temp.next = temp.next.next;
                if (temp.next != null) {
                    temp.next.prev = temp;
                }
            }
        }
    }

    int count() {
        int count = 0;
        Node temp = head;
        while (temp != null) {
            count++;
            temp = temp.next;
        }
        return count;
    }

    boolean search(int data) {
        Node temp = head;
        while (temp != null) {
            if (temp.data == data) {
                return true;
            }
            temp = temp.next;
        }
        return false;
    }

    void display() {
        if (head == null) {
            System.out.println("Linked list is empty");
            return;
        }
        else {
            Node temp = head;
            while (temp != null) {
                System.out.print(temp.data + "-->");
                temp = temp.next;
            }
            System.out.println("None");
        }
    }

    void displayReverse() {
        if (head == null) {
            System.out.println("Linked list is empty");
            return;
        }
        else {
            Node temp = head;
            while (temp.next != null) {
                temp = temp.next;
            }
            while (temp != null) {
                System.out.print(temp.data + "-->");
                temp = temp.prev;
            }
            System.out.println("None");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        DoublyLinkedList dll = new DoublyLinkedList();
        dll.insertEnd(1);
        dll.insertEnd(2);
        dll.insertEnd(3);
        dll.insertEnd(4);
        dll.insertEnd(5);
        System.out.print("Original linked list: ");
        dll.display();
        dll.insertBegin(11);
        System.out.print("After insertion at beginning: ");
        dll.display();
        dll.insertPos(8, 3);
        System.out.print("After insertion at given position: ");
        dll.display();
        dll.deleteBegin();
        System.out.print("After deletion from beginning: ");
        dll.display();
        dll.deleteEnd();
        System.out.print("After deletion from end: ");
        dll.display();
        dll.deletePos(2);
        System.out.print("After deletion from given position: ");
        dll.display();
        int c = dll.count();
        System.out.println("Number of nodes in the linked list: " + c);
        boolean s = dll.search(10);
        System.out.println("Is the value present in the linked list? " + s);
        System.out.print("Linked list in reverse order: ");
        dll.displayReverse();
    }
}


/*
OUTPUT:
Original linked list: 1-->2-->3-->4-->5-->None
After insertion at beginning: 11-->1-->2-->3-->4-->5-->None
After insertion at given position: 11-->1-->8-->2-->3-->4-->5-->None
After deletion from beginning: 1-->8-->2-->3-->4-->5-->None
After deletion from end: 1-->8-->2-->3-->4-->None
After deletion from given position: 1-->2-->3-->4-->None
Number of nodes in the linked list: 4
Is the value present in the linked list? false
Linked list in reverse order: 4-->3-->2-->1-->None
*/
```

### C++
```cpp
#include <iostream>

using namespace std;

class Node {
public:
    int data;
    Node* next;
    Node* prev;

    Node(int data) {
        this->data = data;
        this->next = nullptr;
        this->prev = nullptr;
    }
};

class DoublyLinkedList {
public:
    Node* head;

    DoublyLinkedList() {
        this->head = nullptr;
    }

    void insertEnd(int data) {
        Node* newNode = new Node(data);
        if (head == nullptr) {
            head = newNode;
        }
        else {
            Node* temp = head;
            while (temp->next != nullptr) {
                temp = temp->next;
            }
            temp->next = newNode;
            newNode->prev = temp;
        }
    }

    void insertBegin(int data) {
        Node* newNode = new Node(data);
        if (head == nullptr) {
            head = newNode;
        }
        else {
            newNode->next = head;
            head->prev = newNode;
            head = newNode;
        }
    }

    void insertPos(int data, int pos) {
        Node* newNode = new Node(data);
        if (head == nullptr) {
            head = newNode;
        }
        else {
            if (pos == 1) {
                insertBegin(data);
            }
            else {
                Node* temp = head;
                for (int i = 1; i < pos - 1; i++) {
                    temp = temp->next;
                }
                newNode->next = temp->next;
                if (temp->next != nullptr) {
                    temp->next->prev = newNode;
                }
                temp->next = newNode;
                newNode->prev = temp;
            }
        }
    }

    void deleteEnd() {
        if (head == nullptr) {
            cout << "Linked list is empty" << endl;
            return;
        }
        else {
            Node* temp = head;
            while (temp->next->next != nullptr) {
                temp = temp->next;
            }
            temp->next = nullptr;
        }
    }

    void deleteBegin() {
        if (head == nullptr) {
            cout << "Linked list is empty" << endl;
            return;
        }
        else {
            head = head->next;
            if (head != nullptr) {
                head->prev = nullptr;
            }
        }
    }

    void deletePos(int pos) {
        if (head == nullptr) {
            cout << "Linked list is empty" << endl;
            return;
        }
        else {
            if (pos == 1) {
                deleteBegin();
            }
            else {
                Node* temp = head;
                for (int i = 1; i < pos - 1; i++) {
                    temp = temp->next;
                }
                temp->next = temp->next->next;
                if (temp->next != nullptr) {
                    temp->next->prev = temp;
                }
            }
        }
    }

    int count() {
        int count = 0;
        Node* temp = head;
        while (temp != nullptr) {
            count++;
            temp = temp->next;
        }
        return count;
    }

    bool search(int data) {
        Node* temp = head;
        while (temp != nullptr) {
            if (temp->data == data) {
                return true;
            }
            temp = temp->next;
        }
        return false;
    }

    void display() {
        if (head == nullptr) {
            cout << "Linked list is empty" << endl;
            return;
        }
        else {
            Node* temp = head;
            while (temp != nullptr) {
                cout << temp->data << "-->";
                temp = temp->next;
            }
            cout << "None" << endl;
        }
    }

    void displayReverse() {
        if (head == nullptr) {
            cout << "Linked list is empty" << endl;
            return;
        }
        else {
            Node* temp = head;
            while (temp->next != nullptr) {
                temp = temp->next;
            }
            while (temp != nullptr) {
                cout << temp->data << "-->";
                temp = temp->prev;
            }
            cout << "None" << endl;
        }
    }
};

int main() {
    DoublyLinkedList dll;
    dll.insertEnd(1);
    dll.insertEnd(2);
    dll.insertEnd(3);
    dll.insertEnd(4);
    dll.insertEnd(5);
    cout << "Original linked list: ";
    dll.display();
    dll.insertBegin(11);
    cout << "After insertion at beginning: ";
    dll.display();
    dll.insertPos(8, 3);
    cout << "After insertion at given position: ";
    dll.display();
    dll.deleteBegin();
    cout << "After deletion from beginning: ";
    dll.display();
    dll.deleteEnd();
    cout << "After deletion from end: ";
    dll.display();
    dll.deletePos(2);
    cout << "After deletion from given position: ";
    dll.display();
    int c = dll.count();
    cout << "Number of nodes in the linked list: " << c << endl;
    bool s = dll.search(10);
    cout << "Is the value present in the linked list? " << boolalpha << s << endl;
    cout << "Linked list in reverse order: ";
    dll.displayReverse();
    return 0;
}


'''
OUTPUT:
Original linked list: 1-->2-->3-->4-->5-->None
After insertion at beginning: 11-->1-->2-->3-->4-->5-->None
After insertion at given position: 11-->1-->8-->2-->3-->4-->5-->None
After deletion from beginning: 1-->8-->2-->3-->4-->5-->None
After deletion from end: 1-->8-->2-->3-->4-->None
After deletion from given position: 1-->2-->3-->4-->None
Number of nodes in the linked list: 4
Is the value present in the linked list? false
Linked list in reverse order: 4-->3-->2-->1-->None
'''
```

### C
```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
    struct Node* prev;
};

struct DoublyLinkedList {
    struct Node* head;
};

struct Node* createNode(int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    if (newNode == NULL) {
        printf("Memory allocation failed\n");
        exit(1);
    }
    newNode->data = data;
    newNode->next = NULL;
    newNode->prev = NULL;
    return newNode;
}

struct DoublyLinkedList* initializeList() {
    struct DoublyLinkedList* dll = (struct DoublyLinkedList*)malloc(sizeof(struct DoublyLinkedList));
    if (dll == NULL) {
        printf("Memory allocation failed\n");
        exit(1);
    }
    dll->head = NULL;
    return dll;
}

void insertEnd(struct DoublyLinkedList* dll, int data) {
    struct Node* newNode = createNode(data);
    if (dll->head == NULL) {
        dll->head = newNode;
    }
    else {
        struct Node* temp = dll->head;
        while (temp->next != NULL) {
            temp = temp->next;
        }
        temp->next = newNode;
        newNode->prev = temp;
    }
}

void insertBegin(struct DoublyLinkedList* dll, int data) {
    struct Node* newNode = createNode(data);
    if (dll->head == NULL) {
        dll->head = newNode;
    }
    else {
        newNode->next = dll->head;
        dll->head->prev = newNode;
        dll->head = newNode;
    }
}

void insertPos(struct DoublyLinkedList* dll, int data, int pos) {
    struct Node* newNode = createNode(data);
    if (dll->head == NULL) {
        dll->head = newNode;
    }
    else {
        if (pos == 1) {
            insertBegin(dll, data);
        }
        else {
            struct Node* temp = dll->head;
            for (int i = 1; i < pos - 1; i++) {
                temp = temp->next;
            }
            newNode->next = temp->next;
            if (temp->next != NULL) {
                temp->next->prev = newNode;
            }
            temp->next = newNode;
            newNode->prev = temp;
        }
    }
}

void deleteEnd(struct DoublyLinkedList* dll) {
    if (dll->head == NULL) {
        printf("Linked list is empty\n");
        return;
    }
    else {
        struct Node* temp = dll->head;
        while (temp->next->next != NULL) {
            temp = temp->next;
        }
        temp->next = NULL;
    }
}

void deleteBegin(struct DoublyLinkedList* dll) {
    if (dll->head == NULL) {
        printf("Linked list is empty\n");
        return;
    }
    else {
        dll->head = dll->head->next;
        if (dll->head != NULL) {
            dll->head->prev = NULL;
        }
    }
}

void deletePos(struct DoublyLinkedList* dll, int pos) {
    if (dll->head == NULL) {
        printf("Linked list is empty\n");
        return;
    }
    else {
        if (pos == 1) {
            deleteBegin(dll);
        }
        else {
            struct Node* temp = dll->head;
            for (int i = 1; i < pos - 1; i++) {
                temp = temp->next;
            }
            temp->next = temp->next->next;
            if (temp->next != NULL) {
                temp->next->prev = temp;
            }
        }
    }
}

int count(struct DoublyLinkedList* dll) {
    int count = 0;
    struct Node* temp = dll->head;
    while (temp != NULL) {
        count++;
        temp = temp->next;
    }
    return count;
}

int search(struct DoublyLinkedList* dll, int data) {
    struct Node* temp = dll->head;
    while (temp != NULL) {
        if (temp->data == data) {
            return 1;
        }
        temp = temp->next;
    }
    return 0;
}

void display(struct DoublyLinkedList* dll) {
    if (dll->head == NULL) {
        printf("Linked list is empty\n");
        return;
    }
    else {
        struct Node* temp = dll->head;
        while (temp != NULL) {
            printf("%d-->", temp->data);
            temp = temp->next;
        }
        printf("None\n");
    }
}

void displayReverse(struct DoublyLinkedList* dll) {
    if (dll->head == NULL) {
        printf("Linked list is empty\n");
        return;
    }
    else {
        struct Node* temp = dll->head;
        while (temp->next != NULL) {
            temp = temp->next;
        }
        while (temp != NULL) {
            printf("%d-->", temp->data);
            temp = temp->prev;
        }
        printf("None\n");
    }
}

int main() {
    struct DoublyLinkedList* dll = initializeList();
    insertEnd(dll, 1);
    insertEnd(dll, 2);
    insertEnd(dll, 3);
    insertEnd(dll, 4);
    insertEnd(dll, 5);
    printf("Original linked list: ");
    display(dll);
    insertBegin(dll, 11);
    printf("After insertion at beginning: ");
    display(dll);
    insertPos(dll, 8, 3);
    printf("After insertion at given position: ");
    display(dll);
    deleteBegin(dll);
    printf("After deletion from beginning: ");
    display(dll);
    deleteEnd(dll);
    printf("After deletion from end: ");
    display(dll);
    deletePos(dll, 2);
    printf("After deletion from given position: ");
    display(dll);
    int c = count(dll);
    printf("Number of nodes in the linked list: %d\n", c);
    int s = search(dll, 10);
    printf("Is the value present in the linked list? %s\n", s ? "true" : "false");
    printf("Linked list in reverse order: ");
    displayReverse(dll);
    return 0;
}


'''
OUTPUT:
Original linked list: 1-->2-->3-->4-->5-->None
After insertion at beginning: 11-->1-->2-->3-->4-->5-->None
After insertion at given position: 11-->1-->8-->2-->3-->4-->5-->None
After deletion from beginning: 1-->8-->2-->3-->4-->5-->None
After deletion from end: 1-->8-->2-->3-->4-->None
After deletion from given position: 1-->2-->3-->4-->None
Number of nodes in the linked list: 4
Is the value present in the linked list? false
Linked list in reverse order: 4-->3-->2-->1-->None
'''
```
