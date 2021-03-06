app.controller('ProductsCtrl', function($scope, ProductFactory, CartFactory, UserFactory, localStorageService, product, user, $state,ReviewFactory) {

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


	// ReviewFactory.getAll().then(reviews => ReviewFactory.getAverageRating).then(
	// 	function() { $scope.re}
	// )



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
	$scope.category = 'All'
	$scope.allCategories = [];

	ProductFactory.getAll().then(function(stuff) {
		$scope.products = stuff;

		for(var i=0; i< $scope.products.length; i++) {
				$scope.products[i].categories.forEach(function (category) {
				if($scope.allCategories.indexOf(category) === -1) $scope.allCategories.push(category);
			});
		}
		$scope.allCategories.push('All')
	});

	// For product detail page
	if (product) $scope.product = product;

	$scope.saveChanges = function() {
		if(typeof product.price !== 'number') product.price = Number(product.price.replace(/[^0-9\.]+/g,""));
		if(typeof product.categories === 'string') product.categories = product.categories.split(",");
		ProductFactory.update(product._id, product)
	};

	$scope.isNum = function (input) {
		return angular.isNumber(input);
	};

	$scope.setStock = function (num) {
		$scope.product.stock = num;
	}

	$scope.filterBy = function (product) {
		if($scope.country === 'All' && $scope.category === 'All' && product.stock > 0) return true
		else if($scope.country === product.country && $scope.category === 'All') return true
		else if($scope.country === product.country && $scope.category === 'All') return true
		else if($scope.country === 'All' && $scope.category === product.categories[product.categories.indexOf($scope.category)]) return true
		else if($scope.country === product.country && $scope.category === product.categories[product.categories.indexOf($scope.category)]) return true

		return false
	}

	// $scope.showCategories = function(cats) {
	// 	return cats.join(', ');
	// }

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
