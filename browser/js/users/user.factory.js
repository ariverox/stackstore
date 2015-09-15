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

  return {
    getOne: getOne,
    getAll:getAll
  }

})
