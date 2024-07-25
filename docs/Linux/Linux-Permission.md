

## File Permissions

In Linux, each file and directory has three types of permissions assigned to it: **read**, **write**, and **execute**. These permissions are represented by characters and determine what actions users and groups can perform on the file.

### Permission Representation

- **r**: Read permission allows viewing the contents of a file or listing a directory.
- **w**: Write permission allows modifying the contents of a file or creating, renaming, or deleting files within a directory.
- **x**: Execute permission allows running a file as a program or entering (accessing) a directory.

### Symbolic Representation

Permissions are represented in a symbolic notation as follows:

- **`-`**: Indicates a regular file.
- **`d`**: Indicates a directory.
- **`r`**: Read permission.
- **`w`**: Write permission.
- **`x`**: Execute permission.
- **`-`**: Indicates absence of a permission.

#### Example:
```
-rw-r--r--
```
In this example:
- The owner has read and write permissions (`rw-`).
- The group has read permission (`r--`).
- Others have read permission (`r--`).

## Changing Permissions

### `chmod` Command

The `chmod` command is used to change permissions of files and directories.

#### Syntax:
```bash
chmod options permissions filename
```

#### Example:
```bash
chmod u+x file.txt
```
This command grants the owner (`u`) execute (`x`) permission on `file.txt`.

## Ownership

### `chown` Command

The `chown` command changes file ownership.

#### Syntax:
```bash
chown owner:group filename
```

#### Example:
```bash
chown john:developers file.txt
```
This command changes the owner of `file.txt` to `john` and assigns the group `developers`.

## Special Permissions

### Set User ID (SUID), Set Group ID (SGID), and Sticky Bit

- **SUID**: Executes a file with the permissions of the file owner.
- **SGID**: Executes a file with the permissions of the group owner.
- **Sticky Bit**: Restricts deletion of files within a directory to only the owner.

#### Example:
```bash
chmod +s file.txt
```
This command sets the SUID bit on `file.txt`.

## Viewing Permissions

### `ls` Command

The `ls` command lists files and directories with their permissions.

#### Example:
```bash
ls -l file.txt
```
This command displays detailed information about `file.txt`, including permissions.

