import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PretragaPage } from './pretraga.page';

const routes: Routes = [
  {
    path: '',
    component: PretragaPage
  },
  {
    path: ':etnoseloId',
    loadChildren: () => import('./etnoselo-detalji/etnoselo-detalji.module').then( m => m.EtnoseloDetaljiPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PretragaPageRoutingModule {}
