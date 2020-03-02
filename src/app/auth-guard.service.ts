import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";

import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { AuthService_2 } from './auth.service';


// CanActivateChild is needed in case there are children components
// it can be used to prevent visualising assets id when not logged in
@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(private authService: AuthService_2,
              private router: Router){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated()
      .then(
        (authenticated: boolean) => {
          if (authenticated) {
            return true;
          } else {
            this.router.navigate(['/']);
          }
        }
      );
  }

}
