import {Component, OnDestroy, OnInit} from '@angular/core';
import {Etnoselo} from "../etnoselo.model";
import {Subscription} from "rxjs";
import {EtnoselaService} from "../etnosela.service";
import {map, switchMap, take, tap} from "rxjs/operators";

@Component({
  selector: 'app-omiljeni',
  templateUrl: './omiljeni.page.html',
  styleUrls: ['./omiljeni.page.scss'],
})
export class OmiljeniPage implements OnInit, OnDestroy {
  searchTerm: string;
  etnosela: Etnoselo[];
  private esSub: Subscription;


  constructor(private esServis: EtnoselaService) { }

  ngOnInit() {
    this.esSub = this.esServis.omiljena.subscribe((esData) => {
      this.etnosela = esData;
    });
  }
  ionViewWillEnter(){
    /*this.esServis.getOmiljenaEtnosela().subscribe((esData) => {
      //this.etnosela = esData;
    });*/

   this.esServis.getOmiljenaEtnoselaFilterId().subscribe((esData) => {
      //this.etnosela = esData;
    });

  }




  ngOnDestroy(){
    if(this.esSub){
      this.esSub.unsubscribe();
    }
  }

}
