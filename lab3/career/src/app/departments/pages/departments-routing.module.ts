import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./departments-list-page').then(m => m.DepartmentsListPageModule)
  },
  { 
    path: ':id', loadChildren: () => import('./department-view-page').then(m => m.DepartmentViewPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
