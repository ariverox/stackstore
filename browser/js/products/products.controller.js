app.controller('ProductsCtrl', function($scope, ProductFactory, CartFactory, ) {
	$scope.addToCart = function(thisProduct){
		thisProduct.quantity = thisProduct.quantity || 1;
		CartFactory.items.push(thisProduct);
		CartFactory.totalPrice += (thisProduct.quantity * thisProduct.price);
	}




	$scope.countryData = ProductFactory.countryData;

	$scope.field = "title";
	$scope.country = 'All';

	ProductFactory.getAll().then(function(stuff) {
		$scope.products = stuff;
	})

	// $scope.setFiltersAndOrder = function(categories, country, order) {
	// 	$scope.predicate = p;
	// }

	// $scope.filterByCategories = function(categories) {
	// 	//if (!categories) return $scope.products;
	// 	return $scope.products.filter(function(product) {
	// 		return categories.every(function(category) {
	// 			return product.categories.indexOf(category) != -1;
	// 		})
	// 	})
	// }

})