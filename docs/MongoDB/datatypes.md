---
id: mongodb-datatypes
title: MongoDB - Datatypes
sidebar_label: Datatypes
sidebar_position: 10
tags: [mongodb, datatypes, commands]
description: Learn about the various datatypes supported by MongoDB, their uses, and examples.
---

# MongoDB - Datatypes

MongoDB supports many datatypes. Some of them are listed below:


| Datatype           | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| **String**         | Stores UTF-8 valid strings.                                                 |
| **Integer**        | Stores 32-bit or 64-bit numerical values.                                   |
| **Boolean**        | Stores a boolean value (true/false).                                        |
| **Double**         | Stores floating-point values.                                               |
| **Min/Max Keys**   | Used to compare values against the lowest and highest BSON elements.        |
| **Arrays**         | Stores arrays or lists of multiple values.                                  |
| **Timestamp**      | Stores timestamps, useful for recording modification or addition times.     |
| **Object**         | Used for embedded documents.                                                |
| **Null**           | Stores a Null value.                                                        |
| **Symbol**         | Used identically to a string, reserved for specific languages.              |
| **Date**           | Stores the current date/time in UNIX format.                                |
| **Object ID**      | Stores the document’s ID.                                                   |
| **Binary Data**    | Stores binary data.                                                         |
| **Code**           | Stores JavaScript code in the document.                                     |
| **Regular Expression** | Stores regular expressions.                                            |


## Datatype Diagram

```mermaid
graph TD
    A[Datatypes] --> B[String]
    A --> C[Integer]
    A --> D[Boolean]
    A --> E[Double]
    A --> F[Min/Max Keys]
    A --> G[Arrays]
    A --> H[Timestamp]
    A --> I[Object]
    A --> J[Null]
    A --> K[Symbol]
    A --> L[Date]
    A --> M[Object ID]
    A --> N[Binary Data]
    A --> O[Code]
    A --> P[Regular Expression]
```
