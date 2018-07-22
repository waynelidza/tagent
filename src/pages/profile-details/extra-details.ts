import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {User} from "../myprofile/user.model";

/**
 * Generated class for the ProfileDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-details',
  templateUrl: 'extra-details.html',
})
export class ExtraDetailsPage {

  userData :User;
  constructor(public navCtrl: NavController, public navParams: NavParams ,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileDetailsPage');
    this.userData = this.navParams.get('data');
  }



  closeModal() {
    this.viewCtrl.dismiss();
  }


}
