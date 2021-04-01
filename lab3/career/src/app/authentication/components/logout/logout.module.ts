import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from '../logout/logout.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [LogoutComponent],
  exports: [LogoutComponent],
  imports: [
    CommonModule,
    MatButtonModule,
  ]
})
export class LogoutModule { }
