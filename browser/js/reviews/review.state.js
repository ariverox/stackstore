app.config(function($stateProvider) {
    $stateProvider.state('review', {
        url: '/review/:id',
        templateUrl: 'js/reviews/review.html',
        controller: 'ReviewCtrl',
        resolve: {
        	product: function(ProductFactory, $stateParams) {
        		return ProductFactory.getOne($stateParams.id);
        	},
            user: function(AuthService) {
                return AuthService.getLoggedInUser();
            },
            reviews: function(ReviewFactory, $stateParams) {
                return ReviewFactory.getAllForProduct($stateParams.id);
            }
        }
    });
});
