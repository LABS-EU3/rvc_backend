# ForkBook Backend
## Recipe Version Control

This is the backend code for the ForkBook application, you can find the latest deploy here: forkbook.co

## **Team**

## **Project Overview**

[Trello Board](https://trello.com/b/V74GJ53f/labs)  
[Product Vision Development](https://www.notion.so/EU3-Recipe-Version-Control-78e62a961eee4f059e1f02c7dcb6d73b)  
[UX Desgin](https://www.figma.com/file/rJzG4mFCWol5kJ0suycSfS/Forkbook?node-id=123%3A200)

Eating and by extension cooking should be a fun activity. If cooking isn’t fun why eat?
The aim of this project is to make cooking fun, seamless, and most importantly personal.

### **Basic Features**

  - User should be able to sign up and login
  - User should be able to easily create a recipe
  - User should be able to view recipes
  - User should be able to save a (reference) recipe to their cookbook
  - User should be able to view their cookbook
  - User should be able to create a new version of a recipe

### **Advanced Features**

- User can search for specific ingredients and/or categories
- User should be able to search for their desired recipe
- User can exclude certain ingredients from search
- User can make their recipe private or public
- User can enter in a different unit and the application will convert the unit

## **Tech Stack**

### **Back end built using**:
  - NodeJS
  - Express
  - Knex
  - PostgreSQL

### **Additional Features**:
  - dotEnv
  - helmet
  - cross-env
  - jest
  - supertest

## **Environment Variables**

For the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

```
PORT = This is the local port
SECRET = This will be the secret for api keys
DB_ENV = This will indicate the environment of the database
```

## **Folder Structure**

![folder structure](https://i.imgur.com/BYTLxPb.png)

## Code Styling Conventions
  - Tab Size: 2
  - Use the single quote `‘`
  - Always export objects even if only one function is being exported
  - Always name your files accordingly
  - Only one index.js can exist and must be top level
  - `Async/Await` instead of `.then()` etc…

## Code Guidelines
  - TDD is preferable but Test as soon as possible once you finish something
  - Write middlewares to validate as much as possible
  - Always spin the server with debugger, unless you need to use nodemon
  - Install postgreSQL locally and pgAdmin too!
  - **Never work on the same file!**


## NPM Commands


| Command            | Description                                                       |
| -------------------| ----------------------------------------------------------------- |
| `npm run server`   | Starts the server in hot-reload mode for development              |
| `npm test`         | Runs the project test suite                                       |
| `npm start`        | Starts the app server in dev, staging and production environments |
| `npm migration`    | Runs latest migrations for production                             |
| `npm dev-migration`| Runs latest migrations for development                            |
| `npm test-watch`   | Runs the project test watcher suite (hot-reload)                               |
| `npm coverage`     | Reports coverage                                                  |

### Prettier Setup for VS Code

- Install the VS-Code extension below;

  - [x] Name: Prettier - Code formatter
  - [x] Id: esbenp.prettier-vscode
  - [x] Description: VS Code plugin for prettier/prettier
  - [x] Version: 1.9.0
  - [x] Publisher: Esben Petersen
  - [x] [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)


# Contributing
When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change

If you need to work on a file outside your ticket, let know everyone and create a seperate branch for it! Make sure you follow the guidelines below.

## Issue/Bug Request
   
 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests
We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests
If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.
Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines
- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the reviewer to merge it for you.

## Documentation
See [Frontend Documentation]() for details on the frontend of our project.

### Attribution
These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).