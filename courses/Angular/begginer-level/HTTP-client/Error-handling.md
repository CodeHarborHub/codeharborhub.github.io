---
id: lesson-4
title: "Error Handling"
sidebar_label: Error Handling
sidebar_position: 4
description: "Error Handling"
tags: [courses,beginner-level,Error Handling,Introduction]
---
 

Handling errors in HTTP requests ensures that your application can gracefully handle unexpected issues.

1. **Error Handling in Service**:
   ```typescript
   // data.service.ts (updated)
   import { Injectable } from '@angular/core';
   import { HttpClient, HttpErrorResponse } from '@angular/common/http';
   import { Observable, throwError } from 'rxjs';
   import { catchError } from 'rxjs/operators';

   @Injectable({
     providedIn: 'root'
   })
   export class DataService {
     private apiUrl = 'https://api.example.com/data';

     constructor(private http: HttpClient) {}

     getData(): Observable<any> {
       return this.http.get(this.apiUrl).pipe(
         catchError(this.handleError)
       );
     }

     postData(data: any): Observable<any> {
       return this.http.post(this.apiUrl, data).pipe(
         catchError(this.handleError)
       );
     }

     private handleError(error: HttpErrorResponse) {
       let errorMessage = 'An unknown error occurred!';
       if (error.error instanceof ErrorEvent) {
         // A client-side or network error occurred.
         errorMessage = `Error: ${error.error.message}`;
       } else {
         // The backend returned an unsuccessful response code.
         errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
       }
       return throwError(errorMessage);
     }
   }
   ```

2. **Displaying Errors in Component**:
   ```typescript
   // app.component.ts (updated)
   import { Component, OnInit } from '@angular/core';
   import { DataService } from './data.service';

   @Component({
     selector: 'app-root',
     templateUrl: './app.component.html',
     styleUrls: ['./app.component.css']
   })
   export class AppComponent implements OnInit {
     data: any;
     error: string;

     constructor(private dataService: DataService) {}

     ngOnInit(): void {
       this.dataService.getData().subscribe(
         response => {
           this.data = response;
         },
         error => {
           this.error = error;
         }
       );
     }

     sendData(): void {
       const newData = { name: 'Angular', value: 'Framework' };
       this.dataService.postData(newData).subscribe(
         response => {
           console.log('Data sent successfully', response);
         },
         error => {
           this.error = error;
         }
       );
     }
   }
   ```

3. **Template**:
   ```html
   <!-- app.component.html (updated) -->
   <div>
     <h1>Data from API:</h1>
     <pre *ngIf="data">{{ data | json }}</pre>
     <p *ngIf="error" class="error">{{ error }}</p>
     <button (click)="sendData()">Send Data</button>
   </div>
   ```
 