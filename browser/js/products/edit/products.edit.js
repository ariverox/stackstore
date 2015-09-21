app.config(function($stateProvider){

  $stateProvider.state('editProduct', {
    url: '/products/:id/edit',
    templateUrl: 'js/products/edit/products.edit.html',
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