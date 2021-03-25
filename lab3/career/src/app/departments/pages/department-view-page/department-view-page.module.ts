import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentViewPageRoutingModule } from './department-view-page-routing.module';
import { DepartmentViewPageComponent } from './department-view-page.component';


@NgModule({
  declarations: [DepartmentViewPageComponent],
  exports: [DepartmentViewPageComponent],
  imports: [
    CommonModule,
    DepartmentViewPageRoutingModule
  ]
})
export class DepartmentViewPageModule { }
