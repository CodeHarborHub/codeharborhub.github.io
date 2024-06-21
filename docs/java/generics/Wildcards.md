---
id: wildcards-generics
title: Wildcards
sidebar_label: Wildcards
sidebar_position: 4
tags: [java, generics]
description: In this tutorial, we will explore about how wildcards used in generics with examples.
---

# Wildcards

- wildcard types are used to make generic types more flexible, particularly when dealing with collections.

- They allow you to define generic types that can accept a wider range of subtypes. Wildcard types are represented using the ? symbol.

- There are two main types of wildcard bounds:

## Upper Bounded Wildcards (`<? extends T>`):

- These wildcards restrict the unknown type to be a specific type or a subtype of that type. 

- They allow you to specify that a generic type parameter should be an instance of a class or a subclass of that class.

```java
import java.util.*;

class UpperBoundExample {
    static double sum(List<? extends Number> list) {
        double sum = 0.0;
        for (Number num : list) {
            sum += num.doubleValue();
        }
        return sum;
    }

    public static void main(String[] args) {
        List<Integer> integers = Arrays.asList(1, 2, 3, 4, 5);
        System.out.println("Sum of integers: " + sum(integers));

        List<Double> doubles = Arrays.asList(1.1, 2.2, 3.3, 4.4, 5.5);
        System.out.println("Sum of doubles: " + sum(doubles));
    }
}

```

- In the sum method, the parameter `List<? extends Number>` accepts a list of any type that extends Number. So, both `List<Integer>` and `List<Double>` can be passed to this method.

## Lower Bounded Wildcards (`<? super T>`):

- These wildcards restrict the unknown type to be a specific type or a supertype of that type. 

- They allow you to specify that a generic type parameter should be an instance of a class or a superclass of that class.

```java
import java.util.*;

class LowerBoundExample {
    static void addIntegers(List<? super Integer> list) {
        for (int i = 1; i <= 5; i++) {
            list.add(i);
        }
    }

    public static void main(String[] args) {
        List<Number> numbers = new ArrayList<>();
        addIntegers(numbers);
        System.out.println("Numbers: " + numbers);
    }
}
```


- In the addIntegers method, the parameter `List<? super Integer>` accepts a list of any type that is a superclass of Integer. So, `List<Number>` or `List<Object>` can be passed to this method.
