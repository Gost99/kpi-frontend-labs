import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListItemComponent } from './department-list-item.component';
import { ElevationDirectiveModule } from '@shared/directives/elevation';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [DepartmentListItemComponent],
  exports: [DepartmentListItemComponent],
  imports: [
    CommonModule,
    ElevationDirectiveModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class DepartmentListItemModule { }
