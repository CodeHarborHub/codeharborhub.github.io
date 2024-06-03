---
id: aspect oriented programming
title: Aspect oriented programming(AOP)
sidebar_label: Spring AOP Tutorial
sidebar_position: 4
tags: [java, spring,core-java, programming, java core, java spring, java web, AOP, aspect oriented]
description: in thi tutorial you will learn about aspect oriented programming and how aspect6s are working and when to use it and how to use it.
---
### Spring AOP Tutorial

**Aspect-Oriented Programming (AOP)** complements Object-Oriented Programming (OOP) by providing modularity, with aspects as the key unit of modularity rather than classes.

AOP breaks the program logic into distinct parts called concerns, increasing modularity by addressing cross-cutting concerns.

### Why Use AOP?

AOP offers a pluggable way to dynamically add additional concerns before, after, or around the actual logic. For instance, consider a class `A` with multiple methods:

```java
class A {  
    public void m1() { ... }  
    public void m2() { ... }  
    public void m3() { ... }  
    public void m4() { ... }  
    public void m5() { ... }  
    public void n1() { ... }  
    public void n2() { ... }  
    public void p1() { ... }  
    public void p2() { ... }  
    public void p3() { ... }  
}
```

To maintain logs and send notifications after calling methods starting with `m`, you would traditionally have to write this logic in each method. However, if the client decides to change the notification requirement, you would need to update all methods, leading to maintenance problems.

With AOP, you define additional concerns like logging and notification separately and manage them via configuration. This makes maintenance easier, as changes can be made in a single place.

### Where to Use AOP?

AOP is mainly used for:

1. Declarative enterprise services such as transaction management.
2. Implementing custom aspects.

### AOP Concepts and Terminology

**Join Point**: A point in the program such as method execution, exception handling, etc. Spring supports only method execution join points.

**Advice**: An action taken by an aspect at a join point. Types of advice include:
- **Before Advice**: Executes before a join point.
- **After Returning Advice**: Executes after a join point completes normally.
- **After Throwing Advice**: Executes if a method exits by throwing an exception.
- **After (finally) Advice**: Executes after a join point regardless of its exit.
- **Around Advice**: Executes before and after a join point.

**Pointcut**: An expression language of AOP that matches join points.

**Introduction**: Introduction of additional methods and fields for a type, allowing new interfaces for advised objects.

**Target Object**: The object being advised by one or more aspects, also known as the proxied object.

**Aspect**: A class containing advices, join points, etc.

**Interceptor**: An aspect containing only one advice.

**AOP Proxy**: Implements aspect contracts, created by the AOP framework. In Spring, it can be a JDK dynamic proxy or a CGLIB proxy.

**Weaving**: The process of linking aspects with other application types to create an advised object, done at compile time, load time, or runtime. Spring AOP performs weaving at runtime.

### AOP Implementations

1. **AspectJ**
2. **Spring AOP**
3. **JBoss AOP**

### Spring AOP Usage

Spring AOP can be used in three ways, with the most common being the Spring AspectJ Annotation Style:

1. By Spring 1.2 Old style (DTD based)
2. By AspectJ annotation style
3. By Spring XML configuration style

### Spring AOP AspectJ Annotation Example

**Annotations:**
- `@Aspect`: Declares the class as an aspect.
- `@Pointcut`: Declares the pointcut expression.
- **Advice Annotations:**
  - `@Before`: Applied before the actual method.
  - `@After`: Applied after the actual method and before returning the result.
  - `@AfterReturning`: Applied after the method completes, allows access to the return value.
  - `@Around`: Applied before and after the actual method.
  - `@AfterThrowing`: Applied if the method throws an exception.

**Example:**

```java title="Operation.java"
package com.javatpoint;

public class Operation {
    public void msg() { System.out.println("msg method invoked"); }
    public int m() { System.out.println("m method invoked"); return 2; }
    public int k() { System.out.println("k method invoked"); return 3; }
}
```

