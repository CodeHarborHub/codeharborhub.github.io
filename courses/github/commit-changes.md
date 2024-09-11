---
id: commit-changes
title: Commit Changes
sidebar_label: Commit Changes
sidebar_position: 7
description: Learn how to commit changes to a Git repository using Git. Commit your changes, add a commit message, and keep track of your project history with Git commits.
tags: [github, git, version control, collaboration, beginners]
keywords: [github, git, version control, collaboration, beginners, open source, commit, changes, history, project]
---

**To save your changes to a Git repository, you need to commit them. Committing changes creates a snapshot of your project at a specific point in time, allowing you to track the history of your project and collaborate with others.**

To commit changes to a Git repository, follow these steps:

1. Open your terminal or command prompt on your local machine. Navigate to the directory of your Git repository using the `cd` command.

    ```bash title="Terminal"
    cd path/to/repository
    ```

2. Check the status of your repository to see which files have changed. Use the `git status` command to view the changes that are not yet staged for commit.

    ```bash title="Terminal"
    git status
    ```

    The `git status` command will show you the files that have been modified, added, or deleted since the last commit.

3. Stage the changes you want to commit using the `git add` command. This command adds the changes to the staging area, preparing them for the next commit.

    ```bash title="Terminal"
    git add filename
    ```

    :::tip Note:
    Replace `filename` with the name of the file you want to stage. You can also use `git add .` to stage all changes in the repository.
    :::

4. Commit the changes using the `git commit` command. This command creates a new commit with the changes you staged in the previous step.

    ```bash title="Terminal"
    git commit -m "Add new feature to the project"
    ```

    :::tip Note:
    Replace `"Add new feature to the project"` with a meaningful commit message that describes the changes you made in this commit.
    :::

5. Verify the commit by checking the commit history of your repository. Use the `git log` command to view the commit history, including the commit message, author, date, and commit hash.

    ```bash title="Terminal"
    git log
    ```

    The `git log` command will display a list of commits in reverse chronological order, showing the most recent commits first.

6. Congratulations! You have successfully committed changes to your Git repository. Your project history is now updated with the new commit, and you can continue working on your project with confidence.