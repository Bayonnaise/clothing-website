describe("The basket", function () {
	var basket;
	var product;

	beforeEach(function() {
		basket = new Basket();
		product = new Product("Suede Shoes, Blue", "Women's Footwear", "£42.00", "4");
	});

	describe('when initialized', function() {
		it("has no products", function() {
			expect(basket.products.length).toEqual(0);
		});
	});

	describe('adding and removing products', function() {
		it('can receive a product', function() {
			basket.addProduct(product);
			expect(basket.products.length).toEqual(1);
			expect(basket.products[0].name).toEqual("Suede Shoes, Blue");
		});

		it('can have a product removed', function() {
			basket.products = [product];
			basket.removeProduct(product);
			expect(basket.products.length).toEqual(0);
		});
	});

	describe('useful data', function() {
		it('can return its total value', function() {
			basket.products = [product, product];
			expect(basket.totalValue()).toEqual(84);
		});

		it('can return its product count', function() {
			basket.products = [product, product];
			expect(basket.itemCount()).toEqual(2);
		});
	});

	describe('applying vouchers', function() {
		it('can accept a £5 voucher code', function() {
			basket.applyVoucher("VOUCHER5");
			expect(basket.voucher.discount).toEqual(5);
		});

		it('can accept a voucher code with a minimum spend', function() {
			basket.applyVoucher("VOUCHER10");
			expect(basket.voucher.discount).toEqual(10);
			expect(basket.voucher.minimumSpend).toEqual(50);
		});

		it('can accept a voucher code with a minimum spend and a condition', function() {
			basket.applyVoucher("VOUCHER15");
			expect(basket.voucher.discount).toEqual(15);
			expect(basket.voucher.minimumSpend).toEqual(75);
			expect(basket.voucher.condition).toEqual([1, "footwear"]);
		});

		it('can return its total value with a discount applied', function() {
			basket.products = [product, product];
			basket.applyVoucher("VOUCHER15");
			expect(basket.totalValue()).toEqual(84);
			expect(basket.discountedValue()).toEqual(69);
		});

		it('returns the correct total and discounted value when voucher is invalid', function() {
			basket.products = [product];
			basket.applyVoucher("VOUCHER10");
			expect(basket.totalValue()).toEqual(42);
			expect(basket.discountedValue()).toEqual(42);
		});
	});
});