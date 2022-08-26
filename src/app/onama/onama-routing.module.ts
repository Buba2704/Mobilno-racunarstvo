import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnamaPage } from './onama.page';

const routes: Routes = [
  {
    path: '',
    component: OnamaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnamaPageRoutingModule {}
