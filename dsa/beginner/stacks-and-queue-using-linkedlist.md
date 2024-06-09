# Stack

Stack is a linear data structure that follows the **Last In First Out (LIFO)** order, meaning that the last element to be added is the first one to be removed, or alternatively the **First In Last Out (FILO)** order.

In a stack, insertion and deletion is done from one end, refered to as the top of the stack

Working with a stack is similar to managing a pile of plates where each plate is placed on top of another. Similarly, in a stack insertion of a new element occurs on top of the existing element and deletion occurs from the top as well. This behavior of stacks mimicks the physical stack of plates, where a new plate is added to the top or the topmost plate is removed.

## Real-Life Applications Of Stack

- **Function Call:** In programming languages, whenever a function is called, it's parameters and local variables are pushed onto a stack. When the function is completed, they are popped off.
- **Browser History:** The most recently visited website is at the top whereas older websites are listed below.
- **Expression Evaluation:** Stacks are used to convert mathematical expressions from infix to postfix or prefix and calculate the result. These are very common in calculator applications.
- **Syntax Checking:** In programming languages, stacks are used to check if the opening and closing symbols such as the parentheses, braces and brackets are matched properly or not. For example, in HTML, a stack is used to check whether each opening tag has a corresponding closing tag.

## Basic Operations Of A Stack

- **Push:**  Inserting a new element in the stack.
- **Pop:**  Removing/deleting the top most element in the stack.
- **Peek:**  Viewing the top element of the stack but not deleting it.
- **isFull:**  Checking if the stack is full.
- **isEmpty:**  Checking if the stack is empty.

## Linked List Implementation A Stack

### Python
```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        
class Stack:
    def __init__(self):
        self.head = None
    
    # Inserting a new element at the top
    def push(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
        else:
            new_node.next = self.head
            self.head = new_node

    # Deleting the top element        
    def pop(self):
        if self.head==None:
            print("Stack Underflow")
        else:
            data = self.head.data
            print("Popped element:", data)
            self.head = self.head.next

    # Displaying top element       
    def peek(self):
        if self.head==None:
            print("Stack Underflow")
        else:
            print("Top element:", self.head.data)

    # Checking if the stack is empty  
    def isempty(self):
        return self.head==None

    # Displaying the stack from top to bottom    
    def display(self):
        temp = self.head
        while temp is not None:
            print(temp.data, "->", end="")
            temp = temp.next
        print("None")
        
s = Stack()
s.push(1)
s.push(2)
s.push(3)
s.push(4)
s.push(5)
print("Original stack: ", end="")
s.display()
s.pop()
print("After pop() operation: ", end="")
s.display()
s.peek()
s.pop()
s.pop()
s.pop()
s.pop()
s.display()
print("Is the stack empty?", s.isempty())
s.pop()

'''
OUTPUT:
Original stack: 5 ->4 ->3 ->2 ->1 ->None
Popped element: 5
After pop() operation: 4 ->3 ->2 ->1 ->None
Top element: 4
Popped element: 4
Popped element: 3
Popped element: 2
Popped element: 1
None
Is the stack empty? True
Stack Underflow
'''
```

