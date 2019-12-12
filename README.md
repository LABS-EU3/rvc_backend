# ForkBook Backend
## Recipe Version Control

This is the backend code for the ForkBook application, you can find the latest deploy here: 

## **Team**

## **Project Overview**

[Trello Board](https://trello.com/b/V74GJ53f/labs)  
[Product Vision Development](https://www.notion.so/EU3-Recipe-Version-Control-78e62a961eee4f059e1f02c7dcb6d73b)  
[UX Desgin](https://www.figma.com/file/rJzG4mFCWol5kJ0suycSfS/Forkbook?node-id=123%3A200)

Eating and by extension cooking should be a fun activity. If cooking isn’t fun why eat?
The aim of this project is to make cooking fun, seamless, and most importantly personal.

### Basic Features

- User should be able to sign up and login
- User should be able to easily create a recipe
- User should be able to view recipes
- User should be able to save a (reference) recipe to their cookbook
- User should be able to view their cookbook

- User should be able to create a new version of a recipe

### Advanced Features

- User can search for specific ingredients and/or categories
- User should be able to search for their desired recipe
- User can exclude certain ingredients from search
- User can make their recipe private or public
- User can enter in a different unit and the application will convert the unit

## **Tech Stack**

 Back end built using:
  - NodeJS
  - Express
  - Knex
  - PostgreSQL

Addional Technologies:
  - eslint
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

![](https://i.imgur.com/zDQyQgE.png)