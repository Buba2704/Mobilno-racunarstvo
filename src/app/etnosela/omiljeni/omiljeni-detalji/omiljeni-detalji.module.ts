import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OmiljeniDetaljiPageRoutingModule } from './omiljeni-detalji-routing.module';

import { OmiljeniDetaljiPage } from './omiljeni-detalji.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OmiljeniDetaljiPageRoutingModule
  ],
  declarations: [OmiljeniDetaljiPage]
})
export class OmiljeniDetaljiPageModule {}
