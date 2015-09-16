app.config(function($stateProvider){

  $stateProvider.state('detail', {
    url: '/products/:id',
    templateUrl: 'js/products/detail/products.detail.html',
    controller: 'ProductsDetailController',
    resolve: {
      product: function (ProductFactory, $stateParams) {
 
        return ProductFactory.getOne($stateParams.id);
      }
    }
    });
  
});