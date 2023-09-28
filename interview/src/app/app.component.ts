import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {PjNavigationComponent} from "./components/navigation/pj-navigation.component";
import {PjProcessFormComponent} from "./process/pj-process-form.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
        RouterOutlet,
        PjNavigationComponent,
        PjProcessFormComponent,
    ]
})
export class AppComponent {

}
