---
id: priority-queue
title: Priority Queue in Data Structures and Algorithms
sidebar_label: Priority Queue
tags:
  - dsa
  - data-structures
  - priority-queue
  - intermediate
  - javascript
  - python
  - c++
  - java
  - programming
  - tutorial
  - typescript
sidebar_position: 2
---
In this tutorial, we'll explore priority queues in Data Structures and Algorithms. We'll discuss what priority queues are, how they're used, and how to implement them in various programming languages.

## Priority Queue in Data Structures and Algorithms
![Priority Queue](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIjnd49L65sMTGqPmBiVyau1KmDuYe4po_Q&s)

A priority queue is a data structure similar to a regular queue or stack, but each element has an associated priority. Elements with higher priorities are dequeued before elements with lower priorities. Priority queues are commonly used in scenarios where elements need to be processed based on their importance or urgency.

A priority queue supports the following operations:

1. **Insertion**: Adds an element to the priority queue with its associated priority.
2. **Deletion**: Removes and returns the element with the highest priority from the priority queue.
3. **Peek**: Returns the element with the highest priority without removing it.
4. **isEmpty**: Checks if the priority queue is empty.
5. **Size**: Returns the number of elements in the priority queue.
6. **Clear**: Removes all elements from the priority queue.

Additionally, priority queues may support other operations such as searching, updating priorities, merging, and iterating.

Here's an example of a priority queue in some programming languages:

