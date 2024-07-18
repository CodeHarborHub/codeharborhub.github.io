---
id: lesson-3
title: "Failover and Recovery"
sidebar_label: Failover and Recovery
sidebar_position: 3
description: "Failover and Recovery"
tags: [courses,beginner-level,Failover and Recovery,Introduction]
--- 

In the event of a primary node failure, the replica set automatically initiates an election to select a new primary node. This process is called **failover**.

- **Failover**:
  - Secondary nodes hold an election to select a new primary.
  - The node that receives the majority of votes becomes the new primary.
  - Clients are redirected to the new primary for write operations.

**Example of Monitoring the Replica Set**:
```javascript
rs.status()
```

- **Recovery**:
  - Once the failed primary node is back online, it can rejoin the replica set as a secondary node.
  - It will synchronize its data with the current primary node to catch up with any changes.

**Adding an Arbiter**:
```javascript
rs.addArb("localhost:27020")
```
 