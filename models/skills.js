const expresss = [
    {id: 125223, expresss: 'Ride Motorcycles', done: true},
    {id: 127904, expresss: 'Fly', done: false},
    {id: 139608, expresss: 'zookeeper', done: false}
  ];
	
  module.exports = {
    getAll,
    getOne
  };
function getOne(id){
    id = parseInt(id);
    return expresss.find((express) => expresss.id === id)
}	

  function getAll() {
    return expresss;
  }