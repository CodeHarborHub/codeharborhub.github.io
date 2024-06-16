---
id: 04-stacks-and-queues
title: Stacks and Queues in Data Structures and Algorithms
sidebar_label: Stacks and Queues
tags:
  - dsa
  - data-structures
  - stacks
  - queues
  - beginner
  - javascript
  - python
  - c++
  - java
  - programming
  - tutorial
  - typescript
sidebar_position: 4
---

In this tutorial, we will learn about stacks and queues in Data Structures and Algorithms. We will discuss what stacks and queues are, how they are used, and how they are different from each other.

## Stacks in Data Structures and Algorithms

A stack is a data structure that stores a collection of elements. The elements in a stack are stored in a Last-In-First-Out (LIFO) order, which means that the last element added to the stack is the first one to be removed. Stacks are used to store elements that need to be accessed in a specific order, such as undo operations in a text editor, function calls in a program, or backtracking in a maze-solving algorithm.

A stack has two main operations:

1. **Push**: Adds an element to the top of the stack.
2. **Pop**: Removes and returns the element at the top of the stack.

In addition to these operations, stacks may also support other operations such as:

- **Peek**: Returns the element at the top of the stack without removing it.
- **isEmpty**: Checks if the stack is empty.
- **Size**: Returns the number of elements in the stack.
- **Clear**: Removes all elements from the stack.
- **Search**: Searches for an element in the stack.
- **Copy**: Creates a copy of the stack.
- **Iterate**: Iterates over the elements of the stack.
- **Merge**: Merges two stacks into one.
- **Reverse**: Reverses the order of elements in the stack.
- **Sort**: Sorts the elements of the stack.
- **Map**: Applies a function to each element of the stack.

Here is an example of a stack in some programming languages:

