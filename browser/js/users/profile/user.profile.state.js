app.config(function ($stateProvider) {
	$stateProvider.state('userProfile', {
		url: '/user/:id',
		templateUrl: 'js/users/profile/user.profile.html',
		controller: 'UserProfileController',
		resolve: {
			user: function(UserFactory, $stateParams) {
				return UserFactory.getOne($stateParams.id);
			},
			loggedInUser: function(AuthService){
			 return AuthService.getLoggedInUser()
			}
		}
	})
})
