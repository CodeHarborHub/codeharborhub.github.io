Getting started with github
===========================

What is Github?
---------------

Github is a web-based Git repository hosting service. It is a popular platform for developers to collaborate on projects and to share code. Github provides a user-friendly interface for managing and tracking changes to your code, as well as a platform for hosting and sharing your projects with others.

Some other alternative of Github are:

-   Gitlab
-   Bitbucket
-   Azure Repos
-   Gitea

But mainstream popular tool these days is Github.

Github Account
--------------

Creating a Github account is free and easy. You can create an account by visiting the [Github website](https://github.com/) and clicking on the "Sign up" button. You will be prompted to enter your email address and password, and then you will be redirected to the Github homepage.

Once you have created an account, you can start using Github to host and collaborate on your projects. Github provides a variety of features and tools that make it easy to manage and track your code, including issues, pull requests, and code reviews.

Configure your config file
--------------------------

If you havn't done it already, you need to configure your git config file. You can do this by running the following command:

Terminal window

```
git config --global user.email "your-email@example.com"git config --global user.name "Your Name"
```

This will set your email and name as your global settings. You can change these settings later by running the following command:

Terminal window

```
git config --global user.email "your-email@example.com"git config --global user.name "Your Name"
```

Now you can check your config settings:

Terminal window

```
git config --list
```

This will show you all the settings that you have changed.

Setup ssh key and add to github
-------------------------------

If you haven't done it already, you need to setup ssh key and add it to your github account. You can do this by following the instructions on the [Github website](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

You can find the exact steps on the website for both Windows and MacOS. The steps are same for both, only apple users need to add the ssh key to their keychain.

### Step 1: Generate a new SSH key

To generate a new SSH key, open the terminal and run the following command:

Terminal window

```
ssh-keygen -t ed25519 -C "your-email@chaicode.com"
```

Here ed25519 is the type of key that you are generating. This creates a new SSH key, using the provided email as label.

### Save the key

After generating the key, you need to save it to your computer. You can do this by running the following command:

> Enter a file in which to save the key (/Users/YOU/.ssh/id_ALGORITHM): [Press enter]

At the prompt you can enter passphrase for the key or you can leave it blank. If you leave it blank, the key will be saved without a passphrase.

### Add key to your ssh-agent

After saving the key, you need to add it to your ssh-agent. You can do this by running the following command:

Here it is best to refer above link for more information, as Github has a lot of information on this. There is no point in repeating it here.

### Add key to github

Use the webui to add the key to your github account. You can do this by following the instructions on the [Github website](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account?tool=webui).

Adding code to remote repository
--------------------------------

Now that you have setup your ssh key and added it to your github account, you can start pushing your code to the remote repository.

Create a new Repo on your system first, add some code and commit it.

Terminal window

```
git initgit add <files>git commit -m "commit message"
```

### Check remote url setting

You can check the remote url setting by running the following command:

Terminal window

```
git remote -v
```

This will show you the remote url of your repository.

### Add remote repository

You can add a remote repository by running the following command:

> `git remote add origin <remote-url>`

Here `<remote-url>` is the url of the remote repository that you want to add and origin is the name of the remote repository. This origin is used to refer to the remote repository in the future.

Terminal window

```
git remote add origin https://github.com/hiteshchoudhary/chai-something.git
```

### Push code to remote repository

> git push remote-name branch-name

Here `remote-name` is the name of the remote repository that you want to push to and `branch-name` is the name of the branch that you want to push.

Terminal window

```
git push origin main
```

### Setup an upstream remote

Setting up an upstream remote is useful when you want to keep your local repository up to date with the remote repository. It allows you to fetch and merge changes from the remote repository into your local repository.

To set up an upstream remote, you can use the following command:

Terminal window

```
git remote add upstream <remote-url>
```

or you can use shorthand:

Terminal window

```
git remote add -u <remote-url>
```

You can do this at the time of pushing your code to the remote repository.

Terminal window

```
git push -u origin main
```

This will set up an upstream remote and push your code to the remote repository.

This will allow you to run future commands like `git pull` and `git push` without specifying the remote name.

Get code from remote repository
-------------------------------

There are two ways to get code from a remote repository:

-   fetch the code
-   pull the code

Fetch the code means that you are going to download the code from the remote repository to your local repository. Pull the code means that you are going to download the code from the remote repository and merge it with your local repository.

![Git and Github](https://docs.chaicode.com/_astro/pullfetch.Oeq0Q8Tl_Z17HYnP.svg)

### Fetch code

To fetch code from a remote repository, you can use the following command:

Terminal window

```
git fetch <remote-name>
```

Here `<remote-name>` is the name of the remote repository that you want to fetch from.

### Pull code

To pull code from a remote repository, you can use the following command:

Terminal window

```
# git pull <remote-name> <branch-name>git pull origin main
```

Here `<remote-name>` is the name of the remote repository that you want to pull from and `<branch-name>` is the name of the branch that you want to pull.