const mongoose = require ('mongoose');

const commentsSchema = new mongoose.Schema(
    {
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