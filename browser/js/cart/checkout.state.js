app.config(function($stateProvider) {
    $stateProvider.state("checkout", {
        url: "/checkout",
        templateUrl: "js/cart/checkout.html",
        controller: "CheckoutCtrl"

    });
});

app.controller('CheckoutCtrl', function($scope, $stateParams){
		$scope.items = $stateParams.items
		$scope.submitOrder = function(){
			
		}
});