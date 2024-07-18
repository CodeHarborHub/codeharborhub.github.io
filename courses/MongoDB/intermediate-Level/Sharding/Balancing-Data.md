---
id: lesson-3
title: "Balancing Data Across Shards"
sidebar_label: Balancing Data
sidebar_position: 3
description: "Balancing Data Across Shards"
tags: [courses,beginner-level,Failover and Recovery,Introduction]
--- 
 

MongoDB uses a background process called the balancer to distribute data evenly across shards. The balancer ensures that no single shard becomes overloaded by moving chunks of data between shards.

**Balancing Process**:
- **Chunks**: MongoDB divides data into chunks based on the shard key.
- **Balancer**: The balancer monitors the distribution of chunks and moves them as needed to ensure an even distribution.

**Enabling and Monitoring the Balancer**:
```javascript
sh.startBalancer()
sh.status() // Check the status of the balancer
```

**Manual Chunk Migration**:
If needed, you can manually move chunks between shards using the `moveChunk` command:
```javascript
sh.moveChunk("myDatabase.myCollection", { userId: "someUserId" }, "shard2")
```
 