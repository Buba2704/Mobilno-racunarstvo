import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EtnoseloDetaljiPageRoutingModule } from './etnoselo-detalji-routing.module';

import { EtnoseloDetaljiPage } from './etnoselo-detalji.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EtnoseloDetaljiPageRoutingModule
  ],
  declarations: [EtnoseloDetaljiPage]
})
export class EtnoseloDetaljiPageModule {}