### Java
```java
class Node {
    int data;
    Node next;
    
    public Node(int data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    Node head;
    
    // Constructor
    public Stack() {
        this.head = null;
    }
    
    // Inserting a new element at the top
    public void push(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
        } 
        else {
            newNode.next = head;
            head = newNode;
        }
    }
    
    // Deleting the top element
    public void pop() {
        if (head == null) {
            System.out.println("Stack Underflow");
        } 
        else {
            int data = head.data;
            System.out.println("Popped element: " + data);
            head = head.next;
        }
    }
    
    // Displaying top element
    public void peek() {
        if (head == null) {
            System.out.println("Stack Underflow");
        } 
        else {
            System.out.println("Top element: " + head.data);
        }
    }
    
    // Checking if the stack is empty
    public boolean isEmpty() {
        return head == null;
    }
    
    // Displaying the stack from top to bottom
    public void display() {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.data + " -> ");
            temp = temp.next;
        }
        System.out.println("None");
    }
}

public class Main {
    public static void main(String[] args) {
        Stack s = new Stack();
        s.push(1);
        s.push(2);
        s.push(3);
        s.push(4);
        s.push(5);
        System.out.print("Original stack: ");
        s.display();
        s.pop();
        System.out.print("After pop() operation: ");
        s.display();
        s.peek();
        s.pop();
        s.pop();
        s.pop();
        s.pop();
        s.display();
        System.out.println("Is the stack empty? " + s.isEmpty());
        s.pop();
    }
}


/*
OUTPUT:
Original stack: 5 -> 4 -> 3 -> 2 -> 1 -> None
Popped element: 5
After pop() operation: 4 -> 3 -> 2 -> 1 -> None
Top element: 4
Popped element: 4
Popped element: 3
Popped element: 2
Popped element: 1
None
Is the stack empty? true
Stack Underflow
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

    Node(int data) {
        this->data = data;
        this->next = nullptr;
    }
};

class Stack {
private:
    Node* head;

public:
    Stack() {
        this->head = nullptr;
    }

    // Inserting a new element in the stack
    void push(int data) {
        Node* newNode = new Node(data);
        if (head == nullptr) {
            head = newNode;
        } 
        else {
            newNode->next = head;
            head = newNode;
        }
    }

    // Deleting the top element
    void pop() {
        if (head == nullptr) {
            cout << "Stack Underflow" << endl;
        } 
        else {
            int data = head->data;
            cout << "Popped element: " << data << endl;
            Node* temp = head;
            head = head->next;
            delete temp;
        }
    }

    // Displaying the top element of stack
    void peek() {
        if (head == nullptr) {
            cout << "Stack Underflow" << endl;
        } 
        else {
            cout << "Top element: " << head->data << endl;
        }
    }

    // Checking if the stack is empty
    bool isEmpty() {
        return head == nullptr;
    }

    // Displaying the stack from top to bottom
    void display() {
        Node* temp = head;
        while (temp != nullptr) {
            cout << temp->data << " -> ";
            temp = temp->next;
        }
        cout << "None" << endl;
    }
};

int main() {
    Stack s;
    s.push(1);
    s.push(2);
    s.push(3);
    s.push(4);
    s.push(5);
    cout << "Original stack: ";
    s.display();
    s.pop();
    cout << "After pop() operation: ";
    s.display();
    s.peek();
    s.pop();
    s.pop();
    s.pop();
    s.pop();
    s.display();
    cout << "Is the stack empty? " << (s.isEmpty() ? "true" : "false") << endl;
    s.pop();

    return 0;
}


/*
OUTPUT:
Original stack: 5 -> 4 -> 3 -> 2 -> 1 -> None
Popped element: 5
After pop() operation: 4 -> 3 -> 2 -> 1 -> None
Top element: 4
Popped element: 4
Popped element: 3
Popped element: 2
Popped element: 1
None
Is the stack empty? true
Stack Underflow
*/
```

# Queue

A queue is a linear data structure that follows the **First In, First Out (FIFO)** principle where the first element inserted is the first one to be removed.

In a queue, insertion is done at the end, called the **rear** and deletion is done from the beginning called the **front**.

The functioning of a queue is similar to a group of people standing in a line: new individuals join at the rear of the line, and those who have been waiting the longest leave from the front.

## Real-Life Applications of Queue

- **Operating Systems:** OS use queue for scheduling task. For example, OS maintains a ready queue, having processes that are ready to be executed and are  waiting for CPU time.
- **Networking Devices:** Queues are used for packet management in networking devices such as routers and switches. They use queues to temporaily store packets if the outgoing links are too busy.
- **Printer Queues:** Queues are used to manage the order of printing jobs. As the jobs are submitted, they are added to the queue. The first added job is printed first, the second job is printed second and so on.
- **Breadth First Search Algorithm:** The BFS algorithm is used for level-by-level traversal of a graph. It starts at a particular node, adds its neighbour to the queue and then visits each neighbour.

## Basic Operations in a Queue

- **Enqueue:** Inserting an element at the rear end of a queue
- **Dequeue:** Deleting at element from the front end of a queue
- **Peek:** Displaying the element at the front
- **isFull:** Checking if the queue is full
- **isEmpty:** Checking if the queue is empty

## Linked List Implementation of a Queue

### Python
```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        
class Queue:
    def __init__(self):
        self.head = None

    # Inserting an element in the queue    
    def enqueue(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
        else:
            temp = self.head
            while temp.next is not None:
                temp = temp.next
            temp.next = new_node

    # Deleting the an element in the queue        
    def dequeue(self):
        if self.head is None:
            print("Queue Underflow")
            return None
        else:
            data = self.head.data
            self.head = self.head.next
            return data
    
    # Displaying the front element of the queue
    def peek(self):
        if self.head is None:
            print("Queue Underflow")
            return None
        return self.head.data

    # Checking if the queue is empty   
    def isEmpty(self):
        return self.head is None

    # Displaying the entire queue        
    def display(self):
        if self.head is None:
            print("Queue Underflow")
            return
        else:
            temp = self.head
            while temp is not None:
                print(temp.data, end="->")
                temp = temp.next
            print("None")
            
q = Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
print("Original Queue: ", end="")
q.display()
print("Removed element:", q.dequeue())
print("Queue after removal: ", end="")
q.display()
print("Front Element:", q.peek())
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
print("Is the queue empty?", q.isEmpty())


'''
OUTPUT:
Original Queue: 1->2->3->4->5->None
Removed element: 1
Queue after removal: 2->3->4->5->None
Front Element: 2
Is the queue empty? True
'''
```

