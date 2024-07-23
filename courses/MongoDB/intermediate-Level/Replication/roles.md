---
id: lesson-2
title: "Role of Primary and Secondary Nodes"
sidebar_label: Primary and Secondary Nodes
sidebar_position: 2
description: "Role of Primary and Secondary Nodes"
tags: [courses,beginner-level,Primary Nodes,Seondary Nodes,Introduction]
--- 
 
:::note
- **Primary Node**:
  - Handles all write operations.
  - Applies write operations to its data set and records the operations in its oplog (operations log).
  - Replicates the oplog to secondary nodes.

- **Secondary Nodes**:
  - Replicate the data from the primary node by applying the operations from the primary's oplog.
  - Can serve read operations if configured to do so (`readPreference`).
:::