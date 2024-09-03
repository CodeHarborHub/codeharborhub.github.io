---
id: create-a-branch
title: Create a Branch
sidebar_label: Create a Branch
sidebar_position: 5
description: Learn how to create a new branch in a Git repository. Create a branch to work on new features, bug fixes, or experiments without affecting the main codebase.
tags: [github, git, version control, collaboration, beginners]
keywords: [github, git, version control, collaboration, beginners, open source, branch, create, new, feature, bug fix]
---

**To work on new features, bug fixes, or experiments in a Git repository, you need to create a new branch. Branches allow you to work on different parts of the codebase without affecting the main branch.**

:::caution Prerequisites
- Make sure you have installed Git on your local machine and configured it with your GitHub account before creating a new branch. If you haven't done this yet, follow the **[official Git installation guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)**.
- Always create a new branch for each new feature, bug fix, or experiment to keep your codebase clean and organized.
- Make sure you have downloaded the VS Code editor from the official website before following this tutorial. If you haven't done this yet, you can download it from **[https://code.visualstudio.com/](https://code.visualstudio.com/)**.
- VS Code is a popular code editor that provides built-in Git support, making it easy to work with Git repositories directly from the editor.
:::

To create a new branch in a Git repository, follow these steps:

1. Open VS Code and open the project you want to create a branch in.

2. Open the terminal in vs code.

3. Run the following command to create a new branch. Replace `branch-name` with the name of your new branch.

    ```bash title="Terminal"
    git checkout -b branch-name
    ```

    :::tip Note: 
    The `-b` flag is used to create a new branch. If you want to switch to an existing branch, you can omit the `-b` flag.
    :::

4. Your new branch is now created. You can start working on new features, bug fixes, or experiments in this branch without affecting the main codebase.

5. To switch between branches, use the `git checkout` command followed by the branch name.

    ```bash title="Terminal"
    git checkout main
    ```

    This command will switch to the `main` branch. Replace `main` with the name of the branch you want to switch to.

6. To list all branches in the repository, use the `git branch` command.

    ```bash title="Terminal"
    git branch
    ```

    This command will list all branches in the repository and highlight the current branch with an asterisk (`*`).

7. To delete a branch, use the `git branch -d` command followed by the branch name.

    ```bash title="Terminal"
    git branch -d branch-name
    ```

    This command will delete the specified branch. Be careful when deleting branches, as this action cannot be undone.

8. To push a new branch to GitHub, use the `git push` command followed by the branch name.

    ```bash title="Terminal"
    git push origin branch-name
    ```

    This command will push the new branch to GitHub, allowing you to collaborate with others and share your work.

Congratulations! You have successfully created a new branch in your Git repository. You can now work on new features, bug fixes, or experiments in this branch without affecting the main codebase.