<Tabs>
  <TabItem value="javascript" label="JavaScript">   
    ```javascript
    // Creating a stack in JavaScript
    class Stack {
      constructor() {
        this.items = [];
      }

      // Push operation
      push(element) {
        this.items.push(element);
      }

      // Pop operation
      pop() {
        if (this.isEmpty()) {
          return "Underflow";
        }
        return this.items.pop();
      }

      // Peek operation
      peek() {
        return this.items[this.items.length - 1];
      }

      // isEmpty operation
      isEmpty() {
        return this.items.length === 0;
      }

      // Size operation
      size() {
        return this.items.length;
      }

      // Clear operation
      clear() {
        this.items = [];
      }

      // Print operation
      print() {
        console.log(this.items);
      }
    }

    // Using the stack
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.print(); // Output: [1, 2, 3]
    stack.pop();
    stack.print(); // Output: [1, 2]
    console.log(stack.peek()); // Output: 2
    console.log(stack.isEmpty()); // Output: false
    console.log(stack.size()); // Output: 2
    stack.clear();
    stack.print(); // Output: []
    ```

  </TabItem>
  <TabItem value="python" label="Python">    
    ```python
    # Creating a stack in Python
    class Stack:
        def __init__(self):
            self.items = []

        # Push operation
        def push(self, element):
            self.items.append(element)

        # Pop operation
        def pop(self):
            if self.is_empty():
                return "Underflow"
            return self.items.pop()

        # Peek operation
        def peek(self):
            return self.items[-1]

        # isEmpty operation
        def is_empty(self):
            return len(self.items) == 0

        # Size operation
        def size(self):
            return len(self.items)

        # Clear operation
        def clear(self):
            self.items = []

        # Print operation
        def print(self):
            print(self.items)

    # Using the stack
    stack = Stack()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.print() # Output: [1, 2, 3]
    stack.pop()
    stack.print() # Output: [1, 2]
    print(stack.peek()) # Output: 2
    print(stack.is_empty()) # Output: False
    print(stack.size()) # Output: 2
    stack.clear()
    stack.print() # Output: []
    ```

   </TabItem>
   <TabItem value="typescript" label="TypeScript">    
    ```typescript
    // Creating a stack in TypeScript
    class Stack<T> {
      private items: T[] = [];

      // Push operation
      push(element: T): void {
        this.items.push(element);
      }

      // Pop operation
      pop(): T | string {
        if (this.isEmpty()) {
          return "Underflow";
        }
        return this.items.pop();
      }

      // Peek operation
      peek(): T | undefined {
        return this.items[this.items.length - 1];
      }

      // isEmpty operation
      isEmpty(): boolean {
        return this.items.length === 0;
      }

      // Size operation
      size(): number {
        return this.items.length;
      }

      // Clear operation
      clear(): void {
        this.items = [];
      }

      // Print operation
      print(): void {
        console.log(this.items);
      }
    }

    // Using the stack
    let stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.print(); // Output: [1, 2, 3]
    stack.pop();
    stack.print(); // Output: [1, 2]
    console.log(stack.peek()); // Output: 2
    console.log(stack.isEmpty()); // Output: false
    console.log(stack.size()); // Output: 2
    stack.clear();
    stack.print(); // Output: []
    ```

   </TabItem>
   <TabItem value="c++" label="C++">    
    ```cpp
    #include <iostream>
    #include <vector>
    using namespace std;

    // Creating a stack in C++
    template <class T>
    class Stack {
    private:
        vector<T> items;

    public:
        // Push operation
        void push(T element) {
            items.push_back(element);
        }

        // Pop operation
        T pop() {
            if (isEmpty()) {
                throw "Underflow";
            }
            T element = items.back();
            items.pop_back();
            return element;
        }

        // Peek operation
        T peek() {
            if (isEmpty()) {
                throw "Stack is empty";
            }
            return items.back();
        }

        // isEmpty operation
        bool isEmpty() {
            return items.empty();
        }

        // Size operation
        int size() {
            return items.size();
        }

        // Clear operation
        void clear() {
            items.clear();
        }

        // Print operation
        void print() {
            for (T element : items) {
                cout << element << " ";
            }
            cout << endl;
        }
    };

    int main() {
        // Using the stack
        Stack<int> stack;
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.print(); // Output: 1 2 3
        stack.pop();
        stack.print(); // Output: 1 2
        cout << stack.peek() << endl; // Output: 2
        cout << stack.isEmpty() << endl; // Output: 0
        cout << stack.size() << endl; // Output: 2
        stack.clear();
        stack.print(); // Output:

        return 0;
    }
    ```

   </TabItem>
   <TabItem value="java" label="Java">    
    ```java
    import java.util.Stack;

    public class Main {
        public static void main(String[] args) {
            // Creating a stack in Java
            Stack<Integer> stack = new Stack<>();

            // Push operation
            stack.push(1);
            stack.push(2);
            stack.push(3);

            // Print operation
            System.out.println(stack); // Output: [1, 2, 3]

            // Pop operation
            stack.pop();
            System.out.println(stack); // Output: [1, 2]

            // Peek operation
            System.out.println(stack.peek()); // Output: 2

            // isEmpty operation
            System.out.println(stack.isEmpty()); // Output: false

            // Size operation
            System.out.println(stack.size()); // Output: 2

            // Clear operation
            stack.clear();
            System.out.println(stack); // Output: []
        }
    }
    ```

   </TabItem>
</Tabs>

## Queues in Data Structures and Algorithms

A queue is a data structure that stores a collection of elements. The elements in a queue are stored in a First-In-First-Out (FIFO) order, which means that the first element added to the queue is the first one to be removed. Queues are used to store elements that need to be processed in a specific order, such as tasks in a job queue, messages in a message queue, or requests in a web server.

A queue has two main operations:

1. **Enqueue**: Adds an element to the back of the queue.
2. **Dequeue**: Removes and returns the element at the front of the queue.

In addition to these operations, queues may also support other operations such as:

- **Peek**: Returns the element at the front of the queue without removing it.
- **isEmpty**: Checks if the queue is empty.
- **Size**: Returns the number of elements in the queue.
- **Clear**: Removes all elements from the queue.
- **Search**: Searches for an element in the queue.
- **Copy**: Creates a copy of the queue.
- **Iterate**: Iterates over the elements of the queue.
- **Merge**: Merges two queues into one.
- **Reverse**: Reverses the order of elements in the queue.
- **Sort**: Sorts the elements of the queue.
- **Map**: Applies a function to each element of the queue.

Here is an example of a queue in some programming languages:

