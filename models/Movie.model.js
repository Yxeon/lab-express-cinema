const mongoose = require("mongoose");

//Creando el esquema
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
    },

    director: {
        type: String
    },

    stars: [String],

    image: {
        type: String,
    },
    description: {
        type: String,
    },
    showtimes: [String],
});

const movieModel = mongoose.model("movie", movieSchema);
module.exports = movieModel;