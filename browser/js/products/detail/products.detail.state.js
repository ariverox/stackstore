app.config(function($stateProvider){

  $stateProvider.state('detail', {
    url: '/products/:id',
    templateUrl: 'js/products/detail/products.detail.html',
    controller: 'ProductsCtrl',
    resolve: {
      product: function (ProductFactory, $stateParams) {
        return ProductFactory.getOne($stateParams.id);
      },
      user: function(AuthService) {
          return AuthService.getLoggedInUser();
      },
    }
    });
  
});