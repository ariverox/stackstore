app.factory('OrderFactory', function($http) {

return {
   getOne: function (id) {
    return $http.get('/api/orders/' + id).then(function(response) {
      return response.data;
    });
  },

   getAll: function() {
    return $http.get('/api/orders').then(function(response) {
      return response.data;
    });
  },


 submitOrder: function(order) {
    return $http.post('/api/orders', order).then(function(response) {
      console.log('backend order posted');
      return response.data;
    });
    }
  }

});

