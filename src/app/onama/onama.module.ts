import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnamaPageRoutingModule } from './onama-routing.module';

import { OnamaPage } from './onama.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnamaPageRoutingModule
  ],
  declarations: [OnamaPage]
})
export class OnamaPageModule {}
