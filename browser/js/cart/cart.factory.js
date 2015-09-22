app.factory('CartFactory', function($http, localStorageService, ProductFactory, UserFactory){


    var items, user;

	var totalPrice = 0;



  return {
    items: items,
    totalPrice: totalPrice,

    getItems: function() {
    	return this.items;
    },

    setItems: function(stuff) {
        if (user) {
            user.cart = stuff;
            this.items = user.cart;
        }
        else {
            localStorageService.set('items', stuff);
            this.items = localStorageService.get('items');
        }
    },

    updateCart: function(userParam, itemsParam) {
        user = userParam;
        if (itemsParam) this.items = itemsParam;

        var updatedItems = this.getItems().map(item => ({
            _id: item.product._id,
            quantity: item.quantity
        }));

        if (user) UserFactory.update(user._id, {cart: updatedItems});
        else localStorageService.set('items', updatedItems);

    	this.totalPrice = this.getItems().reduce(function(a,b) {
    		return a + (b.product.price * b.quantity);
    	}, 0);
    },

    emptyCart: function() {
    	this.setItems([]);
        this.updateCart(user);
    	this.totalPrice = 0;
    },

    deleteItem: function(idx) {
    	this.items.splice(idx, 1);
    	this.updateCart(user);
    },

    editQuantity: function(idx, quantity) {
        this.items[idx].quantity = quantity;
        this.updateCart(user);
    },

  }

})
