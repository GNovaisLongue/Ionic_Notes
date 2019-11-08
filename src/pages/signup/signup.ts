import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AuthService } from '../../app/auth_service';
import { HomePage } from '../home/home';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  username = "";
  password = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private authService: AuthService, private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {
      //
    }

  onSignUp(){
    const loading = this.loadingCtrl.create({
      content: "Signing you up..."
    });
    loading.present();
    this.authService.signUp(this.username, this.password).
    then((data) => {
      loading.dismiss();
      this.navCtrl.setRoot(HomePage);
    }).
    catch( (error) => {
      loading.dismiss();
      const alert = this.alertCtrl.create({
        title: "Signup failed",
        message: error.message,
        buttons: ["OK"]
      });
      alert.present();
    });
  }//onSignUp

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
