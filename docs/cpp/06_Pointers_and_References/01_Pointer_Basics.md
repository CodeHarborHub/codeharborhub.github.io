---
id: cpp-pointer-basics
title: The Basics of C++ Pointers
sidebar_label: The Basics of C++ Pointers
sidebar_position: 1
tags:
  [
    c++,
    programming,
    c++ programming,
    pointers,
    c++ pointers,
    pointer basics
  ]
description: In this tutorial, we'll dive into the basics of C++ pointers. We'll explore how pointers work, how to declare and initialize them, and how to use them to manipulate memory addresses and data. Understanding pointers is crucial for advanced memory management and data manipulation in C++, making this tutorial essential for any programmer aiming to master the language.
---

A pointer is a variable that stores the memory address of another variable. Instead of holding a data value directly, a pointer holds the address where the data is stored. This allows for efficient data manipulation and memory management.

###  Declaration of Pointers
To declare a pointer, you use an asterisk `*` before the pointer name. 

```cpp
int* ptr; // declares a pointer to an integer
char* charPtr; // declares a pointer to a character
double* doublePtr; // declares a pointer to a double
```

###  Initialization of Pointers
Pointers are typically initialized by assigning them the address of another variable using the address-of operator `&`.

```cpp
int var = 10;
int* ptr = &var; // ptr now holds the address of var
```

###  Accessing Values Using Pointers
You can access or modify the value stored at the address a pointer is pointing to using the dereference operator `*`.

```cpp
int var = 10;
int* ptr = &var;

cout << *ptr << endl; // Outputs 10

*ptr = 20; // Changes the value of var to 20
cout << var << endl; // Outputs 20
```

###  Null Pointers
A pointer that is not initialized to any address is called a null pointer. It is a good practice to initialize pointers to `nullptr` if you do not have an address to assign at the time of declaration.

```cpp
int* ptr = nullptr;
```

### Pointer Arithmetic
Pointers can be incremented or decremented to point to the next or previous memory location. This is particularly useful when working with arrays.

```cpp
int arr[] = {10, 20, 30};
int* ptr = arr;

cout << *ptr << endl; // Outputs 10
ptr++;
cout << *ptr << endl; // Outputs 20
```

###  Pointers and Arrays
Pointers and arrays are closely related in C++. The name of an array acts as a pointer to the first element of the array.

```cpp
int arr[] = {10, 20, 30};
int* ptr = arr; // ptr now points to the first element of arr

cout << *ptr << endl; // Outputs 10
```

###  Pointers to Pointers
A pointer to a pointer is a form of multiple indirection, or a chain of pointers. It is a pointer variable that holds the address of another pointer variable. This can be useful in various scenarios such as dynamic memory allocation, multi-dimensional arrays, and passing pointers to functions.

```cpp
int var = 10;
int* ptr = &var;
int** ptr2 = &ptr;

cout << **ptr2 << endl; // Outputs 10
```

#### 1. Declaration of a Pointer to Pointer
To declare a pointer to a pointer, you use two asterisks `**`.

```cpp
int** ptr; // declares a pointer to a pointer to an integer
```

#### 2. Initialization of a Pointer to Pointer
A pointer to a pointer can be initialized by assigning it the address of a pointer variable.

```cpp
int var = 10;
int* ptr = &var; // ptr holds the address of var
int** ptr2 = &ptr; // ptr2 holds the address of ptr
```

#### 3. Accessing Values Using a Pointer to Pointer
You can access the value pointed to by a pointer to pointer by using the dereference operator `*` twice.

```cpp
int var = 10;
int* ptr = &var;
int** ptr2 = &ptr;

cout << **ptr2 << endl; // Outputs 10
```

Here’s a breakdown of the operations:
- `ptr2` holds the address of `ptr`.
- `*ptr2` dereferences `ptr2` to get the address stored in `ptr`.
- `**ptr2` dereferences the address obtained from `*ptr2` to get the value stored at that address.

#### 4. Example
 Modifying a Value Using a Pointer to Pointer

