describe("The voucher", function() {
	var voucher;

	describe("when initialized", function() {
		it("can be useless", function() {
			voucher = new Voucher;
			expect(voucher.discount).toEqual(0);
		});

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

	describe('voucher statuses', function() {
		it('can report the status of an invalid voucher', function() {
			voucher = new Voucher;
			expect(voucher.report()).toEqual("Invalid code");
		});

		it('can report the status of a valid voucher', function() {
			voucher = new Voucher(10, 50);
			expect(voucher.report()).toEqual("Voucher applied");
		});
	});
});