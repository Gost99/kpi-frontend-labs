import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../authentication/services/auth.guard';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' 
      },
      {
        path: 'home',
        loadChildren: () => import('../home/pages/home-page').then(m => m.HomePageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../account/pages/account-page').then(m => m.AccountPageModule),
      },
      {
        path: 'departments',
        loadChildren: () => import('../departments/pages/departments.module').then(m => m.DepartmentsModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
