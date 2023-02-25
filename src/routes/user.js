const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/UserController');

    router.get('/storage/courses', userController.storageCourses);
    router.get('/trash/courses', userController.trashCourses);

module.exports = router;
