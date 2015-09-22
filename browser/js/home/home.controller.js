app.controller('HomeController', function($state, $scope, $http, ProductFactory, products) {


  $scope.selected = undefined;
  $scope.products = products;

  $scope.go = function(thing) {
    products.forEach(function(product){
      if(product.title === thing) {
        console.log(product)
        $state.go('detail', {id: product._id})
      }
    })
  }
})
