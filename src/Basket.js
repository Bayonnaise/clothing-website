function Basket () {
	this.products = [];
	this.voucher = new Voucher;
};

Basket.prototype.addProduct = function(product) {
	this.products.push(product);
};

Basket.prototype.removeProduct = function(product) {
	var index = this.products.indexOf(product);
	this.products.splice(index, 1);
};

Basket.prototype.itemCount = function() {
	return this.products.length;
};

Basket.prototype.totalValue = function() {
	var total = 0;
	this.products.forEach(function(product) {
		total += product.price;
	});
	return total;
};

Basket.prototype.discountedValue = function() {
	if(this.voucher) {
		return this.totalValue() - this.discountAmount();
	} else {
		return this.totalValue();
	};
};

Basket.prototype.discountAmount = function() {
	if (this.conditionMet(this.voucher.condition) && this.minimumSpendMet(this.voucher.minimumSpend)) {
		return this.voucher.discount;
	} else { 
		return 0;
	};
};

Basket.prototype.minimumSpendMet = function(minimumSpend) {
	return (this.totalValue() > minimumSpend);
};

Basket.prototype.conditionMet = function(condition) {
	if (!condition) { return true; }

	var validItemCount = 0;
	this.products.forEach(function(product) {
		if (product.category.toLowerCase().search(condition[1])) { validItemCount++; };
	});

	return (validItemCount >= condition[0]);
};

Basket.prototype.applyVoucher = function(voucherCode) {
	var discount, minimumSpend, condition;

	switch(voucherCode) {
		case "VOUCHER5":
			discount = 5;
			break;
		case "VOUCHER10":
			discount = 10;
			minimumSpend = 50;
			break;
		case "VOUCHER15":
			discount = 15;
			minimumSpend = 75;
			condition = [1, "footwear"];
			break;
		default:
			break;
	};

	this.voucher = new Voucher(discount, minimumSpend, condition);
};
