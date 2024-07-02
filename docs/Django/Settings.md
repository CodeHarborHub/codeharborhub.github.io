---
id: settings-in-django
title: Settings In Django
sidebar_label: Settings
sidebar_position: 11
tags: [python,Django Introduction,Settings in Django,Framework]
description: Settings In Django.
---

In Django, settings play a crucial role in configuring and controlling the behavior of your web application. The `settings.py` file in your Django project contains all the configuration settings that Django uses to operate. Here’s a comprehensive overview of the `settings.py` file and the key settings you should be familiar with:

### Structure of `settings.py`

The `settings.py` file is typically located in the main project directory (`project_name/settings.py`). It contains Python code that configures Django's settings. Here’s a simplified structure of a `settings.py` file:

```python
# project_name/settings.py

import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'your_secret_key_here'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'myapp',  # Replace with your app name
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'project_name.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'project_name.wsgi.application'

# Database
# https://docs.djangoproject.com/en/4.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# Password validation
# https://docs.djangoproject.com/en/4.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/4.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.0/howto/static-files/

STATIC_URL = '/static/'

# Default primary key field type
# https://docs.djangoproject.com/en/4.0/ref/settings/#std:setting-DEFAULT_AUTO_FIELD

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
```

### Key Settings Explained

1. **Secret Key (`SECRET_KEY`)**:
   - A secret cryptographic key used for hashing, signing cookies, and other security-related mechanisms. Keep this value secret and never share it publicly.

2. **Debug Mode (`DEBUG`)**:
   - Controls whether Django runs in debug mode (`True` for development, `False` for production). Enable debug mode during development to display detailed error pages and debug information.

3. **Allowed Hosts (`ALLOWED_HOSTS`)**:
   - A list of strings representing the host/domain names that this Django site can serve. Set this to your domain names in production.

4. **Installed Apps (`INSTALLED_APPS`)**:
   - A list of strings representing all Django applications installed and enabled for use in the project.

5. **Middleware (`MIDDLEWARE`)**:
   - A list of middleware classes that process requests and responses. Middlewares are applied in the order they are listed.

6. **Database Configuration (`DATABASES`)**:
   - Specifies the database connection details. By default, Django uses SQLite for development (`'sqlite3'`), but you can configure other databases like MySQL, PostgreSQL, etc.

7. **Templates (`TEMPLATES`)**:
   - Configuration for template engines used in Django. By default, it uses Django’s built-in template engine (`'django.template.backends.django.DjangoTemplates'`).

8. **Static Files (`STATIC_URL`)**:
   - URL prefix for serving static files during development (`'/static/'` by default). Static files are served by Django’s development server.

9. **Internationalization and Localization (`LANGUAGE_CODE`, `TIME_ZONE`, etc.)**:
   - Settings related to language translation (`LANGUAGE_CODE`), timezone (`TIME_ZONE`), and other internationalization features.

10. **Password Validation (`AUTH_PASSWORD_VALIDATORS`)**:
    - A list of validators that validate the strength of user passwords.

11. **Default Primary Key (`DEFAULT_AUTO_FIELD`)**:
    - The type of auto-incrementing primary key used for models created without specifying a primary key type (`'django.db.models.BigAutoField'` by default).

### Additional Settings

- **Logging Configuration**: Configure logging to capture and manage application logs.
- **Email Configuration**: Configure SMTP email settings for sending emails from Django.
- **Security Settings**: Configure security-related settings such as CSRF protection, session security, etc.
- **Cache Settings**: Configure caching backends for caching data to improve performance.

### Customizing Settings

- You can override default settings or define custom settings as per your project requirements. Ensure to follow Django's documentation and best practices when modifying settings to maintain application stability and security.

Understanding and configuring `settings.py` correctly is essential for building and deploying Django applications effectively. It provides the foundational configuration needed to run your Django project in various environments, from development to production.