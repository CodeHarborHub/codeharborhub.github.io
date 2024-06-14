---
id: dbms-concurrency-control
title: DBMS - Concurrency Control
sidebar_label: Concurrency Control
sidebar_position: 3
description: Explore concurrency control protocols in database management, including lock-based protocols and timestamp-based protocols, ensuring atomicity, isolation, and serializability of transactions.
---

# DBMS - Concurrency Control

In a multi-transaction environment, managing concurrency is vital to ensure the atomicity, isolation, and serializability of transactions. Concurrency control protocols play a crucial role in achieving these objectives and maintaining data integrity.

## Lock-based Protocols

Lock-based protocols restrict access to data items using locks, ensuring that transactions acquire appropriate locks before reading or writing data. There are two types of locks:

- **Binary Locks:** Data items can be either locked or unlocked.
- **Shared/Exclusive Locks:** Differentiates locks based on their use (read or write).

### Types of Lock-based Protocols

#### Simplistic Lock Protocol

Transactions acquire locks on data items before performing write operations and release them afterward.

#### Pre-claiming Lock Protocol

Transactions pre-determine the locks they need, request all locks before execution, and roll back if all locks are not granted.

#### Two-Phase Locking (2PL)

Divides transaction execution into two phases: growing phase (acquiring locks) and shrinking phase (releasing locks).

#### Strict Two-Phase Locking (Strict-2PL)

Similar to 2PL but holds all locks until the commit point, releasing them simultaneously.

## Timestamp-based Protocols

Timestamp-based protocols use timestamps (system time or logical counter) to manage concurrency and ordering of transactions.

Every transaction and data item has associated timestamps for read and write operations.

### Timestamp Ordering Protocol

Ensures serializability among conflicting read and write operations based on transaction timestamps.

#### Rules

- Read(X) operation:
  - $TS(Ti) < W-timestamp(X)$: Rejected.
  - $TS(Ti) >= W-timestamp(X)$: Executed, update timestamps.
- Write(X) operation:
  - $TS(Ti) < R-timestamp(X)$: Rejected.
  - $TS(Ti) < W-timestamp(X)$: Rejected, rollback.
  - Otherwise: Executed.

#### Thomas' Write Rule

If $TS(Ti) < W-timestamp(X)$, the write operation is rejected, and Ti is rolled back.

## Summary

Concurrency control protocols, whether lock-based or timestamp-based, are essential for managing transactions effectively in a database system. They ensure transactions are executed in a controlled manner, maintaining data consistency and integrity.
