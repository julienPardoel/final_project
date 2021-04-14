const router = require('express').Router();
const commentsController = require('../controllers/comments.controller');

router.patch('/comment-movie', commentsController.commentsMovie);