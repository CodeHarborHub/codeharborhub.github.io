---
id: mongodb-query-document
title: MongoDB - Query Document
sidebar_label: Query Document
sidebar_position: 12
tags: [mongodb, query, document, commands]
description: Learn how to query documents from MongoDB collections using various methods.
---

# MongoDB - Query Document

In this chapter, we will learn how to query documents from a MongoDB collection.

## The `find()` Method

To query data from a MongoDB collection, you need to use MongoDB's `find()` method.

### Syntax
The basic syntax of the `find()` method is as follows:
```javascript
db.COLLECTION_NAME.find()
```
The `find()` method will display all the documents in a non-structured way.

### Example
Assume we have created a collection named `mycol` as follows:
```javascript
> use sampleDB
switched to db sampleDB
> db.createCollection("mycol")
{ "ok" : 1 }
>
```
And inserted 3 documents in it using the `insert()` method as shown below:
```javascript
> db.mycol.insert([
    {
        title: "MongoDB Overview",
        description: "MongoDB is no SQL database",
        by: "tutorials point",
        url: "http://www.tutorialspoint.com",
        tags: ["mongodb", "database", "NoSQL"],
        likes: 100
    },
    {
        title: "NoSQL Database",
        description: "NoSQL database doesn't have tables",
        by: "tutorials point",
        url: "http://www.tutorialspoint.com",
        tags: ["mongodb", "database", "NoSQL"],
        likes: 20,
        comments: [
            {
                user:"user1",
                message: "My first comment",
                dateCreated: new Date(2013,11,10,2,35),
                like: 0
            }
        ]
    }
])
```

Following method retrieves all the documents in the collection:
```javascript
> db.mycol.find()
{ "_id" : ObjectId("5dd4e2cc0821d3b44607534c"), "title" : "MongoDB Overview", "description" : "MongoDB is no SQL database", "by" : "tutorials point", "url" : "http://www.tutorialspoint.com", "tags" : [ "mongodb", "database", "NoSQL" ], "likes" : 100 }
{ "_id" : ObjectId("5dd4e2cc0821d3b44607534d"), "title" : "NoSQL Database", "description" : "NoSQL database doesn't have tables", "by" : "tutorials point", "url" : "http://www.tutorialspoint.com", "tags" : [ "mongodb", "database", "NoSQL" ], "likes" : 20, "comments" : [ { "user" : "user1", "message" : "My first comment", "dateCreated" : ISODate("2013-12-09T21:05:00Z"), "like" : 0 } ] }
```

## The `pretty()` Method
To display the results in a formatted way, you can use the `pretty()` method.

### Syntax
```javascript
db.COLLECTION_NAME.find().pretty()
```

### Example
Following example retrieves all the documents from the collection named `mycol` and arranges them in an easy-to-read format.
```javascript
> db.mycol.find().pretty()
{
    "_id" : ObjectId("5dd4e2cc0821d3b44607534c"),
    "title" : "MongoDB Overview",
    "description" : "MongoDB is no SQL database",
    "by" : "tutorials point",
    "url" : "http://www.tutorialspoint.com",
    "tags" : [
        "mongodb",
        "database",
        "NoSQL"
    ],
    "likes" : 100
}
{
    "_id" : ObjectId("5dd4e2cc0821d3b44607534d"),
    "title" : "NoSQL Database",
    "description" : "NoSQL database doesn't have tables",
    "by" : "tutorials point",
    "url" : "http://www.tutorialspoint.com",
    "tags" : [
        "mongodb",
        "database",
        "NoSQL"
    ],
    "likes" : 20,
    "comments" : [
        {
            "user" : "user1",
            "message" : "My first comment",
            "dateCreated" : ISODate("2013-12-09T21:05:00Z"),
            "like" : 0
        }
    ]
}
```

## The `findOne()` Method
Apart from the `find()` method, there is a `findOne()` method, that returns only one document.

### Syntax
```javascript
db.COLLECTIONNAME.findOne()
```

### Example
Following example retrieves the document with title "MongoDB Overview".
```javascript
> db.mycol.findOne({title: "MongoDB Overview"})
{
    "_id" : ObjectId("5dd6542170fb13eec3963bf0"),
    "title" : "MongoDB Overview",
    "description" : "MongoDB is no SQL database",
    "by" : "tutorials point",
    "url" : "http://www.tutorialspoint.com",
    "tags" : [
        "mongodb",
        "database",
        "NoSQL"
    ],
    "likes" : 100
}
```

## RDBMS Where Clause Equivalents in MongoDB
To query the document on the basis of some condition, you can use the following operations.

### Table: MongoDB Query Operators and RDBMS Equivalents
| Operation               | Syntax                       | Example                                                   | RDBMS Equivalent             |
|-------------------------|------------------------------|-----------------------------------------------------------|------------------------------|
| **Equality**            | `{<key>:{$eq:<value>}}`      | `db.mycol.find({"by":"tutorials point"}).pretty()`         | `where by = 'tutorials point'` |
| **Less Than**           | `{<key>:{$lt:<value>}}`      | `db.mycol.find({"likes":{$lt:50}}).pretty()`               | `where likes < 50`           |
| **Less Than Equals**    | `{<key>:{$lte:<value>}}`     | `db.mycol.find({"likes":{$lte:50}}).pretty()`              | `where likes <= 50`          |
| **Greater Than**        | `{<key>:{$gt:<value>}}`      | `db.mycol.find({"likes":{$gt:50}}).pretty()`               | `where likes > 50`           |
| **Greater Than Equals** | `{<key>:{$gte:<value>}}`     | `db.mycol.find({"likes":{$gte:50}}).pretty()`              | `where likes >= 50`          |
| **Not Equals**          | `{<key>:{$ne:<value>}}`      | `db.mycol.find({"likes":{$ne:50}}).pretty()`               | `where likes != 50`          |
| **Values in an array**  | `{<key>:{$in:[<value>]}}`    | `db.mycol.find({"name":{$in:["Raj", "Ram", "Raghu"]}}).pretty()` | `Where name in ["Raj", "Ram", "Raghu"]` |
| **Values not in an array** | `{<key>:{$nin:<value>}}`  | `db.mycol.find({"name":{$nin:["Ramu", "Raghav"]}}).pretty()` | `Where name not in ["Ramu", "Raghav"]` |

