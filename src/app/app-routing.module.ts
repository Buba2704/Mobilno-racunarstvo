import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'onama',
    pathMatch: 'full'
  },
  {
    path: 'etnosela',
    loadChildren: () => import('./etnosela/etnosela.module').then( m => m.EtnoselaPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'onama',
    loadChildren: () => import('./onama/onama.module').then( m => m.OnamaPageModule)
  },
  {
    path: 'log-in',
    loadChildren: () => import('./auth/log-in/log-in.module').then( m => m.LogInPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
