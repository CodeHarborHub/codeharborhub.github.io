---
id: lesson-2
title: "Working with Binary Files"
sidebar_label: Working with Binary Files
sidebar_position: 2
description: "Learn Working with Binary Filesg"
tags: [courses,intermediate-level,React Native,Introduction]
--- 
      

Binary files store data in a binary format, which is more efficient and compact. Use `ios::binary` mode to read/write binary files.

##### Example: Binary File Operations
```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main() {
    // Writing to a binary file
    ofstream outFile("example.bin", ios::binary);
    if (outFile.is_open()) {
        int num = 12345;
        outFile.write(reinterpret_cast<char*>(&num), sizeof(num));
        outFile.close();
    }

    // Reading from a binary file
    ifstream inFile("example.bin", ios::binary);
    if (inFile.is_open()) {
        int num;
        inFile.read(reinterpret_cast<char*>(&num), sizeof(num));
        cout << "Number read from file: " << num << endl;
        inFile.close();
    }

    return 0;
}
```

**Output:**
```
Number read from file: 12345
```


:::tip
- **Always Check File Open Status**: Before performing any file operations, check if the file was successfully opened.
- **Close Files Properly**: Ensure files are closed after operations to avoid data loss and free system resources.
- **Use File Modes Appropriately**: Choose the correct file mode for your operations to prevent unintended behavior.
- **Error Handling**: Implement proper error handling for file operations to manage issues like file not found or access denied.
:::