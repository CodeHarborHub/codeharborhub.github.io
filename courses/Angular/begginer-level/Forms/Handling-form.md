---
id: lesson-4
title: "Handling Form Submissions"
sidebar_label: Form Submissions
sidebar_position: 4
description: "Handling Form Submissions"
tags: [courses,beginner-level,Form Submissions,Introduction]
---

 
Handling form submissions involves capturing the form data and performing actions such as sending data to a server or updating the UI.

**Template-Driven Form Submission**:
```typescript
onSubmit(form: NgForm) {
  console.log('Form Submitted!', form.value);
}
```

**Reactive Form Submission**:
```typescript
onSubmit() {
  console.log('Form Submitted!', this.userForm.value);
}
```

**Example with HTTP Service**:
```typescript
// app.component.ts
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.http.post('https://example.com/api/users', this.userForm.value)
        .subscribe(response => {
          console.log('User saved successfully', response);
        });
    }
  }
}
```

**Module**:
```typescript
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ],
  ...
})
export class AppModule { }
```
 