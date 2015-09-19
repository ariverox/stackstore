app.config(function($stateProvider) {

	$stateProvider.state('products', {
		url: '/products',
		templateUrl: 'js/products/products.html',
		controller: 'ProductsCtrl',
		resolve: {
			product: function() {
				// this only exists so 'product' can be injected as a
				// dependency into ProductsCtrl, so the product detail
				// page can use it
			}
		}
	});

});