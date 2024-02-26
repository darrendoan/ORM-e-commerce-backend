# ORM E-Commerce

## Description 

This project is an ORM (Object-Relational Mapping) based backend for an e-commerce application. It utilizes Sequelize, a popular ORM library for Node.js, to interact with a relational database, manage models, and perform CRUD (Create, Read, Update, Delete) operations.

## Features

- ORM Integration: Utilizes Sequelize ORM to define models, perform database operations, and establish relationships between entities.
- E-Commerce Functionality: Implements core e-commerce features such as managing products, categories, users, orders, and handling authentication.
- RESTful API: Provides a RESTful API interface for frontend applications to interact with the backend.
- Authentication and Authorization: Includes user authentication using JWT (JSON Web Tokens) and role-based access control (RBAC) to restrict access to certain endpoints.
- Validation: Implements input validation and error handling to ensure data integrity and enhance security.
- Pagination and Filtering: Supports pagination and filtering of results to optimize performance and improve user experience.
- Logging and Error Handling: Includes logging mechanisms to track application activities and comprehensive error handling for debugging and user feedback.

## The Challenge
This challenge requires the creation of an e-commerce back-end site that meets specific user requirements. These requirements include the ability to connect to a MySQL database using Sequelize, create a development database that is seeded with test data, sync Sequelize models to the MySQL database, and display data from categories, products, and tags in a formatted JSON. The application should also be able to create, update, and delete data in the database.

## User Story
```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria 
```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Usage 
1) Clone or fork this repository
2) install the node module
3) Make a .env file and insert your database name, user and password
4) change to db folder and open intergrated terminal
5) run the command "mysql -u root -p" to connect to the database
6) source the schema - "source schema.sql"
7) quit out of the mysql terminal by typing quit
8) navigate to root directory
9) run "npm run seed;"
10) start the express server by typing "npm start" or "npm run start"
11) open insomnia or postman to test the various endpoints

## License 
This is licensed under the MIT license

## Credits
I'd like to thank my peers and my instructors for helping me. 