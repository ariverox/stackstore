app.controller('ProductsCtrl', function($scope, ProductFactory, CartFactory, localStorageService, product) {

	var itemsInCart = localStorageService.get('items');

	$scope.items = itemsInCart || [];


	$scope.$watch('items', function() {
		localStorageService.set('items', $scope.items);
	}, true);

	function findItemInCart(item) {
		for (var i=0; i < $scope.items.length; i++) {
			if ($scope.items[i]._id === item._id)
				return $scope.items[i];
		}
	}

	$scope.addToCart = function(thisProduct){
		thisProduct.quantity = Number(thisProduct.quantity) || 1;

		var existingItem = findItemInCart(thisProduct);

		if (!existingItem)
			$scope.items.push(thisProduct);
			//CartFactory.items.push(thisProduct);
		else existingItem.quantity += thisProduct.quantity;

		CartFactory.totalPrice += thisProduct.quantity * thisProduct.price;
	}





	$scope.countryData = ProductFactory.countryData;

	$scope.field = "title";
	$scope.country = 'All';

	ProductFactory.getAll().then(function(stuff) {
		$scope.products = stuff;
	})



	// For product detail page
	if (product) $scope.product = product;




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