webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".about-container {\n  padding-top:20px;\n}\n.bodyback\n{\n  background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "   \n    <body style=\"background-color: white\">\n    <br>\n      <a style=\"text-decoration:none\" align=\"center\"><h1><strong><em>TQ         Cafe</em></strong></h1></a>\n        <h2>About Us:</h2>\n      <p> Coffee is a well-known beverage that wakes us up in the morning or keeps us awake until late in the night. With a fantastic flavor and a bitter taste, this beverage has charmed the world, which is why it's no surprise that there are many, many coffee shops out there. To put yours on the map, you need to attract as many people as possible and the best way to do this is via online environments like social media.</p>\n      <h2>How We Work:</h2>\n      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, praesentium quasi ipsa exercitationem totam voluptatum itaque! Consequuntur sed expedita numquam illum incidunt, ipsam nihil qui, dignissimos, fugiat facilis suscipit. Obcaecati.</p>    \n      <h2>Opening:</h2>\n        <p style=\"text-align:center;\">Opening Hours for the Wake Up Cafe</p>\n  \n    <table style=\"width:100%\">\n    <tr>\n      <th> </th>\n      <th>Monday</th>\n      <th>Tuesday</th>\n      <th>Wednesday</th>\n      <th>Thursday</th>\n      <th>Friday</th>\n      <th>Saturday</th>\n      <th>Sunday</th>\n    </tr>\n    <tr>\n      <th>Breakfast</th>\n      <td align=\"center\">7:00am-10:00am</td>\n      <td align=\"center\">7:00am-10:00am</td>\n      <td align=\"center\">7:00am-10:00am</td>\n      <td align=\"center\">7:00am-10:00am</td>\n      <td align=\"center\">7:00am-10:00am</td>\n      <td align=\"center\">8:00am-10:00am</td>\n      <td align=\"center\">8:30am-10:30am</td>\n    </tr>\n    <hr>\n    <tr>\n      <th>Lunch</th>\n      <td align=\"center\">11:30am-02:30pm</td>\n      <td align=\"center\">11:30am-02:30pm</td>\n      <td align=\"center\">11:30am-02:30pm</td>\n      <td align=\"center\">11:30am-02:30pm</td>\n      <td align=\"center\">11:30am-02:30pm</td>\n      <td align=\"center\">11:30am-03:30pm</td>\n      <td align=\"center\">12:00am-03:30pm</td>\n    </tr>\n  </table>\n  <hr>\n        <h2>Contact:</h2>\n        <p>Chitkara University,Rajpura<br></p>\n        <a href=\"https://www.google.com/maps/place/Chitkara+University/@30.5160911,76.6575891,17z/data=!3m1!4b1!4m5!3m4!1s0x390fc32344a6e2d7:0x81b346dee91799ca!8m2!3d30.5160865!4d76.6597778\" target=\"_blank\"> Find us on Google Map<br><br></a>\n        <a href=\"tel:918198091174\">phno. 8198091174</a>\n      \n    <h3>Privacy Policy</h3>\n      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, praesentium quasi ipsa exercitationem totam voluptatum itaque! Consequuntur sed expedita numquam illum incidunt, </p>\n    \n    </body>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-sidebar {\n  padding: 10px;\n}\n\n.add-component-container input {\n  width: 100%;\n  margin: 10px;\n}\n\n.add-component-container div {\n  margin-top: 10px;\n}\nimg\n{\n \n  border-radius: 2px;\n  padding: 2px;\n  width: 90px;\n}\n#tq\n{\n  text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <nav class=\"navbar navbar-togglable-md navbar-light bg-faded\">\n      <div class=\"collapse navbar-collapse\">\n        <ul class=\"nabar-nav mr-auto\">\n          <li class=\"nav-item active\">\n            <a href=\"#home\" class=\"nav-link\">Home <span class=\"sr-only\">(current)</span></a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-2\">\n    <img class=\"img1\" src=\"assets/logo.png\">\n    <h4>&nbsp;&nbsp;&nbsp;TQ!</h4>\n    <br>\n    <br>\n    <br>\n    <div class=\"custom-sidebar\">\n      <div *ngFor=\"let item of listItems\">\n        <a href=\"{{item.link}}\" *ngIf=\"item.isNew!==true\">{{item.name}}</a>\n        <a href=\"{{item.link}}\" target=\"blank\" *ngIf=\"item.isNew===true\">{{item.name}}</a>\n      </div>\n      <hr>\n     \n    </div>    \n  </div>\n  <div class=\"col-md-10\">\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = "app";
        this.url = "";
        this.listItems = [
            {
                name: "Home",
                link: "#/home"
            },
            {
                name: "Products",
                link: "#/products"
            },
            {
                name: "Cart",
                link: "#/cart"
            },
            {
                name: "About",
                link: "#/about"
            }
        ];
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-root",
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_router__ = __webpack_require__("../../../../../src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cart_cart_component__ = __webpack_require__("../../../../../src/app/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__products_products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// import { LoginComponent } from './frontpage/login/login.component';
// import { SignupComponent } from './frontpage/signup/signup.component';
// import { SocialLinksComponent } from './frontpage/social-links/social-links.component';
// import { UserComponent } from './frontpage/user/user.component';
// import { ShoppingComponent } from './shopping/shopping.component';
// import { ProductsComponent } from './products/products.component';
// import { HomeComponent } from './home/home.component';
// import { CartComponent } from './cart/cart.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__cart_cart_component__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_10__products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__sidebar_sidebar_component__["a" /* SidebarComponent */]
                // LoginComponent,
                // SignupComponent,
                // SocialLinksComponent,
                // UserComponent,
                // ShoppingComponent
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_router__["a" /* routes */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* HashLocationStrategy */] }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart_component__ = __webpack_require__("../../../../../src/app/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");






