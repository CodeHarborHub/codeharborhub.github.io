---
id: lesson-1
title: "Replication in MongoDB"
sidebar_label: Replication
sidebar_position: 1
description: "Learn Replication in MongoDB"
tags: [courses,beginner-level,Replication,Introduction]
--- 



Replication in MongoDB is a process that synchronizes data across multiple servers to ensure high availability and redundancy. It allows a system to continue working even if one or more servers fail, making it a critical feature for production environments.

#### Introduction to Replication

Replication in MongoDB is implemented using a replica set. A replica set is a group of MongoDB instances that maintain the same data set, providing redundancy and increasing data availability.

- **Primary Node**: The primary node receives all write operations. It is the only member of the replica set that can accept write operations.
- **Secondary Nodes**: Secondary nodes replicate the data from the primary node. They can be used to distribute read operations and can be promoted to primary if the current primary fails.
- **Arbiter**: An arbiter is a member of a replica set that does not store data. Its sole purpose is to participate in elections for primary.

#### Setting Up Replica Sets

To set up a replica set, follow these steps:

1. **Start MongoDB Instances**: Start multiple MongoDB instances. Each instance should have a unique `dbpath` and `port`.

2. **Initialize Replica Set**: Connect to one of the MongoDB instances and initialize the replica set.

**Example**:

**Start MongoDB Instances**:
```bash
mongod --replSet rs0 --port 27017 --dbpath /data/db1 --bind_ip localhost
mongod --replSet rs0 --port 27018 --dbpath /data/db2 --bind_ip localhost
mongod --replSet rs0 --port 27019 --dbpath /data/db3 --bind_ip localhost
```

**Connect to MongoDB and Initialize Replica Set**:
```javascript
// Connect to one of the instances
mongo --port 27017

// Initialize the replica set
rs.initiate({
  _id: "rs0",
  members: [
    { _id: 0, host: "localhost:27017" },
    { _id: 1, host: "localhost:27018" },
    { _id: 2, host: "localhost:27019" }
  ]
})
```
