---
id: lesson-3
title: "Cloud Backup Solutions"
sidebar_label: Cloud Backup & Point-time Recover
sidebar_position: 3
description: "Cloud Backup Solutions & Point-in-time Recovery"
tags: [courses,advanced-level,Cloud Backup,Introduction]
---  
 

Cloud providers and third-party services offer managed backup solutions for MongoDB, providing scalable, automated backup and restore capabilities.

- **AWS**: Amazon DocumentDB, AWS Backup
- **Azure**: Azure Cosmos DB, Azure Backup
- **Google Cloud**: Google Cloud Firestore, Google Cloud Storage

These solutions often integrate with MongoDB clusters and offer features like automated backups, point-in-time recovery, and cross-region replication for disaster recovery.

#### Point-in-Time Recovery

Point-in-time recovery allows restoring a database to its state at a specific timestamp, enabling recovery to a precise moment before data loss or corruption occurred.

- **MongoDB Atlas**: MongoDB's managed service, Atlas, offers continuous backups with point-in-time recovery capabilities. It allows you to restore to any second within your selected retention period.

- **Manual Setup**: For self-managed deployments, you can configure backups using tools like `mongodump` with regular snapshots and logs to achieve point-in-time recovery.
