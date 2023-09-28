import {getTestBed, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {RouterOutlet} from "@angular/router";
import {By} from "@angular/platform-browser";
import {AppModule} from "./app.module";

describe('AppComponent test', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [RouterTestingModule, AppModule]
    }));

    it('should have correct navigation links', () => {

    });

    it('should have router outlet', () => {
        const fixture = TestBed.createComponent(AppComponent);

        expect(fixture.debugElement.query(By.directive(RouterOutlet)))
            .toBeTruthy();
    });

});
