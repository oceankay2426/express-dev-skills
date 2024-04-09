const skills = [
    {id: 125223, skill: 'Ride Motorcycles', done: true},
    {id: 127904, skill: 'Fly', done: false},
    {id: 139608, skill: 'zookeeper', done: false}
  ];
	
  module.exports = {
    getAll,
    getOne
  };
function getOne(id){
    id = parseInt(id);
    return skills.find((skill) => skill.id === id)
}	

  function getAll() {
    return skills;
  }