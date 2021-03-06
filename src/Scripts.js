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
		product.imageURL = getImageURL(product.category);
		var template = $('#product-template').html();
		Mustache.parse(template);
		var item = Mustache.render(template, product) + addToBasketLink(product, index);

		if (isInFilter(product, selection)) {
			$(item).appendTo($('#inventory-list'));
		}
	});
}

function getImageURL(category) {
	return category.replace("'s ", "-").toLowerCase().concat(".jpeg");
}

function addToBasketLink(product, index) {
	if(product.inStock()) {
		return "<div><h5><a href='#' class='add-to-basket' data-pick='" + index + "'>Add to Basket</a><h5></div></div></li>";
	} else {
		return '<div>Out of stock</div></div></li>';
	}
}

function isInFilter(product, selection) {
	return (selection === "All" || selection === product.category);
}


function updateBasket(basket) {
	$('#basket-list').empty();
	$('#discount-text').addClass('hidden');
	$('#voucher-status').text('');
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
}

function processDiscount(basket) {
	if(basket.discountAmount() > 0 && basket.totalValue() > basket.discountAmount()) {
		$('#basket-value').text(basket.discountedValue());
		$('#discount-text').removeClass('hidden');
	}
}