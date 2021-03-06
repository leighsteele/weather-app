import axios from "axios";

const BASE_URL = "https://dataservice.accuweather.com";
const API_KEY = process.env.REACT_APP_API_KEY;

export async function fetchAutoCompleteSearch(searchTerm) {
  const result = await axios(`${BASE_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${searchTerm}`);
  return result.data;
}

export async function fetchCurrentCondition(locationKey) {
  const result = await axios(`${BASE_URL}/currentconditions/v1/${locationKey}?apikey=${API_KEY}`);
  return result.data[0];
}

export async function fetchForecast(locationKey) {
  const result = await axios(`${BASE_URL}/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}&metric=true`);
  return result.data.DailyForecasts;
}