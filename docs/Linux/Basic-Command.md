# Basics of Linux

## Navigating the File System

- `pwd`: Print the current working directory.
- `ls`: List directory contents.
- `cd <directory>`: Change to the specified directory.
- `mkdir <directory>`: Create a new directory.

## File Operations

- `touch <file>`: Create a new empty file.
- `cp <source> <destination>`: Copy files or directories.
- `mv <source> <destination>`: Move or rename files or directories.
- `rm <file>`: Remove files.
- `rm -r <directory>`: Remove directories and their contents.

## Viewing and Editing Files

- `cat <file>`: Display the contents of a file.
- `less <file>`: View file contents page by page.
- `nano <file>`: Edit files using the Nano text editor.
- `vi <file>`: Edit files using the Vi text editor.

## System Information

- `uname -a`: Display system information.
- `top`: Display running processes.
- `df -h`: Display disk space usage.
- `free -h`: Display memory usage.

## File System Structure

Linux has a hierarchical file system. Key directories include:

- `/`: Root directory.
- `/home`: User home directories.
- `/bin`: Essential user binaries.
- `/sbin`: System binaries.
- `/etc`: Configuration files.
- `/var`: Variable data files.
- `/tmp`: Temporary files.
- `/usr`: User programs.

## Permissions

Linux controls access to files and directories using a permission system. Permissions are divided into read (r), write (w), and execute (x) for the owner, group, and others.

- `chmod 755 <file>`: Set read, write, and execute permissions for the owner, and read and execute permissions for the group and others.
- `chown user:group <file>`: Change the owner to `user` and the group to `group`.

## Package Management

Linux distributions use package managers to install, update, and remove software.

### Debian-based (e.g., Ubuntu)
- `apt-get update`: Update package index.
- `apt-get install <package>`: Install a package.
- `apt-get remove <package>`: Remove a package.


