const schoolController = require("../controllers/schoolController.js")

module.exports = app => {
  app.get('/', (req, res) => res.redirect('/school')),
  app.get('/school', schoolController.getSchoolIndexPage)
}
