import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginPageComponent } from './login-page.component';
import { LoginModule } from '../../components/login/login.module';

import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { AppLogoModule } from '@shared/layout/components/app-logo';
import { StoreModule } from '@ngrx/store';

import * as fromAuth from '../../state/authentication.reducer'; // remove this line

@NgModule({
  declarations: [LoginPageComponent],
  exports: [LoginPageComponent],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    LoginModule,
    MatCardModule,
    MatDividerModule,
    AppLogoModule,
  ]
})
export class LoginPageModule { }
