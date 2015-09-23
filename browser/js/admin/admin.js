app.controller('AdminController', function($scope, ProductFactory, OrderFactory, UserFactory, $rootScope, orders, users, products) {
  console.log($rootScope)



  $scope.isCollapsed = false
  $scope.isCollapsed1 = false;
  $scope.isCollapsed2 = false;

  $scope.orders = orders;
  $scope.products = products;
  $scope.users = users;

  $scope.addForm = {};

  $scope.countries = Object.keys(ProductFactory.countryData);


  $scope.addProduct = function() {

    if ($scope.addForm.categories) 
        $scope.addForm.categories = $scope.addForm.categories.split(',');
    else $scope.addForm.categories = [];
    $scope.addForm.reviews = [];

    console.log($scope.addForm);

    ProductFactory.add($scope.addForm).then(function(form) {
      console.log('submitted:',form);
    }, function(err) {
      console.log(err);
    })
  }

  $scope.displayUsername = function(username) {
    return username ? username : 'Guest';
  }

  $scope.displayGuestOrders = function() {
    if (!orders) return;
    return orders.filter(function(order) {
      return !order.user;
    })
  }
  $scope.guestOrders = $scope.displayGuestOrders();

})




app.config(function($stateProvider) {

  $stateProvider.state('admin', {
    url: '/admin',
    templateUrl: 'js/admin/admin.html',
    controller: 'AdminController',
    resolve: {
        user: function(AuthService) {
            return AuthService.getLoggedInUser()
        },
        isAdmin: function(user){
          if (!user.isAdmin) throw new Error("Unauthorized");
          return;
        },
        orders: function(OrderFactory) {
          return OrderFactory.getAll();
        },
        users: function(UserFactory) {
          return UserFactory.getAll();
        },
        products: function(ProductFactory) {
          return ProductFactory.getAll();
        }
    }

  })
})
