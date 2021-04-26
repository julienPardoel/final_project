const router = require('express').Router();
const commentsController = require('../controllers/comments.controller');

// router.patch('/comments', commentsController.commentsMovie);
router.get('/:id', commentsController.getComments);
router.post('/', commentsController.postComment);

module.exports = router;