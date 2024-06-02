---
id: Next JS
title: Next Js Getting Started
sidebar_label: Next JS
sidebar_position: 26
tags: [NextJS,Routing,Page Routing]
description: This docs contains about the Next JS documentation
---

## Get Started

To start using Aceternity UI in your projects, simply install the library via your preferred package manager:

### Next.js

```bash
npx create-next-app@latest
```
On Installation, you will be prompted to choose a template. Select the default template and proceed with the installation.

```bash
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*

```
After the prompts, `create-next-app` will create a folder with your project name and install the required dependencies.

Create a root layout inside `app/layout.tsx` with the required `<html>` and ``<body>`` tags:

```tsx
// app/layout.tsx

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```
Finally, create a home page `app/page.tsx` with some initial content:

```tsx
// app/page.tsx
export default function Page() {
  return <h1>Hello, Next.js!</h1>
}
```
Now, you can start the development server:

Run `npm run dev` to start the development server.
Visit `http://localhost:3000` to view your application.
Edit `app/page.tsx` (or `pages/index.tsx`) file and save it to see the updated result in your browser.


<a href="https://nextjs.org/docs/app"><img src="emty.png"></a>
