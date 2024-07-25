# Asynchronous Programming

*Synchronous Programming*:Synchronous programming, executes the tasks in a predetermined order, where each operation waits for the previous one to complete before proceeding.

*Asynchronous Programming*:Asynchronous programming allows tasks to execute independently of one another, enabling concurrent execution and improved performance.

### `asyncio` in Python 

Asyncio is a Python library that is used for concurrent programming, including the use of async iterator in Python. It is not multi-threading or multi-processing. Asyncio is used as a foundation for multiple Python asynchronous frameworks that provide high-performance network and web servers, database connection libraries, distributed task queues, etc

1. **Coroutine**: A function defined with `async def` that can be paused and resumed. It runs until it awaits on another coroutine or an `awaitable` object (such as another coroutine, a task, or a future).
2. **Event Loop**: The core of every asyncio application. It runs asynchronous tasks and callbacks, performs network IO operations, and runs sub-processes.
3. **Task**: A coroutine wrapped in a task and scheduled to run on the event loop.
4. **Awaitable**: An object that can be used with await expression, which includes coroutines, Tasks, and Futures.
5. **Future**: A low-level `awaitable` object that represents a result that will be available in the future.

- Creating and Running coroutines
```python
import asyncio

async def greet(name):
    print(f"Hello, {name}")
    await asyncio.sleep(1)
    print(f"Goodbye, {name}")
async def main():
    await greet("Alice")
    await greet("Bob")

asyncio.run(main())
```

You can create coroutines using `async def` and run them using `await`

- Running multiple coroutines

```python
import asyncio

async def greet(name):
    print(f"Hello, {name}")
    await asyncio.sleep(1)
    print(f"Goodbye, {name}")

async def main():
    await asyncio.gather(
        greet("Alice"),
        greet("Bob")
    )

asyncio.run(main())
```

You can run multiple coroutines concurrently using `asyncio.gather` or `asyncio.create_task`.


