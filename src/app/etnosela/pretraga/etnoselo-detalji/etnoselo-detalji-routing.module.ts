import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EtnoseloDetaljiPage } from './etnoselo-detalji.page';

const routes: Routes = [
  {
    path: '',
    component: EtnoseloDetaljiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtnoseloDetaljiPageRoutingModule {}
