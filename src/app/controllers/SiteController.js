const Course = require('../models/Course')
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')
class SiteController {
  //[GET] /
  home(req, res, next) {
    // res.json({name: 'test'}) // tra data ve >>> FE nhan data de show neu la CSR >>> Rest API

    //API >>> callback
    // Course.find({}, function (err, courses) {
    //     if(!err) {
    //         res.json(courses)
    //     } else {
    //         next(err) // gọi đến middleware xử lý lỗi
    //         //res.status(400).json({error: 'Error message'})
    //     }
    //   });

    // //API >>> promise
    // Course.find({})
    //     .then(courses => res.json(courses))
    //     .catch(next);
    //     // .catch(err => next(err));

    /* SSR */
    // res.render('home');
    Course.find({})
        .then(courses => {
            // courses = courses.map(course => course.toObject()) //course laf Obj dc tao boi mongoose, co method toObject() de chuyen thanh Object literal
            res.render('home', {courses: multipleMongooseToObject(courses)})
        })
        .catch(next);
  }

  //[GET] /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
