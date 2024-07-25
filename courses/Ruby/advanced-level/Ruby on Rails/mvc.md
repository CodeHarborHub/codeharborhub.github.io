---
id: lesson-2
title: "MVC Architecture in Rails"
sidebar_label: MVC
sidebar_position: 2
description: "MVC Architecture in Rails"
tags: [courses,Advance-level,Introduction]
---  
     

Rails follows the MVC architecture, which divides an application into three interconnected components:

- **Model**: Represents the data and the business logic. Interacts with the database.
- **View**: Handles the display of data. It renders the user interface.
- **Controller**: Manages the flow of data between the Model and the View. It processes user input and updates the Model and View accordingly.

**Example**:
- **Model**: `app/models/user.rb`
  ```ruby
  class User < ApplicationRecord
    validates :name, presence: true
  end
  ```
- **Controller**: `app/controllers/users_controller.rb`
  ```ruby
  class UsersController < ApplicationController
    def index
      @users = User.all
    end

    def show
      @user = User.find(params[:id])
    end

    def new
      @user = User.new
    end

    def create
      @user = User.new(user_params)
      if @user.save
        redirect_to @user
      else
        render 'new'
      end
    end

    private

    def user_params
      params.require(:user).permit(:name)
    end
  end
  ```
- **View**: `app/views/users/index.html.erb`
  ```erb
  <h1>Users</h1>
  <ul>
    <% @users.each do |user| %>
      <li><%= link_to user.name, user_path(user) %></li>
    <% end %>
  </ul>
  ```

#### Building a Simple Rails Application

To build a simple Rails application, follow these steps:

**Step 1: Generate a Resource**:
```bash
rails generate scaffold User name:string
```
This command generates a model, controller, views, and routes for the `User` resource.

**Step 2: Migrate the Database**:
```bash
rails db:migrate
```
This command runs the generated migration to create the `users` table in the database.

**Step 3: Start the Rails Server**:
```bash
rails server
```
The Rails server will start, and you can access your application at `http://localhost:3000`.

**Step 4: Access the Users Resource**:
Open your browser and go to `http://localhost:3000/users`. You can create, read, update, and delete users.

:::tip
1. **Understand the MVC Pattern**: Familiarize yourself with the MVC architecture as it's fundamental to Rails applications.
2. **Leverage Rails Generators**: Use Rails generators to quickly create models, controllers, views, and other components.
3. **Read the Rails Guides**: The official Rails Guides are a comprehensive resource for learning Rails and are constantly updated.
4. **Convention over Configuration**: Rails has many sensible defaults that minimize the need for configuration.
5. **MVC Architecture**: Rails applications are organized using the MVC pattern, promoting a clear separation of concerns.
6. **Built-in Tools and Libraries**: Rails provides a wide array of built-in tools and libraries to speed up development and enforce best practices.
:::