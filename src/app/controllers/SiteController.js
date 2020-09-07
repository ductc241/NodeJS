
class SiteController{

    //[GET] /
    index(req, res) {
        res.render('home')
    }

    //[GET] /search
    search(req, res) {
        res.send('this is a search page')
    }

}

module.exports  = new SiteController;