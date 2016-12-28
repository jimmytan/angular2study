/**
 * Created by wenjuntan on 2016-12-27.
 */
import {Component} from "@angular/core";
import {Product} from "./product";
@Component({
    selector: 'product-row',
    inputs: ['product'],
    host: {'class': 'item'},
    template: `
        <product-image [product] = "product"></product-image>
        <div class="content">
            <div class="header">{{product.name}}</div>
            <div class="meto">
                <div class="product-sku"> skue #{{product.sku}}</div>
                
            </div>
            <div class="description">
                
            </div>
        </div>
`
})
export class ProductRow{
    product: Product;

}
