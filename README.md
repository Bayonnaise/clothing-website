#Clothing website
**Technical test**

###Objectives

Develop a responsive website for a clothing retailer, selling six categories of clothing and footwear. The page should display all available products and information, along with a shopping cart to which products can be added.

There are also discount vouchers that can be redeemed, as follows:
- £5 off
- £10 off when you spend over £50
- £15 off when you spend over £75 and buy at least one item of footwear

The user stories are as follows:
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

The project is built in JavaScript and HTML, with the product database mocked out into a constant. Sending items to and from the basket is done using JQuery to avoid reloading the page, and all totals and quantities update immediately. 

When you enter a valid voucher code it's added to the basket, but the discount is only applied when the conditions are met. If you remove products until the total value no longer meets a voucher condition, the discount is removed - but the voucher remains applied, and if you add more products that discount will reappear.

With more time I would implement:
- filters for the product list
- proper product images and a full database
- better feedback when entering vouchers
- a checkout button!

####Tools used

JavaScript, JQuery, Jasmine, Mustache, HTML, CSS and Twitter Bootstrap.

####Code layout

The basic layout of the page sits in `index.html`, which also (for now at least) includes two Mustache templates for rendering the individual shop products and basket items. CSS and images are in the `public` folder.

All of the JavaScript files are in the `src` folder, with their corresponding Jasmine tests inside `spec`.

```shell
.
├── README.md
├── SpecRunner.html
├── index.html
├── lib
│   ├── bootstrap.min.js
│   ├── jasmine-2.0.2
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