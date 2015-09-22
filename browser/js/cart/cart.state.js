app.config(function($stateProvider) {
    $stateProvider.state('cart', {
        url: '/cart',
        templateUrl: 'js/cart/cart.html',
        controller: 'CartController',
        resolve: {
            user: function(AuthService) {
                return AuthService.getLoggedInUser()
            },
            cart: function(user, ProductFactory, localStorageService) {
            	var itemCart = user ? (user.cart || []) : (localStorageService.get('items') || []);

            	return Promise.all(itemCart.map(item => {
            		var q = item.quantity;
            		return ProductFactory.getOne(item._id)
            		.then(result => ({
            			product: result,
            			quantity: q
            		}))
            	}));
            }
        }
    })
})
