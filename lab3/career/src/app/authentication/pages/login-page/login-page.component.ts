import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Login } from '../../state/authentication.actions';
import * as fromAuth from '../../state/authentication.reducer';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor(
    private store: Store<fromAuth.State>,
    private router: Router
    ) {

  }
  
  public onLogin(): void {
    this.store.dispatch(new Login());
    this.router.navigateByUrl("/home");
  }
}