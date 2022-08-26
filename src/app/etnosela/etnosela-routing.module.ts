import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EtnoselaPage } from './etnosela.page';


const routes: Routes = [
    {
      path: '',
      redirectTo: '/etnosela/pretraga',
      pathMatch: 'full'
    },



  {
    path: 'pretraga',
    loadChildren: () => import('./pretraga/pretraga.module').then( m => m.PretragaPageModule)
  },
  {
    path: 'omiljeni',
    loadChildren: () => import('./omiljeni/omiljeni.module').then(m => m.OmiljeniPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtnoselaPageRoutingModule {}
