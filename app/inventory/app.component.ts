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
            
        </div>
`
})
class InventoryApp {
    product: Product;

    constructor(){
        this.product = new Product(
            'NICEHAT',
            'a nice black hat',
            '/resources/images/products/black-hat.jpg',
            ['men','accessories','hats'],
            29.99
        );
    }
}
