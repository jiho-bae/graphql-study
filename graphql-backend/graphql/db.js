import fetch from "node-fetch";

const BASE_URL = "https://yts.mx/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json?`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json?`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json?`;

export const getMovies = (limit, rating) => {
  let REQUEST_URL = LIST_MOVIES_URL;
  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  return fetch(REQUEST_URL)
    .then((res) => res.json())
    .then((json) => json.data.movies);
};

export const getMovie = (id) => {
  let REQUEST_URL = MOVIE_DETAILS_URL;
  REQUEST_URL += `movie_id=${id}`;
  return fetch(REQUEST_URL)
    .then((res) => res.json())
    .then((json) => json.data.movie);
};

export const getSuggestions = (id) => {
  let REQUEST_URL = MOVIE_SUGGESTIONS_URL;
  REQUEST_URL += `movie_id=${id}`;
  return fetch(REQUEST_URL)
    .then((res) => res.json())
    .then((json) => json.data.movies);
};
