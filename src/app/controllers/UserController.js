const Course = require('../models/Course')
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')

class UserController {
  //[GET] /user/storage/courses
  storageCourses(req, res, next) {
    Promise.all([Course.find({}), Course.countDocumentsDeleted()])
      .then(result => {
        return res.render('user/storage-courses', {courses: multipleMongooseToObject(result[0]), count: result[1]})
      })
      .catch(next)

    // Course.countDocumentsDeleted()
    //   .then((deletedCount) => {

    //   })
    //   .catch(next)

    // Course.find({})
    //   .then(courses => res.render('user/storage-courses', {courses: multipleMongooseToObject(courses)}))
    //   .catch(next)
    
  }

   //[GET] /user/trash/courses
   trashCourses(req, res, next) {
    Course.findDeleted({})
      .then(courses => res.render('user/trash-courses', {courses: multipleMongooseToObject(courses)}))
      .catch(next)
    
  }

}

module.exports = new UserController();
