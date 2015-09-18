app.config(function($stateProvider) {
    $stateProvider.state("checkout", {
        url: "/checkout",
        templateUrl: "js/cart/checkout.html",
        controller: "CheckoutCtrl"

    });
});

