---
id: lesson-3
title: "Creating Responsive and Accessible Components"
sidebar_label: Responsive and Accessible
sidebar_position: 3
description: "Creating Responsive and Accessible Components"
tags: [courses,tailwind,Responsive & Accessible,intermediate-level,Introduction]
--- 
 
When designing components, it’s important to ensure they are both responsive and accessible.

##### Making Components Responsive
Use Tailwind’s responsive utilities to adjust styles based on screen size.

**Example: Responsive Card Component**:
```html
<div class="max-w-sm mx-auto p-4">
  <div class="bg-white shadow-md rounded-lg p-6">
    <h2 class="text-xl font-bold mb-2">Responsive Card</h2>
    <p class="text-gray-700 mb-4">This card adjusts its width on different screen sizes.</p>
    <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
      Learn More
    </button>
  </div>
</div>
```

##### Ensuring Accessibility
Use semantic HTML and ARIA attributes to make components accessible.

**Example: Accessible Button**:
```html
<button aria-label="Close" class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-200">
  Close
</button>
```

**Example: Accessible Modal**:
```html
<Dialog open={isOpen} onClose={closeModal} aria-labelledby="modal-title" aria-describedby="modal-description">
  <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
  <div className="fixed inset-0 flex items-center justify-center">
    <Dialog.Panel className="bg-white rounded-lg p-6">
      <Dialog.Title id="modal-title" className="text-lg font-bold">Dialog Title</Dialog.Title>
      <Dialog.Description id="modal-description">This is a description.</Dialog.Description>
      <button onClick={closeModal} className="mt-4 bg-blue-500 text-white rounded px-4 py-2">
        Close
      </button>
    </Dialog.Panel>
  </div>
</Dialog>
```

#### Practical Example: Combining Everything
Here’s an example that combines reusable components with responsiveness and accessibility:

```html
<div class="flex flex-wrap justify-center">
  <div class="max-w-sm p-4">
    <div class="bg-white shadow-md rounded-lg p-6">
      <h2 class="text-xl font-bold mb-2">Card Title</h2>
      <p class="text-gray-700 mb-4">This is a simple card component using Tailwind CSS.</p>
      <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
        Learn More
      </button>
    </div>
  </div>
  <div class="max-w-sm p-4">
    <div class="bg-white shadow-md rounded-lg p-6">
      <h2 class="text-xl font-bold mb-2">Another Card</h2>
      <p class="text-gray-700 mb-4">This card is also styled consistently.</p>
      <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
        Learn More
      </button>
    </div>
  </div>
</div>
```

By focusing on building reusable components and ensuring they are responsive and accessible, you can create a cohesive design system using Tailwind CSS.