---
id: mongodb-environment
title: MongoDB - Environment
sidebar_label: Environment
sidebar_position: 4
tags: [mongodb, environment, setup, installation]
description: Learn how to set up and configure MongoDB on Windows and Ubuntu environments, including installation steps and commands.
---

# MongoDB - Environment

Let us now see how to install MongoDB on Windows and Ubuntu.

## Install MongoDB On Windows

To install MongoDB on Windows, first download the latest release of MongoDB from [MongoDB Download Center](https://www.mongodb.com/download-center).

### MongoDB Cloud
Enter the required details, select the Server tab, in it you can choose the version of MongoDB, operating system, and packaging as:

### MongoDB Community
Now install the downloaded file. By default, it will be installed in the folder `C:\Program Files\`.

MongoDB requires a data folder to store its files. The default location for the MongoDB data directory is `c:\data\db`. So you need to create this folder using the Command Prompt. Execute the following command sequence:

```sh
C:\>md data
C:\>md data\db
```

Then you need to set the `dbpath` to the created directory in `mongod.exe`. For the same, issue the following commands:

In the command prompt, navigate to the bin directory current in the MongoDB installation folder. Suppose my installation folder is `C:\Program Files\MongoDB`.

```sh
C:\Users\XYZ>d:
C:\>cd "C:\Program Files\MongoDB\Server\4.2\bin"
C:\Program Files\MongoDB\Server\4.2\bin>mongod.exe --dbpath "C:\data"
```

This will show "waiting for connections" message on the console output, indicating that the `mongod.exe` process is running successfully.

Now, to run MongoDB, open another command prompt and issue the following command:

```sh
C:\Program Files\MongoDB\Server\4.2\bin>mongo.exe
```

```plaintext
MongoDB shell version v4.2.1
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("4260beda-f662-4cbe-9bc7-5c1f2242663c") }
MongoDB server version: 4.2.1
>
```

This shows that MongoDB is installed and running successfully. Next time when you run MongoDB, you need to issue only these commands:

```sh
C:\Program Files\MongoDB\Server\4.2\bin>mongod.exe --dbpath "C:\data"
C:\Program Files\MongoDB\Server\4.2\bin>mongo.exe
```

## Install MongoDB on Ubuntu

Run the following command to import the MongoDB public GPG key:

```sh
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
```

Create a `/etc/apt/sources.list.d/mongodb.list` file using the following command:

```sh
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
```

Now issue the following command to update the repository:

```sh
sudo apt-get update
```

Next, install MongoDB by using the following command:

```sh
sudo apt-get install -y mongodb-org
```

Now MongoDB is installed successfully.

### Start MongoDB

```sh
sudo service mongod start
```

### Stop MongoDB

```sh
sudo service mongod stop
```

### Restart MongoDB

```sh
sudo service mongod restart
```

To use MongoDB, run the following command:

```sh
mongo
```

This will connect you to the running MongoDB instance.

## MongoDB Help

To get a list of commands, type `db.help()` in MongoDB client. This will give you a list of commands as shown in the following screenshot.

## MongoDB Statistics

To get stats about the MongoDB server, type the command `db.stats()` in MongoDB client. This will show the database name, number of collections, and documents in the database.

### MongoDB Installation Process Diagram

```mermaid
graph TD
    A[Download MongoDB] --> B[Install MongoDB]
    B --> C[Create Data Directory]
    C --> D[Run mongod]
    D --> E[Run mongo]
    E --> F[MongoDB Shell]
```

### MongoDB Commands Summary

| Command | Description |
|---------|-------------|
| `md data` | Create data directory |
| `mongod.exe --dbpath "C:\data"` | Start MongoDB server |
| `mongo.exe` | Connect to MongoDB server |
| `sudo apt-get update` | Update package list |
| `sudo apt-get install -y mongodb-org` | Install MongoDB on Ubuntu |
| `sudo service mongod start` | Start MongoDB service |
| `sudo service mongod stop` | Stop MongoDB service |
| `sudo service mongod restart` | Restart MongoDB service |
| `db.help()` | Get a list of commands in MongoDB client |
| `db.stats()` | Get statistics about MongoDB server |

MongoDB provides a flexible and scalable environment for database management. The above steps guide you through installing and setting up MongoDB on Windows and Ubuntu environments.
