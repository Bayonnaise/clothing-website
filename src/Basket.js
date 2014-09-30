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
