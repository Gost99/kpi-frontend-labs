import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsListPageComponent } from './departments-list-page.component';

const routes: Routes = [
  {
    path: '', component: DepartmentsListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsListPageRoutingModule { }
