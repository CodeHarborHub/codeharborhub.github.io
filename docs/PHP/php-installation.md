---
id: php-installation
title: PHP - Installation
sidebar_label: PHP - Installation
sidebar_position: 3
tags: [PHP, web development, server-side scripting, programming languages, XAMPP]
---

# PHP - Installation

You can start learning the basics of programming in PHP with the help of any of the online PHP compilers freely available on the Internet. This will help in getting acquainted with the features of PHP without installing it on your computer. Later on, install a full-fledged PHP environment on your local machine.

One such online PHP compiler is provided by Tutorialpoint’s "Coding Ground for Developers". Visit [Tutorialspoint Coding Ground](https://www.tutorialspoint.com/codingground.htm), enter PHP script and execute it.

## PHP Installation

However, to be able to learn the advanced features of PHP, particularly related to the web concepts such as server variables, using backend databases, etc., you need to install the PHP environment on your local machine.

In order to develop and run PHP Web pages, you need to install three vital components on your computer system:

1. **Web Server:** PHP will work with virtually all Web Server software, including Apache, NGINX, or Lighttpd. The most often used web server software is the freely available Apache Server. [Download Apache](https://httpd.apache.org/download.cgi)

2. **Database:** PHP will work with virtually all database software, including MySQL, Oracle, and Sybase. The most commonly used is the freely available MySQL database. [Download MySQL](https://www.mysql.com/downloads/)

3. **PHP Parser:** In order to process PHP script instructions, a parser must be installed to generate HTML output that can be sent to the Web Browser.

Although it is possible to install these three components separately and configure the installation correctly, it is a little complex process, particularly for beginners. Instead, using any all-in-one packaged distribution that contains precompiled Apache, MySQL, and PHP binaries is convenient.

## XAMPP Installation

One popular all-in-one solution is XAMPP, from Apache Friends. It includes Apache, MariaDB (a fork of MySQL), PHP, and Perl. XAMPP is cross-platform, available for Windows, Linux, and OS X.

To download XAMPP, visit the [Apache Friends website](https://www.apachefriends.org/download.html) and download the installer for your operating system.

### Windows Installation

1. Download the installer from [SourceForge](https://sourceforge.net/projects/xampp/).
2. Run the installer and follow the wizard-based installation.
3. Provide administrator access and choose the installation directory (default is "c:\xampp").

### Linux Installation

1. Change the permissions to the installer:

   ```bash
   chmod 755 xampp-linux-*-installer.run
   ```

2. Run the installer:

   ```bash
   sudo ./xampp-linux-*-installer.run
   ```

3. XAMPP is installed in "/opt/lamp" directory.

### OS X Installation

1. Open the DMG image and double-click the image to start the installation process.
2. Start XAMPP using the XAMPP Control Panel.

For detailed instructions on managing servers and PHP with XAMPP, refer to the XAMPP documentation.
