---
id: lesson-3
title: "Service Testing"
sidebar_label: Service Testing
sidebar_position: 3
description: "Service Testing"
tags: [courses,intermediate-level,Service Testing,Introduction]
---
   

Service testing involves testing the business logic and data interactions provided by Angular services.

1. **Setting Up Service Testing**:
   ```typescript
   // data.service.spec.ts
   import { TestBed } from '@angular/core/testing';
   import { DataService } from './data.service';

   describe('DataService', () => {
     let service: DataService;

     beforeEach(() => {
       TestBed.configureTestingModule({});
       service = TestBed.inject(DataService);
     });

     it('should be created', () => {
       expect(service).toBeTruthy();
     });

     it('should return data', () => {
       const data = service.getData();
       expect(data).toEqual(['data1', 'data2', 'data3']);
     });
   });
   ```

   ```typescript
   // data.service.ts
   import { Injectable } from '@angular/core';

   @Injectable({
     providedIn: 'root'
   })
   export class DataService {
     constructor() { }

     getData() {
       return ['data1', 'data2', 'data3'];
     }
   }
   ```