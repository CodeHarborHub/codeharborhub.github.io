---
id: cpp-STL-containers
title: STL Containers in C++
sidebar_label: STL Containers in C++
sidebar_position: 1
tags:
  [
    c++,
    programming,
    c++ STL,
    c++ standard template library,
    c++ STL containers
  ]
description: In this tutorial, we'll explore STL containers in C++. We'll cover the different types of Standard Template Library containers, including vectors, lists, deques, sets, maps, and more. You'll learn how to choose the appropriate container for your needs and how to use their various functions and methods. Understanding STL containers is essential for effective data management and manipulation in C++ programs, providing you with powerful tools to handle collections of data efficiently.
---

## Introduction

Containers can be described as the objects that hold the data of the same type. Containers are used to implement different data structures for example arrays, list, trees, etc.

## Types of STL Containers

- **Vector:** Vector is a class that creates a dynamic array allowing insertions and deletions at the back.	
         Header File: `<vector>`
    
- **List:** List is the sequence containers that allow the insertions and deletions from anywhere.	
       Header File: `<list>`	
       
- **Deque:** Deque is the double ended queue that allows the insertion and deletion from both the ends.	
        Header File: `<deque>`
        
- **Set:** Set is an associate container for storing unique sets.	
      Header File: `<set>`	
      
- **Multiset:**	Multiset is an associate container for storing non- unique sets.	
            Header File: `<set>`
            
- **Map:**	Map is an associate container for storing unique key-value pairs, i.e. each key is associated with only one value(one to one mapping).	
      Header File: `<map>`

- **Multimap:** Multimap is an associate container for storing key- value pair, and each key can be associated with more than one value.
          Header File: `<map>`
          
- **Stack:** It follows last in first out(LIFO).	
        Header File: `<stack>`
        
- **Queue:**	It follows first in first out(FIFO).	
        Header File: `<queue>`
        
- **Priority-queue:** First element out is always the highest priority element.	  
                  Header File: `<queue>`


## Choosing the Right Container

Here are some general guidelines for choosing the appropriate container:

1. Sequential containers are used to store elements in a linear order. They include arrays, vectors, deques, lists, and forward lists.

2. Associative containers are used to store elements in a key-value relationship. They include maps, multimaps, sets, and multisets.

3. Container adapters provide a different interface to an existing container. They include stacks, queues, and priority queues.

Understanding STL containers is essential for effective data management and manipulation in C++ programs, providing you with powerful tools to handle collections of data efficiently.
