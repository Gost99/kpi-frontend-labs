import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentViewPageComponent } from './department-view-page.component';

const routes: Routes = [
  {
    path: '', component: DepartmentViewPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentViewPageRoutingModule { }
