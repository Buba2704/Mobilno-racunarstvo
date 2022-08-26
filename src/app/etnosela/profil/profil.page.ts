import {Component, OnDestroy, OnInit} from '@angular/core';
import {Etnoselo} from "../etnoselo.model";
import {Subscription} from "rxjs";
import {EtnoselaService} from "../etnosela.service";
import {AlertController, ModalController} from "@ionic/angular";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit, OnDestroy {

  searchTerm: string;
  etnosela: Etnoselo[];
  userEmail: string;
  private esSub: Subscription;


  constructor(private esServis: EtnoselaService, private modalCtrl: ModalController, private alertCtrl: AlertController,
              private auth: AuthService) { }

  ngOnInit() {

    this.auth.userEmail.subscribe((email)=>{
      this.userEmail=email;
    });
    this.esSub = this.esServis.moja.subscribe((esData) => {
      this.etnosela = esData;
    });
  }

  ionViewWillEnter(){
    this.esServis.getMojaEtnosela().subscribe((esData) => {
      //this.etnosela = esData;
    });
  }

  ngOnDestroy(){
    if(this.esSub){
      this.esSub.unsubscribe();
    }
  }

}
