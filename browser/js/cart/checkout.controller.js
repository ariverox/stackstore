

app.controller('CheckoutCtrl', function($scope, localStorageService, OrderFactory, UserFactory, ProductFactory, AuthService, $state, user, cart, stripe) {

    $scope.user;
    $scope.toCheckout = {};
    $scope.payment = {
        card : {
            number : "4242424242424242",
            cvc : "1234",
            exp_month : "11",
            exp_year : "2016"
        }
    };

    $scope.submitOrder = function() {
       
        $scope.toCheckout.orderNumber = Math.floor(Math.random()*100000000000000);
        if ($scope.user) $scope.toCheckout.user = $scope.user._id;


        var orderId;
        Promise.all($scope.toCheckout.items.map(item => {
            return ProductFactory.update(item.product._id, {stock: item.product.stock - item.quantity});
        }))
        .then(function() {
            $scope.toCheckout.items.forEach(item => {
                item.product = item.product._id;
            })
            return OrderFactory.submitOrder($scope.toCheckout);          
        })
        .then(function(order) {
            if ($scope.user) {
                if (!$scope.user.orders) $scope.user.orders = [];
                $scope.user.orders.push(order._id);
                orderId = order._id;
                return UserFactory.update($scope.user._id, {orders: $scope.user.orders, cart: []});
            }
        })
        .then(function() {
            $state.go('confirmation', {id: orderId});
        })

        console.log('frontend submitted:', $scope.toCheckout);
    }

  $scope.charge = function () {
    return stripe.card.createToken($scope.payment.card)
      .then(function (token) {
        console.log('token created for card ending in ', token.card.last4);
        var payment = angular.copy($scope.payment);
        payment.card = void 0;
        payment.token = token.id;
        return $http.post('/api/striped', payment);
      })
      .then(function (payment) {
        console.log('successfully submitted payment for $', payment.amount);
      })
      .catch(function (err) {
        if (err.type && /^Stripe/.test(err.type)) {
          console.log('Stripe error: ', err.message);
        }
        else {
          console.log('Other error occurred, possibly with your API', err.message);
        }
      });
  };

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

        $scope.toCheckout.name = $scope.user.name;
        $scope.toCheckout.email = $scope.user.email;
        $scope.toCheckout.shippingAddress = $scope.user.address;

    }

    

    setupCart();

});
















