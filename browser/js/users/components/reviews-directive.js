app.config(function($stateProvider) {
    $stateProvider.state('reviewForm', {
        url: '/reviewForm',
        templateUrl: 'js/review/review.form.html'
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

