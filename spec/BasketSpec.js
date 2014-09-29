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
});