(Aspect with Before Advice)
```java title="TrackOperation.java"
package com.javatpoint;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;

@Aspect
public class TrackOperation {
    @Pointcut("execution(* Operation.*(..))")
    public void k() {} // Pointcut name
    
    @Before("k()") // Applying pointcut on before advice
    public void myadvice(JoinPoint jp) { // This is advice
        System.out.println("additional concern");
        // System.out.println("Method Signature: " + jp.getSignature());
    }
}
```

(Spring Configuration)
```xml title="applicationContext.xml"
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
                           http://www.springframework.org/schema/beans/spring-beans.xsd
                           http://www.springframework.org/schema/aop
                           http://www.springframework.org/schema/aop/spring-aop.xsd">

    <bean id="opBean" class="com.javatpoint.Operation"></bean>
    <bean id="trackMyBean" class="com.javatpoint.TrackOperation"></bean>
    
    <bean class="org.springframework.aop.aspectj.annotation.AnnotationAwareAspectJAutoProxyCreator"></bean>
</beans>
```

(Main Class)
```java title="Test.java"
package com.javatpoint;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        Operation e = (Operation) context.getBean("opBean");
        System.out.println("calling msg...");
        e.msg();
        System.out.println("calling m...");
        e.m();
        System.out.println("calling k...");
        e.k();
    }
}
```

**Output:**
```
calling msg...
additional concern
msg() method invoked
calling m...
additional concern
m() method invoked
calling k...
additional concern
k() method invoked
```

The additional concern is printed before each method invocation.

### Other Examples

#### @After Example

```java title="TrackOperation.java"
@After("k()") // Applying pointcut on after advice
public void myadvice(JoinPoint jp) { 
    System.out.println("additional concern");
    // System.out.println("Method Signature: " + jp.getSignature());
}
```

#### @AfterReturning Example
```java title="TrackOperation.java"
@AfterReturning(pointcut = "execution(* Operation.*(..))", returning = "result")
public void myadvice(JoinPoint jp, Object result) {
    System.out.println("additional concern");
    System.out.println("Method Signature: " + jp.getSignature());
    System.out.println("Result in advice: " + result);
    System.out.println("end of after returning advice...");
}
```

#### aop:before Example (XML Configuration)
```java title="TrackOperation.java"
package com.javatpoint;
import org.aspectj.lang.JoinPoint;
public class TrackOperation {
    public void myadvice(JoinPoint jp) { // It is advice
        System.out.println("additional concern");
        // System.out.println("Method Signature: " + jp.getSignature());
    }
}
```


```xml title="applicationContext.xml"
<aop:config>
    <aop:aspect id="myaspect" ref="trackAspect">
        <!-- @Before -->
        <aop:pointcut id="pointCutBefore" expression="execution(* com.javatpoint.Operation.*(..))" />
        <aop:before method="myadvice" pointcut-ref="pointCutBefore" />
    </aop:aspect>
</aop:config>
```

#### aop:after Example (XML Configuration)
```xml
<aop:config>
    <aop:aspect id="myaspect" ref="trackAspect">
        <!-- @After -->
        <aop:pointcut id="pointCutAfter" expression="execution(* com.javatpoint.Operation.*(..))" />
        <aop:after method="myadvice" pointcut-ref="pointCutAfter" />
    </aop:aspect>
</aop:config>
```

#### aop:after-returning Example (XML Configuration)
```xml
<aop:config>
    <aop:aspect id="myaspect" ref="trackAspect">
        <!-- @AfterReturning -->
        <aop:pointcut id="pointCutAfterReturning" expression="execution(* com.javatpoint.Operation.*(..))" />
        <aop:after-returning method="myadvice" returning="result" pointcut-ref="pointCutAfterReturning" />
    </aop:aspect>
</aop:config>
```

### Summary
Spring AOP helps in separating cross-cutting concerns like logging, transaction management, etc., from the business logic. This modular approach makes maintenance and evolution of the codebase easier and more manageable.