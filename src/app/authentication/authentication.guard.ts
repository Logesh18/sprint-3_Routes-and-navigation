import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, CanActivateChild } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivateChild {
  constructor(public router:Router){
    
  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(localStorage.getItem('currentUser')){
        return true;
    } 
    return false;
  }
  
}
