---
id: object-relational-model
title: Spring with ORM Frameworks
sidebar_label: Spring with ORM Frameworks
sidebar_position: 5
tags: [java, spring,core-java, programming, java core, java spring, java web,ORM,hibernate]
description: in thi tutorial you will learn about object relational model which will tell that how spring work with tables inspite of being object oriented.
---



### Spring with ORM Frameworks

Spring provides an API to seamlessly integrate with ORM frameworks such as Hibernate, JPA (Java Persistence API), JDO (Java Data Objects), Oracle Toplink, and iBATIS. Leveraging ORM frameworks with Spring offers several advantages:

#### Advantages of Spring Framework with ORM Frameworks:

1. **Reduced Coding**: Spring eliminates the need to write boilerplate code for tasks like managing database connections, transactions, etc.
   
2. **Easy Testing**: Spring's Inversion of Control (IoC) approach facilitates easier testing of applications.
   
3. **Enhanced Exception Handling**: Spring provides its own API for exception handling when used with ORM frameworks.
   
4. **Integrated Transaction Management**: Spring allows wrapping mapping code with an explicit template wrapper class or using AOP-style method interceptors for transaction management.

#### Hibernate and Spring Integration:

Integrating Hibernate with Spring is straightforward. Instead of configuring database information in a `hibernate.cfg.xml` file, you can provide all the necessary information in the `applicationContext.xml` file. This simplifies configuration and reduces the amount of code required.

#### Advantages of Spring Framework with Hibernate:

Spring provides the `HibernateTemplate` class, which streamlines the interaction with Hibernate. This eliminates the need for many manual steps such as creating configurations, building session factories, managing sessions, transactions, etc.

Consider the comparison between traditional Hibernate usage and Spring with Hibernate:

**Traditional Hibernate:**
```java
Configuration cfg = new Configuration();    
cfg.configure("hibernate.cfg.xml");    
SessionFactory factory = cfg.buildSessionFactory();    
Session session = factory.openSession();    
Transaction t = session.beginTransaction();    
Employee e1 = new Employee(111, "arun", 40000);    
session.persist(e1);    
t.commit();    
session.close();    
```

**Using HibernateTemplate with Spring:**
```java
Employee e1 = new Employee(111, "arun", 40000);    
hibernateTemplate.save(e1);
```

#### Methods of `HibernateTemplate` class:

| No. | Method                            | Description                                             |
|-----|-----------------------------------|---------------------------------------------------------|
| 1)  | `void persist(Object entity)`     | Persists the given object.                              |
| 2)  | `Serializable save(Object entity)`| Persists the given object and returns its ID.           |
| 3)  | `void saveOrUpdate(Object entity)`| Persists or updates the given object based on ID.       |
| 4)  | `void update(Object entity)`      | Updates the given object.                               |
| 5)  | `void delete(Object entity)`      | Deletes the given object based on ID.                   |
| 6)  | `Object get(Class entityClass, Serializable id)` | Retrieves a persistent object based on ID.        |
| 7)  | `Object load(Class entityClass, Serializable id)`| Lazy-loads a persistent object based on ID.      |
| 8)  | `List loadAll(Class entityClass)` | Retrieves all persistent objects of a given type.        |

### Steps for Hibernate and Spring Integration:

1. **Create Database Table**: (Optional) Create a table in the database.

2. **Create `applicationContext.xml`**: Configure data source, session factory, and other Hibernate-related beans.

3. **Create `Employee.java`**: Define the persistent class.

4. **Create `employee.hbm.xml`**: Mapping file for `Employee` class.

5. **Create `EmployeeDao.java`**: DAO class using `HibernateTemplate` to interact with the database.

6. **Create `InsertTest.java`**: Test class to demonstrate saving an employee object.

### Example of Hibernate and Spring Integration:

#### Directory Structure:

```
java
|--- com
     |--- codeharbourhub
           |--- Employee.java
           |--- EmployeeDao.java
           |--- InsertTest.java
resources
|--- applicationContext.xml
|--- employee.hbm.xml
```

#### 1) Create Table in the Database:

```sql
CREATE TABLE EMPLOYEE (
    ID NUMBER(10) NOT NULL,
    NAME VARCHAR2(255),
    SALARY FLOAT,
    PRIMARY KEY (ID)
);
```

#### 2) Create Employee.java file:    

```java title="Employee.java"
package com.codeharbourhub;

public class Employee {
    private int id;
    private String name;
    private float salary;

    // Getters and Setters
}
```

#### 3) `employee.hbm.xml`:

```xml title="employee.hbm.xml"
<?xml version='1.0' encoding='UTF-8'?>
<!DOCTYPE hibernate-mapping PUBLIC
"-//Hibernate/Hibernate Mapping DTD 3.0//EN"
"http://hibernate.sourceforge.net/hibernate-mapping-3.0.dtd">

<hibernate-mapping>
    <class name="com.codeharbourhub.Employee" table="EMPLOYEE">
        <id name="id">
            <generator class="assigned"></generator>
        </id>
            
        <property name="name"></property>
        <property name="salary"></property>
    </class>
</hibernate-mapping>
```

#### 4) `EmployeeDao.java`:

