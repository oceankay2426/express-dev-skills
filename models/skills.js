const skills = [
    {id: 125223, skills: 'Ride Motorcycles', done: true},
    {id: 127904, skills: 'Fly', done: false},
    {id: 139608, skills: 'zookeeper', done: false}
  ];
	
  module.exports = {
    getAll,
    getOne
  };
function getOne(id){
    id = parseInt(id);
    return skills.find((skill) => skills.id === id)
}	

  function getAll() {
    return skills;
  }