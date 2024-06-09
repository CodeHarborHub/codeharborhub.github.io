---
id: er-diagram-representation
title: DBMS ER Diagram Representation
sidebar_label: ER Diagram Representation
sidebar_position: 2
description: Learn how to represent the Entity-Relationship (ER) Model using ER diagrams, including entities, attributes, relationships, and cardinality.
tags:
  - DBMS
  - ER Diagram
  - Database Design
---

# DBMS - ER Diagram Representation

Let us now learn how the ER Model is represented by means of an ER diagram. Any object, for example, entities, attributes of an entity, relationship sets, and attributes of relationship sets, can be represented with the help of an ER diagram.

## Entity

Entities are represented by means of rectangles. Rectangles are named with the entity set they represent.

```mermaid
---
title: Entity Representation
---
erDiagram
    ENTITY {
        string attribute1
        int attribute2
    }
```

## Attributes

### Simple Attributes

Attributes are the properties of entities. Attributes are represented by means of ellipses. Every ellipse represents one attribute and is directly connected to its entity (rectangle).

```mermaid
---
title: Simple Attributes
---
erDiagram
    ENTITY {
        string attribute1
    }
```

### Composite Attributes

If the attributes are composite, they are further divided in a tree-like structure. Every node is then connected to its attribute. Composite attributes are represented by ellipses that are connected with an ellipse.

```mermaid
---
title: Composite Attributes
---
erDiagram
    ENTITY {
        string attribute1
    }
    attribute1 {
        string sub_attribute1
        string sub_attribute2
    }
    ENTITY ||--o{ attribute1 : has
```

### Multivalued Attributes

Multivalued attributes are depicted by double ellipses.

```mermaid
---
title: Multivalued Attributes
---
erDiagram
    ENTITY {
        string attribute1
        int attribute2
        string[] multivalued_attribute
    }
    ENTITY ||--o{ multivalued_attribute : has
```

### Derived Attributes

Derived attributes are depicted by dashed ellipses.

```mermaid
---
title: Derived Attributes
---
erDiagram
    ENTITY {
        string attribute1
        int attribute2
        int derived_attribute
    }
    ENTITY ||--o{ derived_attribute : derives
```

## Relationship

Relationships are represented by diamond-shaped boxes. The name of the relationship is written inside the diamond-box. All the entities (rectangles) participating in a relationship are connected to it by a line.

### Binary Relationship and Cardinality

A relationship where two entities are participating is called a binary relationship. Cardinality is the number of instances of an entity from a relation that can be associated with the relation.

#### One-to-One

When only one instance of an entity is associated with the relationship, it is marked as '1:1'. The following image reflects that only one instance of each entity should be associated with the relationship. It depicts one-to-one relationship.

```mermaid
---
title: One-to-One Relationship
---
erDiagram
    ENTITY1 ||--|| ENTITY2 : relationship
```

#### One-to-Many

When more than one instance of an entity is associated with a relationship, it is marked as '1:N'. The following image reflects that only one instance of entity on the left and more than one instance of an entity on the right can be associated with the relationship. It depicts one-to-many relationship.

```mermaid
---
title: One-to-Many Relationship
---
erDiagram
    ENTITY1 ||--o{ ENTITY2 : relationship
```

#### Many-to-One

When more than one instance of entity is associated with the relationship, it is marked as 'N:1'. The following image reflects that more than one instance of an entity on the left and only one instance of an entity on the right can be associated with the relationship. It depicts many-to-one relationship.

```mermaid
---
title: Many-to-One Relationship
---
erDiagram
    ENTITY1 }o--|| ENTITY2 : relationship
```

#### Many-to-Many

The following image reflects that more than one instance of an entity on the left and more than one instance of an entity on the right can be associated with the relationship. It depicts many-to-many relationship.

```mermaid
---
title: Many-to-Many Relationship
---
erDiagram
    ENTITY1 }o--o{ ENTITY2 : relationship
```

### Participation Constraints

#### Total Participation

Each entity is involved in the relationship. Total participation is represented by double lines.

```mermaid
---
title: Total Participation
---
erDiagram
    ENTITY1 ||--|| ENTITY2 : relationship
```

#### Partial Participation

Not all entities are involved in the relationship. Partial participation is represented by single lines.

```mermaid
---
title: Partial Participation
---
erDiagram
    ENTITY1 }o--|| ENTITY2 : relationship
```
