app.controller('UserProfileController', function($scope, UserFactory, $stateParams){
  var id = $stateParams.id
  console.log($stateParams)
    UserFactory.getOne(id).then(function(user){
        $scope.user =  user
    })
})
