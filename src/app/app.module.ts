import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {IonicStorageModule} from "@ionic/storage";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPageModule} from "../pages/login/login.module";
import { SystemServiceProvider } from '../providers/system-service/system-service';
import { HttpClientModule } from '@angular/common/http';
import {DashBoardPageModule} from "../pages/dash-board/dash-board.module";
import {MyprofilePageModule} from "../pages/myprofile/myprofile.module";
import {DetailsPageModule} from "../pages/details/details.module";
import {ExtraDetailsPageModule} from "../pages/profile-details/extra-details.module";
import {ChartsModule} from "ng2-charts";
import {SearchPageModule} from "../pages/search/search.module";
import {SearchPipe} from "../pipes/search/search";
import {SortPipe} from "../pipes/sort/sort";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
  ],
  imports: [
    BrowserModule,
    LoginPageModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    DashBoardPageModule,
    MyprofilePageModule,
    ExtraDetailsPageModule,
    SearchPageModule,
    ChartsModule,
    DetailsPageModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Storage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SystemServiceProvider
  ]
})
export class AppModule {}
