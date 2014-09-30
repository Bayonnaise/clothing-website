function Voucher (discount, minimumSpend, condition) {
	this.discount = discount || 0;
	this.minimumSpend = minimumSpend || -1;
	this.condition = condition || null;
};