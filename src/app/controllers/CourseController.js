const Course = require('../models/Course')
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')

class CourseController {
  //[GET] /courses/:slug
  showDetail(req, res, next) {
    Course.findOne({slug: req.params.slug})
        .then(course => {
            // courses = courses.map(course => course.toObject()) //course laf Obj dc tao boi mongoose, co method toObject() de chuyen thanh Object literal
            res.render('courses/show-detail', {course: mongooseToObject(course)})
            // res.json(course)
        })
        .catch(next);
  }
  createCourse(req, res, next) {
    res.json({test: true});
  }
}

module.exports = new CourseController();
