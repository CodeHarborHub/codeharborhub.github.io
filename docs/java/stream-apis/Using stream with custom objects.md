---
id: using-stream-with-custom-objects
title: Using stream with custom objects
sidebar_label: Using stream with custom objects
sidebar_position: 5
tags: [java, stream-api]
description: In this tutorial, we will explore how can we create streams and perform stream operations on custom objects.
---

# Using stream with custom objects

- Suppose we have a class called Product representing products in a store. 
- Each product has attributes such as id, name, price, and category. 

- We want to perform various operations using streams on a list of Product objects.

```java
class Product {
    private int id;
    private String name;
    private double price;
    private String category;

    // All args contructor, getters, setters and toString method
}

public class Main {
    public static void main(String[] args) {
        // Create a list of Product objects
        List<Product> products = Arrays.asList(
                new Product(1, "Laptop", 1200.00, "Electronics"),
                new Product(2, "Chair", 75.50, "Furniture"),
                new Product(3, "Headphones", 50.00, "Electronics"),
                new Product(4, "Table", 150.00, "Furniture"),
                new Product(5, "Mouse", 20.00, "Electronics")
        );

        // Filter products by category
        List<Product> electronics = products.stream()
                .filter(p -> p.getCategory().equals("Electronics"))
                .collect(Collectors.toList());
        System.out.println("Electronics: " + electronics);

        // Map products to their names
        List<String> productNames = products.stream()
                .map(Product::getName)
                .collect(Collectors.toList());
        System.out.println("Product Names: " + productNames);

        // Calculate the total price of all products
        double totalPrice = products.stream()
                .mapToDouble(Product::getPrice)
                .sum();
        System.out.println("Total Price: $" + totalPrice);

        // Find the cheapest product
        Product cheapestProduct = products.stream()
                .min((p1, p2) -> Double.compare(p1.getPrice(), p2.getPrice()))
                .orElse(null);
        System.out.println("Cheapest Product: " + cheapestProduct);

        // Sort products by price in descending order, and if prices are the same, sort by ID
        List<Product> sortedByPriceDesc = products.stream()
                .sorted(Comparator.comparingDouble(Product::getPrice).reversed()
                        .thenComparingInt(Product::getId))
                .toList();
        System.out.println("Sorted by price (descending) and then by ID: " + sortedByPriceDesc);
        
        // Group products by category
        products.stream()
                .collect(Collectors.groupingBy(Product::getCategory))
                .forEach((category, productList) -> {
                    System.out.println(category + ": " + productList);
                });
    }
}
```
