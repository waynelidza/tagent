import {Component, ViewChild} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import { Chart } from 'chart.js';
import {SystemServiceProvider} from "../../providers/system-service/system-service";
import {Storage} from "@ionic/storage";
/**
 * Generated class for the DashBoardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dash-board',
  templateUrl: 'dash-board.html',
})
export class DashBoardPage {
 @ViewChild('barCanvas') barCanvas;
  @ViewChild('barCanvas2') barCanvas2;
  @ViewChild('barCanvas3') barCanvas3;
    @ViewChild('doughnutCanvas') doughnutCanvas;
    @ViewChild('lineCanvas') lineCanvas;
    alertmessage = '';
    barChart: any;
    doughnutChart: any;
    lineChart: any;
    data : any;
    totalnumberEmployee :any;
    token : any ;
    constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams  , public Service: SystemServiceProvider,public alertCtrl: AlertController ,public storage: Storage) {

    }

  ionViewDidEnter() {
    this.getUserToken();
 this.displayEmployeeDetails();


    }



  showAlert() {
    let alert = this.alertCtrl.create({
      subTitle: this.alertmessage,
      buttons: ['OK']
    });
    alert.present();
  }


  displayEmployeeDetails() {
    let loader = this.loadingCtrl.create({
      content: 'loading...',
      duration: 3000

    });

    loader.present().then(() => {
      this.Service.getEmployeeDeatils(this.token)
        .subscribe(
          response => {

            this.data = response
           if(this.data){
              this.displayGraphData(this.data);
             this.displaySecondCanva(this.data);
             this.displayBirthDayCanva(this.data);
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
   displayGraphData(data :any){

      let total = data.length;


     var males = data.filter(function (el) {
       return (el.gender === "M");
     });
     let totalMales = males.length;

     var femmales = data.filter(function (el) {
       return (el.gender === "F");
     });
     let totalFemales = femmales.length;

     var blacks = data.filter(function (el) {
       return (el.race === "B");
     });
     let totalBlacks = blacks.length;

     var coloureds = data.filter(function (el) {
       return (el.race === "C");
     });
     let totalColoureds = coloureds.length;


     var Asians = data.filter(function (el) {
       return (el.race === "I");
     });
     let totalAsians = Asians.length;


     var white = data.filter(function (el) {
       return (el.race === "W");
     });
     let totalwhite = white.length;

     var noone = data.filter(function (el) {
       return (el.race === "N");
     });
     let totalNooneDominant = noone.length;



     this.barChart = new Chart(this.barCanvas.nativeElement, {

       type: 'bar',
       data: {
         labels: [" Total", "Males", "Females"],
         datasets: [{
           label: '# of people',
           data: [total, totalMales, totalFemales],
           backgroundColor: [
             'rgba(255, 99, 132, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(255, 206, 86, 0.2)',
           ],
           borderColor: [
             'rgba(255,99,132,1)',
             'rgba(54, 162, 235, 1)',
             'rgba(255, 206, 86, 1)',
             'rgba(75, 192, 192, 1)',
           ],
           borderWidth: 1
         }]
       },
       options: {
         scales: {
           yAxes: [{
             ticks: {
               beginAtZero:true
             }
           }]
         }
       }

     });

     this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

       type: 'doughnut',
       data: {
         labels: ["Black", "Coloured", "Indian or Asians", "White", "None Dominant"],
         datasets: [{
           label: '# of Votes',
           data: [totalBlacks, totalColoureds, totalAsians, totalwhite, totalNooneDominant],
           backgroundColor: [
             'rgba(255, 99, 132, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(255, 206, 86, 0.2)',
             'rgba(75, 192, 192, 0.2)',
             'rgba(153, 102, 255, 0.2)',
             'rgba(255, 159, 64, 0.2)'
           ],
           hoverBackgroundColor: [
             "#FF6384",
             "#36A2EB",
             "#FFCE56",
             "#FF6384",
             "#36A2EB",
             "#FFCE56"
           ]
         }]
       }

     });



   }


   displaySecondCanva(data :any){

     var juniors = data.filter(function (el) {
       return (el.position.level === "Junior");
     });
     let totalJuniors = juniors.length;

     var seniors = data.filter(function (el) {
       return (el.position.level === "Senior");
     });
     let totalSeniors = seniors.length;

     var managers = data.filter(function (el) {
       return (el.position.name === "Project Manager");
     });
     let totalManagers = managers.length;

     var BackEnddevelopers = data.filter(function (el) {
       return (el.position.name === "Back-end Developer");

     });

     var FrontEndevelopers = data.filter(function (el) {
       return (el.position.name === "Front-end Developer");
     });

     var birthDays = data.filter(function (el) {

       return (el.days_to_birthday<=30);
     });
     let totalBirthDays = birthDays.length;


     let totalFrontEndDevelopers = FrontEndevelopers.length;

     let totalBackEndDevelopers = BackEnddevelopers.length;


     this.barChart = new Chart(this.barCanvas2.nativeElement, {

       type: 'bar',
       data: {
         labels: ["Juniors ", "Seniors", " Project Managers","Front-end Developers","Back-end Developers"],
         datasets: [{
           label: '# of people',
           data: [totalJuniors,totalSeniors,totalManagers,totalFrontEndDevelopers,totalBackEndDevelopers],
           backgroundColor: [
             'rgba(255, 99, 132, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(255, 206, 86, 0.2)',
           ],
           borderColor: [
             'rgba(255,99,132,1)',
             'rgba(54, 162, 235, 1)',
             'rgba(255, 206, 86, 1)',
             'rgba(75, 192, 192, 1)',
           ],
           borderWidth: 1
         }]
       },
       options: {
         scales: {
           yAxes: [{
             ticks: {
               beginAtZero:true
             }
           }]
         }
       }

     });


   }

  displayBirthDayCanva(data :any){
    var birthDays = data.filter(function (el) {

      return (el.days_to_birthday<=30);
    });
    let totalBirthDays = birthDays.length;


    this.barChart = new Chart(this.barCanvas3.nativeElement, {

      type: 'bar',
      data: {
        labels: [" Total"],
        datasets: [{
          label: '# of people',
          data: [totalBirthDays],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }

    });

  }

  getUserToken(){
    this.storage.get('Token').then((token) => {

      this.token = token;

    });
  }

  }

