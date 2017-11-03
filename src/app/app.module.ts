import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { FirebaseProvider } from '../providers/firebase/firebase';

// Virve Liimatta 1601471
// Imported few modules and added them also to imports down below

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Added Firebase configurations

const firebaseConfig = {
  apiKey: "AIzaSyDyahr37b6vYrOHyAJ500fnFvhiWMcHoK4",
  authDomain: "resume-93bf4.firebaseapp.com",
  databaseURL: "https://resume-93bf4.firebaseio.com",
  projectId: "resume-93bf4",
  storageBucket: "resume-93bf4.appspot.com",
  messagingSenderId: "153963170027"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
