---
id: lesson-2
title: "Using `mongodump` and `mongorestore`"
sidebar_label:  mongodump and mongorestore
sidebar_position: 2
description: "Using `mongodump` and `mongorestore`"
tags: [courses,advanced-level,mongodump and mongorestore,Introduction]
---  
 

MongoDB provides `mongodump` and `mongorestore` tools for performing backups and restores from the command line.

- **`mongodump`**: Creates binary export of data from MongoDB instance.
  ```bash
  mongodump --host <hostname> --port <port> --out <backup_directory>
  ```

- **`mongorestore`**: Restores data from binary export created by `mongodump`.
  ```bash
  mongorestore --host <hostname> --port <port> <backup_directory>
  ```

**Example**:
```bash
# Backup
mongodump --host localhost --port 27017 --out /backup/mongodump-2024-07-18

# Restore
mongorestore --host localhost --port 27017 /backup/mongodump-2024-07-18
```
