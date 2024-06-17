---
id: mongodb-indexing-limitations
title: MongoDB - Indexing Limitations
sidebar_label: Indexing Limitations
sidebar_position: 7
tags: [mongodb, indexing, limitations, performance]
description: Understand the limitations of indexing in MongoDB, including overhead, RAM usage, query constraints, and key limits.
---

# MongoDB - Indexing Limitations

In this chapter, we will learn about Indexing Limitations and its other components.

## Extra Overhead

Every index occupies some space as well as causes an overhead on each insert, update and delete. So if you rarely use your collection for read operations, it makes sense not to use indexes.

:::note 
- Indexes require additional space.
- Each insert, update, and delete operation requires additional processing due to index maintenance.
:::

```mermaid
graph TD;
    A[Insert Operation] --> B[Index Overhead];
    C[Update Operation] --> B;
    D[Delete Operation] --> B;
```

## RAM Usage

Since indexes are stored in RAM, you should make sure that the total size of the index does not exceed the RAM limit. If the total size increases the RAM size, it will start deleting some indexes, causing performance loss.

:::note
 Ensure that the total size of all indexes does not exceed the available RAM to avoid performance issues.
:::

```mermaid
graph TD;
    A[Indexes] -->|Stored in| B[RAM];
    B -->|Exceeds| C[Performance Loss];
    C --> D[Deletes Some Indexes];
```

## Query Limitations

Indexing can't be used in queries which use:
- Regular expressions or negation operators like `$nin`, `$not`, etc.
- Arithmetic operators like `$mod`, etc.
- `$where` clause

:::note
- Regular expressions and negation operators cannot use indexes.
- Arithmetic operators and `$where` clause cannot use indexes.
:::

| Query Type      | Index Usage  |
|-----------------|--------------|
| Regular Expressions | Not Supported |
| Negation Operators | Not Supported |
| Arithmetic Operators | Not Supported |
| `$where` Clause      | Not Supported |

## Index Key Limits

Starting from version 2.6, MongoDB will not create an index if the value of existing index field exceeds the index key limit.

> **Note:** Index creation is restricted if any field value exceeds the index key limit.

```mermaid
graph TD;
    A[Index Creation] -->|Value exceeds limit| B[Not Created];
```

## Inserting Documents Exceeding Index Key Limit

MongoDB will not insert any document into an indexed collection if the indexed field value of this document exceeds the index key limit. The same is the case with `mongorestore` and `mongoimport` utilities.

:::note
 Documents with indexed field values exceeding the key limit will not be inserted into an indexed collection.
:::

```mermaid
graph TD;
    A[Document Insertion] -->|Exceeds Key Limit| B[Insertion Failed];
    C[mongorestore] -->|Exceeds Key Limit| B;
    D[mongoimport] -->|Exceeds Key Limit| B;
```

## Maximum Ranges

- A collection cannot have more than 64 indexes.
- The length of the index name cannot be longer than 125 characters.
- A compound index can have a maximum of 31 fields indexed.

> **Table: Maximum Ranges**

| Limit Type               | Maximum Value       |
|--------------------------|---------------------|
| Number of Indexes        | 64                  |
| Length of Index Name     | 125 Characters      |
| Fields in Compound Index | 31 Fields           |

```mermaid
graph TD;
    A[Maximum Ranges] --> B[64 Indexes per Collection];
    A --> C[125 Characters Index Name];
    A --> D[31 Fields in Compound Index];
```
