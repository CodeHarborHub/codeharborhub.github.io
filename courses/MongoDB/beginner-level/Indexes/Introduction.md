---
id: lesson-1
title: "Indexes in MongoDB"
sidebar_label: Introduction to Indexes
sidebar_position: 1
description: "Introduction to Indexes"
tags: [courses,beginner-level,Compound Indexes,Introduction]
--- 
 

Indexes in MongoDB are special data structures that store a small portion of the data set in an easy-to-traverse form. They improve the efficiency of query operations by providing a way to quickly locate data without having to scan every document in a collection.

:::note
**Benefits of Indexes**:
- **Query Performance**: Significantly speed up query performance by reducing the amount of data that MongoDB needs to scan.
- **Sorting**: Enhance the performance of sort operations.
- **Uniqueness**: Enforce uniqueness constraints on indexed fields.

However, indexes also have some drawbacks:
- **Storage Overhead**: Consume additional disk space.
- **Write Performance**: May impact write performance due to the need to update indexes on write operations.
:::