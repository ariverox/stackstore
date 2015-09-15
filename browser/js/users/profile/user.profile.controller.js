app.controller('UserProfileController', function($scope, UserFactory, $stateParams){
  var id = $stateParams.id
    UserFactory.getOne(id).then(function(user){
        $scope.user =  user
    })

    $scope.order = {
      date: "today"
    }






})