var router = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "about", component: __WEBPACK_IMPORTED_MODULE_1__about_about_component__["a" /* AboutComponent */] },
    { path: "products", component: __WEBPACK_IMPORTED_MODULE_2__products_products_component__["a" /* ProductsComponent */] },
    { path: "home", component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: "cart", component: __WEBPACK_IMPORTED_MODULE_4__cart_cart_component__["a" /* CartComponent */] },
    { path: "sidebar-component", component: __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["a" /* SidebarComponent */] },
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(router);


/***/ }),

/***/ "../../../../../src/app/cart/cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".carts-body-container{\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n\n\n\n.cart-product-container img {\n  width:75%;\n  height:75%;\n}\n\n.bill-container{\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n}\n\n.bill-container div:nth-child(2){\n  padding-top:20px;\n  padding-left:0px;\n}\n\n.cart-product-desc{\n  padding-top: 15px;\n  padding-bottom:15px;\n}\n\n.edit-cart-container{\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  padding-top:45px;\n}\n\ninput {\n  height:30px;\n}\n\n#xbutton {\n  cursor: pointer;\n  height:30px;\n  padding-top:45px;\n}\ni {\n  font-size: 50px;\n }\n ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container row\">\n  <h1>Cart</h1>\n</div>\n<hr>\n<br>\n<div class=\"carts-body-container row\">\n  <div class=\"cart-product-container container row\" *ngFor=\"let item of cartProducts; let i=index\">\n    <div class=\"col-md-5\">\n      <hr>\n      <img [src]=\"item.img\" alt=\"\" class=\"custom-image-style\">\n    </div>\n    <div class=\"cart-product-desc col-md-3\">\n      <div><p>Item: {{item.title}}</p></div>\n      <!-- <div><p>{{item.description}}</p></div> -->\n      <div><p><strong>Price: {{item.price*item.qt}} Rs/-</strong></p></div>\n    </div>\n    <div class=\"edit-cart-container col-md-2\">\n      <input (change)=\"updateTotal()\" [(ngModel)]=\"item.qt\" type=\"number\" class=\"form-control\">\n    </div>\n    <div id=\"xbutton\" class=\"col-md-2\">\n      <a class=\"text-danger\" (click)=\"removeItem(i)\"><strong>X</strong></a>\n    </div>\n  </div>\n</div>\n\n<div class=\"container row\" *ngIf=\"!cartProducts.length\">\n  <div class=\"col-md-4 offset-md-4\">No Item In Cart</div>\n</div>\n\n<div class=\"bill-container\">\n  <div class=\"col-md-4 offset-md-2\">\n    <button class=\"btn btn-success btn-lg pull-left\" (click)=\"payBill()\">Pay Bill</button>\n  </div>\n  <div class=\"col-md-4\">\n    <span *ngIf=\"!cartProducts.length\"><strong>0 Rs/-</strong></span>\n    <span style=\"color:red;\" *ngIf=\"cartProducts.length\"><strong>{{bill}} Rs/-</strong></span>    \n  </div>\n</div>\n<hr>\n\n"

/***/ }),

