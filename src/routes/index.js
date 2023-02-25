const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const userRouter = require('./user');

function route(app) {

  app.use('/user', userRouter)
  app.use('/courses', coursesRouter)

  //   app.get('/news', function (req, res) {
  //     res.render('news');
  //   })
  app.use('/news', newsRouter);

  // app.get('/search', function (req, res) {
  //     console.log('query parameters', req.query)
  //     res.render('search');
  // })
  // app.get('/', function (req, res) {
  //     res.render('home');
  // })

  //Example middleware:
  //sau path có thể có nhiều function, function trước gọi next() thì sẽ đi tiếp vào function sau
  app.get('/middleware', 
    function (req, res, next) {
      if(['vethuong', 'vevip'].includes(req.query.ve)){
        req.modify = 'Modify'
        return next()  //sẽ chạy vào function tiếp theo
      }
      res.status(403).json({message: 'Fail'})
    },
    function (req, res, next) {
      res.json({message: 'Success', modify: req.modify})
    }
  )

    // Example dùng middleware cho toàn bộ trang web
    /*
    khai báo 1 function middleware : ví dụ function auth
    app.use(auth)
    */

  app.use('/', siteRouter);
}

module.exports = route;
