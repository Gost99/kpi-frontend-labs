import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Logout } from '../authentication/state/authentication.actions';

import * as fromAuth from '../authentication/state/authentication.reducer';

@Component({
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private store: Store<fromAuth.State>,
    private router: Router 
    ) { }

  ngOnInit(): void {
  }

  public toggleSidenavState(): void {
    document.getElementById("sidenav").classList.toggle("sidenav-closed");
    document.getElementById("sidenav").classList.toggle("sidenav-opened");
    document.getElementById("layout").classList.toggle("sidenav-closed-layout");
    document.getElementById("layout").classList.toggle("sidenav-opened-layout");
    document.getElementById("sidenavToggleIcon").classList.toggle("change");
  }

  public onLogout():void {
    this.store.dispatch(new Logout());
    this.router.navigateByUrl('/login');
  
  }
}
