app.config(function($stateProvider) {
    $stateProvider.state("order", {
        url: "/order/:id",
        templateUrl: "js/orders/order.html",
        controller: "OrderCtrl",
        resolve: {
            theOrder: function(OrderFactory, $stateParams) {
                return OrderFactory.getOne($stateParams.id);               
            }
        }
    });
});
