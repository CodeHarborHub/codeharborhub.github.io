---
id: lesson-1
title: "Security in MongoDB"
sidebar_label: Security
sidebar_position: 1
description: "Security in MongoDB"
tags: [courses,beginner-level,Security,Introduction]
--- 


Security in MongoDB is crucial to protect data from unauthorized access and ensure that only authenticated and authorized users can interact with the database. MongoDB provides robust mechanisms for authentication and authorization, including Role-Based Access Control (RBAC).

#### Authentication and Authorization

**Authentication**: Verifies the identity of a user or process. MongoDB supports several authentication mechanisms:

- **SCRAM (Salted Challenge Response Authentication Mechanism)**: The default and recommended method.
- **LDAP (Lightweight Directory Access Protocol)**: For integrating with enterprise directory services.
- **x.509 Certificates**: For client and member authentication in replica sets and sharded clusters.
- **Kerberos**: For single sign-on capabilities.

**Authorization**: Determines what an authenticated user or process can do. MongoDB uses roles and privileges to manage authorization.

**Enabling Authentication**:

1. **Start MongoDB with Authentication Enabled**:
   ```bash
   mongod --auth --dbpath /data/db --bind_ip localhost
   ```

2. **Create an Admin User**:
   ```javascript
   use admin
   db.createUser({
     user: "admin",
     pwd: "password",
     roles: ["root"]
   })
   ```

3. **Authenticate as the Admin User**:
   ```javascript
   db.auth("admin", "password")
   ```

4. **Create Additional Users with Specific Roles**:
   ```javascript
   use myDatabase
   db.createUser({
     user: "appUser",
     pwd: "appPassword",
     roles: [
       { role: "readWrite", db: "myDatabase" }
     ]
   })
   ```
