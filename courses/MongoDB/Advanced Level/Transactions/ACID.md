---
id: lesson-2
title: "ACID Properties"
sidebar_label: ACID
sidebar_position: 2
description: "ACID Properties"
tags: [courses,advanced-level,Data Modeling,Introduction]
---  
  

Transactions in MongoDB adhere to the ACID properties, which are:

:::note
- **Atomicity**: Ensures that all operations within a transaction are completed successfully or none are applied. If any operation fails, the entire transaction is rolled back.
- **Consistency**: Ensures that a transaction can only bring the database from one valid state to another, maintaining database invariants.
- **Isolation**: Ensures that the operations within a transaction are isolated from the operations in other transactions. MongoDB uses snapshot isolation, providing a consistent view of the data.
- **Durability**: Ensures that once a transaction is committed, the data changes are permanent, even in the event of a system crash.
:::