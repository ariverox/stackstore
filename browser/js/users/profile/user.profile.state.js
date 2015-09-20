// app.config(function($stateProvider){
//     $stateProvider.state('userProfile'), {
//       url: '/users/:id',
//       templateUrl: 'js/users/profile/user.profile.html',
//       scope: 'UserProfileController'
//   };
// });


app.config(function ($stateProvider) {
	$stateProvider
	.state('userProfile', {
		url: '/user/:id',
		templateUrl: 'js/users/profile/user.profile.html',
	})
})



/*
	app.controller('LoginCtrl', function(Auth){
		
	})
	

*/