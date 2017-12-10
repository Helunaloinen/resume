import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Virve Liimatta 1601471
 * Added pages that are in tabs and code that shows the current tab
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root="AboutPage";
  tab2Root="ExtraPage";
  tab3Root="CvPage";
  tab4Root="ProjectsPage";
  tab5Root="ContactPage";
  tab6Root="LogoutPage";
  myIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
