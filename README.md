# Storm-troopers-api-v1

## Introduction

In this project we developed RESTFUL API using Node.js, Express.js and mongoose.js for NASA SPACE APPS CHALLENGE 2023

## Tools

- Node.js
- Express.js
- MongoDB
- nodemon
- cors
- dotenv
- [Postman](https://www.getpostman.com/)

# REST API

We have collected data from NASA OMNIWEB and NOAA for DSCOVR satellite Datasets.
Collected data cleaned and transformed to JSON for our api modeling.
<br/>

Our Database Datalimits:
<br/>
 `For sphere: <b>01 January 2023 to 5march 2023</b>` 
 <br/>
`For Geomanetic parameter: <b>01 January 2022 to 31 december 2022</b>`

## Get list of DSCOVRS data

### Request

`GET /geomagnetic parameter/`

    http://localhost:8000/api/v1/bar/records?timestamps=2022-03-09

### Response

     "date": "2022-03-09",
    "records": {
        "THETA_AV": [
            -0.3664122176305111,
            -0.41603050767649563,
            .......],
        "PHI_AV": [
            0.825883570360071,
            0.7136175021171174,
            0.6850312226239947,
            ....],
     "KP": [
            0.575,
            0.575,
            0.575
            ...]
     ........
    }

### Request

`GET /sphere/`

    http://localhost:8000/api/v1/sphere/records?timestamps=2023-03-09 01:00:00

### Response

    "_id": "651f42145bbad7bdba195e25",
    "timestamps": "2023-01-01 01:00:00",
    "records": {
        "x": [
            -0.498911,
            -1.13917,
            -0.852719,
            -0.759766,
            .....],
        "y": [
            4.97411,
            4.96549,
            4.96994,
            4.82382,
            ....],
         "z": [
            0.372727,
            -0.694559,
            -1.24658,
            -1.76139,
    }

### Linking

<h4><a href="https://github.com/wali39/stormtroppers">Storm Trooper App Repository</a></h4>
<h4><a href="https://github.com/wali39/stormtroppers">Live Demo </a></h4>
