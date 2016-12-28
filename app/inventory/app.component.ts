/**
 *
 * Created by wenjuntan on 2016-12-22.
 */

import {Component} from "@angular/core";
import {Product} from "./product";
@Component({
    selector: 'inventory-app',
    template: `
        <div class="inventory-app">
            <h1>{{product.name}}</h1>
            <span>{{product.sku}}</span>
        </div>
`
})
export class InventoryApp {
    product: Product[];

    constructor(){
        this.product = [new Product(
            'NICEHAT',
            'a nice black hat',
            '/resources/images/products/black-hat.jpg',
            ['men','accessories','hats'],
            29.99
        ),
        new Product(
            'myshoes',
            'black running shoses',
            '/resources/images/products/black-shoes.jpg',
            ['men','shoes','running shoes'],
            109.99
        )];
    }
}
