import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MyprofilePage} from "../myprofile/myprofile";
import {DashBoardPage} from "../dash-board/dash-board";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tab1Root = DashBoardPage;
  tab2Root = MyprofilePage;
  constructor(public navCtrl: NavController) {

  }

}
