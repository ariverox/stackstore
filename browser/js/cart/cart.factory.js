app.factory('CartFactory', function($http, localStorageService){

	var items = localStorageService.get('items');
	var totalPrice = 0;

  return {
    items: items,
    totalPrice: totalPrice,

    getItems: function() {
    	return localStorageService.get('items');
    },

    setItems: function(stuff) {
    	this.items = localStorageService.set('items', stuff);
    },

    updateCart: function() {
    	this.totalPrice = this.getItems().reduce(function(a,b) {
    		return a + (b.price * b.quantity);
    	}, 0);
    },

    emptyCart: function() {
    	this.setItems([]);
    	this.totalPrice = 0;
    },

    deleteItem: function(idx) {
    	this.setItems(this.getItems().splice(idx, 1));
    	//var temp = localStorageService.get('items').splice(idx, 1);
    	//localStorageService.set('items', temp);
    	//this.items.splice(idx, 1);
    	this.updateCart();
    },

    editItem: function(item) {

    }


  }

})
