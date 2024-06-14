---
id: data-independence-dbms
title: DBMS Data Independence
sidebar_label: Data Independence
sidebar_position: 6
tags: [dbms, data independence]
description: Understand data independence in DBMS, including logical and physical data independence, and their importance in maintaining flexibility and scalability.
---

# DBMS - Data Independence

If a database system is not multi-layered, then it becomes difficult to make any changes in the database system. Database systems are designed in multi-layers as we learned earlier.

## Data Independence

A database system normally contains a lot of data in addition to users’ data. For example, it stores data about data, known as metadata, to locate and retrieve data easily. It is rather difficult to modify or update a set of metadata once it is stored in the database. But as a DBMS expands, it needs to change over time to satisfy the requirements of the users. If the entire data is dependent, it would become a tedious and highly complex job.

![data_independence](https://www.tutorialspoint.com/dbms/images/data_independence.png)

### Data Independence

Metadata itself follows a layered architecture, so that when we change data at one layer, it does not affect the data at another level. This data is independent but mapped to each other.

### Logical Data Independence

Logical data is data about the database, that is, it stores information about how data is managed inside. For example, a table (relation) stored in the database and all its constraints, applied to that relation.

Logical data independence is a kind of mechanism, which liberalizes itself from actual data stored on the disk. If we make some changes to the table format, it should not change the data residing on the disk.

### Physical Data Independence

All the schemas are logical, and the actual data is stored in bit format on the disk. Physical data independence is the power to change the physical data without impacting the schema or logical data.

For example, if we want to change or upgrade the storage system itself − suppose we want to replace hard disks with SSDs − it should not have any impact on the logical data or schemas.