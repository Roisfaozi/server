<h1 align="center">
  Backend With Nodejs
</h1>

<p align="center"><img src="https://yt3.ggpht.com/ytc/AKedOLT7YD9x6PiR-CfbBbFC3wz2WatiIZFrI_I0v-6k=s900-c-k-c0x00ffffff-no-rj" width="400px" alt="Arkademylogo.svg" /></p>

<p align="center">
    <a href="https://www.roisfaozi.com/" target="blank">My Website</a>
    ·
    <a href="https://www.roisfaozi.com/">Join With Us</a>
    ·
</p>

## Ticktizt Movie Rest API

This repository contains the backend code for the Ticktizt Movie Rest API. It serves as the server-side implementation to handle movie-related operations.

## 🛠️ Installation Steps

1. Clone the repository

```bash
git clone https://github.com/Roisfaozi/server.git
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Run the app

```bash
npm start
```

🌟 You are all set!

## 🚀 Features

- Endpoint for retrieving movie information
- Endpoint for schedule information
- Endpoint for booking system for movie
- Integration with PostgreSQL for data storage

## 🌐 API Endpoints

### Movie

- GET /movies: Retrieve a list of movies with pagination
- GET /movies/search: Retrieve movies information from title
- GET /movies/sort: Filtering list of movies
- POST /movies: Add a new movie
- PUT /movies/:id: Update details of a specific movie
- DELETE /movies/:id: Delete a movie by ID

### Schedule

- GET /schedules: Retrieve a list of movie schedules with pagination
- GET /schedules/:id: Retrieve details of a specific schedule
- POST /schedules: Add a new movie schedule
- PUT /schedules/:id: Update details of a specific schedule
- DELETE /schedules/:id: Delete a movie schedule by ID

### Booking

- GET /bookings: Retrieve a list of bookings with pagination
- GET /bookings/:id: Retrieve details of a specific booking
- POST /bookings: Make a new booking
- PUT /bookings/:id: Update details of a specific booking
- DELETE /bookings/:id: Cancel a booking by ID

### User

- GET /users: Retrieve a list of users with pagination
- GET /users/:id: Retrieve details of a specific user
- POST /users: Add a new user
- PUT /users/:id: Update details of a specific user
- DELETE /users/:id: Delete a user by ID

Feel free to customize the endpoints and add more details based on your specific requirements for the Schedule, Booking, and User functionalities.

## 💻 Built with

- [Nodejs](https://nodejs.org/en): JavaScript runtime
- [Express](https://expressjs.com/): Web framework
- [Postgres](https://www.postgresql.org/): DBMS

<hr>
<p align="center">
Developed with ❤️ in Indonesia 	🇮🇩 ny Rois Faozi
</p>
