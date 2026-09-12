---
title: "Excel Workbook Views & Display Options"
sidebar_label: Excel Workbook Views
description: "Learn how to use Normal, Page Layout, Page Break Preview, and Custom Views in Microsoft Excel to optimize reading, printing, and presentation formats."
sidebar_position: 6
keywords: [excel workbook views, normal view excel, page layout view, page break preview, excel custom views, excel display options, hide gridlines excel, freeze panes excel]
tags: [excel workbook views, normal view excel, page layout view, page break preview, excel custom views, excel display options, hide gridlines excel, freeze panes excel]
---

Microsoft Excel offers several **Workbook Views** designed to help you work efficiently during different phases of spreadsheet development—whether you are entering raw data, preparing report layouts, configuring page breaks for printing, or setting up dedicated presentation views.

<br />
<AdsComponent />
<br />

## Video Explanation

<LiteYouTubeEmbed
  id="D2gV9yAv8g0"
  params="autoplay=1&autohide=1&showinfo=0&rel=0"
  title="Excel Workbook Views Guide"
  lazyLoad={true}
  webp
/>

<br />

This guide covers all primary workbook views, display options, and custom layout configurations available in Excel.

## 1. Primary Workbook Views

Excel provides three main view modes accessible from the **View** tab on the Ribbon or from the **View Shortcuts** on the right side of the Status Bar.


```

+-----------------------------------------------------------------------------------+
|  File  Home  Insert  Draw  Page Layout  Formulas  Data  Review  View  Developer   |
+-----------------------------------------------------------------------------------+
| [ Normal ]  [ Page Break Preview ]  [ Page Layout ]  [ Custom Views ]            |
| <--------------------------- Workbook Views Group ------------------------------> |
+-----------------------------------------------------------------------------------+

```

### Overview of View Modes

| View Mode | Primary Use Case | Key Features & Display Differences |
| :--- | :--- | :--- |
| **Normal View** | Default grid editing and data entry. | Full cell grid, infinite scroll appearance, maximum performance. |
| **Page Layout View** | Visualizing print margins, headers, and footers. | Displays paper page margins, page rulers, and interactive header/footer zones. |
| **Page Break Preview** | Adjusting print boundaries and page breaks. | Shows print region with blue boundary lines; grays out non-printing cells. |

## 2. Detailed Breakdown of Each View Mode

### A. Normal View (Default Grid)

**Normal View** is the default view in Microsoft Excel optimized for data input, formula creation, and general formatting.

* **Best For:** High-performance data processing and daily editing.
* **Characteristics:** Continuous grid without page breaks or visual margins.


```

+-----------------------------------------------------------------------------------+
|     |       A       |       B       |       C       |       D       |       E     |
+-----+---------------+---------------+---------------+---------------+-------------+
|  1  | Region        | Q1 Sales      | Q2 Sales      | Total         | Margin      |
|  2  | North         | $12,500       | $14,200       | $26,700       | 18%         |
|  3  | South         | $9,800        | $11,100       | $20,900       | 15%         |
+-----------------------------------------------------------------------------------+

```

<br />
<AdsComponent />
<br />

### B. Page Layout View

**Page Layout View** presents your worksheet as individual printed pages, allowing you to fine-tune visual elements before printing or exporting to PDF.

* **Best For:** Formatting reports, adding headers/footers, and adjusting margins.
* **Key Features:**
  * Displays top, left, and right margins directly on screen.
  * Shows ruler guides (in inches or centimeters) along the top and left edges.
  * Provides clickable **Header** and **Footer** areas across three distinct sections (Left, Center, Right).


```

+-----------------------------------------------------------------------------------+
|  Top Margin (Header Zone)                                                         |
|  [ Click to add header ]                                                          |
|  +-----------------------------------------------------------------------------+  |
|  |     |       A       |       B       |       C       |       D       |       |  |
|  +-----+---------------+---------------+---------------+---------------+-------+  |
|  |  1  | Region        | Q1 Sales      | Q2 Sales      | Total         |       |  |
|  |  2  | North         | $12,500       | $14,200       | $26,700       |       |  |
|  +-----------------------------------------------------------------------------+  |
|  Bottom Margin (Footer Zone)                                                      |
+-----------------------------------------------------------------------------------+

```

### C. Page Break Preview

**Page Break Preview** provides an exact visual representation of how Excel will divide your data across printed pages.

