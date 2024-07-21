---
id: lesson-2
title: "Schema Patterns"
sidebar_label: Schema Patterns
sidebar_position: 2
description: "Schema Patterns in MongoDB"
tags: [courses,advanced-level,Schema Patterns,Introduction]
---  


#### Polymorphic Pattern

The polymorphic pattern allows storing different types of related documents in a single collection. This approach is beneficial when the documents share many common fields but also have distinct fields.

**Example**:

Suppose we have a collection for storing events, where different types of events (e.g., "conference", "webinar", "workshop") share common fields but also have unique fields.

```json
// Event documents
{
  "_id": "event1",
  "type": "conference",
  "name": "Tech Conference 2024",
  "date": "2024-08-01",
  "location": "New York",
  "speakers": ["Alice", "Bob"],
  "tracks": ["AI", "Cloud Computing"]
}

{
  "_id": "event2",
  "type": "webinar",
  "name": "Web Development Webinar",
  "date": "2024-09-01",
  "url": "https://webinarlink.com",
  "host": "John Doe"
}

{
  "_id": "event3",
  "type": "workshop",
  "name": "Hands-on Workshop",
  "date": "2024-10-01",
  "location": "San Francisco",
  "instructor": "Jane Smith",
  "materials": ["Laptop", "IDE"]
}
```

- **Pros**: Simplifies queries and indexing, as all related data is in one collection.
- **Cons**: Can lead to sparse documents and potential storage inefficiencies.

#### Bucket Pattern

The bucket pattern groups related data into a single document, reducing the number of documents and improving write performance. It is particularly useful for time-series data or data with a natural grouping.

**Example**:

Storing sensor data, where each document represents a time bucket (e.g., one hour) with an array of readings.

```json
{
  "_id": "sensor1_2024-07-16T10:00:00Z",
  "sensorId": "sensor1",
  "date": "2024-07-16T10:00:00Z",
  "readings": [
    { "timestamp": "2024-07-16T10:01:00Z", "value": 20 },
    { "timestamp": "2024-07-16T10:02:00Z", "value": 21 },
    // More readings...
  ]
}
```

- **Pros**: Reduces the number of documents, improves write performance, and can simplify querying for a specific time range.
- **Cons**: Requires careful management of bucket size to avoid excessively large documents.

#### Computed Pattern

The computed pattern involves precomputing and storing frequently accessed or complex derived data to optimize read performance. This can be done using triggers, background jobs, or during write operations.

**Example**:

Precomputing the total order value for each customer to optimize querying for customer order summaries.

```json
// Order documents
{
  "_id": "order1",
  "customerId": "customer1",
  "items": [
    { "productId": "product1", "quantity": 2, "price": 10 },
    { "productId": "product2", "quantity": 1, "price": 20 }
  ],
  "totalValue": 40
}

{
  "_id": "order2",
  "customerId": "customer1",
  "items": [
    { "productId": "product3", "quantity": 3, "price": 15 }
  ],
  "totalValue": 45
}

// Precomputed customer order summary
{
  "_id": "customer1",
  "name": "John Doe",
  "totalOrderValue": 85
}
```

- **Pros**: Greatly improves read performance for complex or frequently accessed data.
- **Cons**: Increases write complexity and requires ensuring the precomputed data stays consistent with the original data.
 