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
   Url = '';
  counter=0;
  counterboth=0;
  userData :User;
   Params= { gender: '',race:'' };
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
    this.counter = 0;

    if (this.Params.gender === '') {
         this.Params.gender ='';

    }
    if (this.Params.race === '') {
        this.Params.race = ''

    }

    if (this.Params.gender) {
      this.counter++;

    }

    if (this.Params.race) {
      this.counter++;

    }





  console.log(this.counter);

    loader.present().then(() => {
      this.Service.Filter(this.token,this.Params,this.counter)
        .subscribe(
          response => {

            this.userData = response

            if(response.length===0){
             this.alertmessage='Results not Found'
              this.showAlert();
            }

          },
          error => {

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
