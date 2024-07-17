---
id: lesson-2
title: "Creating Custom Directives"
sidebar_label: Custom Directives
sidebar_position: 2
description: "Creating Custom Directives"
tags: [courses,beginner-level,Custom Directives,Introduction]
---



Custom directives are used to extend HTML by creating reusable components with custom behavior. There are two types of custom directives: attribute directives and structural directives.

**Example: Attribute Directive**:
1. **Create the Directive**:
   ```typescript
   // highlight.directive.ts
   import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

   @Directive({
     selector: '[appHighlight]'
   })
   export class HighlightDirective {
     constructor(private el: ElementRef, private renderer: Renderer2) {}

     @HostListener('mouseenter') onMouseEnter() {
       this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
     }

     @HostListener('mouseleave') onMouseLeave() {
       this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
     }
   }
   ```

2. **Use the Directive**:
   ```html
   <!-- app.component.html -->
   <p appHighlight>Hover over this text to see the highlight effect.</p>
   ```

**Example: Structural Directive**:
1. **Create the Directive**:
   ```typescript
   // unless.directive.ts
   import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

   @Directive({
     selector: '[appUnless]'
   })
   export class UnlessDirective {
     private hasView = false;

     constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

     @Input() set appUnless(condition: boolean) {
       if (!condition && !this.hasView) {
         this.viewContainer.createEmbeddedView(this.templateRef);
         this.hasView = true;
       } else if (condition && this.hasView) {
         this.viewContainer.clear();
         this.hasView = false;
       }
     }
   }
   ```

2. **Use the Directive**:
   ```html
   <!-- app.component.html -->
   <div *appUnless="condition">This content is displayed when condition is false.</div>
   ```

**Component**:
```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  condition = false;
}
```
