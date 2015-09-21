app.config(function($stateProvider) {
    $stateProvider.state("confirmation", {
        url: "/confirmation/:id",
        templateUrl: "js/orders/confirmation.html",
        controller: "ConfirmationCtrl",
        resolve: {
            order: function(OrderFactory, $stateParams) {
                return OrderFactory.getOne($stateParams.id);
            },
            user: function(AuthService) {
                return AuthService.getLoggedInUser();
            }
        }
    });
});
