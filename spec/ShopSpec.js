describe("The shop", function () {
	var shop;
	var product1;
	var product2;

	beforeEach(function() {
		shop = new Shop();
	});

	describe("when initialized", function() {
		it("reads in the file of products to build its stock", function() {
			expect(shop.inventory.length).toEqual(13);
			expect(shop.inventory[5].name).toEqual("Gold Button Cardigan"); 
		});

		it('has a basket', function() {
			expect(shop.basket.itemCount()).toEqual(0);
		});

		it('can find a product by name', function() {
			expect(shop.getIndex("Gold Button Cardigan")).toEqual(5);
		});
	});

	describe('adding and removing products to/from the basket', function() {
		beforeEach(function() {
			product1 = shop.inventory[3]; // Flip Flips, Red - £19 - 6 items
			product2 = shop.inventory[4]; // Flip Flips, Blue - £19 - 0 items
		});

		it('adds a product to the basket', function() {
			shop.addToBasket(product1);
			expect(shop.basket.totalValue()).toEqual(19);
			expect(shop.inventory[3].quantity).toEqual(5);
		});

		it('cannot add a product that is not in stock', function() {
			shop.addToBasket(product2);
			expect(shop.basket.totalValue()).toEqual(0);
			expect(shop.inventory[4].quantity).toEqual(0);
		});

		it('removes a product from the basket', function() {
			shop.addToBasket(product1);
			shop.addToBasket(product1);
			shop.removeFromBasket(product1.name);
			expect(shop.basket.totalValue()).toEqual(19);
			expect(shop.inventory[3].quantity).toEqual(5);
		});
	});
});