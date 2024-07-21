---
id: lesson-1
title: "Making HTTP Requests"
sidebar_label: HTTP Requests
sidebar_position: 1
description: "Making HTTP Requests"
tags: [courses,beginner-level,HTTP Requests,Introduction]
---
 

First, ensure that the `HttpClientModule` is imported in your app module.

1. **Import `HttpClientModule`**:
   ```typescript
   // app.module.ts
   import { HttpClientModule } from '@angular/common/http';

   @NgModule({
     imports: [
       HttpClientModule,
       // other imports
     ],
     // other configurations
   })
   export class AppModule { }
   ```

2. **Inject `HttpClient` in a Service**:
   ```typescript
   // data.service.ts
   import { Injectable } from '@angular/core';
   import { HttpClient } from '@angular/common/http';
   import { Observable } from 'rxjs';

   @Injectable({
     providedIn: 'root'
   })
   export class DataService {
     private apiUrl = 'https://api.example.com/data';

     constructor(private http: HttpClient) {}

     getData(): Observable<any> {
       return this.http.get(this.apiUrl);
     }

     postData(data: any): Observable<any> {
       return this.http.post(this.apiUrl, data);
     }
   }
   ```

3. **Use the Service in a Component**:
   ```typescript
   // app.component.ts
   import { Component, OnInit } from '@angular/core';
   import { DataService } from './data.service';

   @Component({
     selector: 'app-root',
     templateUrl: './app.component.html',
     styleUrls: ['./app.component.css']
   })
   export class AppComponent implements OnInit {
     data: any;

     constructor(private dataService: DataService) {}

     ngOnInit(): void {
       this.dataService.getData().subscribe(response => {
         this.data = response;
       });
     }

     sendData(): void {
       const newData = { name: 'Angular', value: 'Framework' };
       this.dataService.postData(newData).subscribe(response => {
         console.log('Data sent successfully', response);
       });
     }
   }
   ```

4. **Template**:
   ```html
   <!-- app.component.html -->
   <div>
     <h1>Data from API:</h1>
     <pre>{{ data | json }}</pre>
     <button (click)="sendData()">Send Data</button>
   </div>
   ```

