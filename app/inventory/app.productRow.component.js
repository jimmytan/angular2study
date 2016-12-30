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
/**
 * Created by wenjuntan on 2016-12-27.
 */
var core_1 = require("@angular/core");
var ProductRow = (function () {
    function ProductRow() {
    }
    ProductRow = __decorate([
        core_1.Component({
            selector: 'product-row',
            inputs: ['product'],
            host: { 'class': 'item' },
            template: "\n        <product-image [product] = \"product\"></product-image>\n        <div class=\"content\">\n            <div class=\"header\">{{product.name}}</div>\n            <div class=\"meto\">\n                <div class=\"product-sku\"> skue #{{product.sku}}</div>\n                \n            </div>\n            <div class=\"description\">\n                \n            </div>\n        </div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], ProductRow);
    return ProductRow;
}());
exports.ProductRow = ProductRow;
//# sourceMappingURL=app.productRow.component.js.map