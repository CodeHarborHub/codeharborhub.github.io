---
id: lesson-2
title: "Component Lifecycle Hooks"
sidebar_label: Hooks
sidebar_position: 2
description: "Component Lifecycle HooksAngular Modules"
tags: [courses,beginner-level,Hooks,Introduction]
---

 

Angular provides lifecycle hooks that give you visibility into key moments in a component's lifecycle. Some common hooks include:

1. **ngOnInit**: Called once the component is initialized.
2. **ngOnChanges**: Called when any data-bound property of a directive changes.
3. **ngDoCheck**: Called for every change detection run.
4. **ngOnDestroy**: Called just before the component is destroyed.

Example of using lifecycle hooks:
```typescript
import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: '<p>{{ data }}</p>'
})
export class LifecycleComponent implements OnInit, OnChanges, OnDestroy {
  @Input() data: string;

  constructor() {
    console.log('Constructor called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngOnChanges() {
    console.log('ngOnChanges called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}
```