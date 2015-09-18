app.config(function($stateProvider) {
    $stateProvider.state('reviewForm', {
        url: '/reviewForm',
        templateUrl: 'js/users/components/review.html'
    });
});

app.directive('reviewForm', function(){
    return {
        restrict:'E',
        templateUrl: "js/users/components/review.html",
        scope: {
            theOrder: "="
        }
		};
});

