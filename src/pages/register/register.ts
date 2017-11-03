import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Loading, LoadingController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Added modules ViewChild, AlertController, Loading, LoadingController and AngularFireAuth.
 * 
 */



@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  loading: Loading;
  createSuccess = false;

  @ViewChild('email') email;
  @ViewChild('password') password;

  constructor(private alertCtrl: AlertController, private loadingCtrl: LoadingController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  // Adding function to show alert box if the login was successful or failed

  showAlert(title: string, text: string){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'Ok',
          handler: data => {
            if(this.createSuccess) {
              this.navCtrl.push('LoginPage');
            }
          }
        }
      ]
    });
    alert.present();
  }

  // doing the registeration

  registerUser(){
    this.fire.auth.createUserWithEmailAndPassword(this.email.value, this.password.value)
    .then(data =>{
      console.log('got data ', data);
      this.showAlert('Success!', 'You are now registered! Please log in.');
      this.navCtrl.push('LoginPage');
    })
    .catch(error => {
      console.log('got an error', error);
      this.showAlert('Error!', error.message);
    });
    
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait, loading page...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

}
