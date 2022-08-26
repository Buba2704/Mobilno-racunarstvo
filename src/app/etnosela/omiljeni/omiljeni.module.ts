import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OmiljeniPageRoutingModule } from './omiljeni-routing.module';

import { OmiljeniPage } from './omiljeni.page';
import {EtnoseloElementComponent} from "../etnoselo-element/etnoselo-element.component";
import {EtnoseloModalComponent} from "../etnoselo-modal/etnoselo-modal.component";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {OmiljeniElementComponent} from "../omiljeni-element/omiljeni-element.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OmiljeniPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [OmiljeniPage, OmiljeniElementComponent]
  //entryComponents:[OmiljeniElementComponent]
})
export class OmiljeniPageModule {}
