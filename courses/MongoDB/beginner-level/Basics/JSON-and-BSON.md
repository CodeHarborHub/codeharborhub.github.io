---
id: lesson-2
title: "What is JSON & BSON"
sidebar_label: JSON & BSON
sidebar_position: 2
description: "What is the Difference Between JSON and BSON"
tags: [courses,beginner-level,JSON,BSON,Introduction]
--- 

| Feature        | JSON (JavaScript Object Notation)                                                           | BSON (Binary JSON)                                                                                          |
|----------------|---------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| **Definition** | A lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. | A binary representation of JSON-like documents, optimized for space and speed.                               |
| **Format**     | Text-based, human-readable format used to represent structured data.                        | Binary format, optimized for performance and storage efficiency.                                              |
| **Data Types** | Supports basic data types such as string, number, array, object, boolean, and null.         | Extends JSON by providing additional data types, such as int, long, date, and binary data.                    |
| **Usage**      | Widely used in web development for APIs and data interchange between servers and web applications. | Used by MongoDB to store documents and make remote procedure calls.                                           |
| **Readability**| Easy for humans to read and write.                                                          | Not human-readable due to its binary format.                                                                  |
| **Efficiency** | Less efficient in terms of storage and speed compared to BSON.                              | More efficient in terms of storage and speed, making it suitable for high-performance applications.          |
| **Example**    | ```json { "name": "John", "age": 30, "city": "New York" } ```                              | BSON example would be binary data representing a similar structure, optimized for space and speed.           |
 