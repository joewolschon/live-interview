import {AppModule} from './app/app.module';
import {bootstrapApplication} from "@angular/platform-browser";

bootstrapApplication(AppModule, {providers: []})
    .catch(err => console.error(err));
