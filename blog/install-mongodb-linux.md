---
title: Install MongoDB Linux
authors: [ajay-dhangar]
tags: [database, mongodb, mongosh, linux, debian, bullseye]
date: 2024-03-15 8:37:46
description: Installation MongoDB and mongosh
draft: false
---

MongoDB is a popular NoSQL database that is known for its flexibility and scalability. It is widely used in modern web applications and is a great choice for storing and managing large volumes of data. In this article, we will walk you through the process of installing MongoDB on a Linux system, specifically Debian Bullseye.

## Step 1: Import the MongoDB GPG Key

The first step is to import the MongoDB GPG key, which is used to verify the authenticity of the MongoDB packages. You can do this by running the following command in your terminal:

```bash
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
```

## Step 2: Create a MongoDB Source List File

Next, you need to create a source list file for MongoDB. You can do this by running the following command:

```bash
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/debian bullseye/mongodb-org/5.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
```

## Step 3: Update the Package Database

After creating the source list file, you need to update the package database to include the MongoDB repository. You can do this by running the following command:

```bash
sudo apt update
```

## Step 4: Install MongoDB

Now that the MongoDB repository has been added to your package database, you can install MongoDB by running the following command:

```bash
sudo apt install -y mongodb-org
```

## Step 5: Start the MongoDB Service

Once MongoDB is installed, you can start the MongoDB service by running the following command:

```bash
sudo systemctl start mongod
```

You can also enable the MongoDB service to start automatically at boot time by running the following command:

```bash
sudo systemctl enable mongod
```

## Step 6: Verify the MongoDB Installation

To verify that MongoDB has been installed successfully, you can run the following command to check the status of the MongoDB service:

```bash
sudo systemctl status mongod
```

You should see output indicating that the MongoDB service is active and running.

## Step 7: Install mongosh

Finally, you can install `mongosh`, the official MongoDB shell, by running the following command:

```bash
sudo apt install -y mongosh
```

## Conclusion

Congratulations! You have successfully installed MongoDB and `mongosh` on your Debian Bullseye system. You can now start using MongoDB to store and manage your data. If you have any questions or run into any issues, feel free to consult the official [MongoDB documentation](https://docs.mongodb.com/). Happy coding!