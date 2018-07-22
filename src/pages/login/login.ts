import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { SystemServiceProvider } from '../../providers/system-service/system-service';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  login= { password: '',username:''};

  errorcount=0;
  admin=0
  varcounterrorLogin =0;
  user;any;
  userGcmID;
  alertmessage = '';
  data :any
  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams , public Service: SystemServiceProvider , public alertCtrl: AlertController,public storage: Storage ) {
  }

  ionViewDidLoad() {

  } Login() {
    this.varcounterrorLogin = 0;
    if (this.login.username === '') {
      this.varcounterrorLogin++;

    }
    if (this.login.password === '') {
      this.varcounterrorLogin++;

    }
    if (this.varcounterrorLogin>0) {
      this.alertmessage = "  Username and password cannot be blank";
      this.showAlert()
    }
    else {
      let loader = this.loadingCtrl.create({
        content: 'please wait...',
      });

      loader.present().then(() => {
        this.Service.login(this.login.username, this.login.password)
          .subscribe(
            response => {
            
                    if(response.token){
                      this.storage.set('Token',response.token)
                    this.getUserDetails();
                     

                    }else{
                      this.alertmessage = " wrong Username or password";
                      this.showAlert();
                    }
            
                // this.storage.set('userID', data._id);
                // this.storage.set('cellphonenumber', data.cellphonenumber);
                // this.storage.set('username', data.name);


            

          
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
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      subTitle: this.alertmessage,
      buttons: ['OK']
    });
    alert.present();
  }

  setToken(token :string){

    this.storage.set('token',token)
  }

getUserDetails(){
  let loader = this.loadingCtrl.create({
    content: 'please wait...',
  });


  // loader.present().then(() => {
    this.Service.getUserDetails()
      .subscribe(
        response => {
          console.log(response);
                if(response){
                  this.navCtrl.push(HomePage);
                  console.log(response);

                }else{
                  this.alertmessage = " wrong Username or password";
                  this.showAlert();
                }
        
            // this.storage.set('userID', data._id);
            // this.storage.set('cellphonenumber', data.cellphonenumber);
            // this.storage.set('username', data.name);


        

      
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

}
