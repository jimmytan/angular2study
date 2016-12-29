import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { InventoryApp }  from './inventory/app.component';
import { ProductImage} from './inventory/app.productImage.component';
import {ProductRow} from "./inventory/app.productRow.component";
import {ProductDepartment} from "./inventory/app.productDepartment.component";


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ InventoryApp, ProductImage,ProductRow, ProductDepartment ],
  bootstrap:    [ InventoryApp ]
})
export class AppModule { }
