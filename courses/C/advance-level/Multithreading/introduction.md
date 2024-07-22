---
id: lesson-1
title: "Multithreading and Concurrency in C"
sidebar_label: Multithreading and Concurrency 
sidebar_position: 1
description: "Learn Multithreading and Concurrency in C"
tags: [courses,Advance-level,Introduction]
--- 
 

Multithreading and concurrency are key concepts in modern programming that allow programs to perform multiple tasks simultaneously. This section covers the basics of multithreading, thread management, synchronization techniques, and handling concurrency issues in C.

#### 1. Introduction to Multithreading

- **Multithreading**: A technique where multiple threads execute within the same process, allowing for concurrent execution of tasks.
- **Thread**: The smallest unit of execution within a process. Each thread runs independently but shares the same memory space with other threads in the process.
- **Concurrency**: The ability of a program to handle multiple tasks at the same time, which can be achieved through multithreading or parallel processing.

#### 2. Creating and Managing Threads

In C, multithreading is typically handled using the POSIX Threads (pthreads) library. Below is an example of how to create and manage threads.

**Example of Creating and Managing Threads**:

```c
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

// Function to be executed by threads
void* thread_function(void* arg) {
    printf("Hello from thread %d\n", *((int*)arg));
    pthread_exit(NULL);
}

int main() {
    pthread_t threads[2];
    int thread_args[2];
    int rc;

    // Create two threads
    for (int i = 0; i < 2; i++) {
        thread_args[i] = i;
        rc = pthread_create(&threads[i], NULL, thread_function, (void*)&thread_args[i]);
        if (rc) {
            printf("Error: Unable to create thread %d\n", rc);
            exit(-1);
        }
    }

    // Wait for threads to complete
    for (int i = 0; i < 2; i++) {
        pthread_join(threads[i], NULL);
    }

    printf("All threads completed.\n");
    return 0;
}
```

**Output**:
```
Hello from thread 0
Hello from thread 1
All threads completed.
```

**Explanation**:
- `pthread_create()` is used to create a new thread. It takes four arguments: the thread identifier, thread attributes, the function to execute, and the argument for that function.
- `pthread_join()` is used to wait for the thread to finish executing.

#### 3. Synchronization Techniques

Synchronization is crucial to prevent data corruption when multiple threads access shared resources. Common synchronization techniques include mutexes and semaphores.

- **Mutexes (Mutual Exclusion)**: Used to protect shared resources by ensuring only one thread accesses the resource at a time.

**Example of Using Mutexes**:

```c
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
int shared_variable = 0;

void* thread_function(void* arg) {
    pthread_mutex_lock(&mutex);  // Lock the mutex
    shared_variable++;
    printf("Shared variable incremented to %d\n", shared_variable);
    pthread_mutex_unlock(&mutex);  // Unlock the mutex
    pthread_exit(NULL);
}

int main() {
    pthread_t threads[2];
    int rc;

    for (int i = 0; i < 2; i++) {
        rc = pthread_create(&threads[i], NULL, thread_function, NULL);
        if (rc) {
            printf("Error: Unable to create thread %d\n", rc);
            exit(-1);
        }
    }

    for (int i = 0; i < 2; i++) {
        pthread_join(threads[i], NULL);
    }

    printf("Final shared variable value: %d\n", shared_variable);
    return 0;
}
```

**Output**:
```
Shared variable incremented to 1
Shared variable incremented to 2
Final shared variable value: 2
```

- **Semaphores**: Used to control access to a common resource by multiple threads.

**Example of Using Semaphores**:

```c
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <semaphore.h>

sem_t semaphore;

void* thread_function(void* arg) {
    sem_wait(&semaphore);  // Decrement the semaphore
    printf("Thread %d entering critical section\n", *((int*)arg));
    sleep(1);  // Simulate work
    printf("Thread %d leaving critical section\n", *((int*)arg));
    sem_post(&semaphore);  // Increment the semaphore
    pthread_exit(NULL);
}

int main() {
    pthread_t threads[2];
    int thread_args[2];
    int rc;

    sem_init(&semaphore, 0, 1);  // Initialize semaphore with value 1

    for (int i = 0; i < 2; i++) {
        thread_args[i] = i;
        rc = pthread_create(&threads[i], NULL, thread_function, (void*)&thread_args[i]);
        if (rc) {
            printf("Error: Unable to create thread %d\n", rc);
            exit(-1);
        }
    }

    for (int i = 0; i < 2; i++) {
        pthread_join(threads[i], NULL);
    }

    sem_destroy(&semaphore);  // Destroy semaphore
    return 0;
}
```

**Output**:
```
Thread 0 entering critical section
Thread 1 entering critical section
Thread 0 leaving critical section
Thread 1 leaving critical section
```

#### 4. Thread Communication

Threads within the same process can communicate via shared memory. For more complex communication, techniques like condition variables and message passing are used.

- **Condition Variables**: Allow threads to wait for certain conditions to be met before continuing execution.

**Example of Using Condition Variables**:

```c
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
pthread_cond_t cond = PTHREAD_COND_INITIALIZER;
int ready = 0;

void* producer(void* arg) {
    pthread_mutex_lock(&mutex);
    ready = 1;  // Set condition
    pthread_cond_signal(&cond);  // Signal consumer
    pthread_mutex_unlock(&mutex);
    pthread_exit(NULL);
}

void* consumer(void* arg) {
    pthread_mutex_lock(&mutex);
    while (!ready) {
        pthread_cond_wait(&cond, &mutex);  // Wait for condition
    }
    printf("Consumer received signal\n");
    pthread_mutex_unlock(&mutex);
    pthread_exit(NULL);
}

int main() {
    pthread_t producer_thread, consumer_thread;

    pthread_create(&consumer_thread, NULL, consumer, NULL);
    pthread_create(&producer_thread, NULL, producer, NULL);

    pthread_join(producer_thread, NULL);
    pthread_join(consumer_thread, NULL);

    return 0;
}
```

**Output**:
```
Consumer received signal
```