---
id: dependency injection
title: dependency injection
sidebar_label: dependency injection in spring
sidebar_position: 3
tags: [java, spring,core-java, programming, java core, java spring, java web]
description: in thi tutorial you will learn about how to injetch dependencies in classe and objects which is core concept of java
---
### IoC Container

The IoC container in the Spring Framework is responsible for managing the lifecycle and configuration of application objects. It instantiates, configures, and assembles the dependencies between objects based on the configuration provided (usually in an XML file or through annotations). The IoC container performs three main tasks:
1. Instantiates the application classes.
2. Configures the objects.
3. Assembles the dependencies between the objects.

There are two types of IoC containers in Spring:

1. **BeanFactory**
2. **ApplicationContext**

#### Difference between BeanFactory and ApplicationContext

Both `org.springframework.beans.factory.BeanFactory` and `org.springframework.context.ApplicationContext` act as IoC containers. However, the `ApplicationContext` interface extends the `BeanFactory` interface and adds additional functionality such as integration with Spring's AOP, message resource handling (for internationalization), event propagation, and application-layer specific contexts like `WebApplicationContext` for web applications. Therefore, using `ApplicationContext` is generally preferred over `BeanFactory`.

### Using BeanFactory

The `XmlBeanFactory` is an implementation of the `BeanFactory` interface. To use `BeanFactory`, create an instance of `XmlBeanFactory` as shown below:

```java
Resource resource = new ClassPathResource("applicationContext.xml");  
BeanFactory factory = new XmlBeanFactory(resource);
```

The constructor of `XmlBeanFactory` takes a `Resource` object, so you need to pass a `Resource` object to create an instance of `BeanFactory`.

### Using ApplicationContext

The `ClassPathXmlApplicationContext` class is an implementation of the `ApplicationContext` interface. To use `ApplicationContext`, instantiate `ClassPathXmlApplicationContext` as shown below:

```java
ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
```

The constructor of `ClassPathXmlApplicationContext` takes a string representing the name of the XML file to create an instance of `ApplicationContext`.

### Dependency Injection in Spring

Dependency Injection (DI) is a design pattern that reduces tight coupling between objects by injecting their dependencies from external sources, making the code easier to manage and test. Spring supports DI through two main methods:
1. **Constructor Injection**
2. **Setter Injection**

#### Constructor Injection

Constructor injection is done using the `<constructor-arg>` sub-element within the `<bean>` element in the XML configuration file. Here's an example:



```java title="Employee.java"
package com.codeharborehub;

public class Employee {
    private int id;
    private String name;

    public Employee() { System.out.println("default constructor"); }

    public Employee(int id) { this.id = id; }

    public Employee(String name) { this.name = name; }

    public Employee(int id, String name) {
        this.id = id;
        this.name = name;
    }

    void show() {
        System.out.println(id + " " + name);
    }
}
```
```xml title="applicationContext.xml"
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:p="http://www.springframework.org/schema/p"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
                           http://www.springframework.org/schema/beans/spring-beans-3.0.xsd">
  
    <bean id="e" class="com.codeharborehub.Employee">
        <constructor-arg value="10" type="int"></constructor-arg>
    </bean>
</beans>
```


```java title="Test.java"
package com.codeharborehub;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.core.io.*;

public class Test {
    public static void main(String[] args) {
        Resource r = new ClassPathResource("applicationContext.xml");
        BeanFactory factory = new XmlBeanFactory(r);

        Employee e = (Employee) factory.getBean("e");
        e.show();
    }
}
```

#### Setter Injection

Setter injection is done using the `<property>` element within the `<bean>` element in the XML configuration file. Here's an example:

```java title="Employee.java"
package com.codeharborehub;

public class Employee {
    private int id;
    private String name;
    private String city;

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    void display() {
        System.out.println(id + " " + name + " " + city);
    }
}
```
```xml title="applicationContext.xml"
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:p="http://www.springframework.org/schema/p"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
                           http://www.springframework.org/schema/beans/spring-beans-3.0.xsd">
  
    <bean id="obj" class="com.codeharborehub.Employee">
        <property name="id">
            <value>20</value>
        </property>
        <property name="name">
            <value>Arun</value>
        </property>
        <property name="city">
            <value>ghaziabad</value>
        </property>
    </bean>
</beans>
```

```java title="Test.java"
package com.codeharborehub;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.core.io.*;

public class Test {
    public static void main(String[] args) {
        Resource r = new ClassPathResource("applicationContext.xml");
        BeanFactory factory = new XmlBeanFactory(r);

        Employee e = (Employee) factory.getBean("obj");
        e.display();
    }
}
```

### Difference between Constructor and Setter Injection

1. **Partial Dependency**: Partial dependencies can be injected using setter injection but not with constructor injection.
2. **Overriding**: Setter injection overrides constructor injection.
3. **Changes**: Setter injection allows for more flexibility in changing the values without creating a new instance, unlike constructor injection.

### Dependency Injection with Factory Method in Spring

Spring allows for the injection of beans using factory methods. This can be done by specifying `factory-method` and optionally `factory-bean` attributes in the `<bean>` element.

**Example:**

```java title="A.java"
package com.codeharborehub;

public class A {
    private static final A obj = new A();
    private A() { System.out.println("private constructor"); }

    public static A getA() {
        System.out.println("factory method");
        return obj;
    }

    public void msg() {
        System.out.println("hello user");
    }
}
```

```xml title="applicationContext.xml"
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:p="http://www.springframework.org/schema/p"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
                           http://www.springframework.org/schema/beans/spring-beans-3.0.xsd">
  
    <bean id="a" class="com.codeharborehub.A" factory-method="getA"></bean>
</beans>
```

```java title="Test.java"
package com.codeharborehub;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        A a = (A) context.getBean("a");
        a.msg();
    }
}
```

**Output:**

```
private constructor
factory method
hello user
```