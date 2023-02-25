const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

    router.patch('/update/:id', courseController.updateCourse);
    router.patch('/restore/:id', courseController.restoreCourse);
    router.delete('/delete/:id', courseController.deleteCourse);
    router.delete('/delete/force/:id', courseController.deleteForceCourse);
    router.get('/edit/:id', courseController.editCourse);
    router.get('/create', courseController.createCourse);
    router.post('/storage', courseController.storage);
    router.post('/hanlde-form-actions', courseController.handleFormAction);
    router.get('/:slug', courseController.showDetail);

module.exports = router;
