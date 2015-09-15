app.controller('userDetailController', function($scope, UserFactory){
  var users = UserFactory.getAll()
  $scope.users = users





})
