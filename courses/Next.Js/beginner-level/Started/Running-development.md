---
id: lesson-2
title: "Running the Development Server"
sidebar_label: Development Server
sidebar_position: 2
description: "Learn Development Server"
tags: [courses,beginner-level,FramWorks,Introduction]
---
 
  

To run the development server and start your Next.js application:

1. Navigate to the project directory:
   ```bash
   cd my-next-app
   ```

2. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. Open your browser and navigate to [http://localhost:3000](http://localhost:3000). You should see your Next.js application running.

#### Building and Deploying a Next.js App

Next.js provides built-in commands to build and deploy your application.

1. **Building the Application**:
   - Run the following command to create an optimized production build:
     ```bash
     npm run build
     # or
     yarn build
     ```
   - This will generate a `.next` directory containing the compiled application.

2. **Starting the Production Server**:
   - After building the application, you can start the production server:
     ```bash
     npm start
     # or
     yarn start
     ```

3. **Deploying the Application**:
   - **Vercel**: Vercel is the company behind Next.js and provides seamless integration for deploying Next.js applications.
     - Install the Vercel CLI:
       ```bash
       npm install -g vercel
       ```
     - Deploy your application:
       ```bash
       vercel
       ```
     - Follow the prompts to link your project to a Vercel account and deploy it.
   
   - **Other Hosting Providers**: Next.js can be deployed on various hosting providers like AWS, Azure, Google Cloud, and DigitalOcean.
     - Deploy the `.next` directory along with your project files to your preferred hosting provider.
     - Ensure the environment supports Node.js and configure the start command to `npm start` or `yarn start`.
 