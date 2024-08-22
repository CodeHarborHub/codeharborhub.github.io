---
title: "Mastering Data Structures in Python"
sidebar_label: Data Structures
authors: [santhosh-siddhardha]
tags: [data-structures, python, best-practices]
date: 2024-07-07
hide_table_of_contents: true
---

Data structures are essential components in computer science, enabling efficient data storage, manipulation, and retrieval. In Python, a variety of built-in data structures are available, each suited for specific tasks. This article aims to provide a comprehensive guide to mastering these data structures, including their usage, advantages, and best practices.

<!-- truncate -->

## Overview of Data Structures

### Types of Data Structures

1. **Primitive Data Structures**

   - Integers
   - Floats
   - Strings
   - Booleans

2. **Non-Primitive Data Structures**
   - Lists
   - Tuples
   - Dictionaries
   - Sets

## Lists

### Introduction

- Lists are ordered, mutable collections of items.
- They allow duplicate elements.
- Lists can hold heterogeneous data types.

### Basic Operations

```python
# Creating a list
my_list = [1, 2, 3, 'apple', 'banana']

# Accessing elements
print(my_list[0])  # Output: 1
print(my_list[-1])  # Output: 'banana'

# Modifying elements
my_list[0] = 10

# Adding elements
my_list.append('cherry')
my_list.insert(2, 'orange')

# Removing elements
my_list.remove('apple')
del my_list[1]
popped_item = my_list.pop()

# Slicing
sub_list = my_list[1:3]

print(my_list)     # Output: [10, 'orange', 3, 'banana']
print(popped_item) # Output: 'cherry'
print(sub_list)    # Output: ['orange', 3]
```

### List Comprehensions

- A concise way to create lists.

```python
squares = [x**2 for x in range(10)]
print(squares)  # Output: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

## Tuples

### Introduction

- Tuples are ordered, immutable collections of items.
- They allow duplicate elements.
- Tuples can hold heterogeneous data types.

### Basic Operations

```python
# Creating a tuple
my_tuple = (1, 2, 3, 'apple', 'banana')

# Accessing elements
print(my_tuple[0])  # Output: 1
print(my_tuple[-1])  # Output: 'banana'

# Slicing
sub_tuple = my_tuple[1:3]
print(sub_tuple)  # Output: (2, 3)
```

### Unpacking Tuples

```python
a, b, c, d, e = my_tuple
print(a, b, c, d, e)  # Output: 1 2 3 apple banana
```

## Dictionaries

### Introduction

- Dictionaries are unordered collections of key-value pairs.
- Keys must be unique and immutable.
- Values can be of any data type.

### Basic Operations

```python
# Creating a dictionary
my_dict = {'name': 'John', 'age': 25, 'city': 'New York'}

# Accessing elements
print(my_dict['name'])  # Output: John

# Modifying elements
my_dict['age'] = 26

# Adding elements
my_dict['job'] = 'Engineer'

# Removing elements
del my_dict['city']
popped_value = my_dict.pop('job')

# Dictionary methods
keys = my_dict.keys()
values = my_dict.values()
items = my_dict.items()

print(my_dict)     # Output: {'name': 'John', 'age': 26}
print(popped_value) # Output: Engineer
print(list(keys))  # Output: ['name', 'age']
print(list(values))  # Output: ['John', 26]
print(list(items))  # Output: [('name', 'John'), ('age', 26)]
```

### Dictionary Comprehensions

```python
squared_numbers = {x: x**2 for x in range(10)}
print(squared_numbers)  # Output: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81}
```

## Sets

### Introduction

- Sets are unordered collections of unique elements.
- They do not allow duplicate elements.

### Basic Operations

```python
# Creating a set
my_set = {1, 2, 3, 'apple'}

# Adding elements
my_set.add('banana')

# Removing elements
my_set.remove('apple')
popped_item = my_set.pop()

# Set operations
set1 = {1, 2, 3}
set2 = {3, 4, 5}

union = set1 | set2
intersection = set1 & set2
difference = set1 - set2
symmetric_difference = set1 ^ set2

print(my_set)                # Output: {2, 3, 'banana'}
print(popped_item)           # Output: 1 (the popped element, which can be any element as sets are unordered)
print(union)                 # Output: {1, 2, 3, 4, 5}
print(intersection)          # Output: {3}
print(difference)            # Output: {1, 2}
print(symmetric_difference)  # Output: {1, 2, 4, 5}
```

## Advanced Data Structures

### Stacks

- Last In, First Out (LIFO) principle.
- Can be implemented using lists.

```python
stack = []

# Pushing elements
stack.append(1)
stack.append(2)

# Popping elements
popped_element = stack.pop()

print(stack)           # Output: [1]
print(popped_element)  # Output: 2
```

### Queues

- First In, First Out (FIFO) principle.
- Can be implemented using `collections.deque`.

```python
from collections import deque

queue = deque()

# Enqueuing elements
queue.append(1)
queue.append(2)

# Dequeuing elements
dequeued_element = queue.popleft()

print(queue)            # Output: deque([2])
print(dequeued_element) # Output: 1
```

### Linked Lists

- Nodes containing data and pointers to the next node.
- Can be implemented using classes.

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node

    def print_list(self):
        current = self.head
        while current:
            print(current.data, end=" ")
            current = current.next
        print()

# Using the LinkedList class
ll = LinkedList()
ll.append(1)
ll.append(2)
ll.print_list()  # Output: 1 2
```

### Trees

- Hierarchical data structures with a root node and children nodes.
- Can be implemented using classes.

```python
class TreeNode:
    def __init__(self, data):
        self.data = data
        self.children = []

    def add_child(self, child):
        self.children.append(child)

    def print_tree(self):
        print(self.data)
        for child in self.children:
            child.print_tree()

# Using the TreeNode class
root = TreeNode('root')
child1 = TreeNode('child1')
child2 = TreeNode('child2')
root.add_child(child1)
root.add_child(child2)
root.print_tree()
# Output:
# root
# child1
# child2
```

### Graphs

- Consist of vertices (nodes) and edges (connections between nodes).
- Can be represented using adjacency lists or matrices.

```python
class Graph:
    def __init__(self):
        self.graph = {}

    def add_edge(self, u, v):
        if u not in self.graph:
            self.graph[u] = []
        self.graph[u].append(v)

    def print_graph(self):
        for node in self.graph:
            print(node, '->', self.graph[node])

# Using the Graph class
g = Graph()
g.add_edge('A', 'B')
g.add_edge('A', 'C')
g.print_graph()
# Output:
# A -> ['B', 'C']
```

## Conclusion

Understanding and mastering data structures in Python is crucial for efficient programming and problem-solving. By leveraging Python's built-in data structures and understanding how to implement more advanced structures, you can write more effective and optimized code. Remember to choose the right data structure for the task at hand to ensure your programs run efficiently and maintainably.
