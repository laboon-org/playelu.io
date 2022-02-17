
import { create } from 'apisauce';

// define the api
// google sheet api
const restApi = create({
  baseURL: "https://laboon.as.r.appspot.com",
  headers: { Accept: "application/json" },
});

// TODO: 2nd api
// TODO: 3rd api

export default restApi;