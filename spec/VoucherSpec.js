describe("The voucher", function() {
	var voucher;

	beforeEach(function() {
		
	});

	describe("when initialized", function() {
		it("has a value", function() {
			voucher = new Voucher(5);
			expect(voucher.discount).toEqual(5);
		});

		it("can have a minimum spend", function() {
			voucher = new Voucher(10, 50);
			expect(voucher.discount).toEqual(10);
			expect(voucher.minimumSpend).toEqual(50);
		});

		it("can have a condition", function() {
			voucher = new Voucher(15, 75, [1, "footwear"]);
			expect(voucher.discount).toEqual(15);
			expect(voucher.minimumSpend).toEqual(75);
			expect(voucher.condition).toEqual([1, "footwear"]);
		});
	});
});