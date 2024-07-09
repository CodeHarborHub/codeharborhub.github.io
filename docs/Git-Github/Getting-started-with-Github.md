# Getting Started with GitHub

## What is GitHub?

GitHub is a web-based Git repository hosting service. It is a popular platform for developers to collaborate on projects and share code. GitHub provides a user-friendly interface for managing and tracking changes to your code, as well as a platform for hosting and sharing your projects with others.

Some other alternatives to GitHub are:

- GitLab
- Bitbucket
- Azure Repos
- Gitea

But the mainstream popular tool these days is GitHub.

## GitHub Account

Creating a GitHub account is free and easy. You can create an account by visiting the [GitHub website](https://github.com/) and clicking on the "Sign up" button. You will be prompted to enter your email address and password, and then you will be redirected to the GitHub homepage.

Once you have created an account, you can start using GitHub to host and collaborate on your projects. GitHub provides a variety of features and tools that make it easy to manage and track your code, including issues, pull requests, and code reviews.

## Configure Your Config File

If you haven't done it already, you need to configure your git config file. You can do this by running the following command:

```bash
git config --global user.email "your-email@example.com"
git config --global user.name "Your Name"
```

This will set your email and name as your global settings. You can change these settings later by running the following command:

```bash
git config --global user.email "your-email@example.com"
git config --global user.name "Your Name"
```

Now you can check your config settings:

```bash
git config --list
```

This will show you all the settings that you have changed.

## Setup SSH Key and Add to GitHub

If you haven't done it already, you need to set up an SSH key and add it to your GitHub account. You can do this by following the instructions on the [GitHub website](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

You can find the exact steps on the website for both Windows and macOS. The steps are the same for both; only Apple users need to add the SSH key to their keychain.

### Step 1: Generate a New SSH Key

To generate a new SSH key, open the terminal and run the following command:

```bash
ssh-keygen -t ed25519 -C "your-email@code.com"
```

Here, `ed25519` is the type of key that you are generating. This creates a new SSH key, using the provided email as a label.

### Save the Key

After generating the key, you need to save it to your computer. You can do this by running the following command:

> Enter a file in which to save the key (/Users/YOU/.ssh/id_ALGORITHM): [Press enter]

At the prompt, you can enter a passphrase for the key or leave it blank. If you leave it blank, the key will be saved without a passphrase.

### Add Key to Your SSH-Agent

After saving the key, you need to add it to your SSH-agent. You can do this by running the following command:

Here it is best to refer to the above link for more information, as GitHub has a lot of information on this. There is no point in repeating it here.

### Add Key to GitHub

Use the web UI to add the key to your GitHub account. You can do this by following the instructions on the [GitHub website](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account?tool=webui).

## Adding Code to Remote Repository

Now that you have set up your SSH key and added it to your GitHub account, you can start pushing your code to the remote repository.

Create a new repository on your system first, add some code, and commit it.

```bash
git init
git add <files>
git commit -m "commit message"
```

### Check Remote URL Setting

You can check the remote URL setting by running the following command:

```bash
git remote -v
```

This will show you the remote URL of your repository.

### Add Remote Repository

You can add a remote repository by running the following command:

```bash
git remote add origin <remote-url>
```

Here, `<remote-url>` is the URL of the remote repository that you want to add, and `origin` is the name of the remote repository. This origin is used to refer to the remote repository in the future.

```bash
git remote add origin https://github.com/username/something.git
```

### Push Code to Remote Repository

```bash
git push origin main
```

Here, `origin` is the name of the remote repository that you want to push to, and `main` is the name of the branch that you want to push.

### Setup an Upstream Remote

Setting up an upstream remote is useful when you want to keep your local repository up to date with the remote repository. It allows you to fetch and merge changes from the remote repository into your local repository.

To set up an upstream remote, you can use the following command:

```bash
git remote add upstream <remote-url>
```

or you can use the shorthand:

```bash
git remote add -u <remote-url>
```

You can do this at the time of pushing your code to the remote repository.

```bash
git push -u origin main
```

This will set up an upstream remote and push your code to the remote repository. This will allow you to run future commands like `git pull` and `git push` without specifying the remote name.

## Get Code from Remote Repository

There are two ways to get code from a remote repository:

- Fetch the code
- Pull the code

Fetching the code means that you are going to download the code from the remote repository to your local repository. Pulling the code means that you are going to download the code from the remote repository and merge it with your local repository.

![Git and GitHub](https://docs.chaicode.com/_astro/pullfetch.Oeq0Q8Tl_Z17HYnP.svg)

### Fetch Code

To fetch code from a remote repository, you can use the following command:

```bash
git fetch <remote-name>
```

Here, `<remote-name>` is the name of the remote repository that you want to fetch from.

### Pull Code

To pull code from a remote repository, you can use the following command:

```bash
git pull <remote-name> <branch-name>
git pull origin main
```

Here, `<remote-name>` is the name of the remote repository that you want to pull from, and `<branch-name>` is the name of the branch that you want to pull.

[Author: @root-0101](https://github.com/root-0101)