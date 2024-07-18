---
id: lesson-4
title: "Component Interaction and Communication"
sidebar_label: Interaction and Communication
sidebar_position: 4
description: "Component Interaction and Communication"
tags: [courses,beginner-level,Interaction ,Communication,Introduction]
---
 

1. **Parent to Child**: Using `@Input` decorator.
2. **Child to Parent**: Using `@Output` decorator and `EventEmitter`.
3. **Sibling Components**: Using a shared service.

**Parent to Child Communication**:
```typescript
// parent.component.html
<app-child [childData]="parentData"></app-child>

// parent.component.ts
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentData: string = 'Data from parent';
}

// child.component.ts
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() childData: string;
}
```

**Child to Parent Communication**:
```typescript
// child.component.ts
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() notifyParent: EventEmitter<string> = new EventEmitter<string>();

  sendNotification() {
    this.notifyParent.emit('Message from child');
  }
}

// child.component.html
<button (click)="sendNotification()">Notify Parent</button>

// parent.component.html
<app-child (notifyParent)="handleNotification($event)"></app-child>

// parent.component.ts
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  handleNotification(event: string) {
    console.log(event);
  }
}
```

**Sibling Components Communication via Service**:
1. **Create a Service**:
   ```typescript
   // message.service.ts
   import { Injectable } from '@angular/core';
   import { Subject } from 'rxjs';

   @Injectable({
     providedIn: 'root'
   })
   export class MessageService {
     private messageSource = new Subject<string>();
     message$ = this.messageSource.asObservable();

     sendMessage(message: string) {
       this.messageSource.next(message);
     }
   }
   ```

2. **Inject and Use the Service in Sibling Components**:
   ```typescript
   // sibling1.component.ts
   import { Component } from '@angular/core';
   import { MessageService } from './message.service';

   @Component({
     selector: 'app-sibling1',
     template: '<button (click)="sendMessage()">Send Message</button>'
   })
   export class Sibling1Component {
     constructor(private messageService: MessageService) {}

     sendMessage() {
       this.messageService.sendMessage('Hello from Sibling 1');
     }
   }

   // sibling2.component.ts
   import { Component, OnInit } from '@angular/core';
   import { MessageService } from './message.service';

   @Component({
     selector: 'app-sibling2',
     template: '<p>{{ message }}</p>'
   })
   export class Sibling2Component implements OnInit {
     message: string;

     constructor(private messageService: MessageService) {}

     ngOnInit() {
       this.messageService.message$.subscribe(message => {
         this.message = message;
       });
     }
   }
   ```
 