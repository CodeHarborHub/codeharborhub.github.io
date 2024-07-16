---
id: lesson-2
title: "Using Tailwind CSS with Component Libraries"
sidebar_label: Libraries
sidebar_position: 2
description: "Using Tailwind CSS with Component Libraries"
tags: [courses,tailwind,Reusable Component,intermediate-level,Introduction]
--- 
 
 
Tailwind CSS can be integrated with popular component libraries to enhance your design system. Here are a few options:

##### 1. **Headless UI**
Headless UI provides unstyled, fully accessible UI components designed to integrate with Tailwind CSS.

**Example**:
```javascript
import { Dialog } from '@headlessui/react';

<Dialog open={isOpen} onClose={closeModal}>
  <div className="fixed inset-0 bg-black opacity-30" aria-hidden="true" />
  <div className="fixed inset-0 flex items-center justify-center">
    <Dialog.Panel className="bg-white rounded-lg p-6">
      <Dialog.Title className="text-lg font-bold">Dialog Title</Dialog.Title>
      <Dialog.Description>This is a description.</Dialog.Description>
      <button onClick={closeModal} className="mt-4 bg-blue-500 text-white rounded px-4 py-2">
        Close
      </button>
    </Dialog.Panel>
  </div>
</Dialog>
```

##### 2. **Flowbite**
Flowbite is a library of components built with Tailwind CSS that provides pre-designed components.

**Example**:
```html
<div class="card">
  <img src="image.jpg" alt="Image" class="rounded-t-lg">
  <div class="p-5">
    <h5 class="text-lg font-bold">Card Title</h5>
    <p class="text-gray-700">Card content goes here.</p>
  </div>
</div>
```