### Java
```java
class Node {
    int data;
    Node next;

    public Node(int data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    Node head;

    public Queue() {
        this.head = null;
    }

    // Inserting an element in the queue
    public void enqueue(int data) {
        Node newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
        } 
        else {
            Node temp = this.head;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = newNode;
        }
    }

    // Deleting an element in the queue
    public int dequeue() {
        if (this.head == null) {
            System.out.println("Queue Underflow");
            return -1; 
        } 
        else {
            int data = this.head.data;
            this.head = this.head.next;
            return data;
        }
    }

    // Displaying the front element of the queue
    public int peek() {
        if (this.head == null) {
            System.out.println("Queue Underflow");
            return -1; 
        }
        return this.head.data;
    }

    // Checking if the queue is empty
    public boolean isEmpty() {
        return this.head == null;
    }

    // Displaying the entire queue
    public void display() {
        if (this.head == null) {
            System.out.println("Queue Underflow");
        } 
        else {
            Node temp = this.head;
            while (temp != null) {
                System.out.print(temp.data + "->");
                temp = temp.next;
            }
            System.out.println("None");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Queue q = new Queue();
        q.enqueue(1);
        q.enqueue(2);
        q.enqueue(3);
        q.enqueue(4);
        q.enqueue(5);
        System.out.print("Original Queue: ");
        q.display();
        System.out.println("Removed element: " + q.dequeue());
        System.out.print("Queue after removal: ");
        q.display();
        System.out.println("Front Element: " + q.peek());
        q.dequeue();
        q.dequeue();
        q.dequeue();
        q.dequeue();
        System.out.println("Is the queue empty? " + q.isEmpty());
    }
}


/*
OUTPUT:
Original Queue: 1->2->3->4->5->None
Removed element: 1
Queue after removal: 2->3->4->5->None
Front Element: 2
Is the queue empty? true
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

    // Constructor
    Node(int data) {
        this->data = data;
        this->next = nullptr;
    }
};

class Queue {
private:
    Node* head;

public:
    Queue() {
        this->head = nullptr;
    }

    // Inserting an element in the queue
    void enqueue(int data) {
        Node* newNode = new Node(data);
        if (this->head == nullptr) {
            this->head = newNode;
        } 
        else {
            Node* temp = this->head;
            while (temp->next != nullptr) {
                temp = temp->next;
            }
            temp->next = newNode;
        }
    }

    // Deleting an element in the queue
    int dequeue() {
        if (this->head == nullptr) {
            cout << "Queue Underflow" << endl;
            return -1; 
        } 
        else {
            int data = this->head->data;
            Node* temp = this->head;
            this->head = this->head->next;
            delete temp;
            return data;
        }
    }

    // Displaying the front element of the queue
    int peek() {
        if (this->head == nullptr) {
            cout << "Queue Underflow" << endl;
            return -1; 
        }
        return this->head->data;
    }

    // Checking if the queue is empty
    bool isEmpty() {
        return this->head == nullptr;
    }

    // Displaying the entire queue
    void display() {
        if (this->head == nullptr) {
            cout << "Queue Underflow" << endl;
        } 
        else {
            Node* temp = this->head;
            while (temp != nullptr) {
                cout << temp->data << "->";
                temp = temp->next;
            }
            cout << "None" << endl;
        }
    }
};

int main() {
    Queue q;
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);
    q.enqueue(5);
    cout << "Original Queue: ";
    q.display();
    cout << "Removed element: " << q.dequeue() << endl;
    cout << "Queue after removal: ";
    q.display();
    cout << "Front Element: " << q.peek() << endl;
    q.dequeue();
    q.dequeue();
    q.dequeue();
    q.dequeue();
    cout << "Is the queue empty? " << (q.isEmpty() ? "true" : "false") << endl;
    return 0;
}


/*
OUTPUT:
Original Queue: 1->2->3->4->5->None
Removed element: 1
Queue after removal: 2->3->4->5->None
Front Element: 2
Is the queue empty? true
*/
```
