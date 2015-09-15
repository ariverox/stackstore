app.config(function($stateProvider) {

	$stateProvider.state('products', {
		url: '/products',
		templateUrl: 'js/products/products.html',
		controller: 'ProductsCtrl'
	});

});


app.controller('ProductsCtrl', function($scope, ProductFactory) {

	ProductFactory.getAllProducts().then(function(products) {
		$scope.products = products;
	})

})



app.factory('ProductFactory', function($http) {

	return {
		getAllProducts: function(categories) {
			var config = {params: {}};
			if (categories && categories.length) {
				config = {params: {categories: categories}};
			}
			return $http.get('/api/products', config).then(function(res) {
				return res.data;
			})
		},
	}

});