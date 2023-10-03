import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpParams,
    HttpRequest,
    HttpUrlEncodingCodec
} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

/**
 * Adds auth headers required to use the PayJunction API.
 */
@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    constructor() {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders: {
                Accept: 'application/json',
                Authorization: `Basic `,
                'X-PJ-Application-Key': ''
            },
            body: new HttpParams({
                fromObject: request.body,
                encoder: new HttpUrlEncodingCodec(),
            })
        });

        return next.handle(request);
    }
}
