const mongoose = require ('mongoose');

const commentsSchema = new mongoose.Schema(
    {
        movieId: {
            type: String,
            required: true,
        },
        commenterId: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
            trim: true,
            maxlenght: 150,
        }
    }
)