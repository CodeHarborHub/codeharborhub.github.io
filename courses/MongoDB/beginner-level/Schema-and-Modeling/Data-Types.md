---
id: lesson-4
title: "Data Types in MongoDB"
sidebar_label: Data Types
sidebar_position: 4
description: "Data Types in MongoDB"
tags: [courses,beginner-level,Data Types,Introduction]
---


MongoDB supports a wide range of data types to ensure flexibility in storing different kinds of data. Some common data types include:

1. **String**:
   - Stores textual data.
   ```javascript
   { name: "John Doe" }
   ```

2. **Number**:
   - Stores numerical data (integers, floats).
   ```javascript
   { age: 30 }
   ```

3. **Boolean**:
   - Stores `true` or `false`.
   ```javascript
   { isActive: true }
   ```

4. **Date**:
   - Stores dates and times.
   ```javascript
   { createdAt: new Date() }
   ```

5. **Array**:
   - Stores a list of values.
   ```javascript
   { tags: ["mongodb", "database", "schema"] }
   ```

6. **Embedded Document**:
   - Stores a document within another document.
   ```javascript
   {
     address: {
       street: "123 Main St",
       city: "New York",
       state: "NY"
     }
   }
   ```

7. **ObjectId**:
   - Stores a unique identifier for documents.
   ```javascript
   { _id: ObjectId("507f1f77bcf86cd799439011") }
   ```

8. **Binary Data**:
   - Stores binary data.
   ```javascript
   { file: BinData(0, "base64EncodedBinaryData") }
   ```

9. **Null**:
   - Represents a null value.
   ```javascript
   { middleName: null }
   ```

10. **Regular Expression**:
    - Stores a regular expression.
    ```javascript
    { pattern: /mongodb/i }
    ``` 