import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, CanActivateChild } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  constructor(public router:Router){
    
  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(localStorage.getItem('currentUser') && JSON.parse(''+localStorage.getItem('currentUser')).role===route.data[0]){
        return true;
    }
    // this.router.navigate(['home']) ; 
    return false;
  }
  
}
