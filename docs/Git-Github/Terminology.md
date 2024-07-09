# Terminology

# Repository

A repository is a collection of files and directories that are stored together. It is a way to store and manage your code. A repository is like a folder on your computer, but it is more than just a folder. It can contain other files, folders, and even other repositories. You can think of a repository as a container that holds all your code.

There is a difference between software on your system and tracking a particular folder on your system. At any point, you can run the following command to see the current state of your repository:

```bash
git status
```

## Your Config Settings

GitHub has a lot of settings that you can change. You can change your username, email, and other settings. Whenever you checkpoint your changes, Git will add some information about you, such as your username and email, to the commit. There is a git config file that stores all the settings that you have changed. You can make settings like what editor you would like to use, etc. There are some global settings and some repository-specific settings.

Let's set up your email and username in this config file. I would recommend you create an account on GitHub and then use the email and username that you have created.

```bash
git config --global user.email "your-email@example.com"
git config --global user.name "Your Name"
```

Now you can check your config settings:

```bash
git config --list
```

This will show you all the settings that you have changed.

## Creating a Repository

Creating a repository is a process of creating a new folder on your system and initializing it as a Git repository. It's just a regular folder to code your project; you are just asking Git to track it. To create a repository, you can use the following command:

```bash
git status
git init
```

The `git status` command will show you the current state of your repository. The `git init` command will create a new folder on your system and initialize it as a Git repository. This adds a hidden `.git` folder to your project.

## Commit

A commit is a way to save your changes to your repository. It is a way to record your changes and make them permanent. You can think of a commit as a snapshot of your code at a particular point in time. When you commit your changes, you are telling Git to save them in a permanent way. This way, you can always go back to that point in time and see what you changed.

## Stage

Staging is a way to tell Git to track a particular file or folder. You can use the following command to stage a file:

```bash
git add <file> <file2>
git status
```

Here we are initializing the repository and adding a file to the repository. Then we can see that the file is now being tracked by Git. Currently, our files are in the staging area; this means that we have not yet committed the changes but are ready to be committed.

## Commit

```bash
git commit -m "commit message"
git status
```

Here we are committing the changes to the repository. We can see that the changes are now committed to the repository. The `-m` flag is used to add a message to the commit. This message is a short description of the changes that were made. You can use this message to remember what the changes were. Missing the `-m` flag will result in an action that opens your default settings editor, which is usually VIM. We will change this to VSCode in the next section.

## Logs

```bash
git log
```

This command will show you the history of your repository. It will show you all the commits that were made to the repository. You can use the `--oneline` flag to show only the commit message. This will make the output more compact and easier to read.

## gitignore

`.gitignore` is a file that tells Git which files and folders to ignore. It is a way to prevent Git from tracking certain files or folders. You can create a `.gitignore` file and add a list of files and folders to ignore by using the following example:

Example `.gitignore` file:

```
node_modules
.env
.vscode
```

[Author: @root-0101](https://github.com/root-0101)
