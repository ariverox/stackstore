app.factory('UserFactory', function($http) {

  function getOne(id) {
    return $http.get('/api/users/' + id).then(function(response) {
      return response.data;
    });
  }

  function getAll() {
    return $http.get('/api/users').then(function(response) {
      return response.data;
    });
  }

  function remove (id) {
      return $http.delete('/api/users').then(function (response) {
      });
    }
  function add (product) {
      return $http.post('/api/users').then(function (user) {
        return user;
      });
    }
   function update (id, product) {
      return $http.put('/api/users').then(function (response) {
        return response.data;
      });
    }

  return {
    getOne: getOne,
    getAll:getAll,
    remove: remove,
    add: add,
    update: update
  }

})
