---
id: lesson-3
title: "Setting Up the Development Environment"
sidebar_label: Setup
sidebar_position: 3
description: "Setting Up the Development Environment"
tags: [courses,beginner-level,FramWorks,Introduction]
--- 
   
To get started with Next.js, you'll need Node.js and npm (or yarn) installed on your system. Follow these steps to set up a Next.js development environment:

1. **Install Node.js**:
   - Download and install Node.js from [nodejs.org](https://nodejs.org/).

2. **Create a New Next.js Application**:
   - Open your terminal and run the following command to create a new Next.js project:
     ```bash
     npx create-next-app@latest my-next-app
     # or
     yarn create next-app my-next-app
     ```

3. **Navigate to the Project Directory**:
   - Change to the project directory:
     ```bash
     cd my-next-app
     ```

4. **Start the Development Server**:
   - Run the development server:
     ```bash
     npm run dev
     # or
     yarn dev
     ```
   - Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see your Next.js application running.

 
 ![Screenshot from 2024-07-20 07-58-50](https://github.com/user-attachments/assets/5dbec61f-cd1f-458f-9856-e8f9d82af8de)

 5. **Explore the Project Structure**:

   - Next.js projects have the following structure:
     ```
     my-next-app/
     ├── .next/          # Build output
     ├── node_modules/   # Node.js modules
     ├── pages/          # Pages and routes
     ├── public/         # Static assets
     ├── styles/         # Global styles
     ├── .gitignore      # Git ignore file
     ├── package.json    # Project metadata
     ├── README.md       # Project README
     ```

6. **Start Building Your Next.js Application**:

   - You're now ready to start building your Next.js application. Explore the project structure, create new pages, and customize your application as needed.

By following these steps, you can set up a development environment for building Next.js applications and start creating modern web experiences with ease. Happy coding!

## Additional Resources:

- [Next.js Documentation](https://nextjs.org/docs)
