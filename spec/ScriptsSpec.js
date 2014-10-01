describe("Scripts", function () {
	describe("getting the right image url", function () {
		it('returns the correctly formatted string', function () {
			expect(getImageURL("Men's Footwear")).toEqual("men-footwear.jpeg");
		});
	});

	describe("getting the correct Add to Basket link", function() {
		beforeEach(function () {
			product = new Product("Suede Shoes, Blue", "Women's Footwear", "£42.00", "1");
		});

		it('returns a link when product is in stock', function() {
			expect(addToBasketLink(product, 1)).toEqual("<div><h5><a href='#' class='add-to-basket' data-pick='1'>Add to Basket</a><h5></div></div></li>");
		});

		it('returns no link when the product is out of stock', function() {
			product.quantity = 0;
			expect(addToBasketLink(product, 1)).toEqual('<div>Out of stock</div></div></li>');
		});
	});
});