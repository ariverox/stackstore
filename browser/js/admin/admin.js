app.controller('adminController', function($scope, ProductFactory, OrderFactory, UserFactory, $rootScope) {
  console.log($rootScope)



  $scope.isCollapsed = false
  $scope.isCollapsed2 = false;
  $scope.isCollapsed3 = false

  $scope.orders;
  $scope.products;
  $scope.users;

  OrderFactory.getAll()
    .then(orders => $scope.orders = orders)

  UserFactory.getAll()
  .then(users => $scope.users = users)

  ProductFactory.getAll()
    .then(products => $scope.products = products)



})

// app.factory('AdminFactory', function($http) {
//
//   function deleteUser(id) {
//     $http.delete('/api/users/' + id).then(
//
//     )
//
//   }
//
//   function editUser(id) {
//     $http.put('/api/users' + id).then()
//
//   }
//
//   function markUserPassword() {
//
//   }
//
//   function editOrder(id) {
//     $http.put('/api/orders' + id).then()
//
//   }
//
//   function deleteOrder(id) {
//
//     $http.delete('/api/orders' + id).then()
//
//   }
//
//   function addProduct() {
//     $http.post('/api/products').then()
//
//   }
//
//   function createCategories(id) {
//     $http.post('').then()
//
//   }
//
//   function editProduct(id) {
//     $http.put('/api/products' + id).then()
//
//   }
//
//
//
//   return {
//
//   }
//
//
// })

app.config(function($stateProvider) {

  $stateProvider.state('admin', {
    url: '/admin',
    templateUrl: 'js/admin/admin.html',
    controller: 'adminController',
    resolve: {
      isAdmin: function(AuthService){
        AuthService.getLoggedInUser().then(user => user.isAdmin )

      }
    }

  })
})
