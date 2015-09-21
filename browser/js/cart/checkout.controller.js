app.controller('CheckoutCtrl', function($scope, localStorageService, OrderFactory, UserFactory, AuthService, $state, user, cart) {

    $scope.user;
    $scope.toCheckout = {};


    function setupCart() {

        $scope.user = user;

        var itemsInCart = cart;

        $scope.toCheckout.items = itemsInCart.map(item => ({
            product: item.product,
            title: item.product.title,
            price: item.product.price,
            quantity: item.quantity
        }));
        $scope.toCheckout.timestamp = new Date();
        $scope.toCheckout.subtotal = itemsInCart.reduce(((a, b) => a + (b.product.price * b.quantity)), 0);

        $scope.toCheckout.name = $scope.user.name;
        $scope.toCheckout.email = $scope.user.email;
        $scope.toCheckout.shippingAddress = $scope.user.address;

        //console.log('SCOPE USER:', $scope.user);
    }

    $scope.submitOrder = function() {
        $scope.toCheckout.orderNumber = Math.floor(Math.random()*100000000000000);
        if ($scope.user) $scope.toCheckout.user = $scope.user._id;

        $scope.toCheckout.items.forEach(item => {
            item.product = item.product._id;
        })

        OrderFactory.submitOrder($scope.toCheckout)
        .then(function(order) {
            if ($scope.user) {
                if (!$scope.user.orders) $scope.user.orders = [];
                $scope.user.orders.push(order._id);
                UserFactory.update($scope.user._id, {orders: $scope.user.orders});
            }
            $state.go('confirmation', {id: order._id});
        })

        console.log('frontend submitted:', $scope.toCheckout);
    }

    setupCart();

});
