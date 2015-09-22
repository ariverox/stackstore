app.controller('UserProfileController', function($state, $scope, loggedInUser, user, UserFactory, AuthService) {

  $scope.user = user;
  $scope.loggedInUser = loggedInUser;
  $scope.deleteUser = function() {
    UserFactory.remove(user._id).then(function() {
      $state.go("admin")
    })
  }
  $scope.makeAdmin = function(){
    UserFactory.update(user._id, {isAdmin:true}).then(function(user){
      $scope.user=user
    })
  }

  $scope.demote = function(){
    UserFactory.update(user._id, {isAdmin:false}).then(function(user){
      $scope.user=user
    })
  }



})
