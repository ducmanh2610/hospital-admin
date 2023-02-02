import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticateService } from '../authenticate/authenticate.service';
import { LocalService } from '../local-storage/local.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService implements CanActivate {

  constructor(private router: Router, private localService: LocalService) {
  }

  canActivate(): boolean {
    if (localStorage.hasOwnProperty('token')) {
      const token = this.localService.getData('token');
      const headers = new HttpHeaders();
      headers.set('Authorization', 'Bearer ' + token);
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  }
}
