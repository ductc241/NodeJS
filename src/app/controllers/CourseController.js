const { response, query } = require("express");

class CourseController{

    //[GET] /news/:slug
    show(req, res) {
        res.send(` this is ${req.params.slug} course`)
    }
}

module.exports  = new CourseController;
