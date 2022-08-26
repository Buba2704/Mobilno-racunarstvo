import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {AlertController, LoadingController} from "@ionic/angular";
import {error} from "protractor";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  constructor(private authServis: AuthService, private router: Router, private loadingCtrl: LoadingController
    , private alertCtrl: AlertController) {}

  ngOnInit() {
  }

  onLogIn(logInForm: NgForm) {
    this.loadingCtrl
      .create({message: 'Log In...'})
      .then((loadingEl) => {
        loadingEl.present();
        // this.isLoading = true;
        // this.showLoading();
        console.log(logInForm.value);
        //console.log(form);
        if (logInForm.valid) {
          this.authServis.logIn(logInForm.value).subscribe(resData => {
              this.router.navigateByUrl('/etnosela/pretraga');
              // this.isLoading=false;
              loadingEl.dismiss();
            },
            errRes => {
              loadingEl.dismiss();
              // this.isLoading=false;
              let message;
              const code = errRes.error.error.message;
              if (code === 'EMAIL_NOT_FOUND') {
                message = 'Pogrešno ste uneli email adresu.';
              } else if (code === 'INVALID_PASSWORD') {
                message = 'Pogrešno ste uneli lozinku';
              }
              this.alertCtrl.create({
                header: 'Neuspešno prijavljivanje',
                message,
                buttons: ['U redu']
              }).then((alert)=>{
                alert.present();
              });
              logInForm.reset();
            });
        }
      });


  }
}
