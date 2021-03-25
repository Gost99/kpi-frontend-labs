import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsListPageRoutingModule } from './departments-list-page-routing.module';
import { DepartmentsListPageComponent } from './departments-list-page.component';
import { DepartmentListItemModule } from '../../components/department-list-item';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [DepartmentsListPageComponent],
  exports: [DepartmentsListPageComponent],
  imports: [
    CommonModule,
    DepartmentsListPageRoutingModule,
    DepartmentListItemModule,
    MatButtonModule,
  ]
})
export class DepartmentsListPageModule { }
