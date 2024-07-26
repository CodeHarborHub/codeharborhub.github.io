---
id: Deploy Python Flask App on Heroku
title: how to deploy a flask app on Heroku
sidebar_label: Flask App on Heroku
sidebar_position: 11
tags: [flask, python, heroku ]
description: In this tutorial, you will learn about deployment offlask app on Heroku.
---

 Flask is based on the Werkzeug WSGI toolkit and Jinja2 template engine. Both are Pocco projects. This article revolves around how to deploy a flask app on Heroku. To demonstrate this, we are first going to create a sample application for a better understanding of the process. 

The Prerequisites are-
1.Python
2.pip
3.Heroku CLI
4.Git

### Deploying Flask App on Heroku

Let’s create a simple flask application first and then it can be deployed to heroku. Create a folder named “eflask” and open the command line and cd inside the “eflask” directory. Follow the following steps to create the sample application for this tutorial.

 # STEP 1 :
  Create a virtual environment with pipenv and install Flask and Gunicorn .

 # STEP 2 : 
 Create a “Procfile” and write the following code. 

 # STEP 3 :
  Create “runtime.txt” and write the following code.

 # STEP 4 : 
 Create a folder named “app” and enter the folder

 # STEP 5 : 
 Create a python file, “main.py” and enter the sample code.

 # STEP 6 :
 Get back to the previous directory “eflask”.Create a file“wsgi.py” and insert the following code.

 # STEP 7 :
  Run the virtual environment.

# STEP 8 :
 Initialize an empty repo, add the files in the repo and commit all the changes.

# STEP 9 : 
Login to heroku CLI 

# STEP 10 : 
Push your code from local to the heroku remote. 
