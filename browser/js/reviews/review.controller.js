app.controller('ReviewCtrl', function($scope, product, user, reviews, ReviewFactory, ProductFactory, $state) {

	$scope.product = product;
	$scope.user = user;
	$scope.countryData = ProductFactory.countryData;

	// body for posting new reviews
	$scope.newReview = {
		user: $scope.user,
		product: $scope.product
	};

	$scope.submitReview = function() {

		$scope.newReview.rating = Number($scope.newReview.rating);
		$scope.newReview.timestamp = new Date();


		ReviewFactory.addOne($scope.newReview)
		.then(function(review) {
			if (!$scope.product.reviews) $scope.product.reviews = [];
			$scope.product.reviews.push(review._id);
			return ProductFactory.update($scope.product._id, {reviews: $scope.product.reviews});
		})
		.then(function() {
			$state.go('detail', {id: $scope.product._id});
		});

	}


})