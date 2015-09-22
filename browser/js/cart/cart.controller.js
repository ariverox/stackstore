
 
app.controller('CartController', function($scope, $state, CartFactory, localStorageService, user, cart){
  $scope.user = user;

  var itemsInCart = cart;

  $scope.cart = CartFactory;
  $scope.cart.items = itemsInCart || [];

  $scope.cart.updateCart($scope.user, $scope.cart.items);

  $scope.editing = false;

  $scope.toggleEditing = function() {
  	$scope.editing = !$scope.editing;
  }

  $scope.editQuantity = function(idx, quantity) {
  	CartFactory.editQuantity(idx, quantity);
  	$scope.editing = false;
  }
})
