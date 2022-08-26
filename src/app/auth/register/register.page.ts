import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {AlertController, LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  constructor(private router: Router, private authService: AuthService, private loadingCtrl: LoadingController,
   private alertCtrl: AlertController) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      ime: new FormControl(null, Validators.required),
      prezime: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  onRegister() {
    //this.router.navigateByUrl('/etnosela/pretraga');
    console.log(this.registerForm);

    this.loadingCtrl.create({message: ' Registracija...'}).then((loadingEl) => {
      loadingEl.present();

      this.authService.register(this.registerForm.value).subscribe(resData => {
        console.log('Registracija uspela');
        this.openAlert();
        console.log(resData);

        loadingEl.dismiss();
        this.router.navigateByUrl('/etnosela/pretraga');
      });
    });
  }

  openAlert(){

    this.alertCtrl.create({
      //header: 'REGISTRACIJA',
      message: 'Uspešno ste se registrovali',
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
