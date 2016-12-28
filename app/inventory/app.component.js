/**
 *
 * Created by wenjuntan on 2016-12-22.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var product_1 = require("./product");
var InventoryApp = (function () {
    function InventoryApp() {
        this.product = [new product_1.Product('NICEHAT', 'a nice black hat', '/resources/images/products/black-hat.jpg', ['men', 'accessories', 'hats'], 29.99),
            new product_1.Product('myshoes', 'black running shoses', '/resources/images/products/black-shoes.jpg', ['men', 'shoes', 'running shoes'], 109.99)];
    }
    InventoryApp = __decorate([
        core_1.Component({
            selector: 'inventory-app',
            template: "\n        <div class=\"inventory-app\">\n            <h1>{{product.name}}</h1>\n            <span>{{product.sku}}</span>\n        </div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], InventoryApp);
    return InventoryApp;
}());
exports.InventoryApp = InventoryApp;
//# sourceMappingURL=app.component.js.map