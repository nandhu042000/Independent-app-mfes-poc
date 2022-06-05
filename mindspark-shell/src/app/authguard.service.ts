import { Injectable } from '@angular/core';
import {CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
RouterStateSnapshot,
Router
} from "@angular/router"
import {Observable} from "rxjs"



@Injectable({
  providedIn: 'root'
})
export class AuthGaurd implements CanActivate, CanActivateChild {
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  | Observable<boolean>| Promise<boolean> {
    
    if(localStorage.getItem('auth') === 'true'){
        return true
    }
    else{
        this.router.navigate(["/login"]);
            return false
    }
    
}
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>{
    return this.canActivate(route, state)
  }

}
