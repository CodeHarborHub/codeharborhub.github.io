---
id: er-model-basics-concepts
title: DBMS ER Model Basic Concepts
sidebar_label: ER Model Basic Concepts
sidebar_position: 1
description: Learn about the Entity-Relationship (ER) model, its basic concepts, entities, attributes, and relationships that form the foundation of database design.
tags:
  - DBMS
  - ER Model
  - Database Design
---

# DBMS - ER Model Basic Concepts

The ER model defines the conceptual view of a database. It works around real-world entities and the associations among them. At view level, the ER model is considered a good option for designing databases.

## Entity

An entity can be a real-world object, either animate or inanimate, that can be easily identifiable. For example, in a school database, students, teachers, classes, and courses offered can be considered as entities. All these entities have some attributes or properties that give them their identity.

An entity set is a collection of similar types of entities. An entity set may contain entities with attribute sharing similar values. For example, a Students set may contain all the students of a school; likewise, a Teachers set may contain all the teachers of a school from all faculties. Entity sets need not be disjoint.

## Attributes

Entities are represented by means of their properties, called attributes. All attributes have values. For example, a student entity may have name, class, and age as attributes.

There exists a domain or range of values that can be assigned to attributes. For example, a student's name cannot be a numeric value. It has to be alphabetic. A student's age cannot be negative, etc.

### Types of Attributes

| Type                   | Description                                                                                                                                         |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Simple attribute       | Atomic values, which cannot be divided further. Example: a student's phone number is an atomic value of 10 digits.                                  |
| Composite attribute    | Made of more than one simple attribute. Example: a student's complete name may have first_name and last_name.                                       |
| Derived attribute      | Attributes that do not exist in the physical database, but their values are derived from other attributes. Example: average_salary in a department. |
| Single-value attribute | Contain a single value. Example: Social_Security_Number.                                                                                            |
| Multi-value attribute  | May contain more than one value. Example: a person can have more than one phone number, email_address, etc.                                         |

These attribute types can come together in a way like −

- Simple single-valued attributes
- Simple multi-valued attributes
- Composite single-valued attributes
- Composite multi-valued attributes

## Entity-Set and Keys

Key is an attribute or collection of attributes that uniquely identifies an entity among an entity set.

For example, the roll_number of a student makes him/her identifiable among students.

- **Super Key** − A set of attributes (one or more) that collectively identifies an entity in an entity set.
- **Candidate Key** − A minimal super key is called a candidate key. An entity set may have more than one candidate key.
- **Primary Key** − A primary key is one of the candidate keys chosen by the database designer to uniquely identify the entity set.

## Relationship

The association among entities is called a relationship. For example, an employee works_at a department, a student enrolls in a course. Here, Works_at and Enrolls are called relationships.

### Relationship Set

A set of relationships of similar type is called a relationship set. Like entities, a relationship too can have attributes. These attributes are called descriptive attributes.

### Degree of Relationship

The number of participating entities in a relationship defines the degree of the relationship.

- Binary = degree 2
- Ternary = degree 3
- n-ary = degree n

### Mapping Cardinalities

Cardinality defines the number of entities in one entity set, which can be associated with the number of entities of another set via a relationship set.

| Cardinality  | Diagram                                                                               | Description                                                                                                                                                                                             |
| ------------ | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| One-to-one   | ![one to one](https://www.tutorialspoint.com/dbms/images/one_to_one_relation.png)     | One entity from entity set A can be associated with at most one entity of entity set B and vice versa.                                                                                                  |
| One-to-many  | ![one to many](https://www.tutorialspoint.com/dbms/images/one_to_many_relation.png)   | One entity from entity set A can be associated with more than one entities of entity set B; however, an entity from entity set B can be associated with at most one entity.                             |
| Many-to-one  | ![many to one](https://www.tutorialspoint.com/dbms/images/many_to_one_relation.png)   | More than one entities from entity set A can be associated with at most one entity of entity set B; however, an entity from entity set B can be associated with more than one entity from entity set A. |
| Many-to-many | ![many to many](https://www.tutorialspoint.com/dbms/images/many_to_many_relation.png) | One entity from entity set A can be associated with more than one entity from entity set B and vice versa.                                                                                              |
