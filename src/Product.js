function Product(name, category, price, quantity) {
	this.name = name;
	this.category = category;
	this.price = Number(price.replace(/[^0-9\.]+/g,""));
	this.quantity = parseInt(quantity);
};

Product.prototype.removeOne = function() {
	if (this.inStock()) {
		this.quantity -= 1;
		return true;
	} else {
		return false;
	};
};

Product.prototype.addOne = function() {
	this.quantity += 1;
};

Product.prototype.inStock = function() {
	return (this.quantity > 0);
};
