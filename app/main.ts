import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import {FormsDemoAppModule} from "./forms/app.module";

platformBrowserDynamic().bootstrapModule(FormsDemoAppModule);
