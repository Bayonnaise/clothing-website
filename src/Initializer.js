function buildInventoryGrid(products) {
	var list = document.getElementById("inventory-list");

	products.forEach(function(product, index) {
		var item = '<li><div>' + product.name + '</div><div>Price: £' + product.price + ', Stock: ' + product.quantity + '</div><div>Category: ' + product.category + '</div><div>'

		if(product.inStock()) {
			item += "<a href='/" + index + "'>Add to Basket</a></div>";
		} else {
			item += 'Out of stock</div>';
		};

		$(item).appendTo(list).addClass('product-box col-xs-12 col-sm-6 col-md-4');
	});
};

function buildBasket(basket) {
	var list = document.getElementById("basket-list");

	if (basket.itemCount() === 0) {
		basket.forEach(function(item) {
			var item = '<li>' + item.name + ', £' + item.price + ' (<a href="#">Remove</a>)</li>';
			item.appendTo(list);
		});
	};
};
