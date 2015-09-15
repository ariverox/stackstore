
app.directive('userTransactions', function(){
	return {
		restrict:'E',
		templateUrl: "js/users/components/transaction.html",
		scope: {
			theTransaction: "="
		},
		controller: "DueDateCtrl"
	};
});

app.controller('DueDateCtrl', function($scope){
	var dueDate = new Date()
	$scope.theTransaction.date = dueDate.toString();
});
