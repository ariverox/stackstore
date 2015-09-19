app.controller('CartController', function($scope, $state, CartFactory, localStorageService){
  var itemsInCart = localStorageService.get('items');

  $scope.cart = CartFactory;
  $scope.cart.items = itemsInCart || [];

  $scope.cart.updateCart();

  $scope.editing = false;

  $scope.toggleEditing = function() {
  	$scope.editing = !$scope.editing;
  }

  $scope.editQuantity = function(idx, quantity) {
  	CartFactory.editQuantity(idx, quantity);
  	$scope.editing = false;
  }
})
