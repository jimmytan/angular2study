/**
 * Created by wenjuntan on 2016-12-28.
 */
import {Component} from "@angular/core";
@Component({
    selector: 'price-display',
    inputs: ['price'],
    template: `
        <div class="price-display">
            {{ price }}
</div>
`
})
export class PriceDisplay {
    price: Number;
}