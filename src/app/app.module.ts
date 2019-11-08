import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NoteService } from './note.service';

import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule} from 'angularfire2/database'

import {AngularFireAuthModule} from 'angularfire2/auth'
//será criado a seguir, é nossa classe que centraliza o acesso ao serviço de autenticação
import {AuthService} from './auth_service'

const firebaseConfig = {
  apiKey: "AIzaSyD2EuR1e4jH9pwLbiT2JEOhta_j5ojxA-g",
  authDomain: "fatec-ipi-ionic-notes.firebaseapp.com",
  databaseURL: "https://fatec-ipi-ionic-notes.firebaseio.com",
  projectId: "fatec-ipi-ionic-notes",
  storageBucket: "fatec-ipi-ionic-notes.appspot.com",
  messagingSenderId: "999097797866",
  appId: "1:999097797866:web:7c2ab8e8ebeaeb98a0db93"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NoteService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
