function Shop() {
	this.inventory = this.fillInventory();
	this.basket = new Basket();
};

Shop.prototype.getIndex = function(name) {
	var result;
	this.inventory.forEach(function(product, index) {
		if(product.name === name) {
			result = index;
			return false;
		};
	});
	return result;
};

Shop.prototype.addToBasket = function(product) {
	var index = this.getIndex(product.name);
	if (this.inventory[index].removeOne()) {
		this.basket.addProduct(product);
	};
};

Shop.prototype.removeFromBasket = function(name) {
	var index = this.getIndex(name);
	this.basket.removeProduct(this.inventory[index]);
	this.inventory[index].addOne();
}

Shop.prototype.fillInventory = function() {
	var list = [];
	var lines = this.PRODUCTS.split("\n"[0]);

	lines.forEach(function (line) {
		line = line.split(" - ");
		list.push(new Product(line[0], line[1], line[2], line[3]));
	});
	return list;
};

Shop.prototype.PRODUCTS = "Almond Toe Court Shoes, Patent Black - Women’s Footwear - £99.00 - 5\n" +
													"Suede Shoes, Blue - Women’s Footwear - £42.00 - 4\n" + 
													"Leather Driver Saddle Loafers, Tan - Men’s Footwear - £34.00 - 12\n" + 
													"Flip Flops, Red - Men’s Footwear - £19.00 - 6\n" + 
													"Flip Flops, Blue - Men’s Footwear - £19.00 - 0\n" + 
													"Gold Button Cardigan, Black - Women’s Casualwear - £167.00 - 6\n" +
													"Cotton Shorts, Medium, Red - Women’s Casualwear - £30.00 - 5\n" +
													"Fine Stripe Short Sleeve Shirt, Grey - Men’s Casualwear - £49.99 - 9\n" + 
													"Fine Stripe Short Sleeve Shirt, Green - Men’s Casualwear - £39.99 - 3\n" + 
													"Sharkskin Waistcoat, Charcoal - Men’s Formalwear - £75.00 - 2\n" + 
													"Lightweight Patch Pocket Blazer, Deer - Men’s Formalwear - £175.50 - 1\n" +
													"Bird Print Dress, Black - Women’s Formalwear - £270.00 - 10\n" + 
													"Mid Twist Cut-Out Dress, Pink - Women’s Formalwear - £540.00 - 5";