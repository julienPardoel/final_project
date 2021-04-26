module.exports.commentPost = (req, res) => {
    
    const newComment = new commentsModel({
        movieId: req.body.movieId,
        commentsId: req.body.commentsId,
        message: req.body.message,
      });
  
    try {
        const comment = await newComment.save();
        return res.status(201).json(comment);
    } catch (err) {
      return res.status(400).send(err);
    }
  };

  // module.exports.getComments = (req, res) => {
  //   commentsModel.find()
  // }