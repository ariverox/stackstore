app.config(function($stateProvider){

  $stateProvider.state('products.detail', {
    url: '/:id',
    templateUrl: '/app/products/detail/todo.detail.html',
    controller: 'ProductsDetailController',
    resolve: {
      product: function (ProductFactory, $stateParams) {
 
        return ProductFactory.getOne($stateParams.id);
      }
    }
  });

});