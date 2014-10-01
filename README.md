#Clothing website [![Code Climate](https://codeclimate.com/github/Bayonnaise/clothing-website/badges/gpa.svg)](https://codeclimate.com/github/Bayonnaise/clothing-website)
**Technical test**

###Objectives

Develop a responsive website for a clothing retailer, selling six categories of clothing and footwear. The page should display all available products and information, along with a shopping cart to which products can be added.

There are also discount vouchers that can be redeemed, as follows:
- `VOUCHER5` £5 off
- `VOUCHER10` £10 off when you spend over £50
- `VOUCHER15` £15 off when you spend over £75 and buy at least one item of footwear

The user stories are as follows: **(all complete)**
- As a User I can view the products and their category, price and availability.
- As a User I can add a product to my shopping cart.
- As a User I can remove a product from my shopping cart.
- As a User I can view the total price for the products in my shopping cart.
- As a User I can apply a voucher to my shopping cart.
- As a User I can view the total price for the products in my shopping cart with discounts applied.
- As a User I am alerted when I apply an invalid voucher to my shopping cart.
- As a User I am unable to Out of Stock products to the shopping cart.

---

###Development

The project was built using JavaScript and HTML, with the product database mocked in a JS constant. Sending items to and from the basket is done using JQuery, and all totals and quantities update immediately. I also implemented a category filter at the top of the page.

When you enter a valid voucher code it is added to the basket, but the discount is only applied when the voucher's conditions are met. If removing an item means those conditions are no longer met, the discount will be removed, but the voucher remains in place. Just add more items to see the discount return.

I implemented the following classes:
- `Product.js` contains the product name, price, category and quantity.
- `Voucher.js` contains the discount amount, minimum spend and any other conditions, and it can return the status message when you add a new voucher.
- `Basket.js` stores the added products, as well as the currently applied voucher, and can calculate its total value (with and without discount).
- `Shop.js` stores the product inventory and adds and removes items from the basket.

With more time I would implement:
- proper product images and a full database
- the ability to apply multiple vouchers
- a checkout button!
- more professional styling

####Tools used

JavaScript, JQuery, Jasmine, Mustache, HTML, CSS and Twitter Bootstrap.

####Code layout

The basic layout of the page sits in `index.html`, which also (for now at least) includes two Mustache templates for rendering the individual shop products and basket items. CSS files and product images are in the `public` folder.

All of the JavaScript files are in the `src` folder, with their corresponding Jasmine tests inside `spec`. The JQuery scripts are all in `Scripts.js`.

```shell
.
├── README.md
├── SpecRunner.html
├── index.html
├── lib
│   ├── bootstrap.min.js
│   ├── jasmine-2.0.2
│   ├── jquery-2.1.1.min.js
│   └── mustache.js
├── public
│   ├── css
│   ├── fonts
│   └── images
├── spec
│   ├── BasketSpec.js
│   ├── ProductSpec.js
│   ├── ShopSpec.js
│   └── VoucherSpec.js
└── src
    ├── Basket.js
    ├── Product.js
    ├── Scripts.js
    ├── Shop.js
    └── Voucher.js
```

---

###How to set up

You have two options.

**A: Download the repo**

[Download the full repo as a zip file.](https://github.com/Bayonnaise/clothing-website/archive/master.zip)

**B: Clone the repo**

```shell
git clone https://github.com/Bayonnaise/clothing-website.git
cd clothing-website
```

---

###How to run

Open `index.html` to run the website.

You can apply the three predefined vouchers using the codes `VOUCHER5`, `VOUCHER10` and `VOUCHER15`.

Open `SpecRunner.html` to run the tests.