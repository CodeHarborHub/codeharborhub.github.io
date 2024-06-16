---
id: deployment
title: Deployment in Create React App
sidebar_label: Deployment
sidebar_position: 1
tags: [react, create-react-app, deployment, vercel, hosting, deployment-platform, production, build, optimization, deployment-steps, deployment-guide, deployment-process, deployment-platforms, deployment-tutorial, deployment-instructions, deployment-in-react, deployment-in-CRA, deployment-in-Create-React-App, Vercel, Vercel-deployment, Vercel-tutorial, Vercel-guide, Vercel-deployment-guide, Vercel-deployment-tutorial, Vercel-deployment-instructions, Vercel-deployment-process, Vercel-deployment-platform, Vercel-deployment-steps]
description: "Learn how to deploy your Create React App to the internet using Vercel. Follow the steps to optimize your app, choose a deployment platform, and deploy your app with Vercel."
---


Congratulations, Coders! You've built an amazing React application using Create React App (CRA), and now it's time to show it to the world. In this guide, we'll walk you through the process of deploying your React app step by step, sprinkled with some fun details along the way!

## What is Deployment?

Imagine you've cooked a delicious pizza, and now you want to share it with your friends at a party. Deployment is like serving your app to the internet so that anyone can access it using a web browser. Just like your friends can enjoy the pizza without knowing the recipe, users can use your app without seeing its code!

## Prerequisites

Before we begin, make sure you have the following:

**1. Your completed React app:** If you haven't built it yet, check out our guides on [creating a React app](../getting-started/getting-started.md) and [building components](../building-your-app/importing-a-component) to get started.

**2. A version control system:** If you haven't set up Git yet, don't worry! It's like a time-travel machine for your code, allowing you to go back in time if needed.

## Step 1: Optimize Your App

Before deployment, let's optimize your React app to make it run faster and smoother. This way, users won't have to wait long for your app to load!

**Fun Fact:** Optimizing your app is like making your pizza taste even better by adding extra cheese and your favorite toppings!

To optimize, open your terminal and navigate to your project's root directory. Run the following command:

```bash
npm run build
```

This will create a production-ready version of your app with minimized code and optimized assets. The build folder will be generated, ready for deployment.

## Step 2: Choose a Deployment Platform

Now that your app is ready to be served, you need to choose a platform to deploy it. There are several options, but for simplicity, we'll use Vercel, a fantastic platform that makes deployment a breeze.

**Fun Fact:** Vercel is like a magical teleportation device for your app. It will take your app from your computer to the internet in seconds!

Sign up for a Vercel account at [vercel.com](https://vercel.com) if you haven't already. Don't worry; it's free for most small projects!

## Step 3: Deploy with Vercel

Once you have a Vercel account, follow these simple steps to deploy your app:

1. Install the Vercel CLI (Command-Line Interface) by running this command:

```bash
npm install -g vercel
```

2. Log in to your Vercel account using the CLI:

```bash
vercel login
```

3. Now, it's time to deploy your app! Run this command in your project's root directory:

```bash
vercel --prod
```

**Fun Fact:** Deploying with Vercel is like putting your pizza in a high-speed delivery drone. It will fly your app to the cloud, where users can access it globally!

4. Vercel will provide you with a unique URL for your deployed app. Share this URL with your friends, family, and the world!

## Step 4: Celebrate!

You did it! Your React app is now live on the internet, and anyone can access it. Take a moment to celebrate your achievement!

**Fun Fact:** Celebrating is like enjoying a slice of pizza after all your hard work. You deserve it!

## Updating Your App

As you continue to improve your app, you might want to deploy new versions. Don't worry; it's as easy as eating a second slice of pizza!

1. Make your changes to the app.

2. Run the build command again:

```bash
npm run build
```

3. Deploy the updated app to Vercel:

```bash
vercel --prod
```

Vercel will take care of updating your app, and the new version will be live in no time!

## Conclusion

You've learned how to deploy your Create React App like a pro! Remember, the more you practice deploying apps, the better you'll become at it. So keep building, optimizing, and deploying!

**Fun Fact:** Just like mastering the art of making pizza, deploying apps will make you a coding maestro!