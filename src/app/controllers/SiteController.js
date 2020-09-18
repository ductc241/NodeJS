const Course = require('../models/Course')


class SiteController{

    //[GET] /
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                courses = courses.map(course => course.toObject());
                res.render('home', {courses});
            })
            .catch(next);
    }

    //[GET] /search
    search(req, res) {
        res.send('this is a search page')
    }

}

module.exports  = new SiteController;