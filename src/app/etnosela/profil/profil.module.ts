import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilPageRoutingModule } from './profil-routing.module';

import { ProfilPage } from './profil.page';
import {EtnoseloElementComponent} from "../etnoselo-element/etnoselo-element.component";
import {Ng2SearchPipeModule} from "ng2-search-filter";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ProfilPage, EtnoseloElementComponent]
})
export class ProfilPageModule {}
