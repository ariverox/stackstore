app.controller('ProductsCtrl', function($scope, ProductFactory, CartFactory, UserFactory, localStorageService, product, user, $state) {

	// If user is logged in, retrieve stored cart information from User model
	if (user) {
		$scope.user = user;
		if (!$scope.user.cart) $scope.user.cart = [];
		$scope.items = $scope.user.cart;
	}
	// If user is not logged in, store cart information in local storage
	else {
		var itemsInCart = localStorageService.get('items');
		$scope.items = itemsInCart || [];
		$scope.$watch('items', function() {
			localStorageService.set('items', $scope.items);
		}, true);
	}

	function findItemInCart(item) {
		for (var i=0; i < $scope.items.length; i++) {
			if ($scope.items[i]._id === item._id)
				return $scope.items[i];
		}
	}

	$scope.addToCart = function(thisProduct){
		thisProduct.quantity = Number(thisProduct.quantity) || 1;

		var existingItem = findItemInCart(thisProduct);

		if (!existingItem) {
			$scope.items.push({
				_id: thisProduct._id,
				quantity: thisProduct.quantity
			});
			if ($scope.user) {
				UserFactory.update($scope.user._id, {cart: $scope.items});
			}
		}
		else existingItem.quantity += thisProduct.quantity;

		CartFactory.totalPrice += thisProduct.quantity * thisProduct.price;
	}


	$scope.text = "dddd";


	$scope.countryData = ProductFactory.countryData;

	$scope.field = "title";
	$scope.country = 'All';

	ProductFactory.getAll().then(function(stuff) {
		$scope.products = stuff;
	})

	// For product detail page
	if (product) $scope.product = product;

	$scope.saveChanges = function() {
		if(typeof product.price !== 'number') product.price = Number(product.price.replace(/[^0-9\.]+/g,""));
		ProductFactory.update(product._id, product)
	};

	$scope.isNum = function (input) {
		return angular.isNumber(input);
	};

	$scope.setStock = function (num) {
		$scope.product.stock = num;
	}

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