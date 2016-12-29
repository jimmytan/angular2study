/**
 * Created by wenjuntan on 2016-12-27.
 */
import {Component} from "@angular/core";
import {Product} from "./product";
@Component({
    selector: 'product-image',
    inputs: ['product'],
    template: `
        <img class="product-image" [src]="product.imageUrl"/>
`
})
export class ProductImage {
    product: Product;
}