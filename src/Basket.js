function Basket () {
	this.products = [];
};

Basket.prototype.addProduct = function(product) {
	this.products.push(product);
};

Basket.prototype.removeProduct = function(product) {
	var index = this.products.indexOf(product);
	this.products.splice(index, 1);
};

Basket.prototype.totalValue = function() {
	return this.products.reduce(addValue, 0);

	function addValue(sum, item) {
	    return sum + item.price;
	}
};

Basket.prototype.itemCount = function() {
	return this.products.length;
};
