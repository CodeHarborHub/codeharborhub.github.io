---
id: overview-dbms
title: DBMS Overview
sidebar_label: Overview
sidebar_position: 2
tags: [dbms, overview]
description: In this tutorial, you will learn about Database Management Systems (DBMS), their architecture, data models, applications, and importance in modern computing.
---

# DBMS - Overview

## Database Overview

A database is a collection of related data, consisting of facts and figures that can be processed to produce information. Data often represents recordable facts and aids in producing meaningful information. For instance, data about student marks enables conclusions about top performers and average scores. A database management system (DBMS) stores data efficiently, facilitating retrieval, manipulation, and information generation.

## Characteristics of DBMS

Traditionally, data was organized in file formats. DBMS emerged to overcome deficiencies in traditional data management. Modern DBMS possess several key characteristics:

- **Real-world entity**: DBMS uses real-world entities with their attributes and behavior. For instance, in a school database, students are entities with attributes like age.
- **Relation-based tables**: Entities and relations among them form tables, simplifying database architecture understanding.

- **Isolation of data and application**: DBMS separates data from the application, utilizing metadata for its processes.
- **Less redundancy**: DBMS follows normalization rules, reducing data redundancy and ensuring data integrity.
- **Consistency**: DBMS maintains consistency across relations, detecting and preventing inconsistencies.
- **Query Language**: Equipped with query languages, DBMS efficiently retrieves and manipulates data with various filtering options.
- **ACID Properties**: DBMS follows Atomicity, Consistency, Isolation, and Durability (ACID) principles, ensuring transactional integrity.
- **Multiuser and Concurrent Access**: Supports multi-user environments with concurrent data access, maintaining data integrity.
- **Multiple Views**: Offers different views for users based on their roles and requirements.
- **Security**: Implements security features to restrict data access based on user roles and ensure data confidentiality and integrity.

## Users of DBMS

A typical DBMS has users with different rights and permissions:

- **Administrators**: Maintain and administer the DBMS, creating user access profiles and managing system resources.
- **Designers**: Work on designing the database structure, including entities, relations, constraints, and views.
- **End Users**: Utilize the DBMS for various purposes, from viewing data to conducting sophisticated analyses.
