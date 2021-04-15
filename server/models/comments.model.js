const mongoose = require ('mongoose');

const commentSchema = new mongoose.Schema(
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
    },
    {
        timestamps: true,
      }
);

module.exports = mongoose.model('comment', commentSchema);