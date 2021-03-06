# Weather App

## Description

A weather application that allows the user to autocomplete search by city, see the searched city's current weather and 5-day forecast, and add / remove the searched city to / from favorites. On the favorites page the user can see the current weather for each city that has been added to favorites and clicking on a favorite takes the user back to the search page and executes an updated search for that city. 

The app was built using React, Redux and Material-UI, and is based on the AccuWeather API. You can find all the endpoints and the official documentation here: [AccuWeather API Reference](https://developer.accuweather.com/apis).

Important: An API key is required on every request and is available for free on signup at AccuWeather's API website. Make sure to include the API key in the .env file.

## Installation
- Clone the repo in your terminal by clicking the _green_ Code button at the top right and copying the url
- In your terminal, type ```git clone URL```, replacing URL with the url you copied
- This will copy all the files from this repository to your computer
- In your terminal, cd into the directory you just created
- Then cd into the server directory
- Type ```yarn install``` to install all dependencies
- Add the required environment variables to the .env file and save the file
- Last, but not least, type ```yarn start``` to run the app in the browser

Required environment variables:

```
REACT_APP_API_KEY=''
```
