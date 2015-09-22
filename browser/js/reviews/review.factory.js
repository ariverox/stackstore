app.factory('ReviewFactory', function($http) {

	return{
		getAllForProduct: function(productId) {
			return $http.get('/api/reviews/product/' + productId)
			.then(function(res) {
				return res.data;
			});
		},

		addOne: function(review) {
			return $http.post('/api/reviews', review).then(function(res) {
				return res.data;
			});
		},

		getAverageRating: function(ratings){
			total = 0;
			ratings.forEach(x => total += x);
			return total/ratings.length;
		}



	};
});
