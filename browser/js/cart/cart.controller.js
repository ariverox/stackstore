app.controller('CartController', function($scope, $state, CartFactory, localStorageService){
  var itemsInCart = localStorageService.get('items');

  $scope.cart = CartFactory;
  $scope.cart.items = itemsInCart || [];

  $scope.cart.updateCart();
})
