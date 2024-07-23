---
id: lesson-2
title: "Setting Up the Development Environment"
sidebar_label: Setup Environment
sidebar_position: 2
description: "Setting Up the Development Environment"
tags: [courses,beginner-level,Basic Structure,Introduction]
---



To set up an Angular development environment, you need to install Node.js and Angular CLI (Command Line Interface).

1. **Install Node.js**: Download and install Node.js from the [official website](https://nodejs.org/). Node.js includes npm (Node Package Manager), which you'll use to install Angular CLI.
2. **Install Angular CLI**:
   ```bash
   npm install -g @angular/cli
   ```
   This command installs Angular CLI globally on your machine.

#### Creating Your First Angular Application

1. **Create a New Angular Project**:
   ```bash
   ng new my-first-app
   ```
   - `ng new` creates a new Angular project.
   - `my-first-app` is the name of your project.
   - Follow the prompts to set up your project with desired features (e.g., routing, stylesheets).

2. **Navigate to Your Project Directory**:
   ```bash
   cd my-first-app
   ```

3. **Serve the Application**:
   ```bash
   ng serve
   ```
   - This command compiles the application and starts a development server.
   - Open a web browser and navigate to `http://localhost:4200/` to see your application running.

4. **Explore the Project Structure**:
   - `src/app`: Contains the main application code.
   - `src/app/app.component.ts`: The main component file.
   - `src/app/app.module.ts`: The root module of the application.
   - `src/app/app.component.html`: The main component template.

5. **Modify the App Component**:
   Open `src/app/app.component.html` and replace its contents with:
   ```html
   <h1>Welcome to My First Angular App!</h1>
   ```
   Save the file and see the changes reflected in your browser.

#### Example of a Simple Component

1. **Generate a New Component**:
   ```bash
   ng generate component hello-world
   ```
   - This command creates a new component named `hello-world` with four files: TypeScript, HTML, CSS, and a spec file for testing.

2. **Use the New Component**:
   Open `src/app/app.component.html` and add the new component selector:
   ```html
   <h1>Welcome to My First Angular App!</h1>
   <app-hello-world></app-hello-world>
   ```

3. **Edit the New Component**:
   Open `src/app/hello-world/hello-world.component.html` and replace its contents with:
   ```html
   <p>Hello, World!</p>
   ```

4. **View the Component in the Browser**:
   Save the files and see the new component displayed in your application.
 