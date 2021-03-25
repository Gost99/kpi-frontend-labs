import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsListPageRoutingModule } from './departments-list-page-routing.module';
import { DepartmentsListPageComponent } from './departments-list-page.component';


@NgModule({
  declarations: [DepartmentsListPageComponent],
  exports: [DepartmentsListPageComponent],
  imports: [
    CommonModule,
    DepartmentsListPageRoutingModule
  ]
})
export class DepartmentsListPageModule { }