/***/ "../../../../../src/app/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CartComponent = (function () {
    function CartComponent() {
    }
    CartComponent.prototype.ngOnInit = function () {
        this.initiateData();
    };
    CartComponent.prototype.initiateData = function () {
        var data = localStorage.getItem('cart');
        if (data !== null) {
            this.cartProducts = JSON.parse(data);
            this.bill = 0;
            for (var i in this.cartProducts) {
                this.cartProducts[i]["qt"] = 1;
                this.bill = this.bill + this.cartProducts[i].price * this.cartProducts[i].qt;
            }
        }
        else {
            this.cartProducts = [];
        }
    };
    CartComponent.prototype.updateTotal = function () {
        this.bill = 0;
        for (var i in this.cartProducts) {
            this.bill = this.bill + this.cartProducts[i].price * this.cartProducts[i].qt;
        }
    };
    CartComponent.prototype.removeItem = function (id) {
        this.cartProducts.splice(id, 1);
        if (this.cartProducts.length) {
            localStorage.setItem('cart', JSON.stringify(this.cartProducts));
        }
        else {
            localStorage.setItem('cart', null);
        }
    };
    CartComponent.prototype.payBill = function () {
        if (this.cartProducts.length) {
            localStorage.removeItem('cart');
            this.initiateData();
            alert("Your bill is: " + this.bill);
        }
        else {
            alert("No items in cart");
        }
    };
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cart',
            template: __webpack_require__("../../../../../src/app/cart/cart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n.carousel-caption\n{\n  margin-top: 35px;\n}\n\n\n\n.img-fluid {\n  max-width: 35%;\n}\n\n.carousel-caption {\n  position: inherit;\n  color: #333;\n  text-align: left;\n  left: 5%;\n}\n\n.carousel-caption d-none d-md-block\n{\n position:fixed;\n}\n\n\n.example_b {\n  color: #fff !important;\n  text-transform: uppercase;\n  text-decoration: none;\n  background: #14c3de;\n  padding: 10px;\n  border-radius: 40px;\n  display: inline-block;\n  border: none;\n  transition: all 0.4s ease 0s;\n  }\n\n\n  .example_b:hover {\n    background: #2ab850;\n    text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);\n    transition: all 0.4s ease 0s;\n    }\n\n\n  .btq\n  {\n\n    position: fixed;\n  }\n\n\n\n\n\n  :host {\n    display: block;\n    margin-bottom: 10px;\n  }\n  \n  img {\n   width: 100%;\n  }\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <h1>Home</h1>\n  </div>\n</div>\n\n<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n    <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n  </ol>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img class=\"d-block w-100\" src=\"assets/cor1.jpg\">\n     </div>\n  <div class=\"carousel-item\">\n    <img class=\"d-block w-100\" src=\"assets/cor2.jpg\">\n   </div>\n  <div class=\"carousel-item\">\n    <img class=\"d-block w-100\" src=\"assets/cor3.jpg\">\n   </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#myCarousel\"\n   role=\"button\" data-slide=\"prev\">\n     <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#myCarousel\"\n   role=\"button\" data-slide=\"next\">\n     <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n<div class =\"btq\">        \n  <h3>Large Variety of Coffee Products</h3>\n  <button class=\"example_b\"  (click)=\"viewProducts()\">View Products</button>\n</div>\n<hr>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        jQuery('.carousel').carousel({
            interval: 2000
        });
    };
    HomeComponent.prototype.viewProducts = function () {
        this.router.navigate(['/products']);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/products/products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-image-style {\n  width: 40%;\n  display: block;\n  margin: 0 auto;\n  \n}\n.custom-image-style:hover { /* IE 9 */\n  -webkit-transform: scale(1.5); /* Safari 3-8 */\n  transform: scale(1.5);\n  \n}\n\n.product-desc-container {\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n\n.custom-products-cart-container {\n  padding-top: 20px;\n}\n\n.custom-products-cart-container ul ul {\n  width: 100%;\n  padding:  15%;\n}\n\n.product-cart-item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.product-cart-item-left {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.card {\n  margin-bottom: .75rem;\n}\n\n.card-block {\n  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);\n  padding: 1.25rem;\n  \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container row\">\n  <div class=\"col-md-2\">\n    <h1>Products</h1>\n  </div>\n  <div class=\"col-md-10 custom-products-cart-container\">\n    <div class=\"offset-md-8\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">\n            <span class=\"glyicon glyphicon-shopping-cart\">\n              Products Added In Cart:\n            </span>\n            <span class=\"caret\">{{cartProducts.length}}</span>\n          </a>\n          <ul class=\"dropdown-menu dropdown-cart\" role=\"menu\">\n            <li *ngFor=\"let item of cartProducts\">\n              <div class=\"item product-cart-item row\">\n                <div class=\"col-md-8\" *ngIf=\"item\">{{item.title}}</div>\n                <div class=\"col-md-4\" *ngIf=\"item\"><strong>Rs/-{{item.price}}</strong></div>\n              </div>\n            </li>\n            <hr>\n            <li><a class=\"btn btn-primary btn-block\" role=\"button\" (click)=\"goToCart()\">View Cart</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n<hr>\n<div class=\"container\">\n  <div class=\"row\">    \n      <div class=\"col-md-4 col-centered\" *ngFor=\"let product of products;let i=index\">\n        <div class=\"card card-block\">\n          <img [src]=\"product.img\" alt=\"\" class=\"custom-image-style\">\n          <div class=\"product-desc-container row\">\n            <div class=\"container\">\n              <p><strong>{{product.title}}: Rs/-{{product.price}}</strong></p>\n              <p>{{product.description}}</p>\n            </div>\n            <div class=\"offset-md-4 col-md-4\">\n              <button class=\"btn btn-primary btn-sm\" (click)=\"addToCart(i)\" [disabled]=\"product.isAdded===true\">Add To Cart</button>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsComponent = (function () {
    function ProductsComponent(router) {
        this.router = router;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var data = localStorage.getItem('cart');
        if (data !== null) {
            this.cartProducts = JSON.parse(data);
        }
        else {
            this.cartProducts = [];
        }
        this.cartProducts = JSON.parse(data);
        this.products = [
            {
                id: 1,
                title: "Mango Milkshake",
                description: "Discover delight in every sip with this divine,mango treat.",
                img: "assets/mango.jpg",
                price: 70,
            },
            {
                id: 2,
                title: "Assam Tea",
                description: " Served in a tea bag with either milk or lemon.",
                img: "assets/assamt.png",
                price: 30
            },
            {
                id: 3,
                title: "Café Americano",
                description: "A double shot of espresso topped with hot water",
                img: "assets/amre.png",
                price: 50
            },
            {
                id: 4,
                title: "Café Frappe",
                description: "The all-time favourite Cafe Frappe. Rich, creamy",
                img: "assets/frape.png",
                price: 65
            },
            {
                id: 5,
                title: "Café Latte",
                description: "A light coffee accompanied by a shot of Espresso ",
                img: "assets/Latte.png",
                price: 50
            },
            {
                id: 6,
                title: "Café Mocha",
                description: "A combination of rich espresso, with a sinful chocolate ",
                img: "assets/mocha.png",
                price: 40
            },
            {
                id: 7,
                title: "Classic Cappuccino",
                description: "A shot of espresso toppedsteamed and foamed milk. ",
                img: "assets/capp.png",
                price: 45
            },
            {
                id: 8,
                title: "Classic Lemonade",
                description: "Get refreshed! Introducing a lemonade with a touch of mint",
                img: "assets/lem.png",
                price: 45
            },
            {
                id: 9,
                title: "Strawberry Milkshake",
                description: "A classic shake with the punch of strawberrie",
                img: "assets/stw.jpg",
                price: 80
            },
            {
                id: 10,
                title: "Cocoa Cookie Milkshake",
                description: "Cookies, cocoa and everything else you need to chill out.",
                img: "assets/ccc.jpg",
                price: 80
            },
            {
                id: 11,
                title: "Cool Blue",
                description: "Cool Blue, a syrupy blue blend skating on crushed ice! Zap",
                img: "assets/cool.png",
                price: 55
            },
            {
                id: 12,
                title: "Crunchy Frappe",
                description: 'Experience a rich chocolaty meltdown loaded chocochip',
                img: "assets/cru.png",
                price: 75
            },
            {
                id: 13,
                title: "Masala Chai",
                description: "Rich, balanced and full of flavour. Cardamom, ginger, clove ",
                img: "assets/tea.png",
                price: 25
            },
            {
                id: 14,
                title: "Green Tea",
                description: "An aromatic tea that does wonders for your health.",
                img: "assets/ttt.png",
                price: 35
            },
            {
                id: 15,
                title: "Black Forest Cake",
                description: "Black forest cake with a sinful layer of rich chocolate mousse.",
                img: "assets/bcake.jpg",
                price: 450
            },
            {
                id: 16,
                title: "Chocolate Double scoop",
                description: "Luscious and tempting chocolate ice cream.",
                img: "assets/ice.jpg",
                price: 70
            },
            {
                id: 17,
                title: "Cocoa Éclair",
                description: "The original French dessert with choux pastry layered in rich molten chocolate.",
                img: "assets/eclar.jpg",
                price: 60
            },
            {
                id: 18,
                title: "Cocoa Fantasy Cake",
                description: "What's better than a regular chocolare cake? Sinful, rich and warm cocoa fantasy with extra chocolate sauce!",
                img: "assets/cfc.jpg",
                price: 400
            },
            {
                id: 19,
                title: "Crackling Brownie",
                description: "A Rich gooey classic American fudge brownie",
                img: "assets/brw.jpg",
                price: 80
            },
            {
                id: 20,
                title: "Fruit Trifle Cup",
                description: "Exotic cut fruit laden with creamy custard.",
                img: "assets/ftruf.jpg",
                price: 45
            },
            {
                id: 21,
                title: "Mocha Butterscotch cup",
                description: "The best melange of toffee and coffee all in one must have dessert cup.",
                img: "assets/cbc.jpg",
                price: 45
            },
            {
                id: 22,
                title: "Sizzle Dazzle Brownie",
                description: "Sizzling hot gooey choco brownie served with vanilla ice cream and choco sauce.",
                img: "assets/bice.jpg",
                price: 100
            },
            {
                id: 23,
                title: "Crispy Veg Wrap",
                description: "We made veggies taste good. You can thank us later.",
                img: "assets/wrap.jpg",
                price: 60
            },
            {
                id: 24,
                title: "Big Crunch Veg Classic Burger",
                description: "Flavourful veggie patty cooked to perfection. Then, stuffed between soft oatmeal buns with handpicked veggies",
                img: "assets/bur.jpg",
                price: 65
            },
            {
                id: 25,
                title: "Egg Wrap",
                description: "For the Desi at heart! Classic Indian egg bhurji.",
                img: "assets/ewrap.jpg",
                price: 80
            },
            {
                id: 26,
                title: "Garlic Bread",
                description: "Buttery rich goodness infused with garlic. You won't be able to resist it!",
                img: "assets/gb.jpg",
                price: 50
            },
            {
                id: 27,
                title: "Veg Samosa",
                description: "The perfect snack! Potatoes and pea cooked in traditional Indian spices and sealed fresh.",
                img: "assets/sam.jpg",
                price: 25
            },
            {
                id: 28,
                title: "Veg Cutlet",
                description: "Crispy, crunchy mixed vegetables and potato patty.",
                img: "assets/cut.jpg",
                price: 25
            },
            {
                id: 29,
                title: "Doughnut",
                description: "Exotic fruit Doughnut with creamy custard.",
                img: "assets/do.jpg",
                price: 45
            },
            {
                id: 30,
                title: "Cookies",
                description: "Nutty creamy choco chip cookies.You won't be able to resist it!",
                img: "assets/cook.jpg",
                price: 45
            }
        ];
    };
    ProductsComponent.prototype.addToCart = function (index) {
        var product = this.products[index];
        var cartData = [];
        var data = localStorage.getItem('cart');
        if (data !== null) 
        // tslint:disable-next-line:one-line
        {
            cartData = JSON.parse(data);
        }
        cartData.push(product);
        this.updateCartData(cartData);
        localStorage.setItem('cart', JSON.stringify(cartData));
        this.products[index].isAdded = true;
    };
    ProductsComponent.prototype.updateCartData = function (cartData) {
        this.cartProducts = cartData;
    };
    ProductsComponent.prototype.goToCart = function () {
        this.router.navigate(['/cart']);
    };
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-products',
            template: __webpack_require__("../../../../../src/app/products/products.component.html"),
            styles: [__webpack_require__("../../../../../src/app/products/products.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  sidebar works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map