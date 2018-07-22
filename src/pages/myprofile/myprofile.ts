import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, ModalController, NavController, NavParams} from 'ionic-angular';
import {SystemServiceProvider} from "../../providers/system-service/system-service";
import {HomePage} from "../home/home";
import {User} from "./user.model";
import {LoginPage} from "../login/login";
import {DetailsPage} from "../details/details";
import {ExtraDetailsPage} from "../profile-details/extra-details";


/**
 * Generated class for the MyprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myprofile',
  templateUrl: 'myprofile.html',
})
export class MyprofilePage {
  alertmessage = '';
  userData :User;

  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams  , public Service: SystemServiceProvider,public alertCtrl: AlertController,public modalCtrl: ModalController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyprofilePage');
    this.displayUserDetails();
  }


  displayUserDetails() {
    let loader = this.loadingCtrl.create({
      content: 'loading...',
      duration: 3000

    });

    loader.present().then(() => {
      this.Service.getUserProfile()
        .subscribe(
          response => {

          this.userData = response





          },
          error => {
            if (error.status === 400) {

              this.alertmessage = " wrong username or password";
              this.showAlert();
            }
            if (error.status === 0) {
              this.alertmessage = "not internet connection or server is down";
              this.showAlert();
            }
          });
      loader.dismiss();
    });






  }
  openDetailsPage() {
    console.log(JSON.stringify(this.userData))
    let myModal = this.modalCtrl.create(DetailsPage,{ data: this.userData });
    myModal.present();
  }

  openProfilePage() {
    console.log(JSON.stringify(this.userData))
    let myModal = this.modalCtrl.create(ExtraDetailsPage,{ data: this.userData });
    myModal.present();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      subTitle: this.alertmessage,
      buttons: ['OK']
    });
    alert.present();
  }
}
