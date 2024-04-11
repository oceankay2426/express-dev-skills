const express= require('../models/express');
module.exports = {
    index,
    show
};
function show(req, res) {
    res.render('express/show', {
        express: express.getOne(req.params.id)
    });

}


function index(req, res) {
    //dont use leading slash when rendering!
    res.render('express/index', {
        expresss: express.getAll()
    });
}