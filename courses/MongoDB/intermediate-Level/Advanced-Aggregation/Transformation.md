---
id: lesson-2
title: "Data Transformation"
sidebar_label: Data Transformation
sidebar_position: 2
description: "Data Transformation"
tags: [courses,beginner-level,Transformation,Introduction]
--- 


Data transformation in MongoDB involves reshaping documents, adding new fields, or computing new values based on existing fields.

**Using $project for Transformation**:
```javascript
db.orders.aggregate([
  {
    $project: {
      customerName: 1,
      orderDate: 1,
      totalAmount: { $sum: "$items.price" }
    }
  }
])
```

**Using $addFields for Transformation**:
```javascript
db.orders.aggregate([
  {
    $addFields: {
      discount: { $cond: { if: { $gte: ["$totalAmount", 100] }, then: 10, else: 0 } },
      finalAmount: { $subtract: ["$totalAmount", "$discount"] }
    }
  }
])
```

#### Real-world Aggregation Examples

**1. Sales Report by Customer**:
Generate a report showing the total sales amount and the number of orders for each customer.
```javascript
db.orders.aggregate([
  {
    $group: {
      _id: "$customerId",
      totalSales: { $sum: "$amount" },
      numberOfOrders: { $count: {} }
    }
  },
  {
    $lookup: {
      from: "customers",
      localField: "_id",
      foreignField: "_id",
      as: "customerDetails"
    }
  },
  { $unwind: "$customerDetails" },
  {
    $project: {
      customerName: "$customerDetails.name",
      totalSales: 1,
      numberOfOrders: 1
    }
  }
])
```

**2. Monthly Revenue Report**:
Calculate the total revenue for each month.
```javascript
db.orders.aggregate([
  {
    $group: {
      _id: { $month: "$orderDate" },
      monthlyRevenue: { $sum: "$amount" }
    }
  },
  {
    $sort: { "_id": 1 }
  }
])
```

**3. Top Selling Products**:
Identify the top 5 selling products based on quantity sold.
```javascript
db.orders.aggregate([
  { $unwind: "$items" },
  {
    $group: {
      _id: "$items.productId",
      totalQuantity: { $sum: "$items.quantity" }
    }
  },
  { $sort: { totalQuantity: -1 } },
  { $limit: 5 },
  {
    $lookup: {
      from: "products",
      localField: "_id",
      foreignField: "_id",
      as: "productDetails"
    }
  },
  { $unwind: "$productDetails" },
  {
    $project: {
      productName: "$productDetails.name",
      totalQuantity: 1
    }
  }
])
```
 