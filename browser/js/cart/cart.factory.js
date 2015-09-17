app.factory('CartFactory', function($http){

  return {
    items: [],
    totalPrice: 0,

    updateCart: function() {
    	this.totalPrice = this.items.reduce(function(a,b) {
    		return a + (b.price * b.quantity);
    	}, 0);
    },

    emptyCart: function() {
    	this.items = [];
    	this.totalPrice = 0;
    },

    deleteItem: function(idx) {
    	this.items.splice(idx, 1);
    	this.updateCart();
    },

    editItem: function(item) {

    }


  }

})
