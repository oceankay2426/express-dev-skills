const skill= require('../models/skills');
module.exports = {
    index,
    show
};
function show(req, res) {
    res.render('skill/show', {
        skill: skill.getOne(req.params.id)
    });

}


function index(req, res) {
    //dont use leading slash when rendering!
    res.render('skill/index', {
        skill: skill.getAll()
    });
}