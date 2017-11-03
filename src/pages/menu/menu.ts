import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

/**
 * Virve Liimatta 1601471
 * Added modules ViewChild, Nav
 * Exported interface, which is needed to create menu. As well as page list.
 */

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage='TabsPage';
  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    { title: 'About', pageName: 'TabsPage', tabComponent: 'AboutPage', index: 0, icon: 'help-circle'},
    { title: 'Education', pageName: 'ExtraPage', icon: 'school'},
    { title: 'CV', pageName: 'TabsPage', tabComponent: 'CvPage', index: 1, icon: 'list-box'},
    { title: 'Projects', pageName: 'ProjectsPage', icon: 'attach'},
    { title: 'Contact', pageName: 'TabsPage', tabComponent: 'ContactPage', index: 2, icon: 'at'},
    { title: 'Log out', pageName: 'LogoutPage', icon: 'log-out'},
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

// function to open clicked menu item

  openPage(page: PageInterface){
    let params ={};

    if (page.index){
      params = {tabIndex: page.index};
    }
    if (this.nav.getActiveChildNav() && page.index != undefined){
      this.nav.getActiveChildNav().select(page.index);
    }
    else {
      this.nav.setRoot(page.pageName, params);
    }

  }

  // function to show which menu item is active at the moment

  isActive(page: PageInterface){
    let childNav = this.nav.getActiveChildNav();

    if (childNav){
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent){
        return 'primary';
      }
      return;
    }
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName){
      return 'primary';
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
