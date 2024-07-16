---
id: lesson-2
title: "Table Headers, Rows, and Cells"
sidebar_label: Table Headers and Cells
sidebar_position: 2
description: "Learn about Table Headers,Rows and Cells"
tags: [courses,beginner-level,Table Headers,Table Cells,Introduction]
---


**Table Headers (`<th>`):**
Table headers are used to define headings for rows and columns. They are typically styled differently from regular table cells, often appearing bold and centered.

**Example with Headers:**
```html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
  </tr>
  <tr>
    <td>John</td>
    <td>30</td>
    <td>New York</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>25</td>
    <td>Los Angeles</td>
  </tr>
</table>
```
In this example, the first row contains header cells that define the content of each column.

**Table Rows (`<tr>`):**
Table rows are defined using the `<tr>` tag. Each `<tr>` tag can contain one or more `<th>` or `<td>` elements.

**Example:**
```html
<tr>
  <td>Data 1</td>
  <td>Data 2</td>
  <td>Data 3</td>
</tr>
```
This example represents a single row of data within a table.

**Table Cells (`<td>`):**
Table cells contain the actual data. Each cell within a row is defined using the `<td>` tag.

**Example:**
```html
<td>Example Data</td>
```
This represents a single cell containing the text "Example Data".

