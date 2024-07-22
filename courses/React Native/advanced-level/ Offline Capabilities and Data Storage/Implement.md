---
id: lesson-1
title: "Offline Capabilities and Data Storage in React Native"
sidebar_label: Implementing Offline Storage
sidebar_position: 1
description: "Learn Offline Capabilities and Data Storage in React Native"
tags: [courses,Advance-level,Introduction]
---  
  

Implementing offline capabilities and managing data storage are crucial for ensuring a seamless user experience in mobile applications. React Native provides several tools and libraries for handling offline storage, synchronizing data, and managing background tasks.
 

#### 1. Implementing Offline Storage

**1.1. AsyncStorage**

`AsyncStorage` is a simple, key-value storage system that is often used for persisting small amounts of data.

**Installation:**

For React Native CLI:
```bash
npm install @react-native-async-storage/async-storage
```

**Usage Example:**

```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

// Save data
const saveData = async () => {
  try {
    await AsyncStorage.setItem('@storage_Key', 'stored_value');
  } catch (e) {
    // saving error
  }
};

// Retrieve data
const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@storage_Key');
    if (value !== null) {
      console.log(value); // Display retrieved value
    }
  } catch (e) {
    // error reading value
  }
};
```

**1.2. SQLite**

SQLite is useful for more complex data storage needs and supports SQL queries.

**Installation:**

For React Native CLI:
```bash
npm install react-native-sqlite-storage
```

**Usage Example:**

```javascript
import SQLite from 'react-native-sqlite-storage';

// Open database
const db = SQLite.openDatabase(
  { name: 'my.db', location: 'default' },
  () => console.log('Database opened'),
  error => console.log('Error opening database: ', error)
);

// Create a table
db.transaction(tx => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age INTEGER)',
    [],
    () => console.log('Table created'),
    error => console.log('Error creating table: ', error)
  );
});

// Insert data
db.transaction(tx => {
  tx.executeSql(
    'INSERT INTO users (name, age) VALUES (?, ?)',
    ['John Doe', 30],
    () => console.log('Data inserted'),
    error => console.log('Error inserting data: ', error)
  );
});
```
 