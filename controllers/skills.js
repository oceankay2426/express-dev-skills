const skill= require('../models/skill');
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
        skills: skill.getAll()
    });
}