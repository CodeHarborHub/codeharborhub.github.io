---
id: lesson-1
title: "Testing in Angular"
sidebar_label: Testing & Concept
sidebar_position: 1
description: "Testing in Angular"
tags: [courses,intermediate-level,Testing,Introduction]
---
  

Testing is an essential part of the development process, ensuring that your application works as expected. Angular provides built-in support for unit testing with Jasmine and Karma, as well as end-to-end testing with Protractor.

#### Unit Testing with Jasmine and Karma

Jasmine is a behavior-driven development framework for testing JavaScript code, and Karma is a test runner that allows you to run Jasmine tests in multiple browsers.

1. **Setting Up Unit Testing**:
   Angular CLI generates a test setup with Jasmine and Karma out of the box. When you create a new Angular project, the test configuration is already included.

   ```bash
   ng new my-app
   cd my-app
   ng test
   ```

   This command will start the Karma test runner and execute the Jasmine tests.

2. **Writing Unit Tests**:
   Unit tests are written in `.spec.ts` files. The Angular CLI generates a spec file for each component, service, and other classes.

   ```typescript
   // app.component.spec.ts
   import { TestBed, async } from '@angular/core/testing';
   import { AppComponent } from './app.component';

   describe('AppComponent', () => {
     beforeEach(async(() => {
       TestBed.configureTestingModule({
         declarations: [
           AppComponent
         ],
       }).compileComponents();
     }));

     it('should create the app', () => {
       const fixture = TestBed.createComponent(AppComponent);
       const app = fixture.debugElement.componentInstance;
       expect(app).toBeTruthy();
     });

     it(`should have as title 'my-app'`, () => {
       const fixture = TestBed.createComponent(AppComponent);
       const app = fixture.debugElement.componentInstance;
       expect(app.title).toEqual('my-app');
     });

     it('should render title', () => {
       const fixture = TestBed.createComponent(AppComponent);
       fixture.detectChanges();
       const compiled = fixture.debugElement.nativeElement;
       expect(compiled.querySelector('.content span').textContent).toContain('my-app app is running!');
     });
   });
   ```
