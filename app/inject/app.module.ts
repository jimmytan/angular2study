/**
 * Created by wenjuntan on 2016-12-31.
 */
import {NgModule} from "@angular/core";
import {DiSampleApp} from "./app.injectDemo.component";
import {BrowserModule} from "@angular/platform-browser";
import {ApiService} from "./ApiService";
import {ViewPortService} from "./ViewPortService";
@NgModule({
    declarations: [DiSampleApp],
    imports: [BrowserModule],
    bootstrap: [DiSampleApp],
    providers: [
        ApiService,
        ViewPortService,
        {provide: 'ApiServiceAlias', useExisting: ApiService},
        {
            provide: 'SizeService',
            useFactory: (viewport: any) => {
                return viewport.determineService();
            },
            deps: [ViewPortService]
        }
    ]

})
export class DiSampleAppModule {
    
}