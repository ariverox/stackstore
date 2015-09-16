app.config(function($stateProvider) {

	$stateProvider.state('products', {
		url: '/products',
		templateUrl: 'js/products/products.html',
		controller: 'ProductsCtrl'
	});

});


app.controller('ProductsCtrl', function($scope, ProductFactory, $filter) {


	$scope.countryData = ProductFactory.countryData;

	$scope.field = "title";
	$scope.country = 'All';

	ProductFactory.getAll().then(function(stuff) {
		$scope.products = stuff;
	})

	$scope.setFiltersAndOrder = function(categories, country, order) {
		$scope.predicate = p;
	}

	$scope.filterByCategories = function(categories) {
		//if (!categories) return $scope.products;
		return $scope.products.filter(function(product) {
			return categories.every(function(category) {
				return product.categories.indexOf(category) != -1;
			})
		})
	}

})

	

app.factory('ProductFactory', function($http) {
	var countryData = {
		'All': {name: 'All'},
		'Germany': {name: 'Germany', abbr: 'de'},
		'Japan': {name: 'Japan', abbr: 'jp'},
		'Netherlands': {name: 'Netherlands', abbr: 'nl'},
		'Nigeria': {name: 'Nigeria', abbr: 'ng' },
		'Peru': {name: 'Peru', abbr: 'pe'},
		'South Korea': {name: 'South Korea', abbr: 'kr'},
		'Turkey': {name: 'Turkey', abbr: 'tr'},
		'United Kingdom': {name: 'United Kingdom', abbr: 'gb'},
		'United States': {name: 'United States', abbr: 'us'},

	}

	return {
		countryData: countryData,
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