* **Best For:** Resolving cut-off columns or bad page breaks before printing.
* **Key Features:**
  * **Solid Blue Lines:** Represent manually inserted page breaks.
  * **Dashed Blue Lines:** Represent automatic page breaks generated by Excel based on paper size and scale.
  * **Grayed-out Areas:** Highlight cells outside the active print area.


```

+-----------------------------------------------------------------------------------+
|  PAGE 1                                                                           |
|  +--------------------------------------------------------+                       |
|  | Region        | Q1 Sales      | Q2 Sales               | (Dashed Blue Line)    |
|  | North         | $12,500       | $14,200                | :                     |
|  | South         | $9,800        | $11,100                | : PAGE 2              |
|  +--------------------------------------------------------+ :                     |
|  | Total         | $22,300       | $25,300                | :                     |
|  +--------------------------------------------------------+- - - - - - - - - - -  |
|  (Solid Blue Boundary Line)                                                       |
+-----------------------------------------------------------------------------------+

```

:::tip
Drag any blue boundary line with your mouse to instantly scale or re-adjust print boundaries.
:::

<br />
<AdsComponent />
<br />

## 3. Show / Hide Display Elements

Under the **View** tab in the **Show** group, you can toggle key interface elements to customize your workspace or create clean screens for presentations and dashboard reporting:


```

+-------------------------------------------------------------+
| View Tab -> Show Group:                                     |
| [X] Gridlines     [X] Formula Bar     [X] Headings          |
+-------------------------------------------------------------+

```

* **Gridlines:** Controls cell border lines on screen. (Uncheck for executive dashboard views).
* **Formula Bar:** Shows or hides the cell entry and formula bar above the grid.
* **Headings:** Shows or hides row numbers (`1, 2, 3...`) and column letters (`A, B, C...`).

## 4. Using Custom Views

**Custom Views** allow you to save specific display settings—such as current view mode, hidden rows/columns, filter states, print areas, and zoom levels—and switch between them instantly without reconfiguring settings manually.


```

+-------------------------------------------------------+
| Custom Views                                        X |
+-------------------------------------------------------+
| Views:                                                |
|   Executive Summary (Hidden Detail Rows)              |
|   Full Audit Mode (All Rows & Formulas Visible)       |
|   Print View (Filtered to Active Region)              |
|                                                       |
| [ Show ]     [ Close ]     [ Add... ]     [ Delete ]  |
+-------------------------------------------------------+

```

### How to Create a Custom View:
1. Configure your worksheet layout (e.g., set specific row filters, hide unnecessary columns, and choose a zoom setting).
2. Go to **View** > **Custom Views**.
3. Click **Add...**.
4. Type a distinct name for your view (e.g., `Executive_Summary`).
5. Select whether to include **Print settings** and **Hidden rows, columns, and filter settings**.
6. Click **OK**.

:::note 
Custom Views are disabled if your workbook contains an official Excel Data Table (`Ctrl` + `T`). Convert tables back to normal ranges if you require Custom Views.
:::

## 5. Zoom & Window Controls

To manage large datasets across complex workbooks or multiple displays, use the **Zoom** and **Window** controls on the **View** tab.


```
+-----------------------------------------------------------------------------------+
| View Tab -> Window Group:                                                         |
| [ New Window ]   [ Arrange All ]   [ Freeze Panes v ]   [ Split ]   [ Hide ]      |
+-----------------------------------------------------------------------------------+

```

### Window Management Tools
* **New Window:** Opens an additional window displaying the current active workbook. This enables you to view two different tabs of the *same file* side-by-side simultaneously.
* **Arrange All:** Automatically tiles, stacks, or cascades all open Excel windows across your monitor.
* **Freeze Panes:** Keeps top rows or left columns locked in place while scrolling through large datasets.
* **Split:** Divides the active worksheet window into multiple scrollable panes.

<br />
<AdsComponent />
<br />

## Summary Best Practices

* Use **Normal View** for bulk data entry and formula building to maintain high performance.
* Switch to **Page Break Preview** to visually adjust page breaks prior to printing or saving as PDF.
* Hide **Gridlines** and **Headings** on the View tab when designing executive dashboards.
* Use **New Window** to view two different sheets from the same workbook side-by-side.
* Leverage **Custom Views** to quickly switch between detailed analytical views and clean presentation summaries.