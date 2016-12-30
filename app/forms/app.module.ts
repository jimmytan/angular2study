/**
 * Created by wenjuntan on 2016-12-29.
 */

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {DemoFormSku} from "./app.main.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormSkuBuilder} from "./app.formbuilder.component";
@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [FormSkuBuilder],

    bootstrap:[FormSkuBuilder]

})
export class FormsDemoAppModule {

}