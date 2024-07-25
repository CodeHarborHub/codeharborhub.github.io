---
id: lesson-2
title: "Synchronization Techniques"
sidebar_label: Synchronization Techniques
sidebar_position: 2
description: "Synchronization Techniques in Ruby"
tags: [courses,Advance-level,Introduction]
---  

**Mutex**:
- A Mutex (short for mutual exclusion) is used to synchronize access to shared resources.

**Example**:
```ruby
require 'thread'

mutex = Mutex.new
shared_resource = 0

threads = []
10.times do |i|
  threads << Thread.new do
    100.times do
      mutex.synchronize do
        shared_resource += 1
      end
    end
  end
end

threads.each(&:join)
puts "Final value of shared_resource: #{shared_resource}"
```

**Output**:
```bash
Final value of shared_resource: 1000
```

####  Using `concurrent-ruby` for Advanced Concurrency

**concurrent-ruby**:
- The `concurrent-ruby` gem provides advanced concurrency abstractions like futures, promises, and thread pools.

**Example**:
```ruby
require 'concurrent-ruby'

future = Concurrent::Future.new do
  sleep 2
  "Result from future"
end

# Do other work here
puts "Waiting for future..."

# Get result from future
puts future.value # Blocks until the future completes
```

**Output**:
```bash
Waiting for future...
Result from future
```

:::tip

1. **Avoid Shared State**:
   - Minimize shared state between threads to reduce the complexity of synchronization and avoid race conditions.

2. **Use Synchronization Mechanisms Wisely**:
   - Use mutexes and other synchronization tools to manage access to shared resources, but avoid overusing them as they can lead to bottlenecks.

3. **Profile and Test Concurrent Code**:
   - Concurrency issues can be subtle. Profile and test your concurrent code thoroughly to ensure it behaves as expected.

4. **Threads and Fibers**:
   - Threads allow parallel execution within a process. Fibers are more lightweight but require cooperative multitasking.

5. **Synchronization**:
   - Proper synchronization is crucial for preventing race conditions and ensuring data integrity when using multiple threads.

6. **Advanced Concurrency Tools**:
   - `concurrent-ruby` provides powerful abstractions for managing concurrency, such as futures and thread pools, which can simplify complex concurrency tasks.
:::