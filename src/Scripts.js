$(document).ready(function() {
	
	var shop = new Shop();
	refresh(shop);

	$('#inventory-list').on('click', 'a.add-to-basket', function() {
		var index = $(this).data('pick');

		shop.addToBasket(shop.inventory[index]);
		refresh(shop);
	});

	$('#basket-list').on('click', 'a.remove-from-basket', function() {
		var index = $(this).data('pick');
		
		shop.removeFromBasket(shop.basket.products[index].name);
		refresh(shop);
	});
});


function refresh(shop) {
	updateInventory(shop.inventory);
	updateBasket(shop.basket);
};


function updateInventory(products) {
	$('#inventory-list').empty();

	products.forEach(function(product, index) {
		var item = buildString(product);

		if(product.inStock()) {
			item += ("<div><a href='#' class='add-to-basket' data-pick='" + index + "'>Add to Basket</a></div>");
		} else {
			item += '<div>Out of stock</div>';
		};

		$(item).appendTo($('#inventory-list')).addClass('product-box col-xs-12 col-sm-6 col-md-4 panel panel-default');
	});
};

function buildString(product) {
	return '<li><div class="product-name">' + product.name + '</div>' + 
	'<div>Price: £<span class="product-price">' + product.price + '</span>, ' +
	'Stock: <span class="product-quantity">' + product.quantity + '</span></div>' +
	'<div>Category: <span class="product-category">' + product.category + '</span></div>';
};


function updateBasket(basket) {
	$('#basket-list').empty();
	$('#basket-count').text(basket.itemCount());
	$('#basket-value').text(basket.totalValue());

	if (basket.itemCount() > 0) {
		basket.products.forEach(function(item, index) {
			var item = '<li>' + item.name + ', £' + item.price + ' (<a href="#" class="remove-from-basket" data-pick="' + index + '">Remove</a>)</li>';
			$(item).appendTo($('#basket-list'));
		});
	} else {
		var item = '<li>Empty</li>';
		$(item).appendTo($('#basket-list'));
	};
};