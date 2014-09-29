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
	var total = 0;
	this.products.forEach(function(product) {
		total += product.price;
	});
	return total;
};

Basket.prototype.itemCount = function() {
	return this.products.length;
};