## AND in MongoDB

### Syntax
To query documents based on the AND condition, you need to use the `$and` keyword. Following is the basic syntax of AND:
```javascript
db.mycol.find({ $and: [ {<key1>:<value1>}, { <key2>:<value2>} ] })
```

### Example
The following example will show all the tutorials written by 'tutorials point' and whose title is 'MongoDB Overview':
```javascript
> db.mycol.find({$and:[{"by":"tutorials point"},{"title": "MongoDB Overview"}]}).pretty()
{
    "_id" : ObjectId("5dd4e2cc0821d3b44607534c"),
    "title" : "MongoDB Overview",
    "description" : "MongoDB is no SQL database",
    "by" : "tutorials point",
    "url" : "http://www.tutorialspoint.com",
    "tags" : [
        "mongodb",
        "database",
        "NoSQL"
    ],
    "likes" : 100
}
```

## OR in MongoDB

### Syntax
To query documents based on the OR condition, you need to use the `$or` keyword. Following is the basic syntax of OR:
```javascript
db.mycol.find(
   {
      $or: [
         {key1: value1}, {key2:value2}
      ]
   }
).pretty()
```

### Example
The following example will show all the tutorials written by 'tutorials point' or whose title is 'MongoDB Overview':
```javascript
> db.mycol.find({$or:[{"by":"tutorials point"},{"title": "MongoDB Overview"}]}).pretty()
{
   "_id": ObjectId(7df78ad8902c),
   "title": "MongoDB Overview", 
   "description": "MongoDB is no sql database",
   "by": "tutorials point",
   "url": "http://www.tutorialsp

oint.com",
   "tags": ["mongodb", "database", "NoSQL"],
   "likes": 100
}
{
   "_id": ObjectId(7df78ad8902c),
   "title": "MongoDB Overview", 
   "description": "MongoDB is no sql database",
   "by": "XYZ",
   "url": "http://www.tutorialspoint.com",
   "tags": ["mongodb", "database", "NoSQL"],
   "likes": 20
}
```

## Limiting Records
To limit the records in MongoDB, you need to use the `limit()` method.

### Syntax
```javascript
db.COLLECTION_NAME.find().limit(NUMBER)
```

### Example
The following example will retrieve only 2 documents:
```javascript
> db.mycol.find().limit(2)
{ "_id" : ObjectId("5dd4e2cc0821d3b44607534c"), "title" : "MongoDB Overview", "description" : "MongoDB is no SQL database", "by" : "tutorials point", "url" : "http://www.tutorialspoint.com", "tags" : [ "mongodb", "database", "NoSQL" ], "likes" : 100 }
{ "_id" : ObjectId("5dd4e2cc0821d3b44607534d"), "title" : "NoSQL Database", "description" : "NoSQL database doesn't have tables", "by" : "tutorials point", "url" : "http://www.tutorialspoint.com", "tags" : [ "mongodb", "database", "NoSQL" ], "likes" : 20, "comments" : [ { "user" : "user1", "message" : "My first comment", "dateCreated" : ISODate("2013-12-09T21:05:00Z"), "like" : 0 } ] }
```

## Sorting the Results
To sort the documents in MongoDB, you need to use the `sort()` method.

### Syntax
```javascript
db.COLLECTION_NAME.find().sort({KEY:1})
```
- 1 is for ascending order
- -1 is for descending order

### Example
Following example will sort the documents by title in ascending order:
```javascript
> db.mycol.find().sort({title:1}).pretty()
{
    "_id" : ObjectId("5dd4e2cc0821d3b44607534d"),
    "title" : "NoSQL Database",
    "description" : "NoSQL database doesn't have tables",
    "by" : "tutorials point",
    "url" : "http://www.tutorialspoint.com",
    "tags" : [
        "mongodb",
        "database",
        "NoSQL"
    ],
    "likes" : 20,
    "comments" : [
        {
            "user" : "user1",
            "message" : "My first comment",
            "dateCreated" : ISODate("2013-12-09T21:05:00Z"),
            "like" : 0
        }
    ]
}
{
    "_id" : ObjectId("5dd4e2cc0821d3b44607534c"),
    "title" : "MongoDB Overview",
    "description" : "MongoDB is no SQL database",
    "by" : "tutorials point",
    "url" : "http://www.tutorialspoint.com",
    "tags" : [
        "mongodb",
        "database",
        "NoSQL"
    ],
    "likes" : 100
}
```

This chapter covers the basic querying methods in MongoDB, including how to use the `find()`, `pretty()`, `findOne()`, `limit()`, and `sort()` methods, and how to implement conditional queries with the `$and` and `$or` operators.