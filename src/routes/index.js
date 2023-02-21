const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
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
  app.use('/', siteRouter);
}

module.exports = route;
