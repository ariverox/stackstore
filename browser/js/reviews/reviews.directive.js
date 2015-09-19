app.directive('reviews', function(){
    return {
        restrict:'E',
        templateUrl: "js/reviews/reviews.directive.html",
        scope: {
        	productId: '@'
        },
        controller: function($scope, ReviewFactory) {
        	$scope.reviews = [];

 			function calcAverage() {
 				$scope.averageRating = 0;

 				if ($scope.reviews.length) {
 					$scope.averageRating = $scope.reviews.reduce(((sum,review) => {
	 					return sum + review.rating;
	 				}),0) / $scope.reviews.length;
 				}

 				var averageFull = Math.floor($scope.averageRating);
 				var averageHalf = $scope.averageRating - averageFull;
 				if (averageHalf >= 0.75) averageFull++;
 				var filledStars = averageFull + (averageHalf >= 0.25 ? 1 : 0);
 				$scope.averageFull = $scope.getStars(averageFull);
 				$scope.averageHalf = $scope.getHalfStars(averageHalf);
 				$scope.averageEmpty = $scope.getEmptyStars(filledStars);
 			}


 			function dateString(num, intervalStr) {
 				return num + ' ' + intervalStr + (num===1 ? '' : 's') + ' ago';
 			}

			ReviewFactory.getAllForProduct($scope.productId)
        	.then(function(reviews) {
        		$scope.reviews = reviews;

        		calcAverage();
        	})

 			$scope.getStars = function(num) {
 				var stars = [];
 				for (var i=0; i<num; i++) stars.push(i);
 				return stars;
 			};
 			$scope.getEmptyStars = function(num) {
 				var empty = [];
 				for (var i=num; i<5; i++) empty.push(i);
 				return empty;
 			};
 			$scope.getHalfStars = function(num) {
 				if (num >= 0.25 && num < 0.75) return [0.5];
 				else return [];
 			}
 			$scope.getTimeElapsed = function(date) {
 				if (!date) return 'Unknown date';

 				var msElapsed = Date.now() - Date.parse(date);

 				if (msElapsed < 60000) return 'just now';
 				if (msElapsed < 60000*60) return dateString(Math.floor(msElapsed/60000), 'minute');
 				if (msElapsed < 60000*60*24) return dateString(Math.floor(msElapsed/(60000*60)), 'hour');
 				if (msElapsed < 60000*60*24*7) return dateString(Math.floor(msElapsed/(60000*60*24)), 'week');
 				if (msElapsed < 60000*60*24*31) return dateString(Math.floor(msElapsed/(60000*60*24*7)), 'day');
 				if (msElapsed < 60000*60*24*365) return dateString(Math.floor(msElapsed/(60000*60*24*31)), 'month');
 				return dateString(Math.floor(msElapsed/(60000*60*24*365)), 'year');
 			}
 			$scope.getNumReviews = function() {
 				return $scope.reviews.length + ' review' + ($scope.reviews.length===1 ? '' : 's');
 			}



        }
	};
});

