import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * imported register and login pages for button links
 */

import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  /**
   * Function that fire when buttons are pressed
   */

  public createAccount(){
    this.navCtrl.push('RegisterPage');
  }

  public doLogin(){
    this.navCtrl.push('LoginPage');
  }

}
