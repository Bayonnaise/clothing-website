describe("A product", function() {
  var product;

  beforeEach(function() {
    product = new Product("Suede Shoes, Blue", "Women's Footwear", "£42.00", "4");
  });

  describe('when initialized', function() {
    it("has a name", function () {
      expect(product.name).toEqual("Suede Shoes, Blue");
    });

    it("has a category", function () {
      expect(product.category).toEqual("Women's Footwear");
    });

    it("has a price", function () {
      expect(product.price).toEqual(42.00);
    });

    it("has a quantity", function () {
      expect(product.quantity).toEqual(4);
    });
  }); 

  describe('handling products', function() {
    it("can have its quantity decreased by one", function () {
      product.removeOne();
      expect(product.quantity).toEqual(3);
    });

    it("cannot have its quantity decreased below zero", function() {
      product.quantity = 0;
      expect(product.removeOne()).toBe(false);
      expect(product.quantity).toEqual(0);
    });

    it("can have its quantity increased by one", function () {
      product.addOne();
      expect(product.quantity).toEqual(5);
    });
  });

  describe('useful data', function() {
    it("knows if it is out of stock", function() {
      expect(product.inStock()).toBe(true);
      product.quantity = 0;
      expect(product.inStock()).toBe(false);
    });
  });
});
