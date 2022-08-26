import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EtnoselaService} from "../../etnosela.service";
import {Etnoselo} from "../../etnoselo.model";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-omiljeni-detalji',
  templateUrl: './omiljeni-detalji.page.html',
  styleUrls: ['./omiljeni-detalji.page.scss'],
})
export class OmiljeniDetaljiPage implements OnInit {
  etnoselo: Etnoselo = {id: '', naziv: '', opis: '',
    slikaUrl: '',
    userId: ''};

  constructor(private route: ActivatedRoute, private esServis: EtnoselaService, private alertCtrl: AlertController) { }

  ngOnInit() {
   this.route.paramMap.subscribe(paramMap => {
      this.esServis. getOmiljenoEtnoselo(paramMap.get('etnoseloId')).subscribe((esData) => {
        this.etnoselo = esData;
      });
    });
  }



  openAlert(){
    this.esServis.deleteOmiljenoEtnoselo(this.etnoselo.id)
      .subscribe((etnosela) => {
        this.openAlertDelete();

      });


  }

  private openAlertDelete() {
    this.alertCtrl.create({
      header: 'Omiljena etno-sela',
      message: 'Izabrano etno-selo je izbrisano iz omiljenih etno-sela',
      buttons: [
        {
          text: 'U redu',
          handler: () => {

          }
        }
      ]
    }).then((alert) => {
      alert.present();
    });
  }

}
