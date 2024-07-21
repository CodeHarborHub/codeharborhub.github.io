---
id: lesson-3
title: "Implementing Transactions in MongoDB"
sidebar_label: Implementation
sidebar_position: 3
description: "Implementing Transactions in MongoDB"
tags: [courses,advanced-level,Data Modeling,Introduction]
---  
 

To use transactions, MongoDB requires the use of replica sets or sharded clusters. Below are the steps to implement transactions in MongoDB using the Node.js driver.

1. **Start a Session**:
   ```javascript
   const session = client.startSession();
   ```

2. **Start a Transaction**:
   ```javascript
   session.startTransaction();
   ```

3. **Perform Operations**:
   ```javascript
   try {
     await collection1.insertOne({ _id: 1, value: "A" }, { session });
     await collection2.insertOne({ _id: 2, value: "B" }, { session });
     // Commit the transaction
     await session.commitTransaction();
   } catch (error) {
     // Abort the transaction
     await session.abortTransaction();
     throw error; // Rethrow error to be handled by calling code
   } finally {
     // End the session
     session.endSession();
   }
   ```

**Example**:

```javascript
async function runTransaction(client) {
  const session = client.startSession();

  try {
    session.startTransaction();

    const collection1 = client.db("myDatabase").collection("collection1");
    const collection2 = client.db("myDatabase").collection("collection2");

    await collection1.insertOne({ _id: 1, value: "A" }, { session });
    await collection2.insertOne({ _id: 2, value: "B" }, { session });

    await session.commitTransaction();
    console.log("Transaction committed.");
  } catch (error) {
    await session.abortTransaction();
    console.log("Transaction aborted due to an error: ", error);
  } finally {
    session.endSession();
  }
}
```

