---
id: lesson-3
title: "Event Emitters"
sidebar_label: Event Emitters
sidebar_position: 3
description: "Event Emitters"
tags: [courses,intermediate-level,Basic Structure,Introduction]
---
 
Event emitters are used to emit custom events from child components to parent components.

**Child Component**:
```typescript
// child.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<button (click)="sendMessage()">Send Message</button>`
})
export class ChildComponent {
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Hello from Child');
  }
}
```

**Parent Component**:
```typescript
// parent.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <app-child (messageEvent)="receiveMessage($event)"></app-child>
    <p>{{message}}</p>
  `
})
export class ParentComponent {
  message: string;

  receiveMessage($event: string) {
    this.message = $event;
  }
}
```

