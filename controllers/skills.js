const Skill = require('../models/skill');
module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
};

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.tuna);
    res.redirect('/skills');
}

function create(req, res) {
    console.log(req.body);
    // Models are responible for CRUD'ing the data
    Skill.create(req.body);
    // Always do a redirect when data has been changed
    res.redirect('/skills');
}

function newSkill(req, res) {
    res.render('skills/new', { title: 'Your Skill' });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: 'My Awesome Skills Insight'
    });
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'My Awesome Skills'
    });
}