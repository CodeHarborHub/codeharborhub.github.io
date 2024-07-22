---
id: lesson-1
title: "Sharding in MongoDB"
sidebar_label: Sharding 
sidebar_position: 1
description: "Sharding in MongoDB"
tags: [courses,beginner-level,Sharding,Introduction]
--- 
  

Sharding in MongoDB is a method for distributing data across multiple servers, or shards, to ensure horizontal scalability and high availability. Sharding is essential for managing large datasets and high-throughput applications by distributing the workload across several machines.

#### Introduction to Sharding

Sharding splits data into smaller, more manageable pieces, called shards, that can be distributed across multiple servers. Each shard contains a subset of the data. Sharding helps in:

- **Horizontal Scalability**: Adding more machines to handle larger datasets.
- **Load Balancing**: Distributing read and write operations across multiple servers.
- **High Availability**: Ensuring the system remains operational even if one or more shards fail.

#### Setting Up a Sharded Cluster

To set up a sharded cluster, you need three types of components:

1. **Shard Servers**: Store the actual data. Each shard is a replica set for high availability.
2. **Config Servers**: Store metadata and configuration settings for the cluster.
3. **Mongos Instances**: Act as query routers, directing operations to the appropriate shard.

**Steps to Set Up a Sharded Cluster**:

1. **Start Shard Servers**:
   ```bash
   mongod --shardsvr --replSet shard1 --dbpath /data/shard1 --port 27018 --bind_ip localhost
   mongod --shardsvr --replSet shard2 --dbpath /data/shard2 --port 27019 --bind_ip localhost
   ```

2. **Initialize Replica Sets for Shards**:
   ```javascript
   // Connect to the shard server
   mongo --port 27018

   // Initialize the replica set
   rs.initiate({
     _id: "shard1",
     members: [
       { _id: 0, host: "localhost:27018" }
     ]
   })

   // Repeat for shard2
   mongo --port 27019
   rs.initiate({
     _id: "shard2",
     members: [
       { _id: 0, host: "localhost:27019" }
     ]
   })
   ```

3. **Start Config Servers**:
   ```bash
   mongod --configsvr --replSet configReplSet --dbpath /data/config1 --port 27017 --bind_ip localhost
   ```

4. **Initialize the Config Server Replica Set**:
   ```javascript
   mongo --port 27017
   rs.initiate({
     _id: "configReplSet",
     configsvr: true,
     members: [
       { _id: 0, host: "localhost:27017" }
     ]
   })
   ```

5. **Start Mongos Instances**:
   ```bash
   mongos --configdb configReplSet/localhost:27017 --bind_ip localhost --port 27020
   ```

6. **Add Shards to the Cluster**:
   ```javascript
   mongo --port 27020
   sh.addShard("shard1/localhost:27018")
   sh.addShard("shard2/localhost:27019")
   ```
