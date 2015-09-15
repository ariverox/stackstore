app.config(function($stateProvider){
	$stateProvider.state('user'), {
	url: '/users'
	templateUrl: '/js/users/user.html',
	scope: 'UserCtrl'
	}
})

app.controller('UserCtrl', function($scope, UserFactory){
	UserFactory.getOne().then(function(user){
		$scope.user = user
	})
}