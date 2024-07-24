---
id: lesson-2
title: "NoSQL Database(MongoDB)"
sidebar_label: NoSQL Database
sidebar_position: 2
description: "Learn NoSQL Database in PHP"
tags: [courses,Advance-level,Introduction]
---  

#### Topics Covered:
1. **Connecting to MongoDB:**
2. **Inserting Data:**
3. **Querying Data:**
4. **Updating Data:**
5. **Deleting Data:**

**Connecting to MongoDB:**

```php
<?php
require 'vendor/autoload.php'; // include Composer's autoloader
$client = new MongoDB\Client("mongodb://localhost:27017");
$collection = $client->myDatabase->users;
?>
```

**Inserting Data:**

```php
<?php
$insertOneResult = $collection->insertOne([
    'username' => 'john_doe',
    'email' => 'john@example.com'
]);
echo "Inserted with Object ID '{$insertOneResult->getInsertedId()}'";
?>
```

**Querying Data:**

```php
<?php
$user = $collection->findOne(['username' => 'john_doe']);
echo "User email: " . $user['email'];
?>
```

**Updating Data:**

```php
<?php
$updateResult = $collection->updateOne(
    ['username' => 'john_doe'],
    ['$set' => ['email' => 'john_updated@example.com']]
);
echo "Matched {$updateResult->getMatchedCount()} document(s)\n";
echo "Modified {$updateResult->getModifiedCount()} document(s)\n";
?>
```

**Deleting Data:**

```php
<?php
$deleteResult = $collection->deleteOne(['username' => 'john_doe']);
echo "Deleted {$deleteResult->getDeletedCount()} document(s)\n";
?>
```
 

:::tip 
- When working with NoSQL databases like MongoDB, leverage its flexible schema and powerful querying capabilities.
:::