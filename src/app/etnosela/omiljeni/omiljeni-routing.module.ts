import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OmiljeniPage } from './omiljeni.page';

const routes: Routes = [
  {
    path: '',
    component: OmiljeniPage
  },
  {
    path: ':etnoseloId',
    loadChildren: () => import('./omiljeni-detalji/omiljeni-detalji.module').then( m => m.OmiljeniDetaljiPageModule)
  }
  /*/{
    path: 'omiljeni-detalji',
    loadChildren: () => import('./omiljeni-detalji/omiljeni-detalji.module').then( m => m.OmiljeniDetaljiPageModule)
  },*/
  /*{
    path: ':etnoseloId',
    loadChildren: () => import('./omiljeni-detalji/omiljeni-detalji.module').then( m => m.OmiljeniDetaljiPageModule)
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OmiljeniPageRoutingModule {}
