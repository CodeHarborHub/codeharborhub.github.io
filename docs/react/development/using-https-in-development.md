---
id: using-https-in-development
title: Using HTTPS in Development
sidebar_label: HTTPS in Development
sidebar_position: 4
tags: [react, create-react-app, https, development, environment-variables, ssl, certificate, custom-certificate, environment, npm, package.json, .env, create-react-app, CRA, development-server, HTTPS, SSL, SSL certificate, self-signed certificate, custom SSL certificate, environment variables, HTTPS environment variable, SSL_CRT_FILE, SSL_KEY_FILE, start script, .env file, environment variables, environment variables in Create React App, CRA documentation, custom environment variables]
description: "Learn how to serve your Create React App over HTTPS in development. This is useful when you need to send requests to an API server that requires HTTPS, or when you want to test your site using a secure connection."
---

When you're developing a website using Create React App (CRA), you might need to serve your pages over HTTPS instead of HTTP. This is especially important if you're using the "proxy" feature to send requests from your development server to an API server that requires HTTPS.

### Starting the Development Server with HTTPS

To start the development server with HTTPS, follow these steps:

1. Open your command prompt or terminal.

2. Set the `HTTPS` environment variable to `true`. This tells the development server to use HTTPS.
   - **Windows (cmd.exe):**
     ```cmd
     set HTTPS=true
     ```

   - **Windows (PowerShell):**
     ```PowerShell
     $env:HTTPS = "true"
     ```

   - **Linux, macOS (Bash):**
     ```sh
     export HTTPS=true
     ```

3. Start the development server by running the following command:
   ```sh
   npm start
   ```

   After executing this command, the development server will serve your pages over HTTPS using a self-signed certificate. It's important to note that self-signed certificates are not trusted by default, so your web browser will display a warning when accessing the page. You can safely proceed past the warning to view your site.

### Using a Custom SSL Certificate

If you prefer to use a custom SSL certificate instead of the self-signed certificate, you can follow these additional steps:

1. Set the `HTTPS` environment variable to `true`, as explained in the previous section.

2. Set the `SSL_CRT_FILE` and `SSL_KEY_FILE` environment variables to the paths of your custom certificate and key files.
   - **Linux, macOS (Bash):**
     ```bash
     export HTTPS=true
     export SSL_CRT_FILE=path/to/cert.crt
     export SSL_KEY_FILE=path/to/cert.key
     ```

   Replace `path/to/cert.crt` with the actual path to your SSL certificate file, and `path/to/cert.key` with the path to your SSL key file.

3. Start the development server by running the following command:
   ```sh
   npm start
   ```

   With these environment variables set, the development server will use your custom SSL certificate for HTTPS connections.

To avoid having to set the environment variables every time you start the development server, you have two options:

1. Update the `start` script in your `package.json` file to include the environment variables. Here's an example of how the `start` script could look:
   ```json
   {
     "start": "HTTPS=true SSL_CRT_FILE=path/to/cert.crt SSL_KEY_FILE=path/to/cert.key react-scripts start"
   }
   ```

   Replace `path/to/cert.crt` with the actual path to your SSL certificate file, and `path/to/cert.key` with the path to your SSL key file.

2. Create a `.env` file in your project's root directory and set the `HTTPS` variable to `true`:
   ```
   HTTPS=true
   ```

   This approach is useful if you want to keep your environment variables separate from the `package.json` file. However, remember to keep your `.env` file private and never commit it to a public repository.

For more detailed information on using environment variables in Create React App (CRA), you can refer to the [official CRA documentation on adding custom environment variables](https://create-react-app.dev/docs/adding-custom-environment-variables).