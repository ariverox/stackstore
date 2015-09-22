app.factory('OrderFactory', function($http) {

  function getOne(id) {
    return $http.get('/api/orders/' + id).then(function(response) {
      return response.data;
    });
  }

  function getAll() {
    return $http.get('/api/orders').then(function(response) {
      return response.data;
    });
  }

  function submitOrder(order) {
    return $http.post('/api/orders', order).then(function(response) {
      console.log('backend order posted');
      return response.data;
    });
  }

  return {
    getOne: getOne,

    getAll: getAll,
    submitOrder: submitOrder,
  };


});
