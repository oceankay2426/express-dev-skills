const skills = [
  { id: 125223, skills: 'Ride Motorcycles', done: true },
  { id: 127904, skills: 'Fly', done: false },
  { id: 139608, skills: 'zookeeper', done: false }
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne
};

function deleteOne(id) {
  id = parseInt(id);
  // Find the index for the todo
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}

function create(skill) {
  // Add the id
  skills.id = Date.now() % 1000000;
  skill.done = false;
  skills.push(skill);
}

function getOne(id) {
  id = parseInt(id);
  return skills.find(skills => skills.id === id)
}

function getAll() {
  return skills;
}