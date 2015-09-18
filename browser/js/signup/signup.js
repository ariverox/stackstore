app.config(function ($stateProvider) {

    $stateProvider.state('signup', {
        url: '/signup',
        templateUrl: 'js/signup/signup.html',
        controller: 'signupCtrl'
    });

});

app.controller('signupCtrl', function ($scope, AuthService, $state) {

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}
    $scope.signup = {};
    $scope.error = null;

    $scope.sendSignup = function (signupInfo) {
        if(signupInfo.password !== signupInfo.emailvalid) {
            return $scope.error = "Paswords do not match!";
        }
        if(!validateEmail(signupInfo.email)) {
            return $scope.error = "Please enter a valid email addresss";
        }
        $scope.error = null;

        AuthService.signup(signupInfo).then(AuthService.login(signupInfo)).then(function () {
            $state.go('home');
        }).catch(function () {
            $scope.error = 'Invalid signup credentials.';
        });

    };  

});

