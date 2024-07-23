---
id: lesson-3
title: "Installing MongoDB"
sidebar_label: Setup
sidebar_position: 3
description: "Installing MongoDB"
tags: [courses,beginner-level,Installation,MongoDB]
--- 
  

1. **Download MongoDB**:
   - Visit the [MongoDB Download Center](https://www.mongodb.com/try/download/community) and choose the version suitable for your operating system.

2. **Install MongoDB**:
   - **Windows**:
     - Run the downloaded `.msi` installer and follow the installation instructions.
     - Add the MongoDB bin directory to your system's PATH.

     ```bash
     setx PATH "%PATH%;C:\Program Files\MongoDB\Server\4.4\bin"
     ```

   - **macOS**:
     - Use Homebrew to install MongoDB.

     ```bash
     brew tap mongodb/brew
     brew install mongodb-community
     ```

   - **Linux** (Ubuntu example):
     - Import the public key used by the package management system.

     ```bash
     wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
     ```

     - Create a list file for MongoDB.

     ```bash
     echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
     ```

     - Reload the local package database.

     ```bash
     sudo apt-get update
     ```

     - Install the MongoDB packages.

     ```bash
     sudo apt-get install -y mongodb-org
     ```

3. **Start MongoDB**:
   - **Windows**:
     - Open Command Prompt and start the MongoDB server.

     ```bash
     mongod
     ```

   - **macOS**:
     - Start MongoDB using Homebrew services.

     ```bash
     brew services start mongodb/brew/mongodb-community
     ```

   - **Linux**:
     - Start the MongoDB service.

     ```bash
     sudo systemctl start mongod
     ```

4. **Verify Installation**:
   - Open another terminal window and run the MongoDB shell.

   ```bash
   mongo
   ```

   - You should see the MongoDB shell prompt.

   ```plaintext
   MongoDB shell version v4.4.0
   connecting to: mongodb://127.0.0.1:27017/test
   ```
