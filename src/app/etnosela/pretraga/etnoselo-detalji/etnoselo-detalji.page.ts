import { Component, OnInit } from '@angular/core';
import {Etnoselo} from "../../etnoselo.model";
import {ActivatedRoute} from "@angular/router";
import {EtnoselaService} from "../../etnosela.service";
import {AlertController} from "@ionic/angular";



@Component({
  selector: 'app-etnoselo-detalji',
  templateUrl: './etnoselo-detalji.page.html',
  styleUrls: ['./etnoselo-detalji.page.scss'],
})
export class EtnoseloDetaljiPage implements OnInit {

  /*etnoselo: Etnoselo[] = {id: 'proba', naziv: 'Etno selo proba', opis: 'Etno selo u Srbiji proba',
    imageUrl: 'https://partizan.rs/wp-content/uploads/lejer-1200-x750-blanko-13.jpg',
  userId: '1234'};*/

  /*etnoselo: Etnoselo = {id: 'proba', naziv: 'Etno selo proba', opis: 'Etno selo u Srbiji proba',
    imageUrl: 'https://partizan.rs/wp-content/uploads/lejer-1200-x750-blanko-13.jpg',
    userId: '1234'};
   */
  /*etnoselo: Etnoselo = {id: '', naziv: '', opis: '',
    imageUrl: '',
    userId: ''};*/
  etnoselo: Etnoselo = {id: '', naziv: '', opis: '', slikaUrl: '', userId: ''};


  constructor(private route: ActivatedRoute, private esServis: EtnoselaService, private alertCtrl: AlertController) { }

  ngOnInit() {
   /* this.route.paramMap.subscribe(paramMap => {
       this.etnoselo = this.esServis.getEtnoselo(paramMap.get('etnoseloId'));
     });*/
    this.route.paramMap.subscribe(paramMap => {
      this.esServis.getEtnoselo(paramMap.get('etnoseloId')).subscribe((esData) => {
        this.etnoselo = esData;
      });
    });
  }



  openAlert(){

      let postoji: boolean;

    this.esServis.getPostojiOmiljeni(this.etnoselo.naziv).subscribe((p) => {
        postoji = p;
        console.log(postoji);

        if(!postoji) {
          this.esServis.addOmiljenoEtnoselo(this.etnoselo.naziv, this.etnoselo.opis, this.etnoselo.slikaUrl)
            .subscribe((etnosela) => {
              this.openAlertDodaj();
            });
        }
        else{
          this.openAlertPostoji();
        }


      });
  }


  private openAlertDodaj() {
    this.alertCtrl.create({
      header: 'Omiljena etno-sela',
      message: 'Izabrano etno-selo je dodato u vaša omiljena etno-sela',
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

  private openAlertPostoji() {
    this.alertCtrl.create({
      header: 'Omiljena etno-sela',
      message: 'Izabrano etno-selo već postoji u vaša omiljena etno-sela ',
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
