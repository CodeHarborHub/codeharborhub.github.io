---
id: lesson-1
title: "Tables Introduction"
sidebar_label: What is Tables?
sidebar_position: 1
description: "Learn about Table and Table tags"
tags: [courses,beginner-level,Tables,Introduction]
---
 
HTML tables are used to display tabular data in rows and columns. The `<table>` tag is used to create a table, and within it, you use `<tr>` for table rows, `<th>` for table headers, and `<td>` for table cells.

**Basic Table Example:**
```html
<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
    <th>Header 3</th>
  </tr>
  <tr>
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
    <td>Row 1, Cell 3</td>
  </tr>
  <tr>
    <td>Row 2, Cell 1</td>
    <td>Row 2, Cell 2</td>
    <td>Row 2, Cell 3</td>
  </tr>
</table>
```

In this example, a table with two rows and three columns is created. The first row contains table headers, and the subsequent rows contain table data.

**Explanation of Basic Table Elements:**
- `<table>`: Defines the table.
- `<tr>`: Defines a row in the table.
- `<th>`: Defines a header cell in a table. It is typically displayed in bold and centered.
- `<td>`: Defines a standard cell in a table.

