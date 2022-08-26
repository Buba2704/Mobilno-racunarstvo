import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PretragaPageRoutingModule } from './pretraga-routing.module';

import { PretragaPage } from './pretraga.page';
import {EtnoseloElementComponent} from "../etnoselo-element/etnoselo-element.component";
import {EtnoseloModalComponent} from "../etnoselo-modal/etnoselo-modal.component";
import {Ng2SearchPipeModule} from "ng2-search-filter";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PretragaPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [PretragaPage, EtnoseloElementComponent,EtnoseloModalComponent ],
  entryComponents:[EtnoseloModalComponent]

})
export class PretragaPageModule {}
