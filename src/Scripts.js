$(document).ready(function() {
	
	var shop = new Shop();
	var selection = "All";
	refresh(shop, selection);

	$('#inventory-list').on('click', 'a.add-to-basket', function(event) {
		event.preventDefault();
		var index = $(this).data('pick');

		shop.addToBasket(shop.inventory[index]);
		refresh(shop, selection);
	});

	$('#basket-list').on('click', 'a.remove-from-basket', function(event) {
		event.preventDefault();
		var index = $(this).data('pick');
		
		shop.removeFromBasket(shop.basket.products[index].name);
		refresh(shop, selection);
	});

	$('#voucher-area').on('click', 'button', function(event) {
		event.preventDefault();
		shop.basket.applyVoucher($('#voucher-box').val());
		$('#voucher-box').val("");
		updateBasket(shop.basket);
		$('#voucher-status').text(shop.basket.voucher.report());
	});

	$('.dropdown-menu li a').on('click', function(event) {
		event.preventDefault();
		selection = $(this).data('pick');
		updateInventory(shop.inventory, selection);
	});
});


function refresh(shop, selection) {
	updateInventory(shop.inventory, selection);
	updateBasket(shop.basket);
}

function updateInventory(products, selection) {
	$('#inventory-list').empty();

	products.forEach(function(product, index) {
		var template = $('#product-template').html();
		Mustache.parse(template);
		var item = Mustache.render(template, product);

		if(product.inStock()) {
			item += ("<div><h5><a href='#' class='add-to-basket' data-pick='" + index + "'>Add to Basket</a><h5></div></div></li>");
		} else {
			item += '<div>Out of stock</div></div></li>';
		}

		if (inFilter(product, selection)) {
			$(item).appendTo($('#inventory-list'));
		};
	});
}

function inFilter(product, selection) {
	return (selection === "All" || product.category === selection)
}


function updateBasket(basket) {
	$('#basket-list').empty();
	setValues(basket);

	basket.products.forEach(function(product, index) {
		product.index = index;
		var template = $('#basket-item-template').html();
		Mustache.parse(template);
		var item = Mustache.render(template, product);
		$(item).appendTo($('#basket-list'));
	});

	processDiscount(basket);
}

function setValues(basket) {
	$('#basket-count').text(basket.itemCount());
	$('#basket-value').text(basket.totalValue());
	$('#discount-value').text(basket.discountAmount());
	$('#discount-text').addClass('hidden');
	$('#voucher-status').text('')
}

function processDiscount(basket) {
	if(basket.discountAmount() > 0 && basket.totalValue() > basket.discountAmount()) {
		$('#basket-value').text(basket.discountedValue());
		$('#discount-text').removeClass('hidden');
	}
}