<Tabs>
  <TabItem value="javascript" label="JavaScript">   
    ```javascript
    // Creating a queue in JavaScript
    class Queue {
      constructor() {
        this.items = [];
      }

      // Enqueue operation
      enqueue(element) {
        this.items.push(element);
      }

      // Dequeue operation
      dequeue() {
        if (this.isEmpty()) {
          return "Underflow";
        }
        return this.items.shift();
      }

      // Peek operation
      peek() {
        return this.items[0];
      }

      // isEmpty operation
      isEmpty() {
        return this.items.length === 0;
      }

      // Size operation
      size() {
        return this.items.length;
      }

      // Clear operation
      clear() {
        this.items = [];
      }

      // Print operation
      print() {
        console.log(this.items);
      }
    }

    // Using the queue
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.print(); // Output: [1, 2, 3]
    queue.dequeue();
    queue.print(); // Output: [2, 3]
    console.log(queue.peek()); // Output: 2
    console.log(queue.isEmpty()); // Output: false
    console.log(queue.size()); // Output: 2
    queue.clear();
    queue.print(); // Output: []
    ```

  </TabItem>
  <TabItem value="python" label="Python">    
    ```python
    # Creating a queue in Python
    class Queue:
        def __init__(self):
            self.items = []

        # Enqueue operation
        def enqueue(self, element):
            self.items.append(element)

        # Dequeue operation
        def dequeue(self):
            if self.is_empty():
                return "Underflow"
            return self.items.pop(0)

        # Peek operation
        def peek(self):
            return self.items[0]

        # isEmpty operation
        def is_empty(self):
            return len(self.items) == 0

        # Size operation
        def size(self):
            return len(self.items)

        # Clear operation
        def clear(self):
            self.items = []

        # Print operation
        def print(self):
            print(self.items)

    # Using the queue
    queue = Queue()
    queue.enqueue(1)
    queue.enqueue
    queue.enqueue(2)
    queue.enqueue(3)
    queue.print() # Output: [1, 2, 3]
    queue.dequeue()
    queue.print() # Output: [2, 3]
    print(queue.peek()) # Output: 2
    print(queue.is_empty()) # Output: False
    print(queue.size()) # Output: 2
    queue.clear()
    queue.print() # Output: []
    ```

   </TabItem>
   <TabItem value="typescript" label="TypeScript">    
    ```typescript
    // Creating a queue in TypeScript
    class Queue<T> {
      private items: T[] = [];

      // Enqueue operation
      enqueue(element: T): void {
        this.items.push(element);
      }

      // Dequeue operation
      dequeue(): T | string {
        if (this.isEmpty()) {
          return "Underflow";
        }
        return this.items.shift();
      }

      // Peek operation
      peek(): T | undefined {
        return this.items[0];
      }

      // isEmpty operation
      isEmpty(): boolean {
        return this.items.length === 0;
      }

      // Size operation
      size(): number {
        return this.items.length;
      }

      // Clear operation
      clear(): void {
        this.items = [];
      }

      // Print operation
      print(): void {
        console.log(this.items);
      }
    }

    // Using the queue
    let queue = new Queue<number>();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.print(); // Output: [1, 2, 3]
    queue.dequeue();
    queue.print(); // Output: [2, 3]
    console.log(queue.peek()); // Output: 2
    console.log(queue.isEmpty()); // Output: false
    console.log(queue.size()); // Output: 2
    queue.clear();
    queue.print(); // Output: []
    ```

   </TabItem>
   <TabItem value="c++" label="C++">    
    ```cpp
    #include <iostream>
    #include <vector>
    using namespace std;

    // Creating a queue in C++
    template <class T>
    class Queue {
    private:
        vector<T> items;

    public:
        // Enqueue operation
        void enqueue(T element) {
            items.push_back(element);
        }

        // Dequeue operation
        T dequeue() {
            if (isEmpty()) {
                throw underflow_error("Underflow");
            }
            T element = items.front();
            items.erase(items.begin());
            return element;
        }

        // Peek operation
        T peek() {
            if (isEmpty()) {
                throw underflow_error("Queue is empty");
            }
            return items.front();
        }

        // isEmpty operation
        bool isEmpty() {
            return items.empty();
        }

        // Size operation
        int size() {
            return items.size();
        }

        // Clear operation
        void clear() {
            items.clear();
        }

        // Print operation
        void print() {
            for (T element : items) {
                cout << element << " ";
            }
            cout << endl;
        }
    };

    int main() {
        Queue<int> queue;
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.print(); // Output: 1 2 3
        queue.dequeue();
        queue.print(); // Output: 2 3
        cout << queue.peek() << endl; // Output: 2
        cout << queue.isEmpty() << endl; // Output: 0
        cout << queue.size() << endl; // Output: 2
        queue.clear();
        queue.print(); // Output:

        return 0;
    }
    ```

   </TabItem>
   <TabItem value="java" label="Java">    
    ```java
    import java.util.LinkedList;
    import java.util.Queue;

    public class Main {
        public static void main(String[] args) {
            // Creating a queue in Java
            Queue<Integer> queue = new LinkedList<>();

            // Enqueue operation
            queue.add(1);
            queue.add(2);
            queue.add(3);

            // Print operation
            System.out.println(queue); // Output: [1, 2, 3]

            // Dequeue operation
            queue.poll();
            System.out.println(queue); // Output: [2, 3]

            // Peek operation
            System.out.println(queue.peek()); // Output: 2

            // isEmpty operation
            System.out.println(queue.isEmpty()); // Output: false

            // Size operation
            System.out.println(queue.size()); // Output: 2

            // Clear operation
            queue.clear();
            System.out.println(queue); // Output: []
        }
    }
    ```

   </TabItem>
