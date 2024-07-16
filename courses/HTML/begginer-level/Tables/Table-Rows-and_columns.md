---
id: lesson-3
title: "Table Rows and Columns"
sidebar_label: Table Rows and Columns
sidebar_position: 3
description: "Learn about Spanning Rows and Columns"
tags: [courses,beginner-level,Table Rows,Table Columns,Introduction]
---



Sometimes, you may need to merge cells to span multiple rows or columns. HTML provides two attributes for this purpose: `colspan` and `rowspan`.

**Column Spanning (`colspan`):**
The `colspan` attribute allows a cell to span multiple columns.

**Example:**
```html
<table>
  <tr>
    <th>Name</th>
    <th colspan="2">Contact Info</th>
  </tr>
  <tr>
    <td>John</td>
    <td>john@example.com</td>
    <td>555-1234</td>
  </tr>
</table>
```
In this example, the header cell "Contact Info" spans two columns, merging the cells that would normally be separate.

**Row Spanning (`rowspan`):**
The `rowspan` attribute allows a cell to span multiple rows.

**Example:**
```html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
  </tr>
  <tr>
    <td rowspan="2">John</td>
    <td>30</td>
    <td>New York</td>
  </tr>
  <tr>
    <td>31</td>
    <td>Los Angeles</td>
  </tr>
</table>
```
In this example, the cell containing "John" spans two rows, merging the cells in the first column of the first and second rows.

**Combining `colspan` and `rowspan`:**
You can use both `colspan` and `rowspan` together to create more complex table structures.

**Example:**
```html
<table>
  <tr>
    <th>Name</th>
    <th colspan="2">Contact Info</th>
  </tr>
  <tr>
    <td rowspan="2">John</td>
    <td>Email</td>
    <td>john@example.com</td>
  </tr>
  <tr>
    <td>Phone</td>
    <td>555-1234</td>
  </tr>
</table>
```
In this example, "John" spans two rows, and "Contact Info" spans two columns, creating a more complex table layout.

By mastering these techniques for creating and styling tables, you can effectively organize and display data in a clear and structured manner on your web pages.