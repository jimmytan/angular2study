/**
 * Created by wenjuntan on 2016-12-30.
 */
import {Component} from "@angular/core";
import {FormBuilder, FormGroup, AbstractControl} from "@angular/forms";
@Component({
    selector: 'sku-formbuilder',
    template: `
        <div class="ui raised segment">
            <h2 class="ui header">Demo form:sku</h2>
            <form [formGroup] = "form" (ngSubmit)="onSubmit(form.value)" 
            class="ui form">
                <div class="field">
                    <label for="skuInput">sku</label>
                    <input type="text" id="skuInput" placeholder="SKU" name="sku" [formControl]="form.controls['sku']"/>
                    <input type="text" id="ttInput" placeholder="SKU" name="tt" />
                    
                </div>
                <button type="submit" class="ui button">Submit</button>
</form>
</div>
`
})
export class FormSkuBuilder {
    form: FormGroup;
    sku: AbstractControl;
    constructor(fb: FormBuilder){
        this.form = fb.group({'sku':['abc']});
        this.sku = this.form.controls['sku'];
        //this.sku.valueChanges.subscribe();
    }

    onSubmit(value: string){
        console.log('submitted value: ', value);
    };


}