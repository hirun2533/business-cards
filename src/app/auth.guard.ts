import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/internal/Observable';
import { take, map, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    activeRoute: ActivatedRouteSnapshot,stateRoute: RouterStateSnapshot): Observable<boolean> {
      return this.authService.user.pipe(take(1),map((user) => !!user), tap((loggedIn) => {
          if (!loggedIn) {this.router.navigate(['/login']);
          }
        }),
      );
    }
}

