import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppLogoModule } from '@shared/layout/components/app-logo';
import { LogoutModule } from '../authentication/components/logout/logout.module';


@NgModule({
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatIconModule,
    AppLogoModule,
    MatToolbarModule,
    LogoutModule,
  ]
})
export class LayoutModule { }
