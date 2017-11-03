import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Virve Liimatta 1601471
 * Added logout function
 */

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private fire: AngularFireAuth) {
  }

  public logout(){
    this.fire.auth.signOut().then(() => {
      this.navCtrl.setRoot('LoginPage')
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
  }

}
