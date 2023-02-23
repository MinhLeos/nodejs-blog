const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

    router.get('/create', courseController.createCourse);
    router.get('/:slug', courseController.showDetail);

module.exports = router;
