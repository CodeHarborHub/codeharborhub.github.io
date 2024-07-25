---
id: lesson-1
title: "Concurrency and Parallelism in Ruby"
sidebar_label: Concurrency and Parallelism 
sidebar_position: 1
description: "Concurrency and Parallelism in Ruby"
tags: [courses,Advance-level,Introduction]
---  
     

Concurrency and parallelism are essential for writing efficient and responsive programs. In Ruby, these concepts are supported through threading, fibers, and various libraries.

#### **1. Introduction to Threading and Fibers**

**Threading**:
- Threads allow multiple tasks to run concurrently within a single process. Ruby’s `Thread` class provides basic support for multithreading.

**Fibers**:
- Fibers are lightweight concurrency primitives used for cooperative multitasking. Unlike threads, fibers voluntarily yield control to other fibers.

**Example**:
```ruby
# Example of Threading
thread1 = Thread.new do
  5.times do |i|
    puts "Thread 1: #{i}"
    sleep 1
  end
end

thread2 = Thread.new do
  5.times do |i|
    puts "Thread 2: #{i}"
    sleep 1
  end
end

thread1.join
thread2.join
```

**Output**:
```bash
Thread 1: 0
Thread 2: 0
Thread 1: 1
Thread 2: 1
Thread 1: 2
Thread 2: 2
Thread 1: 3
Thread 2: 3
Thread 1: 4
Thread 2: 4
```

#### **2. Creating and Managing Threads**

**Creating Threads**:
- Threads are created using `Thread.new`. Each thread runs a block of code concurrently.

**Managing Threads**:
- Use `Thread#join` to wait for a thread to finish execution. `Thread#kill` can terminate a thread.

**Example**:
```ruby
threads = []

5.times do |i|
  threads << Thread.new do
    puts "Thread #{i} is running"
    sleep rand(1..3)
    puts "Thread #{i} is done"
  end
end

threads.each(&:join)
```

**Output**:
```bash
Thread 0 is running
Thread 1 is running
Thread 2 is running
Thread 3 is running
Thread 4 is running
Thread 0 is done
Thread 1 is done
Thread 2 is done
Thread 3 is done
Thread 4 is done
```