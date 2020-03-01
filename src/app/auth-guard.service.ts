import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";

import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { AuthService_2 } from './auth.service';

@Injectable()
export class AuthGuard_2 implements CanActivate {
  
  constructor(private authService: AuthService_2,
              private router: Router){}


  canAcivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated()
      .then(
        (authenticated: boolean) => {
          if (authenticated) {
            return true;
          } else {
            this.router.navigate(['assets']);
          }
        }
      );
  }

}
