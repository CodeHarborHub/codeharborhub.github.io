---
id: lesson-4
title: "Using GraphQL with Angular Components"
sidebar_label: GraphQL Components
sidebar_position: 4
description: "Using GraphQL with Angular Components"
tags: [courses,Advanced-level,GraphQL Components,Introduction]
--- 


1. **Querying Data**:
   ```typescript
   import { Component, OnInit } from '@angular/core';
   import { Apollo, QueryRef } from 'apollo-angular';
   import { GET_ITEMS } from './graphql/queries';

   @Component({
     selector: 'app-item-list',
     templateUrl: './item-list.component.html',
   })
   export class ItemListComponent implements OnInit {
     items: any[] = [];
     loading = true;
     error: any;

     constructor(private apollo: Apollo) {}

     ngOnInit() {
       this.apollo.watchQuery<any>({
         query: GET_ITEMS,
       }).valueChanges.subscribe(({ data, loading, error }) => {
         this.items = data.items;
         this.loading = loading;
         this.error = error;
       });
     }
   }
   ```

   **Template for Querying Data**:
   ```html
   <div *ngIf="loading">Loading...</div>
   <div *ngIf="error">Error: {{ error.message }}</div>
   <ul>
     <li *ngFor="let item of items">
       {{ item.name }} - {{ item.description }}
     </li>
   </ul>
   ```

2. **Mutating Data**:
   ```typescript
   import { Component } from '@angular/core';
   import { Apollo } from 'apollo-angular';
   import { ADD_ITEM } from './graphql/mutations';

   @Component({
     selector: 'app-add-item',
     templateUrl: './add-item.component.html',
   })
   export class AddItemComponent {
     name = '';
     description = '';

     constructor(private apollo: Apollo) {}

     addItem() {
       this.apollo.mutate({
         mutation: ADD_ITEM,
         variables: {
           name: this.name,
           description: this.description,
         },
       }).subscribe(response => {
         console.log('Item added:', response);
       });
     }
   }
   ```

   **Template for Mutating Data**:
   ```html
   <form (submit)="addItem()">
     <label>
       Name:
       <input [(ngModel)]="name" name="name"/>
     </label>
     <label>
       Description:
       <input [(ngModel)]="description" name="description"/>
     </label>
     <button type="submit">Add Item</button>
   </form>
   ```