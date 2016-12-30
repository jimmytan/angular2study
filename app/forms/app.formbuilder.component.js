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
 * Created by wenjuntan on 2016-12-30.
 */
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var FormSkuBuilder = (function () {
    function FormSkuBuilder(fb) {
        this.form = fb.group({ 'sku': ['abc'] });
        this.sku = this.form.controls['sku'];
        //this.sku.valueChanges.subscribe();
    }
    FormSkuBuilder.prototype.onSubmit = function (value) {
        console.log('submitted value: ', value);
    };
    ;
    FormSkuBuilder = __decorate([
        core_1.Component({
            selector: 'sku-formbuilder',
            template: "\n        <div class=\"ui raised segment\">\n            <h2 class=\"ui header\">Demo form:sku</h2>\n            <form [formGroup] = \"form\" (ngSubmit)=\"onSubmit(form.value)\" \n            class=\"ui form\">\n                <div class=\"field\">\n                    <label for=\"skuInput\">sku</label>\n                    <input type=\"text\" id=\"skuInput\" placeholder=\"SKU\" name=\"sku\" [formControl]=\"form.controls['sku']\"/>\n                    <input type=\"text\" id=\"ttInput\" placeholder=\"SKU\" name=\"tt\" />\n                    \n                </div>\n                <button type=\"submit\" class=\"ui button\">Submit</button>\n</form>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], FormSkuBuilder);
    return FormSkuBuilder;
}());
exports.FormSkuBuilder = FormSkuBuilder;
//# sourceMappingURL=app.formbuilder.component.js.map