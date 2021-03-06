import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MyprofilePage} from "../myprofile/myprofile";
import {DashBoardPage} from "../dash-board/dash-board";
import {SearchPage} from "../search/search";
import {AdvancedSearchPage} from "../advanced-search/advanced-search";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tab1Root = DashBoardPage;
  tab2Root = MyprofilePage;
  tab3Root = SearchPage;
  tab4Root = AdvancedSearchPage;
  constructor(public navCtrl: NavController) {

  }

}
