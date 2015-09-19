app.controller('UserProfileController', function($scope, UserFactory, $stateParams) {
    $scope.transactions = true;
    $scope.posts = true;
    $scope.updates = true;
    var id = $stateParams.id
    UserFactory.getOne(id).then(function(user) {
        $scope.user = user;
    })

    $scope.showOrders = function() {
        $scope.transactions = false;
    }
    $scope.showReviews = function() {
        $scope.posts = false;
    }
    $scope.showForm = function() {
        $scope.updates = false;
    }
})
