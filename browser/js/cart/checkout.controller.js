app.controller('CheckoutCtrl', function($scope, localStorageService, OrderFactory, UserFactory, ProductFactory, AuthService, $state, user, cart) {

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
        $scope.toCheckout.shippingDate = new Date(Date.parse($scope.toCheckout.timestamp) + (24*60*60000)*2);     // 2 days after order is submitted
        $scope.toCheckout.deliveryDate = new Date(Date.parse($scope.toCheckout.timestamp) + (24*60*60000)*4);     // 4 days after order is submitted
        $scope.toCheckout.subtotal = itemsInCart.reduce(((a, b) => a + (b.product.price * b.quantity)), 0);

        $scope.toCheckout.name = $scope.user ? $scope.user.name : '';
        $scope.toCheckout.email = $scope.user ? $scope.user.email : '';
        $scope.toCheckout.shippingAddress = $scope.user ? $scope.user.address : '';

    }

    $scope.submitOrder = function() {
        $scope.toCheckout.orderNumber = Math.floor(Math.random()*100000000000000);
        if ($scope.user) $scope.toCheckout.user = $scope.user._id;


        var orderId;

        // Update inventory stock for all purchased items
        Promise.all($scope.toCheckout.items.map(item => {
            return ProductFactory.update(item.product._id, {stock: item.product.stock - item.quantity});
        }))
        .then(function() {
        // Submit the order
            $scope.toCheckout.items.forEach(item => {
                item.product = item.product._id;
            })
            return OrderFactory.submitOrder($scope.toCheckout);          
        })
        .then(function(order) {
        // Empty cart; if user is logged in, save order in user's order history
            orderId = order._id;
            if ($scope.user) {
                if (!$scope.user.orders) $scope.user.orders = [];
                $scope.user.orders.push(order._id);
                return UserFactory.update($scope.user._id, {orders: $scope.user.orders, cart: []});
            }
            else localStorageService.set('items', []);
        })
        .then(function() {
        // Redirect to order confirmation page
            $state.go('confirmation', {id: orderId});
        })

        console.log('frontend submitted:', $scope.toCheckout);
    }

    setupCart();

});