```java title="EmployeeDao.java"
package com.codeharbourhub;

import org.springframework.orm.hibernate3.HibernateTemplate;
import java.util.List;

public class EmployeeDao {
    HibernateTemplate template;

    public void setTemplate(HibernateTemplate template) {
        this.template = template;
    }

    // Method to save employee
    public void saveEmployee(Employee e) {
        template.save(e);
    }

    // Method to update employee
    public void updateEmployee(Employee e) {
        template.update(e);
    }

    // Method to delete employee
    public void deleteEmployee(Employee e) {
        template.delete(e);
    }

    // Method to return one employee of given id
    public Employee getById(int id) {
        Employee e = (Employee) template.get(Employee.class, id);
        return e;
    }

    // Method to return all employees
    public List<Employee> getEmployees() {
        List<Employee> list = template.loadAll(Employee.class);
        return list;
    }
}
```

#### 5) `applicationContext.xml`:

```xml title="applicationContext.xml"
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:p="http://www.springframework.org/schema/p"
    xsi:schemaLocation="http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans-3.0.xsd">

    <bean id="dataSource" class="org.apache.commons.dbcp.BasicDataSource">
        <property name="driverClassName" value="oracle.jdbc.driver.OracleDriver"></property>
        <property name="url" value="jdbc:oracle:thin:@localhost:1521:xe"></property>
        <property name="username" value="system"></property>
        <property name="password" value="oracle"></property>
    </bean>
      
    <bean id="mysessionFactory" class="org.springframework.orm.hibernate3.LocalSessionFactoryBean">
        <property name="dataSource" ref="dataSource"></property>
          
        <property name="mappingResources">
            <list>
                <value>employee.hbm.xml</value>
          
            </list>
        </property>
          
        <property name="hibernateProperties">
            <props>
                <prop key="hibernate.dialect">org.hibernate.dialect.Oracle9Dialect</prop>
                <prop key="hibernate.hbm2ddl.auto">update</prop>
                <prop key="hibernate.show_sql">true</prop>
            </props>
        </property>
    </bean>
      
    <bean id="template" class="org.springframework.orm.hibernate3.HibernateTemplate">
        <property name="sessionFactory" ref="mysessionFactory"></property>
    </bean>
      
    <bean id="d" class="com.codeharbourhub.EmployeeDao">
        <property name="template" ref="template"></property>
    </bean>
      
</beans>
```

#### 6) `InsertTest.java`:

```java title="InsertTest.java"
package com.codeharbourhub;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

public class InsertTest {
    public static void main(String[] args) {
        Resource r = new ClassPathResource("applicationContext.xml");
        BeanFactory factory = new XmlBeanFactory(r);

        EmployeeDao dao = (EmployeeDao) factory.getBean("d");

        Employee e = new Employee();
        e.setId(114);
        e.setName("varun");
        e.setSalary(50000);

        dao.saveEmployee(e);
    }
}
```

Now, upon executing `InsertTest.java`, the record will be successfully inserted into the Oracle database.
In this tutorial, we explored the integration of Hibernate with the Spring framework, leveraging Spring's powerful features to simplify the development process. Here's a summary of the key points covered:

1. **Integration Overview**:
   - Spring offers seamless integration with ORM (Object-Relational Mapping) frameworks like Hibernate, JPA, JDO, Oracle Toplink, and iBATIS.
   - The integration provides advantages such as reduced boilerplate code, easier testing through IoC (Inversion of Control), improved exception handling, and integrated transaction management.

2. **Hibernate and Spring Integration**:
   - Hibernate applications typically require a `hibernate.cfg.xml` file to configure database information. However, when integrating with Spring, this configuration can be provided in the `applicationContext.xml` file.
   - Spring simplifies Hibernate usage by providing classes like `HibernateTemplate`, reducing the need for manual configuration and session management.

3. **Benefits of Spring with Hibernate**:
   - With Spring, developers can utilize the `HibernateTemplate` class, significantly reducing the amount of code required compared to using Hibernate alone.
   - The `HibernateTemplate` class provides methods for common operations like persisting, updating, and deleting objects, as well as fetching objects by ID or loading all objects of a particular type.

4. **Steps for Integration**:
   - The integration process involves several steps, including creating database tables, defining Hibernate mapping files (`employee.hbm.xml`), implementing the persistent class (`Employee.java`), creating a DAO (Data Access Object) class (`EmployeeDao.java`), and configuring the Spring application context (`applicationContext.xml`).
   - Finally, a test class (`InsertTest.java`) is used to demonstrate the integration by saving an instance of the `Employee` class using the `EmployeeDao`.

5. **Configuration**:
   - The `applicationContext.xml` file contains configuration details such as DataSource setup, session factory configuration, Hibernate properties, and bean definitions for the `HibernateTemplate` and DAO classes.

6. **Execution**:
   - Upon executing the `InsertTest` class, the Spring context is initialized, and the `EmployeeDao` bean is obtained from the context. An instance of `Employee` is created and saved using the DAO's `saveEmployee` method, demonstrating successful integration and data persistence.

By following these steps, developers can seamlessly integrate Hibernate with Spring, leveraging the powerful features of both frameworks to build robust and maintainable Java applications.