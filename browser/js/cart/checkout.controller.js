app.controller('CheckoutCtrl', function($scope, localStorageService, AuthService) {

    $scope.user;
    $scope.toCheckout = {};


    function setupCart() {
        AuthService.getLoggedInUser().then(function(user) {
            $scope.user = user;

            var itemsInCart = localStorageService.get('items');

            $scope.toCheckout.items = itemsInCart.map(item => ({
                product: item,
                quantity: item.quantity
            }));
            $scope.toCheckout.timestamp = new Date();
            $scope.toCheckout.subtotal = itemsInCart.reduce(((a, b) => a + (b.price * b.quantity)), 0);

            $scope.toCheckout.name = $scope.user.name;
            $scope.toCheckout.email = $scope.user.email;
            $scope.toCheckout.address = $scope.user.address;

            console.log('SCOPE USER:', $scope.user);
        });
    }

    $scope.submitOrder = function() {

    }

    setupCart();

});
