import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OmiljeniDetaljiPage } from './omiljeni-detalji.page';

const routes: Routes = [
  {
    path: '',
    component: OmiljeniDetaljiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OmiljeniDetaljiPageRoutingModule {}
