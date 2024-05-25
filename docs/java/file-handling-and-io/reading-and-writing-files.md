---
id: reading-and-writing-files
title: Reading and Writing Files in Java
sidebar_label: Reading and Writing Files
sidebar_position: 2
tags: [java, file handling, io, programming, java file handling, java io]
description: In this tutorial, you will learn how to read from and write to files in Java. We will learn how to read text files, binary files, and write to text files using Java.
---

# Reading and Writing Files in Java

## Introduction

Reading and writing files is a common task in Java programming. Java provides several classes for handling file I/O operations, such as `FileInputStream`, `FileOutputStream`, `BufferedReader`, `BufferedWriter`, `FileReader`, and `FileWriter`. This guide covers basic file reading and writing operations using these classes.

## 1. Reading Files

### Reading Text Files

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class ReadTextFileExample {
    public static void main(String[] args) {
        try (BufferedReader reader = new BufferedReader(new FileReader("example.txt"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("An error occurred: " + e.getMessage());
        }
    }
}
```

### Reading Binary Files

```java
import java.io.FileInputStream;
import java.io.IOException;

public class ReadBinaryFileExample {
    public static void main(String[] args) {
        try (FileInputStream fis = new FileInputStream("example.bin")) {
            int byteData;
            while ((byteData = fis.read()) != -1) {
                System.out.print((char) byteData);
            }
        } catch (IOException e) {
            System.out.println("An error occurred: " + e.getMessage());
        }
    }
}
```

## 2. Writing Files

### Writing Text Files

```java
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class WriteTextFileExample {
    public static void main(String[] args) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter("example.txt"))) {
            writer.write("Hello, World!");
            writer.newLine();
            writer.write("This is a new line.");
        } catch (IOException e) {
            System.out.println("An error occurred: " + e.getMessage());
        }
    }
}
```

### Writing Binary Files

```java
import java.io.FileOutputStream;
import java.io.IOException;

public class WriteBinaryFileExample {
    public static void main(String[] args) {
        try (FileOutputStream fos = new FileOutputStream("example.bin")) {
            byte[] data = { 72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33 };
            fos.write(data);
        } catch (IOException e) {
            System.out.println("An error occurred: " + e.getMessage());
        }
    }
}
```

## Conclusion

Reading and writing files in Java is straightforward using the classes provided in the `java.io` package. Whether you need to handle text files or binary files, Java provides the necessary tools to perform file I/O operations efficiently. By understanding and using these classes effectively, you can manipulate files in your Java applications with ease.
