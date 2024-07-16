---
id: lesson-1
title: "Margin and Padding Utilities"
sidebar_label: Spacing and Sizing
sidebar_position: 1
description: "Margin and Padding Utilities"
tags: [courses,tailwind,Spacing,Sizing ,beginner-level,Introduction]
---
 
Tailwind CSS provides a comprehensive set of utilities for controlling the spacing around and within elements using margin and padding classes.

##### Margin
Use the `m-{size}` classes to apply margin on all sides of an element. You can also apply margin specifically to each side:
- `mt-{size}` for top margin
- `mr-{size}` for right margin
- `mb-{size}` for bottom margin
- `ml-{size}` for left margin
- `mx-{size}` for horizontal margin (left and right)
- `my-{size}` for vertical margin (top and bottom)

```html
<div class="m-4">Margin on all sides</div>
<div class="mt-2 mb-4">Top and bottom margin</div>
<div class="mx-6">Horizontal margin</div>
<div class="ml-8">Left margin</div>
```

##### Padding
Use the `p-{size}` classes to apply padding on all sides of an element. You can also apply padding specifically to each side:
- `pt-{size}` for top padding
- `pr-{size}` for right padding
- `pb-{size}` for bottom padding
- `pl-{size}` for left padding
- `px-{size}` for horizontal padding (left and right)
- `py-{size}` for vertical padding (top and bottom)

```html
<div class="p-4">Padding on all sides</div>
<div class="pt-2 pb-4">Top and bottom padding</div>
<div class="px-6">Horizontal padding</div>
<div class="pl-8">Left padding</div>
```

##### Sizes
Tailwind CSS provides spacing scale values that you can use for margin and padding:
- `0` - `0`
- `1` - `0.25rem`
- `2` - `0.5rem`
- `3` - `0.75rem`
- `4` - `1rem`
- `5` - `1.25rem`
- `6` - `1.5rem`
- `8` - `2rem`
- `10` - `2.5rem`
- `12` - `3rem`
- `16` - `4rem`
- `20` - `5rem`
- `24` - `6rem`
- `32` - `8rem`
- `40` - `10rem`
- `48` - `12rem`
- `56` - `14rem`
- `64` - `16rem`
- `auto` - `auto`

```html
<div class="m-4">Margin of 1rem</div>
<div class="p-8">Padding of 2rem</div>
```