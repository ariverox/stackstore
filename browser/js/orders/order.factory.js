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
    return $http.post('/api/orders', order).then(function (response) {
      console.log('backend order posted');
      return response.data;
    });
  }

  function updateOrder(orderid, order) {
    return $http.put('/api/orders/' + orderid, order).then(function (response) {
      return response.data;
    });
  }
  return {
    getOne: getOne,
    updateOrder: updateOrder,
    getAll: getAll,
    submitOrder: submitOrder,
  };


});
