---
id: working-with-io-streams
title: Working with I/O Streams in Java
sidebar_label: Working with I/O Streams
sidebar_position: 6
tags: [java, io, streams, programming, java io, java streams]
description: In this tutorial, we will learn how to work with I/O streams in Java. We will learn what I/O streams are, how to create and use them, and how to read from and write to streams.
---

# Working with I/O Streams in Java

## Introduction

I/O streams in Java provide a way to read from and write to various sources, such as files, network connections, and in-memory buffers. Java I/O streams are categorized into two types: byte streams and character streams. This guide covers basic operations with I/O streams, including reading from and writing to files using byte and character streams.

## 1. Byte Streams

### Reading from a File Using FileInputStream

```java
import java.io.FileInputStream;
import java.io.IOException;

public class ReadFromByteStreamExample {
    public static void main(String[] args) {
        try (FileInputStream fis = new FileInputStream("input.txt")) {
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

### Writing to a File Using FileOutputStream

```java
import java.io.FileOutputStream;
import java.io.IOException;

public class WriteToByteStreamExample {
    public static void main(String[] args) {
        try (FileOutputStream fos = new FileOutputStream("output.txt")) {
            String data = "Hello, World!";
            byte[] bytes = data.getBytes();
            fos.write(bytes);
            System.out.println("Data written to file successfully");
        } catch (IOException e) {
            System.out.println("An error occurred: " + e.getMessage());
        }
    }
}
```

## 2. Character Streams

### Reading from a File Using FileReader

```java
import java.io.FileReader;
import java.io.IOException;

public class ReadFromCharacterStreamExample {
    public static void main(String[] args) {
        try (FileReader reader = new FileReader("input.txt")) {
            int charData;
            while ((charData = reader.read()) != -1) {
                System.out.print((char) charData);
            }
        } catch (IOException e) {
            System.out.println("An error occurred: " + e.getMessage());
        }
    }
}
```

### Writing to a File Using FileWriter

```java
import java.io.FileWriter;
import java.io.IOException;

public class WriteToCharacterStreamExample {
    public static void main(String[] args) {
        try (FileWriter writer = new FileWriter("output.txt")) {
            writer.write("Hello, World!");
            writer.write("\n");
            writer.write("This is a new line.");
            System.out.println("Data written to file successfully");
        } catch (IOException e) {
            System.out.println("An error occurred: " + e.getMessage());
        }
    }
}
```

## Conclusion

I/O streams provide a flexible and efficient way to perform input and output operations in Java. By using byte streams for binary data and character streams for text data, you can easily read from and write to various sources in your Java applications. Understanding how to work with I/O streams is essential for developing Java applications that handle I/O operations effectively.
