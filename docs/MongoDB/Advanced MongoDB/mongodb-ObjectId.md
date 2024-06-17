---
id: mongodb-ObjectId
title: MongoDB - ObjectId
sidebar_label: ObjectId
sidebar_position: 8
tags: [mongodb, ObjectId, document identifier]
description: Understand the structure and usage of ObjectId in MongoDB, including creation, timestamp extraction, and conversion to string format.
---

We have been using MongoDB ObjectId in all the previous chapters. In this chapter, let's delve into the structure and usage of ObjectId.

## ObjectId Structure

An ObjectId is a 12-byte BSON type structured as follows:

- The first 4 bytes represent the seconds since the Unix epoch.
- The next 3 bytes are the machine identifier.
- The following 2 bytes consist of the process id.
- The last 3 bytes are a random counter value.

MongoDB utilizes ObjectIds as the default value of the `_id` field of each document, generated during document creation. This intricate combination ensures that all `_id` fields are unique.

## Creating New ObjectId

To generate a new ObjectId, use the following code snippet:

```javascript
newObjectId = ObjectId()
```

The above statement will return a uniquely generated id like:

```
ObjectId("5349b4ddd2781d08c09890f3")
```

Alternatively, you can provide a 12-byte id explicitly:

```javascript
myObjectId = ObjectId("5349b4ddd2781d08c09890f4")
```

## Creating Timestamp of a Document

As the `_id` ObjectId inherently stores the 4-byte timestamp, you typically don't need to store the creation time of any document separately. You can retrieve the creation time of a document using the `getTimestamp` method:

```javascript
ObjectId("5349b4ddd2781d08c09890f4").getTimestamp()
```

This will return the creation time of the document in ISO date format:

```
ISODate("2014-04-12T21:49:17Z")
```

## Converting ObjectId to String

In certain scenarios, you may require the ObjectId value in a string format. To convert the ObjectId to a string, use the following code:

```javascript
newObjectId.str
```

The above code will provide the string format of the ObjectId, such as:

```
5349b4ddd2781d08c09890f3
```
