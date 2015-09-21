app.factory('OrderFactory', function($http) {

  function getOne(id) {
    return $http.get('/api/orders/' + id).then(function(response) {
      return response.data;
    });
  },

  function getAll() {
    return $http.get('/api/orders').then(function(response) {
      return response.data;
    });
  },

  function submitStripe() {
    return $http.post('/api/orders/checkout').then(function(product){
      return response;
    })
  }

  return {
    getOne: getOne,
    getAll:getAll,
    submitStripe: submitStripe
  }

})
