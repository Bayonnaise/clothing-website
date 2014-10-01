function Voucher (discount, minimumSpend, condition) {
	this.discount = discount || 0;
	this.minimumSpend = minimumSpend || -1;
	this.condition = condition || null;
};

Voucher.prototype.report = function() {
	if (this.discount > 0) {
		return "Voucher applied";
	} else {
		return "Invalid code";
	}
}