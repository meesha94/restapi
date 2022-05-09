const { Router } = require("express");

const { addMovie, listMovies, updateMovies, deleteMovies } = require("./movieControllers");

const movieRouter = Router();

movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovies);
movieRouter.put("/movie", updateMovies);
movieRouter.delete("/movie", deleteMovies)

module.exports = movieRouter;