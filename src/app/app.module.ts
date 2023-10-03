import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PjNavigationComponent} from "./components/navigation/pj-navigation.component";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {BasicAuthInterceptor} from "./services/basic-auth-interceptor/basic-auth.interceptor";
import {PjCustomersAddFormComponent} from "./customers/add/pj-customers-add-form.component";

@NgModule({
    declarations: [
        AppComponent,
        PjNavigationComponent,
        PjCustomersAddFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
