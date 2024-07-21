---
id: lesson-2
title: "Dynamic Class Generation"
sidebar_label: Dynamic Class Generation
sidebar_position: 2
description: "Dynamic Class Generation"
tags: [courses,tailwind,Dynamic Class Generation,Advanced-level,Introduction]
--- 


You can generate classes dynamically based on conditions in your JavaScript code.

##### Example: Generating Classes Based on State
###### HTML
```html
<div id="statusMessage" class="text-center p-4 rounded"></div>
```

###### JavaScript
```javascript
const statusMessage = document.getElementById('statusMessage');
const isSuccess = true; // This could be based on some condition in your application

statusMessage.className = isSuccess ? 'bg-green-500 text-white' : 'bg-red-500 text-white';
statusMessage.textContent = isSuccess ? 'Operation Successful' : 'Operation Failed';
```