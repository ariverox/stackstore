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

  function submitOrder(order) {
    return $http.post('/api/orders', order).then(function(response) {
      console.log('backend order posted');
      return response.data;
    });
  }

  return {
    getOne: getOne,
<<<<<<< HEAD:browser/orders/order.factory.js
    getAll:getAll,
    submitStripe: submitStripe
  }
=======
>>>>>>> eb8929b074b25d82a6d41af6e0c66070186f99a9:browser/js/orders/order.factory.js

    getAll: getAll,
    submitOrder: submitOrder,
  };


});
