---
id: lesson-2
title: "Shard Keys"
sidebar_label: Shard Keys
sidebar_position: 2
description: "Shard Keys"
tags: [courses,beginner-level,Shard Keys,Introduction]
--- 


A shard key is a field that determines how data is distributed across shards. Choosing an appropriate shard key is crucial for the efficient performance of a sharded cluster.

**Considerations for Choosing a Shard Key**:
- **Cardinality**: The shard key should have a large number of unique values to ensure even distribution.
- **Write Distribution**: The shard key should distribute write operations evenly across shards.
- **Query Patterns**: The shard key should align with common query patterns to optimize read performance.

**Example of Choosing a Shard Key**:
```javascript
sh.enableSharding("myDatabase")
sh.shardCollection("myDatabase.myCollection", { userId: 1 })
```