function Voucher (discount, minimumSpend, condition) {
	this.discount = discount;
	this.minimumSpend = minimumSpend || null;
	this.condition = condition || null;
};