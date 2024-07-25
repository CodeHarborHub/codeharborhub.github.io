---
id: lesson-2
title: "Component Testing"
sidebar_label: Component Testing
sidebar_position: 2
description: "Component Testing"
tags: [courses,intermediate-level,Component Testing,Introduction]
---


Component testing involves testing the component's template, bindings, and interactions.

1. **Setting Up Component Testing**:
   ```typescript
   // app.component.spec.ts
   import { ComponentFixture, TestBed } from '@angular/core/testing';
   import { AppComponent } from './app.component';

   describe('AppComponent', () => {
     let component: AppComponent;
     let fixture: ComponentFixture<AppComponent>;

     beforeEach(async () => {
       await TestBed.configureTestingModule({
         declarations: [AppComponent]
       })
       .compileComponents();
     });

     beforeEach(() => {
       fixture = TestBed.createComponent(AppComponent);
       component = fixture.componentInstance;
       fixture.detectChanges();
     });

     it('should create', () => {
       expect(component).toBeTruthy();
     });

     it('should have a title', () => {
       expect(component.title).toEqual('my-app');
     });

     it('should render title in a h1 tag', () => {
       const compiled = fixture.nativeElement;
       expect(compiled.querySelector('h1').textContent).toContain('Welcome to my-app!');
     });
   });
   ```

