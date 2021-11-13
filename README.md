# Trailers

## Project Description

<p>This project was build using <strong>Nodejs</strong>, Express, Axios and cache-manager to run as a service that aims return movie's trailers when 
receive a valid Viaplay URL by query param </p>

## Prerequisites

* nodejs
* Postman (opcional)

# Instalation

<p>After clone the project, please run: </p>

```bash
npm install
```

# Running the app

```bash
#running on development environment
npm start
```
# executing requests

<p>The app spects a <strong>query param</strong> on a GET request. Example:<p>

```bash
#running on development environment
http://localhost:333/movie?movie_url=movie_url=https://content.viaplay.se/pc-se/film/arrival-2016
```

# Testing

```bash
#Run tests
npm run test

#Run test in watch mode
npm run test:watch

#Run test with coverage report
npm run test:cover
```

## To go to Production

* Only movies was tested;
* Maybe will be necessary to improve the unit tests to a better coverage before the go live;
* Implements a multicache using memory and Redis.