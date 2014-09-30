$(document).ready(function() {
	
	var shop = new Shop();
	refresh(shop);

	$('#inventory-list').on('click', 'a.add-to-basket', function(event) {
		event.preventDefault();
		var index = $(this).data('pick');

		shop.addToBasket(shop.inventory[index]);
		refresh(shop);
	});

	$('#basket-list').on('click', 'a.remove-from-basket', function(event) {
		event.preventDefault();
		var index = $(this).data('pick');
		
		shop.removeFromBasket(shop.basket.products[index].name);
		refresh(shop);
	});

	$('#voucher-area').on('click', 'button', function(event) {
		event.preventDefault();
		shop.basket.applyVoucher($('#voucher-box').val());
		$('#voucher-box').val("");
		updateBasket(shop.basket);
	});
});


function refresh(shop) {
	updateInventory(shop.inventory);
	updateBasket(shop.basket);
}

function updateInventory(products) {
	$('#inventory-list').empty();

	products.forEach(function(product, index) {
		var template = $('#product-template').html();
		Mustache.parse(template);
		var item = Mustache.render(template, product);

		if(product.inStock()) {
			item += ("<div><h5><a href='#' class='add-to-basket' data-pick='" + index + "'>Add to Basket</a><h5></div></li>");
		} else {
			item += '<div>Out of stock</div></li>';
		}

		$(item).appendTo($('#inventory-list'));
	});
}

function updateBasket(basket) {
	$('#basket-list').empty();
	$('#basket-count').text(basket.itemCount());
	$('#basket-value').removeClass('discounted').text(basket.totalValue());
	$('#discount-value').text(basket.discountAmount());
	$('#discount-text').addClass('hidden');
	
	basket.products.forEach(function(product, index) {
		product.index = index;
		var template = $('#basket-item-template').html();
		Mustache.parse(template);
		var item = Mustache.render(template, product);
		$(item).appendTo($('#basket-list'));
	});

	if(basket.discountAmount() > 0 && basket.totalValue() > basket.discountAmount()) {
		$('#basket-value').addClass('discounted').text(basket.discountedValue());
		$('#discount-text').removeClass('hidden');
		$('#discount-value').text(basket.discountAmount());
	}
}