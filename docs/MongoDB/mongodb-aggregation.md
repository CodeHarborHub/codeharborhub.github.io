---
id: mongodb-aggregation
title: MongoDB - Aggregation
sidebar_label: Aggregation
sidebar_position: 19
tags: [mongodb, aggregation, database, operations]
description: Learn how to perform aggregation operations in MongoDB to process and compute data results.
---

# MongoDB - Aggregation

Aggregation operations in MongoDB process data records and return computed results. These operations group values from multiple documents together and can perform a variety of operations on the grouped data to return a single result.

## The aggregate() Method

For aggregation in MongoDB, you should use the `aggregate()` method.

### Syntax

The basic syntax of the `aggregate()` method is as follows:

```shell
>db.COLLECTION_NAME.aggregate(AGGREGATE_OPERATION)
```

### Example

In the collection, you have the following data:

```json
[
    {
       "_id": ObjectId("7df78ad8902c"),
       "title": "MongoDB Overview",
       "description": "MongoDB is a NoSQL database",
       "by_user": "tutorials point",
       "url": "http://www.tutorialspoint.com",
       "tags": ["mongodb", "database", "NoSQL"],
       "likes": 100
    },
    {
       "_id": ObjectId("7df78ad8902d"),
       "title": "NoSQL Overview",
       "description": "NoSQL database is very fast",
       "by_user": "tutorials point",
       "url": "http://www.tutorialspoint.com",
       "tags": ["mongodb", "database", "NoSQL"],
       "likes": 10
    },
    {
       "_id": ObjectId("7df78ad8902e"),
       "title": "Neo4j Overview",
       "description": "Neo4j is a NoSQL database",
       "by_user": "Neo4j",
       "url": "http://www.neo4j.com",
       "tags": ["neo4j", "database", "NoSQL"],
       "likes": 750
    }
]
```

Now, from the above collection, if you want to display a list stating how many tutorials are written by each user, then you will use the following `aggregate()` method:

```shell
> db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$sum : 1}}}])
{ "_id" : "tutorials point", "num_tutorial" : 2 }
{ "_id" : "Neo4j", "num_tutorial" : 1 }
```

In the above example, we have grouped documents by the field `by_user` and counted the number of tutorials written by each user.

## Aggregation Expressions

Here are some common aggregation expressions used with the `aggregate()` method:

| Expression | Description | Example |
|------------|-------------|---------|
| $sum       | Sums up the defined value from all documents in the collection. | `db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$sum : "$likes"}}}])` |
| $avg       | Calculates the average of all given values from all documents in the collection. | `db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$avg : "$likes"}}}])` |
| $min       | Gets the minimum of the corresponding values from all documents in the collection. | `db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$min : "$likes"}}}])` |
| $max       | Gets the maximum of the corresponding values from all documents in the collection. | `db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$max : "$likes"}}}])` |
| $push      | Inserts the value into an array in the resulting document. | `db.mycol.aggregate([{$group : {_id : "$by_user", url : {$push: "$url"}}}])` |
| $addToSet  | Inserts the value into an array in the resulting document but does not create duplicates. | `db.mycol.aggregate([{$group : {_id : "$by_user", url : {$addToSet : "$url"}}}])` |
| $first     | Gets the first document from the source documents according to the grouping. | `db.mycol.aggregate([{$group : {_id : "$by_user", first_url : {$first : "$url"}}}])` |
| $last      | Gets the last document from the source documents according to the grouping. | `db.mycol.aggregate([{$group : {_id : "$by_user", last_url : {$last : "$url"}}}])` |

## Pipeline Concept

MongoDB supports the pipeline concept in the aggregation framework, similar to UNIX command shell pipelines. The pipeline allows executing operations on input data