import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EtnoselaPageRoutingModule } from './etnosela-routing.module';

import { EtnoselaPage } from './etnosela.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EtnoselaPageRoutingModule
  ],
  declarations: [EtnoselaPage]
})
export class EtnoselaPageModule {}
