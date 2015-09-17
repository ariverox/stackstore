app.controller('ProductsDetailController', function($scope, product, CartFactory){
   $scope.product = product;
    $scope.addToCart = function(thisProduct){
    thisProduct.quantity = thisProduct.quantity || 1;
    CartFactory.items.push(thisProduct);
    CartFactory.totalPrice += (thisProduct.quantity * thisProduct.price);
  };
});
