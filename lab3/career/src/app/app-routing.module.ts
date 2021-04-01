import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '@shared/page-not-found';
import { AuthGuard } from './authentication/services/auth.guard';


const routes: Routes = [
  { path: '', 
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),
    canActivate: [AuthGuard]
  },
  { path: 'login', loadChildren: () => import('./authentication/pages/login-page/login-page.module').then(m => m.LoginPageModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
