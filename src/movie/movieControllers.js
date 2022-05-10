const Movie = require("./movieModel");

exports.addMovie = async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body);
        res.status(200).send({movie: newMovie})
    } catch (error) {
        console.log(error);
        res.status(500).send({error: error.message})
    }
};

exports.listMovies = async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.status(200).send({ movies });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
};

exports.updateMovies = async (req, res) => {
    try {
        const updatedMovies = await Movie.updateOne({name: req.body.name},{$set: {name: req.body.newname}});
        res.status(200).send({ updatedMovies });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
};


exports.deleteMovies = async (req, res) => {
    try {
    const deletedMovie = await Movie.deleteOne(req.body);
    res.status(200).send({ deletedMovie });
	} catch (error) {
		console.log(error);
		res.status(500).send({ error: error.message });
	}
};





    