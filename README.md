# BagPack – Online Backpack Store

[Polish version](README.pl.md)

Live demo:  
https://bagpack-best-selection-of-backpacks.onrender.com

Repository:  
https://github.com/dbednarczyk99/BagPack---online-backpack-store

---

## Project Description

BagPack – Online Backpack Store is an **e-commerce application** that allows users to browse backpack products, add items to the cart, and place orders.

The project was created as:
- a final project for a course,
- a portfolio project (fullstack).

The backend of the application is built with **NestJS**, using **Prisma ORM** and a **PostgreSQL** database, while the frontend is developed in **React** with **Redux** for state management.

---

## Features

- browsing the product list
- categorization of products
- product details view
- adding products to the cart
- cart management (quantity changes, item removal)
- order submission
- customer data handling
- responsive user interface

---

## Technologies

### Backend
- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL
- REST API
- class-validator
- CORS

### Frontend
- React
- TypeScript
- Redux + Redux Thunk
- React Router
- Bootstrap / React-Bootstrap
- Sass (SCSS)

---

## Local Project Setup

### Requirements
- Node.js (recommended LTS version)
- npm
- PostgreSQL

### Repository Cloning
```bash
git clone https://github.com/dbednarczyk99/BagPack---online-backpack-store.git
cd BagPack---online-backpack-store
```

### Environment Variables Configuration
The project requires a .env file, which is not included in the repository.
Create a .env file in the root directory of the project:
```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
```
Example local configuration:
```bash
DATABASE_URL="postgresql://postgres:password@localhost:5432/bagpack"
```

### Backend – NestJS
```bash
npm install
npx prisma migrate dev
npm run start:dev
```

The backend will be available at:
http://localhost:8000

The API is accessible under the prefix:
http://localhost:8000/api

### Frontend – React
```bash
cd client
npm install
npm start
```

The frontend will be available at:
http://localhost:3000

### Production Version

In the production version:
- the React frontend is built using npm run build,
- the NestJS backend serves the frontend static files from the client/build directory,
- the application runs as a single, integrated service (backend + frontend).

### Data Model

The application handles:
- products (backpacks) with categories,
- roduct images,
- shopping cart,
- orders and order items,
- customer data (address, email, phone number).

## Project Status
The project has an educational and portfolio character.
It is a fully working MVP application, ready for further development.

# Author
Daniel Bednarczyk
[LinkedIn](https://www.linkedin.com/in/danielbednarczyk99)
[GitHub](https://github.com/dbednarczyk99)