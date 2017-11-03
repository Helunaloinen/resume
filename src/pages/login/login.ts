import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController, Loading, NavParams } from 'ionic-angular';

import { MenuPage } from '../menu/menu';
import { AngularFireAuth } from 'angularfire2/auth';
/**
Virve Liimatta 1601471
Added ViewChild, AlertController, LoadingController, Loading, module
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  @ViewChild('email') email;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fire: AngularFireAuth, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
  }
/**
 * Adding function that shows message, if sign in fails 
 */

showAlert(title: string, text: string){
  let alert = this.alertCtrl.create({
    title: title,
    subTitle: text,
    buttons: ['OK']
  });
  alert.present();
}


/**
 * Adding function that will sign user with email and password
 * 
 */

  signInUser(){
    this.showLoading();
    this.fire.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
    .then( data =>{
      console.log('logged in ', this.fire.auth.currentUser.email);
      this.navCtrl.setRoot(MenuPage);
    })
    .catch( error => {
      this.showAlert('Login failed!', error.message);
    })
  }

/**
 * Adding function that shows that the app is loading
 * 
 */

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait, loading page...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
