/**
 * Created by wenjuntan on 2016-12-29.
 */
import {Component} from "@angular/core";
@Component({
    selector: 'sku-form',
    template: `
        <div class="ui raised segment">
            <h2 class="ui header">Demo form:sku</h2>
            <form #f="ngForm" (ngSubmit)="onSubmit(f.value)"
            class="ui form">
                <div class="field">
                    <label for="skuInput">sku</label>
                    <input type="text" id="skuInput" placeholder="SKU" name="sku" ngModel/>
                    <input type="text" id="ttInput" placeholder="SKU" name="tt" ngModel/>
                    
                </div>
                <button type="submit" class="ui button">Submit</button>
</form>
</div>
`
})
export class DemoFormSku {
    onSubmit(form: any): void {
        console.log('submitted value:', form);
    }

}