import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {SystemServiceProvider} from "../../providers/system-service/system-service";
import {User} from "../myprofile/user.model";
import {queryModel} from "./data.model";


/**
 * Generated class for the AdvancedSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-advanced-search',
  templateUrl: 'advanced-search.html',
})
export class AdvancedSearchPage {
  token : any ;
  alertmessage = '';
  userDetails: queryModel = {
    gender: '',
    race: 'string',
    username: '',
    email: 'string',
    position: '',
  };


  userData :User;
   Params= { gender: '',race:'',username:'', email:'' ,position:''};
  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams ,public alertCtrl: AlertController, public storage: Storage ,public Service: SystemServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdvancedSearchPage');
    this.getUserToken();
  }
  getUserToken(){
    this.storage.get('Token').then((token) => {

      this.token = token;

    });
  }
  displayUserDetails() {
    let loader = this.loadingCtrl.create({
      content: 'loading...',
      duration: 3000

    });
    this.userDetails.gender = this.Params.gender;

    loader.present().then(() => {
      this.Service.Filter(this.token,this.Params)
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

  showAlert() {
    let alert = this.alertCtrl.create({
      subTitle: this.alertmessage,
      buttons: ['OK']
    });
    alert.present();
  }



}
