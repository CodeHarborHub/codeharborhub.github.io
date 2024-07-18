---
id: lesson-2
title: "Using MongoDB as an Event Store"
sidebar_label: Event Store
sidebar_position: 2
description: "Using MongoDB as an Event Store"
tags: [courses,advanced-level,Event Store,Introduction]
---  
 
 

MongoDB can be used as an event store in event-driven architectures, where it stores a sequence of events that represent state changes.

**Event Store Characteristics**:
- **Append-Only**: Events are only appended and never updated or deleted.
- **Event Sourcing**: Application state is reconstructed by replaying events.
- **Time-Ordered**: Events are stored in the order they occurred.

**Schema Design for Event Store**:
- **Event Collection**:
  ```json
  {
    "_id": "event1",
    "aggregateId": "order123",
    "type": "OrderCreated",
    "timestamp": "2024-07-18T10:00:00Z",
    "payload": {
      "orderId": "order123",
      "customerId": "customer456",
      "orderItems": [
        { "productId": "product1", "quantity": 2 },
        { "productId": "product2", "quantity": 1 }
      ]
    }
  }
  ```

**Querying Events**:
- Retrieve events for a specific aggregate (e.g., an order) using the `aggregateId`.
- Use indexes on `aggregateId` and `timestamp` for efficient querying.