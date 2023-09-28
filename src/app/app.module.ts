import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PjNavigationComponent} from "./components/navigation/pj-navigation.component";
import {PjProcessFormComponent} from "./process/pj-process-form.component";

@NgModule({
    declarations: [
        AppComponent,
        PjNavigationComponent,
        PjProcessFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
