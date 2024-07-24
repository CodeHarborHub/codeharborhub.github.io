---
id: lesson-3
title: "Handling Distributed Transactions"
sidebar_label: Handling Distributed Transactions
sidebar_position: 3
description: "Handling Distributed Transactions"
tags: [courses,advanced-level,Handling Distributed Transactions,Introduction]
---  
 

Distributed transactions ensure atomicity and consistency across multiple microservices or databases.

**Challenges**:
- **Two-Phase Commit (2PC)**: A traditional approach but can be complex and impact performance.
- **Eventual Consistency**: A more scalable approach, accepting that consistency will be achieved eventually.

**Patterns for Distributed Transactions**:
1. **Saga Pattern**:
   - **Choreography**: Each service listens to events and performs its action, then publishes the next event.
   - **Orchestration**: A central orchestrator coordinates the workflow by calling services and handling compensating actions.

2. **Outbox Pattern**:
   - Services write events to an outbox table/collection within the same transaction as their business data.
   - A separate process reads from the outbox and publishes events.

**Example of Saga Pattern**:
- **Order Service**: Creates an order and publishes an `OrderCreated` event.
- **Inventory Service**: Reduces inventory and publishes an `InventoryUpdated` event.
- **Payment Service**: Processes payment and publishes a `PaymentCompleted` event.
- **Compensation**: If payment fails, a `PaymentFailed` event triggers compensating actions to revert the inventory and cancel the order. 