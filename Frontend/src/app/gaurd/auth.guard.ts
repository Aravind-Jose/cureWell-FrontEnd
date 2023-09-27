import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
};
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';



@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {

  }
  
  canActivate(): boolean {
    if(this.authService.checkToken()){
      return true;
    }else{
      this.router.navigateByUrl('login')
      return false;
    }

  }
};
