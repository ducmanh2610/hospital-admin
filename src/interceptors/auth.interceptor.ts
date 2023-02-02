import { Injectable } from "@angular/core";
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { LocalService } from "src/services/local-storage/local.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private localService: LocalService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.hasOwnProperty('token')) {
            const token = this.localService.getData('token');
            const authRequest = request = request.clone({
                setHeaders: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json; charset=utf-8',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    "Access-Control-Allow-Credentials": "true",
                    'Access-Control-Allow-Methods': ["GET", "POST", "PUT", "OPTIONS", "HEAD"],
                    'Access-Control-Allow-Headers': 'Content-Type, Accept, Authorization, Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Allow-Headers'
                }
            });
            return next.handle(authRequest);
        }

        return next.handle(request);
    }
}