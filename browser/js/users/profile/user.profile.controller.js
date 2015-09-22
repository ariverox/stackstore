app.controller('UserProfileController', function($state, $scope, loggedInUser, user, UserFactory, AuthService) {

  $scope.user = user;
  $scope.loggedInUser = loggedInUser;
  $scope.deleteUser = function() {
    UserFactory.remove(user._id).then(function() {
      $state.go("admin")
    })
  }



})
