import {Component, OnDestroy, OnInit} from '@angular/core';
import {Etnoselo} from "../etnoselo.model";
import {EtnoselaService} from "../etnosela.service";
import {AlertController, ModalController} from "@ionic/angular";
import {EtnoseloModalComponent} from "../etnoselo-modal/etnoselo-modal.component";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-pretraga',
  templateUrl: './pretraga.page.html',
  styleUrls: ['./pretraga.page.scss'],
})
export class PretragaPage implements OnInit, OnDestroy {
  searchTerm: string;

  etnosela: Etnoselo[];
  private esSub: Subscription;

  constructor(private esServis: EtnoselaService, private modalCtrl: ModalController, private alertCtrl: AlertController) {
    //this.etnosela = this.esServis.etnosela;
  }


  ngOnInit() {
    this.esSub = this.esServis.etnosela.subscribe((esData) => {
      this.etnosela = esData;
    });
  }


  ionViewWillEnter(){
    this.esServis.getEtnosela().subscribe((esData) => {
      //this.etnosela = esData;
    });
  }



  ngOnDestroy(){
    if(this.esSub){
      this.esSub.unsubscribe();
    }
  }

  openModal() {
    this.modalCtrl.create({
      component: EtnoseloModalComponent
    }).then((modal) => {
      modal.present();
      return modal.onDidDismiss();
    }).then ((resultData) => {
      if (resultData.role === 'confirm') {
        console.log(resultData);
        let postoji: boolean;
        this.esServis.getPostojiEtnoselo(resultData.data.ESData.naziv).subscribe((p) => {
          postoji = p;
          console.log(postoji);
          if (!postoji) {
            this.esServis.addEtnoselo(resultData.data.ESData.naziv, resultData.data.ESData.opis, resultData.data.ESData.slikaUrl)
              .subscribe((etnosela) => {
                //console.log(esData);
                //this.etnosela = etnosela;
              });
          } else {
            this.openAlertPostoji();
          }
        });
      }
      });
    }

  private openAlertPostoji() {
    this.alertCtrl.create({
      header: 'OBAVEŠTENJE',
      message: 'Ne mozete uneti ovo etno-selo, jer etno-selo sa ovim nazivom već postoji u bazi',
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
