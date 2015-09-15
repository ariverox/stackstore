app.config(function($stateProvider) {

	$stateProvider.state('products', {
		url: '/products',
		templateUrl: 'js/products/products.html',
		controller: 'ProductsCtrl'
	});

});


app.controller('ProductsCtrl', function($scope, ProductFactory) {

	ProductFactory.getAll().then(function(stuff) {
		$scope.products = stuff;
	})

})

	

app.factory('ProductFactory', function($http) {

	return {
		getAll: function(categories) {
			var config = {params: {}};
			if (categories && categories.length) {
				config = {params: {categories: categories}};
			}
			return $http.get('/api/products', config).then(function(res) {
				return res.data;
			})
		},
		getOne: function getOne (id) {
		  return $http.get('/api/products/' + id).then(function (response) {
		    return response.data;
		  });
		},
		remove: function remove (id) {
		  return $http.delete('/api/products/').then(function (response) {

		  });
		},
		add: function add (product) {
		  return $http.post('/api/products/').then(function (product) {
		    return product;
		  });
		},
		update: function update (id, product) {
		  return $http.put('/api/products/').then(function (response) {
		    return response.data;
		  });
		}
	}

});