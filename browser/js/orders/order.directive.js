app.directive('order', function() {
	return {
		restrict: 'E',
		templateUrl: 'js/orders/order.directive.html',
		scope: {
			theOrder: '@'
		},
		controller: function($scope) {
			$scope.order = JSON.parse($scope.theOrder);

			var months = {'1':'January', '2':'February', '3':'March', '4':'April', '5':'May', '6':'June',
						'7':'July', '8':'August', '9':'September', '10':'October', '11':'November', '12':'December'};

			$scope.displayStatus = function() {
				var now = Date.now();
				if (now >= Date.parse($scope.order.deliveryDate)) return 'Delivered';
				if (now >= Date.parse($scope.order.shippingDate) && now < Date.parse($scope.order.deliveryDate)) return 'Shipped';
				else return 'Not Yet Shipped';
			}

			$scope.displayDateType = function(date, message) {
				if (!date) return message;
				if (date === $scope.order.shippingDate) {
					if (Date.now() > Date.parse(date)) return 'Date Shipped:';
					else return 'Estimated Shipping Date:';
				}
				else if (date === $scope.order.deliveryDate) {
					if (Date.now() > Date.parse(date)) return 'Date Delivered:';
					else return 'Estimated Delivery Date:';
				}
			}

			$scope.displayDate = function(date) {
				if (!date) return 'Unknown';

				date = new Date(date);

				

				var year = date.getFullYear(),
					month = String(date.getMonth() + 1),
					day = date.getDate(),
					hours = date.getHours(),
					minutes = String(date.getMinutes());

				var ampm = 'AM';

				if (hours === 0) hours = 12;
				else if (hours === 12) ampm = 'PM';
				else if (hours > 12) {
					hours -= 12;
					ampm = 'PM';
				}
				if (minutes.length === 1) minutes = '0'+minutes;


				var display = months[month]+' '+day+', '+year;
				if (Date.now() > Date.parse(date)) display += '; '+hours+':'+minutes+' '+ampm;

				return display;
			}
		}
	};
})