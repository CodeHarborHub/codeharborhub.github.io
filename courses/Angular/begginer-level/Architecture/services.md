---
id: lesson-4
title: "Services and Dependency Injection"
sidebar_label: Services
sidebar_position: 4
description: "Services and Dependency Injection"
tags: [courses,beginner-level,Services,Introduction]
---



Services are classes that provide shared functionality across the application. They are typically used for business logic, data access, and other tasks that don't involve the view or user interface.

Dependency Injection (DI) is a design pattern used to implement IoC (Inversion of Control). Angular's DI system allows you to inject services into components, directives, and other services.

Creating a service:
```typescript
// data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private items: string[] = [];

  addItem(item: string) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }
}
```

Using a service in a component:
```typescript
// app.component.ts
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App';
  items: string[];

  constructor(private dataService: DataService) {
    this.items = dataService.getItems();
  }

  addItem() {
    this.dataService.addItem('New Item');
    this.items = this.dataService.getItems();
  }
}
```

In this example, the `DataService` is injected into the `AppComponent` through its constructor. The component then uses the service to manage a list of items. 