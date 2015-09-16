'use strict';

app.directive('signin', function () {
	return {
		scope: {
			userInfo: '=',
			text: '@',
			submit: '&'
		},
		templateUrl: '/js/common/directives/signin/signin.html'
	}
});