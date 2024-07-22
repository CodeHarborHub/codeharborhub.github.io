---
id: lesson-1
title: "Angular Components"
sidebar_label: Components
sidebar_position: 1
description: "Angular Components"
tags: [courses,beginner-level,Interaction ,Angular Components,Introduction]
---



#### Creating Components

To create a new component in Angular, you can use Angular CLI or manually create the necessary files.

**Using Angular CLI**:
```bash
ng generate component component-name
```

This command generates the following files:
- `component-name.component.ts`: The TypeScript class for the component.
- `component-name.component.html`: The HTML template for the component.
- `component-name.component.css`: The CSS styles for the component.
- `component-name.component.spec.ts`: The test file for the component.

**Example**:
```bash
ng generate component hello-world
```

**Manual Creation**:
1. Create a new folder for the component.
2. Create the component's TypeScript class, HTML template, and CSS file.
3. Register the component in a module.

Example of a manually created component:

`hello-world.component.ts`:
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
  message: string = 'Hello, World!';
}
```

`hello-world.component.html`:
```html
<p>{{ message }}</p>
```

`hello-world.component.css`:
```css
p {
  font-size: 20px;
  color: blue;
}
```

`app.module.ts` (Registering the component):
```typescript
import { HelloWorldComponent } from './hello-world/hello-world.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent
  ],
  ...
})
export class AppModule { }
```