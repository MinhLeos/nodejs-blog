const Course = require('../models/Course')
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')

class CourseController {
   //[DELETE] /courses/delete/:id
   deleteCourse(req, res, next) {
    // //xóa cứng
    // Course.deleteOne({_id: req.params.id})
    //   .then(() => res.redirect('/user/storage/courses')) //hoặc res.redirect('back)
    //   .catch(next)

    //Soft delete with library mongoose-delete
    Course.delete({_id: req.params.id})
      .then(() => res.redirect('/user/storage/courses')) //hoặc res.redirect('back)
      .catch(next)
  }

   //[DELETE] /courses/delete/force/:id
   deleteForceCourse(req, res, next) {
    //xóa cứng
    Course.deleteOne({_id: req.params.id})
      .then(() => res.redirect('/user/trash/courses')) //hoặc res.redirect('back)
      .catch(next)

    // //Soft delete with library mongoose-delete
    // Course.delete({_id: req.params.id})
    //   .then(() => res.redirect('/user/storage/courses')) //hoặc res.redirect('back)
    //   .catch(next)
  }

  //[PATCH] /courses/update/:id
  updateCourse(req, res, next) {
    Course.updateOne({_id: req.params.id}, req.body)
      .then(() => res.redirect('/user/storage/courses')) 
      .catch(next)
  }

  //[PATCH] /courses/restore/:id
  restoreCourse(req, res, next) {
    Course.restore({_id: req.params.id})
      .then(() => res.redirect('/user/trash/courses')) 
      .catch(next)
  }

   //[GET] /courses/edit/:id
   editCourse(req, res, next) {
    Course.findById(req.params.id)
        .then(course => {
            // courses = courses.map(course => course.toObject()) //course la Obj dc tao boi mongoose, co method toObject() de chuyen thanh Object literal
            res.render('courses/edit-course', {course: mongooseToObject(course)})
            // res.json(course)
        })
        .catch(next);
  }

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

  //[GET] /courses/create
  createCourse(req, res, next) {
    // res.json({test: true}); //API
    res.render('courses/create-course')
  }

  //[POST] /courses/storage
  storage(req, res, next) {
    const formData = {...req.body}
    // res.json(formData)
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
    // formData.slug = req.body.name.replaceAll(' ', '-').toLowerCase();
    const course = new Course(formData)
    course.save()
      .then(() => {
        res.redirect('/user/storage/courses')
      })
      .catch(next)
  }

   //[POST] /courses/hanlde-form-actions
   handleFormAction(req, res, next) {
    const formData = {...req.body}
    switch(formData.action){
      case 'delete': {
        Course.delete({_id: {$in: req.body.courseIds}})
          .then(() => res.redirect('/user/storage/courses')) //hoặc res.redirect('back)
          .catch(next)
        break
      }
      default: {
        res.json({message: "Action is invalid"})
      }
    }
    // res.json(formData)
  }
}

module.exports = new CourseController();
