---
id: lesson-3
title: "Dynamic Content with JavaScript"
sidebar_label: Dynamic Content
sidebar_position: 3
description: "Learn to Dynamic Content with JavaScript."
tags: [courses,advance-level,Dynamic Content,Introduction]
---  
  
 

JavaScript allows for dynamic manipulation of HTML content, enabling developers to create interactive web applications. This can involve modifying the DOM, responding to user events, and dynamically generating content.

**1. Changing Text Content:**
```html
<button id="changeText">Change Text</button>
<p id="dynamicText">Original Text</p>

<script>
    document.getElementById('changeText').onclick = function() {
        document.getElementById('dynamicText').textContent = 'Text Changed!';
    };
</script>
```

**2. Creating Elements Dynamically:**
```html
<button id="addElement">Add Element</button>
<div id="container"></div>

<script>
    document.getElementById('addElement').onclick = function() {
        const newElement = document.createElement('p');
        newElement.textContent = 'New Element Added!';
        document.getElementById('container').appendChild(newElement);
    };
</script>
```

**3. Fetching and Displaying Data:**
Using the Fetch API to retrieve data dynamically from an external source.

```html
<button id="fetchData">Fetch Data</button>
<div id="dataContainer"></div>

<script>
    document.getElementById('fetchData').onclick = function() {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => {
                document.getElementById('dataContainer').innerHTML = `
                    <h2>${data.title}</h2>
                    <p>${data.body}</p>
                `;
            });
    };
</script>
```

### Summary Table

| Feature                        | Description                                     |
|--------------------------------|-------------------------------------------------|
| **Embedding JavaScript**       | Inline, internal, or external scripts in HTML. |
| **Using Frameworks**           | Integrate HTML with JavaScript frameworks like React. |
| **Dynamic Content**            | Modify the DOM, create elements, and fetch data dynamically with JavaScript. |

By effectively integrating HTML and JavaScript, developers can create engaging, interactive web applications that enhance user experience and functionality.