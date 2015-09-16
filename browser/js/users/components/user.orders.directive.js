app.directive('userOrder', function(){
    return {
        restrict:'E',
        templateUrl: "js/users/components/order.html",
        scope: {
            theOrder: "="
        }
		};
});

// app.controller('DueDateCtrl', function($scope){
//     var dueDate = new Date()
//     $scope.order.date = dueDate.toString();
// });
