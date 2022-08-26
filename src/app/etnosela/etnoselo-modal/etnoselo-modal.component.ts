import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-etnoselo-modal',
  templateUrl: './etnoselo-modal.component.html',
  styleUrls: ['./etnoselo-modal.component.scss'],
})
export class EtnoseloModalComponent implements OnInit {

  @ViewChild('f', {static:true}) form: NgForm;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onCancel(){
    this,this.modalCtrl.dismiss();
  }

  dodajSelo(){
    if(!this.form.valid){
      return;
    }
    this.modalCtrl.dismiss({
     ESData:
        {
          naziv: this.form.value.naziv,
          opis: this.form.value.opis,
          slikaUrl: this.form.value.slikaUrl,
        }
    }, 'confirm');

  }

}