```cpp
int var = 10;
int* ptr = &var;
int** ptr2 = &ptr;

**ptr2 = 20; // Changes the value of var to 20
cout << var << endl; // Outputs 20
```

#### 5. Dynamic Memory Allocation with Pointer to Pointer
Pointers to pointers are often used in dynamic memory allocation, especially for creating multi-dimensional arrays.

```cpp
int rows = 3;
int cols = 4;

// Allocate memory for an array of pointers
int** arr = new int*[rows];

// Allocate memory for each row
for (int i = 0; i < rows; ++i) {
    arr[i] = new int[cols];
}

// Example of accessing and setting values
arr[1][2] = 5;
cout << arr[1][2] << endl; // Outputs 5

// Deallocate memory
for (int i = 0; i < rows; ++i) {
    delete[] arr[i];
}
delete[] arr;
```

#### 6. Function Arguments: Passing Pointer to Pointer
Passing a pointer to pointer as an argument to a function allows the function to modify the pointer itself.

```cpp
void allocateMemory(int** ptr, int size) {
    *ptr = new int[size];
}

int main() {
    int* arr = nullptr;
    allocateMemory(&arr, 5);

    // Use the allocated memory
    for (int i = 0; i < 5; ++i) {
        arr[i] = i + 1;
        cout << arr[i] << " "; // Outputs: 1 2 3 4 5
    }

    // Deallocate memory
    delete[] arr;
    return 0;
}
```

###  Function Pointers
Pointers can also be used to point to functions. This is useful for callback functions and implementing function tables.

```cpp
void func() {
    cout << "Hello, World!" << endl;
}

void (*funcPtr)() = &func;
funcPtr(); // Calls func, outputs "Hello, World!"
```
#### 1. Declaring a Function Pointer
To declare a function pointer, you need to specify the return type and parameter types of the function it will point to.

```cpp
void (*funcPtr)(); // Pointer to a function that takes no parameters and returns void
```

#### 2. Initializing a Function Pointer
You can initialize a function pointer by assigning it the address of a function. You use the address-of operator `&`, though it can be omitted.

```cpp
void func() {
    cout << "Hello, World!" << endl;
}

void (*funcPtr)() = &func; // funcPtr now points to func
// or simply
void (*funcPtr)() = func;
```

#### 3. Using a Function Pointer
To call the function through the pointer, you use the pointer variable followed by parentheses containing any arguments the function takes.

```cpp
void func() {
    cout << "Hello, World!" << endl;
}

void (*funcPtr)() = func; // Initialize the function pointer

funcPtr(); // Calls func, outputs "Hello, World!"
```

#### 4. Function Pointers with Parameters
Function pointers can also point to functions that take parameters. The declaration must match the function's signature.

```cpp
int add(int a, int b) {
    return a + b;
}

int (*funcPtr)(int, int) = add; // Pointer to a function that takes two ints and returns an int

int result = funcPtr(5, 3); // Calls add(5, 3), result is 8
cout << result << endl; // Outputs 8
```

#### 5. Function Pointers and Arrays
You can create arrays of function pointers, which can be useful for implementing function tables.

```cpp
int add(int a, int b) {
    return a + b;
}

int subtract(int a, int b) {
    return a - b;
}

int (*operations[2])(int, int) = { add, subtract }; // Array of function pointers

int result1 = operations[0](10, 5); // Calls add(10, 5)
int result2 = operations[1](10, 5); // Calls subtract(10, 5)

cout << result1 << endl; // Outputs 15
cout << result2 << endl; // Outputs 5
```

#### 6. Typedef for Function Pointers
Using `typedef` can make function pointer declarations more readable.

```cpp
typedef int (*Operation)(int, int);

int add(int a, int b) {
    return a + b;
}

int subtract(int a, int b) {
    return a - b;
}

Operation operations[2] = { add, subtract };

int result1 = operations[0](10, 5);
int result2 = operations[1](10, 5);

cout << result1 << endl; // Outputs 15
cout << result2 << endl; // Outputs 5
```

### Conclusion
Pointers are a powerful feature in C++ that provide flexibility and control over memory management. Mastering pointers is essential for advanced programming and optimization in C++.