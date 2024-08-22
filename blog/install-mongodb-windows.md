---
title: Install MongoDB Windows
authors: [ajay-dhangar]
tags: [database, mongodb, mongosh, windows]
date: 2024-03-15 10:37:46
description: Installation MongoDB and mongosh
draft: false
---

MongoDB is a popular NoSQL database that is known for its flexibility and scalability. It is widely used in modern web applications and is a great choice for storing and managing large volumes of data. In this article, we will walk you through the process of installing MongoDB on a Windows system.

<!-- truncate -->

## Step 1: Download the MongoDB Installer

The first step is to download the MongoDB installer from the official MongoDB website. You can find the installer at the following URL: [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)

## Step 2: Run the MongoDB Installer

Once the installer has been downloaded, you can run it to start the installation process. Follow the on-screen instructions to complete the installation. You can choose the "Complete" setup type to install all the MongoDB tools, including the MongoDB shell (mongosh).

## Step 3: Add MongoDB to the System Path

After the installation is complete, you need to add the MongoDB binaries to your system's PATH environment variable. This will allow you to run MongoDB and mongosh commands from any directory in your terminal.

To add MongoDB to the system PATH, follow these steps:

1. Open the Control Panel and navigate to "System and Security" > "System" > "Advanced system settings".
2. In the System Properties window, click on the "Environment Variables" button.
3. In the Environment Variables window, select the "Path" variable under "System variables" and click the "Edit" button.
4. Click the "New" button and add the path to the "bin" directory of your MongoDB installation (e.g., `C:\Program Files\MongoDB\Server\5.0\bin`).
5. Click "OK" to save the changes and close the Environment Variables window.
6. Click "OK" again to close the System Properties window.
7. Restart your terminal to apply the changes.
8. You can now run MongoDB and mongosh commands from any directory in your terminal.
9. To verify that MongoDB and mongosh are installed correctly, you can run the following commands in your terminal:

```bash
mongod --version
mongosh --version
```

## Step 4: Start the MongoDB Service

To start the MongoDB service, you can run the following command in your terminal:

```bash
mongod
```

This will start the MongoDB server on your local machine. You can now connect to the MongoDB server using the mongosh shell.

## Step 5: Connect to the MongoDB Server

To connect to the MongoDB server, you can run the following command in your terminal:

```bash
mongosh
```

This will open the mongosh shell, and you can start interacting with the MongoDB server using JavaScript-like syntax.

Congratulations! You have successfully installed MongoDB and mongosh on your Windows system. You are now ready to start building powerful applications with MongoDB as your database. Happy coding!