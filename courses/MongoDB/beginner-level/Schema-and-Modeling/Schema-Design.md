---
id: lesson-2
title: "Schema Design Patterns"
sidebar_label: Design Patterns
sidebar_position: 2
description: "Schema Design Patterns"
tags: [courses,beginner-level,Design Patterns,Introduction]
--- 
 

1. **Single Collection Pattern**:
   - Store all related data in a single collection.
   - Useful for applications where data is read more often than written.
   - Reduces the need for joins but can lead to larger documents and potential performance issues.

2. **Subset Pattern**:
   - Store frequently accessed fields together and less frequently accessed fields in a separate collection.
   - Optimizes for read performance by reducing document size.

3. **Bucket Pattern**:
   - Group related documents into buckets based on a certain criteria (e.g., time intervals).
   - Useful for time-series data and large data sets that grow over time.

4. **Tree Pattern**:
   - Represent hierarchical data using an embedded array or a parent-reference.
   - Useful for representing organizational structures, category trees, etc.

5. **Pre-allocated Pattern**:
   - Pre-allocate documents with a fixed size to avoid frequent reallocation.
   - Useful for high-write throughput applications where documents grow over time.