</Tabs>

## Differences Between Stacks and Queues

Stacks and queues are both data structures that store a collection of elements, but they differ in how the elements are accessed and removed. The main differences between stacks and queues are:

| No. | Feature      | Stack                                                                                      | Queue                                                                                |
| --- | :----------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| 1.  | Access Order | Elements are accessed in a Last-In-First-Out (LIFO) order.                                 | Elements are accessed in a First-In-First-Out (FIFO) order.                          |
| 2.  | Insertion    | Elements are inserted and removed from the top of the stack.                               | Elements are inserted at the back and removed from the front of the queue.           |
| 3.  | Removal      | The last element added to the stack is the first one to be removed.                        | The first element added to the queue is the first one to be removed.                 |
| 4.  | Operations   | Stacks support push, pop, peek, isEmpty, size, clear, and other operations.                | Queues support enqueue, dequeue, peek, isEmpty, size, clear, and other operations.   |
| 5.  | Applications | Stacks are used for undo operations, function calls, backtracking, and other applications. | Queues are used for job queues, message queues, web servers, and other applications. |

:::tip for better understanding 🤓

## Live Example

You can try running the following code snippet to see the output of the examples provided above:

```jsx live
function Example() {
  // Stack class
  class Stack {
    constructor() {
      this.items = [];
    }

    push(element) {
      this.items.push(element);
    }

    pop() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.pop();
    }

    peek() {
      return this.items[this.items.length - 1];
    }

    isEmpty() {
      return this.items.length === 0;
    }

    size() {
      return this.items.length;
    }

    clear() {
      this.items = [];
    }

    print() {
      return this.items.join(" ");
    }
  }

  // Queue class
  class Queue {
    constructor() {
      this.items = [];
    }

    enqueue(element) {
      this.items.push(element);
    }

    dequeue() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.shift();
    }

    peek() {
      return this.items[0];
    }

    isEmpty() {
      return this.items.length === 0;
    }

    size() {
      return this.items.length;
    }

    clear() {
      this.items = [];
    }

    print() {
      return this.items.join(" ");
    }
  }

  // Creating a stack
  let stack = new Stack();

  // Creating a queue
  let queue = new Queue();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          flex: 1,
          margin: "20px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      >
        <h3>Stack Example</h3>
        <div>
          <p>Using the stack:</p>
          <p>{stack.push(1)}</p>
          <p>{stack.push(2)}</p>
          <p>{stack.push(3)}</p>
          <p>{stack.print()}</p>
          <p>{stack.pop()}</p>
          <p>{stack.print()}</p>
          <p>{stack.peek()}</p>
          <p>{stack.isEmpty().toString()}</p>
          <p>{stack.size()}</p>
          <p>{stack.clear()}</p>
          <p>{stack.print()}</p>
        </div>
      </div>

      <div
        style={{
          flex: 1,
          margin: "20px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      >
        <h3>Queue Example</h3>
        <div>
          <p>Using the queue:</p>
          <p>{queue.enqueue(1)}</p>
          <p>{queue.enqueue(2)}</p>
          <p>{queue.enqueue(3)}</p>
          <p>{queue.print()}</p>
          <p>{queue.dequeue()}</p>
          <p>{queue.print()}</p>
          <p>{queue.peek()}</p>
          <p>{queue.isEmpty().toString()}</p>
          <p>{queue.size()}</p>
          <p>{queue.clear()}</p>
          <p>{queue.print()}</p>
        </div>
      </div>
    </div>
  );
}
```

:::

## Conclusion

In this tutorial, we learned about stacks and queues in Data Structures and Algorithms. We discussed what stacks and queues are, how they are used, and how they are different from each other. We also saw examples of stacks and queues in JavaScript, Python, TypeScript, C++, and Java.
