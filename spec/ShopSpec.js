describe("The shop", function () {
	var shop;

	beforeEach(function() {
		shop = new Shop();
	});

	describe("when initialized", function() {
		it("reads in the file of products to build its stock", function() {
			expect(shop.inventory.length).toEqual(13);
			expect(shop.inventory[5].name).toEqual("Gold Button Cardigan"); 
		});
	});
});