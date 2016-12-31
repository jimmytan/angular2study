import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {LocationStrategy} from "@angular/common";
import {RoutesDemoApp} from "./app.routeDemo.component";
/**
 * Created by wenjuntan on 2016-12-30.
 */
const routes: Routes =[];

@NgModule({
    declarations:[RoutesDemoApp],
    imports: [BrowserModule, RouterModule.forRoot(routes)],
    bootstrap:[RoutesDemoApp],
    providers: [
        {provide: LocationStrategy, useClass:HashChangeEvent}
    ]
})
class RoutesDemoModule{}
