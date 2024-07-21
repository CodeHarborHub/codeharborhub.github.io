---
id: lesson-2
title: "Role-Based Access Control (RBAC)"
sidebar_label: RBAC
sidebar_position: 2
description: "Role-Based Access Control (RBAC)"
tags: [courses,beginner-level,Security,RBAC,Introduction]
--- 
 

RBAC in MongoDB allows you to create roles with specific privileges and assign these roles to users. This provides fine-grained control over what users can and cannot do within the database.

**Built-in Roles**:

- **Database User Roles**:
  - `read`: Allows read-only operations on the database.
  - `readWrite`: Allows read and write operations on the database.

- **Database Administration Roles**:
  - `dbAdmin`: Provides administrative privileges for database management.
  - `dbOwner`: Provides full administrative privileges on the database.

- **Cluster Administration Roles**:
  - `clusterAdmin`: Provides administrative privileges for managing the cluster.
  - `clusterManager`: Allows managing and monitoring the cluster.

- **Backup and Restoration Roles**:
  - `backup`: Allows backing up the database.
  - `restore`: Allows restoring the database.

**Creating Custom Roles**:

You can create custom roles to suit your specific requirements.

**Example of Creating a Custom Role**:
```javascript
use admin
db.createRole({
  role: "customRole",
  privileges: [
    { resource: { db: "myDatabase", collection: "" }, actions: ["find", "update"] }
  ],
  roles: []
})
```

**Assigning Roles to Users**:
```javascript
use myDatabase
db.createUser({
  user: "customUser",
  pwd: "customPassword",
  roles: ["customRole"]
})
```

**Example of Creating and Assigning a Role**:
```javascript
// Create a custom role with specific privileges
use admin
db.createRole({
  role: "dataAnalyst",
  privileges: [
    { resource: { db: "myDatabase", collection: "myCollection" }, actions: ["find", "aggregate"] }
  ],
  roles: []
})

// Create a user with the custom role
use myDatabase
db.createUser({
  user: "analystUser",
  pwd: "analystPassword",
  roles: ["dataAnalyst"]
})
```
 