app.config(function($stateProvider) {
    $stateProvider.state("checkout", {
        url: "/checkout",
        templateUrl: "js/cart/checkout.html",
        controller: "CheckoutCtrl",
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

    });
});

