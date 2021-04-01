import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {  map, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as fromAuth from '../state/authentication.reducer';
import { selectIsLoggedIn } from 'src/app/state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store<fromAuth.State>,
    private router: Router
  ) {}

  canActivate() {
    return this.checkStoreAuthentication().pipe(
      map(storeAuth => {
        if (storeAuth) {
          // check on api
          return true;
        }
        this.router.navigate(['/login']);
        return false;
      })
    );
  }

  checkStoreAuthentication() {
    return this.store.select(selectIsLoggedIn).pipe(take(1));
  }
}