<Tabs>
  <TabItem value="javascript" label="JavaScript">   
    ```javascript
   
    class PriorityQueue {
      constructor() {
        this.items = [];
      }

      // Insertion operation
      enqueue(element, priority) {
        const queueElement = { element, priority };
        let added = false;
        for (let i = 0; i < this.items.length; i++) {
          if (queueElement.priority < this.items[i].priority) {
            this.items.splice(i, 0, queueElement);
            added = true;
            break;
          }
        }
        if (!added) {
          this.items.push(queueElement);
        }
      }

      // Deletion operation
      dequeue() {
        if (this.isEmpty()) {
          return "Underflow";
        }
        return this.items.shift().element;
      }

      // Peek operation
      peek() {
        if (this.isEmpty()) {
          return "Queue is empty";
        }
        return this.items[0].element;
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

    let priorityQueue = new PriorityQueue();
    priorityQueue.enqueue("Task 1", 2);
    priorityQueue.enqueue("Task 2", 1);
    priorityQueue.enqueue("Task 3", 3);
    priorityQueue.print(); // Output: [{ element: 'Task 2', priority: 1 }, { element: 'Task 1', priority: 2 }, { element: 'Task 3', priority: 3 }]
    console.log(priorityQueue.dequeue()); // Output: Task 2
    console.log(priorityQueue.peek()); // Output: Task 1
    console.log(priorityQueue.isEmpty()); // Output: false
    console.log(priorityQueue.size()); // Output: 2
    priorityQueue.clear();
    priorityQueue.print(); // Output: []
    ```

  </TabItem>
  <TabItem value="python" label="Python">    
    ```python
    from queue import PriorityQueue

    # Using the priority queue
    priorityQueue = PriorityQueue()
    priorityQueue.put((2, "Task 1"))
    priorityQueue.put((1, "Task 2"))
    priorityQueue.put((3, "Task 3"))
    while not priorityQueue.empty():
        print(priorityQueue.get()[1], end=' ') # Output: Task 2 Task 1 Task 3
    ```

   </TabItem>
   <TabItem value="typescript" label="TypeScript">    
    ```typescript
    interface QueueElement<T> {
      element: T;
      priority: number;
    }

    class PriorityQueue<T> {
      private items: QueueElement<T>[] = [];

      enqueue(element: T, priority: number): void {
        const queueElement: QueueElement<T> = { element, priority };
        let added = false;
        for (let i = 0; i < this.items.length; i++) {
          if (queueElement.priority < this.items[i].priority) {
            this.items.splice(i, 0, queueElement);
            added = true;
            break;
          }
        if (!added) {
          this.items.push(queueElement);
        }
      }

      // Deletion operation
      dequeue(): T | string {
        if (this.isEmpty()) {
          return "Underflow";
        }
        return this.items.shift()?.element;
      }

      // Peek operation
      peek(): T | string {
        if (this.isEmpty()) {
          return "Queue is empty";
        }
        return this.items[0].element;
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

    // Using the priority queue
    let priorityQueue = new PriorityQueue<string>();
    priorityQueue.enqueue("Task 1", 2);
    priorityQueue.enqueue("Task 2", 1);
    priorityQueue.enqueue("Task 3", 3);
    priorityQueue.print(); // Output: [{ element: 'Task 2', priority: 1 }, { element: 'Task 1', priority: 2 }, { element: 'Task 3', priority: 3 }]
    console.log(priorityQueue.dequeue()); // Output: Task 2
    console.log(priorityQueue.peek()); // Output: Task 1
    console.log(priorityQueue.isEmpty()); // Output: false
    console.log(priorityQueue.size()); // Output: 2
    priorityQueue.clear();
    priorityQueue.print(); // Output: []
    ```

   </TabItem>
   <TabItem value="c++" label="C++">    
    ```cpp
    #include <iostream>
    #include <queue>
    #include <utility>
    using namespace std;

    class PriorityQueue {
    private:
        priority_queue<pair<int, string>, vector<pair<int, string>>, greater<pair<int, string>>> pq;

    public:
        // Insertion operation
        void enqueue(string element, int priority) {
            pq.push({priority, element});
        }

        // Deletion operation
        string dequeue() {
            if (isEmpty()) {
                return "Underflow";
            }
            string element = pq.top().second;
            pq.pop();
            return element;
        }

        // Peek operation
        string peek() {
            if (isEmpty()) {
                return "Queue is empty";
            }
            return pq.top().second;
        }

        // isEmpty operation
        bool isEmpty() {
            return pq.empty();
        }

        // Size operation
        int size() {
            return pq.size();
        }

        // Clear operation
        void clear() {
            while (!pq.empty()) {
                pq.pop();
            }
        }

        // Print operation
        void print() {
            priority_queue<pair<int, string>, vector<pair<int, string>>, greater<pair<int, string>>> temp = pq;
            while (!temp.empty()) {
                cout << temp.top().second << " ";
                temp.pop();
            }
            cout << endl;
        }
    };

    int main() {
        PriorityQueue pq;
        pq.enqueue("Task 1", 2);
        pq.enqueue("Task 2", 1);
        pq.enqueue("Task 3", 3);
        pq.print(); // Output: Task 2 Task 1 Task 3
        cout << pq.dequeue() << endl; // Output: Task 2
        cout << pq.peek() << endl; // Output: Task 1
        cout << (pq.isEmpty() ? "true" : "false") << endl; // Output: false
        cout << pq.size() << endl; // Output: 2
        pq.clear();
        pq.print(); // Output:
        return 0;
    }
    ```

   </TabItem>
   <TabItem value="java" label="Java">    
    ```java
    import java.util.PriorityQueue;

    public class Main {
        public static void main(String[] args) {
            // Creating a priority queue in Java
            PriorityQueue<String> priorityQueue = new PriorityQueue<>();

            // Using the priority queue
            priorityQueue.add("Task 1");
            priorityQueue.add("Task 2");
            priorityQueue.add("Task 3");

            // Print operation
            System.out.println(priorityQueue); // Output: [Task 1, Task 3, Task 2]

            // Deletion operation
            priorityQueue.poll();
            System.out.println(priorityQueue); // Output: [Task 2, Task 3]

            // Peek operation
            System.out.println(priorityQueue.peek()); // Output: Task 2

            // isEmpty operation
            System.out.println(priorityQueue.isEmpty()); // Output: false

            // Size operation
            System.out.println(priorityQueue.size()); // Output: 2

            // Clear operation
            priorityQueue.clear();
            System.out.println(priorityQueue); // Output: []
        }
    }
    ```

   </TabItem>
</Tabs>

## Conclusion

In this tutorial, we explored priority queues in Data Structures and Algorithms. We discussed their characteristics, operations, and provided implementations in JavaScript, Python, TypeScript, C++, and Java. Priority queues are valuable for managing elements based on their priorities, enabling efficient processing of high-priority tasks. Understanding priority queues can enhance your problem-solving skills in various domains.

This comprehensive tutorial covers priority queues, including their operations and implementations in different programming languages. It serves as a valuable resource for understanding and utilizing priority queues effectively in your projects.
       