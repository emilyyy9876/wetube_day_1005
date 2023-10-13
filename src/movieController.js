import { getMovieById, getMovies, addMovie } from "./db";

export const home = (req, res) => {
  const movies = getMovies();
  res.render("movies", { movies: getMovies(), pageTitle: "Movies!" });
};
export const movieDetail = (req, res) => {
  const {
    params: { id }
  } = req;
  const movie = getMovieById(id);
  if (!movie) {
    res.render("404", { pageTitle: "Movie not found" });
  }
  return res.render("detail", { movie });
};

/*
Write the controller or controllers you need to render the form
and to handle the submission
*/

export const getAdd = (req, res) => {
  return res.render("add", { pagesTitle: "add movie" });
};
export const postAdd = (req, res) => {
  const request = req.body;
  const genres = req.body.genres;
  const genresList = genres.split(",");
  request.genres = genresList;
  addMovie(request);
  return res.redirect("/");
};
