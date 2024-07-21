---
id: lesson-1
title: "Introduction to Aggregation"
sidebar_label: Compound Indexes
sidebar_position: 1
description: "Introduction to Aggregation"
tags: [courses,beginner-level,Aggregation,Introduction]
--- 
 
Aggregation in MongoDB is a powerful framework for performing data transformation and analysis operations on the data stored in your collections. Aggregation operations process data records and return computed results, enabling you to perform complex data manipulation and computation on your data.

#### Aggregation Pipeline

The aggregation pipeline is a framework for data aggregation, modeled on the concept of data processing pipelines. Documents enter a multi-stage pipeline that transforms the documents into aggregated results. Each stage in the pipeline performs an operation on the input documents and passes the results to the next stage.

:::note
**Pipeline Stages**:
- **$match**: Filters documents.
- **$group**: Groups documents by a specified expression and outputs one document per each group.
- **$sort**: Sorts the documents.
- **$project**: Reshapes each document by adding, removing, or modifying fields.
:::

**Basic Syntax**:
```javascript
db.collection.aggregate([
  { <stage1>: { <stage-specific-pipeline-operators> } },
  { <stage2>: { <stage-specific-pipeline-operators> } },
  ...
])
```
