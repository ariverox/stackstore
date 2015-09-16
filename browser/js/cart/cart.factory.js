app.factory('CartFactory', function($http){

  return {
    items: [],
    totalPrice: 0,

    emptyCart: function() {
    	this.items = [];
    	this.totalPrice = 0;
    },


  }

})
