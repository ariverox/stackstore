
app.directive('userOrderLine', function(){
	return {
		restrict:'E',
		templateUrl: "js/users/transaction.html",
		scope: {
			theTransaction: "="
		},

		controller: "DueDateCtrl"
	};
});

app.controller('DueDateCtrl', function($scope){
	var dueDate = new Date()
	$scope.theTransaction.date= dueDate.toString();
});